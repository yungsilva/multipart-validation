import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

export default class FilesController {
  public async store({ request }: HttpContextContract) {
    const validationOptions = {
      extnames: ["pdf"],
      size: "1mb",
    };

    request.multipart.onFile("file", validationOptions, async (file) => {
      // upload to s3 if there are no validation errors
      // ...
      // ...
      console.log(file.filename);
    });

    await request.multipart.process();
  }
}
