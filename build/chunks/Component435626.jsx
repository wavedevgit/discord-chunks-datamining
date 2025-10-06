/** Chunk was on 59207 **/
/** chunk id: 435626, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => I
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
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
  Chunk528417 = require("./528417.js"),
  Chunk476945 = require("./476945.js"),
  Chunk945182 = require("./945182.js");

function I(t) {
  let {
    analyticsLocations: e,
    transitionState: n,
    onClose: i,
    giftRecipient: o,
    analyticsObject: r
  } = t;
  return (0, c.ZP)(() => {
    j.default.track(h.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
      location: r,
      location_stack: e
    })
  }), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(S, {}), (0, a.jsxs)(s.Y0X, {
      "data-migration-pending": true,
      size: s.CgR.DYNAMIC,
      transitionState: n,
      className: E.modalRoot,
      parentComponent: "GiftCategorySelectModal",
      children: [(0, a.jsxs)(s.xBx, {
        "data-migration-pending": true,
        className: E.header,
        separator: false,
        children: [(0, a.jsx)(s.vwX, {
          tag: s.RB0.H4,
          children: x.intl.string(x.t.YBGjsr)
        }), (0, a.jsx)(s.olH, {
          "data-migration-pending": true,
          onClick: () => {
            j.default.track(h.rMx.MODAL_DISMISSED, {
              type: h.jXE.GIFT_CATEGORY_SELECT_MODAL,
              location_object: h.qAy.BUTTON_CTA
            }), i()
          },
          className: E.cursorPointer
        })]
      }), (0, a.jsx)(s.hzk, {
        "data-migration-pending": true,
        className: E.modalContent,
        children: (0, a.jsx)(v, {
          analyticsLocations: e,
          giftRecipient: o,
          analyticsObject: r,
          onClose: i
        })
      })]
    })]
  })
}
let S = () => ((0, Chunk267097.Z)(), null);

function v(t) {
  let {
    giftRecipient: e,
    analyticsObject: n,
    onClose: i
  } = t, {
    showBothNitroSkusInCategorySelect: c
  } = m.G.useExperiment({
    location: "gift-button"
  }, {
    autoTrackExposure: false
  }), {
    analyticsLocations: d
  } = (0, u.ZP)(l.Z.GIFT_CATEGORY_SELECT_MODAL), p = t => {
    t && i()
  }, _ = t => {
    var a, i;
    let o = h.Qqv.NITRO_SKU_SELECTION;
    t === b.Si.TIER_2 ? o = h.Qqv.NITRO_STANDARD : t === b.Si.TIER_0 && (o = h.Qqv.NITRO_BASIC), (0, O.Z)({
      isGift: true,
      giftRecipient: e,
      giftingOrigin: b.Wt.DM_CHANNEL,
      initialPlanId: null,
      analyticsLocations: d,
      subscriptionTier: t,
      analyticsObject: (a = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            a = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), a.forEach(function(e) {
            var a;
            a = n[e], e in t ? Object.defineProperty(t, e, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = a
          })
        }
        return t
      }({}, n), i = i = {
        section: h.jXE.GIFT_CATEGORY_SELECT_MODAL,
        object: h.qAy.GIFT_CATEGORY_OPTION,
        objectType: o
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          n.push.apply(n, a)
        }
        return n
      })(Object(i)).forEach(function(t) {
        Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(i, t))
      }), a),
      onClose: p
    })
  };
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.P3F, {
      onClick: () => _(c ? b.Si.TIER_2 : true),
      children: (0, a.jsxs)("div", {
        className: o()(E.categoryButton, E.nitroButton),
        children: [(0, a.jsx)(s.Text, {
          variant: "display-sm",
          color: "always-white",
          className: E.buttonText,
          children: x.intl.string(x.t["lG6a5+"])
        }), (0, a.jsx)(N, {
          imageType: 0
        })]
      })
    }), c && (0, a.jsx)(s.P3F, {
      onClick: () => _(b.Si.TIER_0),
      children: (0, a.jsxs)("div", {
        className: o()(E.nitroBasicButton, E.categoryButton),
        children: [(0, a.jsx)(s.Text, {
          variant: "display-sm",
          color: "always-white",
          className: E.buttonText,
          children: x.intl.string(x.t["t9uG/v"])
        }), (0, a.jsx)(N, {
          imageType: 1
        })]
      })
    }), (0, a.jsx)(s.P3F, {
      onClick: () => {
        (0, y.Z)({
          isGift: true,
          giftingOrigin: b.Wt.DM_CHANNEL,
          analyticsLocations: d,
          analyticsObject: n,
          giftRecipient: e,
          onClose: p,
          variantsReturnStyle: r.v.VARIANTS_GROUP
        })
      },
      children: (0, a.jsxs)("div", {
        className: o()(E.shopButton, E.categoryButton),
        children: [(0, a.jsx)(s.Text, {
          variant: "display-sm",
          color: "always-white",
          className: E.buttonText,
          children: x.intl.string(x.t.gFlB9f)
        }), (0, a.jsx)(N, {
          imageType: 2
        })]
      })
    })]
  })
}

function N(t) {
  let {
    imageType: e
  } = t, {
    avatarPlaceholderSrc: n
  } = (0, _.Z)({
    size: (0, d.y9)(s.EFr.SIZE_80)
  }), i = (0, p.Z)("a_c3cffc19e9784f7d0b005eecdf1b566e", s.EFr.SIZE_80, false);
  return 0 === e || 1 === e ? (0, a.jsx)("div", {
    className: E.wumpusImageContainer,
    children: (0, a.jsx)(s.Eep, {
      src: 1 === e ? f : C,
      mediaLayoutType: T.hV.RESPONSIVE,
      width: 122,
      height: 110,
      zoomable: false
    })
  }) : 2 === e ? (0, a.jsx)("div", {
    className: E.shopImageContainer,
    children: (0, a.jsx)(s.qEK, {
      src: n,
      avatarDecoration: i,
      size: s.EFr.SIZE_80,
      "aria-hidden": true
    })
  }) : true
}