/** Chunk was on 26434 **/
/** chunk id: 522860, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk194082 = require("./194082.jsx"),
  Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  var t;
  let {
    message: n,
    channel: c,
    playingActivity: u,
    onJoinStream: d,
    usernameHook: p,
    compact: m
  } = e, f = (0, o.ZP)(n), g = null == (t = n.call) ? true : t.duration, _ = p(f), h = s.intl.format(s.t.FKXvaG, {
    username: f.nick,
    activityName: null != u ? u.name : "unknown",
    onJoinStream: d,
    usernameHook: _
  });
  return null != g && (h = s.intl.format(s.t.NEFxtb, {
    username: f.nick,
    duration: g.humanize(),
    channelName: c.name,
    usernameHook: _
  })), (0, r.jsx)(a.Z, {
    iconNode: null != g ? (0, r.jsx)(i.g5r, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20
    }) : (0, r.jsx)(l.ZP, {
      size: l.ZP.Sizes.SMALL
    }),
    timestamp: n.timestamp,
    compact: m,
    children: h
  })
}