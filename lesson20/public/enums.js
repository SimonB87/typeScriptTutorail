"use strict";
console.log("Enums");
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const docOne = {
    uid: 10,
    resourceType: ResourceType.BOOK,
    data: "Name of the wind."
};
const docTwo = {
    uid: 20,
    resourceType: ResourceType.PERSON,
    data: "Jack Lonndonn",
};
console.log(docOne, docTwo);
