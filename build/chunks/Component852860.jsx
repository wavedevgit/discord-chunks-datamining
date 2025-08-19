/** Chunk was on 73628 **/
/** chunk id: 852860, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk585483 = require("./585483.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk435613 = require("./435613.js");
let d = function(e) {
  var t;
  let {
    message: A,
    errorMessage: d,
    submitting: u,
    onReset: g,
    onSave: f,
    onSaveText: p,
    onResetText: h,
    onSaveButtonColor: m,
    disabled: v,
    saveButtonTooltip: b
  } = e, C = r.useRef(null), [q, x] = r.useState(false);
  return r.useEffect(() => {
    function e() {
      x(true), setTimeout(() => x(false), 1e3)
    }
    return i.S.subscribe(o.CkL.EMPHASIZE_NOTICE, e), () => {
      i.S.unsubscribe(o.CkL.EMPHASIZE_NOTICE, e)
    }
  }, []), (0, n.jsx)("div", {
    className: c.container,
    "data-emphasized": q,
    children: (0, n.jsx)("div", {
      className: c.flexContainer,
      ref: C,
      children: (0, n.jsxs)(l.JcV, {
        containerRef: C,
        children: [(0, n.jsx)("div", {
          className: c.shrinkingContainer,
          children: (0, n.jsx)("div", {
            className: c.message,
            children: null != (t = null != d ? d : A) ? t : s.intl.string(s.t.GP7JLC)
          })
        }), (0, n.jsxs)("div", {
          className: c.actions,
          children: [null != g && (0, n.jsx)(a.zx, {
            className: c.resetButton,
            size: a.zx.Sizes.SMALL,
            color: a.zx.Colors.PRIMARY,
            look: a.zx.Looks.LINK,
            onClick: g,
            children: (0, n.jsx)("span", {
              children: null != h ? h : s.intl.string(s.t.yBZMsb)
            })
          }), null != f ? (0, n.jsx)(l.ua7, {
            text: b,
            children: e => {
              var t, A;
              return (0, n.jsx)(a.zx, (t = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                  var A = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(A);
                  "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(A).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(A, e).enumerable
                  }))), n.forEach(function(t) {
                    var n;
                    n = A[t], t in e ? Object.defineProperty(e, t, {
                      value: n,
                      enumerable: true,
                      configurable: true,
                      writable: true
                    }) : e[t] = n
                  })
                }
                return e
              }({
                size: a.zx.Sizes.SMALL,
                color: null != m ? m : a.zx.Colors.GREEN,
                submitting: u,
                disabled: v,
                onClick: f
              }, e), A = A = {
                children: null != p ? p : s.intl.string(s.t.K344S0)
              }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(A)) : (function(e, t) {
                var A = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                  var n = Object.getOwnPropertySymbols(e);
                  A.push.apply(A, n)
                }
                return A
              })(Object(A)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(A, e))
              }), t))
            }
          }) : null]
        })]
      })
    })
  })
}