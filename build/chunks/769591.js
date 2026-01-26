/** Chunk was on 81579 **/
/** chunk id: 769591, original params: e,n,t (module,exports,require) **/
"use strict";
require.d(exports, {
  b8: () => d,
  ct: () => g,
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

function d() {
  return [{
    id: "15-minutes",
    label: _.intl.string(_.t["8ot6gv"]),
    value: o.Xx.MINUTES_15
  }, {
    id: "1-hour",
    label: _.intl.string(_.t.UMWBZr),
    value: o.Xx.HOURS_1
  }, {
    id: "3-hours",
    label: _.intl.string(_.t.QmYWtu),
    value: o.Xx.HOURS_3
  }, {
    id: "8-hours",
    label: _.intl.string(_.t.EpAXPC),
    value: o.Xx.HOURS_8
  }, {
    id: "24-hours",
    label: _.intl.string(_.t["755t4q"]),
    value: o.Xx.HOURS_24
  }, {
    id: "forever",
    label: _.intl.string(_.t.r3LawO),
    value: o.Xx.ALWAYS
  }]
}
let S = {
  ignoreMute: false,
  ignoreUnreadSetting: true,
  ignoreNotificationSetting: false
};

function g(e) {
  let n = arguments.length > 1 && true !== arguments[1] ? arguments[1] : S;
  return s.default.keys(e).filter(t => {
    var l, a;
    let s = e[t].message_notifications !== u.orn.NULL,
      o = i.Lt(null != (l = e[t].flags) ? l : 0, c.vv.UNREADS_ALL_MESSAGES) || i.Lt(null != (a = e[t].flags) ? a : 0, c.vv.UNREADS_ONLY_MENTIONS);
    return !n.ignoreUnreadSetting && o || !n.ignoreNotificationSetting && s || !n.ignoreMute && (0, r.tG)(e[t])
  })
}

function E(e) {
  return (0, l.bG)([a.Ay], () => a.Ay.useNewNotifications)
}