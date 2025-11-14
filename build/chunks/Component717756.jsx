/** Chunk was on 24378 **/
/** chunk id: 717756, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313426 = require("./313426.js"),
  Chunk643327 = require("./643327.js"),
  Chunk388032 = require("./388032.jsx");

function d(t) {
  var e;
  let {
    onClose: n,
    transitionState: d,
    groupId: p
  } = t, m = (0, l.e7)([s.Z], () => null == p ? null : s.Z.getGroup(p)), [C, h] = r.useState(null != (e = null == m ? true : m.name) ? e : ""), k = null != p, g = r.useCallback(() => {
    "" !== C.trim() && (k && null != p ? o.Z.updateGroup(p, C.trim()) : o.Z.createGroup(C.trim()), n())
  }, [C, k, p, n]), v = r.useCallback(t => {
    "Enter" === t.key && "" !== C.trim() && g()
  }, [C, g]);
  return (0, i.jsx)(a.Modal, {
    transitionState: d,
    onClose: n,
    size: "sm",
    title: k ? "Edit Friend Group" : "Create Friend Group",
    actions: [{
      variant: "secondary",
      text: c.intl.string(c.t["ETE/oC"]),
      onClick: n
    }, {
      variant: "primary",
      text: k ? c.intl.string(c.t["R3BPH+"]) : c.intl.string(c.t.CumH4u),
      onClick: g,
      disabled: "" === C.trim()
    }],
    children: (0, i.jsx)(u.oil, {
      value: C,
      onChange: h,
      placeholder: "Group Name",
      maxLength: 100,
      autoFocus: true,
      onKeyDown: v
    })
  })
}