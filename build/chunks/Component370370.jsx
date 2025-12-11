/** Chunk was on web.js **/
/** chunk id: 370370, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f,
  j: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk379357 = require("./379357.js"),
  Chunk442550 = require("./442550.jsx"),
  Chunk297781 = require("./297781.jsx"),
  Chunk443487 = require("./443487.jsx"),
  Chunk925002 = require("./925002.js");
let u = [Chunk297781.OV, Chunk297781.EE, Chunk297781.Af, Chunk297781.U9, Chunk297781.n8, Chunk297781.pQ],
  d = e => {
    let {
      entry: t,
      channel: n,
      selected: i,
      hovered: d
    } = e, {
      largeImage: f
    } = (0, a.rv)({
      entry: t,
      showCoverImage: false
    });
    return (0, r.jsxs)(l.Zb, {
      selected: i,
      children: [(0, r.jsxs)(l.e$, {
        children: [(0, r.jsx)(l.F9, {
          entry: t,
          channelId: n.id,
          guildId: n.guild_id
        }), (0, r.jsx)(l.ll, {
          children: t.extra.activity_name
        }), (0, r.jsx)(s.Gk, {
          location: s.Gt.CARD,
          children: u.map((e, n) => (0, r.jsx)(e, {
            entry: t,
            hovered: d
          }, n))
        })]
      }), (0, r.jsx)(o.f, {
        alt: null == f ? true : f.alt,
        src: null == f ? true : f.src,
        size: 48,
        className: c.thumbnail
      })]
    })
  },
  f = Chunk473749.memo(d)