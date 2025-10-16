/** Chunk was on 9354 **/
/** chunk id: 461533, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk709867 = require("./709867.jsx"),
  Chunk369994 = require("./369994.js"),
  Chunk781208 = require("./781208.js"),
  Chunk388032 = require("./388032.jsx");

function c(t) {
  let {
    guildId: e,
    transitionState: n,
    onClose: c
  } = t, [d, S] = l.useState([]), _ = l.useCallback(() => {
    (0, a.KK)(e, d), (0, a.C4)(e), c()
  }, [e, c, d]), p = l.useCallback(t => {
    S(t)
  }, []), I = l.useCallback(() => {
    open(s.RI)
  }, []), O = l.useMemo(() => s.Ud.map(t => ({
    label: String((0, s.$l)(t)),
    value: t
  })), []);
  return (0, r.jsx)(i.Modal, {
    transitionState: n,
    title: o.intl.string(o.t.uYPGsb),
    subtitle: o.intl.format(o.t.Hg8Ee3, {
      onClick: I
    }),
    actions: [{
      text: o.intl.string(o.t["ETE/oK"]),
      onClick: c,
      variant: "secondary"
    }, {
      text: o.intl.string(o.t.geKm7u),
      onClick: _
    }],
    onClose: c,
    children: (0, r.jsx)(u.c, {
      selectedValues: d,
      onChange: p,
      options: O
    })
  })
}