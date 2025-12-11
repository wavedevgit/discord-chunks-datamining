/** Chunk was on 55009 **/
/** chunk id: 826390, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk703656 = require("./703656.js"),
  Chunk246364 = require("./246364.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk667932 = require("./667932.js");
let p = function(t) {
  let {
    guildId: i,
    submittedGuildJoinRequestsCount: n,
    onClose: p,
    transitionState: E,
    onConfirm: k
  } = t, T = a.useCallback(t => {
    p(), k(t)
  }, [p, k]), f = a.useCallback(() => {
    p(), l.Z.close(), (0, s.uL)(d.Z5c.CHANNEL(i, u.oC.MEMBER_SAFETY))
  }, [i, p]), h = n > 200, b = [{
    text: x.intl.string(x.t["ETE/oC"]),
    onClick: p,
    variant: "secondary"
  }, {
    text: x.intl.string(x.t.Gfg0rT),
    onClick: () => T(o.wB.REJECTED),
    variant: "critical-primary"
  }];
  return h || b.push({
    text: x.intl.string(x.t.VWqCvL),
    onClick: () => T(o.wB.APPROVED),
    variant: "primary"
  }), (0, e.jsx)(c.Modal, {
    title: x.intl.formatToPlainString(x.t.chV4Jb, {
      count: n
    }),
    onClose: p,
    subtitle: h ? x.intl.string(x.t.EPoNRs) : x.intl.string(x.t["8+nq/G"]),
    transitionState: E,
    actions: b,
    children: (0, e.jsx)(r.P3F, {
      className: C.actionText,
      onClick: f,
      children: (0, e.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "text-link",
        children: x.intl.string(x.t.szESVF)
      })
    })
  })
}