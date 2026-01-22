/** Chunk was on web.js **/
/** chunk id: 541171, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk402216 = require("./402216.jsx"),
  Chunk763754 = require("./763754.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk985018 = require("./985018.jsx");
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
  } = e, h = (0, s.Ay)(n), m = null == (t = n.call) ? true : t.duration, g = p(h), E = l.intl.format(l.t.FKXvaI, {
    username: h.nick,
    activityName: null != d ? d.name : "unknown",
    onJoinStream: f,
    usernameHook: g
  });
  return null != m && (E = l.intl.format(l.t.NEFxtd, {
    username: h.nick,
    duration: m.humanize(),
    channelName: u.name,
    usernameHook: g
  })), (0, r.jsx)(o.A, {
    iconNode: null != m ? (0, r.jsx)(i.GT3, {
      size: "custom",
      color: "currentColor",
      width: c,
      height: c
    }) : (0, r.jsx)(a.Ay, {
      size: a.Ay.Sizes.SMALL
    }),
    timestamp: n.timestamp,
    compact: _,
    children: E
  })
}