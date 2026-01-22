/** Chunk was on web.js **/
/** chunk id: 611668, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk64700 = require("./64700.js"),
  Chunk550835 = require("./550835.js");
module.exports = (0, require("./116740.js").Map)({
  "header-one": {
    element: "h1"
  },
  "header-two": {
    element: "h2"
  },
  "header-three": {
    element: "h3"
  },
  "header-four": {
    element: "h4"
  },
  "header-five": {
    element: "h5"
  },
  "header-six": {
    element: "h6"
  },
  section: {
    element: "section"
  },
  article: {
    element: "article"
  },
  "unordered-list-item": {
    element: "li",
    wrapper: Chunk64700.createElement("ul", {
      className: Chunk550835("public/DraftStyleDefault/ul")
    })
  },
  "ordered-list-item": {
    element: "li",
    wrapper: Chunk64700.createElement("ol", {
      className: Chunk550835("public/DraftStyleDefault/ol")
    })
  },
  blockquote: {
    element: "blockquote"
  },
  atomic: {
    element: "figure"
  },
  "code-block": {
    element: "pre",
    wrapper: Chunk64700.createElement("pre", {
      className: Chunk550835("public/DraftStyleDefault/pre")
    })
  },
  unstyled: {
    element: "div",
    aliasedElements: ["p"]
  }
})