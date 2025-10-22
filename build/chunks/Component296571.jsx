/** Chunk was on web.js **/
/** chunk id: 296571, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
  Chunk943231 = require("./943231.js");

function d(e) {
  var t;
  let {
    message: n,
    compact: d,
    usernameHook: f,
    onClickThread: _,
    onClickViewThreads: p,
    onContextMenuThread: h
  } = e, m = (0, s.ZP)(n), g = f(m), E = (0, i.e7)([o.Z], () => {
    var e;
    return o.Z.getChannel(null == (e = n.messageReference) ? true : e.channel_id)
  }), b = c.intl.format(c.t.cZ9Uf2, {
    actorName: m.nick,
    actorHook: g,
    threadName: null != (t = null == E ? true : E.name) ? t : n.content,
    threadOnClick: {
      onClick: _,
      onContextMenu: h
    },
    viewThreadsOnClick: p
  });
  return (0, r.jsx)(l.Z, {
    iconNode: (0, r.jsx)(a.or_, {
      size: "md",
      color: "currentColor",
      className: u.icon
    }),
    timestamp: n.timestamp,
    compact: d,
    children: b
  })
}