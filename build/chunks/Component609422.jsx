/** Chunk was on 59139 **/
/** chunk id: 609422, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk49229 = require("./49229.js"),
  Chunk427262 = require("./427262.js"),
  Chunk985018 = require("./985018.jsx");

function o(t) {
  let {
    user: n,
    nickname: e,
    transitionState: o,
    onClose: d
  } = t, [p, h] = a.useState(false), [g, x] = a.useState(e), m = a.useRef(null), b = async t => {
    t.preventDefault(), h(true);
    try {
      await r.A.updateRelationship(n.id, g), d()
    } catch (t) {} finally {
      h(false)
    }
  }, f = null == e ? c.intl.string(c.t.BGYkaH) : c.intl.string(c.t["8pOYUE"]);
  return (0, i.jsx)("form", {
    onSubmit: b,
    children: (0, i.jsx)(l.Modal, {
      title: f,
      transitionState: o,
      subtitle: c.intl.string(c.t["NdQ+lP"]),
      onClose: d,
      actions: [{
        text: c.intl.string(c.t["ETE/oC"]),
        onClick: d,
        variant: "secondary"
      }, {
        text: c.intl.string(c.t["R3BPH+"]),
        onSubmit: b,
        variant: "primary",
        disabled: p,
        type: "submit"
      }],
      children: (0, i.jsxs)(s.BJc, {
        gap: 8,
        children: [(0, i.jsx)(s.ksK, {
          label: c.intl.string(c.t.pqG6GS),
          inputRef: m,
          value: null != g ? g : "",
          placeholder: u.Ay.getName(n),
          onChange: x,
          maxLength: 32,
          autoFocus: true
        }), (0, i.jsx)(s.QWc, {
          onClick: () => {
            var t;
            x(null), null == (t = m.current) || t.focus()
          },
          text: c.intl.string(c.t["9qSBvB"]),
          textVariant: "text-sm/medium",
          type: "button"
        })]
      })
    })
  })
}