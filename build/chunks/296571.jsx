/** Chunk was on web.js **/
/** chunk id: 296571, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk739566 = require("./739566.js"),
  Chunk834129 = require("./834129.js"),
  Chunk388032 = require("./388032.js"),
  Chunk907273 = require("./907273.js");

function d(e) {
  var t;
  let {
    message: n,
    compact: d,
    usernameHook: f,
    onClickThread: _,
    onClickViewThreads: p,
    onContextMenuThread: h
  } = e, m = (0, s.ZP)(n), g = f(m), E = (0, i.e7)([a.Z], () => {
    var e;
    return a.Z.getChannel(null == (e = n.messageReference) ? true : e.channel_id)
  }), b = c.intl.format(c.t.cZ9Uf3, {
    actorName: m.nick,
    actorHook: g,
    threadName: null != (t = null == E ? true : E.name) ? t : n.content,
    threadOnClick: {
      onClick: _,
      onContextMenu: h
    },
    viewThreadsOnClick: p
  });
  return <l.Z iconNode={(0, r.jsx)(o.or_, {
      size: "md",
      color: "currentColor",
      className: u.icon
    })} timestamp={n.timestamp} compact={d}>{b}</l.Z>
}