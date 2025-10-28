/** Chunk was on 75685 **/
/** chunk id: 352065, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk13941 = require("./13941.js"),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk984802 = require("./984802.js"),
  Chunk163838 = require("./163838.js"),
  Chunk325380 = require("./325380.js");

function p(e) {
  var t, n, l;
  let {
    transitionState: p,
    animationVariant: y = "default",
    returnRef: j,
    "aria-label": m,
    onClose: v,
    trackingProps: g,
    children: h
  } = e, O = o.useId(), x = o.useMemo(() => ({
    id: O,
    headingId: "heading-".concat(O),
    onClose: v,
    dismissable: true
  }), [O, v]), P = (0, d.Ll)(), {
    theme: S
  } = (0, u.TCT)(), C = (0, s.hvB)(p, y);
  return (0, r.jsx)(s.tCf.Provider, {
    value: x,
    children: (0, r.jsx)(u.VqE, (n = function(e) {
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
    }({
      id: O,
      role: "dialog",
      "aria-label": m,
      "aria-labelledby": null != m ? true : x.headingId,
      returnRef: j
    }, g), l = l = {
      impressionType: null != (t = null == g ? true : g.impressionType) ? t : c.ImpressionTypes.MODAL,
      children: (0, r.jsx)(s.y5t, {
        forceLevel: 1,
        children: (0, r.jsx)("div", {
          className: f.outerContainer,
          children: (0, r.jsx)(u.f6W, {
            theme: P,
            children: e => (0, r.jsx)(a.animated.div, {
              "data-mana-component": "layer-modal",
              className: i()(b.container, f.modal, e),
              style: C,
              children: (0, r.jsx)("div", {
                className: f.modalContent,
                children: (0, r.jsx)(u.f6W, {
                  theme: S,
                  children: e => (0, r.jsx)("div", {
                    className: i()(e, f.modalContentInner),
                    children: h
                  })
                })
              })
            })
          })
        })
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(l)).forEach(function(e) {
      Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
    }), n))
  })
}