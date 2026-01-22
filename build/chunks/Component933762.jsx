/** Chunk was on web.js **/
/** chunk id: 933762, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
    usernameHook: f,
    onClickThread: p,
    onClickViewThreads: _,
    onContextMenuThread: h
  } = e, m = (0, o.Ay)(n), g = f(m), E = (0, i.bG)([s.A], () => {
    var e;
    return s.A.getChannel(null == (e = n.messageReference) ? true : e.channel_id)
  }), b = c.intl.format(c.t.cZ9Uf2, {
    actorName: m.nick,
    actorHook: g,
    threadName: null != (t = null == E ? true : E.name) ? t : n.content,
    threadOnClick: {
      onClick: p,
      onContextMenu: h
    },
    viewThreadsOnClick: _
  });
  return (0, r.jsx)(l.A, {
    iconNode: (0, r.jsx)(a.ysw, {
      size: "md",
      color: "currentColor",
      className: u.K
    }),
    timestamp: n.timestamp,
    compact: d,
    children: b
  })
}