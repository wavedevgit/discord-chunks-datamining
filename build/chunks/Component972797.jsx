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
  } = e, g = (0, s.Dt)(), [p, m] = n.useState(l);
  return n.useEffect(() => {
    m(e => e || l)
  }, [l]), (0, r.jsxs)("div", {
    className: a()({
      [c.publishable]: !A && !l,
      [c.wasEverPublished]: p
    }, c.container),
    children: [(0, r.jsxs)("div", {
      className: c.explanationColumn,
      children: [(0, r.jsx)(i.X6q, {
        variant: "text-sm/semibold",
        color: "header-primary",
        children: l ? d.intl.string(d.t.VaaagY) : d.intl.string(d.t.oI8aQU)
      }), (0, r.jsx)(i.Text, {
        id: g,
        variant: "text-sm/normal",
        color: "text-default",
        children: l ? d.intl.string(d.t["0r6pbG"]) : d.intl.string(d.t["8MMHYG"])
      })]
    }), (0, r.jsx)(i.ua7, {
      text: A ? t : true,
      children: e => {
        var t, n;
        return (0, r.jsxs)(o.zx, (t = function(e) {
          for (var A = 1; A < arguments.length; A++) {
            var t = null != arguments[A] ? arguments[A] : {},
              r = Object.keys(t);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
              return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), r.forEach(function(A) {
              var r;
              r = t[A], A in e ? Object.defineProperty(e, A, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[A] = r
            })
          }
          return e
        }({}, e), n = n = {
          className: a()(c.button, {
            [c.wasEverPublished]: p,
            [c.publishButton]: !l,
            [c.disabledPublishButton]: A
          }),
          innerClassName: c.buttonContents,
          color: l ? o.zx.Colors.RED : o.zx.Colors.CUSTOM,
          "aria-describedby": g,
          "aria-disabled": A,
          grow: false,
          onClick: A ? true : f,
          submitting: u,
          children: [l ? d.intl.string(d.t.DlJOvr) : d.intl.string(d.t.X7YGXF), l ? (0, r.jsx)(i.kZF, {
            size: "md",
            className: c.buttonIcon,
            color: "currentColor"
          }) : (0, r.jsx)(i.T$Z, {
            size: "xs",
            color: "currentColor",
            className: c.buttonIcon
          })]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, A) {
          var t = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t.push.apply(t, r)
          }
          return t
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }
    })]
  })
}