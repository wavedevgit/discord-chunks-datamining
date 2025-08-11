/** Chunk was on 70205 **/
/** chunk id: 671105, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  OR: () => r,
  _c: () => u,
  bb: () => s,
  iD: () => o
});
var Chunk442837 = require("./442837.js"),
  Chunk581883 = require("./581883.js"),
  Chunk871465 = require("./871465.js");

function r(t) {
  return d(t, true, (0, i.e7)([l.Z], () => {
    var t;
    return null == (t = l.Z.settings.guilds) ? true : t.guilds
  }))
}

function o(t) {
  var e, n;
  return d(t, true, null != (n = null == (e = l.Z.settings.guilds) ? true : e.guilds) ? n : {})
}

function u(t, e) {
  let n = (0, i.e7)([l.Z], () => {
    var t;
    return null == (t = l.Z.settings.guilds) ? true : t.guilds
  });
  return null != e ? d(t, e, n) : true
}

function s(t, e) {
  var n, i;
  let a = null != (i = null == (n = l.Z.settings.guilds) ? true : n.guilds) ? i : {};
  return null != e ? d(t, e, a) : true
}

function d(t, e, n) {
  var i, l, r;
  if (null == n) return;
  let o = null != e ? null == (i = n[t]) ? true : i.channels[e] : n[t],
    u = null == o ? true : o.customNotificationSoundConfig;
  return null != u && null != (r = null == u || null == (l = u.notificationSoundPackId) ? true : l.value) ? Object.values(a.YC).find(t => t === r) : true
}