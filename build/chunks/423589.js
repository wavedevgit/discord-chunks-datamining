/** Chunk was on 24358 **/
/** chunk id: 423589, original params: t,i,e (module,exports,require) **/
require.d(exports, {
  Mn: () => L,
  OD: () => S,
  W9: () => g
}), require("./388685.js"), require("./997841.js");
var Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk798140 = require("./798140.js"),
  Chunk9156 = require("./9156.js"),
  Chunk709054 = require("./709054.js"),
  Chunk981631 = require("./981631.js"),
  Chunk969943 = require("./969943.js"),
  Chunk526761 = require("./526761.js"),
  Chunk388032 = require("./388032.jsx");

function g() {
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
let _ = {
  ignoreMute: false,
  ignoreUnreadSetting: true,
  ignoreNotificationSetting: false
};

function S(t) {
  let i = arguments.length > 1 && true !== arguments[1] ? arguments[1] : _;
  return r.default.keys(t).filter(e => {
    var l, a;
    let r = t[e].message_notifications !== d.bL.NULL,
      o = n.yE(null != (l = t[e].flags) ? l : 0, c.ic.UNREADS_ALL_MESSAGES) || n.yE(null != (a = t[e].flags) ? a : 0, c.ic.UNREADS_ONLY_MENTIONS);
    return !i.ignoreUnreadSetting && o || !i.ignoreNotificationSetting && r || !i.ignoreMute && (0, s.m$)(t[e])
  })
}

function L(t) {
  return (0, l.e7)([a.ZP], () => a.ZP.useNewNotifications)
}