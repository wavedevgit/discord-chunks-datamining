/** Chunk was on 3378 **/
/** chunk id: 76075, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  default: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk693546 = require("./693546.js"),
  Chunk305325 = require("./305325.js"),
  Chunk937111 = require("./937111.js"),
  Chunk702286 = require("./702286.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk191333 = require("./191333.js");
let v = function(n) {
  let {
    guildId: e,
    transitionState: t,
    onClose: v
  } = n, _ = (0, a.e7)([p.Z], () => p.Z.getRequest(e), [e]), C = (0, a.e7)([u.Z], () => u.Z.getGuild(e), [e]), R = (0, a.e7)([c.default], () => {
    var n;
    return null == (n = c.default.getCurrentUser()) ? true : n.id
  }), k = (0, a.e7)([s.ZP], () => null != R ? s.ZP.getMember(e, R) : null, [R, e]), x = o.useCallback(() => {
    v(), null == k && (0, g.Z)()
  }, [k, v]), Z = o.useCallback(async () => {
    if (null == k ? true : k.isPending) {
      try {
        await d.Z.removeGuildJoinRequest(e)
      } catch (n) {
        throw n
      }
      v(), (0, m.hk)(e)
    } else d.Z.resetGuildJoinRequest(e)
  }, [e, null == k ? true : k.isPending, v]), j = o.useMemo(() => [{
    text: f.intl.string(f.t.I1LYVk),
    variant: "secondary",
    onClick: Z
  }, {
    text: f.intl.string(f.t.BddRzS),
    variant: "critical-primary",
    onClick: x
  }], [Z, x]);
  return (0, i.jsx)(l.Modal, {
    transitionState: t,
    onClose: v,
    title: (null == C ? true : C.name) != null ? f.intl.formatToPlainString(f.t["P+/gzA"], {
      guildName: C.name
    }) : f.intl.string(f.t.gBPcuP),
    actions: j,
    children: (null == _ ? true : _.rejectionReason) != null && (null == _ ? true : _.rejectionReason) !== "" ? (0, i.jsxs)(r.Text, {
      variant: "text-md/medium",
      color: "header-secondary",
      children: [(0, i.jsx)("span", {
        className: h.rejectionReasonLabel,
        children: f.intl.string(f.t.cf1psW)
      }), (0, i.jsx)("span", {
        children: null == _ ? true : _.rejectionReason
      })]
    }) : null
  })
}