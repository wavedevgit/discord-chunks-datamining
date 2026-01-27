/** Chunk was on web.js **/
/** chunk id: 468581, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => u,
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk939341 = require("./939341.js"),
  Chunk263577 = require("./263577.jsx"),
  Chunk506326 = require("./506326.jsx"),
  Chunk868065 = require("./868065.jsx"),
  Chunk332225 = require("./332225.js");
let u = [Chunk506326.iq, Chunk506326.Zc, Chunk506326.Xy, Chunk506326.$X, Chunk506326.fg, Chunk506326.MK],
  d = e => {
    let {
      entry: t,
      channel: n,
      selected: i,
      hovered: d
    } = e, {
      largeImage: f
    } = (0, a.nO)({
      entry: t,
      showCoverImage: false
    });
    return (0, r.jsxs)(l.Zp, {
      selected: i,
      children: [(0, r.jsxs)(l.UA, {
        children: [(0, r.jsx)(l.Hp, {
          entry: t,
          channelId: n.id,
          guildId: n.guild_id
        }), (0, r.jsx)(l.ZB, {
          children: t.extra.activity_name
        }), (0, r.jsx)(s.mG, {
          location: s.N5.CARD,
          children: u.map((e, n) => (0, r.jsx)(e, {
            entry: t,
            hovered: d
          }, n))
        })]
      }), (0, r.jsx)(o.V, {
        alt: null == f ? true : f.alt,
        src: null == f ? true : f.src,
        size: 48,
        className: c.xn
      })]
    })
  },
  f = Chunk64700.memo(d)