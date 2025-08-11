/** Chunk was on web.js **/
/** chunk id: 223683, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $U: () => u,
  KP: () => _,
  Tn: () => c,
  dt: () => p,
  xx: () => d
});
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk544891 = require("./544891.js"),
  Chunk981631 = require("./981631.js");
let s = 5,
  l = 1e6;
async function c() {
  return (await Chunk544891.tn.get({
    url: Chunk981631.ANM.NOTIFICATION_SNAPSHOTS,
    rejectWithError: false
  })).body
}
async function u(e) {
  return (await o.tn.post({
    url: a.ANM.NOTIFICATION_SNAPSHOTS,
    body: {
      label: e
    },
    rejectWithError: false
  })).body
}
async function d(e) {
  return (await o.tn.post({
    url: a.ANM.RESTORE_NOTIFICATION_SNAPSHOT(e),
    rejectWithError: false
  })).body
}
async function f(e) {
  return (await o.tn.del({
    url: a.ANM.NOTIFICATION_SNAPSHOT(e),
    rejectWithError: false
  })).body
}
async function _() {
  let e = await c(),
    t = i().sortBy(module, e => new Date(e.recorded_at).getTime());
  0 !== exports.length && await d(exports[exports.length - 1].id)
}
async function p(e) {
  if (e.length > 0) {
    var t;
    let n = i().sum(e.map(e => e.length)),
      r = null != (t = i().max(e.map(e => e.length))) ? t : 0;
    if (e.length >= s || n + r > l) {
      let t = i().sortBy(e, e => new Date(e.recorded_at).getTime());
      await f(t[0].id)
    }
  }
  return u("Backup from ".concat(new Date().toLocaleDateString()))
}