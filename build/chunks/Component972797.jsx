/** Chunk was on 73628 **/
/** chunk id: 972797, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk289676 = require("./289676.js");

function u(e) {
  let {
    disabled: t = false,
    disabledTooltip: A,
    published: a,
    submitting: u = false,
    onClick: f
  } = e, g = (0, s.Dt)(), [p, m] = r.useState(a);
  return r.useEffect(() => {
    m(e => e || a)
  }, [a]), (0, n.jsxs)("div", {
    className: l()({
      [c.publishable]: !t && !a,
      [c.wasEverPublished]: p
    }, c.outerContainer),
    children: [(0, n.jsxs)("div", {
      className: c.container,
      children: [(0, n.jsxs)("div", {
        className: c.explanationColumn,
        children: [(0, n.jsx)(o.Heading, {
          variant: "text-sm/semibold",
          color: "text-strong",
          children: a ? d.intl.string(d.t.Vaaagc) : d.intl.string(d.t.oI8aQf)
        }), (0, n.jsx)(o.Text, {
          id: g,
          variant: "text-sm/normal",
          color: "text-default",
          children: a ? d.intl.string(d.t["0r6pbG"]) : d.intl.string(d.t["8MMHYG"])
        })]
      }), (0, n.jsx)(i.zxk, {
        text: a ? d.intl.string(d.t.DlJOvl) : d.intl.string(d.t.X7YGXE),
        icon: a ? o.kZF : o.T$Z,
        iconPosition: "end",
        variant: a ? "critical-primary" : "expressive",
        "aria-describedby": g,
        "aria-disabled": t,
        disabled: t,
        onClick: t ? true : f,
        loading: u
      })]
    }), t && (0, n.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: A
    })]
  })
}