/** Chunk was on 73628 **/
/** chunk id: 972797, original params: A,e,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk750404 = require("./750404.js");

function u(A) {
  let {
    disabled: e = false,
    disabledTooltip: t,
    published: l,
    submitting: u = false,
    onClick: g
  } = A, f = (0, s.Dt)(), [p, m] = r.useState(l);
  return r.useEffect(() => {
    m(A => A || l)
  }, [l]), (0, n.jsxs)("div", {
    className: a()({
      [c.publishable]: !e && !l,
      [c.wasEverPublished]: p
    }, c.outerContainer),
    children: [(0, n.jsxs)("div", {
      className: c.container,
      children: [(0, n.jsxs)("div", {
        className: c.explanationColumn,
        children: [(0, n.jsx)(o.X6q, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: l ? d.intl.string(d.t.VaaagY) : d.intl.string(d.t.oI8aQU)
        }), (0, n.jsx)(o.Text, {
          id: f,
          variant: "text-sm/normal",
          color: "text-default",
          children: l ? d.intl.string(d.t["0r6pbG"]) : d.intl.string(d.t["8MMHYG"])
        })]
      }), (0, n.jsx)(i.zx, {
        text: l ? d.intl.string(d.t.DlJOvr) : d.intl.string(d.t.X7YGXF),
        icon: l ? o.kZF : o.T$Z,
        iconPosition: "end",
        variant: l ? "critical-primary" : "expressive",
        "aria-describedby": f,
        "aria-disabled": e,
        disabled: e,
        onClick: e ? true : g,
        loading: u
      })]
    }), e && (0, n.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: t
    })]
  })
}