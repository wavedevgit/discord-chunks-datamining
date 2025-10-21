/** Chunk was on 98350 **/
/** chunk id: 423589, original params: e,t,n (module,exports,require) **/
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
    label: Chunk388032.intl.string(Chunk388032.t["8ot6gv"]),
    value: Chunk969943.Oe.MINUTES_15
  }, {
    label: Chunk388032.intl.string(Chunk388032.t.UMWBZr),
    value: Chunk969943.Oe.HOURS_1
  }, {
    label: Chunk388032.intl.string(Chunk388032.t.QmYWtu),
    value: Chunk969943.Oe.HOURS_3
  }, {
    label: Chunk388032.intl.string(Chunk388032.t.EpAXPC),
    value: Chunk969943.Oe.HOURS_8
  }, {
    label: Chunk388032.intl.string(Chunk388032.t["755t4q"]),
    value: Chunk969943.Oe.HOURS_24
  }, {
    label: Chunk388032.intl.string(Chunk388032.t.r3LawO),
    value: Chunk969943.Oe.ALWAYS
  }]
}
let g = {
  ignoreMute: false,
  ignoreUnreadSetting: true,
  ignoreNotificationSetting: false
};

function O(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : g;
  return o.default.keys(e).filter(n => {
    var i, a;
    let o = e[n].message_notifications !== s.bL.NULL,
      u = r.yE(null != (i = e[n].flags) ? i : 0, c.ic.UNREADS_ALL_MESSAGES) || r.yE(null != (a = e[n].flags) ? a : 0, c.ic.UNREADS_ONLY_MENTIONS);
    return !t.ignoreUnreadSetting && u || !t.ignoreNotificationSetting && o || !t.ignoreMute && (0, l.m$)(e[n])
  })
}

function v(e) {
  return (0, i.e7)([a.ZP], () => a.ZP.useNewNotifications)
}