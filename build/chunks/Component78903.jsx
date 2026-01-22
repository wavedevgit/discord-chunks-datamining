/** Chunk was on 63452 **/
/** chunk id: 78903, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk997509 = require("./997509.js"),
  Chunk976860 = require("./976860.js"),
  Chunk513461 = require("./513461.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk442146 = require("./442146.js");
let E = function(t) {
  let {
    guildId: i,
    submittedGuildJoinRequestsCount: n,
    onClose: E,
    transitionState: k,
    onConfirm: h
  } = t, x = l.useCallback(t => {
    E(), h(t)
  }, [E, h]), f = l.useCallback(() => {
    E(), e.A.close(), (0, c.pX)(d.BVt.CHANNEL(i, C.VV.MEMBER_SAFETY))
  }, [i, E]), g = n > 200, b = [{
    text: p.intl.string(p.t["ETE/oC"]),
    onClick: E,
    variant: "secondary"
  }, {
    text: p.intl.string(p.t.Gfg0rT),
    onClick: () => x(o.B5.REJECTED),
    variant: "critical-primary"
  }];
  return g || b.push({
    text: p.intl.string(p.t.VWqCvL),
    onClick: () => x(o.B5.APPROVED),
    variant: "primary"
  }), (0, a.jsx)(r.Modal, {
    title: p.intl.formatToPlainString(p.t.chV4Jb, {
      count: n
    }),
    onClose: E,
    subtitle: g ? p.intl.string(p.t.EPoNRs) : p.intl.string(p.t["8+nq/G"]),
    transitionState: k,
    actions: b,
    children: (0, a.jsx)(s.DUT, {
      className: u.K2,
      onClick: f,
      children: (0, a.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-link",
        children: p.intl.string(p.t.szESVF)
      })
    })
  })
}