/** Chunk was on web.js **/
/** chunk id: 266454, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Nj: () => d,
  Ob: () => _,
  Q3: () => f,
  wE: () => p,
  zu: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk675478 = require("./675478.js"),
  Chunk581883 = require("./581883.js"),
  Chunk709054 = require("./709054.js"),
  Chunk915486 = require("./915486.js"),
  Chunk605236 = require("./605236.js"),
  Chunk57207 = require("./57207.js");

function u(e) {
  var t;
  let n = arguments.length > 1 && true !== arguments[1] && arguments[1];
  if (!n && (0, c.Bh)(e)) returntrue;
  let r = null == (t = a.Z.settings.userContent) ? true : t.dismissedContents;
  return null != r && (0, s.jl)(r, e)
}

function d(e) {
  return (0, r.e7)([a.Z], () => u(e))
}
async function f(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {};
  u(e, true) || ((0, l.u9)(e, t), await (0, i.nm)(e), (0, l.ME)(e, t))
}

function _(e, t) {
  var n, r;
  if ((0, c.Bh)(e)) return {
    isDismissed: true,
    lastDismissedSnowflakeId: null
  };
  let i = null == (r = a.Z.settings.userContent) || null == (n = r.recurringDismissibleContentStates[e]) ? true : n.lastDismissedObjectId;
  return {
    isDismissed: null != i && 1 !== o.default.compare(t, i),
    lastDismissedSnowflakeId: i
  }
}
async function p(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {};
  (0, l.u9)(e, n), await (0, l.XM)(e, t), (0, l.ME)(e, n)
}