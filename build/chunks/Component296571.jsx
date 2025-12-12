/** Chunk was on web.js **/
/** chunk id: 296571, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
    usernameHook: f,
    onClickThread: p,
    onClickViewThreads: _,
    onContextMenuThread: m
  } = e, h = (0, s.ZP)(n), g = f(h), E = (0, i.e7)([a.Z], () => {
    var e;
    return a.Z.getChannel(null == (e = n.messageReference) ? true : e.channel_id)
  }), b = c.intl.format(c.t.cZ9Uf2, {
    actorName: h.nick,
    actorHook: g,
    threadName: null != (t = null == E ? true : E.name) ? t : n.content,
    threadOnClick: {
      onClick: p,
      onContextMenu: m
    },
    viewThreadsOnClick: _
  });
  return (0, r.jsx)(l.Z, {
    iconNode: (0, r.jsx)(o.or_, {
      size: "md",
      color: "currentColor",
      className: u.icon
    }),
    timestamp: n.timestamp,
    compact: d,
    children: b
  })
}