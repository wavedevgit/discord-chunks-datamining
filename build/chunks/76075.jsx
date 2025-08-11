/** Chunk was on 3378 **/
/** chunk id: 76075, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.js"),
  Chunk481060 = require("./481060.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk693546 = require("./693546.js"),
  Chunk305325 = require("./305325.js"),
  Chunk937111 = require("./937111.js"),
  Chunk702286 = require("./702286.js"),
  Chunk388032 = require("./388032.js"),
  Chunk568410 = require("./568410.js");
let h = function(n) {
  let {
    guildId: t,
    transitionState: e,
    onClose: h
  } = n, v = (0, a.e7)([p.Z], () => p.Z.getRequest(t), [t]), C = (0, a.e7)([c.Z], () => c.Z.getGuild(t), [t]), R = (0, a.e7)([u.default], () => {
    var n;
    return null == (n = u.default.getCurrentUser()) ? true : n.id
  }), x = (0, a.e7)([s.ZP], () => null != R ? s.ZP.getMember(t, R) : null, [R, t]), Z = o.useCallback(() => {
    h(), null == x && (0, f.Z)()
  }, [x, h]), j = o.useCallback(async () => {
    if (null == x ? true : x.isPending) {
      try {
        await d.Z.removeGuildJoinRequest(t)
      } catch (n) {
        throw n
      }
      h(), (0, m.hk)(t)
    } else d.Z.resetGuildJoinRequest(t)
  }, [t, null == x ? true : x.isPending, h]), k = o.useMemo(() => [{
    text: g.intl.string(g.t.I1LYVl),
    variant: "secondary",
    onClick: j
  }, {
    text: g.intl.string(g.t.BddRzc),
    variant: "critical-primary",
    onClick: Z
  }], [j, Z]);
  return <l.Modal transitionState={e} onClose={h} title={(null == C ? true : C.name) != null ? g.intl.formatToPlainString(g.t["P+/gzM"], {
      guildName: C.name
    }) : g.intl.string(g.t.gBPcuL)} actions={k}>{(null == v ? true : v.rejectionReason) != null && (null == v ? true : v.rejectionReason) !== "" ? (0, i.jsxs)(r.Text, {
      variant: "text-md/medium",
      color: "header-secondary",
      children: [(0, i.jsx)("span", {
        className: _.rejectionReasonLabel,
        children: g.intl.string(g.t.cf1psb)
      }), (0, i.jsx)("span", {
        children: null == v ? true : v.rejectionReason
      })]
    }) : null}</l.Modal>
}