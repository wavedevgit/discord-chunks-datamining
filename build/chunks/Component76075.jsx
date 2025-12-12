/** Chunk was on 3378 **/
/** chunk id: 76075, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk871612 = require("./871612.js");
let h = function(n) {
  let {
    guildId: t,
    transitionState: e,
    onClose: h
  } = n, x = (0, l.e7)([m.Z], () => m.Z.getRequest(t), [t]), C = (0, l.e7)([c.Z], () => c.Z.getGuild(t), [t]), R = (0, l.e7)([s.default], () => {
    var n;
    return null == (n = s.default.getCurrentUser()) ? true : n.id
  }), k = (0, l.e7)([r.ZP], () => null != R ? r.ZP.getMember(t, R) : null, [R, t]), Z = a.useCallback(() => {
    h(), null == k && (0, p.Z)()
  }, [k, h]), j = a.useCallback(async () => {
    if (null == k ? true : k.isPending) {
      try {
        await u.Z.removeGuildJoinRequest(t)
      } catch (n) {
        throw n
      }
      h(), (0, f.hk)(t)
    } else u.Z.resetGuildJoinRequest(t)
  }, [t, null == k ? true : k.isPending, h]), b = a.useMemo(() => [{
    text: g.intl.string(g.t.I1LYVk),
    variant: "secondary",
    onClick: j
  }, {
    text: g.intl.string(g.t.BddRzS),
    variant: "critical-primary",
    onClick: Z
  }], [j, Z]);
  return (0, i.jsx)(o.Modal, {
    transitionState: e,
    onClose: h,
    title: (null == C ? true : C.name) != null ? g.intl.formatToPlainString(g.t["P+/gzA"], {
      guildName: C.name
    }) : g.intl.string(g.t.gBPcuP),
    actions: b,
    children: (null == x ? true : x.rejectionReason) != null && (null == x ? true : x.rejectionReason) !== "" ? (0, i.jsxs)(d.Text, {
      variant: "text-md/medium",
      color: "text-default",
      children: [(0, i.jsx)("span", {
        className: v.rejectionReasonLabel,
        children: g.intl.string(g.t.cf1psW)
      }), (0, i.jsx)("span", {
        children: null == x ? true : x.rejectionReason
      })]
    }) : null
  })
}