/** Chunk was on 68605 **/
/** chunk id: 769591, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  b8: () => _,
  ct: () => f,
  os: () => E
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

function _() {
  return [{
    id: "15-minutes",
    label: d.intl.string(d.t["8ot6gv"]),
    value: c.Xx.MINUTES_15
  }, {
    id: "1-hour",
    label: d.intl.string(d.t.UMWBZr),
    value: c.Xx.HOURS_1
  }, {
    id: "3-hours",
    label: d.intl.string(d.t.QmYWtu),
    value: c.Xx.HOURS_3
  }, {
    id: "8-hours",
    label: d.intl.string(d.t.EpAXPC),
    value: c.Xx.HOURS_8
  }, {
    id: "24-hours",
    label: d.intl.string(d.t["755t4q"]),
    value: c.Xx.HOURS_24
  }, {
    id: "forever",
    label: d.intl.string(d.t.r3LawO),
    value: c.Xx.ALWAYS
  }]
}
let S = {
  ignoreMute: false,
  ignoreUnreadSetting: true,
  ignoreNotificationSetting: false
};

function f(e) {
  let t = arguments.length > 1 && true !== arguments[1] ? arguments[1] : S;
  return a.default.keys(e).filter(n => {
    var i, u;
    let a = e[n].message_notifications !== s.orn.NULL,
      c = l.Lt(null != (i = e[n].flags) ? i : 0, o.vv.UNREADS_ALL_MESSAGES) || l.Lt(null != (u = e[n].flags) ? u : 0, o.vv.UNREADS_ONLY_MENTIONS);
    return !t.ignoreUnreadSetting && c || !t.ignoreNotificationSetting && a || !t.ignoreMute && (0, r.tG)(e[n])
  })
}

function E(e) {
  return (0, i.bG)([u.Ay], () => u.Ay.useNewNotifications)
}