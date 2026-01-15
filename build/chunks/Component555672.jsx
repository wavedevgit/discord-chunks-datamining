/** Chunk was on web.js **/
/** chunk id: 555672, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Hs: () => f,
  ZP: () => m,
  qy: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk317261 = require("./317261.js"),
  Chunk379357 = require("./379357.js"),
  Chunk442550 = require("./442550.jsx"),
  Chunk561308 = require("./561308.js"),
  Chunk297781 = require("./297781.jsx"),
  Chunk443487 = require("./443487.jsx"),
  Chunk925002 = require("./925002.js");
let f = [Chunk297781.E6],
  p = [Chunk317261._.WEEK];

function _(e) {
  let t = p;
  return null != e && t.includes(e)
}
let h = e => {
    let {
      entry: t,
      channel: n,
      selected: i
    } = e, {
      largeImage: a
    } = (0, o.rv)({
      entry: t,
      showCoverImage: false
    }), p = (0, l.Nq)(t);
    return null != p && _(p) ? (0, r.jsxs)(u.Zb, {
      selected: i,
      children: [(0, r.jsxs)(u.e$, {
        children: [(0, r.jsx)(u.F9, {
          entry: t,
          channelId: n.id,
          guildId: n.guild_id
        }), (0, r.jsx)(u.ll, {
          children: t.extra.game_name
        }), (0, r.jsx)(c.Gk, {
          location: c.Gt.CARD,
          children: f.map((e, n) => (0, r.jsx)(e, {
            entry: t
          }, n))
        })]
      }), (0, r.jsx)(s.f, {
        src: null == a ? true : a.src,
        size: 48,
        className: d.thumbnail,
        alt: null == a ? true : a.alt
      })]
    }) : null
  },
  m = Chunk473749.memo(h)