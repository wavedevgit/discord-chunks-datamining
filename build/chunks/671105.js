/** Chunk was on 70205 **/
i.d(t, {
  OR: () => o,
  _c: () => u,
  bb: () => s,
  iD: () => r
});
var n = i(442837),
  l = i(581883),
  a = i(871465);

function o(e) {
  return d(e, void 0, (0, n.e7)([l.Z], () => {
    var e;
    return null === (e = l.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds
  }))
}

function r(e) {
  var t, i;
  return d(e, void 0, null !== (i = null === (t = l.Z.settings.guilds) || void 0 === t ? void 0 : t.guilds) && void 0 !== i ? i : {})
}

function u(e, t) {
  let i = (0, n.e7)([l.Z], () => {
    var e;
    return null === (e = l.Z.settings.guilds) || void 0 === e ? void 0 : e.guilds
  });
  return null != t ? d(e, t, i) : void 0
}

function s(e, t) {
  var i, n;
  let a = null !== (n = null === (i = l.Z.settings.guilds) || void 0 === i ? void 0 : i.guilds) && void 0 !== n ? n : {};
  return null != t ? d(e, t, a) : void 0
}

function d(e, t, i) {
  var n, l, o;
  if (null == i) return;
  let r = null != t ? null === (n = i[e]) || void 0 === n ? void 0 : n.channels[t] : i[e],
    u = null == r ? void 0 : r.customNotificationSoundConfig;
  return null != u && null != (o = null == u ? void 0 : null === (l = u.notificationSoundPackId) || void 0 === l ? void 0 : l.value) ? Object.values(a.YC).find(e => e === o) : void 0
}