
# Lambda S3 Bucket loggers

Upload to the AWS lambda
aws lambda update-function-code   --function-name arn:aws:lambda:ap-southeast-2:779846806102:function:myfirstlambda-node   --zip-file fileb://function.zip

Create first the ZIP file (Windows)
Compress-Archive -Path index.js -DestinationPath function.zip -Force
