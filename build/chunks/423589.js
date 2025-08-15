/** Chunk was on 89382 **/
/** chunk id: 423589, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Mn: () => b,
  OD: () => S,
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
let h = {
  ignoreMute: false,
  ignoreUnreadSetting: true,
  ignoreNotificationSetting: false
};

function S(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : h;
  return c.default.keys(e).filter(n => {
    var i, r;
    let c = e[n].message_notifications !== l.bL.NULL,
      s = o.yE(null != (i = e[n].flags) ? i : 0, _.ic.UNREADS_ALL_MESSAGES) || o.yE(null != (r = e[n].flags) ? r : 0, _.ic.UNREADS_ONLY_MENTIONS);
    return !t.ignoreUnreadSetting && s || !t.ignoreNotificationSetting && c || !t.ignoreMute && (0, a.m$)(e[n])
  })
}

function b(e) {
  let t = (0, i.e7)([r.ZP], () => r.ZP.useNewNotifications);
  return s.xT.useExperiment({
    location: e
  }, {
    autoTrackExposure: false
  }).enabled && t
}