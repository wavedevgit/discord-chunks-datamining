/** Chunk was on 3378 **/
/** chunk id: 76075, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  default: () => _
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
  Chunk394121 = require("./394121.js");
let _ = function(n) {
  let {
    guildId: t,
    transitionState: e,
    onClose: _
  } = n, h = (0, a.e7)([p.Z], () => p.Z.getRequest(t), [t]), x = (0, a.e7)([u.Z], () => u.Z.getGuild(t), [t]), C = (0, a.e7)([c.default], () => {
    var n;
    return null == (n = c.default.getCurrentUser()) ? true : n.id
  }), R = (0, a.e7)([s.ZP], () => null != C ? s.ZP.getMember(t, C) : null, [C, t]), k = o.useCallback(() => {
    _(), null == R && (0, f.Z)()
  }, [R, _]), Z = o.useCallback(async () => {
    if (null == R ? true : R.isPending) {
      try {
        await d.Z.removeGuildJoinRequest(t)
      } catch (n) {
        throw n
      }
      _(), (0, m.hk)(t)
    } else d.Z.resetGuildJoinRequest(t)
  }, [t, null == R ? true : R.isPending, _]), j = o.useMemo(() => [{
    text: g.intl.string(g.t.I1LYVk),
    variant: "secondary",
    onClick: Z
  }, {
    text: g.intl.string(g.t.BddRzS),
    variant: "critical-primary",
    onClick: k
  }], [Z, k]);
  return (0, i.jsx)(l.Modal, {
    transitionState: e,
    onClose: _,
    title: (null == x ? true : x.name) != null ? g.intl.formatToPlainString(g.t["P+/gzA"], {
      guildName: x.name
    }) : g.intl.string(g.t.gBPcuP),
    actions: j,
    children: (null == h ? true : h.rejectionReason) != null && (null == h ? true : h.rejectionReason) !== "" ? (0, i.jsxs)(r.Text, {
      variant: "text-md/medium",
      color: "text-default",
      children: [(0, i.jsx)("span", {
        className: v.rejectionReasonLabel,
        children: g.intl.string(g.t.cf1psW)
      }), (0, i.jsx)("span", {
        children: null == h ? true : h.rejectionReason
      })]
    }) : null
  })
}