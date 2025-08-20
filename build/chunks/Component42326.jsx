/** Chunk was on 37832 **/
/** chunk id: 42326, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk606630 = require("./606630.js");

function g(e) {
  let {
    errorMessage: t,
    className: n,
    avError: i
  } = e, g = "", {
    text: b,
    node: S
  } = function(e) {
    var t;
    if (null == e) return {
      text: null,
      node: null
    };
    let n = null == (t = (0, s.hp)(e)) ? true : t.errorCode,
      l = m.intl.formatToPlainString(m.t["ejOT9/"], {
        errorCode: n
      }),
      i = m.intl.format(m.t.If5Q0t, {
        errorCode: n,
        helpDeskURL: d.Z.getArticleURL(p.BhN.AV_ERROR_CODES)
      }),
      a = c.Z.isDeveloper;
    return {
      text: a ? "".concat(l, " (").concat(e, ")") : l,
      node: a ? (0, r.jsxs)(r.Fragment, {
        children: [i, " (", e, ")"]
      }) : i
    }
  }(i);
  null != t && null != b ? g = "".concat(t, " ").concat(b) : null != t && (g = t);
  let [v] = l.useState(new o.V7), [h, O] = l.useState(false);

  function y() {
    v.start(250, () => {
      O(false)
    })
  }

  function _() {
    v.stop(), O(true)
  }
  return (0, r.jsx)(u.ua7, {
    forceOpen: h,
    disableTooltipPointerEvents: false,
    text: (0, r.jsx)(f.Z, {
      children: (0, r.jsxs)("div", {
        onMouseEnter: _,
        onMouseLeave: y,
        children: [t, null != S && (0, r.jsx)(u.Text, {
          variant: "text-sm/semibold",
          color: "text-muted",
          className: E.errorCodeMessage,
          children: S
        })]
      })
    }),
    position: "bottom",
    color: u.FGA.GREY,
    "aria-label": g,
    children: e => {
      var t, l;
      return (0, r.jsx)("div", (t = function(e) {
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
      }({}, e), l = l = {
        onMouseEnter: _,
        onMouseLeave: y,
        className: a()(n, E.root),
        children: (0, r.jsx)(f.Z, {
          children: (0, r.jsx)(u.Mgn, {
            onMouseEnter: _,
            onMouseLeave: y,
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            "aria-label": g,
            className: E.warningIcon
          })
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
    }
  })
}