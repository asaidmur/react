#!/usr/bin/env groovy

node ('java_ec2_small') {

  echo("Building project $JOB_NAME")
  echo("Building branch $BRANCH_NAME")

  lock("healthdash_frontend") {
    timeout(20) {
      timestamps {

        currentBuild.displayName = "${BUILD_NUMBER}"
        currentBuild.result = "SUCCESS"  // Set this as default is null

        try {
          stage("Checkout") {
            cleanWs notFailBuild: true
            checkout scm
            // I am copying these from engine
            // Due to 'https://issues.jenkins-ci.org/browse/JENKINS-26100' GIT_COMMIT is not available!
            env.GIT_COMMIT = sh (script: 'git rev-parse HEAD', returnStdout: true)
            env.BUILD_TIMESTAMP = new Date().format("yyyyMMddHHmmss")
          } // stage checkout

          withCredentials([[$class: 'UsernamePasswordMultiBinding', credentialsId: 'aws-dev', usernameVariable: 'AWS_ACCESS_KEY_ID', passwordVariable: 'AWS_SECRET_ACCESS_KEY']]) {
            withEnv(['AWSAccount=125950476760',
                     'AWSRegion=us-east-1',
                     'ECRRepo=healthdash/frontend']) {

              stage('Initialize') {
                sh('$(aws ecr get-login --region ${AWSRegion} --registry-ids ${AWSAccount} --no-include-email)')
                dockerCleanup()
                sh('npm run clean')
              } // stage Initialize

              stage('Build') {
                // If healthdash implements any self aware versioning, insert here
                // At a minimum, we will add a tracking file to the docker container
                sh('echo HealthDash-Frontend_${BRANCH_NAME}-${BUILD_ID} > version.txt')
                sh('npm install')
                sh('npm run build')
              } // stage Build

              //stage('Unit Test') {
                // No unit tests at this time
              //} // stage Test - unsure how much testing actually occurs

              stage('Docker Image') {
                sh('docker build . -t ${AWSAccount}.dkr.ecr.${AWSRegion}.amazonaws.com/${ECRRepo}:${BRANCH_NAME}-${BUILD_ID}')
              } // stage Docker Image

              stage('Verify') {
                sh('docker image list')
                //sh('docker run -d --name udm.service -p 8080:8080 --mount type=bind,source=$(pwd)/qa_rest/resources/cfg_mock_env.yaml,target=/usr/local/tomcat/conf/env.yaml --env CATALINA_OPTS="-Dconfig.env=/usr/local/tomcat/conf/env.yaml" --env LOGDIR="/var/log" ${AWSAccount}.dkr.ecr.${AWSRegion}.amazonaws.com/udm/${ECRRepo}:${BRANCH_NAME}-${BUILD_ID}')
                //sh('sleep 5')
                //sh('if [ $(docker inspect -f {{.State.Running}} udm.service) = "false" ] ; then \
                //    echo "Container did not start up." && \
                //    exit 1 ; fi')
              } // stage Verify

              if("${BRANCH_NAME}" == 'master' || "${BRANCH_NAME}" == "weekly" || "${JOB_NAME}".contains('PR-') ) {
                echo("These steps are only run on master branch")

                stage('Push Docker Images') {
                  sh('docker push ${AWSAccount}.dkr.ecr.${AWSRegion}.amazonaws.com/${ECRRepo}:${BRANCH_NAME}-${BUILD_ID}')
                }
              } // Master, weekly or PR
              else {
                echo("Feature Branch - skipping upload stage")
              } // Not Master, Weekly or PR

              if("${BRANCH_NAME}" == 'master' || "${BRANCH_NAME}" == "weekly" ) {
                stage('Promote to healthdash') {
                  env.BOOTSTRAP_LEEROY = "125950476760.dkr.ecr.us-east-1.amazonaws.com/stytch/leeroy:stable"
                  def leeroyCmd = 'docker run  -v /var/run/docker.sock:/var/run/docker.sock -e AWS_DEFAULT_REGION="us-east-1" -e AWS_ACCESS_KEY_ID=${AWS_ACCESS_KEY_ID} -e AWS_SECRET_ACCESS_KEY=${AWS_SECRET_ACCESS_KEY} --rm ${BOOTSTRAP_LEEROY}'
                  sh("${leeroyCmd} setapp -p main -t healthdash -r docker-healthdash --ecr ${AWSAccount}.dkr.ecr.${AWSRegion}.amazonaws.com/${ECRRepo} -v ${BRANCH_NAME}-${BUILD_ID}")
                }

              } // master or weekly
              else {
                echo("Feature Branch - skipping promote stage")
              } // Not Master or Weekly

              stage('Cleanup') {
                dockerCleanup()
                sh('npm run clean')
                cleanWs notFailBuild: true
              } // stage Cleanup

            } // withEnv
          } // withCredentials

        } catch (e) {
          currentBuild.result = "FAILURE"
          throw e
        } finally {
          echo("junit test results output placeholder")
	  if (currentBuild.result != "SUCCESS") {
            slackSend (channel: "#yvr_udm_alerts", teamDomain: "calabrio", color: "danger", message: currentBuild.result + "  '${JOB_NAME} [" + currentBuild.displayName + "]' (${BUILD_URL})")
          }
        } // try catch
      } // timestamps
    } // timeout
  } // lock
} // node

def dockerCleanup() {
  sh('docker rm -f -v $(docker ps -a -q) || true')
  sh("docker container prune -f && docker image prune -f && docker volume prune -f")
} // dockerCleanup
