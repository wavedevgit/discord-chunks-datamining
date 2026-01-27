/** Chunk was on 31748 **/
/** chunk id: 93067, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk451988 = require("./451988.js"),
  Chunk397927 = require("./397927.js"),
  Chunk709710 = require("./709710.js"),
  Chunk540999 = require("./540999.js"),
  Chunk975571 = require("./975571.js"),
  Chunk447404 = require("./447404.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk156255 = require("./156255.js");

function _(e) {
  let {
    errorMessage: t,
    className: n,
    avError: i
  } = e, _ = l.useRef(null), h = "", {
    text: y,
    node: A
  } = function(e) {
    var t;
    if (null == e) return {
      text: null,
      node: null
    };
    let n = null == (t = (0, c.B1)(e)) ? true : t.errorCode,
      l = g.intl.formatToPlainString(g.t.ejOT95, {
        errorCode: n
      }),
      i = g.intl.format(g.t.If5Q0h, {
        errorCode: n,
        helpDeskURL: d.A.getArticleURL(p.MVz.AV_ERROR_CODES)
      }),
      a = u.A.isDeveloper;
    return {
      text: a ? "".concat(l, " (").concat(e, ")") : l,
      node: a ? (0, r.jsxs)(r.Fragment, {
        children: [i, " (", e, ")"]
      }) : i
    }
  }(i);
  h = null != y ? "".concat(t, " ").concat(y) : t;
  let [b] = l.useState(new o.Ep), [E, v] = l.useState(false), [O, x] = l.useState(false), S = l.useCallback(() => {
    b.start(250, () => {
      v(false)
    }, false)
  }, [b, v]), C = l.useCallback(() => {
    b.stop(), v(true)
  }, [b, v]), N = l.useCallback(() => {
    x(true)
  }, []), I = l.useCallback(() => {
    x(false)
  }, []);
  return (0, r.jsx)(s.YNO, {
    renderPopout: () => (0, r.jsx)(f.A, {
      children: (0, r.jsxs)("div", {
        className: m.SW,
        onMouseEnter: C,
        onMouseLeave: S,
        children: [t, null != A && (0, r.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-muted",
          className: m.F1,
          children: A
        })]
      })
    }),
    targetElementRef: _,
    shouldShow: O || E,
    position: "bottom",
    children: e => {
      var t, l;
      return (0, r.jsx)(f.A, {
        children: (0, r.jsx)(s.vN3, {
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
            ref: _,
            tabIndex: 0,
            onMouseEnter: C,
            onMouseLeave: S,
            onFocus: N,
            onBlur: I,
            className: a()(n, m.zr),
            "aria-label": h
          }, e), l = l = {
            children: (0, r.jsx)(s.EpV, {
              size: "custom",
              width: 20,
              height: 20,
              color: "currentColor",
              className: m.QW
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