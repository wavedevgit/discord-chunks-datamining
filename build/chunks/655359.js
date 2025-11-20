/** Chunk was on web.js **/
/** chunk id: 655359, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K_: () => d,
  P3: () => u,
  PE: () => f
}), require("./997841.js");
var Chunk95015 = require("./95015.js"),
  Chunk399606 = require("./399606.js"),
  Chunk271383 = require("./271383.js"),
  Chunk563534 = require("./563534.js"),
  Chunk846121 = require("./846121.js"),
  Chunk460347 = require("./460347.js"),
  Chunk372897 = require("./372897.js");

function u(e, t) {
  var n;
  let r = (0, l.Z)(e),
    a = (0, i.e7)([o.Z], () => o.Z.getNewMemberActions(e), [e]),
    c = (0, i.e7)([s.Z], () => s.Z.getCompletedActions(e));
  if (!r) return {};
  let u = null != (n = null == a ? true : a.findIndex(e => e.channelId === t.id)) ? n : 0,
    d = u >= 0 && null != a ? a[u] : null,
    f = null != d && (null == c ? true : c[d.channelId]) === true;
  return {
    channelAction: d,
    completed: f
  }
}

function d(e, t) {
  let n = (0, i.e7)([o.Z], () => o.Z.getNewMemberActions(e)),
    r = (0, i.e7)([s.Z], () => s.Z.getCompletedActions(e));
  return null == n ? true : n.find(e => (null == r ? true : r[e.channelId]) !== true && e.channelId !== t)
}

function f(e) {
  var t;
  let n = (0, i.e7)([a.ZP], () => a.ZP.getSelfMember(e));
  return (0, r.yE)(null != (t = null == n ? true : n.flags) ? t : 0, c.q.COMPLETED_HOME_ACTIONS)
}