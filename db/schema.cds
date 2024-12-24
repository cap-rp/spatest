namespace qa.qelng;

using {managed} from '@sap/cds/common';

@bpa
entity RootEntity : managed {

    key ID               : UUID @Core.Computed;
        @rkp name        : localized String;
        @rkp description : localized String;
        attachments      : Composition of many ChildL1Entity
                               on attachments.rootEntity = $self;
}

entity ChildL1Entity : managed {

    key ID          : UUID @Core.Computed;
        name        : localized String;
        description : localized String;
        rootEntity  : Association to RootEntity;
}
