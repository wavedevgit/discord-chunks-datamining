/** Chunk was on 37548 **/
/** chunk id: 856103, original params: e,t,n (module,exports,require) **/
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
let h = function(e) {
  let {
    guildId: t,
    transitionState: n,
    onClose: h
  } = e, m = (0, r.bG)([g.A], () => g.A.getRequest(t), [t]), A = (0, r.bG)([u.A], () => u.A.getGuild(t), [t]), k = (0, r.bG)([o.default], () => {
    var e;
    return null == (e = o.default.getCurrentUser()) ? true : e.id
  }), x = (0, r.bG)([d.Ay], () => null != k ? d.Ay.getMember(t, k) : null, [k, t]), j = i.useCallback(() => {
    h(), null == x && (0, f.A)()
  }, [x, h]), C = i.useCallback(async () => {
    if (null == x ? true : x.isPending) {
      try {
        await c.A.removeGuildJoinRequest(t)
      } catch (e) {
        throw e
      }
      h(), (0, b.Ze)(t)
    } else c.A.resetGuildJoinRequest(t)
  }, [t, null == x ? true : x.isPending, h]), G = i.useMemo(() => [{
    text: v.intl.string(v.t.I1LYVk),
    variant: "secondary",
    onClick: C
  }, {
    text: v.intl.string(v.t.BddRzS),
    variant: "critical-primary",
    onClick: j
  }], [C, j]);
  return (0, l.jsx)(a.Modal, {
    transitionState: n,
    onClose: h,
    title: (null == A ? true : A.name) != null ? v.intl.formatToPlainString(v.t["P+/gzA"], {
      guildName: A.name
    }) : v.intl.string(v.t.gBPcuP),
    actions: G,
    children: (null == m ? true : m.rejectionReason) != null && (null == m ? true : m.rejectionReason) !== "" ? (0, l.jsxs)(s.Text, {
      variant: "text-md/medium",
      color: "text-default",
      children: [(0, l.jsx)("span", {
        className: p.Wj,
        children: v.intl.string(v.t.cf1psW)
      }), (0, l.jsx)("span", {
        children: null == m ? true : m.rejectionReason
      })]
    }) : null
  })
}