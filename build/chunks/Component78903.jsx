/** Chunk was on 63452 **/
/** chunk id: 78903, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => x
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
let x = function(t) {
  let {
    guildId: i,
    submittedGuildJoinRequestsCount: n,
    onClose: x,
    transitionState: E,
    onConfirm: k
  } = t, h = a.useCallback(t => {
    x(), k(t)
  }, [x, k]), T = a.useCallback(() => {
    x(), e.A.close(), (0, c.pX)(d.BVt.CHANNEL(i, p.VV.MEMBER_SAFETY))
  }, [i, x]), b = n > 200, f = [{
    text: C.intl.string(C.t["ETE/oC"]),
    onClick: x,
    variant: "secondary"
  }, {
    text: C.intl.string(C.t.Gfg0rT),
    onClick: () => h(o.B5.REJECTED),
    variant: "critical-primary"
  }];
  return b || f.push({
    text: C.intl.string(C.t.VWqCvL),
    onClick: () => h(o.B5.APPROVED),
    variant: "primary"
  }), (0, r.jsx)(l.Modal, {
    title: C.intl.formatToPlainString(C.t.chV4Jb, {
      count: n
    }),
    onClose: x,
    subtitle: b ? C.intl.string(C.t.EPoNRs) : C.intl.string(C.t["8+nq/G"]),
    transitionState: E,
    actions: f,
    children: (0, r.jsx)(s.DUT, {
      className: u.K2,
      onClick: T,
      children: (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "text-link",
        children: C.intl.string(C.t.szESVF)
      })
    })
  })
}