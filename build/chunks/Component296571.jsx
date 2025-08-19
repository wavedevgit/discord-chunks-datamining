/** Chunk was on 91173 **/
/** chunk id: 296571, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk636518 = require("./636518.js");

function d(e) {
  var t;
  let {
    message: n,
    compact: d,
    usernameHook: p,
    onClickThread: m,
    onClickViewThreads: f,
    onContextMenuThread: g
  } = e, _ = (0, o.ZP)(n), h = p(_), b = (0, i.e7)([a.Z], () => {
    var e;
    return a.Z.getChannel(null == (e = n.messageReference) ? true : e.channel_id)
  }), E = c.intl.format(c.t.cZ9Uf3, {
    actorName: _.nick,
    actorHook: h,
    threadName: null != (t = null == b ? true : b.name) ? t : n.content,
    threadOnClick: {
      onClick: m,
      onContextMenu: g
    },
    viewThreadsOnClick: f
  });
  return (0, r.jsx)(s.Z, {
    iconNode: (0, r.jsx)(l.or_, {
      size: "md",
      color: "currentColor",
      className: u.icon
    }),
    timestamp: n.timestamp,
    compact: d,
    children: E
  })
}