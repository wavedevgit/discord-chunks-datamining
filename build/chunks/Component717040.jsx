/** Chunk was on 67096 **/
/** chunk id: 717040, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk706494 = require("./706494.js");

function u(e) {
  let {
    disabled: A = false,
    disabledTooltip: t,
    published: l,
    submitting: u = false,
    onClick: g
  } = e, f = (0, o.GV)(), [p, m] = n.useState(l);
  return n.useEffect(() => {
    m(e => e || l)
  }, [l]), (0, r.jsxs)("div", {
    className: a()({
      [c.g$]: !A && !l,
      [c.oZ]: p
    }, c.nw),
    children: [(0, r.jsxs)("div", {
      className: c.kL,
      children: [(0, r.jsxs)("div", {
        className: c.S7,
        children: [(0, r.jsx)(s.Heading, {
          variant: "text-sm/semibold",
          color: "text-strong",
          children: l ? d.intl.string(d.t.Vaaagc) : d.intl.string(d.t.oI8aQf)
        }), (0, r.jsx)(s.Text, {
          id: f,
          variant: "text-sm/normal",
          color: "text-default",
          children: l ? d.intl.string(d.t["0r6pbG"]) : d.intl.string(d.t["8MMHYG"])
        })]
      }), (0, r.jsx)(i.$nd, {
        text: l ? d.intl.string(d.t.DlJOvl) : d.intl.string(d.t.X7YGXE),
        icon: l ? s.G3N : s.BZI,
        iconPosition: "end",
        variant: l ? "critical-primary" : "expressive",
        "aria-describedby": f,
        "aria-disabled": A,
        disabled: A,
        onClick: A ? true : g,
        loading: u
      })]
    }), A && (0, r.jsx)(s.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: t
    })]
  })
}