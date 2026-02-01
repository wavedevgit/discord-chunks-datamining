/** Chunk was on 51080 **/
/** chunk id: 519528, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk545059 = require("./545059.js"),
  Chunk870391 = require("./870391.js"),
  Chunk985018 = require("./985018.jsx");

function p(t) {
  var e;
  let {
    onClose: n,
    transitionState: p,
    groupId: c,
    initialUserIds: m
  } = t, C = (0, a.bG)([s.A], () => null == c ? null : s.A.getGroup(c)), [h, k] = r.useState(null != (e = null == C ? true : C.name) ? e : ""), G = null != c, g = r.useCallback(() => {
    if ("" !== h.trim()) {
      if (G && null != c) o.A.updateGroup(c, h.trim());
      else {
        let t = o.A.createGroup(h.trim());
        null != m && m.length > 0 && o.A.addUsersToGroup(t, m)
      }
      n()
    }
  }, [h, G, c, m, n]), b = r.useCallback(t => {
    "Enter" === t.key && "" !== h.trim() && g()
  }, [h, g]);
  return (0, l.jsx)(i.Modal, {
    transitionState: p,
    onClose: n,
    size: "sm",
    title: G ? "Edit Friend Group" : "Create Friend Group",
    actions: [{
      variant: "secondary",
      text: d.intl.string(d.t["ETE/oC"]),
      onClick: n
    }, {
      variant: "primary",
      text: G ? d.intl.string(d.t["R3BPH+"]) : d.intl.string(d.t.CumH4u),
      onClick: g,
      disabled: "" === h.trim()
    }],
    children: (0, l.jsx)(u.ksK, {
      value: h,
      onChange: k,
      placeholder: "Group Name",
      maxLength: 100,
      autoFocus: true,
      onKeyDown: b
    })
  })
}