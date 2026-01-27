/** Chunk was on web.js **/
/** chunk id: 861986, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c,
  O: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk449859 = require("./449859.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk679740 = require("./679740.js"),
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
    children: [" ", (0, r.jsx)(i.A, {
      timestamp: t.editedTimestamp,
      isEdited: true,
      isInline: false,
      children: (0, r.jsxs)("span", {
        className: o.oh,
        children: ["(", a.intl.string(a.t.C8sXIM), ")"]
      })
    })]
  }) : null
}