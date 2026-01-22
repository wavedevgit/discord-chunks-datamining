/** Chunk was on 4075 **/
/** chunk id: 59430, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk554113 = require("./554113.js"),
  Chunk141524 = require("./141524.js"),
  Chunk985018 = require("./985018.jsx");

function c(t) {
  let {
    guildId: e,
    transitionState: r,
    onClose: c
  } = t, [d, S] = l.useState([]), _ = l.useCallback(() => {
    (0, a.G1)(e, d), (0, a.B)(e), c()
  }, [e, c, d]), O = l.useCallback(t => {
    S(t)
  }, []), p = l.useCallback(() => {
    open(s.k6)
  }, []), E = l.useMemo(() => s.zB.map(t => ({
    label: String((0, s.D$)(t)),
    value: t
  })), []);
  return (0, n.jsx)(i.Modal, {
    transitionState: r,
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
    children: (0, n.jsx)(u.$QX, {
      selectedValues: d,
      onChange: O,
      options: E
    })
  })
}