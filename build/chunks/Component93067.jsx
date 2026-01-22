/** Chunk was on 31748 **/
/** chunk id: 93067, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk451988 = require("./451988.js"),
  Chunk397927 = require("./397927.js"),
  Chunk487329 = require("./487329.js"),
  Chunk540999 = require("./540999.js"),
  Chunk975571 = require("./975571.js"),
  Chunk447404 = require("./447404.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk156255 = require("./156255.js");

function m(e) {
  let {
    errorMessage: t,
    className: n,
    avError: i
  } = e, m = r.useRef(null), h = "", {
    text: A,
    node: y
  } = function(e) {
    var t;
    if (null == e) return {
      text: null,
      node: null
    };
    let n = null == (t = (0, c.B1)(e)) ? true : t.errorCode,
      r = b.intl.formatToPlainString(b.t.ejOT95, {
        errorCode: n
      }),
      i = b.intl.format(b.t.If5Q0h, {
        errorCode: n,
        helpDeskURL: d.A.getArticleURL(p.MVz.AV_ERROR_CODES)
      }),
      a = u.A.isDeveloper;
    return {
      text: a ? "".concat(r, " (").concat(e, ")") : r,
      node: a ? (0, l.jsxs)(l.Fragment, {
        children: [i, " (", e, ")"]
      }) : i
    }
  }(i);
  h = null != A ? "".concat(t, " ").concat(A) : t;
  let [_] = r.useState(new s.Ep), [E, v] = r.useState(false), [O, x] = r.useState(false), S = r.useCallback(() => {
    _.start(250, () => {
      v(false)
    }, false)
  }, [_, v]), N = r.useCallback(() => {
    _.stop(), v(true)
  }, [_, v]), C = r.useCallback(() => {
    x(true)
  }, []), j = r.useCallback(() => {
    x(false)
  }, []);
  return (0, l.jsx)(o.YNO, {
    renderPopout: () => (0, l.jsx)(f.A, {
      children: (0, l.jsxs)("div", {
        className: g.SW,
        onMouseEnter: N,
        onMouseLeave: S,
        children: [t, null != y && (0, l.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-muted",
          className: g.F1,
          children: y
        })]
      })
    }),
    targetElementRef: m,
    shouldShow: O || E,
    position: "bottom",
    children: e => {
      var t, r;
      return (0, l.jsx)(f.A, {
        children: (0, l.jsx)(o.vN3, {
          children: (0, l.jsx)("div", (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), l.forEach(function(t) {
                var l;
                l = n[t], t in e ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = l
              })
            }
            return e
          }({
            ref: m,
            tabIndex: 0,
            onMouseEnter: N,
            onMouseLeave: S,
            onFocus: C,
            onBlur: j,
            className: a()(n, g.zr),
            "aria-label": h
          }, e), r = r = {
            children: (0, l.jsx)(o.EpV, {
              size: "custom",
              width: 20,
              height: 20,
              color: "currentColor",
              className: g.QW
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              n.push.apply(n, l)
            }
            return n
          })(Object(r)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
          }), t))
        })
      })
    }
  })
}