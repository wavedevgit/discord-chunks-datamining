/** Chunk was on 71678 **/
/** chunk id: 180493, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk608461 = require("./608461.js"),
  Chunk627363 = require("./627363.js"),
  Chunk130771 = require("./130771.js"),
  Chunk269927 = require("./269927.js"),
  Chunk985018 = require("./985018.jsx");

function h(t) {
  var n, i;
  let {
    transitionState: a,
    application: h,
    onClose: m
  } = t, [x, v] = e.useState(null == h || null == (n = h.team) ? true : n.id), {
    teams: C
  } = (0, u.A)(), b = e.useMemo(() => C.filter(t => t.payout_account_status === p.y.ACTIVE).map(t => ({
    id: t.id,
    label: t.name,
    value: t.id
  })), [C]), y = (null == h || null == (i = h.team) ? true : i.id) !== x, [A, {
    loading: f,
    error: j
  }] = (0, o.A)(c.Ay.transferApplication), k = async () => {
    s()(null != h, "no application"), s()(null != x, "no team selected"), null != await A({
      applicationId: h.id,
      teamId: x
    }) && m()
  }, I = (null == h ? true : h.team) != null;
  return (0, l.jsxs)(r.Modal, {
    transitionState: a,
    title: I ? g.intl.string(g.t["4TveVv"]) : g.intl.string(g.t.feBUAV),
    subtitle: I ? g.intl.string(g.t.c7HS0n) : g.intl.string(g.t.atZ50I),
    onClose: m,
    actions: [{
      variant: "secondary",
      text: g.intl.string(g.t["ETE/oC"]),
      onClick: m
    }, {
      variant: "critical-primary",
      text: g.intl.string(g.t["R3BPH+"]),
      loading: f,
      disabled: !y,
      onClick: k
    }],
    children: [I ? (0, l.jsxs)(d.po8, {
      messageType: d.YCn.WARNING,
      children: [g.intl.string(g.t.Caz8nL), (0, l.jsx)(d.hKd, {
        size: 4
      }), (0, l.jsx)(d.Text, {
        variant: "text-sm/normal",
        children: g.intl.string(g.t.u4ddHZ)
      })]
    }) : null, null != j ? (0, l.jsx)(d.wx6, {
      type: "critical",
      children: j.message
    }) : null, (0, l.jsx)(d.hKd, {
      size: 16
    }), (0, l.jsx)(d.l6P, {
      selectionMode: "single",
      label: I ? g.intl.string(g.t.xZ6ZL6) : g.intl.string(g.t.bfmKdK),
      required: true,
      options: b,
      placeholder: g.intl.string(g.t.QXf93A),
      value: x,
      disabled: 0 === b.length,
      onSelectionChange: v
    })]
  })
}