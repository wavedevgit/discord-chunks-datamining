/** Chunk was on 98587 **/
n.d(t, {
  Mn: () => g,
  OD: () => f,
  W9: () => d
}), n(388685), n(997841);
var r = n(442837),
  o = n(798140),
  i = n(9156),
  a = n(630388),
  c = n(709054),
  l = n(312400),
  u = n(981631),
  s = n(969943),
  _ = n(526761),
  b = n(388032);

function d() {
  return [{
    label: b.NW.string(b.t["8ot6go"]),
    value: s.Oe.MINUTES_15
  }, {
    label: b.NW.string(b.t.UMWBZm),
    value: s.Oe.HOURS_1
  }, {
    label: b.NW.string(b.t.QmYWtr),
    value: s.Oe.HOURS_3
  }, {
    label: b.NW.string(b.t.EpAXPD),
    value: s.Oe.HOURS_8
  }, {
    label: b.NW.string(b.t["755t4u"]),
    value: s.Oe.HOURS_24
  }, {
    label: b.NW.string(b.t.r3LawM),
    value: s.Oe.ALWAYS
  }]
}
let p = {
  ignoreMute: !1,
  ignoreUnreadSetting: !0,
  ignoreNotificationSetting: !1
};

function f(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : p;
  return c.default.keys(e).filter(n => {
    var r, i;
    let c = e[n].message_notifications !== u.bL.NULL,
      l = a.yE(null != (r = e[n].flags) ? r : 0, _.ic.UNREADS_ALL_MESSAGES) || a.yE(null != (i = e[n].flags) ? i : 0, _.ic.UNREADS_ONLY_MENTIONS);
    return !t.ignoreUnreadSetting && l || !t.ignoreNotificationSetting && c || !t.ignoreMute && (0, o.m$)(e[n])
  })
}

function g(e) {
  let t = (0, r.e7)([i.ZP], () => i.ZP.useNewNotifications);
  return l.xT.useExperiment({
    location: e
  }, {
    autoTrackExposure: !1
  }).enabled && t
}