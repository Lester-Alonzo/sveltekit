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
  default: () => Grid_1
});
module.exports = __toCommonJS(stdin_exports);
var import_index_8a933b57 = require("../../chunks/index-8a933b57.js");
var import_gridjs_754cec15 = require("../../chunks/gridjs-754cec15.js");
var import_gridjs = require("gridjs");
var grid_svelte_svelte_type_style_lang = "";
const css = {
  code: '@import "https://cdn.jsdelivr.net/npm/gridjs/dist/theme/mermaid.min.css";',
  map: null
};
const Grid_1 = (0, import_index_8a933b57.c)(($$result, $$props, $$bindings, slots) => {
  const data = [
    {
      "id": 1,
      "first_name": "Dyna",
      "last_name": "McGuirk",
      "email": "dmcguirk0@mapquest.com"
    },
    {
      "id": 2,
      "first_name": "Kimberly",
      "last_name": "Bisco",
      "email": "kbisco1@salon.com"
    },
    {
      "id": 3,
      "first_name": "Muffin",
      "last_name": "Beeble",
      "email": "mbeeble2@ehow.com"
    },
    {
      "id": 4,
      "first_name": "Nicola",
      "last_name": "Chown",
      "email": "nchown3@amazon.co.jp"
    },
    {
      "id": 5,
      "first_name": "Annis",
      "last_name": "Riding",
      "email": "ariding4@behance.net"
    },
    {
      "id": 6,
      "first_name": "Randie",
      "last_name": "Barnicott",
      "email": "rbarnicott5@bizjournals.com"
    },
    {
      "id": 7,
      "first_name": "Marjy",
      "last_name": "Franz-Schoninger",
      "email": "mfranzschoninger6@columbia.edu"
    },
    {
      "id": 8,
      "first_name": "Elly",
      "last_name": "Stannis",
      "email": "estannis7@ox.ac.uk"
    },
    {
      "id": 9,
      "first_name": "Niels",
      "last_name": "Summerlad",
      "email": "nsummerlad8@4shared.com"
    },
    {
      "id": 10,
      "first_name": "Niccolo",
      "last_name": "Dockray",
      "email": "ndockray9@google.cn"
    },
    {
      "id": 11,
      "first_name": "Franciskus",
      "last_name": "Du Hamel",
      "email": "fduhamela@acquirethisname.com"
    },
    {
      "id": 12,
      "first_name": "Cinda",
      "last_name": "Winsborrow",
      "email": "cwinsborrowb@vkontakte.ru"
    }
  ];
  $$result.css.add(css);
  return `${(0, import_index_8a933b57.v)(import_gridjs_754cec15.G, "Grid").$$render($$result, {
    data,
    search: true,
    sort: true,
    pagination: { enabled: true, limit: 5 }
  }, {}, {})}`;
});
