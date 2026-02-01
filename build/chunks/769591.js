/** Chunk was on 71020 **/
/** chunk id: 769591, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  b8: () => d,
  ct: () => g,
  os: () => m
}), require("./896048.js"), require("./938796.js");
var Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk544743 = require("./544743.js"),
  Chunk543465 = require("./543465.js"),
  Chunk661191 = require("./661191.js"),
  Chunk652215 = require("./652215.js"),
  Chunk815968 = require("./815968.js"),
  Chunk355097 = require("./355097.js"),
  Chunk985018 = require("./985018.jsx");

function d() {
  return [{
    id: "15-minutes",
    label: u.intl.string(u.t["8ot6gv"]),
    value: c.Xx.MINUTES_15
  }, {
    id: "1-hour",
    label: u.intl.string(u.t.UMWBZr),
    value: c.Xx.HOURS_1
  }, {
    id: "3-hours",
    label: u.intl.string(u.t.QmYWtu),
    value: c.Xx.HOURS_3
  }, {
    id: "8-hours",
    label: u.intl.string(u.t.EpAXPC),
    value: c.Xx.HOURS_8
  }, {
    id: "24-hours",
    label: u.intl.string(u.t["755t4q"]),
    value: c.Xx.HOURS_24
  }, {
    id: "forever",
    label: u.intl.string(u.t.r3LawO),
    value: c.Xx.ALWAYS
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
    var r, a;
    let o = e[n].message_notifications !== s.orn.NULL,
      c = i.Lt(null != (r = e[n].flags) ? r : 0, _.vv.UNREADS_ALL_MESSAGES) || i.Lt(null != (a = e[n].flags) ? a : 0, _.vv.UNREADS_ONLY_MENTIONS);
    return !t.ignoreUnreadSetting && c || !t.ignoreNotificationSetting && o || !t.ignoreMute && (0, l.tG)(e[n])
  })
}

function m(e) {
  return (0, r.bG)([a.Ay], () => a.Ay.useNewNotifications)
}