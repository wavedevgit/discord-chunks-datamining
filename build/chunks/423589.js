/** Chunk was on 63237 **/
/** chunk id: 423589, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Mn: () => b,
  OD: () => h,
  W9: () => d
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

function d() {
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

function h(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : g;
  return c.default.keys(e).filter(n => {
    var a, o;
    let c = e[n].message_notifications !== r.bL.NULL,
      s = i.yE(null != (a = e[n].flags) ? a : 0, _.ic.UNREADS_ALL_MESSAGES) || i.yE(null != (o = e[n].flags) ? o : 0, _.ic.UNREADS_ONLY_MENTIONS);
    return !t.ignoreUnreadSetting && s || !t.ignoreNotificationSetting && c || !t.ignoreMute && (0, l.m$)(e[n])
  })
}

function b(e) {
  return (0, a.e7)([o.ZP], () => o.ZP.useNewNotifications)
}