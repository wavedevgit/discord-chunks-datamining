/** Chunk was on 9354 **/
/** chunk id: 461533, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk369994 = require("./369994.js"),
  Chunk781208 = require("./781208.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk66532 = require("./66532.js");

function _(t) {
  let {
    guildId: e,
    transitionState: n,
    onClose: _
  } = t, [b, S] = i.useState([]), f = i.useCallback(() => {
    (0, a.KK)(e, b), (0, a.C4)(e), _()
  }, [e, _, b]), h = i.useCallback(t => () => {
    S(e => e.includes(t) ? e.filter(e => e !== t) : [...e, t])
  }, []), p = i.useCallback(() => {
    open(s.RI)
  }, []);
  return (0, r.jsx)(c.Modal, {
    transitionState: n,
    title: u.intl.string(u.t.uYPGsb),
    subtitle: u.intl.format(u.t.Hg8Ee3, {
      onClick: p
    }),
    actions: [{
      text: u.intl.string(u.t["ETE/oK"]),
      onClick: _,
      variant: "secondary"
    }, {
      text: u.intl.string(u.t.geKm7u),
      onClick: f
    }],
    onClose: _,
    children: (0, r.jsx)(o.Kqy, {
      gap: 8,
      className: d.mainCheckboxContainer,
      children: s.Ud.map(t => (0, r.jsxs)(o.P3F, {
        className: d.checkboxContainer,
        onClick: h(t),
        children: [(0, r.jsx)(l.VL, {
          className: d.checkbox,
          checked: b.includes(t),
          isIndicator: true
        }), (0, r.jsx)(o.Text, {
          variant: "text-sm/normal",
          children: (0, s.$l)(t)
        })]
      }, t))
    })
  })
}