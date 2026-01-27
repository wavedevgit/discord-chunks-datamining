/** Chunk was on web.js **/
/** chunk id: 322789, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w,
  n: () => C
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
  Chunk657331 = require("./657331.js"),
  Chunk964195 = require("./964195.jsx"),
  Chunk939341 = require("./939341.js"),
  Chunk263577 = require("./263577.jsx"),
  Chunk506326 = require("./506326.jsx"),
  Chunk868065 = require("./868065.jsx"),
  Chunk424994 = require("./424994.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk22589 = require("./22589.js"),
  Chunk332225 = require("./332225.js");

function A(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      A(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let C = [Chunk506326.iq, Chunk506326.Zc, Chunk506326.Xy, Chunk506326.$X, Chunk506326.tR, Chunk506326.K7, Chunk506326.fg, Chunk506326.sp, Chunk506326.MK],
  N = e => {
    let {
      entry: t,
      channel: n,
      selected: i,
      hovered: A,
      isFirstApplicationOccurrence: S,
      trackRankingItemInteraction: N
    } = e, {
      largeImage: w
    } = (0, _.nO)({
      entry: t,
      showCoverImage: false
    }), {
      data: R
    } = (0, c.YY)(t.extra.application_id), P = (0, l.J)(R) && S, D = P ? [o.M.CLOUD_PLAY_NEW_BADGE] : [], [L] = (0, u.kn)(D);
    return (0, r.jsxs)(g.Zp, {
      selected: i,
      usesCardRows: true,
      children: [(0, r.jsx)(d.A, {
        applicationId: t.extra.application_id,
        questContent: a.u.MEMBERS_LIST_CARD,
        children: e => {
          var i;
          return (0, r.jsxs)(g.dM, {
            ref: e,
            children: [(0, r.jsxs)(g.UA, {
              children: [(0, r.jsx)(g.Hp, {
                entry: t,
                channelId: n.id,
                guildId: n.guild_id
              }), (0, r.jsx)(g.ZB, {
                children: t.extra.game_name
              }), (0, r.jsx)(m.mG, {
                location: m.N5.CARD,
                children: C.map((e, n) => (0, r.jsx)(e, {
                  entry: t,
                  hovered: A
                }, n))
              })]
            }), (0, r.jsx)(h.V, {
              alt: null != (i = null == w ? true : w.text) ? i : null == w ? true : w.alt,
              src: null == w ? true : w.src,
              size: 48,
              className: v.xn,
              showTooltip: (null == w ? true : w.text) != null
            })]
          })
        }
      }), P && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(g.ik, {}), (0, r.jsxs)(g.dM, {
          className: O.DK,
          children: [(0, r.jsxs)("div", {
            className: O.tJ,
            children: [(0, r.jsx)(s.hpF, {
              color: s.LU0.colors.ICON_SUBTLE,
              size: "xxs"
            }), (0, r.jsx)(s.Text, {
              variant: "text-xs/normal",
              color: "text-subtle",
              children: b.intl.string(b.t["5HiF2i"])
            })]
          }), L === o.M.CLOUD_PLAY_NEW_BADGE && (0, r.jsx)(s.LpS, {
            text: b.intl.string(b.t.y2b7CA),
            color: s.LU0.colors.BACKGROUND_BRAND.css
          })]
        })]
      }), "applicationWidgetPreview" in t && null != t.applicationWidgetPreview && (0, r.jsx)(p.F, T(I({}, t.applicationWidgetPreview), {
        className: O.AB,
        onClickViewMore: () => {
          N(E.PA.APPLICATION_WIDGET_PREVIEW_VIEW_MORE), (0, f.openUserProfileModal)({
            userId: t.author_id,
            tabSection: y.RP.WIDGETS
          })
        }
      }))]
    })
  },
  w = Chunk64700.memo(N)