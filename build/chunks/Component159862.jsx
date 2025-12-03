/** Chunk was on web.js **/
/** chunk id: 159862, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => g,
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk206074 = require("./206074.js"),
  Chunk728345 = require("./728345.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk379357 = require("./379357.js"),
  Chunk442550 = require("./442550.jsx"),
  Chunk297781 = require("./297781.jsx"),
  Chunk443487 = require("./443487.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk800371 = require("./800371.js"),
  Chunk451419 = require("./451419.js");
let g = [Chunk297781.OV, Chunk297781.EE, Chunk297781.Af, Chunk297781.U9, Chunk297781.wO, Chunk297781.f, Chunk297781.n8, Chunk297781.v1, Chunk297781.pQ],
  E = e => {
    var t;
    let {
      entry: n,
      channel: i,
      selected: E,
      hovered: b,
      isFirstApplicationOccurrence: y
    } = e, {
      largeImage: O
    } = (0, u.rv)({
      entry: n,
      showCoverImage: false
    }), {
      data: v
    } = (0, l.IX)(n.extra.application_id), S = (0, s.q)(v) && y, I = S ? [a.z.CLOUD_PLAY_NEW_BADGE] : [], [T] = (0, c.US)(I);
    return (0, r.jsxs)(p.Zb, {
      selected: E,
      usesCardRows: true,
      children: [(0, r.jsxs)(p.lS, {
        children: [(0, r.jsxs)(p.e$, {
          children: [(0, r.jsx)(p.F9, {
            entry: n,
            channelId: i.id,
            guildId: i.guild_id
          }), (0, r.jsx)(p.ll, {
            children: n.extra.game_name
          }), (0, r.jsx)(f.Gk, {
            location: f.Gt.CARD,
            children: g.map((e, t) => (0, r.jsx)(e, {
              entry: n,
              hovered: b
            }, t))
          })]
        }), (0, r.jsx)(d.f, {
          alt: null != (t = null == O ? true : O.text) ? t : null == O ? true : O.alt,
          src: null == O ? true : O.src,
          size: 48,
          className: h.thumbnail,
          showTooltip: (null == O ? true : O.text) != null
        })]
      }), S && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(p.xx, {}), (0, r.jsxs)(p.lS, {
          className: m.cloudPlaySection,
          children: [(0, r.jsxs)("div", {
            className: m.cloudPlaySectionTextContainer,
            children: [(0, r.jsx)(o.v3n, {
              color: o.TVs.colors.ICON_SECONDARY,
              size: "xxs"
            }), (0, r.jsx)(o.Text, {
              variant: "text-xs/normal",
              color: "text-subtle",
              children: _.intl.string(_.t["5HiF2i"])
            })]
          }), T === a.z.CLOUD_PLAY_NEW_BADGE && (0, r.jsx)(o.IGR, {
            text: _.intl.string(_.t.y2b7CA),
            color: o.TVs.colors.BG_BRAND.css
          })]
        })]
      })]
    })
  },
  b = Chunk473749.memo(E)