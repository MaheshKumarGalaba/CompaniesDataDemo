pipeline {
    agent any

    tools {
        nodejs "Node"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    credentialsId: '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',
                    url: 'https://github.com/MaheshKumarGalaba/CompaniesDataDemo'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install --force'
            }
        }

        stage('Build React App') {
            steps {
                bat """
                set CI=false
                npm run build
                """
            }
        }

        stage('Deploy to IIS (D:\\build)') {
            steps {
                bat """
                echo Deleting old files...
                rmdir /S /Q "D:\\build"

                echo Recreating folder...
                mkdir "D:\\build"

                echo Copying new build to IIS folder...
                xcopy /E /I /Y build "D:\\build"
                """
            }
        }
    }
}
