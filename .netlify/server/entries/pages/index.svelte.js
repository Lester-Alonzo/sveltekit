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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_8a933b57 = require("../../chunks/index-8a933b57.js");
const Routes = (0, import_index_8a933b57.c)(($$result, $$props, $$bindings, slots) => {
  let imagenes = [
    {
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/08/03/09/03/universe-1566159_960_720.jpg"
    },
    {
      image: "https://cdn.pixabay.com/photo/2016/08/05/12/44/space-1572212_960_720.png"
    }
  ];
  return `${(0, import_index_8a933b57.v)(import_index_8a933b57.m, "svelte:component").$$render($$result, { autoplay: true, autoplayDuration: 2400 }, {}, {
    default: () => {
      return `${(0, import_index_8a933b57.d)(imagenes, (image) => {
        return `<img${(0, import_index_8a933b57.b)("src", image.image, 0)} alt="${""}">`;
      })}`;
    }
  })}`;
});
