/** Chunk was on 73628 **/
/** chunk id: 972797, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk750404 = require("./750404.js");

function c(e) {
  let {
    disabled: t = false,
    disabledTooltip: A,
    published: a,
    submitting: c = false,
    onClick: g
  } = e, f = (0, s.Dt)(), [p, m] = r.useState(a);
  return r.useEffect(() => {
    m(e => e || a)
  }, [a]), (0, n.jsxs)("div", {
    className: i()({
      [u.publishable]: !t && !a,
      [u.wasEverPublished]: p
    }, u.outerContainer),
    children: [(0, n.jsxs)("div", {
      className: u.container,
      children: [(0, n.jsxs)("div", {
        className: u.explanationColumn,
        children: [(0, n.jsx)(o.Heading, {
          variant: "text-sm/semibold",
          color: "header-primary",
          children: a ? d.intl.string(d.t.Vaaagc) : d.intl.string(d.t.oI8aQf)
        }), (0, n.jsx)(o.Text, {
          id: f,
          variant: "text-sm/normal",
          color: "text-default",
          children: a ? d.intl.string(d.t["0r6pbG"]) : d.intl.string(d.t["8MMHYG"])
        })]
      }), (0, n.jsx)(l.zxk, {
        text: a ? d.intl.string(d.t.DlJOvl) : d.intl.string(d.t.X7YGXE),
        icon: a ? o.kZF : o.T$Z,
        iconPosition: "end",
        variant: a ? "critical-primary" : "expressive",
        "aria-describedby": f,
        "aria-disabled": t,
        disabled: t,
        onClick: t ? true : g,
        loading: c
      })]
    }), t && (0, n.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: A
    })]
  })
}