/** Chunk was on 67096 **/
/** chunk id: 717040, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  A: () => c
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

function c(e) {
  let {
    disabled: A = false,
    disabledTooltip: t,
    published: l,
    submitting: c = false,
    onClick: g
  } = e, p = (0, s.GV)(), [f, m] = n.useState(l);
  return n.useEffect(() => {
    m(e => e || l)
  }, [l]), (0, r.jsxs)("div", {
    className: a()({
      [u.g$]: !A && !l,
      [u.oZ]: f
    }, u.nw),
    children: [(0, r.jsxs)("div", {
      className: u.kL,
      children: [(0, r.jsxs)("div", {
        className: u.S7,
        children: [(0, r.jsx)(o.Heading, {
          variant: "text-sm/semibold",
          color: "text-strong",
          children: l ? d.intl.string(d.t.Vaaagc) : d.intl.string(d.t.oI8aQf)
        }), (0, r.jsx)(o.Text, {
          id: p,
          variant: "text-sm/normal",
          color: "text-default",
          children: l ? d.intl.string(d.t["0r6pbG"]) : d.intl.string(d.t["8MMHYG"])
        })]
      }), (0, r.jsx)(i.$nd, {
        text: l ? d.intl.string(d.t.DlJOvl) : d.intl.string(d.t.X7YGXE),
        icon: l ? o.G3N : o.BZI,
        iconPosition: "end",
        variant: l ? "critical-primary" : "expressive",
        "aria-describedby": p,
        "aria-disabled": A,
        disabled: A,
        onClick: A ? true : g,
        loading: c
      })]
    }), A && (0, r.jsx)(o.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: t
    })]
  })
}