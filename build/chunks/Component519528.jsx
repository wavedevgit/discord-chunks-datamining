/** Chunk was on 51080 **/
/** chunk id: 519528, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk545059 = require("./545059.js"),
  Chunk870391 = require("./870391.js"),
  Chunk985018 = require("./985018.jsx");

function c(t) {
  var e;
  let {
    onClose: n,
    transitionState: c,
    groupId: p
  } = t, m = (0, l.bG)([s.A], () => null == p ? null : s.A.getGroup(p)), [C, k] = a.useState(null != (e = null == m ? true : m.name) ? e : ""), h = null != p, G = a.useCallback(() => {
    "" !== C.trim() && (h && null != p ? o.A.updateGroup(p, C.trim()) : o.A.createGroup(C.trim()), n())
  }, [C, h, p, n]), b = a.useCallback(t => {
    "Enter" === t.key && "" !== C.trim() && G()
  }, [C, G]);
  return (0, r.jsx)(i.Modal, {
    transitionState: c,
    onClose: n,
    size: "sm",
    title: h ? "Edit Friend Group" : "Create Friend Group",
    actions: [{
      variant: "secondary",
      text: d.intl.string(d.t["ETE/oC"]),
      onClick: n
    }, {
      variant: "primary",
      text: h ? d.intl.string(d.t["R3BPH+"]) : d.intl.string(d.t.CumH4u),
      onClick: G,
      disabled: "" === C.trim()
    }],
    children: (0, r.jsx)(u.ksK, {
      value: C,
      onChange: k,
      placeholder: "Group Name",
      maxLength: 100,
      autoFocus: true,
      onKeyDown: b
    })
  })
}