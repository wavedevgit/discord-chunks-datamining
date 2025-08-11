/** Chunk was on 22988 **/
/** chunk id: 623691, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk668781 = require("./668781.js"),
  Chunk749210 = require("./749210.js"),
  Chunk266454 = require("./266454.js"),
  Chunk190263 = require("./190263.js"),
  Chunk494620 = require("./494620.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk55935 = require("./55935.js"),
  Chunk63063 = require("./63063.js"),
  Chunk434404 = require("./434404.js"),
  Chunk714939 = require("./714939.js"),
  Chunk494831 = require("./494831.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk587072 = require("./587072.js");

function E(e) {
  let {
    guild: t,
    everyoneRole: n,
    filteredRoles: l,
    setEditRoleId: a,
    query: s,
    setQuery: o,
    setHeaderHeight: c
  } = e, u = i.useRef(null), m = p.D.useExperiment({
    guildId: t.id,
    location: "GuildSettingsRolesOverviewHeader"
  }).enabled;
  i.useEffect(() => {
    var e, t;
    c(null != (t = null == (e = u.current) ? true : e.offsetHeight) ? t : _.Cl)
  }, [c]);
  let g = i.useCallback(() => {
    a(n.id)
  }, [a, n.id]);
  return <div ref={u}>{<d.vwX tag={d.RB0.H1}>{N.intl.string(N.t.LPJmLy)}</d.vwX>}{<d.Text className={I.description} color={"header-secondary"} variant={"text-sm/normal"}>{N.intl.string(N.t["1ydhVl"])}</d.Text>}{m ? <S guild={t} /> : null}{<T guild={t} everyoneRole={n} filteredRoles={l} query={s} setQuery={o} onEveryoneRoleClick={g} />}</div>
}

function S(e) {
  let {
    guild: t
  } = e;
  i.useEffect(() => {
    (0, g.wE)(c.z.GUILD_PIN_PERMISSION_MIGRATION_NOTIFICATION, t.id, {
      dismissAction: y.L.INDIRECT_ACTION,
      guildId: t.id,
      forceTrack: true
    })
  }, [t]);
  let n = (0, b.vc)(o()(O.LCk), "LL"),
    l = t.features.has(O.oNc.PIN_PERMISSION_MIGRATION_COMPLETE) ? <d.Text variant={"text-sm/normal"}>{N.intl.format(N.t.Vg2oTE, {
        breakingChangeDate: n
      })}</d.Text> : f.Z.can(C.Pl.ADMINISTRATOR, t) ? <d.Text variant={"text-sm/normal"}>{N.intl.format(N.t.HYM8OD, {
        onClickMigrate: () => {
          u.Z.show({
            title: N.intl.string(N.t.nFE8dH),
            body: N.intl.format(N.t["1PAzQ0"], {
              guildName: t.name
            }),
            cancelText: N.intl.string(N.t["ETE/oK"]),
            confirmText: N.intl.string(N.t["cY+Ooa"]),
            onConfirm: () => {
              j.Z.migratePinPermission(t.id)
            }
          })
        },
        breakingChangeDate: n
      })}</d.Text> : <d.Text variant={"text-sm/normal"}>{N.intl.format(N.t.cAuU1d, {
        breakingChangeDate: n
      })}</d.Text>;
  return <h.Z look={h.z.WARNING} className={I.migrationInfoBox}>{l}</h.Z>
}

function T(e) {
  let {
    guild: t,
    everyoneRole: n,
    filteredRoles: i,
    query: l,
    setQuery: s,
    onEveryoneRoleClick: o
  } = e;
  return <r.Fragment>{<v.Z role={n} onClick={o} />}{<P guild={t} query={l} setQuery={s} />}{<d.Text className={I.helpText} color={"header-secondary"} variant={"text-sm/normal"}>{N.intl.format(N.t.xkC3YW, {
        articleURL: x.Z.getArticleURL(O.BhN.PERMISSIONS_TUTORIAL)
      })}</d.Text>}{<div className={I.rolesTable}><div className={I.tableHeader}>{<div className={I.dragSpacing} />}{<d.Text className={a()(I.tableTitle, I.roleNameSpacing)} variant={"text-sm/normal"}>{N.intl.format(N.t["38N3V1"], {
            numRoles: String(i.length)
          })}</d.Text>}{<d.Text className={a()(I.tableTitle, I.memberSpacing)} variant={"text-sm/normal"}>{N.intl.string(N.t["9Oq93t"])}</d.Text>}{<div className={I.buttonsSpacing} />}</div></div>}</r.Fragment>
}

function P(e) {
  let {
    guild: t,
    query: n,
    setQuery: l
  } = e, [a, s] = i.useState(false), o = i.useCallback(e => {
    l(e)
  }, [l]), c = i.useCallback(() => {
    l("")
  }, [l]), u = async () => {
    s(true), await m.Z.createRole(t.id), s(false)
  };
  return <div className={I.__invalid_rolesList}><div className={I.searchContainer}>{<d.E1j query={n} onChange={o} onClear={c} placeholder={N.intl.string(N.t.Sojqsr)} aria-label={N.intl.string(N.t.Sojqsr)} />}{<d.zxk size={"sm"} onClick={u} loading={a} text={N.intl.string(N.t.JZZjQE)} />}</div></div>
}