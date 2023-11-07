type Data = {
  body: string;
};

export default async function handler(
  input:string,
  url:string
) {
  var axios = require("axios");
  var data = JSON.stringify({
    images: [
      {
        format: "pdf",
        name: "medium",
        data: input,
        url: url,
      },
    ],
    lang: "ko",
    requestId: "string",
    resultType: "string",
    timestamp: new Date().getTime(),
    version: "V1",
  });

  var config = {
    method: "post",
    url: "https://e12jmcc18h.apigw.ntruss.com/custom/v1/18663/af20371580e216df3ed4b5cecde7d99a097764d29425c34551bd4f3d6d577bd6/general",
    headers: {
      "X-OCR-SECRET": process.env.NAVER_OCR_AUTH,
      "Content-Type": "application/json",
    },
    body: {
      type: "Json",
      payload: data,
    },
  };

  axios(config)
    .then(function (response: any) {
      return response;
    })
    .catch(function (error: Error) {
      console.log(error);
    });
}
