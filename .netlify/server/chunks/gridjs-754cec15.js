var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  G: () => Gridjs
});
module.exports = __toCommonJS(stdin_exports);
var import_index_8a933b57 = require("./index-8a933b57.js");
var import_gridjs = require("gridjs");
const Gridjs = (0, import_index_8a933b57.c)(($$result, $$props, $$bindings, slots) => {
  let { width = "100%" } = $$props;
  let { height = "auto" } = $$props;
  let { autoWidth = true } = $$props;
  let { fixedHeader = false } = $$props;
  let { resizable = false } = $$props;
  let { from = void 0 } = $$props;
  let { language = void 0 } = $$props;
  let { search = false } = $$props;
  let { sort = false } = $$props;
  let { pagination = false } = $$props;
  let { server = void 0 } = $$props;
  let { columns = void 0 } = $$props;
  let { data = void 0 } = $$props;
  let { plugins = void 0 } = $$props;
  let { style = {} } = $$props;
  let { className = {} } = $$props;
  const instance = new import_gridjs.Grid({
    from,
    data,
    columns,
    server,
    search,
    sort,
    pagination,
    language,
    width,
    height,
    autoWidth,
    plugins,
    fixedHeader,
    resizable,
    style,
    className
  });
  let node;
  const dispatch = (0, import_index_8a933b57.a)();
  instance.on("cellClick", (...args) => dispatch("cellClick", __spreadValues({}, args)));
  instance.on("rowClick", (...args) => dispatch("rowClick", __spreadValues({}, args)));
  instance.on("beforeLoad", () => dispatch("beforeLoad"));
  instance.on("load", (data2) => dispatch("load", __spreadValues({}, data2)));
  instance.on("ready", () => dispatch("ready"));
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.autoWidth === void 0 && $$bindings.autoWidth && autoWidth !== void 0)
    $$bindings.autoWidth(autoWidth);
  if ($$props.fixedHeader === void 0 && $$bindings.fixedHeader && fixedHeader !== void 0)
    $$bindings.fixedHeader(fixedHeader);
  if ($$props.resizable === void 0 && $$bindings.resizable && resizable !== void 0)
    $$bindings.resizable(resizable);
  if ($$props.from === void 0 && $$bindings.from && from !== void 0)
    $$bindings.from(from);
  if ($$props.language === void 0 && $$bindings.language && language !== void 0)
    $$bindings.language(language);
  if ($$props.search === void 0 && $$bindings.search && search !== void 0)
    $$bindings.search(search);
  if ($$props.sort === void 0 && $$bindings.sort && sort !== void 0)
    $$bindings.sort(sort);
  if ($$props.pagination === void 0 && $$bindings.pagination && pagination !== void 0)
    $$bindings.pagination(pagination);
  if ($$props.server === void 0 && $$bindings.server && server !== void 0)
    $$bindings.server(server);
  if ($$props.columns === void 0 && $$bindings.columns && columns !== void 0)
    $$bindings.columns(columns);
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.plugins === void 0 && $$bindings.plugins && plugins !== void 0)
    $$bindings.plugins(plugins);
  if ($$props.style === void 0 && $$bindings.style && style !== void 0)
    $$bindings.style(style);
  if ($$props.className === void 0 && $$bindings.className && className !== void 0)
    $$bindings.className(className);
  if ($$props.instance === void 0 && $$bindings.instance && instance !== void 0)
    $$bindings.instance(instance);
  return `<article${(0, import_index_8a933b57.b)("this", node, 0)}></article>`;
});
