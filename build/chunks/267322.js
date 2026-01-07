/** Chunk was on 75909 **/
/** chunk id: 267322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Yy: () => c,
  xU: () => u,
  zw: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk907331 = require("./907331.js"),
  Chunk442837 = require("./442837.js"),
  Chunk110924 = require("./110924.js"),
  Chunk451478 = require("./451478.js");
let s = 2;

function c() {
  let [e, t] = r.useState(false), n = e !== (0, i.Z)(e);
  return {
    visible: e,
    visibleChanged: n,
    targetRef: (0, o.O)(e => t(e), .6)
  }
}

function u() {
  let e = (0, l.e7)([a.Z], () => a.Z.isFocused()),
    t = e !== (0, i.Z)(e);
  return {
    focused: e,
    focusedChanged: t
  }
}