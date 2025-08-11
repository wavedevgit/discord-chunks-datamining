/** Chunk was on 12097 **/
/** chunk id: 477718, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk480137 = require("./480137.js"),
  Chunk906732 = require("./906732.js"),
  Chunk376923 = require("./376923.js"),
  Chunk472596 = require("./472596.js"),
  Chunk987707 = require("./987707.js"),
  Chunk909746 = require("./909746.js"),
  Chunk501801 = require("./501801.js"),
  Chunk884902 = require("./884902.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk5192 = require("./5192.js"),
  Chunk776767 = require("./776767.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk54433 = require("./54433.js"),
  Chunk44946 = require("./44946.js"),
  Chunk12740 = require("./12740.js");

function D(e) {
  var t, n;
  let {
    log: s,
    member: a,
    guild: E
  } = e, {
    analyticsLocations: T
  } = (0, d.ZP)(), N = m.nm(s), O = m.QM(s), v = null == (t = m.V$(p.zUn.REASON, s)) ? true : t.newValue, D = m.J5(s), b = (0, _.LJ)(s.id), L = (0, u.e7)([f.ZP], () => null != s.userId ? f.ZP.getMember(a.guildId, s.userId) : null, [a.guildId, s.userId]), x = (0, g.X7)(null == L ? true : L.guildId, null == L ? true : L.userId, null != (n = null == L ? true : L.colorStrings) ? n : null), U = l.useCallback(e => t => {
    t.preventDefault(), t.stopPropagation(), null != e && (0, A.RE)(e, T)
  }, [T]), M = l.useCallback(() => null == s.user ? null : <c.ua7 text={R.intl.string(R.t.mvsi9v)}>{e => {
      var t;
      let {
        onMouseEnter: n,
        onMouseLeave: l
      } = e;
      return (0, r.jsx)(c.P3F, {
        tag: "span",
        className: S.username,
        onClick: U(L),
        onMouseEnter: n,
        onMouseLeave: l,
        children: (0, r.jsxs)(c.Text, {
          variant: "text-sm/medium",
          tag: "span",
          children: ["@", (0, r.jsx)(c.PUh, {
            name: h.ZP.getName(a.guildId, null, s.user),
            colorString: null != (t = null == L ? true : L.colorString) ? t : null,
            colorStrings: x
          })]
        })
      })
    }}</c.ua7>, [U, s.user, a.guildId, L, x])();
  return <div className={i()(C.modInfoItem, S.auditLogItem)}>{<div className={S.auditLogItemTitleContainer}>{<div className={S.auditLogItemTitle}>{null != N && <c.Text variant={"text-sm/semibold"} color={"header-primary"}>{N}</c.Text>}{null != O && <c.Text variant={"text-sm/normal"} color={"header-secondary"}>{"("}{"string" == typeof O ? O : o()(O).fromNow()}{")"}</c.Text>}</div>}{<div className={S.auditLogItemDate}><c.Text variant={"text-sm/medium"} color={"header-primary"}>{b}</c.Text></div>}</div>}{null != v && <div className={S.auditLogSecondaryContainer}><div className={S.auditLogReason}>{M}{<c.Text variant={"text-sm/normal"} color={"text-muted"} tag={"span"}>{v}</c.Text>}</div></div>}{null == v && null != D && <div className={S.auditLogSecondaryContainer}><div className={S.auditLogSecondary}>{M}{<c.Text variant={"text-sm/normal"} color={"text-muted"} tag={"span"}>{D}</c.Text>}</div></div>}{null == v && null == D && <div className={S.auditLogSecondaryContainer}><div className={S.auditLogSecondary}><c.Text variant={"text-sm/normal"} color={"text-muted"} tag={"span"}><I.tP log={s} guild={E} onContentClick={() => {}} className={S.auditLogExpandedChangeDetails} /></c.Text></div></div>}</div>
}

function b(e) {
  let {
    member: t
  } = e, n = (0, u.e7)([N.Z], () => N.Z.getGuild(t.guildId), [t.guildId]), s = (0, u.e7)([T.Z], () => {
    let e = T.Z.logs;
    return null == e || null == n ? [] : m._$(e, n)
  }, [n]);
  return (l.useEffect(() => {
    !async function(e, t) {
      await E.gV(t, e)
    }(t.guildId, t.userId)
  }, [t.guildId, t.userId]), null == n || 0 === s.length) ? null : <c.xJW title={R.intl.string(R.t.flCxLi)} titleClassName={v.infoTitle}>{s.length > 0 ? (0, r.jsx)(O.WM, {
      children: s.map(e => (0, r.jsx)(D, {
        log: e,
        member: t,
        guild: n
      }, e.id))
    }) : null}</c.xJW>
}