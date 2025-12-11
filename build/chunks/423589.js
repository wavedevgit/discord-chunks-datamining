/** Chunk was on 38373 **/
/** chunk id: 423589, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Mn: () => h,
  OD: () => g,
  W9: () => f
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
let b = {
  ignoreMute: false,
  ignoreUnreadSetting: true,
  ignoreNotificationSetting: false
};

function g(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : b;
  return o.default.keys(e).filter(n => {
    var c, l;
    let o = e[n].message_notifications !== r.bL.NULL,
      d = i.yE(null != (c = e[n].flags) ? c : 0, s.ic.UNREADS_ALL_MESSAGES) || i.yE(null != (l = e[n].flags) ? l : 0, s.ic.UNREADS_ONLY_MENTIONS);
    return !t.ignoreUnreadSetting && d || !t.ignoreNotificationSetting && o || !t.ignoreMute && (0, a.m$)(e[n])
  })
}

function h(e) {
  return (0, c.e7)([l.ZP], () => l.ZP.useNewNotifications)
}