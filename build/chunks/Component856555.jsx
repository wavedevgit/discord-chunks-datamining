/** Chunk was on 1272 **/
/** chunk id: 856555, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  EQ: () => O,
  Pk: () => E
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk704215 = require("./704215.js"),
  Chunk266454 = require("./266454.js"),
  Chunk930153 = require("./930153.js"),
  Chunk507808 = require("./507808.js"),
  Chunk822857 = require("./822857.js"),
  Chunk543936 = require("./543936.js"),
  Chunk432792 = require("./432792.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk326238 = require("./326238.js");

function g(e) {
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

function m(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}
let b = e => (0, r.jsx)(d.M4, g({
    titleText: f.intl.string(f.t["duN28/"]),
    descriptionText: f.intl.string(f.t["Veu++f"]),
    ctaText: f.intl.string(f.t.F4SoLC),
    customIconSrcs: {
      static: h.Z
    }
  }, e)),
  _ = e => {
    var {
      positionControlRef: t,
      targetElementRef: n,
      children: l
    } = e, a = m(e, ["positionControlRef", "targetElementRef", "children"]);
    let {
      requiredSpacingFromTop: s
    } = (() => {
      let e = i.useCallback(() => (0, o.Lk)(document.body.style.getPropertyValue("--custom-channel-header-height"), 48) + (0, o.Lk)(document.body.style.getPropertyValue("--custom-app-top-bar-height"), 36), []);
      return {
        requiredSpacingFromTop: i.useMemo(() => e(), [e])
      }
    })(), c = i.useCallback(e => {
      if ((e.bottom + e.top) / 2 <= s) returnfalse;
      let t = window.innerHeight - (0, d.t4)();
      return !(e.bottom > t)
    }, [s]);
    return (0, r.jsx)(d.WS, {
      defaultCoachmarkAlign: "bottom",
      targetElementRef: n,
      positionControlRef: t,
      popoutElement: (0, r.jsx)(b, g({}, a)),
      calculateVisibility: c,
      spacing: 12,
      children: l
    })
  },
  O = e => {
    let {
      listScrollerRef: t
    } = e, {
      enabled: n
    } = (0, c.WX)({
      location: "useShopOnboardingCoachmark"
    }), r = i.useRef(null), o = i.useCallback(() => {
      null !== r.current && r.current.updateElementPosition()
    }, []), u = i.useCallback(() => {
      null != t && null != t.current && t.current.scrollToTop({
        animate: true
      })
    }, [t]), f = (0, a.Nj)(l.z.VIRTUAL_CURRENCY_DISCOVERY_ONBOARDING_COACHMARK), {
      shouldShow: h,
      closeCoachmarkIfOpen: g
    } = (0, d.M)({
      onboardingCoachmarkType: "shop",
      prevCoachmarksDismissed: f,
      onShowCoachmarkHandler: u
    }), m = i.useCallback(() => g("CTA_CLICK"), [g]), b = i.useCallback(() => {
      (0, s.Y)({
        pageType: p.ZY5.PRIVATE_CHANNEL_LIST,
        sectionType: p.jXE.ORBS_SHOP_ONBOARDING_COACHMARK,
        ctaObject: p.qAy.SHOP_BUTTON_TO_SHOP_ORBS_TAB
      }), g()
    }, [g]);
    return n ? {
      shouldShow: h,
      closeCoachmarkIfOpen: g,
      onHandleScroll: o,
      positionControlRef: r,
      onClose: g,
      onCtaClick: m,
      onShopButtonClick: b
    } : {
      shouldShow: false,
      closeCoachmarkIfOpen: p.dG4,
      onHandleScroll: p.dG4,
      positionControlRef: r,
      onClose: p.dG4,
      onCtaClick: p.dG4,
      onShopButtonClick: p.dG4
    }
  },
  E = e => {
    var t, n, {
        children: i
      } = e,
      l = m(e, ["children"]);
    return (0, r.jsx)(u.x, {
      errorSource: "ORBS_SHOP_ONBOARDING_COACHMARK",
      renderCustomErrorComponent: () => i,
      children: (0, r.jsx)(_, (t = g({}, l), n = n = {
        children: i
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    })
  }