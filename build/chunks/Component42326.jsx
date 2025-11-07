/** Chunk was on 86642 **/
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
    avError: l
  } = e, g = "", {
    text: b,
    node: y
  } = function(e) {
    var t;
    if (null == e) return {
      text: null,
      node: null
    };
    let n = null == (t = (0, c.hp)(e)) ? true : t.errorCode,
      r = h.intl.formatToPlainString(h.t.ejOT95, {
        errorCode: n
      }),
      l = h.intl.format(h.t.If5Q0h, {
        errorCode: n,
        helpDeskURL: d.Z.getArticleURL(f.BhN.AV_ERROR_CODES)
      }),
      a = u.Z.isDeveloper;
    return {
      text: a ? "".concat(r, " (").concat(e, ")") : r,
      node: a ? (0, i.jsxs)(i.Fragment, {
        children: [l, " (", e, ")"]
      }) : l
    }
  }(l);
  null != t && null != b ? g = "".concat(t, " ").concat(b) : null != t && (g = t);
  let [C] = r.useState(new o.V7), [_, v] = r.useState(false);

  function x() {
    C.start(250, () => {
      v(false)
    })
  }

  function O() {
    C.stop(), v(true)
  }
  return (0, i.jsx)(s.aML, {
    forceOpen: _,
    disableTooltipPointerEvents: false,
    text: (0, i.jsx)(p.Z, {
      children: (0, i.jsxs)("div", {
        onMouseEnter: O,
        onMouseLeave: x,
        children: [t, null != y && (0, i.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: "text-muted",
          className: m.errorCodeMessage,
          children: y
        })]
      })
    }),
    position: "bottom",
    color: s.r6K.GREY,
    "aria-label": g,
    children: e => {
      var t, r;
      return (0, i.jsx)("div", (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({}, e), r = r = {
        onMouseEnter: O,
        onMouseLeave: x,
        className: a()(n, m.root),
        children: (0, i.jsx)(p.Z, {
          children: (0, i.jsx)(s.Mgn, {
            onMouseEnter: O,
            onMouseLeave: x,
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            "aria-label": g,
            className: m.warningIcon
          })
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
      }), t))
    }
  })
}