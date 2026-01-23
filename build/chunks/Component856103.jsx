/** Chunk was on 37548 **/
/** chunk id: 856103, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk624458 = require("./624458.js"),
  Chunk202384 = require("./202384.js"),
  Chunk212455 = require("./212455.js"),
  Chunk739985 = require("./739985.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk400783 = require("./400783.js");
let h = function(t) {
  let {
    guildId: n,
    transitionState: e,
    onClose: h
  } = t, b = (0, o.bG)([p.A], () => p.A.getRequest(n), [n]), f = (0, o.bG)([u.A], () => u.A.getGuild(n), [n]), x = (0, o.bG)([d.default], () => {
    var t;
    return null == (t = d.default.getCurrentUser()) ? true : t.id
  }), A = (0, o.bG)([s.Ay], () => null != x ? s.Ay.getMember(n, x) : null, [x, n]), j = l.useCallback(() => {
    h(), null == A && (0, m.A)()
  }, [A, h]), k = l.useCallback(async () => {
    if (null == A ? true : A.isPending) {
      try {
        await c.A.removeGuildJoinRequest(n)
      } catch (t) {
        throw t
      }
      h(), (0, g.Ze)(n)
    } else c.A.resetGuildJoinRequest(n)
  }, [n, null == A ? true : A.isPending, h]), C = l.useMemo(() => [{
    text: v.intl.string(v.t.I1LYVk),
    variant: "secondary",
    onClick: k
  }, {
    text: v.intl.string(v.t.BddRzS),
    variant: "critical-primary",
    onClick: j
  }], [k, j]);
  return (0, i.jsx)(a.Modal, {
    transitionState: e,
    onClose: h,
    title: (null == f ? true : f.name) != null ? v.intl.formatToPlainString(v.t["P+/gzA"], {
      guildName: f.name
    }) : v.intl.string(v.t.gBPcuP),
    actions: C,
    children: (null == b ? true : b.rejectionReason) != null && (null == b ? true : b.rejectionReason) !== "" ? (0, i.jsxs)(r.Text, {
      variant: "text-md/medium",
      color: "text-default",
      children: [(0, i.jsx)("span", {
        className: _.Wj,
        children: v.intl.string(v.t.cf1psW)
      }), (0, i.jsx)("span", {
        children: null == b ? true : b.rejectionReason
      })]
    }) : null
  })
}