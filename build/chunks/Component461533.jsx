/** Chunk was on 9354 **/
/** chunk id: 461533, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk369994 = require("./369994.js"),
  Chunk781208 = require("./781208.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk850606 = require("./850606.js");

function d(t) {
  let {
    guildId: e,
    transitionState: n,
    onClose: d
  } = t, [_, b] = i.useState([]), S = i.useCallback(() => {
    (0, o.KK)(e, _), (0, o.C4)(e), d()
  }, [e, d, _]), p = i.useCallback(t => () => {
    b(e => e.includes(t) ? e.filter(e => e !== t) : [...e, t])
  }, []), f = i.useCallback(() => {
    open(a.RI)
  }, []);
  return (0, r.jsx)(l.Modal, {
    transitionState: n,
    title: s.intl.string(s.t.uYPGsb),
    subtitle: s.intl.format(s.t.Hg8Ee3, {
      onClick: f
    }),
    actions: [{
      text: s.intl.string(s.t["ETE/oK"]),
      onClick: d,
      variant: "secondary"
    }, {
      text: s.intl.string(s.t.geKm7u),
      onClick: S
    }],
    onClose: d,
    children: (0, r.jsx)(c.Kqy, {
      gap: 8,
      className: u.mainCheckboxContainer,
      children: a.Ud.map(t => (0, r.jsxs)(c.P3F, {
        className: u.checkboxContainer,
        onClick: p(t),
        children: [(0, r.jsx)(c.XZJ, {
          type: c.XZJ.Types.INVERTED,
          className: u.checkbox,
          value: _.includes(t),
          displayOnly: true
        }), (0, r.jsx)(c.Text, {
          variant: "text-sm/normal",
          children: (0, a.$l)(t)
        })]
      }, t))
    })
  })
}