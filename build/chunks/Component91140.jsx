/** Chunk was on web.js **/
/** chunk id: 91140, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => E,
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk206074 = require("./206074.js"),
  Chunk728345 = require("./728345.js"),
  Chunk377171 = require("./377171.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk379357 = require("./379357.js"),
  Chunk442550 = require("./442550.jsx"),
  Chunk297781 = require("./297781.jsx"),
  Chunk443487 = require("./443487.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk800371 = require("./800371.js"),
  Chunk451419 = require("./451419.js");
let E = [Chunk297781.OV, Chunk297781.EE, Chunk297781.Af, Chunk297781.U9, Chunk297781.wO, Chunk297781.f, Chunk297781.n8, Chunk297781.v1, Chunk297781.pQ],
  b = e => {
    var t;
    let {
      entry: n,
      channel: i,
      selected: b,
      hovered: y,
      isFirstApplicationOccurrence: O
    } = e, {
      largeImage: v
    } = (0, d.rv)({
      entry: n,
      showCoverImage: false
    }), {
      data: I
    } = (0, l.IX)(n.extra.application_id), S = (0, s.q)(I, "MemberListGamingContent") && O, T = S ? [a.z.CLOUD_PLAY_NEW_BADGE] : [], [A] = (0, u.US)(T), C = S;
    return (0, r.jsxs)(p.Zb, {
      selected: b,
      usesCardRows: true,
      isAutoHeight: C,
      children: [(0, r.jsxs)(p.lS, {
        children: [(0, r.jsxs)(p.e$, {
          children: [(0, r.jsx)(p.F9, {
            entry: n,
            channelId: i.id,
            guildId: i.guild_id
          }), (0, r.jsx)(p.ll, {
            children: n.extra.game_name
          }), (0, r.jsx)(_.Gk, {
            location: _.Gt.CARD,
            children: E.map((e, t) => (0, r.jsx)(e, {
              entry: n,
              hovered: y
            }, t))
          })]
        }), (0, r.jsx)(f.f, {
          alt: null != (t = null == v ? true : v.text) ? t : null == v ? true : v.alt,
          src: null == v ? true : v.src,
          size: 48,
          className: g.thumbnail,
          showTooltip: (null == v ? true : v.text) != null
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
              color: "text-secondary",
              children: h.intl.string(h.t["5HiF2i"])
            })]
          }), A === a.z.CLOUD_PLAY_NEW_BADGE && (0, r.jsx)(o.IGR, {
            text: h.intl.string(h.t.y2b7CA),
            color: c.Z.BG_BRAND
          })]
        })]
      })]
    })
  },
  y = Chunk647438.memo(b)