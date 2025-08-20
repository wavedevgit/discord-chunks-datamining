/** Chunk was on 99964 **/
/** chunk id: 423589, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Mn: () => b,
  OD: () => h,
  W9: () => u
}), require("./388685.js"), require("./997841.js");
var Chunk442837 = require("./442837.js"),
  Chunk798140 = require("./798140.js"),
  Chunk9156 = require("./9156.js"),
  Chunk630388 = require("./630388.js"),
  Chunk709054 = require("./709054.js"),
  Chunk312400 = require("./312400.js"),
  Chunk981631 = require("./981631.js"),
  Chunk969943 = require("./969943.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");

function u() {
  return [{
    label: Chunk388032.intl.string(Chunk388032.t["8ot6go"]),
    value: Chunk969943.Oe.MINUTES_15
  }, {
    label: Chunk388032.intl.string(Chunk388032.t.UMWBZm),
    value: Chunk969943.Oe.HOURS_1
  }, {
    label: Chunk388032.intl.string(Chunk388032.t.QmYWtr),
    value: Chunk969943.Oe.HOURS_3
  }, {
    label: Chunk388032.intl.string(Chunk388032.t.EpAXPD),
    value: Chunk969943.Oe.HOURS_8
  }, {
    label: Chunk388032.intl.string(Chunk388032.t["755t4u"]),
    value: Chunk969943.Oe.HOURS_24
  }, {
    label: Chunk388032.intl.string(Chunk388032.t.r3LawM),
    value: Chunk969943.Oe.ALWAYS
  }]
}
let S = {
  ignoreMute: false,
  ignoreUnreadSetting: true,
  ignoreNotificationSetting: false
};

function h(e) {
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : S;
  return _.default.keys(e).filter(t => {
    var i, o;
    let _ = e[t].message_notifications !== c.bL.NULL,
      r = s.yE(null != (i = e[t].flags) ? i : 0, d.ic.UNREADS_ALL_MESSAGES) || s.yE(null != (o = e[t].flags) ? o : 0, d.ic.UNREADS_ONLY_MENTIONS);
    return !n.ignoreUnreadSetting && r || !n.ignoreNotificationSetting && _ || !n.ignoreMute && (0, a.m$)(e[t])
  })
}

function b(e) {
  let n = (0, i.e7)([o.ZP], () => o.ZP.useNewNotifications);
  return r.xT.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled && n
}