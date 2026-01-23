/** Chunk was on 70232 **/
/** chunk id: 242273, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk285553 = require("./285553.js");

function s(t) {
  let {
    errorText: e,
    title: r,
    description: s,
    transitionState: u,
    onCancel: b,
    onConfirm: d,
    children: p
  } = t, [y, f] = a.useState(false), _ = a.useCallback(async () => {
    f(true);
    try {
      await d()
    } catch (t) {
      throw t
    } finally {
      f(false)
    }
  }, [d]);
  return (0, n.jsxs)(i.Modal, {
    transitionState: u,
    onClose: b,
    title: r,
    subtitle: s,
    actions: [{
      text: c.intl.string(c.t["ETE/oC"]),
      variant: "secondary",
      onClick: b
    }, {
      text: c.intl.string(c.t["R3BPH+"]),
      onClick: _,
      variant: "primary",
      loading: y
    }],
    children: [p, null != e && "" !== e ? (0, n.jsx)(o.Text, {
      className: l.kc,
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      children: e
    }) : null]
  })
}