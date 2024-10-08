/* tslint:disable:max-line-length */
export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "Path Example App",
            "formList": [
                {
                    "id": "PersonForm",
                    "title": "Person",
                    "url": "/person",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id":   "company",
                            "type": "autocomplete",
                            "name": "Company",
                            "wordSearchEnabled": true,
                            "defaultKey": "companyKey",
                            "form": "CompanyForm",
                            "url": "/company",
                            "width": 2
                        },
                        {
                            "id": "evtBirth",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "attachments",
                            "name": "Files",
                            "type": "fileUpload",
                            "url": "/upload",
                            "multiple": true,
                            "acceptedFileTypes": [".pdf", ".doc", ".docx", ".txt", ".jpg", ".jpeg", ".png", ".zip", ".exe"],
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "CompanyForm",
                    "title": "Company",
                    "url": "/company",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "CompanyName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "city",
                            "type": "text",
                            "name": "City",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "companyRating",
                            "type": "RadioGroupField",
                            "name": "Rating",
                            "alignment": "horizontal",
                            "width": 2,
                            "radios": [{
                                type: "radio",
                                name: "A-Rating",
                                key: 0
                            }, {
                                type: "radio",
                                name: "B-Rating",
                                key: 1
                            }, {
                                type: "radio",
                                name: "C-Rating",
                                key: 2
                            }, {
                                type: "radio",
                                name: "D-Rating",
                                key: 3
                            }
                            ]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "InlineTestForm",
                    "title": "Company",
                    "url": "/company",
                    "borderStyle": "None",
                    "headerVisible": false,
                    "footerVisible": false,
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "ProgressBarField",
                            "value": 70,
                            "width": 2,
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "CompanyName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "city",
                            "type": "text",
                            "name": "City",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "FieldListTestForm",
                    "title": "Company",
                    "formFieldList": [
                        {
                            "id": "fieldList",
                            "type": "fieldList",
                            "name": "FieldList",
                            "url": "/dynamicComponentsForm/field",
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        }
                    ]
                },
                {
                    "id": "ProjectForm",
                    "title": "Project",
                    "url": "/project",
                    "urlDefaults": true,
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "ProjectName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id":   "company",
                            "type": "autocomplete",
                            "name": "Company",
                            "wordSearchEnabled": true,
                            "defaultKey": "companyKey",
                            "form": "CompanyForm",
                            "url": "/company",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "evtStart",
                            "type": "date",
                            "name": "StartDate",
                            "width": 1
                        },
                        {
                            "id": "evtEnd",
                            "type": "date",
                            "name": "EndDate",
                            "width": 1
                        },
                        {
                            "id": "projectPriority",
                            "type": "RadioGroupField",
                            "name": "Priority",
                            "alignment": "vertical",
                            "width": 2,
                            "radios": [{
                                type: "radio",
                                name: "Low",
                                key: 0
                            }, {
                                type: "radio",
                                name: "Medium",
                                key: 1
                            }, {
                                type: "radio",
                                name: "High",
                                key: 2
                            }
                            ]
                        },
                        {
                            "id": "projectType",
                            "type": "CheckboxGroupField",
                            "name": "Type",
                            "width": 2,
                            "data": [{
                                name: "Product",
                                key: "Product"
                            }, {
                                name: "Service",
                                key: "Service"
                            }
                            ]
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "HobbyForm",
                    "title": "Hobby",
                    "url": "/hobby",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "translation",
                            "name": "HobbyName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "TaskForm",
                    "title": "Task",
                    "url": "/task",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "TaskName",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id":   "project",
                            "type": "autocomplete",
                            "name": "Project",
                            "wordSearchEnabled": true,
                            "defaultKey": "projectKey",
                            "form": "ProjectForm",
                            "url": "/project",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "evtStart",
                            "type": "date",
                            "name": "StartDate",
                            "width": 1
                        },
                        {
                            "id": "evtEnd",
                            "type": "date",
                            "name": "EndDate",
                            "width": 1
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AddTaskForm",
                    "title": "AddTask",
                    "url": "/person/:personKey/task",
                    "formFieldList": [
                        {
                            "id": "taskKey",
                            "type": "autocomplete",
                            "name": "Task",
                            "wordSearchEnabled": true,
                            "url": "/task",
                            "width": 2,
                            "form": "TaskForm",
                            "required": true,
                            "readonly": true,
                            "defaultKey": "taskKey"
                        },
                        {
                            "id": "personKey",
                            "type": "autocomplete",
                            "name": "Person",
                            "wordSearchEnabled": true,
                            "url": "/person",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "defaultKey": "personKey"
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "UserForm",
                    "title": "Person",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "User",
                            "width": 2,
                            "required": true,
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "FileUploadForm",
                    "title": "Person",
                    "formFieldList": [
                        {
                            "id": "id1",
                            "name": { default: "Full Width, pdf/txt only" },
                            "type": "fileUpload",
                            "url": "/upload",
                            "multiple": true,
                            "acceptedFileTypes": [".pdf, .txt"],
                            "width": 2
                        },
                        {
                            "id": "id2",
                            "name": { default: "Readonly, Width=1" },
                            "type": "fileUpload",
                            "url": "/upload",
                            "readonly": true,
                            "newRow": true,
                            "width": 1
                        },
                        {
                            "id": "id3",
                            "name": { default: "Any File Type" },
                            "type": "fileUpload",
                            "url": "/upload",
                            "width": 2
                        },
                        {
                            "id": "id4",
                            "name": { default: "Upload Error" },
                            "type": "fileUpload",
                            "url": "/upload-error",
                            "width": 2
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        }
                    ]
                },
                {
                    "id": "FocusTextareaForm",
                    "title": { "default": "Textarea Test" },
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "User",
                            "width": 2,
                            "height": 10,
                            "required": true,
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "FocusTextForm",
                    "title": { "default": "Text Test" },
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "User",
                            "width": 2,
                            "required": true,
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "FocusReadonlyForm",
                    "title": { "default": "Readonly Test" },
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "User",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "User",
                            "width": 2,
                            "required": true,
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "FocusTranslationForm",
                    "title": { "default": "Text Test" },
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "translation",
                            "name": "User",
                            "width": 2,
                            "required": true,
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "User",
                            "width": 2,
                            "required": true,
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "FocusAutoCompleteForm",
                    "title": { "default": "Autocomplete Test" },
                    "formFieldList": [
                        {
                            "id":   "company",
                            "type": "autocomplete",
                            "name": "Company",
                            "wordSearchEnabled": true,
                            "defaultKey": "companyKey",
                            "form": "CompanyForm",
                            "url": "/company",
                            "width": 2
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                }
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Contacts",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "contactspage",
                        },
                        {
                            "type": "button",
                            "name": "Companies",
                            "icon": "fa-industry",
                            "color": "lime",
                            "page": "companiespage",
                        },
                        {
                            "type": "button",
                            "name": "Projects",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "page": "projectspage",
                        },
                        {
                            "type": "button",
                            "name": "Hobbies",
                            "icon": "fa-bicycle",
                            "color": "carrot",
                            "page": "hobbiespage",
                        },
                        {
                            "type": "button",
                            "name": "Tasks",
                            "icon": "fa-tasks",
                            "color": "wisteria",
                            "page": "taskspage",
                        },
                        {
                            "type": "button",
                            "name": "ElementTest",
                            "icon": "fa-globe",
                            "width": 2,
                            "newRow": true,
                            "color": "asbestos",
                            "page": "elementspage",
                        }
                    ]
                },
                {
                    "id": "contactspage",
                    "name": "Contacts",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewPerson",
                            "width": 2,
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "PersonForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "PersonList",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/person",
                            "page": "personpage",
                        },
                    ]
                },
                {
                    "id": "personpage",
                    "name": "Person",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditPerson",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
                                "form": "PersonForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "Hobbies",
                            "icon": "fa-bicycle",
                            "color": "carrot",
                            "page": "personhobbiespage",
                        },
                        {
                            "type": "button",
                            "name": "Tasks",
                            "icon": "fa-tasks",
                            "color": "wisteria",
                            "page": "persontaskspage",
                        }
                    ]
                },
                {
                    "id": "personhobbiespage",
                    "name": "Hobbies",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "name": "HobbyList",
                            "icon": "fa-bicycle",
                            "color": "carrot",
                            "search": true,
                            "url": "/person/:personKey/hobby"
                        },
                    ]
                },
                {
                    "id": "persontaskspage",
                    "name": "Tasks",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "AddTask",
                            "icon": "fa-tasks",
                            "color": "green",
                            "form": {
                                "form": "AddTaskForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "Tasks",
                            "icon": "fa-tasks",
                            "color": "wisteria",
                            "search": true,
                            "url": "/person/:personKey/task",
                            "form": {
                                "form": "AddTaskForm"
                            }
                        },
                    ]
                },
                {
                    "id": "companiespage",
                    "name": "Companies",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewCompany",
                            "width": 2,
                            "icon": "fa-industry",
                            "color": "green",
                            "form": {
                                "form": "CompanyForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "CompanyList",
                            "icon": "fa-industry",
                            "color": "lime",
                            "search": true,
                            "width": 3,
                            "searchWidth": 2,
                            "url": "/company",
                            "page": "companypage"
                        },
                    ]
                },
                {
                    "id": "companypage",
                    "name": "Company",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditCompany",
                            "icon": "fa-industry",
                            "width": 2,
                            "color": "green",
                            "form": {
                                "form": "CompanyForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "PersonList",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/company/:companyKey/person",
                            "form": {
                                "form": "PersonForm"
                            }
                        },
                    ]
                },
                {
                    "id": "projectspage",
                    "name": "Projects",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewProject",
                            "width": 2,
                            "icon": "fa-cubes",
                            "color": "green",
                            "form": {
                                "form": "ProjectForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "ProjectList",
                            "icon": "fa-cubes",
                            "color": "yellow",
                            "search": true,
                            "url": "/project",
                            "form": {
                                "form": "ProjectForm"
                            }
                        },
                    ]
                },
                {
                    "id": "hobbiespage",
                    "name": "Hobbies",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewHobby",
                            "width": 2,
                            "icon": "fa-bicycle",
                            "color": "green",
                            "form": {
                                "form": "HobbyForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "HobbyList",
                            "icon": "fa-bicycle",
                            "color": "carrot",
                            "search": true,
                            "url": "/hobby",
                            "form": {
                                "form": "HobbyForm"
                            }
                        },
                    ]
                },
                {
                    "id": "taskspage",
                    "name": "Tasks",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewTask",
                            "width": 2,
                            "icon": "fa-tasks",
                            "color": "green",
                            "form": {
                                "form": "TaskForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "TaskList",
                            "icon": "fa-tasks",
                            "color": "wisteria",
                            "search": true,
                            "width": 2,
                            "url": "/task",
                            "limit" : 100,
                            "page": "taskpage"
                        },
                    ]
                },
                {
                    "id": "taskpage",
                    "name": "Task",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "EditTask",
                            "icon": "fa-tasks",
                            "color": "green",
                            "width": 2,
                            "form": {
                                "form": "TaskForm"
                            }
                        },
                        {
                            "type": "list",
                            "name": "PersonList",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/task/:taskKey/person",
                            "form": {
                                "form": "PersonForm"
                            }
                        },
                    ]
                },
                {
                    "id": "elementspage",
                    "name": "Elements",
                    "elementList": [
                        {
                            "type": "pageLabel",
                            "value": "Several <b>example</b> Path GUI Elements.",
                        },
                        {
                            "type": "backbutton",
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": "CustomComponents",
                            "width": 2,
                            "icon": "fa-download",
                            "color": "green",
                            "tooltip": "CustomComponentTooltip",
                            "page": "customComponentsPage",
                        },
                        {
                            "type": "button",
                            "name": "DynamicComponents",
                            "width": 2,
                            "icon": "fa-recycle",
                            "color": "purple",
                            "tooltip": "DynamicComponentTooltip",
                            "page": "dynamicComponentsPage",
                        },
                        {
                            "type": "button",
                            "name": "InlineForm",
                            "width": 2,
                            "icon": "fa-forward",
                            "color": "blue",
                            "page": "inlineFormPage",
                        },
                        {
                            "type": "button",
                            "name": "ButtonWidth",
                            "width": 1,
                            "icon": "fa-text-width",
                            "color": "lime",
                            "page": "buttonWidthPage",
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete",
                            "icon": "fa-user",
                            "color": "red"
                        },
                        {
                            "type": "button",
                            "name": "Links",
                            "width": 1,
                            "icon": "fa-link",
                            "color": "wet-asphalt",
                            "page": "linksPage",
                        },
                        {
                            "type": "button",
                            "name": "Search",
                            "width": 1,
                            "icon": "fa-search",
                            "color": "amethyst",
                            "page": "searchPage",
                        },
                        {
                            "type": "button",
                            "name": "InfoTiles",
                            "width": 2,
                            "icon": "fa-info",
                            "color": "lime",
                            "page": "infoTilesPage",
                        },
                        {
                            "type": "button",
                            "name": "Color",
                            "width": 1,
                            "icon": "fa-pencil",
                            "color": "yellow",
                            "page": "colorsPage",
                        },
                        {
                            "type": "button",
                            "name": "ButtonGroups",
                            "width": 2,
                            "icon": "fa-users",
                            "color": "blue",
                            "page": "buttonGroupsPage",
                        },
                        {
                            "type": "button",
                            "name": "Breadcrumb",
                            "width": 1,
                            "icon": "fa-coffee",
                            "color": { "background-color": "#8B4513" },
                            "page": "breadcrumbsPage",
                        },
                        {
                            "type": "button",
                            "name": { default: "File Upload" },
                            "width": 1,
                            "icon": "fa-file",
                            "color": { "background-color": "#cccc00" },
                            "form": {
                                "form": "FileUploadForm",
                            },
                        },
                        {
                            "type": "button",
                            "name": { default: "Focus" },
                            "width": 1,
                            "icon": "fa-info",
                            "color": { "background-color": "#aa00ff" },
                            "page": "focusPage"
                        },
                    ]
                },
                {
                    "id": "inlineFormPage",
                    "name": "Elements",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "inlineForm",
                            "form": "InlineTestForm",
                            "url": "/company"
                        },
                        {
                            "type": "list",
                            "name": "LinkList",
                            "icon": "fa-link",
                            "color": "teal",
                            "search": false,
                            "url": "/company/link"
                        },
                        {
                            "type": "inlineForm",
                            "form": "CompanyForm",
                            "url": "/company"
                        },
                        {
                            "type": "list",
                            "name": "LinkList",
                            "icon": "fa-link",
                            "color": "teal",
                            "search": false,
                            "url": "/company/link"
                        },
                    ]
                },
                {
                    "id": "customComponentsPage",
                    "name": "Custom Components",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "ExampleComponent",
                            "newRow": true,
                        },
                    ]
                },
                {
                    "id": "dynamicComponentsPage",
                    "name": "Dynamic Components",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "DynamicComponents",
                            "width": 3,
                            "icon": "fa-recycle",
                            "color": "lime",
                            "form": {
                                "form": "FieldListTestForm"
                            }
                        },
                        {
                            "type": "elementList",
                            "url": "/dynamicComponentsPage",
                            "newRow": true,
                        },
                    ]
                },
                {
                    "id": "dynamicComponentsChildPage",
                    "name": "Dynamic Components",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "elementList",
                            "url": "/dynamicComponentsPage/:buttonKey",
                            "newRow": true,
                        },
                    ]
                },
                {
                    "id": "buttonWidthPage",
                    "name": "Elements",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "ButtonWidth",
                            "width": 1,
                            "icon": "fa-text-width",
                            "color": "lime",
                        },
                        {
                            "type": "button",
                            "name": "ButtonWidth",
                            "width": 2,
                            "icon": "fa-text-width",
                            "color": "lime",
                        },
                        {
                            "type": "button",
                            "name": "ButtonWidth",
                            "width": 3,
                            "icon": "fa-text-width",
                            "color": "lime",
                        },
                        {
                            "type": "button",
                            "name": "ButtonWidth",
                            "width": 4,
                            "icon": "fa-text-width",
                            "color": "lime",
                        }
                    ]
                },
                {
                    "id": "infoTilesPage",
                    "name": "Elements",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "InfoTile",
                            "width": 1,
                            "icon": "fa-info",
                            "color": "lime",
                        },
                        {
                            "type": "button",
                            "name": "InfoTile",
                            "width": 2,
                            "icon": "fa-info",
                            "color": "lime",
                            "page": "",
                        },
                        {
                            "type": "button",
                            "name": "InfoTile",
                            "width": 3,
                            "icon": "fa-info",
                            "color": "lime",
                            "form": {
                                "form": "",
                            }
                        },
                        {
                            "type": "button",
                            "name": "InfoTile",
                            "width": 4,
                            "icon": "fa-info",
                            "color": "lime",
                            "page": "",
                            "form": {
                                "form": "",
                            }
                        },
                        {
                            "type": "list",
                            "name": "InfoTile",
                            "icon": "fa-info",
                            "color": "lime",
                            "url": "/company"
                        }
                    ]
                },
                {
                    "id": "colorsPage",
                    "name": "Elements",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Color",
                            "width": 2,
                            "icon": "fa-pencil",
                            "color": { "background-color": "#a94d39" }
                        },
                        {
                            "type": "button",
                            "name": "Color",
                            "width": 2,
                            "icon": "fa-pencil",
                            "color": "silver"
                        },
                        {
                            "type": "button",
                            "name": "Color",
                            "width": 2,
                            "icon": "fa-pencil",
                            "color": "clouds"
                        },
                        {
                            "type": "button",
                            "name": "Color",
                            "width": 2,
                            "icon": "fa-pencil",
                            "color": { "background-color": "#eeeeee", "color": "black" }
                        },
                        {
                            "type": "button",
                            "name": "Color",
                            "width": 2,
                            "icon": "fa-pencil",
                            "color": "custom-green"
                        }
                    ]
                },
                {
                    "id": "linksPage",
                    "elementList": [
                        {
                            "type": "pageLabel",
                            "value": "<h3>Single Link Button</h3>",
                        },
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "linkButton",
                            "name": "www.google.com",
                            "width": 2,
                            "icon": "fa-google",
                            "color": "amethyst",
                            "url": "http://www.google.com"
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>Link Button List loaded from Server</h3>",
                        },
                        {
                            "type": "list",
                            "name": "LinkList",
                            "icon": "fa-link",
                            "color": "teal",
                            "search": false,
                            "url": "/company/link"
                        },
                    ]
                },
                {
                    "id": "searchPage",
                    "elementList": [
                        {
                            "type": "pageLabel",
                            "value": "<h3>Initial search required</h3><small>search: true, searchRequired: true, searchRequest: true</small>",
                        },
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "icon": "fa-industry",
                            "color": "lime",
                            "search": true,
                            "searchRequired": true,
                            "searchRequest": true,
                            "limit": 3,
                            "url": "/company",
                            "form": {
                                "form": "CompanyForm"
                            }
                        },
                        {
                            "type": "pageLabel",
                            "newRow": true,
                            "value": "<h3>Initial search not required</h3><small>search: true, searchRequired: false, searchRequest: false</small>",
                        },
                        {
                            "type": "list",
                            "icon": "fa-industry",
                            "color": "lime",
                            "search": true,
                            "searchRequired": false,
                            "searchRequest": false,
                            "limit": 3,
                            "url": "/company",
                            "form": {
                                "form": "CompanyForm"
                            }
                        },
                        {
                            "type": "pageLabel",
                            "newRow": true,
                            "value": "<h3>Search not visible</h3><small>search: false, searchRequired: false, searchRequest: false</small>",
                        },
                        {
                            "type": "list",
                            "icon": "fa-industry",
                            "color": "lime",
                            "search": false,
                            "searchRequired": false,
                            "searchRequest": false,
                            "limit": 3,
                            "url": "/company",
                            "form": {
                                "form": "CompanyForm"
                            }
                        },
                        {
                            "type": "pageLabel",
                            "newRow": true,
                            "value": "<h3>Search always with request</h3><small>search: true, searchRequired: false, searchRequest: true</small>",
                        },
                        {
                            "type": "list",
                            "icon": "fa-industry",
                            "color": "lime",
                            "search": true,
                            "searchRequired": false,
                            "searchRequest": true,
                            "limit": 3,
                            "url": "/company",
                            "form": {
                                "form": "CompanyForm"
                            }
                        },
                        {
                            "type": "pageLabel",
                            "newRow": true,
                            "value": "<h3>Search on client only</h3><small>search: true, searchRequired: false, searchRequest: false</small>",
                        },
                        {
                            "type": "list",
                            "icon": "fa-industry",
                            "color": "lime",
                            "search": true,
                            "searchRequired": false,
                            "searchRequest": false,
                            "limit": 3,
                            "url": "/company",
                            "form": {
                                "form": "CompanyForm"
                            }
                        },
                        {
                            "type": "pageLabel",
                            "newRow": true,
                            "value": "<h3>Search color</h3><small>color: silver</small>",
                        },
                        {
                            "type": "list",
                            "icon": "fa-industry",
                            "color": "lime",
                            "search": true,
                            "searchRequired": false,
                            "searchRequest": false,
                            "searchColor": "silver",
                            "limit": 3,
                            "url": "/company",
                            "form": {
                                "form": "CompanyForm"
                            }
                        },
                        {
                            "type": "pageLabel",
                            "newRow": true,
                            "value": "<h3>Search color</h3><small>color: { \"background-color\": \"#8B4513\" }</small>",
                        },
                        {
                            "type": "list",
                            "icon": "fa-industry",
                            "color": "lime",
                            "search": true,
                            "searchRequired": false,
                            "searchRequest": false,
                            "searchColor": { "background-color": "#8B4513" },
                            "limit": 3,
                            "url": "/company",
                            "form": {
                                "form": "CompanyForm"
                            }
                        },
                        {
                            "type": "pageLabel",
                            "newRow": true,
                            "value": "<h3>Search width</h3><small>searchWidth: 1, width: 4</small>",
                        },
                        {
                            "type": "list",
                            "icon": "fa-industry",
                            "color": "lime",
                            "search": true,
                            "searchRequired": false,
                            "searchRequest": false,
                            "searchWidth": 1,
                            "width": 4,
                            "limit": 3,
                            "url": "/company",
                            "form": {
                                "form": "CompanyForm"
                            }
                        },
                    ]
                },
                {
                    "id": "buttonGroupsPage",
                    "elementList": [
                        {
                            "type": "pageLabel",
                            "value": "<h3>Lists</h3>",
                        },
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "name": "PersonList",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "url": "/person/group",
                            "page": "personpage",
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>Tile Placement</h3>",
                            "newRow": true
                        },
                        {
                            "type": "buttonGroup",
                            "buttons": [
                                {
                                    "type": "button",
                                    "name": {default: 10},
                                    "width": 1,
                                    "icon": "fa-users",
                                    "color": "amethyst",
                                },
                            ]
                        },
                        {
                            "type": "buttonGroup",
                            "buttons": [
                                {
                                    "type": "button",
                                    "name": {default: 20},
                                    "width": 1,
                                    "icon": "fa-users",
                                    "color": "amethyst",
                                },
                                {
                                    "type": "button",
                                    "name": {default: 21},
                                    "width": 1,
                                    "icon": "fa-users",
                                    "color": "amethyst",
                                },
                                {
                                    "type": "button",
                                    "name": {default: 22},
                                    "width": 1,
                                    "icon": "fa-users",
                                    "color": "amethyst",
                                },
                            ]
                        },
                        {
                            "type": "buttonGroup",
                            "buttons": [
                                {
                                    "type": "button",
                                    "name": {default: 30},
                                    "width": 1,
                                    "icon": "fa-users",
                                    "color": "amethyst",
                                },
                                {
                                    "type": "button",
                                    "name": {default: 31},
                                    "width": 1,
                                    "icon": "fa-users",
                                    "color": "amethyst",
                                },
                            ]
                        },
                        {
                            "type": "buttonGroup",
                            "buttons": [
                                {
                                    "type": "button",
                                    "name": {default: 40},
                                    "width": 1,
                                    "icon": "fa-users",
                                    "color": "amethyst",
                                },
                                {
                                    "type": "button",
                                    "name": {default: 41},
                                    "width": 1,
                                    "icon": "fa-users",
                                    "color": "amethyst",
                                },
                            ]
                        },
                        {
                            "type": "buttonGroup",
                            "buttons": [
                                {
                                    "type": "button",
                                    "name": {default: 50},
                                    "width": 1,
                                    "icon": "fa-users",
                                    "color": "amethyst",
                                },
                            ]
                        },
                        {
                            "type": "buttonGroup",
                            "buttons": [
                                {
                                    "type": "button",
                                    "name": {default: 60},
                                    "width": 1,
                                    "icon": "fa-users",
                                    "color": "amethyst",
                                },
                            ]
                        },
                        {
                            "type": "button",
                            "name": {default: 70},
                            "width": 1,
                            "icon": "fa-users",
                            "color": "amethyst",
                        },
                        {
                            "type": "button",
                            "name": {default: 80},
                            "width": 1,
                            "icon": "fa-users",
                            "color": "amethyst",
                        },
                        {
                            "type": "buttonGroup",
                            "buttons": [
                                {
                                    "type": "button",
                                    "name": {default: 90},
                                    "width": 3,
                                    "icon": "fa-users",
                                    "color": "amethyst",
                                },
                                {
                                    "type": "button",
                                    "name": {default: 91},
                                    "width": 1,
                                    "icon": "fa-users",
                                    "color": "silver",
                                },
                                {
                                    "type": "button",
                                    "name": {default: 92},
                                    "width": 1,
                                    "icon": "fa-users",
                                    "color": "amethyst",
                                },
                            ]
                        },
                        {
                            "type": "buttonGroup",
                            "buttons": [
                                {
                                    "type": "button",
                                    "name": {default: 100},
                                    "width": 2,
                                    "icon": "fa-users",
                                    "color": "amethyst",
                                },
                                {
                                    "type": "button",
                                    "name": {default: 101},
                                    "width": 1,
                                    "icon": "fa-users",
                                    "color": "silver",
                                },
                                {
                                    "type": "button",
                                    "name": {default: 102},
                                    "width": 2,
                                    "icon": "fa-users",
                                    "color": "amethyst",
                                },
                            ]
                        },
                    ]
                },
                {
                    "id": "breadcrumbsPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>Repeat breadcrumb if required:</h3>",
                            "newRow": true
                        },
                        {
                            "type": "button",
                            "name": "Breadcrumb",
                            "width": 1,
                            "icon": "fa-coffee",
                            "color": { "background-color": "#8B4513" },
                        },
                        {
                            "type": "breadcrumb",
                            "newRow": true
                        },
                        {
                            "type": "button",
                            "name": "Breadcrumb",
                            "width": 1,
                            "icon": "fa-coffee",
                            "color": { "background-color": "#8B4513" },
                        },
                        {
                            "type": "breadcrumb",
                            "newRow": true
                        },
                        {
                            "type": "button",
                            "name": "Breadcrumb",
                            "width": 1,
                            "icon": "fa-coffee",
                            "color": { "background-color": "#8B4513" },
                        },
                        {
                            "type": "breadcrumb",
                            "newRow": true
                        },
                    ]
                },
                {
                    "id": "focusPage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>Test focus for different types of form elements:</h3>",
                            "newRow": true
                        },
                        {
                            "type": "newButton",
                            "name": { "default": "Textarea" },
                            "width": 1,
                            "icon": "fa-info",
                            "color": { "background-color": "#1B4513" },
                            "form": {
                                "form": "FocusTextareaForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": { "default": "Text" },
                            "width": 1,
                            "icon": "fa-info",
                            "color": { "background-color": "#5B4513" },
                            "form": {
                                "form": "FocusTextForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": { "default": "Readonly" },
                            "width": 1,
                            "icon": "fa-pen",
                            "color": { "background-color": "#8B4513" },
                            "form": {
                                "form": "FocusReadonlyForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": { "default": "Translation" },
                            "width": 1,
                            "icon": "fa-pen",
                            "color": { "background-color": "#EE4513" },
                            "form": {
                                "form": "FocusTranslationForm"
                            }
                        },
                        {
                            "type": "newButton",
                            "name": { "default": "AutoComplete" },
                            "width": 1,
                            "icon": "fa-pen",
                            "color": { "background-color": "#004513" },
                            "form": {
                                "form": "FocusAutoCompleteForm"
                            }
                        }
                    ]
                }
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
