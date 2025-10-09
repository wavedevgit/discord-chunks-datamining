/** Chunk was on 9354 **/
/** chunk id: 461533, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => s
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk709867 = require("./709867.jsx"),
  Chunk369994 = require("./369994.js"),
  Chunk781208 = require("./781208.js"),
  Chunk388032 = require("./388032.jsx");

function s(t) {
  let {
    guildId: e,
    transitionState: n,
    onClose: s
  } = t, [d, S] = l.useState([]), _ = l.useCallback(() => {
    (0, o.KK)(e, d), (0, o.C4)(e), s()
  }, [e, s, d]), p = l.useCallback(t => {
    S(t)
  }, []), I = l.useCallback(() => {
    open(c.RI)
  }, []), O = l.useMemo(() => c.Ud.map(t => ({
    label: String((0, c.$l)(t)),
    value: t
  })), []);
  return (0, r.jsx)(i.Modal, {
    transitionState: n,
    title: a.intl.string(a.t.uYPGsb),
    subtitle: a.intl.format(a.t.Hg8Ee3, {
      onClick: I
    }),
    actions: [{
      text: a.intl.string(a.t["ETE/oK"]),
      onClick: s,
      variant: "secondary"
    }, {
      text: a.intl.string(a.t.geKm7u),
      onClick: _
    }],
    onClose: s,
    children: (0, r.jsx)(u.c, {
      selectedValues: d,
      onChange: p,
      options: O
    })
  })
}