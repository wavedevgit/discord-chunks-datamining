/** Chunk was on 68294 **/
/** chunk id: 423589, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Mn: () => S,
  OD: () => f,
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
    label: u.intl.string(u.t["8ot6gv"]),
    value: d.Oe.MINUTES_15
  }, {
    label: u.intl.string(u.t.UMWBZr),
    value: d.Oe.HOURS_1
  }, {
    label: u.intl.string(u.t.QmYWtu),
    value: d.Oe.HOURS_3
  }, {
    label: u.intl.string(u.t.EpAXPC),
    value: d.Oe.HOURS_8
  }, {
    label: u.intl.string(u.t["755t4q"]),
    value: d.Oe.HOURS_24
  }, {
    label: u.intl.string(u.t.r3LawO),
    value: d.Oe.ALWAYS
  }]
}
let _ = {
  ignoreMute: false,
  ignoreUnreadSetting: true,
  ignoreNotificationSetting: false
};

function f(t) {
  let e = arguments.length > 1 && true !== arguments[1] ? arguments[1] : _;
  return r.default.keys(t).filter(n => {
    var l, s;
    let r = t[n].message_notifications !== o.bL.NULL,
      d = i.yE(null != (l = t[n].flags) ? l : 0, c.ic.UNREADS_ALL_MESSAGES) || i.yE(null != (s = t[n].flags) ? s : 0, c.ic.UNREADS_ONLY_MENTIONS);
    return !e.ignoreUnreadSetting && d || !e.ignoreNotificationSetting && r || !e.ignoreMute && (0, a.m$)(t[n])
  })
}

function S(t) {
  return (0, l.e7)([s.ZP], () => s.ZP.useNewNotifications)
}