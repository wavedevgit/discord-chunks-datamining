/** Chunk was on web.js **/
/** chunk id: 890620, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  C7: () => u,
  YN: () => l,
  Yb: () => c
});
var Chunk353640 = require("./353640.js"),
  Chunk121894 = require("./121894.js"),
  Chunk203982 = require("./203982.js"),
  Chunk652215 = require("./652215.js");
let s = Object.freeze({
    hasUnsubmittedChanges: false,
    shouldShowWarning: false
  }),
  l = (0, Chunk353640.v)(e => s),
  c = e => {
    (0, i.r)(() => l.setState({
      hasUnsubmittedChanges: e
    }))
  },
  u = e => {
    (0, i.r)(() => l.setState({
      shouldShowWarning: e
    })), e && a._.dispatch(o.jej.EMPHASIZE_NOTICE)
  }