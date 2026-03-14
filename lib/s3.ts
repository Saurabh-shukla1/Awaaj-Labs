import { DeleteObjectCommand, GetObjectCommand, PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { env } from "./env";

import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: "ap-south-1",
  credentials: {
    accessKeyId: env.S3_ACCESS_KEY_ID,
    secretAccessKey: env.S3_SECRET_ACCESS_KEY,
  },
});


type UploadAudioOptions = {
    buffer: Buffer;
    key: string;
    contentType?: string;
}



/* 
upload audio to R2 with the given buffer and key. The content type defaults to "audio/wav" but can be overridden if needed.
*/
export async function uploadAudio({
    buffer,
    key,
    contentType = "audio/wav",
} : UploadAudioOptions) : Promise<void>{
    await s3.send(
        new PutObjectCommand({
            Bucket: env.S3_BUCKET_NAME,
            Key: key,
            Body: buffer,
            ContentType: contentType,
        })
    )
}

/* 
delete audio from R2 with the given key.
*/
export async function deleteAudio(key: string):Promise<void> {
    await s3.send(
        new DeleteObjectCommand({
            Bucket: env.S3_BUCKET_NAME,
            Key: key,
        })
    )
}


/* 
get a signed URL for the audio with the given key. The URL will expire in 1 hour (3600 seconds).
*/
export async function getSignedAudioUrl(key: string): Promise<string> {
    const command = new GetObjectCommand({
        Bucket: env.S3_BUCKET_NAME,
        Key: key,
    })

    return getSignedUrl(s3, command, { expiresIn: 3600 });
}