/** Chunk was on 22988 **/
/** chunk id: 313364, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => R
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk189357 = require("./189357.js"),
  Chunk613464 = require("./613464.js"),
  Chunk434404 = require("./434404.js"),
  Chunk6025 = require("./6025.js"),
  Chunk892001 = require("./892001.js"),
  Chunk433355 = require("./433355.js"),
  Chunk430824 = require("./430824.js"),
  Chunk893966 = require("./893966.js"),
  Chunk527379 = require("./527379.js"),
  Chunk305473 = require("./305473.jsx"),
  Chunk113679 = require("./113679.jsx"),
  Chunk440857 = require("./440857.js"),
  Chunk472596 = require("./472596.js"),
  Chunk598948 = require("./598948.js"),
  Chunk428936 = require("./428936.js"),
  Chunk41586 = require("./41586.jsx"),
  Chunk918192 = require("./918192.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk881786 = require("./881786.js"),
  Chunk319586 = require("./319586.js");

function R(e) {
  let {
    guildId: t
  } = e, n = (0, s.e7)([b.Z], () => b.Z.getGuild(t)), {
    analyticsLocations: l
  } = (0, d.ZP)(c.Z.GUILD_SETTINGS_MEMBERS_PAGE), R = (0, u.m)(t), Z = (0, s.e7)([f.ZP], () => f.ZP.getGuildSidebarState(t), [t]), D = i.useCallback(() => {
    p.Z.closeGuildSidebar(t)
  }, [t]), A = false == !!(null == n ? true : n.features.has(S.oNc.ENABLED_MODERATION_EXPERIENCE_FOR_NON_COMMUNITY)), k = (0, s.e7)([x.Z], () => x.Z.getEstimatedMemberSearchCountByGuildId(t), [t]), L = i.useCallback(e => {
    null != e && (0, h.openUserProfileModal)({
      userId: e.userId,
      guildId: e.guildId,
      sourceAnalyticsLocations: l
    })
  }, [l]), M = i.useRef(null), G = i.useCallback(() => {
    var e;
    null == (e = M.current) || e.resetSearchText()
  }, []);
  if (null == n) return null;
  let U = (0, y.xb)(false, false, k);
  return <d.Gt value={l}>{<div className={a()(w.customColumn, P.override, P.settingsColumn)}><div className={w.customContainer}><o.w0Z className={w.customScroller} orientation={"auto"}><o.w0Z className={P.settingsHorizontalScroller} orientation={"auto"}><main className={a()(w.customColumn, w.contentColumnDefault, P.override, P.settingsColumn, P.settingsContent)}>{<o.hjN className={P.header}><o.vwX tag={o.RB0.H1}>{T.intl.string(T.t["S40K6+"])}</o.vwX></o.hjN>}{<o.hjN><div className={P.tableContainer}>{<_.Z guild={n} />}{<v.Z guild={n} />}{A ? <div className={P.mainTableContainer}>{<I.Z guild={n} ref={M} />}{<C.Z guild={n} searchState={U} compact={true} onSelectRow={L} onResetForNewMembers={G} />}{U !== y.po.SUCCESS_STILL_INDEXING && <N.Z guildId={n.id} />}</div> : <div className={P.movedTable}><div className={P.noResultsContainer}>{<div><E.Z /></div>}{<o.Text variant={"text-md/normal"} color={"text-muted"}>{T.intl.format(T.t.Bf6yxM, {
                          onClick: e => {
                            null != n && (e.preventDefault(), g.Z.close(), (0, j._X)(n.id))
                          }
                        })}</o.Text>}</div></div>}</div></o.hjN>}{<O.Z guildId={n.id} />}</main></o.w0Z></o.w0Z></div></div>}{R && null != Z && <r.Fragment>{<o.ZMr isVisible={true} onClick={D} />}{<div className={P.modViewSidebarContainer} style={{
          width: S.$Y6
        }}><m.Z userId={Z.details.userId} guildId={Z.details.guildId} onClose={D} /></div>}</r.Fragment>}</d.Gt>
}