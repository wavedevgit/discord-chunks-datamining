/** Chunk was on 73628 **/
/** chunk id: 972797, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk750404 = require("./750404.js");

function u(e) {
  let {
    disabled: t = false,
    disabledTooltip: A,
    published: a,
    submitting: u = false,
    onClick: g
  } = e, f = (0, s.Dt)(), [p, h] = r.useState(a);
  return r.useEffect(() => {
    h(e => e || a)
  }, [a]), (0, n.jsxs)("div", {
    className: l()({
      [d.publishable]: !t && !a,
      [d.wasEverPublished]: p
    }, d.container),
    children: [(0, n.jsxs)("div", {
      className: d.explanationColumn,
      children: [(0, n.jsx)(o.X6q, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: a ? c.intl.string(c.t.VaaagY) : c.intl.string(c.t.oI8aQU)
      }), (0, n.jsx)(o.Text, {
        id: f,
        variant: "text-sm/normal",
        color: "text-default",
        children: a ? c.intl.string(c.t["0r6pbG"]) : c.intl.string(c.t["8MMHYG"])
      })]
    }), (0, n.jsx)(o.ua7, {
      text: t ? A : true,
      children: e => {
        var A, r;
        return (0, n.jsxs)(i.zx, (A = function(e) {
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
        }({}, e), r = r = {
          className: l()(d.button, {
            [d.wasEverPublished]: p,
            [d.publishButton]: !a,
            [d.disabledPublishButton]: t
          }),
          innerClassName: d.buttonContents,
          color: a ? i.zx.Colors.RED : i.zx.Colors.CUSTOM,
          "aria-describedby": f,
          "aria-disabled": t,
          grow: false,
          onClick: t ? true : g,
          submitting: u,
          children: [a ? c.intl.string(c.t.DlJOvr) : c.intl.string(c.t.X7YGXF), a ? (0, n.jsx)(o.kZF, {
            size: "md",
            className: d.buttonIcon,
            color: "currentColor"
          }) : (0, n.jsx)(o.T$Z, {
            size: "xs",
            color: "currentColor",
            className: d.buttonIcon
          })]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(A, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var A = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            A.push.apply(A, n)
          }
          return A
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(A, e, Object.getOwnPropertyDescriptor(r, e))
        }), A))
      }
    })]
  })
}