/** Chunk was on web.js **/
/** chunk id: 322789, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => N,
  n: () => T
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
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk22589 = require("./22589.js"),
  Chunk332225 = require("./332225.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let T = [Chunk506326.iq, Chunk506326.Zc, Chunk506326.Xy, Chunk506326.$X, Chunk506326.tR, Chunk506326.K7, Chunk506326.fg, Chunk506326.sp, Chunk506326.MK],
  C = e => {
    let {
      entry: t,
      channel: n,
      selected: i,
      hovered: v,
      isFirstApplicationOccurrence: I
    } = e, {
      largeImage: C
    } = (0, _.nO)({
      entry: t,
      showCoverImage: false
    }), {
      data: N
    } = (0, c.YY)(t.extra.application_id), w = (0, l.J)(N) && I, R = w ? [s.M.CLOUD_PLAY_NEW_BADGE] : [], [P] = (0, u.kn)(R);
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
                children: T.map((e, n) => (0, r.jsx)(e, {
                  entry: t,
                  hovered: v
                }, n))
              })]
            }), (0, r.jsx)(h.V, {
              alt: null != (i = null == C ? true : C.text) ? i : null == C ? true : C.alt,
              src: null == C ? true : C.src,
              size: 48,
              className: O.xn,
              showTooltip: (null == C ? true : C.text) != null
            })]
          })
        }
      }), w && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(g.ik, {}), (0, r.jsxs)(g.dM, {
          className: b.DK,
          children: [(0, r.jsxs)("div", {
            className: b.tJ,
            children: [(0, r.jsx)(o.hpF, {
              color: o.LU0.colors.ICON_SUBTLE,
              size: "xxs"
            }), (0, r.jsx)(o.Text, {
              variant: "text-xs/normal",
              color: "text-subtle",
              children: y.intl.string(y.t["5HiF2i"])
            })]
          }), P === s.M.CLOUD_PLAY_NEW_BADGE && (0, r.jsx)(o.LpS, {
            text: y.intl.string(y.t.y2b7CA),
            color: o.LU0.colors.BACKGROUND_BRAND.css
          })]
        })]
      }), "applicationWidgetPreview" in t && null != t.applicationWidgetPreview && (0, r.jsx)(p.F, S(A({}, t.applicationWidgetPreview), {
        className: b.AB,
        onClickViewMore: () => {
          (0, f.openUserProfileModal)({
            userId: t.author_id,
            tabSection: E.RP.WIDGETS
          })
        }
      }))]
    })
  },
  N = Chunk64700.memo(C)