/** Chunk was on 82224 **/
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
  Chunk181511 = require("./181511.js");

function g(e) {
  let {
    errorMessage: t,
    className: n,
    avError: l
  } = e, g = "", {
    text: v,
    node: b
  } = function(e) {
    var t;
    if (null == e) return {
      text: null,
      node: null
    };
    let n = null == (t = (0, s.hp)(e)) ? true : t.errorCode,
      i = m.intl.formatToPlainString(m.t.ejOT95, {
        errorCode: n
      }),
      l = m.intl.format(m.t.If5Q0h, {
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
  null != t && null != v ? g = "".concat(t, " ").concat(v) : null != t && (g = t);
  let [E] = i.useState(new o.V7), [h, y] = i.useState(false);

  function S() {
    E.start(250, () => {
      y(false)
    })
  }

  function O() {
    E.stop(), y(true)
  }
  return (0, r.jsx)(c.aML, {
    forceOpen: h,
    disableTooltipPointerEvents: false,
    text: (0, r.jsx)(f.Z, {
      children: (0, r.jsxs)("div", {
        onMouseEnter: O,
        onMouseLeave: S,
        children: [t, null != b && (0, r.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-muted",
          className: _.errorCodeMessage,
          children: b
        })]
      })
    }),
    position: "bottom",
    color: c.r6K.GREY,
    "aria-label": g,
    children: e => {
      var t, i;
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
      }({}, e), i = i = {
        onMouseEnter: O,
        onMouseLeave: S,
        className: a()(n, _.root),
        children: (0, r.jsx)(f.Z, {
          children: (0, r.jsx)(c.Mgn, {
            onMouseEnter: O,
            onMouseLeave: S,
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            "aria-label": g,
            className: _.warningIcon
          })
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
    }
  })
}