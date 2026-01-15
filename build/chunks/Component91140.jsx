/** Chunk was on web.js **/
/** chunk id: 91140, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  W: () => b,
  Z: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk636977 = require("./636977.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk206074 = require("./206074.js"),
  Chunk728345 = require("./728345.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk633181 = require("./633181.jsx"),
  Chunk379357 = require("./379357.js"),
  Chunk442550 = require("./442550.jsx"),
  Chunk297781 = require("./297781.jsx"),
  Chunk443487 = require("./443487.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk835406 = require("./835406.js"),
  Chunk925002 = require("./925002.js");
let b = [Chunk297781.OV, Chunk297781.EE, Chunk297781.Af, Chunk297781.U9, Chunk297781.wO, Chunk297781.f, Chunk297781.n8, Chunk297781.v1, Chunk297781.pQ],
  y = e => {
    let {
      entry: t,
      channel: n,
      selected: i,
      hovered: y,
      isFirstApplicationOccurrence: O
    } = e, {
      largeImage: v
    } = (0, f.rv)({
      entry: t,
      showCoverImage: false
    }), {
      data: S
    } = (0, c.IX)(t.extra.application_id), I = (0, l.q)(S) && O, T = I ? [o.z.CLOUD_PLAY_NEW_BADGE] : [], [C] = (0, u.US)(T);
    return (0, r.jsxs)(h.Zb, {
      selected: i,
      usesCardRows: true,
      children: [(0, r.jsx)(d.Z, {
        applicationId: t.extra.application_id,
        questContent: a.j.MEMBERS_LIST_CARD,
        children: e => {
          var i;
          return (0, r.jsxs)(h.lS, {
            ref: e,
            children: [(0, r.jsxs)(h.e$, {
              children: [(0, r.jsx)(h.F9, {
                entry: t,
                channelId: n.id,
                guildId: n.guild_id
              }), (0, r.jsx)(h.ll, {
                children: t.extra.game_name
              }), (0, r.jsx)(_.Gk, {
                location: _.Gt.CARD,
                children: b.map((e, n) => (0, r.jsx)(e, {
                  entry: t,
                  hovered: y
                }, n))
              })]
            }), (0, r.jsx)(p.f, {
              alt: null != (i = null == v ? true : v.text) ? i : null == v ? true : v.alt,
              src: null == v ? true : v.src,
              size: 48,
              className: E.thumbnail,
              showTooltip: (null == v ? true : v.text) != null
            })]
          })
        }
      }), I && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.xx, {}), (0, r.jsxs)(h.lS, {
          className: g.cloudPlaySection,
          children: [(0, r.jsxs)("div", {
            className: g.cloudPlaySectionTextContainer,
            children: [(0, r.jsx)(s.v3n, {
              color: s.TVs.colors.ICON_SUBTLE,
              size: "xxs"
            }), (0, r.jsx)(s.Text, {
              variant: "text-xs/normal",
              color: "text-subtle",
              children: m.intl.string(m.t["5HiF2i"])
            })]
          }), C === o.z.CLOUD_PLAY_NEW_BADGE && (0, r.jsx)(s.IGR, {
            text: m.intl.string(m.t.y2b7CA),
            color: s.TVs.colors.BACKGROUND_BRAND.css
          })]
        })]
      })]
    })
  },
  O = Chunk473749.memo(y)