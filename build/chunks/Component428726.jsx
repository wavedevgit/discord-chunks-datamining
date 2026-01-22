/** Chunk was on 50267 **/
/** chunk id: 428726, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => o
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk189213 = require("./189213.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk917136 = require("./917136.js"),
  Chunk985018 = require("./985018.jsx");

function o(t) {
  let {
    transitionState: e,
    onClose: n,
    credential: o
  } = t, [c, d] = a.useState(false), [g, h] = a.useState(""), [p, f] = a.useState(true), E = a.useRef(null);
  async function y() {
    d(true);
    try {
      await (0, l.c6)(o.id, g), n()
    } catch (t) {
      f(t.message)
    } finally {
      d(false)
    }
  }
  return a.useEffect(() => {
    if (e === s.ip4.ENTERED) {
      var t;
      null == (t = E.current) || t.focus()
    }
  }, [e]), (0, i.jsx)(r.Modal, {
    transitionState: e,
    title: u.intl.string(u.t.YjuMsf),
    onClose: n,
    input: (0, i.jsx)(s.ksK, {
      label: u.intl.string(u.t["7yEgJY"]),
      inputRef: E,
      "aria-label": u.intl.string(u.t["7yEgJY"]),
      placeholder: o.name,
      value: g,
      minLength: 1,
      maxLength: 32,
      onChange: h,
      autoFocus: true,
      required: true,
      error: p
    }),
    actions: [{
      variant: "secondary",
      text: u.intl.string(u.t["ETE/oC"]),
      onClick: n
    }, {
      variant: "primary",
      text: u.intl.string(u.t.i4jeWR),
      disabled: 0 === g.length || g.length > 32,
      loading: c,
      onClick: y
    }]
  })
}