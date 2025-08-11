/** Chunk was on 25070 **/
/** chunk id: 670794, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk992089 = require("./992089.js");

function d(t) {
  let {
    user: n,
    nickname: i,
    transitionState: d,
    onClose: x
  } = t, [h, m] = a.useState(false), [f, g] = a.useState(i), b = a.useRef(null), v = async t => {
    t.preventDefault(), m(true);
    try {
      await r.Z.updateRelationship(n.id, f), x()
    } catch (t) {} finally {
      m(false)
    }
  }, k = null == i ? c.intl.string(c.t.BGYkaG) : c.intl.string(c.t["8pOYUF"]);
  return (0, e.jsx)("form", {
    onSubmit: v,
    children: (0, e.jsxs)(l.Modal, {
      title: k,
      transitionState: d,
      subtitle: c.intl.string(c.t["NdQ+lJ"]),
      onClose: x,
      actions: [{
        text: c.intl.string(c.t["ETE/oK"]),
        onClick: x,
        variant: "secondary"
      }, {
        text: c.intl.string(c.t.R3BPHx),
        onSubmit: v,
        variant: "primary",
        disabled: h,
        type: "submit"
      }],
      children: [(0, e.jsx)(u.xJW, {
        title: c.intl.string(c.t.pqG6GR),
        children: (0, e.jsx)(s.Is, {
          inputRef: b,
          value: null != f ? f : "",
          placeholder: o.ZP.getName(n),
          onChange: g,
          maxLength: 32,
          className: p.input,
          autoFocus: true
        })
      }), (0, e.jsx)(u.Avr, {
        onClick: () => {
          var t;
          g(null), null == (t = b.current) || t.focus()
        },
        text: c.intl.string(c.t["9qSBvL"]),
        textVariant: "text-sm/medium",
        type: "button"
      })]
    })
  })
}