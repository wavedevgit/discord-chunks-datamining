/** Chunk was on 98350 **/
/** chunk id: 423589, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Mn: () => v,
  OD: () => O,
  W9: () => f
}), require("./388685.js"), require("./997841.js");
var Chunk442837 = require("./442837.js"),
  Chunk798140 = require("./798140.js"),
  Chunk9156 = require("./9156.js"),
  Chunk630388 = require("./630388.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk969943 = require("./969943.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");

function f() {
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
let g = {
  ignoreMute: false,
  ignoreUnreadSetting: true,
  ignoreNotificationSetting: false
};

function O(t) {
  let e = arguments.length > 1 && true !== arguments[1] ? arguments[1] : g;
  return o.default.keys(t).filter(n => {
    var i, a;
    let o = t[n].message_notifications !== s.bL.NULL,
      u = r.yE(null != (i = t[n].flags) ? i : 0, c.ic.UNREADS_ALL_MESSAGES) || r.yE(null != (a = t[n].flags) ? a : 0, c.ic.UNREADS_ONLY_MENTIONS);
    return !e.ignoreUnreadSetting && u || !e.ignoreNotificationSetting && o || !e.ignoreMute && (0, l.m$)(t[n])
  })
}

function v(t) {
  return (0, i.e7)([a.ZP], () => a.ZP.useNewNotifications)
}