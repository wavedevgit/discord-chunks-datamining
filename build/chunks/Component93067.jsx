/** Chunk was on 17869 **/
/** chunk id: 93067, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
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

function g(e) {
  let {
    errorMessage: t,
    className: n,
    avError: i
  } = e, g = r.useRef(null), A = "", {
    text: b,
    node: _
  } = function(e) {
    var t;
    if (null == e) return {
      text: null,
      node: null
    };
    let n = null == (t = (0, c.B1)(e)) ? true : t.errorCode,
      r = f.intl.formatToPlainString(f.t.ejOT95, {
        errorCode: n
      }),
      i = f.intl.format(f.t.If5Q0h, {
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
  A = null != b ? "".concat(t, " ").concat(b) : t;
  let [y] = r.useState(new s.Ep), [E, v] = r.useState(false), [O, C] = r.useState(false), S = r.useCallback(() => {
    y.start(250, () => {
      v(false)
    }, false)
  }, [y, v]), x = r.useCallback(() => {
    y.stop(), v(true)
  }, [y, v]), j = r.useCallback(() => {
    C(true)
  }, []), I = r.useCallback(() => {
    C(false)
  }, []);
  return (0, l.jsx)(o.YNO, {
    renderPopout: () => (0, l.jsx)(h.A, {
      children: (0, l.jsxs)("div", {
        className: m.SW,
        onMouseEnter: x,
        onMouseLeave: S,
        children: [t, null != _ && (0, l.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: "text-muted",
          className: m.F1,
          children: _
        })]
      })
    }),
    targetElementRef: g,
    shouldShow: O || E,
    position: "bottom",
    children: e => {
      var t, r;
      return (0, l.jsx)(h.A, {
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
            ref: g,
            tabIndex: 0,
            onMouseEnter: x,
            onMouseLeave: S,
            onFocus: j,
            onBlur: I,
            className: a()(n, m.zr),
            "aria-label": A
          }, e), r = r = {
            children: (0, l.jsx)(o.EpV, {
              size: "custom",
              width: 20,
              height: 20,
              color: "currentColor",
              className: m.QW
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