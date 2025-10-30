/** Chunk was on web.js **/
/** chunk id: 767714, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk451478 = require("./451478.js"),
  Chunk648613 = require("./648613.jsx"),
  Chunk433390 = require("./433390.js"),
  Chunk474936 = require("./474936.js"),
  Chunk402623 = require("./402623.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function m(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function g(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = b(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function b(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let y = function(e) {
  var {
    subscriptionTier: t,
    onClick: n,
    size: i,
    className: p,
    textOptions: m,
    iconClassName: b,
    postSuccessGuild: y,
    onSubscribeModalClose: O,
    premiumModalAnalyticsLocation: v,
    showIcon: I = true,
    disableShine: S,
    applicationId: T,
    shinyButtonClassName: A,
    showGradient: C = false,
    confirmationFooter: N,
    paymentModalBanner: R,
    color: P,
    iconColor: w = "currentColor"
  } = e, D = E(e, ["subscriptionTier", "onClick", "size", "className", "textOptions", "iconClassName", "postSuccessGuild", "onSubscribeModalClose", "premiumModalAnalyticsLocation", "showIcon", "disableShine", "applicationId", "shinyButtonClassName", "showGradient", "confirmationFooter", "paymentModalBanner", "color", "iconColor"]);
  let L = (0, o.e7)([c.Z], () => c.Z.isFocused()),
    x = (0, d.Z)({
      subscriptionTier: t,
      buttonTextOverride: null == m ? true : m.textOverride,
      defaultTextOverride: null == m ? true : m.subscribeText
    }),
    M = {
      onClick: n,
      subscriptionTier: t,
      postSuccessGuild: y,
      onSubscribeModalClose: O,
      premiumModalAnalyticsLocation: v,
      applicationId: T,
      confirmationFooter: N,
      paymentModalBanner: R
    };

  function k(e) {
    let n = null != P ? P : t === f.Si.TIER_1 ? s.zx.Colors.PRIMARY : s.zx.Colors.GREEN;
    return (0, r.jsx)(u.Z, g(h({}, M), {
      children: o => {
        let {
          onClick: c
        } = o;
        return (0, r.jsxs)(l.gtL, g(h({
          "data-migration-pending": true,
          disabled: x.disabled,
          onClick: c,
          innerClassName: _.premiumSubscribeButton,
          color: n,
          size: i,
          className: A,
          wrapperClassName: a()({
            [_.tier2Gradient]: C && t === f.Si.TIER_2,
            [_.tier1Gradient]: C && t === f.Si.TIER_1
          }, p),
          buttonShineClassName: "buttonShineClassName" in D ? D.buttonShineClassName : n === s.Tt.BRAND_INVERTED ? _.brandShine : true,
          pauseAnimation: !L || S
        }, D, e), {
          children: [I && (0, r.jsx)(l.SrA, {
            size: "md",
            color: w,
            className: a()(_.premiumIcon, b)
          }), (0, r.jsx)("span", {
            className: a()(_.buttonText, null == m ? true : m.textClassName),
            children: x.buttonText
          })]
        }))
      }
    }))
  }
  return null != x.buttonTooltipText ? (0, r.jsx)(l.aML, {
    "data-migration-pending": true,
    text: x.buttonTooltipText,
    children: k
  }) : k()
}