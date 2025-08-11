/** Chunk was on 42018 **/
/** chunk id: 859432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => J
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk5036 = require("./5036.js"),
  Chunk553385 = require("./553385.js"),
  Chunk52011 = require("./52011.js"),
  Chunk890477 = require("./890477.js"),
  Chunk458034 = require("./458034.jsx"),
  Chunk706140 = require("./706140.js"),
  Chunk362658 = require("./362658.js"),
  Chunk294978 = require("./294978.jsx"),
  Chunk513102 = require("./513102.jsx"),
  Chunk976192 = require("./976192.js"),
  Chunk887904 = require("./887904.js"),
  Chunk429824 = require("./429824.jsx"),
  Chunk466330 = require("./466330.jsx"),
  Chunk191471 = require("./191471.jsx"),
  Chunk162157 = require("./162157.js"),
  Chunk623624 = require("./623624.jsx"),
  Chunk894059 = require("./894059.js"),
  Chunk434404 = require("./434404.js"),
  Chunk978946 = require("./978946.js"),
  Chunk731722 = require("./731722.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk343056 = require("./343056.jsx"),
  Chunk41776 = require("./41776.js"),
  Chunk190263 = require("./190263.js"),
  Chunk837949 = require("./837949.jsx"),
  Chunk11352 = require("./11352.js"),
  Chunk601964 = require("./601964.js"),
  Chunk271383 = require("./271383.js"),
  Chunk496675 = require("./496675.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk647086 = require("./647086.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk195196 = require("./195196.js"),
  Chunk401174 = require("./401174.js");

function V(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let J = Chunk73800.memo(function(e) {
  let {
    guild: t,
    onClose: l,
    onSelect: J
  } = e, z = (0, o.e7)([L.default], () => L.default.getCurrentUser());
  a()(null != z, "GuildHeaderPopout: user cannot be undefined"), r.useEffect(() => {
    F.default.track(R.rMx.GUILD_DROPDOWN_MENU_VIEWED, {
      guild_id: t.id
    })
  });
  let X = (0, o.e7)([B.ZP], () => B.ZP.isGuildCollapsed(t.id), [t.id]),
    {
      canAccessSettings: K,
      canManageChannels: $,
      showGuildAnalytics: ee
    } = (0, o.cj)([M.Z], () => ({
      canAccessSettings: M.Z.canAccessGuildSettings(t),
      canManageChannels: M.Z.can(R.Plq.MANAGE_CHANNELS, t),
      showGuildAnalytics: M.Z.can(R.Plq.VIEW_GUILD_ANALYTICS, t) && t.features.has(R.oNc.COMMUNITY)
    }), [t]),
    et = (0, Z.N8)(t),
    en = (0, U.eM)(t, z),
    ei = (0, o.e7)([G.Z], () => G.Z.isLurking(t.id), [t.id]),
    er = (0, o.e7)([C.ZP], () => C.ZP.isCurrentUserGuest(t.id)),
    el = (0, D.Z)(t.id, true),
    ea = (0, f.ZP)(t),
    eo = (0, P.Z)({
      source: R.t4x.GUILD_HEADER,
      guild: t
    }),
    ec = (0, O.Z)({
      guildId: t.id,
      userId: z.id,
      analyticsLocation: {
        page: R.ZY5.GUILD_CHANNEL,
        section: R.jXE.GUILD_DROPDOWN_MENU
      },
      icon: s.vdY
    }),
    es = t.features.has(R.oNc.HUB),
    ed = t.id === H._,
    eu = t.id === R.STv,
    eg = (0, A.Z)(t.id),
    eb = (0, j.Z)(t),
    ef = (0, h.Z)(t),
    ep = (0, v.Z)(t, true),
    ey = (0, x.Z)(t),
    {
      isFavoritesPerk: ej
    } = (0, y.z)("GuildHeaderPopout"),
    eh = (0, k.o)(t),
    {
      triggerDeadchat: eO
    } = b.Z.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: false
    }),
    {
      triggerGamingStats: ex
    } = g.F.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: false
    }),
    ev = T.Y.useExperiment({
      location: "GuildHeaderPopout"
    }, {
      autoTrackExposure: true
    }).enabled,
    [eP] = (0, p.cv)([c.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
    em = r.useCallback(() => {
      (0, s.ZDy)(async () => {
        let {
          default: e
        } = await n.e("53961").then(n.bind(n, 402979));
        return n => <e{...W(V({}, n), {
          guild: t
        })} />
      })
    }, [t]),
    eZ = ev && eP === c.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  return ei || er ? <s.v2r onSelect={J} navId={"guild-header-popout"} variant={"fixed"} onClose={l} aria-label={Q.intl.string(Q.t.HpQykZ)}><s.sNh id={"leave-guild"} label={Q.intl.string(Q.t.J2TBi4)} icon={s.PBZ} action={() => {
        I.Z.leaveGuild(t.id, true)
      }} /></s.v2r> : ed ? <s.v2r onSelect={J} navId={"favorites-header-popout"} variant={"fixed"} onClose={l} aria-label={Q.intl.string(Q.t.HpQykZ)}>{<s.kSQ>{ej && <s.sNh id={"add-channel"} label={Q.intl.string(Q.t["6uDHk5"])} color={"brand"} icon={s.oFk} action={() => (0, s.ZDy)(async () => {
          let {
            default: e
          } = await n.e("29608").then(n.bind(n, 178125));
          return t => (0, i.jsx)(e, V({}, t))
        })} />}{<s.sNh id={"create-category"} label={Q.intl.string(Q.t["ISN+ND"])} icon={s.f1I} action={() => (0, s.ZDy)(async () => {
          let {
            default: e
          } = await n.e("33356").then(n.bind(n, 477782));
          return t => (0, i.jsx)(e, V({}, t))
        })} />}</s.kSQ>}{<s.kSQ><s.S89 id={"hide-muted-channels"} label={Q.intl.string(Q.t.UwOLJC)} checked={X} action={() => d.Z.toggleCollapseGuild(t.id)} /></s.kSQ>}</s.v2r> : es ? <s.v2r onSelect={J} navId={"guild-header-popout"} variant={"fixed"} onClose={l} aria-label={Q.intl.string(Q.t.HpQykZ)}>{<s.kSQ>{K ? <s.sNh id={"settings"} label={Q.intl.string(Q.t["154/bG"])} icon={eh ? s.Ncx : s.ewm} action={() => {
          I.Z.open(t.id, (0, N.r)())
        }} /> : null}{eo}{<s.sNh id={"privacy"} label={Q.intl.string(Q.t.BayiAg)} icon={s.b7C} action={() => (0, s.ZDy)(async () => {
          let {
            default: e
          } = await n.e("59500").then(n.bind(n, 241420));
          return n => (0, i.jsx)(e, W(V({}, n), {
            guild: t
          }))
        })} />}{ec}</s.kSQ>}{en ? null : <s.kSQ><s.sNh id={"leave"} label={Q.intl.string(Q.t.Dv8gFR)} icon={s.PBZ} color={"danger"} action={em} /></s.kSQ>}</s.v2r> : eu ? null : <s.v2r onSelect={J} navId={"guild-header-popout"} variant={"fixed"} onClose={l} aria-label={Q.intl.string(Q.t.HpQykZ)}>{<s.kSQ>{<s.sNh id={"premium-subscribe"} label={Q.intl.string(Q.t.VJEVbm)} icon={s.$Eu} action={() => {
          (0, w.f)({
            guildId: t.id,
            location: {
              section: R.jXE.GUILD_HEADER_POPOUT
            }
          })
        }} />}{(0, S.up)(t) && (0, S.jq)(t) && <s.sNh id={"guild-tag"} label={Q.intl.string(Y.default.mf2OwM)} icon={(0, i.jsx)(E.m0, {
          guildId: t.id,
          guildBadge: t.profile.badge,
          guildTag: t.profile.tag,
          inline: false
        })} action={() => (0, _.Z)(t.id)} />}</s.kSQ>}{<s.kSQ>{en && z.isStaff() && eO ? <s.sNh id={"create-deadchat"} label={"Deadchat Ping"} icon={s.eQA} action={() => {
          (0, u.j8)(t.id, R.uaV.GUILD_DEADCHAT_REVIVE_PROMPT)
        }} /> : null}{en && z.isStaff() && ex ? <s.sNh id={"create-gaming-ping"} label={"Gaming Stats Ping"} icon={s.eQA} action={() => {
          (0, u.j8)(t.id, R.uaV.GUILD_GAMING_STATS_PROMPT)
        }} /> : null}{eo}{K ? <s.sNh id={"settings"} label={Q.intl.string(Q.t["154/bG"])} icon={eh ? s.Ncx : s.ewm} action={() => {
          I.Z.open(t.id, (0, N.r)())
        }} /> : null}{ee ? <s.sNh id={"insights"} label={Q.intl.string(Q.t["0wWfUF"])} icon={s.IeX} action={() => I.Z.open(t.id, R.pNK.ANALYTICS)} /> : null}{$ ? <i.Fragment>{<s.sNh id={"create-channel"} label={Q.intl.string(Q.t["fUYU+v"])} icon={s.oFk} action={() => (0, s.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("45094"), n.e("45822")]).then(n.bind(n, 218613));
            return n => (0, i.jsx)(e, W(V({}, n), {
              channelType: R.d4z.GUILD_TEXT,
              guildId: t.id
            }))
          })} />}{<s.sNh id={"create-category"} label={Q.intl.string(Q.t["ISN+ND"])} icon={s.f1I} action={() => (0, s.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("45094"), n.e("45822")]).then(n.bind(n, 218613));
            return n => (0, i.jsx)(e, W(V({}, n), {
              channelType: R.d4z.GUILD_CATEGORY,
              guildId: t.id
            }))
          })} />}</i.Fragment> : null}{el}{eb}{ef}{ea}{ey}</s.kSQ>}{<s.kSQ>{eg}{<s.sNh id={"notifications"} label={(0, i.jsxs)("div", {
          className: q.newBadgeRow,
          children: [Q.intl.string(Q.t.h850Sk), eZ && (0, i.jsx)(s.IGR, {
            className: q.newBadge,
            text: Q.intl.string(Q.t.y2b7CA)
          })]
        })} icon={eZ ? true : s.Dkj} action={() => (0, s.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("5863"), n.e("95626")]).then(n.bind(n, 751212));
          return n => (0, i.jsx)(e, W(V({}, n), {
            guildId: t.id
          }))
        })} />}{<s.sNh id={"privacy"} label={Q.intl.string(Q.t.BayiAg)} icon={s.b7C} action={() => (0, s.ZDy)(async () => {
          let {
            default: e
          } = await n.e("59500").then(n.bind(n, 241420));
          return n => (0, i.jsx)(e, W(V({}, n), {
            guild: t
          }))
        })} />}</s.kSQ>}{<s.kSQ>{ec}{<s.S89 id={"hide-muted-channels"} label={Q.intl.string(Q.t.UwOLJC)} checked={X} action={() => d.Z.toggleCollapseGuild(t.id)} />}</s.kSQ>}{<s.kSQ>{ep}{et && t.features.has(R.oNc.COMMUNITY) ? <s.sNh id={"report-raid"} label={Q.intl.string(Q.t.cswId3)} icon={s.b7C} color={"danger"} action={() => (0, m.J)(t.id)} /> : null}{en ? null : <s.sNh id={"leave"} label={Q.intl.string(Q.t.J2TBi4)} icon={s.PBZ} color={"danger"} action={em} />}</s.kSQ>}</s.v2r>
})