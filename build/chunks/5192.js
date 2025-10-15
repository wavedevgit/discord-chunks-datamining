/** Chunk was on web.js **/
/** chunk id: 5192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ZP: () => f,
  oY: () => u,
  y: () => c
});
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk699516 = require("./699516.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t, n) {
  if (null == n) return null;
  if (null != e) return a.ZP.getNick(e, n.id);
  if (null != t) {
    let e = i.Z.getChannel(t);
    if (null == e ? true : e.isPrivate()) return o.Z.getNickname(n.id)
  }
  return null
}

function u(e, t, n) {
  var r;
  return null == n ? l.intl.string(l.t.sKdZ6U) : null != (r = c(e, t, n)) ? r : s.ZP.getName(n)
}

function d(e, t, n) {
  return (0, r.e7)([a.ZP, i.Z, o.Z], () => u(e, t, n))
}
let f = {
  getNickname: c,
  getName: u,
  useName: d
}