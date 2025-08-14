/** Chunk was on 59207 **/
/** chunk id: 435626, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => v
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
  Chunk969868 = require("./969868.js"),
  Chunk476945 = require("./476945.js"),
  Chunk945182 = require("./945182.js");

function v(t) {
  let {
    analyticsLocations: e,
    transitionState: n,
    onClose: o,
    giftRecipient: i,
    analyticsObject: r
  } = t;
  return (0, c.ZP)(() => {
    g.default.track(f.rMx.GIFT_CATEGORY_SELECT_MODAL_OPENED, {
      location: r,
      location_stack: e
    })
  }), (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(I, {}), (0, a.jsxs)(s.Y0X, {
      size: s.CgR.DYNAMIC,
      transitionState: n,
      className: b.modalRoot,
      parentComponent: "GiftCategorySelectModal",
      children: [(0, a.jsxs)(s.xBx, {
        className: b.header,
        separator: false,
        children: [(0, a.jsx)(s.vwX, {
          tag: s.RB0.H4,
          children: x.intl.string(x.t.YBGjsr)
        }), (0, a.jsx)(s.olH, {
          onClick: () => {
            g.default.track(f.rMx.MODAL_DISMISSED, {
              type: f.jXE.GIFT_CATEGORY_SELECT_MODAL,
              location_object: f.qAy.BUTTON_CTA
            }), o()
          },
          className: b.cursorPointer
        })]
      }), (0, a.jsx)(s.hzk, {
        className: b.modalContent,
        children: (0, a.jsx)(N, {
          analyticsLocations: e,
          giftRecipient: i,
          analyticsObject: r,
          onClose: o
        })
      })]
    })]
  })
}
let I = () => ((0, Chunk267097.Z)(), null);

function N(t) {
  let {
    giftRecipient: e,
    analyticsObject: n,
    onClose: o
  } = t, {
    showBothNitroSkusInCategorySelect: c
  } = y.G.useExperiment({
    location: "gift-button"
  }, {
    autoTrackExposure: false
  }), {
    analyticsLocations: d
  } = (0, u.ZP)(l.Z.GIFT_CATEGORY_SELECT_MODAL), _ = t => {
    t && o()
  }, p = t => {
    var a, o;
    let i = f.Qqv.NITRO_SKU_SELECTION;
    t === T.Si.TIER_2 ? i = f.Qqv.NITRO_STANDARD : t === T.Si.TIER_0 && (i = f.Qqv.NITRO_BASIC), (0, m.Z)({
      isGift: true,
      giftRecipient: e,
      giftingOrigin: T.Wt.DM_CHANNEL,
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
      }({}, n), o = o = {
        section: f.jXE.GIFT_CATEGORY_SELECT_MODAL,
        object: f.qAy.GIFT_CATEGORY_OPTION,
        objectType: i
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(t);
          n.push.apply(n, a)
        }
        return n
      })(Object(o)).forEach(function(t) {
        Object.defineProperty(a, t, Object.getOwnPropertyDescriptor(o, t))
      }), a),
      onClose: _
    })
  };
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(s.P3F, {
      onClick: () => p(c ? T.Si.TIER_2 : true),
      children: (0, a.jsxs)("div", {
        className: i()(b.categoryButton, b.nitroButton),
        children: [(0, a.jsx)(s.Text, {
          variant: "display-sm",
          color: "always-white",
          className: b.buttonText,
          children: x.intl.string(x.t["lG6a5+"])
        }), (0, a.jsx)(S, {
          imageType: 0
        })]
      })
    }), c && (0, a.jsx)(s.P3F, {
      onClick: () => p(T.Si.TIER_0),
      children: (0, a.jsxs)("div", {
        className: i()(b.nitroBasicButton, b.categoryButton),
        children: [(0, a.jsx)(s.Text, {
          variant: "display-sm",
          color: "always-white",
          className: b.buttonText,
          children: x.intl.string(x.t["t9uG/v"])
        }), (0, a.jsx)(S, {
          imageType: 1
        })]
      })
    }), (0, a.jsx)(s.P3F, {
      onClick: () => {
        (0, O.Z)({
          isGift: true,
          giftingOrigin: T.Wt.DM_CHANNEL,
          analyticsLocations: d,
          analyticsObject: n,
          giftRecipient: e,
          onClose: _,
          variantsReturnStyle: r.v.VARIANTS_GROUP
        })
      },
      children: (0, a.jsxs)("div", {
        className: i()(b.shopButton, b.categoryButton),
        children: [(0, a.jsx)(s.Text, {
          variant: "display-sm",
          color: "always-white",
          className: b.buttonText,
          children: x.intl.string(x.t.gFlB9f)
        }), (0, a.jsx)(S, {
          imageType: 2
        })]
      })
    })]
  })
}

function S(t) {
  let {
    imageType: e
  } = t, {
    avatarPlaceholderSrc: n
  } = (0, p.Z)({
    size: (0, d.y9)(s.EFr.SIZE_80)
  }), o = (0, _.Z)("a_c3cffc19e9784f7d0b005eecdf1b566e", s.EFr.SIZE_80, false);
  return 0 === e || 1 === e ? (0, a.jsx)("div", {
    className: b.wumpusImageContainer,
    children: (0, a.jsx)(s.Eep, {
      src: 1 === e ? E : C,
      mediaLayoutType: h.hV.RESPONSIVE,
      width: 122,
      height: 110,
      zoomable: false
    })
  }) : 2 === e ? (0, a.jsx)("div", {
    className: b.shopImageContainer,
    children: (0, a.jsx)(s.qEK, {
      src: n,
      avatarDecoration: o,
      size: s.EFr.SIZE_80,
      "aria-hidden": true
    })
  }) : true
}