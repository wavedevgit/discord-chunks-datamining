/** Chunk was on 73628 **/
/** chunk id: 972797, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk750404 = require("./750404.js");

function u(e) {
  let {
    disabled: A = false,
    disabledTooltip: t,
    published: l,
    submitting: u = false,
    onClick: f
  } = e, g = (0, s.Dt)(), [p, m] = r.useState(l);
  return r.useEffect(() => {
    m(e => e || l)
  }, [l]), (0, n.jsxs)("div", {
    className: a()({
      [c.publishable]: !A && !l,
      [c.wasEverPublished]: p
    }, c.container),
    children: [(0, n.jsxs)("div", {
      className: c.explanationColumn,
      children: [(0, n.jsx)(o.X6q, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: l ? d.intl.string(d.t.VaaagY) : d.intl.string(d.t.oI8aQU)
      }), (0, n.jsx)(o.Text, {
        id: g,
        variant: "text-sm/normal",
        color: "text-default",
        children: l ? d.intl.string(d.t["0r6pbG"]) : d.intl.string(d.t["8MMHYG"])
      })]
    }), (0, n.jsx)(o.ua7, {
      text: A ? t : true,
      children: e => {
        var t, r;
        return (0, n.jsxs)(i.zx, (t = function(e) {
          for (var A = 1; A < arguments.length; A++) {
            var t = null != arguments[A] ? arguments[A] : {},
              n = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.forEach(function(A) {
              var n;
              n = t[A], A in e ? Object.defineProperty(e, A, {
                value: n,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[A] = n
            })
          }
          return e
        }({}, e), r = r = {
          className: a()(c.button, {
            [c.wasEverPublished]: p,
            [c.publishButton]: !l,
            [c.disabledPublishButton]: A
          }),
          innerClassName: c.buttonContents,
          color: l ? i.zx.Colors.RED : i.zx.Colors.CUSTOM,
          "aria-describedby": g,
          "aria-disabled": A,
          grow: false,
          onClick: A ? true : f,
          submitting: u,
          children: [l ? d.intl.string(d.t.DlJOvr) : d.intl.string(d.t.X7YGXF), l ? (0, n.jsx)(o.kZF, {
            size: "md",
            className: c.buttonIcon,
            color: "currentColor"
          }) : (0, n.jsx)(o.T$Z, {
            size: "xs",
            color: "currentColor",
            className: c.buttonIcon
          })]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, A) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            t.push.apply(t, n)
          }
          return t
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
        }), t))
      }
    })]
  })
}