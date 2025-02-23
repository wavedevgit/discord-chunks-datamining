/** Chunk was on 68880 (5dfa49b29bd374d8.js) **/
"use strict";
var n = r(192379),
  i = r(606166),
  o = (0, r(65183).Map)({
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
      wrapper: n.createElement("ul", {
        className: i("public/DraftStyleDefault/ul")
      })
    },
    "ordered-list-item": {
      element: "li",
      wrapper: n.createElement("ol", {
        className: i("public/DraftStyleDefault/ol")
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
      wrapper: n.createElement("pre", {
        className: i("public/DraftStyleDefault/pre")
      })
    },
    unstyled: {
      element: "div",
      aliasedElements: ["p"]
    }
  });
t.exports = o