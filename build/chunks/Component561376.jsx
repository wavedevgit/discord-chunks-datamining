/** Chunk was on 22841 **/
/** chunk id: 561376, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => C
});
var Chunk627968 = require("./627968.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk635358 = require("./635358.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk954921 = require("./954921.jsx"),
  Chunk920064 = require("./920064.js"),
  Chunk278539 = require("./278539.js"),
  Chunk315949 = require("./315949.js"),
  Chunk547065 = require("./547065.js"),
  Chunk954571 = require("./954571.js"),
  Chunk44120 = require("./44120.jsx"),
  Chunk532794 = require("./532794.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk838541 = require("./838541.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk649178 = require("./649178.js"),
  Chunk793481 = require("./793481.js"),
  Chunk497451 = require("./497451.js");

function C(e) {
  let {
    analyticsLocations: t,
    transitionState: i,
    onClose: n,
    giftRecipient: s,
    analyticsObject: c
  } = e;
  return (0, l.Ay)(() => {
    y.default.track(g.HAw.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
      location: c,
      location_stack: t
    })
  }), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(v, {}), (0, a.jsxs)(r.EOs, {
      "data-migration-pending": true,
      size: r.rIJ.DYNAMIC,
      transitionState: i,
      className: E.CR,
      parentComponent: "GiftCategorySelectModal",
      children: [(0, a.jsxs)(r.rQ0, {
        "data-migration-pending": true,
        className: E.wx,
        separator: false,
        children: [(0, a.jsx)(r.Heading, {
          variant: "heading-md/semibold",
          children: x.intl.string(x.t.YBGjso)
        }), (0, a.jsx)(r.s_y, {
          "data-migration-pending": true,
          onClick: () => {
            y.default.track(g.HAw.MODAL_DISMISSED, {
              type: g.JJy.GIFT_CATEGORY_SELECT_MODAL,
              location_object: g.ZSU.BUTTON_CTA
            }), n()
          },
          className: E.or
        })]
      }), (0, a.jsx)(r.$mQ, {
        "data-migration-pending": true,
        className: E.jE,
        children: (0, a.jsx)(N, {
          analyticsLocations: t,
          giftRecipient: s,
          analyticsObject: c,
          onClose: n
        })
      })]
    })]
  })
}
let v = () => ((0, j.A)(), null);

function N(e) {
  let {
    giftRecipient: t,
    analyticsObject: i,
    onClose: n
  } = e, {
    showBothNitroSkusInCategorySelect: l
  } = O.P.useExperiment({
    location: "gift-button"
  }, {
    autoTrackExposure: false
  }), {
    analyticsLocations: p
  } = (0, d.Ay)(o.A.GIFT_CATEGORY_SELECT_MODAL), b = e => {
    e && n()
  }, _ = e => {
    var a, n;
    let s = g.AnalyticsObjectTypes.NITRO_SKU_SELECTION;
    e === m.pe.TIER_2 ? s = g.AnalyticsObjectTypes.NITRO_STANDARD : e === m.pe.TIER_0 && (s = g.AnalyticsObjectTypes.NITRO_BASIC), (0, f.A)({
      isGift: true,
      giftRecipient: t,
      giftingOrigin: m.vQ.DM_CHANNEL,
      initialPlanId: null,
      analyticsLocations: p,
      subscriptionTier: e,
      analyticsObject: (a = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
            return Object.getOwnPropertyDescriptor(i, e).enumerable
          }))), a.forEach(function(t) {
            var a;
            a = i[t], t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = a
          })
        }
        return e
      }({}, i), n = n = {
        section: g.JJy.GIFT_CATEGORY_SELECT_MODAL,
        object: g.ZSU.GIFT_CATEGORY_OPTION,
        objectType: s
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          i.push.apply(i, a)
        }
        return i
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(n, e))
      }), a),
      onClose: b
    })
  };
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(r.DUT, {
      onClick: () => _(l ? m.pe.TIER_2 : true),
      children: (0, a.jsxs)("div", {
        className: s()(E.Hv, E.pr),
        children: [(0, a.jsx)(r.Text, {
          variant: "display-sm",
          color: "always-white",
          className: E._d,
          children: x.intl.string(x.t.lG6a5x)
        }), (0, a.jsx)(S, {
          imageType: 0
        })]
      })
    }), l && (0, a.jsx)(r.DUT, {
      onClick: () => _(m.pe.TIER_0),
      children: (0, a.jsxs)("div", {
        className: s()(E.pn, E.Hv),
        children: [(0, a.jsx)(r.Text, {
          variant: "display-sm",
          color: "always-white",
          className: E._d,
          children: x.intl.string(x.t["t9uG/o"])
        }), (0, a.jsx)(S, {
          imageType: 1
        })]
      })
    }), (0, a.jsx)(r.DUT, {
      onClick: () => {
        (0, T.A)({
          isGift: true,
          giftingOrigin: m.vQ.DM_CHANNEL,
          analyticsLocations: p,
          analyticsObject: i,
          giftRecipient: t,
          onClose: b,
          variantsReturnStyle: c.g.VARIANTS_GROUP
        })
      },
      children: (0, a.jsxs)("div", {
        className: s()(E.xG, E.Hv),
        children: [(0, a.jsx)(r.Text, {
          variant: "display-sm",
          color: "always-white",
          className: E._d,
          children: x.intl.string(x.t.gFlB9b)
        }), (0, a.jsx)(S, {
          imageType: 2
        })]
      })
    })]
  })
}

function S(e) {
  let {
    imageType: t
  } = e, {
    avatarPlaceholderSrc: i
  } = (0, _.A)({
    size: (0, p.Te)(r._3J.SIZE_80)
  }), n = (0, b.A)("a_c3cffc19e9784f7d0b005eecdf1b566e", r._3J.SIZE_80, false);
  return 0 === t || 1 === t ? (0, a.jsx)("div", {
    className: E.wp,
    children: (0, a.jsx)(r._V3, {
      src: 1 === t ? h : A,
      mediaLayoutType: u.dG.RESPONSIVE,
      width: 122,
      height: 110,
      zoomable: false
    })
  }) : 2 === t ? (0, a.jsx)("div", {
    className: E.zT,
    children: (0, a.jsx)(r.euF, {
      src: i,
      avatarDecoration: n,
      size: r._3J.SIZE_80,
      "aria-hidden": true
    })
  }) : true
}