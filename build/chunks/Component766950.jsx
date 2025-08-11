/** Chunk was on 47495 **/
/** chunk id: 766950, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk522942 = require("./522942.js"),
  Chunk342905 = require("./342905.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk98278 = require("./98278.js"),
  Chunk740594 = require("./740594.jsx"),
  Chunk612659 = require("./612659.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk364747 = require("./364747.js"),
  Chunk131016 = require("./131016.js"),
  Chunk922626 = require("./922626.js"),
  Chunk579346 = require("./579346.jsx"),
  Chunk438759 = require("./438759.jsx"),
  Chunk512070 = require("./512070.jsx"),
  Chunk305813 = require("./305813.jsx"),
  Chunk203872 = require("./203872.js"),
  Chunk981631 = require("./981631.js"),
  Chunk474936 = require("./474936.js"),
  Chunk698282 = require("./698282.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk584794 = require("./584794.js");

function w(e) {
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
}

function I(e) {
  let {
    onApply: t,
    onSurpriseMe: n,
    onClose: o,
    canApply: l,
    isApplying: a
  } = e, i = (0, h.m)(E.p9.TIER_2), s = (0, r.jsx)(d.zxk, {
    variant: "secondary",
    size: "md",
    onClick: n,
    icon: d.T$Z,
    iconPosition: "start",
    text: T.intl.string(N.default.NOGFdn)
  }), c = (0, r.jsxs)("div", {
    className: D.subscriberButtonContainer,
    children: [s, (0, r.jsx)(d.ua7, {
      text: T.intl.string(N.default.cVTpnp),
      shouldShow: !l,
      children: e => {
        var n, o;
        return (0, r.jsx)(d.zxk, (n = w({}, e), o = o = {
          onClick: t,
          disabled: !l || a,
          loading: a,
          text: T.intl.string(T.t["1Qm829"]),
          variant: "primary",
          size: "md",
          fullWidth: true
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(o)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(o, e))
        }), n))
      }
    })]
  }), u = (0, r.jsxs)("div", {
    className: D.upsell,
    children: [(0, r.jsxs)("div", {
      className: D.descriptionContainer,
      children: [(0, r.jsx)(d.ua7, {
        text: T.intl.string(T.t["5AFxuL"]),
        children: e => (0, r.jsx)(d.SrA, w({
          size: "md",
          colorClass: D.nitroIcon
        }, e))
      }), (0, r.jsx)(d.Text, {
        variant: "text-md/medium",
        color: "text-default",
        className: D.description,
        children: T.intl.format(N.default.PWf0xc, {
          onClickNitro: () => {
            x.default.track(k.rMx.DISPLAY_NAME_STYLES_NITRO_CLICKED), (0, m.$)(o)
          }
        })
      })]
    }), (0, r.jsxs)("div", {
      className: D.buttonContainer,
      children: [s, (0, r.jsx)(g.Z, {
        premiumModalAnalyticsLocation: {
          section: k.jXE.DISPLAY_NAME_STYLES_MODAL_FOOTER,
          object: k.qAy.PREMIUM_UPSELL_BUTTON
        },
        subscriptionTier: E.Si.TIER_2
      })]
    })]
  });
  return (0, r.jsx)(d.mzw, {
    "data-migration-pending": true,
    className: D.footer,
    children: i ? c : u
  })
}

function A(e) {
  var t, n, m, g, h, E, w, A, L, R;
  let {
    transitionState: B,
    analyticsLocations: M,
    guild: Z,
    onClose: Y
  } = e, G = (0, s.e7)([b.default], () => b.default.getCurrentUser()), H = null != (w = null == G || null == (t = G.displayNameStyles) ? true : t.colors) ? w : [], z = (0, v.J)(), [F, U] = o.useState(null != (A = null == G || null == (n = G.displayNameStyles) ? true : n.fontId) ? A : i.C.DEFAULT), [X, K] = o.useState(null != (L = null == G || null == (m = G.displayNameStyles) ? true : m.effectId) ? L : a.m.SOLID), [q, V] = o.useState(H.length > 0 && X !== a.m.GRADIENT ? H[0] : z[X].defaultColors[0]), [W, $] = o.useState(H.length > 0 && X === a.m.GRADIENT ? H : z[a.m.GRADIENT].defaultColors);
  (0, f.Z)({
    type: l.ImpressionTypes.POPOUT,
    name: l.ImpressionNames.DISPLAY_NAME_STYLES_MODAL
  }, {
    trackOnInitialLoad: true
  });
  let {
    analyticsLocations: J
  } = (0, p.ZP)(M, u.Z.EDIT_DISPLAY_NAME_STYLES_MODAL), {
    handleApplyDisplayNameStyles: Q,
    isApplying: ee
  } = (0, S.Z)({
    onSuccess: () => {
      Y()
    },
    onError: e => {}
  }), et = X === a.m.GRADIENT ? W : [q], en = F !== (null == G || null == (g = G.displayNameStyles) ? true : g.fontId) || X !== (null == G || null == (h = G.displayNameStyles) ? true : h.effectId) || !(0, c.E)(et, null != (R = null == G || null == (E = G.displayNameStyles) ? true : E.colors) ? R : []);
  return (o.useEffect(() => {}, [J]), null == G) ? null : (0, r.jsx)(p.Gt, {
    value: J,
    children: (0, r.jsx)(j.k.Provider, {
      value: {
        overrideSettings: true
      },
      children: (0, r.jsxs)(d.Y0X, {
        "data-migration-pending": true,
        transitionState: B,
        size: d.CgR.LARGE,
        parentComponent: "DisplayNameStylesModal",
        className: D.modalRoot,
        children: [(0, r.jsxs)(d.hzk, {
          "data-migration-pending": true,
          className: D.modalContent,
          style: {
            overflow: "hidden auto"
          },
          children: [(0, r.jsxs)("div", {
            className: D.selectionSection,
            children: [(0, r.jsx)(d.xBx, {
              "data-migration-pending": true,
              separator: false,
              className: D.sectionHeader,
              children: (0, r.jsx)(d.X6q, {
                variant: "heading-lg/semibold",
                children: T.intl.string(N.default.ZPMAlZ)
              })
            }), (0, r.jsx)(O.Z, {
              selectedFontId: F,
              setSelectedFontId: U,
              className: D.selectionSubSection
            }), (0, r.jsx)(y.Z, {
              selectedEffectId: X,
              setSelectedEffectId: e => {
                K(e)
              },
              className: D.selectionSubSection,
              configs: z
            }), (0, r.jsx)(C.Z, {
              selectedColors: et,
              setSelectedColors: e => {
                X === a.m.GRADIENT ? $(e) : V(e[0])
              },
              selectedEffectId: X,
              className: D.selectionSubSection,
              defaultColor: z[X].defaultColors[0]
            })]
          }), (0, r.jsx)(P.Z, {
            user: G,
            selectedFontId: F,
            selectedEffectId: X,
            selectedColors: X === a.m.SOLID && (0, c.E)(et, z[X].defaultColors) ? [] : et,
            onClose: Y
          })]
        }), (0, r.jsx)(I, {
          isApplying: ee,
          onApply: () => {
            if (en) {
              let e = et;
              X === a.m.SOLID && et.length > 0 && et[0] === z[X].defaultColors[0] && (e = []), Q({
                fontId: F,
                effectId: X,
                colors: e
              }), x.default.track(k.rMx.DISPLAY_NAME_STYLES_APPLIED, {
                font_name: i.C[F],
                effect_name: a.m[X],
                colors: et
              })
            }
          },
          onSurpriseMe: () => {
            let e = (0, _.aY)();
            U(e.fontId), K(e.effectId), V(e.colors[0]), $(e.colors), x.default.track(k.rMx.DISPLAY_NAME_STYLES_SURPRISE_ME)
          },
          onClose: Y,
          canApply: en,
          analyticsLocations: J
        })]
      })
    })
  })
}