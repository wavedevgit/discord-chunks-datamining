/** Chunk was on web.js **/
/** chunk id: 329554, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk473749 = require("./473749.js"),
  Chunk606166 = require("./606166.js");
module.exports = (0, require("./65183.js").Map)({
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
    wrapper: Chunk473749.createElement("ul", {
      className: Chunk606166("public/DraftStyleDefault/ul")
    })
  },
  "ordered-list-item": {
    element: "li",
    wrapper: Chunk473749.createElement("ol", {
      className: Chunk606166("public/DraftStyleDefault/ol")
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
    wrapper: Chunk473749.createElement("pre", {
      className: Chunk606166("public/DraftStyleDefault/pre")
    })
  },
  unstyled: {
    element: "div",
    aliasedElements: ["p"]
  }
})