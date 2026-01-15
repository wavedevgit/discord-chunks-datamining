/** Chunk was on web.js **/
/** chunk id: 177839, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk66595 = require("./66595.jsx"),
  Chunk535322 = require("./535322.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk881100 = require("./881100.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk309091 = require("./309091.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}
let O = e => e ? g.intl.string(g.t.QX14gI) : g.intl.string(g.t.RGadQR),
  v = e => {
    let {
      isShowingAll: t,
      onClick: n
    } = e;
    return (0, r.jsxs)(l.P3F, {
      onClick: n,
      className: E.customButton,
      children: [t ? g.intl.string(g.t.maZaN3) : g.intl.string(g.t["37C26f"]), t ? (0, r.jsx)(l.u04, {
        size: "md",
        color: "currentColor",
        className: E.arrow
      }) : (0, r.jsx)(l.CJ0, {
        size: "md",
        color: "currentColor",
        className: E.arrow
      })]
    })
  },
  S = e => {
    let {
      title: t,
      description: n,
      className: i,
      imageSource: a,
      imageClassName: s,
      titleBadge: c,
      isNew: _ = false,
      isEarlyAccess: h = false
    } = e, {
      analyticsLocations: m
    } = (0, d.ZP)(u.Z.PREMIUM_MARKETING_PERK_CARD);
    return (0, r.jsx)(d.Gt, {
      value: m,
      children: (0, r.jsxs)("div", {
        className: o()(E.perkCard, i),
        children: [_ ? (0, r.jsx)(p.Z, {
          className: E.perkCardNewBadge,
          shouldInheritBackgroundColor: true,
          shouldInheritTextColor: true
        }) : null, h ? (0, r.jsx)(f.Z, {
          className: E.perkCardEarlyAccessBadge
        }) : null, (0, r.jsx)("img", {
          src: a,
          alt: "",
          className: o()(s, E.perksCardArt)
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsxs)(l.Heading, {
            variant: "heading-lg/extrabold",
            className: E.perkCardHeading,
            children: [t, " ", c]
          }), (0, r.jsx)(l.Text, {
            variant: "text-sm/normal",
            className: E.perkCardDescription,
            children: "function" == typeof n ? n(m) : n
          })]
        })]
      })
    })
  },
  I = e => {
    let {
      className: t,
      isSubscriberNitroHome: n = false
    } = e, [a, u] = i.useState(false), f = (0, h.N)({
      styles: E
    }), p = (0, s.e7)([c.Z], () => c.Z.useReducedMotion), {
      analyticsLocations: g
    } = (0, d.ZP)(), b = () => {
      _.default.track(m.rMx.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
        location_stack: g,
        was_expanded: a
      }), u(!a)
    }, I = [f.emoji, f.streaming, f.upload, f.customAppIcons, f.soundboard, f.videoBackground, f.superReactions, f.stickersPremiumPerk, f.badgeAlt];
    return (0, r.jsxs)("div", {
      className: o()(E.perksContainer, t, {
        [E.partiallyHidden]: n && !a,
        [E.subscriberNitroHome]: n,
        [E.reducedMotion]: p
      }),
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-xxl/extrabold",
        className: E.perksTitle,
        children: O(n)
      }), (0, r.jsx)("div", {
        className: o()(E.perkCardContainer, {
          [E.perkCardContainerExpanded]: a
        }),
        children: I.map(e => null != e && (0, r.jsx)(S, y({}, e), e.title))
      }), n && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: o()({
            [E.sizeGizmo]: !a,
            [E.sizeGizmoExpanded]: a
          }),
          children: (0, r.jsx)(v, {
            onClick: b,
            isShowingAll: a
          })
        }), (0, r.jsx)("div", {
          className: o()(E.cover, {
            [E.hidden]: a
          })
        })]
      })]
    })
  }