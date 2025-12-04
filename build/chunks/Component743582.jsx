/** Chunk was on 83942 **/
/** chunk id: 743582, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk935369 = require("./935369.js"),
  Chunk728345 = require("./728345.js"),
  Chunk577275 = require("./577275.js"),
  Chunk829857 = require("./829857.js"),
  Chunk388032 = require("./388032.jsx");

function h(t) {
  var n, i;
  let {
    transitionState: e,
    application: h,
    onClose: v
  } = t, [x, C] = a.useState(null == h || null == (n = h.team) ? true : n.id), {
    teams: b
  } = (0, p.Z)(), f = a.useMemo(() => b.filter(t => t.payout_account_status === g.C.ACTIVE).map(t => ({
    label: t.name,
    value: t.id
  })), [b]), Z = (null == h || null == (i = h.team) ? true : i.id) !== x, [j, {
    loading: y,
    error: k
  }] = (0, o.Z)(c.ZP.transferApplication), A = async () => {
    s()(null != h, "no application"), s()(null != x, "no team selected"), null != await j({
      applicationId: h.id,
      teamId: x
    }) && v()
  }, I = (null == h ? true : h.team) != null;
  return (0, l.jsxs)(r.Modal, {
    transitionState: e,
    title: I ? m.intl.string(m.t["4TveVv"]) : m.intl.string(m.t.feBUAV),
    subtitle: I ? m.intl.string(m.t.c7HS0n) : m.intl.string(m.t.atZ50I),
    onClose: v,
    actions: [{
      variant: "secondary",
      text: m.intl.string(m.t["ETE/oC"]),
      onClick: v
    }, {
      variant: "critical-primary",
      text: m.intl.string(m.t["R3BPH+"]),
      loading: y,
      disabled: !Z,
      onClick: A
    }],
    children: [I ? (0, l.jsxs)(u.Wn, {
      messageType: u.QYI.WARNING,
      children: [m.intl.string(m.t.Caz8nL), (0, l.jsx)(u.LZC, {
        size: 4
      }), (0, l.jsx)(u.Text, {
        variant: "text-sm/normal",
        children: m.intl.string(m.t.u4ddHZ)
      })]
    }) : null, null != k ? (0, l.jsx)(u.M14, {
      type: "critical",
      children: k.message
    }) : null, (0, l.jsx)(u.LZC, {
      size: 16
    }), (0, l.jsx)(d.y6, {
      label: I ? m.intl.string(m.t.xZ6ZL6) : m.intl.string(m.t.bfmKdK),
      required: true,
      options: f,
      placeholder: m.intl.string(m.t.QXf93A),
      value: x,
      isDisabled: 0 === f.length,
      onChange: t => C(t),
      "aria-label": m.intl.string(m.t.QXf93A)
    })]
  })
}