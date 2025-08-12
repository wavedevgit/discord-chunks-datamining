/** Chunk was on 55009 **/
/** chunk id: 826390, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk703656 = require("./703656.js"),
  Chunk246364 = require("./246364.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk933885 = require("./933885.js");
let C = function(t) {
  let {
    guildId: i,
    submittedGuildJoinRequestsCount: n,
    onClose: C,
    transitionState: k,
    onConfirm: E
  } = t, f = c.useCallback(t => {
    C(), E(t)
  }, [C, E]), h = c.useCallback(() => {
    C(), l.Z.close(), (0, o.uL)(u.Z5c.CHANNEL(i, x.oC.MEMBER_SAFETY))
  }, [i, C]), T = n > 200, g = [{
    text: d.intl.string(d.t["ETE/oK"]),
    onClick: C,
    variant: "secondary"
  }, {
    text: d.intl.string(d.t.Gfg0ra),
    onClick: () => f(s.wB.REJECTED),
    variant: "critical-primary"
  }];
  return T || g.push({
    text: d.intl.string(d.t.VWqCvL),
    onClick: () => f(s.wB.APPROVED),
    variant: "primary"
  }), (0, a.jsx)(r.Modal, {
    title: d.intl.formatToPlainString(d.t.chV4JS, {
      count: n
    }),
    onClose: C,
    subtitle: T ? d.intl.string(d.t.EPoNRk) : d.intl.string(d.t["8+nq/P"]),
    transitionState: k,
    actions: g,
    children: (0, a.jsx)(e.P3F, {
      className: p.actionText,
      onClick: h,
      children: (0, a.jsx)(e.Text, {
        variant: "text-md/normal",
        color: "text-link",
        children: d.intl.string(d.t.szESVF)
      })
    })
  })
}