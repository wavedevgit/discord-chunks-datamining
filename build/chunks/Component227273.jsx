/** Chunk was on 5606 **/
/** chunk id: 227273, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk800172 = require("./800172.jsx"),
  Chunk953143 = require("./953143.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk52167 = require("./52167.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk657989 = require("./657989.js");
let A = e => {
    let {
      isShowingAll: t,
      onClick: n
    } = e;
    return (0, r.jsxs)(o.DUT, {
      onClick: n,
      className: h.customButton,
      children: [t ? b.intl.string(b.t.maZaN3) : b.intl.string(b.t["37C26f"]), t ? (0, r.jsx)(o.tN5, {
        size: "md",
        color: "currentColor",
        className: h.arrow
      }) : (0, r.jsx)(o.abt, {
        size: "md",
        color: "currentColor",
        className: h.arrow
      })]
    })
  },
  E = e => {
    let {
      title: t,
      description: n,
      className: i,
      imageSource: l,
      imageClassName: a,
      titleBadge: c,
      isNew: m = false,
      isEarlyAccess: g = false
    } = e, {
      analyticsLocations: f
    } = (0, u.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD);
    return (0, r.jsx)(u.f5, {
      value: f,
      children: (0, r.jsxs)("div", {
        className: s()(h.perkCard, i),
        children: [m ? (0, r.jsx)(_.A, {
          className: h.perkCardNewBadge,
          shouldInheritBackgroundColor: true,
          shouldInheritTextColor: true
        }) : null, g ? (0, r.jsx)(p.A, {
          className: h.perkCardEarlyAccessBadge
        }) : null, (0, r.jsx)("img", {
          src: l,
          alt: "",
          className: s()(a, h.perksCardArt)
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsxs)(o.Heading, {
            variant: "heading-lg/extrabold",
            className: h.perkCardHeading,
            children: [t, " ", c]
          }), (0, r.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: h.perkCardDescription,
            children: "function" == typeof n ? n(f) : n
          })]
        })]
      })
    })
  },
  x = e => {
    let {
      className: t,
      isSubscriberNitroHome: n = false
    } = e, [l, d] = i.useState(false), p = (0, g.d)({
      styles: h
    }), _ = (0, a.bG)([c.A], () => c.A.useReducedMotion), {
      analyticsLocations: x
    } = (0, u.Ay)(), O = [p.emoji, p.streaming, p.upload, p.customAppIcons, p.soundboard, p.videoBackground, p.superReactions, p.stickersPremiumPerk, p.badgeAlt];
    return (0, r.jsxs)("div", {
      className: s()(h.perksContainer, t, {
        [h.partiallyHidden]: n && !l,
        [h.subscriberNitroHome]: n,
        [h.reducedMotion]: _
      }),
      children: [(0, r.jsx)(o.Heading, {
        variant: "heading-xxl/extrabold",
        className: h.perksTitle,
        children: n ? b.intl.string(b.t.QX14gI) : b.intl.string(b.t.RGadQR)
      }), (0, r.jsx)("div", {
        className: s()(h.perkCardContainer, {
          [h.perkCardContainerExpanded]: l
        }),
        children: O.map(e => null != e && (0, r.jsx)(E, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({}, e), e.title))
      }), n && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: s()({
            [h.sizeGizmo]: !l,
            [h.sizeGizmoExpanded]: l
          }),
          children: (0, r.jsx)(A, {
            onClick: () => {
              m.default.track(f.HAw.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                location_stack: x,
                was_expanded: l
              }), d(!l)
            },
            isShowingAll: l
          })
        }), (0, r.jsx)("div", {
          className: s()(h.cover, {
            [h.hidden]: l
          })
        })]
      })]
    })
  }