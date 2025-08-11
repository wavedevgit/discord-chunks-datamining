/** Chunk was on 86653 **/
/** chunk id: 993318, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  AnnouncementModal: () => O,
  WrappedAnnouncementModal: () => v
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk442837 = require("./442837.js"),
  Chunk607070 = require("./607070.js"),
  Chunk313201 = require("./313201.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk688465 = require("./688465.jsx"),
  Chunk794231 = require("./794231.js"),
  Chunk543936 = require("./543936.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk418822 = require("./418822.js"),
  Chunk6210 = require("./6210.js"),
  Chunk313460 = require("./313460.js"),
  Chunk686936 = require("./686936.js"),
  Chunk326238 = require("./326238.js");

function x(e) {
  for (var t = 1; t < arguments.length; t++) {
    var a = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(a);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(a).filter(function(e) {
      return Object.getOwnPropertyDescriptor(a, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = a[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}
let Chunk450390 = require("./450390.js"),
  C = e => {
    var t, a;
    return (0, r.jsx)(s.zx, (t = x({}, e), a = a = {
      "aria-label": p.intl.string(p.t.cpT0Cg),
      look: s.zx.Looks.BLANK,
      size: s.zx.Sizes.NONE,
      children: (0, r.jsx)("img", {
        src: j,
        alt: "Close Modal",
        className: f.closeButtonIcon
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
      var a = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        a.push.apply(a, r)
      }
      return a
    })(Object(a)).forEach(function(e) {
      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
    }), t))
  },
  y = e => {
    let {
      animatedAssetURL: t,
      staticAssetURL: a,
      className: s
    } = e;
    return (0, c.e7)([o.Z], () => o.Z.useReducedMotion) || null == t ? (0, r.jsx)("img", {
      src: a,
      className: s,
      alt: ""
    }) : (0, r.jsx)(i.Z, {
      autoPlay: true,
      loop: true,
      className: s,
      children: (0, r.jsx)("source", {
        src: t,
        type: "video/webm"
      })
    })
  },
  N = e => {
    let {
      header: t,
      subHeader: a,
      staticAsset: s,
      animatedAsset: c
    } = e;
    return (0, r.jsxs)("div", {
      className: f.featureCard,
      children: [(0, r.jsx)(y, {
        staticAssetURL: s,
        animatedAssetURL: c,
        className: f.orbAsset
      }), (0, r.jsxs)("div", {
        className: f.featureCardTextGroup,
        children: [(0, r.jsx)(n.X6q, {
          variant: "heading-md/extrabold",
          className: f.featureCardTextHeader,
          children: t
        }), (0, r.jsx)("div", {
          className: f.featureCardTextSubHeader,
          children: a
        })]
      })]
    })
  },
  O = e => {
    let {
      onClose: t,
      ctaOnClick: a,
      transitionState: s
    } = e, c = (0, d.Dt)(), {
      showBetaTag: o
    } = u.Z.useExperiment({
      location: "virtual_currency_announcement_modal_v2"
    }), i = [{
      header: p.intl.string(p.t["2Nvn8/"]),
      subHeader: p.intl.string(p.t.F1lGFx),
      staticAsset: _.Z
    }, {
      header: p.intl.string(p.t["1IEs7+"]),
      subHeader: p.intl.string(p.t.mej05u),
      staticAsset: g.Z
    }];
    return (0, r.jsxs)(n.Y0X, {
      className: f.root,
      transitionState: s,
      "aria-labelledby": c,
      "data-migration-pending": true,
      hideShadow: true,
      parentComponent: "AnnouncementModalV2",
      children: [(0, r.jsx)(C, {
        className: f.closeButton,
        onClick: t
      }), (0, r.jsx)(y, {
        staticAssetURL: m.Z,
        animatedAssetURL: h.Z,
        className: f.heroAsset
      }), (0, r.jsxs)(n.hzk, {
        className: f.content,
        children: [(0, r.jsxs)("div", {
          className: f.headerContainer,
          children: [(0, r.jsx)(n.X6q, {
            variant: "display-md",
            className: f.header,
            children: p.intl.string(p.t.XKlAys)
          }), o && (0, r.jsx)(l.Z, {
            className: f.betaBadge
          })]
        }), (0, r.jsx)(n.X6q, {
          variant: "heading-lg/semibold",
          className: f.subHeader,
          children: p.intl.string(p.t.icWQKi)
        }), i.length > 0 && (0, r.jsx)("div", {
          className: f.featureCardGroup,
          children: i.map((e, t) => (0, r.jsx)(N, x({}, e), "".concat(e.header, "_").concat(t)))
        }), (0, r.jsx)(n.gtL, {
          onClick: a,
          color: f.buttonColor,
          className: f.button,
          children: p.intl.string(p.t.ynollp)
        })]
      })]
    })
  },
  v = e => (0, r.jsx)(b.x, {
    errorSource: "ORBS_ANNOUNCEMENT_MODAL",
    children: (0, r.jsx)(O, x({}, e))
  })