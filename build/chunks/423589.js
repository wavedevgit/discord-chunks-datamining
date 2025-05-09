/** Chunk was on 98350 **/
n.d(t, {
  Mn: () => O,
  OD: () => p,
  W9: () => g
}), n(388685), n(997841);
var i = n(442837),
  r = n(798140),
  l = n(9156),
  a = n(630388),
  u = n(709054),
  o = n(312400),
  c = n(981631),
  s = n(969943),
  d = n(526761),
  f = n(388032);

function g() {
  return [{
    label: f.intl.string(f.t["8ot6go"]),
    value: s.Oe.MINUTES_15
  }, {
    label: f.intl.string(f.t.UMWBZm),
    value: s.Oe.HOURS_1
  }, {
    label: f.intl.string(f.t.QmYWtr),
    value: s.Oe.HOURS_3
  }, {
    label: f.intl.string(f.t.EpAXPD),
    value: s.Oe.HOURS_8
  }, {
    label: f.intl.string(f.t["755t4u"]),
    value: s.Oe.HOURS_24
  }, {
    label: f.intl.string(f.t.r3LawM),
    value: s.Oe.ALWAYS
  }]
}
let E = {
  ignoreMute: !1,
  ignoreUnreadSetting: !0,
  ignoreNotificationSetting: !1
};

function p(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E;
  return u.default.keys(e).filter(n => {
    var i, l;
    let u = e[n].message_notifications !== c.bL.NULL,
      o = a.yE(null != (i = e[n].flags) ? i : 0, d.ic.UNREADS_ALL_MESSAGES) || a.yE(null != (l = e[n].flags) ? l : 0, d.ic.UNREADS_ONLY_MENTIONS);
    return !t.ignoreUnreadSetting && o || !t.ignoreNotificationSetting && u || !t.ignoreMute && (0, r.m$)(e[n])
  })
}

function O(e) {
  let t = (0, i.e7)([l.ZP], () => l.ZP.useNewNotifications);
  return o.xT.useExperiment({
    location: e
  }, {
    autoTrackExposure: !1
  }).enabled && t
}