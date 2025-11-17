/** Chunk was on 9354 **/
/** chunk id: 461533, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
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
  }, [e, c, d]), O = l.useCallback(t => {
    S(t)
  }, []), p = l.useCallback(() => {
    open(s.RI)
  }, []), I = l.useMemo(() => s.Ud.map(t => ({
    label: String((0, s.$l)(t)),
    value: t
  })), []);
  return (0, r.jsx)(i.Modal, {
    transitionState: n,
    title: o.intl.string(o.t.uYPGsS),
    subtitle: o.intl.format(o.t.Hg8Ee7, {
      onClick: p
    }),
    actions: [{
      text: o.intl.string(o.t["ETE/oC"]),
      onClick: c,
      variant: "secondary"
    }, {
      text: o.intl.string(o.t.geKm7t),
      onClick: _
    }],
    onClose: c,
    children: (0, r.jsx)(u.cOn, {
      selectedValues: d,
      onChange: O,
      options: I
    })
  })
}