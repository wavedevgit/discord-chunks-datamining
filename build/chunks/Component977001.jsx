/** Chunk was on web.js **/
/** chunk id: 977001, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => m,
  _E: () => _,
  ac: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk56121 = require("./56121.js"),
  Chunk939341 = require("./939341.js"),
  Chunk263577 = require("./263577.jsx"),
  Chunk583846 = require("./583846.js"),
  Chunk506326 = require("./506326.jsx"),
  Chunk868065 = require("./868065.jsx"),
  Chunk332225 = require("./332225.js");
let f = [Chunk506326.Xr],
  p = [Chunk56121.j.WEEK];

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
    } = (0, o.nO)({
      entry: t,
      showCoverImage: false
    }), p = (0, l.TQ)(t);
    return null != p && _(p) ? (0, r.jsxs)(u.Zp, {
      selected: i,
      children: [(0, r.jsxs)(u.UA, {
        children: [(0, r.jsx)(u.Hp, {
          entry: t,
          channelId: n.id,
          guildId: n.guild_id
        }), (0, r.jsx)(u.ZB, {
          children: t.extra.game_name
        }), (0, r.jsx)(c.mG, {
          location: c.N5.CARD,
          children: f.map((e, n) => (0, r.jsx)(e, {
            entry: t
          }, n))
        })]
      }), (0, r.jsx)(s.V, {
        src: null == a ? true : a.src,
        size: 48,
        className: d.xn,
        alt: null == a ? true : a.alt
      })]
    }) : null
  },
  m = Chunk64700.memo(h)