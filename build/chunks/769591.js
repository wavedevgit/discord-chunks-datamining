/** Chunk was on 49107 **/
/** chunk id: 769591, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  b8: () => g,
  ct: () => A,
  os: () => S
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

function g() {
  return [{
    id: "15-minutes",
    label: c.intl.string(c.t["8ot6gv"]),
    value: d.Xx.MINUTES_15
  }, {
    id: "1-hour",
    label: c.intl.string(c.t.UMWBZr),
    value: d.Xx.HOURS_1
  }, {
    id: "3-hours",
    label: c.intl.string(c.t.QmYWtu),
    value: d.Xx.HOURS_3
  }, {
    id: "8-hours",
    label: c.intl.string(c.t.EpAXPC),
    value: d.Xx.HOURS_8
  }, {
    id: "24-hours",
    label: c.intl.string(c.t["755t4q"]),
    value: d.Xx.HOURS_24
  }, {
    id: "forever",
    label: c.intl.string(c.t.r3LawO),
    value: d.Xx.ALWAYS
  }]
}
let _ = {
  ignoreMute: false,
  ignoreUnreadSetting: true,
  ignoreNotificationSetting: false
};

function A(t) {
  let e = arguments.length > 1 && true !== arguments[1] ? arguments[1] : _;
  return s.default.keys(t).filter(n => {
    var r, a;
    let s = t[n].message_notifications !== o.orn.NULL,
      d = i.Lt(null != (r = t[n].flags) ? r : 0, u.vv.UNREADS_ALL_MESSAGES) || i.Lt(null != (a = t[n].flags) ? a : 0, u.vv.UNREADS_ONLY_MENTIONS);
    return !e.ignoreUnreadSetting && d || !e.ignoreNotificationSetting && s || !e.ignoreMute && (0, l.tG)(t[n])
  })
}

function S(t) {
  return (0, r.bG)([a.Ay], () => a.Ay.useNewNotifications)
}