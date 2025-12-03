/** Chunk was on 94064 **/
/** chunk id: 915509, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk1904 = require("./1904.js");

function s(e) {
  let {
    errorText: t,
    title: n,
    description: s,
    transitionState: d,
    onCancel: u,
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
  return (0, r.jsxs)(i.Modal, {
    transitionState: d,
    onClose: u,
    title: n,
    subtitle: s,
    actions: [{
      text: o.intl.string(o.t["ETE/oC"]),
      variant: "secondary",
      onClick: u
    }, {
      text: o.intl.string(o.t["R3BPH+"]),
      onClick: h,
      variant: "primary",
      loading: m
    }],
    children: [g, null != t && "" !== t ? (0, r.jsx)(a.Text, {
      className: c.errorText,
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      children: t
    }) : null]
  })
}