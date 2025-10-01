/** Chunk was on 25070 **/
/** chunk id: 670794, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx");

function c(t) {
  let {
    user: n,
    nickname: i,
    transitionState: c,
    onClose: d
  } = t, [p, h] = l.useState(false), [x, g] = l.useState(i), m = l.useRef(null), b = async t => {
    t.preventDefault(), h(true);
    try {
      await r.Z.updateRelationship(n.id, x), d()
    } catch (t) {} finally {
      h(false)
    }
  }, f = null == i ? o.intl.string(o.t.BGYkaG) : o.intl.string(o.t["8pOYUF"]);
  return (0, e.jsx)("form", {
    onSubmit: b,
    children: (0, e.jsx)(a.Modal, {
      title: f,
      transitionState: c,
      subtitle: o.intl.string(o.t["NdQ+lJ"]),
      onClose: d,
      actions: [{
        text: o.intl.string(o.t["ETE/oK"]),
        onClick: d,
        variant: "secondary"
      }, {
        text: o.intl.string(o.t.R3BPHx),
        onSubmit: b,
        variant: "primary",
        disabled: p,
        type: "submit"
      }],
      children: (0, e.jsxs)(s.Kqy, {
        gap: 8,
        children: [(0, e.jsx)(s.oil, {
          label: o.intl.string(o.t.pqG6GR),
          inputRef: m,
          value: null != x ? x : "",
          placeholder: u.ZP.getName(n),
          onChange: g,
          maxLength: 32,
          autoFocus: true
        }), (0, e.jsx)(s.Avr, {
          onClick: () => {
            var t;
            g(null), null == (t = m.current) || t.focus()
          },
          text: o.intl.string(o.t["9qSBvL"]),
          textVariant: "text-sm/medium",
          type: "button"
        })]
      })
    })
  })
}