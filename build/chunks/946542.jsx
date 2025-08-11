/** Chunk was on 88934 **/
/** chunk id: 946542, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434650 = require("./434650.js"),
  Chunk768581 = require("./768581.js"),
  Chunk255333 = require("./255333.js"),
  Chunk881294 = require("./881294.js"),
  Chunk194594 = require("./194594.jsx"),
  Chunk523311 = require("./523311.jsx"),
  Chunk359993 = require("./359993.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk886141 = require("./886141.js");

function f(e) {
  let {
    applicationId: t,
    similarApplications: n,
    onSelectApplication: i,
    similarLoadId: s
  } = e, o = function(e) {
    let {
      applicationId: t,
      similarAppIds: n
    } = e, [r, i] = a.useState(), s = (0, l.O)(e => {
      e && i(t)
    });
    return a.useEffect(() => {
      r === t && (0, c.zZ)(m.rMx.APP_DIRECTORY_RECOMMENDATIONS_VIEWED, {
        application_id: t,
        suggested_application_ids: n
      })
    }, [r, t, n]), s
  }({
    applicationId: t,
    similarAppIds: a.useMemo(() => n.map(e => e.id), [n])
  });
  return <div className={g.contentContainer} ref={o}>{n.map((e, n) => (0, r.jsx)(_, {
      applicationId: t,
      similarApplication: e,
      onSelectApplication: i,
      similarLoadId: s,
      position: n
    }, e.id))}</div>
}

function _(e) {
  var t, n, l;
  let {
    applicationId: o,
    similarApplication: u,
    onSelectApplication: h,
    position: f,
    similarLoadId: _
  } = e, b = (0, p.Z)({
    application: u
  }), x = null == (t = u.categories) ? true : t[0], v = a.useMemo(() => s.ZP.getApplicationIconURL({
    id: u.id,
    icon: u.icon,
    size: 48
  }), [u]), C = a.useCallback(() => {
    (0, c.zZ)(m.rMx.APP_DIRECTORY_RECOMMENDATION_CLICKED, {
      current_page: "product",
      application_id: o,
      suggested_application_id: u.id,
      position: f,
      load_id: _,
      shown_mutual_guilds_count: b.length
    }), h(u.id)
  }, [h, u.id, o, b.length, _, f]);
  return <i.P3F onClick={C} className={g.appContainer}>{<div className={g.appHeader}>{<img src={v} alt={""} className={g.avatar} height={48} width={48} />}{<div className={g.titleContainer}>{<div style={{
            flex: 1,
            minWidth: 0,
            overflow: "hidden"
          }}><i.X6q variant={"heading-md/semibold"} color={"header-primary"} className={g.appName}>{u.name}</i.X6q></div>}{null != x ? <i.Text className={g.appCategory} variant={"text-xs/medium"} color={"text-muted"}>{x.name}</i.Text> : null}</div>}</div>}{<i.Text className={g.appDescription} variant={"text-sm/medium"} color={"header-secondary"} lineClamp={2}>{null != (l = null == (n = u.directory_entry) ? true : n.short_description) ? l : u.description}</i.Text>}{<d.Z application={u} textVariant={"text-xs/medium"} mutualGuilds={b} mutualGuildShownMax={3} guildIconSize={d.x.SMALL} compact={true} />}</i.P3F>
}
let b = function(e) {
  let {
    applicationId: t,
    fetchState: n,
    similarApplications: a,
    onSelectApplication: l,
    similarLoadId: s
  } = e;
  return n !== o.M.FETCHING && (null == a || 0 === a.length) ? null : <div className={g.sectionContainer}>{<div className={g.divider} />}{<i.X6q variant={"heading-sm/semibold"} color={"header-primary"} className={g.sectionHeader}>{h.intl.string(h.t.E8wCnp)}</i.X6q>}{<u.Z loading={n === o.M.FETCHING}>{null != a ? (0, r.jsx)(f, {
        applicationId: t,
        similarApplications: a,
        onSelectApplication: l,
        similarLoadId: s
      }) : null}</u.Z>}</div>
}