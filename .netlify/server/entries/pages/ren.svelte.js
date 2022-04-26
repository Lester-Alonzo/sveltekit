var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
  default: () => Ren
});
module.exports = __toCommonJS(stdin_exports);
var import_index_8a933b57 = require("../../chunks/index-8a933b57.js");
var import_gridjs_754cec15 = require("../../chunks/gridjs-754cec15.js");
var import_gridjs = require("gridjs");
var ren_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";',
  map: null
};
const Ren = (0, import_index_8a933b57.c)(($$result, $$props, $$bindings, slots) => {
  const columns = [
    { name: "Nombre" },
    { name: "Nick", sort: false },
    { name: "Email", sort: false }
  ];
  $$result.css.add(css);
  return `${(0, import_index_8a933b57.v)(import_gridjs_754cec15.G, "Grid").$$render($$result, {
    columns,
    search: true,
    sort: true,
    pagination: { enabled: true, limit: 5 },
    server: {
      url: "https://jsonplaceholder.typicode.com/users",
      then: (data) => data.map((user) => {
        return [user.name, user.username, user.email];
      })
    }
  }, {}, {})}`;
});
