using {qa.qelng as my} from '../db/schema';

service SPAService @(requires: 'authenticated-user') {
   
    type TaskCollection {
        instanceId : String;
        status     : String;
    }

    function getTaskInstances()       returns array of TaskCollection;
    function getV1WorkflowInstances() returns array of String;

    @odata.draft.enabled
    entity RootEntity as projection on my.RootEntity;

    entity ChildL1Entity as projection on my.ChildL1Entity;
}
