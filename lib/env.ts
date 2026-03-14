import {createEnv} from '@t3-oss/env-nextjs'
import {z} from 'zod'

export const env = createEnv({
    server: {
        DATABASE_URL: z.string().min(1),
        S3_ACCOUNT_ID: z.string().min(1),
        S3_ACCESS_KEY_ID: z.string().min(1),
        S3_SECRET_ACCESS_KEY: z.string().min(1),
        S3_BUCKET_NAME: z.string().min(1),
    },
    experimental__runtimeEnv: {},
    skipValidation: !!process.env.SKIP_ENV_VALIDATION,
})