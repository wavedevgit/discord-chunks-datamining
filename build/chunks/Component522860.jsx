/** Chunk was on web.js **/
/** chunk id: 522860, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx");
let c = 20;

function u(e) {
  var t;
  let {
    message: n,
    channel: u,
    playingActivity: d,
    onJoinStream: f,
    usernameHook: p,
    compact: _
  } = e, m = (0, o.ZP)(n), h = null == (t = n.call) ? true : t.duration, g = p(m), E = l.intl.format(l.t.FKXvaI, {
    username: m.nick,
    activityName: null != d ? d.name : "unknown",
    onJoinStream: f,
    usernameHook: g
  });
  return null != h && (E = l.intl.format(l.t.NEFxtd, {
    username: m.nick,
    duration: h.humanize(),
    channelName: u.name,
    usernameHook: g
  })), (0, r.jsx)(s.Z, {
    iconNode: null != h ? (0, r.jsx)(i.g5r, {
      size: "custom",
      color: "currentColor",
      width: c,
      height: c
    }) : (0, r.jsx)(a.ZP, {
      size: a.ZP.Sizes.SMALL
    }),
    timestamp: n.timestamp,
    compact: _,
    children: E
  })
}