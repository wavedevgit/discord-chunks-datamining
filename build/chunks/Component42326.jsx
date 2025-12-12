/** Chunk was on 48615 **/
/** chunk id: 42326, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
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

function g(e) {
  let {
    errorMessage: t,
    className: n,
    avError: l
  } = e, g = i.useRef(null), v = "", {
    text: h,
    node: E
  } = function(e) {
    var t;
    if (null == e) return {
      text: null,
      node: null
    };
    let n = null == (t = (0, s.hp)(e)) ? true : t.errorCode,
      i = b.intl.formatToPlainString(b.t.ejOT95, {
        errorCode: n
      }),
      l = b.intl.format(b.t.If5Q0h, {
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
  v = null != h ? "".concat(t, " ").concat(h) : t;
  let [_] = i.useState(new o.V7), [y, S] = i.useState(false), [O, C] = i.useState(false), w = i.useCallback(() => {
    _.start(250, () => {
      S(false)
    }, false)
  }, [_, S]), I = i.useCallback(() => {
    _.stop(), S(true)
  }, [_, S]), P = i.useCallback(() => {
    C(true)
  }, []), j = i.useCallback(() => {
    C(false)
  }, []);
  return (0, r.jsx)(c.yRy, {
    renderPopout: () => (0, r.jsx)(f.Z, {
      children: (0, r.jsxs)("div", {
        className: m.popout,
        onMouseEnter: I,
        onMouseLeave: w,
        children: [t, null != E && (0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-muted",
          className: m.errorCodeMessage,
          children: E
        })]
      })
    }),
    targetElementRef: g,
    shouldShow: O || y,
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
            ref: g,
            tabIndex: 0,
            onMouseEnter: I,
            onMouseLeave: w,
            onFocus: P,
            onBlur: j,
            className: a()(n, m.root),
            "aria-label": v
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