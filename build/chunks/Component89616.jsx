/** Chunk was on 804 **/
/** chunk id: 89616, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => o
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk775086 = require("./775086.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk365007 = require("./365007.js"),
  Chunk388032 = require("./388032.jsx");

function o(t) {
  let {
    transitionState: e,
    onClose: n,
    credential: o
  } = t, [c, d] = a.useState(false), [g, f] = a.useState(""), [h, p] = a.useState(true), E = a.useRef(null);
  async function v() {
    d(true);
    try {
      await (0, r.WQ)(o.id, g), n()
    } catch (t) {
      p(t.message)
    } finally {
      d(false)
    }
  }
  return a.useEffect(() => {
    if (e === l.Dvm.ENTERED) {
      var t;
      null == (t = E.current) || t.focus()
    }
  }, [e]), (0, i.jsx)(s.Modal, {
    transitionState: e,
    title: u.intl.string(u.t.YjuMsf),
    onClose: n,
    input: (0, i.jsx)(l.oil, {
      label: u.intl.string(u.t["7yEgJY"]),
      inputRef: E,
      "aria-label": u.intl.string(u.t["7yEgJY"]),
      placeholder: o.name,
      value: g,
      minLength: 1,
      maxLength: 32,
      onChange: f,
      autoFocus: true,
      required: true,
      error: h
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
      onClick: v
    }]
  })
}