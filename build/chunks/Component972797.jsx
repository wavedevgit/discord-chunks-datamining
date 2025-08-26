/** Chunk was on 73628 **/
/** chunk id: 972797, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk750404 = require("./750404.js");

function u(e) {
  let {
    disabled: A = false,
    disabledTooltip: t,
    published: a,
    submitting: u = false,
    onClick: g
  } = e, f = (0, s.Dt)(), [p, m] = r.useState(a);
  return r.useEffect(() => {
    m(e => e || a)
  }, [a]), (0, n.jsxs)("div", {
    className: l()({
      [c.publishable]: !A && !a,
      [c.wasEverPublished]: p
    }, c.outerContainer),
    children: [(0, n.jsxs)("div", {
      className: c.container,
      children: [(0, n.jsxs)("div", {
        className: c.explanationColumn,
        children: [(0, n.jsx)(o.X6q, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: a ? d.intl.string(d.t.VaaagY) : d.intl.string(d.t.oI8aQU)
        }), (0, n.jsx)(o.Text, {
          id: f,
          variant: "text-sm/normal",
          color: "text-default",
          children: a ? d.intl.string(d.t["0r6pbG"]) : d.intl.string(d.t["8MMHYG"])
        })]
      }), (0, n.jsx)(i.zx, {
        text: a ? d.intl.string(d.t.DlJOvr) : d.intl.string(d.t.X7YGXF),
        icon: a ? o.kZF : o.T$Z,
        iconPosition: "end",
        variant: a ? "critical-primary" : "expressive",
        "aria-describedby": f,
        "aria-disabled": A,
        disabled: A,
        onClick: A ? true : g,
        loading: u
      })]
    }), A && (0, n.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: t
    })]
  })
}