/** Chunk was on 11010 **/
/** chunk id: 42326, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk846519 = require("./846519.js"),
  Chunk481060 = require("./481060.js"),
  Chunk458725 = require("./458725.js"),
  Chunk906467 = require("./906467.js"),
  Chunk63063 = require("./63063.js"),
  Chunk618158 = require("./618158.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk71651 = require("./71651.js");

function b(e) {
  let {
    errorMessage: t,
    className: n,
    avError: l
  } = e, b = i.useRef(null), h = "", {
    text: v,
    node: E
  } = function(e) {
    var t;
    if (null == e) return {
      text: null,
      node: null
    };
    let n = null == (t = (0, s.hp)(e)) ? true : t.errorCode,
      i = g.intl.formatToPlainString(g.t.ejOT95, {
        errorCode: n
      }),
      l = g.intl.format(g.t.If5Q0h, {
        errorCode: n,
        helpDeskURL: d.Z.getArticleURL(p.BhN.AV_ERROR_CODES)
      }),
      a = u.Z.isDeveloper;
    return {
      text: a ? "".concat(i, " (").concat(e, ")") : i,
      node: a ? (0, r.jsxs)(r.Fragment, {
        children: [l, " (", e, ")"]
      }) : l
    }
  }(l);
  h = null != v ? "".concat(t, " ").concat(v) : t;
  let [y] = i.useState(new o.V7), [_, O] = i.useState(false), [C, S] = i.useState(false), x = i.useCallback(() => {
    y.start(250, () => {
      O(false)
    }, false)
  }, [y, O]), I = i.useCallback(() => {
    y.stop(), O(true)
  }, [y, O]), N = i.useCallback(() => {
    S(true)
  }, []), T = i.useCallback(() => {
    S(false)
  }, []);
  return (0, r.jsx)(c.yRy, {
    renderPopout: () => (0, r.jsx)(f.Z, {
      children: (0, r.jsxs)("div", {
        className: m.popout,
        onMouseEnter: I,
        onMouseLeave: x,
        children: [t, null != E && (0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-muted",
          className: m.errorCodeMessage,
          children: E
        })]
      })
    }),
    targetElementRef: b,
    shouldShow: C || _,
    position: "bottom",
    children: e => {
      var t, i;
      return (0, r.jsx)(f.Z, {
        children: (0, r.jsx)(c.tEY, {
          children: (0, r.jsx)("div", (t = function(e) {
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
            ref: b,
            tabIndex: 0,
            onMouseEnter: I,
            onMouseLeave: x,
            onFocus: N,
            onBlur: T,
            className: a()(n, m.root),
            "aria-label": h
          }, e), i = i = {
            children: (0, r.jsx)(c.Mgn, {
              size: "custom",
              width: 20,
              height: 20,
              color: "currentColor",
              className: m.warningIcon
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
          }), t))
        })
      })
    }
  })
}