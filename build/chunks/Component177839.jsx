/** Chunk was on 20501 **/
/** chunk id: 177839, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk66595 = require("./66595.jsx"),
  Chunk535322 = require("./535322.jsx"),
  Chunk477734 = require("./477734.js"),
  Chunk626135 = require("./626135.js"),
  Chunk881100 = require("./881100.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk920934 = require("./920934.js");
let j = e => e ? x.intl.string(x.t.QX14gI) : x.intl.string(x.t.RGadQU),
  E = e => {
    let {
      isShowingAll: t,
      onClick: n
    } = e;
    return (0, i.jsxs)(o.P3F, {
      onClick: n,
      className: _.customButton,
      children: [t ? x.intl.string(x.t.maZaNz) : x.intl.string(x.t["37C26e"]), t ? (0, i.jsx)(o.u04, {
        size: "md",
        color: "currentColor",
        className: _.arrow
      }) : (0, i.jsx)(o.CJ0, {
        size: "md",
        color: "currentColor",
        className: _.arrow
      })]
    })
  },
  C = e => {
    let {
      title: t,
      description: n,
      className: r,
      imageSource: s,
      imageClassName: l,
      titleBadge: c,
      isNew: g = false,
      isEarlyAccess: h = false
    } = e, {
      analyticsLocations: f
    } = (0, u.ZP)(d.Z.PREMIUM_MARKETING_PERK_CARD);
    return (0, i.jsx)(u.Gt, {
      value: f,
      children: (0, i.jsxs)("div", {
        className: a()(_.perkCard, r),
        children: [g ? (0, i.jsx)(p.Z, {
          className: _.perkCardNewBadge,
          shouldInheritBackgroundColor: true,
          shouldInheritTextColor: true
        }) : null, h ? (0, i.jsx)(m.Z, {
          className: _.perkCardEarlyAccessBadge
        }) : null, (0, i.jsx)("img", {
          src: s,
          alt: "",
          className: a()(l, _.perksCardArt)
        }), (0, i.jsxs)("div", {
          children: [(0, i.jsxs)(o.X6q, {
            variant: "heading-lg/extrabold",
            className: _.perkCardHeading,
            children: [t, " ", c]
          }), (0, i.jsx)(o.Text, {
            variant: "text-sm/normal",
            className: _.perkCardDescription,
            children: "function" == typeof n ? n(f) : n
          })]
        })]
      })
    })
  },
  O = e => {
    let {
      className: t,
      isSubscriberNitroHome: n = false
    } = e, [s, d] = r.useState(false), m = (0, f.N)({
      styles: _
    }), p = (0, l.e7)([c.Z], () => c.Z.useReducedMotion), {
      analyticsLocations: x
    } = (0, u.ZP)(), O = (0, g._f)(), v = [m.emoji, m.streaming, m.upload, m.customAppIcons, m.soundboard, O ? m.remix : m.videoBackground, m.superReactions, m.stickersPremiumPerk, m.badgeAlt];
    return (0, i.jsxs)("div", {
      className: a()(_.perksContainer, t, {
        [_.partiallyHidden]: n && !s,
        [_.subscriberNitroHome]: n,
        [_.reducedMotion]: p
      }),
      children: [(0, i.jsx)(o.X6q, {
        variant: "heading-xxl/extrabold",
        className: _.perksTitle,
        children: j(n)
      }), (0, i.jsx)("div", {
        className: a()(_.perkCardContainer, {
          [_.perkCardContainerExpanded]: s
        }),
        children: v.map(e => null != e && (0, i.jsx)(C, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({}, e), e.title))
      }), n && (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)("div", {
          className: a()({
            [_.sizeGizmo]: !s,
            [_.sizeGizmoExpanded]: s
          }),
          children: (0, i.jsx)(E, {
            onClick: () => {
              h.default.track(b.rMx.PREMIUM_MARKETING_PERKS_SEE_ALL_CLICKED, {
                location_stack: x,
                was_expanded: s
              }), d(!s)
            },
            isShowingAll: s
          })
        }), (0, i.jsx)("div", {
          className: a()(_.cover, {
            [_.hidden]: s
          })
        })]
      })]
    })
  }