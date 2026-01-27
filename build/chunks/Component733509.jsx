/** Chunk was on web.js **/
/** chunk id: 733509, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk557158 = require("./557158.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk980504 = require("./980504.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    sound: t
  } = e, n = (0, i.bG)([s.A], () => {
    var e;
    return t.guildId === l.mV ? c.intl.string(c.t.Rtvk9X) : null == (e = s.A.getGuild(t.guildId)) ? true : e.name
  });
  return (0, r.jsxs)(o.Mr, {
    children: [(null != t.emojiId || null != t.emojiName) && (0, r.jsx)(o.Ch, {
      children: (0, r.jsx)(a.A, {
        emojiId: t.emojiId,
        emojiName: t.emojiName
      })
    }), (0, r.jsx)(o.oC, {
      children: (0, r.jsx)(o.dB, {
        children: t.name
      })
    }), null != n && (0, r.jsx)(o.Aq, {
      children: n
    })]
  })
}