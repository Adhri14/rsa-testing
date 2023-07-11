const crypto = require("crypto");

const algorithm = "SHA512";

crypto.generateKeyPair(
    "rsa",
    {
        modulusLength: 4096,
        publicKeyEncoding: {
            type: "pkcs1",
            format: "pem",
        },
        privateKeyEncoding: {
            type: "pkcs1",
            format: "pem",
        },
    },
    (err, publicKey, privateKey) => {
        console.log(privateKey);
        console.log(publicKey);
        // const message = "Testing signature";
        // const signature = crypto
        //     .createSign(algorithm)
        //     .update(message)
        //     .sign(privateKey, "base64");

        // const isVerified = crypto
        //     .createVerify(algorithm)
        //     .update(message)
        //     .verify(publicKey, signature, "base64");
        // console.log(signature);
        // console.log(isVerified);
    }
);

// const algorithm = "SHA256";
const PUBLIC_KEY = `-----BEGIN PRIVATE KEY-----\nMIIEwAIBADANBgkqhkiG9w0BAQEFAASCBKowggSmAgEAAoIBAQC7YNnAr1J0+9lOwQr9i/mj2R5FbpVmw3LX8ZIdkSjw0o4feDcNNO9/iIyonj3798roMiG6v2zhouUY+YzoX1XlopJTyvBEe4Yhqh0TPFTGJ6Qj5iRgWC8IwxrfeOOR0jEAl+TsBSs8Jh5vB34XaOkOC/2IX5AxyBdxKeA7gUjuoGQn7xv9//JCH+oVdr3iAWjkj8fYnrPVHvE+Wubs1PXruDxd2S0gHaOdye0i2zLlDyppWaPpi+Vv41rkFTbjbBQSCwB8OoE8fTFvTezJ98epOpn68qdM8UIGM6ApTdtqVNGOEfDi9wt2tQaDXPTEv5QiQSwjuo2M3U3ZAN0OP+pfAgMBAAECggEBAIm3IfOLJ7hRDaLjIJe+0+iHf8caAnY3ueVaZ8CRWpy8s7YPXa64NDnweyjGvNm+ggPsLHwbiwO+/FBBwT1cLD6NIKyzH6nFe4ysgZgMpGXK5sl3sU6aIV94Pfz21ZLsABXmjVqmZeNcRMvnntXHxloLl/gt/EWKQShr1aEGYTr3pvTyIIuWm/+uspuI3g/2nPL/4uIV4gV62OvQXSci8UG8BdqnkK7/scA/w1/ki0ZTh5ifTq4T5ouLVHpEakAGkLgV3eJqZseiaZzlMwaVYUyoNpOdVBrwstDO34UnF65zGeb31InS05qxG6e+5c8GqSmhZs/okKLZeDsFj4a54mkCgYEA4Q8/vp0xIzImNX3R8H9SBdB8X99xR4969lT7bFfp6L4fvQfRFxAO4tltOfU/k6Fn9StAN52WwqSi/OTEzgswzfYhh2drqxR8kmlx7v4FaBwXYnFnaSwj15YSzLUm/dJIJXHcrVdgKVuNZxJFbiNv4oeGgkvXwz09hjGAlkT3uj0CgYEA1SNydvXCwyUdORW28EyxquUGPe2DOaVvmwSJHZBiVJRUgb7SdScjUqC75r/5SOIBLZPobz00rqK+DBDb5ROlqvBSZhRHv4fhk2yct/dTCO9lSNUrV9m9GxcMPWerWB/vauQyRNavqKOlknVYnSON6IbE2CZeQExe8vOjJkuL7MsCgYEAgcmrdx9rkOKAymROx6SFBrleoGNZDm2d+aS0gZyJViEeaIKzf9tQ2l2M8dmO2nJAY1CX7frBUGplW/YJ0ND/Sidg2pc3ridYV47bl3mCYLGigrDnc+1ylgcDvG3TmJjF5mItYwF6gR89Am21AHkLMtX5KfbW7M7KRjMR9pa7TfkCgYEAouRna+Fhy1DHJ8SfvsFum6RTg+rM+rakOD5cKJsbe3atq0dSgzS5O0IauT0I4RnROqsq3jFR3RIF2yTbWhUM7TqkTt27A/dugARnNfYwoMiNiP9aE9cWPuj7csaTXlNx4Cis/o1xTJpdRTSn19i/cPHm6SdRqyRzAI0RqIfeVccCgYEAyLGewvMhZDavCcGIb+L8TS1q/G8wx0KyeYoLfCPuWT9nXgckA4vGDW9axR/0DxmKvdx6ZA8SBjyTOgSPu9gQcEV9AzfOrXQ1njzNH3nqFa7h8Meh4fzOLIWyNYRmQ5r3H6jaeG2lOZo7ysMV4mVlEcu2UtaxHbNAM1HYjRQ1aw8=\n-----END PRIVATE KEY-----`;
// // const data = "Testing data signature";
const signature =
    "OvqglecqkK2Pk0XYcdsiRiBJq9DP1BlAIPEd4Nbi14ft6k74WM6UMy9MPMvq/RoDlnPjG+erAWD9oorwKrWysfyQCdohRtBuiyMQHyiIR3jLHU6Se5oMfh0jl0kjZlUWiyIfcKVxcvQqy1TzWOqjBBxhSQ7Z0BU4uo3NFFcY9MauCx24S/gzZJbdVsABYvnCpsPzzwxImBf0CAJm4tC9INHCrDoYnnQfaPyorDtdUBh8u2wRtrm/SLmUaoSqeduMfZtNzwRYYnIANZcBu7IZD3WAWSLTZp87lk8GLowdiblcjyMJffEb6w3MLhLd2FdCfmhM1w9KXRm54Ueo47KrGA==";

// const publicKey = crypto.createPublicKey(PUBLIC_KEY);
// publicKey.export({ format: "pem", type: "pkcs1" });

// console.log(publicKey);

const isVerified = crypto.privateDecrypt(PUBLIC_KEY, Buffer.from(signature));

console.log(isVerified);

// const privateKey = `-----BEGIN RSA PRIVATE KEY-----
// MIIBCgKCAQEAunI5zk4XUQm6wUdQIvd11glnxIdvd/iQUBiUPEVrqFCz7swCJi5n\nc96ofHd/7x25ung56dsIIm8HM8xn/4R/EYc1f3M+FTQ7Jns9X6B4pV/q0CMCG4z/\n18QAe3kO9FxA2m/q1moeady55rb4eH4nTURq0V4gXfMm3O5MOmBYf11kioldlWcN\nu6xn6JL8SGzbB5X0QzHgCJ7RwegyoIMbJTa8zANQFAzT1CbEkbtfnPBeFK9rdZ+K\nZSjWyxAsUckVvmosBTQs0z4Y53OUQ0/dHg4BcPIPMdoY+QE/xG2N5Y1hMekWr4j8\nk2XvAvZKOrXZkKA+gYDAgOm8tnuB+eojpQIDAQAB
// -----END RSA PRIVATE KEY-----`;

// const message = JSON.stringify({
//     client_approval_id: "63ed7e0737abdaafa3b60ab1",
//     approval_note: "Vbhhhh",
//     latitude: -6.3025395,
//     longitude: 106.8232061,
// });
// const signature = crypto
//     .createSign(algorithm)
//     .update(message)
//     .sign(privateKey, "base64");

// console.log(signature);
