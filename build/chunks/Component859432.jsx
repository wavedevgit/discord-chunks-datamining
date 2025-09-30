/** Chunk was on 45141 **/
/** chunk id: 859432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => q
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk5036 = require("./5036.js"),
  Chunk553385 = require("./553385.js"),
  Chunk52011 = require("./52011.js"),
  Chunk890477 = require("./890477.js"),
  Chunk458034 = require("./458034.jsx"),
  Chunk362658 = require("./362658.js"),
  Chunk294978 = require("./294978.jsx"),
  Chunk513102 = require("./513102.jsx"),
  Chunk976192 = require("./976192.jsx"),
  Chunk887904 = require("./887904.jsx"),
  Chunk429824 = require("./429824.jsx"),
  Chunk466330 = require("./466330.jsx"),
  Chunk191471 = require("./191471.jsx"),
  Chunk162157 = require("./162157.js"),
  Chunk623624 = require("./623624.jsx"),
  Chunk894059 = require("./894059.jsx"),
  Chunk434404 = require("./434404.js"),
  Chunk978946 = require("./978946.js"),
  Chunk731722 = require("./731722.js"),
  Chunk172751 = require("./172751.jsx"),
  Chunk343056 = require("./343056.jsx"),
  Chunk41776 = require("./41776.js"),
  Chunk190263 = require("./190263.js"),
  Chunk837949 = require("./837949.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk271383 = require("./271383.js"),
  Chunk496675 = require("./496675.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk647086 = require("./647086.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk659854 = require("./659854.js"),
  Chunk617575 = require("./617575.js");

function R(e) {
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

function Y(e, t) {
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
let q = Chunk647438.memo(function(e) {
  let {
    guild: t,
    onClose: a,
    onSelect: q
  } = e, V = (0, o.e7)([U.default], () => U.default.getCurrentUser());
  l()(null != V, "GuildHeaderPopout: user cannot be undefined"), r.useEffect(() => {
    L.default.track(M.rMx.GUILD_DROPDOWN_MENU_VIEWED, {
      guild_id: t.id
    })
  });
  let W = (0, o.e7)([T.ZP], () => T.ZP.isGuildCollapsed(t.id), [t.id]),
    {
      canAccessSettings: J,
      canManageChannels: X,
      showGuildAnalytics: z
    } = (0, o.cj)([C.Z], () => ({
      canAccessSettings: C.Z.canAccessGuildSettings(t),
      canManageChannels: C.Z.can(M.Plq.MANAGE_CHANNELS, t),
      showGuildAnalytics: C.Z.can(M.Plq.VIEW_GUILD_ANALYTICS, t) && t.features.has(M.oNc.COMMUNITY)
    }), [t]),
    K = (0, v.N8)(t),
    $ = (0, G.eM)(t, V),
    ee = (0, o.e7)([I.Z], () => I.Z.isLurking(t.id), [t.id]),
    et = (0, o.e7)([A.ZP], () => A.ZP.isCurrentUserGuest(t.id)),
    en = (0, Z.Z)(t.id, true),
    ei = (0, b.ZP)(t),
    er = (0, x.Z)({
      source: M.t4x.GUILD_HEADER,
      guild: t
    }),
    ea = (0, y.Z)({
      guildId: t.id,
      userId: V.id,
      analyticsLocation: {
        page: M.ZY5.GUILD_CHANNEL,
        section: M.jXE.GUILD_DROPDOWN_MENU
      },
      icon: c.vdY
    }),
    el = t.features.has(M.oNc.HUB),
    eo = t.id === B._,
    ec = t.id === M.STv,
    ed = (0, k.Z)(t.id),
    es = (0, p.Z)(t),
    eu = (0, h.Z)(t),
    eg = (0, O.Z)(t, true),
    eb = (0, j.Z)(t),
    {
      isFavoritesPerk: ef
    } = (0, f.z)("GuildHeaderPopout"),
    ep = (0, _.o)(t),
    {
      triggerDeadchat: eh
    } = g.Z.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: false
    }),
    {
      triggerGamingStats: ey
    } = u.F.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: false
    }),
    ej = r.useCallback(() => {
      (0, c.ZDy)(async () => {
        let {
          default: e
        } = await n.e("53961").then(n.bind(n, 402979));
        return n => (0, i.jsx)(e, Y(R({}, n), {
          guild: t
        }))
      })
    }, [t]);
  return ee || et ? (0, i.jsx)(c.v2r, {
    onSelect: q,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: a,
    "aria-label": F.intl.string(F.t.HpQykZ),
    children: (0, i.jsx)(c.sNh, {
      id: "leave-guild",
      label: F.intl.string(F.t.J2TBi4),
      icon: c.PBZ,
      action: () => {
        D.Z.leaveGuild(t.id, true)
      }
    })
  }) : eo ? (0, i.jsxs)(c.v2r, {
    onSelect: q,
    navId: "favorites-header-popout",
    variant: "fixed",
    onClose: a,
    "aria-label": F.intl.string(F.t.HpQykZ),
    children: [(0, i.jsxs)(c.kSQ, {
      children: [ef && (0, i.jsx)(c.sNh, {
        id: "add-channel",
        label: F.intl.string(F.t["6uDHk5"]),
        color: "brand",
        icon: c.oFk,
        action: () => (0, c.ZDy)(async () => {
          let {
            default: e
          } = await n.e("29608").then(n.bind(n, 610617));
          return t => (0, i.jsx)(e, R({}, t))
        })
      }), (0, i.jsx)(c.sNh, {
        id: "create-category",
        label: F.intl.string(F.t["ISN+ND"]),
        icon: c.f1I,
        action: () => (0, c.ZDy)(async () => {
          let {
            default: e
          } = await n.e("33356").then(n.bind(n, 477782));
          return t => (0, i.jsx)(e, R({}, t))
        })
      })]
    }), (0, i.jsx)(c.kSQ, {
      children: (0, i.jsx)(c.S89, {
        id: "hide-muted-channels",
        label: F.intl.string(F.t.UwOLJC),
        checked: W,
        action: () => d.Z.toggleCollapseGuild(t.id)
      })
    })]
  }) : el ? (0, i.jsxs)(c.v2r, {
    onSelect: q,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: a,
    "aria-label": F.intl.string(F.t.HpQykZ),
    children: [(0, i.jsxs)(c.kSQ, {
      children: [J ? (0, i.jsx)(c.sNh, {
        id: "settings",
        label: F.intl.string(F.t["154/bG"]),
        icon: ep ? c.Ncx : c.ewm,
        action: () => {
          D.Z.open(t.id, (0, w.r)())
        }
      }) : null, er, (0, i.jsx)(c.sNh, {
        id: "privacy",
        label: F.intl.string(F.t.BayiAg),
        icon: c.b7C,
        action: () => (0, c.ZDy)(async () => {
          let {
            default: e
          } = await n.e("59500").then(n.bind(n, 241420));
          return n => (0, i.jsx)(e, Y(R({}, n), {
            guild: t
          }))
        })
      }), ea]
    }), $ ? null : (0, i.jsx)(c.kSQ, {
      children: (0, i.jsx)(c.sNh, {
        id: "leave",
        label: F.intl.string(F.t.Dv8gFR),
        icon: c.PBZ,
        color: "danger",
        action: ej
      })
    })]
  }) : ec ? null : (0, i.jsxs)(c.v2r, {
    onSelect: q,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: a,
    "aria-label": F.intl.string(F.t.HpQykZ),
    children: [(0, i.jsxs)(c.kSQ, {
      children: [(0, i.jsx)(c.sNh, {
        id: "premium-subscribe",
        label: F.intl.string(F.t.VJEVbm),
        icon: c.$Eu,
        action: () => {
          (0, P.f)({
            guildId: t.id,
            location: {
              section: M.jXE.GUILD_HEADER_POPOUT
            }
          })
        }
      }), (0, S.up)(t) && (0, S.jq)(t) && (0, i.jsx)(c.sNh, {
        id: "guild-tag",
        label: F.intl.string(H.default.mf2OwM),
        icon: (0, i.jsx)(N.m0, {
          guildId: t.id,
          guildBadge: t.profile.badge,
          guildTag: t.profile.tag,
          inline: false
        }),
        action: () => (0, E.Z)(t.id)
      })]
    }), (0, i.jsxs)(c.kSQ, {
      children: [$ && V.isStaff() && eh ? (0, i.jsx)(c.sNh, {
        id: "create-deadchat",
        label: "Deadchat Ping",
        icon: c.eQA,
        action: () => {
          (0, s.j8)(t.id, M.uaV.GUILD_DEADCHAT_REVIVE_PROMPT)
        }
      }) : null, $ && V.isStaff() && ey ? (0, i.jsx)(c.sNh, {
        id: "create-gaming-ping",
        label: "Gaming Stats Ping",
        icon: c.eQA,
        action: () => {
          (0, s.j8)(t.id, M.uaV.GUILD_GAMING_STATS_PROMPT)
        }
      }) : null, er, J ? (0, i.jsx)(c.sNh, {
        id: "settings",
        label: F.intl.string(F.t["154/bG"]),
        icon: ep ? c.Ncx : c.ewm,
        action: () => {
          D.Z.open(t.id, (0, w.r)())
        }
      }) : null, z ? (0, i.jsx)(c.sNh, {
        id: "insights",
        label: F.intl.string(F.t["0wWfUF"]),
        icon: c.IeX,
        action: () => D.Z.open(t.id, M.pNK.ANALYTICS)
      }) : null, X ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.sNh, {
          id: "create-channel",
          label: F.intl.string(F.t["fUYU+v"]),
          icon: c.oFk,
          action: () => (0, c.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("45094"), n.e("67133")]).then(n.bind(n, 218613));
            return n => (0, i.jsx)(e, Y(R({}, n), {
              channelType: M.d4z.GUILD_TEXT,
              guildId: t.id
            }))
          })
        }), (0, i.jsx)(c.sNh, {
          id: "create-category",
          label: F.intl.string(F.t["ISN+ND"]),
          icon: c.f1I,
          action: () => (0, c.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("45094"), n.e("67133")]).then(n.bind(n, 218613));
            return n => (0, i.jsx)(e, Y(R({}, n), {
              channelType: M.d4z.GUILD_CATEGORY,
              guildId: t.id
            }))
          })
        })]
      }) : null, en, es, eu, ei, eb]
    }), (0, i.jsxs)(c.kSQ, {
      children: [ed, (0, i.jsx)(c.sNh, {
        id: "notifications",
        label: (0, i.jsx)("div", {
          className: Q.newBadgeRow,
          children: F.intl.string(F.t.h850Sk)
        }),
        icon: c.Dkj,
        action: () => (0, c.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("15076"), n.e("79692")]).then(n.bind(n, 907941));
          return n => (0, i.jsx)(e, Y(R({}, n), {
            guildId: t.id
          }))
        })
      }), (0, i.jsx)(c.sNh, {
        id: "privacy",
        label: F.intl.string(F.t.BayiAg),
        icon: c.b7C,
        action: () => (0, c.ZDy)(async () => {
          let {
            default: e
          } = await n.e("59500").then(n.bind(n, 241420));
          return n => (0, i.jsx)(e, Y(R({}, n), {
            guild: t
          }))
        })
      })]
    }), (0, i.jsxs)(c.kSQ, {
      children: [ea, (0, i.jsx)(c.S89, {
        id: "hide-muted-channels",
        label: F.intl.string(F.t.UwOLJC),
        checked: W,
        action: () => d.Z.toggleCollapseGuild(t.id)
      })]
    }), (0, i.jsxs)(c.kSQ, {
      children: [eg, K && t.features.has(M.oNc.COMMUNITY) ? (0, i.jsx)(c.sNh, {
        id: "report-raid",
        label: F.intl.string(F.t.cswId3),
        icon: c.b7C,
        color: "danger",
        action: () => (0, m.J)(t.id)
      }) : null, $ ? null : (0, i.jsx)(c.sNh, {
        id: "leave",
        label: F.intl.string(F.t.J2TBi4),
        icon: c.PBZ,
        color: "danger",
        action: ej
      })]
    })]
  })
})