/** Chunk was on 47863 **/
/** chunk id: 853030, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812652 = require("./812652.jsx"),
  Chunk38242 = require("./38242.js");

function u(e) {
  let {
    mainCTADisabled: t,
    mainCTAOnClick: n,
    align: l,
    ctaText: u,
    hideOptionsButton: f
  } = e, p = i.useRef(null);
  return (0, r.jsxs)("div", {
    className: d.root,
    children: [(0, r.jsx)(s.zx, {
      size: s.zx.Sizes.LARGE,
      className: o()(d.streamButton, {
        [d.withOptions]: !f
      }),
      disabled: t,
      onClick: n,
      children: u
    }), !f && (0, r.jsx)(a.yRy, {
      targetElementRef: p,
      position: "top",
      align: l,
      renderPopout: e => {
        let {
          closePopout: t
        } = e;
        return (0, r.jsx)(c.ZP, {
          onClose: t,
          onSelect: t
        })
      },
      children: e => {
        var t, n;
        return (0, r.jsx)(s.zx, (t = function(e) {
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
          size: s.zx.Sizes.LARGE,
          className: d.optionsButton,
          buttonRef: p
        }, e), n = n = {
          children: (0, r.jsx)(a.Huf, {
            color: "currentColor"
          })
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
      }
    })]
  })
}