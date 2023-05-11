import { S3Client, ListBucketsCommand } from "@aws-sdk/client-s3"

console.log('Bonjour')

const main = async () => {
    const client = new S3Client({ region: "ap-south-1" })
    
    const command = new ListBucketsCommand({})
    const response = await client.send(command);
    
    console.info(response.Buckets)
}

main()
