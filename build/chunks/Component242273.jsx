/** Chunk was on 70232 **/
/** chunk id: 242273, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk285553 = require("./285553.js");

function s(e) {
  let {
    errorText: t,
    title: r,
    description: s,
    transitionState: b,
    onCancel: f,
    onConfirm: u,
    children: d
  } = e, [p, y] = n.useState(false), O = n.useCallback(async () => {
    y(true);
    try {
      await u()
    } catch (e) {
      throw e
    } finally {
      y(false)
    }
  }, [u]);
  return (0, a.jsxs)(c.Modal, {
    transitionState: b,
    onClose: f,
    title: r,
    subtitle: s,
    actions: [{
      text: o.intl.string(o.t["ETE/oC"]),
      variant: "secondary",
      onClick: f
    }, {
      text: o.intl.string(o.t["R3BPH+"]),
      onClick: O,
      variant: "primary",
      loading: p
    }],
    children: [d, null != t && "" !== t ? (0, a.jsx)(i.Text, {
      className: l.kc,
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      children: t
    }) : null]
  })
}