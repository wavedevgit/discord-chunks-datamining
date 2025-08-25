/** Chunk was on web.js **/
/** chunk id: 522860, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
    usernameHook: _,
    compact: p
  } = e, h = (0, a.ZP)(n), m = null == (t = n.call) ? true : t.duration, g = _(h), E = l.intl.format(l.t.FKXvaG, {
    username: h.nick,
    activityName: null != d ? d.name : "unknown",
    onJoinStream: f,
    usernameHook: g
  });
  return null != m && (E = l.intl.format(l.t.NEFxtb, {
    username: h.nick,
    duration: m.humanize(),
    channelName: u.name,
    usernameHook: g
  })), (0, r.jsx)(s.Z, {
    iconNode: null != m ? (0, r.jsx)(i.g5r, {
      size: "custom",
      color: "currentColor",
      width: c,
      height: c
    }) : (0, r.jsx)(o.ZP, {
      size: o.ZP.Sizes.SMALL
    }),
    timestamp: n.timestamp,
    compact: p,
    children: E
  })
}