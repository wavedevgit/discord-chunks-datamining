/** Chunk was on 73628 **/
/** chunk id: 972797, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk815669 = require("./815669.js");

function u(e) {
  let {
    disabled: t = false,
    disabledTooltip: A,
    published: l,
    submitting: u = false,
    onClick: f
  } = e, g = (0, s.Dt)(), [p, m] = r.useState(l);
  return r.useEffect(() => {
    m(e => e || l)
  }, [l]), <div className={a()({
      [c.publishable]: !t && !l,
      [c.wasEverPublished]: p
    }, c.container)}>{<div className={c.explanationColumn}>{<i.X6q variant={"text-sm/semibold"} color={"header-primary"}>{l ? d.intl.string(d.t.VaaagY) : d.intl.string(d.t.oI8aQU)}</i.X6q>}{<i.Text id={g} variant={"text-sm/normal"} color={"text-default"}>{l ? d.intl.string(d.t["0r6pbG"]) : d.intl.string(d.t["8MMHYG"])}</i.Text>}</div>}{<i.ua7 text={t ? A : true}>{e => {
        var A, r;
        return (0, n.jsxs)(o.zx, (A = function(e) {
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
          className: a()(c.button, {
            [c.wasEverPublished]: p,
            [c.publishButton]: !l,
            [c.disabledPublishButton]: t
          }),
          innerClassName: c.buttonContents,
          color: l ? o.zx.Colors.RED : o.zx.Colors.CUSTOM,
          "aria-describedby": g,
          "aria-disabled": t,
          grow: false,
          onClick: t ? true : f,
          submitting: u,
          children: [l ? d.intl.string(d.t.DlJOvr) : d.intl.string(d.t.X7YGXF), l ? (0, n.jsx)(i.kZF, {
            size: "md",
            className: c.buttonIcon,
            color: "currentColor"
          }) : (0, n.jsx)(i.T$Z, {
            size: "xs",
            color: "currentColor",
            className: c.buttonIcon
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
      }}</i.ua7>}</div>
}