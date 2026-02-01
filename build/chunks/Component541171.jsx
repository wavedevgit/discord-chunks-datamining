/** Chunk was on 9753 **/
/** chunk id: 541171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk402216 = require("./402216.jsx"),
  Chunk763754 = require("./763754.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  var t;
  let {
    message: n,
    channel: c,
    playingActivity: u,
    onJoinStream: d,
    usernameHook: p,
    compact: m
  } = e, f = (0, a.Ay)(n), g = null == (t = n.call) ? true : t.duration, _ = p(f), h = o.intl.format(o.t.FKXvaI, {
    username: f.nick,
    activityName: null != u ? u.name : "unknown",
    onJoinStream: d,
    usernameHook: _
  });
  return null != g && (h = o.intl.format(o.t.NEFxtd, {
    username: f.nick,
    duration: g.humanize(),
    channelName: c.name,
    usernameHook: _
  })), (0, r.jsx)(s.A, {
    iconNode: null != g ? (0, r.jsx)(i.GT3, {
      size: "custom",
      color: "currentColor",
      width: 20,
      height: 20
    }) : (0, r.jsx)(l.Ay, {
      size: l.Ay.Sizes.SMALL
    }),
    timestamp: n.timestamp,
    compact: m,
    children: h
  })
}