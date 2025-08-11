/** Chunk was on 94064 **/
/** chunk id: 915509, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk98847 = require("./98847.js");

function s(e) {
  let {
    errorText: t,
    title: n,
    description: s,
    transitionState: u,
    onCancel: d,
    onConfirm: p,
    children: g
  } = e, [m, b] = l.useState(false), h = l.useCallback(async () => {
    b(true);
    try {
      await p()
    } catch (e) {
      throw e
    } finally {
      b(false)
    }
  }, [p]);
  return (0, r.jsxs)(a.Modal, {
    transitionState: u,
    onClose: d,
    title: n,
    subtitle: s,
    actions: [{
      text: o.intl.string(o.t["ETE/oK"]),
      variant: "secondary",
      onClick: d
    }, {
      text: o.intl.string(o.t.R3BPHx),
      onClick: h,
      variant: "primary",
      loading: m
    }],
    children: [g, null != t && "" !== t ? (0, r.jsx)(i.Text, {
      className: c.errorText,
      variant: "text-xs/normal",
      color: "text-danger",
      children: t
    }) : null]
  })
}