const cds = require("@sap/cds")

module.exports = class SPAService extends cds.ApplicationService {
  async init() {

    // const wf = await cds.connect.to("Workflow");
    // const getTaskInstances = async function (Request: Request) {
    //   const { taskApi } = wfApi();
    //   const jwt = retrieveJwt((Request as any).req);
    //   const resultPromise = await taskApi
    //     .requestBuilder()
    //     .getAll()
    //     .setBasePath("/public/workflow/odata/v1/tcm")
    //     .execute({ destinationName: "sap_process_automation_service_user_access", jwt: jwt });
    //   return resultPromise;
    // };
    // this.on("getTaskInstances", async (request: any) => {
    //   return await getTaskInstances(request);
    // });
    // this.on("getV1WorkflowInstances", async (request: any) => {
    //   // const jwt = retrieveJwt((Request as any).req);
    //   let tx = wf.tx();
    //   let response = '';
    //   try {
    //     response = await tx.get("/v1/workflow-instances");
    //     await tx.commit();
    //     return response;
    //   } catch (e) {
    //     console.log(e)

    //   }
    // });

    await super.init();
  }
};
