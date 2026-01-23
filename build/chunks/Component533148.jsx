/** Chunk was on 47841 **/
/** chunk id: 533148, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
}), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk927573 = require("./927573.js");

function s(e) {
  let {
    value: t,
    onChange: n,
    error: s,
    disabled: a,
    autoFocus: o = false
  } = e;
  return (0, r.jsx)(i.ksK, {
    leading: "".concat(l.mu, "/"),
    value: t,
    onChange: e => {
      n(e.replace(/ /g, "-"))
    },
    maxLength: 25,
    error: s,
    disabled: a,
    autoFocus: o
  })
}