/** Chunk was on web.js **/
/** chunk id: 514243, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f,
  R: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk939341 = require("./939341.js"),
  Chunk263577 = require("./263577.jsx"),
  Chunk506326 = require("./506326.jsx"),
  Chunk868065 = require("./868065.jsx"),
  Chunk332225 = require("./332225.js");
let u = [Chunk506326.zi, Chunk506326.Rq],
  d = e => {
    let {
      entry: t,
      channel: n,
      selected: i
    } = e, {
      largeImage: d
    } = (0, a.nO)({
      entry: t
    });
    return (0, r.jsxs)(l.Zp, {
      selected: i,
      children: [(0, r.jsxs)(l.UA, {
        children: [(0, r.jsx)(l.Hp, {
          entry: t,
          channelId: n.id,
          guildId: n.guild_id
        }), (0, r.jsx)(l.ZB, {
          children: t.extra.media_title
        }), (0, r.jsx)(o.mG, {
          location: o.N5.CARD,
          children: u.map((e, n) => (0, r.jsx)(e, {
            entry: t
          }, n))
        })]
      }), (0, r.jsx)(s.V, {
        src: null == d ? true : d.src,
        size: 48,
        className: c.xn,
        alt: null == d ? true : d.alt
      })]
    })
  },
  f = Chunk64700.memo(d)