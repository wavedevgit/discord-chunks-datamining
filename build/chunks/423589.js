/** Chunk was on 88039 **/
/** chunk id: 423589, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  Mn: () => g,
  OD: () => b,
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
    label: d.intl.string(d.t["8ot6gv"]),
    value: s.Oe.MINUTES_15
  }, {
    label: d.intl.string(d.t.UMWBZr),
    value: s.Oe.HOURS_1
  }, {
    label: d.intl.string(d.t.QmYWtu),
    value: s.Oe.HOURS_3
  }, {
    label: d.intl.string(d.t.EpAXPC),
    value: s.Oe.HOURS_8
  }, {
    label: d.intl.string(d.t["755t4q"]),
    value: s.Oe.HOURS_24
  }, {
    label: d.intl.string(d.t.r3LawO),
    value: s.Oe.ALWAYS
  }]
}
let _ = {
  ignoreMute: false,
  ignoreUnreadSetting: true,
  ignoreNotificationSetting: false
};

function b(e) {
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : _;
  return r.default.keys(e).filter(t => {
    var c, a;
    let r = e[t].message_notifications !== o.bL.NULL,
      s = i.yE(null != (c = e[t].flags) ? c : 0, u.ic.UNREADS_ALL_MESSAGES) || i.yE(null != (a = e[t].flags) ? a : 0, u.ic.UNREADS_ONLY_MENTIONS);
    return !n.ignoreUnreadSetting && s || !n.ignoreNotificationSetting && r || !n.ignoreMute && (0, l.m$)(e[t])
  })
}

function g(e) {
  return (0, c.e7)([a.ZP], () => a.ZP.useNewNotifications)
}