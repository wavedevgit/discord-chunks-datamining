/** Chunk was on 59207 **/
/** chunk id: 435626, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => I
});
var Chunk54381 = require("./54381.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk311570 = require("./311570.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk1585 = require("./1585.jsx"),
  Chunk821982 = require("./821982.js"),
  Chunk125988 = require("./125988.js"),
  Chunk267097 = require("./267097.js"),
  Chunk109213 = require("./109213.js"),
  Chunk626135 = require("./626135.js"),
  Chunk333867 = require("./333867.jsx"),
  Chunk963249 = require("./963249.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk217702 = require("./217702.js"),
  Chunk474936 = require("./474936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk520597 = require("./520597.js"),
  Chunk476945 = require("./476945.js"),
  Chunk945182 = require("./945182.js");

function I(t) {
  let {
    analyticsLocations: e,
    transitionState: n,
    onClose: a,
    giftRecipient: o,
    analyticsObject: r
  } = t;
  return (0, c.ZP)(() => {
    m.default.track(_.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
      location: r,
      location_stack: e
    })
  }), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(S, {}), (0, i.jsxs)(s.Y0X, {
      "data-migration-pending": true,
      size: s.CgR.DYNAMIC,
      transitionState: n,
      className: x.modalRoot,
      parentComponent: "GiftCategorySelectModal",
      children: [(0, i.jsxs)(s.xBx, {
        "data-migration-pending": true,
        className: x.header,
        separator: false,
        children: [(0, i.jsx)(s.Heading, {
          variant: "heading-md/semibold",
          children: h.intl.string(h.t.YBGjso)
        }), (0, i.jsx)(s.olH, {
          "data-migration-pending": true,
          onClick: () => {
            m.default.track(_.rMx.MODAL_DISMISSED, {
              type: _.jXE.GIFT_CATEGORY_SELECT_MODAL,
              location_object: _.qAy.BUTTON_CTA
            }), a()
          },
          className: x.cursorPointer
        })]
      }), (0, i.jsx)(s.hzk, {
        "data-migration-pending": true,
        className: x.modalContent,
        children: (0, i.jsx)(N, {
          analyticsLocations: e,
          giftRecipient: o,
          analyticsObject: r,
          onClose: a
        })
      })]
    })]
  })
}
let S = () => ((0, y.Z)(), null);

function N(t) {
  let {
    giftRecipient: e,
    analyticsObject: n,
    onClose: a
  } = t, {
    showBothNitroSkusInCategorySelect: c
  } = j.G.useExperiment({
    location: "gift-button"
  }, {
    autoTrackExposure: false
  }), {
    analyticsLocations: u
  } = (0, d.ZP)(l.Z.GIFT_CATEGORY_SELECT_MODAL), p = t => {
    t && a()
  }, g = t => {
    var i, a;
    let o = _.AnalyticsObjectTypes.NITRO_SKU_SELECTION;
    t === b.Si.TIER_2 ? o = _.AnalyticsObjectTypes.NITRO_STANDARD : t === b.Si.TIER_0 && (o = _.AnalyticsObjectTypes.NITRO_BASIC), (0, f.Z)({
      isGift: true,
      giftRecipient: e,
      giftingOrigin: b.Wt.DM_CHANNEL,
      initialPlanId: null,
      analyticsLocations: u,
      subscriptionTier: t,
      analyticsObject: (i = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), i.forEach(function(e) {
            var i;
            i = n[e], e in t ? Object.defineProperty(t, e, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = i
          })
        }
        return t
      }({}, n), a = a = {
        section: _.jXE.GIFT_CATEGORY_SELECT_MODAL,
        object: _.qAy.GIFT_CATEGORY_OPTION,
        objectType: o
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(t);
          n.push.apply(n, i)
        }
        return n
      })(Object(a)).forEach(function(t) {
        Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(a, t))
      }), i),
      onClose: p
    })
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(s.P3F, {
      onClick: () => g(c ? b.Si.TIER_2 : true),
      children: (0, i.jsxs)("div", {
        className: o()(x.categoryButton, x.nitroButton),
        children: [(0, i.jsx)(s.Text, {
          variant: "display-sm",
          color: "always-white",
          className: x.buttonText,
          children: h.intl.string(h.t.lG6a5x)
        }), (0, i.jsx)(A, {
          imageType: 0
        })]
      })
    }), c && (0, i.jsx)(s.P3F, {
      onClick: () => g(b.Si.TIER_0),
      children: (0, i.jsxs)("div", {
        className: o()(x.nitroBasicButton, x.categoryButton),
        children: [(0, i.jsx)(s.Text, {
          variant: "display-sm",
          color: "always-white",
          className: x.buttonText,
          children: h.intl.string(h.t["t9uG/o"])
        }), (0, i.jsx)(A, {
          imageType: 1
        })]
      })
    }), (0, i.jsx)(s.P3F, {
      onClick: () => {
        (0, O.Z)({
          isGift: true,
          giftingOrigin: b.Wt.DM_CHANNEL,
          analyticsLocations: u,
          analyticsObject: n,
          giftRecipient: e,
          onClose: p,
          variantsReturnStyle: r.v.VARIANTS_GROUP
        })
      },
      children: (0, i.jsxs)("div", {
        className: o()(x.shopButton, x.categoryButton),
        children: [(0, i.jsx)(s.Text, {
          variant: "display-sm",
          color: "always-white",
          className: x.buttonText,
          children: h.intl.string(h.t.gFlB9b)
        }), (0, i.jsx)(A, {
          imageType: 2
        })]
      })
    })]
  })
}

function A(t) {
  let {
    imageType: e
  } = t, {
    avatarPlaceholderSrc: n
  } = (0, g.Z)({
    size: (0, u.y9)(s.EFr.SIZE_80)
  }), a = (0, p.Z)("a_c3cffc19e9784f7d0b005eecdf1b566e", s.EFr.SIZE_80, false);
  return 0 === e || 1 === e ? (0, i.jsx)("div", {
    className: x.wumpusImageContainer,
    children: (0, i.jsx)(s.Eep, {
      src: 1 === e ? E : C,
      mediaLayoutType: T.hV.RESPONSIVE,
      width: 122,
      height: 110,
      zoomable: false
    })
  }) : 2 === e ? (0, i.jsx)("div", {
    className: x.shopImageContainer,
    children: (0, i.jsx)(s.qEK, {
      src: n,
      avatarDecoration: a,
      size: s.EFr.SIZE_80,
      "aria-hidden": true
    })
  }) : true
}