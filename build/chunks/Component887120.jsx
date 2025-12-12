/** Chunk was on web.js **/
/** chunk id: 887120, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk965386 = require("./965386.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk710111 = require("./710111.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    sound: t
  } = e, n = (0, i.e7)([s.Z], () => {
    var e;
    return t.guildId === l.X8 ? c.intl.string(c.t.Rtvk9X) : null == (e = s.Z.getGuild(t.guildId)) ? true : e.name
  });
  return (0, r.jsxs)(a.RX, {
    children: [(null != t.emojiId || null != t.emojiName) && (0, r.jsx)(a.Tw, {
      children: (0, r.jsx)(o.Z, {
        emojiId: t.emojiId,
        emojiName: t.emojiName
      })
    }), (0, r.jsx)(a.z5, {
      children: (0, r.jsx)(a.BR, {
        children: t.name
      })
    }), null != n && (0, r.jsx)(a.dY, {
      children: n
    })]
  })
}