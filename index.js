"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VirtualTypes = exports.ObjectData = exports.ValuableField = exports.Field = exports.ObjectModel = exports.SimpleCrud = exports.Crud = void 0;
const crud_1 = __importDefault(require("./src/crud"));
exports.Crud = crud_1.default;
const field_1 = __importDefault(require("./src/field"));
exports.Field = field_1.default;
const objectData_1 = __importDefault(require("./src/objectData"));
exports.ObjectData = objectData_1.default;
const objectModel_1 = __importDefault(require("./src/objectModel"));
exports.ObjectModel = objectModel_1.default;
const simpleCrud_1 = __importDefault(require("./src/simpleCrud"));
exports.SimpleCrud = simpleCrud_1.default;
const valuableField_1 = __importDefault(require("./src/valuableField"));
exports.ValuableField = valuableField_1.default;
const virtualTypes_1 = __importDefault(require("./src/virtualTypes"));
exports.VirtualTypes = virtualTypes_1.default;
