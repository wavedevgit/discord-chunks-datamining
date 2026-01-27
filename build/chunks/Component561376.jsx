/** Chunk was on 22841 **/
/** chunk id: 561376, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => v
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

function v(e) {
  let {
    analyticsLocations: t,
    transitionState: a,
    onClose: n,
    giftRecipient: s,
    analyticsObject: r
  } = e;
  return (0, o.Ay)(() => {
    T.default.track(b.HAw.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
      location: r,
      location_stack: t
    })
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(C, {}), (0, i.jsxs)(c.EOs, {
      "data-migration-pending": true,
      size: c.rIJ.DYNAMIC,
      transitionState: a,
      className: h.CR,
      parentComponent: "GiftCategorySelectModal",
      children: [(0, i.jsxs)(c.rQ0, {
        "data-migration-pending": true,
        className: h.wx,
        separator: false,
        children: [(0, i.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          children: f.intl.string(f.t.YBGjso)
        }), (0, i.jsx)(c.s_y, {
          "data-migration-pending": true,
          onClick: () => {
            T.default.track(b.HAw.MODAL_DISMISSED, {
              type: b.JJy.GIFT_CATEGORY_SELECT_MODAL,
              location_object: b.ZSU.BUTTON_CTA
            }), n()
          },
          className: h.or
        })]
      }), (0, i.jsx)(c.$mQ, {
        "data-migration-pending": true,
        className: h.jE,
        children: (0, i.jsx)(I, {
          analyticsLocations: t,
          giftRecipient: s,
          analyticsObject: r,
          onClose: n
        })
      })]
    })]
  })
}
let C = () => ((0, y.A)(), null);

function I(e) {
  let {
    giftRecipient: t,
    analyticsObject: a,
    onClose: n
  } = e, {
    showBothNitroSkusInCategorySelect: o
  } = O.P.useExperiment({
    location: "gift-button"
  }, {
    autoTrackExposure: false
  }), {
    analyticsLocations: _
  } = (0, d.Ay)(l.A.GIFT_CATEGORY_SELECT_MODAL), p = e => {
    e && n()
  }, j = e => {
    var i, n;
    let s = b.AnalyticsObjectTypes.NITRO_SKU_SELECTION;
    e === x.pe.TIER_2 ? s = b.AnalyticsObjectTypes.NITRO_STANDARD : e === x.pe.TIER_0 && (s = b.AnalyticsObjectTypes.NITRO_BASIC), (0, u.A)({
      isGift: true,
      giftRecipient: t,
      giftingOrigin: x.vQ.DM_CHANNEL,
      initialPlanId: null,
      analyticsLocations: _,
      subscriptionTier: e,
      analyticsObject: (i = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var a = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(a);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
            return Object.getOwnPropertyDescriptor(a, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = a[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, a), n = n = {
        section: b.JJy.GIFT_CATEGORY_SELECT_MODAL,
        object: b.ZSU.GIFT_CATEGORY_OPTION,
        objectType: s
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          a.push.apply(a, i)
        }
        return a
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(n, e))
      }), i),
      onClose: p
    })
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(c.DUT, {
      onClick: () => j(o ? x.pe.TIER_2 : true),
      children: (0, i.jsxs)("div", {
        className: s()(h.Hv, h.pr),
        children: [(0, i.jsx)(c.Text, {
          variant: "display-sm",
          color: "always-white",
          className: h._d,
          children: f.intl.string(f.t.lG6a5x)
        }), (0, i.jsx)(N, {
          imageType: 0
        })]
      })
    }), o && (0, i.jsx)(c.DUT, {
      onClick: () => j(x.pe.TIER_0),
      children: (0, i.jsxs)("div", {
        className: s()(h.pn, h.Hv),
        children: [(0, i.jsx)(c.Text, {
          variant: "display-sm",
          color: "always-white",
          className: h._d,
          children: f.intl.string(f.t["t9uG/o"])
        }), (0, i.jsx)(N, {
          imageType: 1
        })]
      })
    }), (0, i.jsx)(c.DUT, {
      onClick: () => {
        (0, g.A)({
          isGift: true,
          giftingOrigin: x.vQ.DM_CHANNEL,
          analyticsLocations: _,
          analyticsObject: a,
          giftRecipient: t,
          onClose: p,
          variantsReturnStyle: r.g.VARIANTS_GROUP
        })
      },
      children: (0, i.jsxs)("div", {
        className: s()(h.xG, h.Hv),
        children: [(0, i.jsx)(c.Text, {
          variant: "display-sm",
          color: "always-white",
          className: h._d,
          children: f.intl.string(f.t.gFlB9b)
        }), (0, i.jsx)(N, {
          imageType: 2
        })]
      })
    })]
  })
}

function N(e) {
  let {
    imageType: t
  } = e, {
    avatarPlaceholderSrc: a
  } = (0, j.A)({
    size: (0, _.Te)(c._3J.SIZE_80)
  }), n = (0, p.A)("a_c3cffc19e9784f7d0b005eecdf1b566e", c._3J.SIZE_80, false);
  return 0 === t || 1 === t ? (0, i.jsx)("div", {
    className: h.wp,
    children: (0, i.jsx)(c._V3, {
      src: 1 === t ? E : A,
      mediaLayoutType: m.dG.RESPONSIVE,
      width: 122,
      height: 110,
      zoomable: false
    })
  }) : 2 === t ? (0, i.jsx)("div", {
    className: h.zT,
    children: (0, i.jsx)(c.euF, {
      src: a,
      avatarDecoration: n,
      size: c._3J.SIZE_80,
      "aria-hidden": true
    })
  }) : true
}