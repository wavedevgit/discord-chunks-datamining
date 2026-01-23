/** Chunk was on web.js **/
/** chunk id: 322789, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O,
  n: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk696292 = require("./696292.js"),
  Chunk554146 = require("./554146.js"),
  Chunk397927 = require("./397927.js"),
  Chunk359549 = require("./359549.js"),
  Chunk627363 = require("./627363.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk753845 = require("./753845.jsx"),
  Chunk939341 = require("./939341.js"),
  Chunk263577 = require("./263577.jsx"),
  Chunk506326 = require("./506326.jsx"),
  Chunk868065 = require("./868065.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk22589 = require("./22589.js"),
  Chunk332225 = require("./332225.js");
let y = [Chunk506326.iq, Chunk506326.Zc, Chunk506326.Xy, Chunk506326.$X, Chunk506326.tR, Chunk506326.K7, Chunk506326.fg, Chunk506326.sp, Chunk506326.MK],
  b = e => {
    let {
      entry: t,
      channel: n,
      selected: i,
      hovered: b,
      isFirstApplicationOccurrence: O
    } = e, {
      largeImage: v
    } = (0, f.nO)({
      entry: t,
      showCoverImage: false
    }), {
      data: A
    } = (0, c.YY)(t.extra.application_id), I = (0, l.J)(A) && O, S = I ? [s.M.CLOUD_PLAY_NEW_BADGE] : [], [T] = (0, u.kn)(S);
    return (0, r.jsxs)(h.Zp, {
      selected: i,
      usesCardRows: true,
      children: [(0, r.jsx)(d.A, {
        applicationId: t.extra.application_id,
        questContent: a.u.MEMBERS_LIST_CARD,
        children: e => {
          var i;
          return (0, r.jsxs)(h.dM, {
            ref: e,
            children: [(0, r.jsxs)(h.UA, {
              children: [(0, r.jsx)(h.Hp, {
                entry: t,
                channelId: n.id,
                guildId: n.guild_id
              }), (0, r.jsx)(h.ZB, {
                children: t.extra.game_name
              }), (0, r.jsx)(_.mG, {
                location: _.N5.CARD,
                children: y.map((e, n) => (0, r.jsx)(e, {
                  entry: t,
                  hovered: b
                }, n))
              })]
            }), (0, r.jsx)(p.V, {
              alt: null != (i = null == v ? true : v.text) ? i : null == v ? true : v.alt,
              src: null == v ? true : v.src,
              size: 48,
              className: E.xn,
              showTooltip: (null == v ? true : v.text) != null
            })]
          })
        }
      }), I && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(h.ik, {}), (0, r.jsxs)(h.dM, {
          className: g.D,
          children: [(0, r.jsxs)("div", {
            className: g.t,
            children: [(0, r.jsx)(o.hpF, {
              color: o.LU0.colors.ICON_SUBTLE,
              size: "xxs"
            }), (0, r.jsx)(o.Text, {
              variant: "text-xs/normal",
              color: "text-subtle",
              children: m.intl.string(m.t["5HiF2i"])
            })]
          }), T === s.M.CLOUD_PLAY_NEW_BADGE && (0, r.jsx)(o.LpS, {
            text: m.intl.string(m.t.y2b7CA),
            color: o.LU0.colors.BACKGROUND_BRAND.css
          })]
        })]
      })]
    })
  },
  O = Chunk64700.memo(b)