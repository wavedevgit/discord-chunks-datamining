/** Chunk was on 69813 **/
/** chunk id: 42326, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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

function m(e) {
  let {
    errorMessage: t,
    className: n,
    avError: i
  } = e, m = l.useRef(null), h = "", {
    text: E,
    node: v
  } = function(e) {
    var t;
    if (null == e) return {
      text: null,
      node: null
    };
    let n = null == (t = (0, s.hp)(e)) ? true : t.errorCode,
      l = g.intl.formatToPlainString(g.t.ejOT95, {
        errorCode: n
      }),
      i = g.intl.format(g.t.If5Q0h, {
        errorCode: n,
        helpDeskURL: d.Z.getArticleURL(p.BhN.AV_ERROR_CODES)
      }),
      a = u.Z.isDeveloper;
    return {
      text: a ? "".concat(l, " (").concat(e, ")") : l,
      node: a ? (0, r.jsxs)(r.Fragment, {
        children: [i, " (", e, ")"]
      }) : i
    }
  }(i);
  h = null != E ? "".concat(t, " ").concat(E) : t;
  let [_] = l.useState(new o.V7), [y, O] = l.useState(false), [C, S] = l.useState(false), I = l.useCallback(() => {
    _.start(250, () => {
      O(false)
    }, false)
  }, [_, O]), N = l.useCallback(() => {
    _.stop(), O(true)
  }, [_, O]), T = l.useCallback(() => {
    S(true)
  }, []), x = l.useCallback(() => {
    S(false)
  }, []);
  return (0, r.jsx)(c.yRy, {
    renderPopout: () => (0, r.jsx)(f.Z, {
      children: (0, r.jsxs)("div", {
        className: b.popout,
        onMouseEnter: N,
        onMouseLeave: I,
        children: [t, null != v && (0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-muted",
          className: b.errorCodeMessage,
          children: v
        })]
      })
    }),
    targetElementRef: m,
    shouldShow: C || y,
    position: "bottom",
    children: e => {
      var t, l;
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
            ref: m,
            tabIndex: 0,
            onMouseEnter: N,
            onMouseLeave: I,
            onFocus: T,
            onBlur: x,
            className: a()(n, b.root),
            "aria-label": h
          }, e), l = l = {
            children: (0, r.jsx)(c.Mgn, {
              size: "custom",
              width: 20,
              height: 20,
              color: "currentColor",
              className: b.warningIcon
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(l)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(l, e))
          }), t))
        })
      })
    }
  })
}