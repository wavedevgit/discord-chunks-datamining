/** Chunk was on 25070 **/
/** chunk id: 670794, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  } = t, [p, h] = l.useState(false), [g, x] = l.useState(i), m = l.useRef(null), b = async t => {
    t.preventDefault(), h(true);
    try {
      await r.Z.updateRelationship(n.id, g), d()
    } catch (t) {} finally {
      h(false)
    }
  }, f = null == i ? o.intl.string(o.t.BGYkaH) : o.intl.string(o.t["8pOYUE"]);
  return (0, e.jsx)("form", {
    onSubmit: b,
    children: (0, e.jsx)(a.Modal, {
      title: f,
      transitionState: c,
      subtitle: o.intl.string(o.t["NdQ+lP"]),
      onClose: d,
      actions: [{
        text: o.intl.string(o.t["ETE/oC"]),
        onClick: d,
        variant: "secondary"
      }, {
        text: o.intl.string(o.t["R3BPH+"]),
        onSubmit: b,
        variant: "primary",
        disabled: p,
        type: "submit"
      }],
      children: (0, e.jsxs)(s.Kqy, {
        gap: 8,
        children: [(0, e.jsx)(s.oil, {
          label: o.intl.string(o.t.pqG6GS),
          inputRef: m,
          value: null != g ? g : "",
          placeholder: u.ZP.getName(n),
          onChange: x,
          maxLength: 32,
          autoFocus: true
        }), (0, e.jsx)(s.Avr, {
          onClick: () => {
            var t;
            x(null), null == (t = m.current) || t.focus()
          },
          text: o.intl.string(o.t["9qSBvB"]),
          textVariant: "text-sm/medium",
          type: "button"
        })]
      })
    })
  })
}