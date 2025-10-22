/** Chunk was on web.js **/
/** chunk id: 328966, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  H: () => s,
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk318713 = require("./318713.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk136907 = require("./136907.js"),
  s = function(e) {
    return e[e.WITH_CONTENT = 0] = "WITH_CONTENT", e[e.AFTER_ACCESSORIES = 1] = "AFTER_ACCESSORIES", e
  }({});

function l(e, t) {
  return t || null != e.content && 0 !== e.content.length ? 0 : 1
}

function c(e) {
  let {
    message: t,
    compact: n,
    location: s
  } = e;
  return t.isEdited() && null != t.editedTimestamp && s === l(t, n) ? (0, r.jsxs)(r.Fragment, {
    children: [" ", (0, r.jsx)(i.Z, {
      timestamp: t.editedTimestamp,
      isEdited: true,
      isInline: false,
      children: (0, r.jsxs)("span", {
        className: o.edited,
        children: ["(", a.intl.string(a.t.C8sXIM), ")"]
      })
    })]
  }) : null
}