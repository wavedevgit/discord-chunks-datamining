/** Chunk was on 9753 **/
/** chunk id: 933762, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk734057 = require("./734057.js"),
  Chunk763754 = require("./763754.js"),
  Chunk888675 = require("./888675.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk324208 = require("./324208.js");

function d(e) {
  var t;
  let {
    message: n,
    compact: d,
    usernameHook: p,
    onClickThread: m,
    onClickViewThreads: f,
    onContextMenuThread: g
  } = e, _ = (0, s.Ay)(n), h = p(_), b = (0, i.bG)([a.A], () => {
    var e;
    return a.A.getChannel(null == (e = n.messageReference) ? true : e.channel_id)
  }), y = c.intl.format(c.t.cZ9Uf2, {
    actorName: _.nick,
    actorHook: h,
    threadName: null != (t = null == b ? true : b.name) ? t : n.content,
    threadOnClick: {
      onClick: m,
      onContextMenu: g
    },
    viewThreadsOnClick: f
  });
  return (0, r.jsx)(o.A, {
    iconNode: (0, r.jsx)(l.ysw, {
      size: "md",
      color: "currentColor",
      className: u.K
    }),
    timestamp: n.timestamp,
    compact: d,
    children: y
  })
}