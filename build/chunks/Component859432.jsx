/** Chunk was on 45141 **/
/** chunk id: 859432, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => V
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk899926 = require("./899926.js"),
  Chunk617575 = require("./617575.js");

function q(e) {
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

function z(e, t) {
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
let V = Chunk647438.memo(function(e) {
  let {
    guild: t,
    onClose: l,
    onSelect: V
  } = e, J = (0, o.e7)([L.default], () => L.default.getCurrentUser());
  a()(null != J, "GuildHeaderPopout: user cannot be undefined"), r.useEffect(() => {
    R.default.track(F.rMx.GUILD_DROPDOWN_MENU_VIEWED, {
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
      canManageChannels: M.Z.can(F.Plq.MANAGE_CHANNELS, t),
      showGuildAnalytics: M.Z.can(F.Plq.VIEW_GUILD_ANALYTICS, t) && t.features.has(F.oNc.COMMUNITY)
    }), [t]),
    et = (0, Z.N8)(t),
    en = (0, A.eM)(t, J),
    ei = (0, o.e7)([G.Z], () => G.Z.isLurking(t.id), [t.id]),
    er = (0, o.e7)([C.ZP], () => C.ZP.isCurrentUserGuest(t.id)),
    el = (0, S.Z)(t.id, true),
    ea = (0, f.ZP)(t),
    eo = (0, P.Z)({
      source: F.t4x.GUILD_HEADER,
      guild: t
    }),
    ed = (0, O.Z)({
      guildId: t.id,
      userId: J.id,
      analyticsLocation: {
        page: F.ZY5.GUILD_CHANNEL,
        section: F.jXE.GUILD_DROPDOWN_MENU
      },
      icon: c.vdY
    }),
    ec = t.features.has(F.oNc.HUB),
    es = t.id === H._,
    eu = t.id === F.STv,
    eb = (0, U.Z)(t.id),
    eg = (0, y.Z)(t),
    ef = (0, j.Z)(t),
    eh = (0, v.Z)(t, true),
    ep = (0, x.Z)(t),
    {
      isFavoritesPerk: ey
    } = (0, p.z)("GuildHeaderPopout"),
    ej = (0, k.o)(t),
    {
      triggerDeadchat: eO
    } = g.Z.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: false
    }),
    {
      triggerGamingStats: ex
    } = b.F.useExperiment({
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
    [eP] = (0, h.cv)([d.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE]),
    em = r.useCallback(() => {
      (0, c.ZDy)(async () => {
        let {
          default: e
        } = await n.e("53961").then(n.bind(n, 402979));
        return n => (0, i.jsx)(e, z(q({}, n), {
          guild: t
        }))
      })
    }, [t]),
    eZ = ev && eP === d.z.PREMIUM_CUSTOM_NOTIFICATION_SOUNDS_GUILD_BADGE;
  return ei || er ? (0, i.jsx)(c.v2r, {
    onSelect: V,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": Q.intl.string(Q.t.HpQykZ),
    children: (0, i.jsx)(c.sNh, {
      id: "leave-guild",
      label: Q.intl.string(Q.t.J2TBi4),
      icon: c.PBZ,
      action: () => {
        D.Z.leaveGuild(t.id, true)
      }
    })
  }) : es ? (0, i.jsxs)(c.v2r, {
    onSelect: V,
    navId: "favorites-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": Q.intl.string(Q.t.HpQykZ),
    children: [(0, i.jsxs)(c.kSQ, {
      children: [ey && (0, i.jsx)(c.sNh, {
        id: "add-channel",
        label: Q.intl.string(Q.t["6uDHk5"]),
        color: "brand",
        icon: c.oFk,
        action: () => (0, c.ZDy)(async () => {
          let {
            default: e
          } = await n.e("29608").then(n.bind(n, 178125));
          return t => (0, i.jsx)(e, q({}, t))
        })
      }), (0, i.jsx)(c.sNh, {
        id: "create-category",
        label: Q.intl.string(Q.t["ISN+ND"]),
        icon: c.f1I,
        action: () => (0, c.ZDy)(async () => {
          let {
            default: e
          } = await n.e("33356").then(n.bind(n, 477782));
          return t => (0, i.jsx)(e, q({}, t))
        })
      })]
    }), (0, i.jsx)(c.kSQ, {
      children: (0, i.jsx)(c.S89, {
        id: "hide-muted-channels",
        label: Q.intl.string(Q.t.UwOLJC),
        checked: X,
        action: () => s.Z.toggleCollapseGuild(t.id)
      })
    })]
  }) : ec ? (0, i.jsxs)(c.v2r, {
    onSelect: V,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": Q.intl.string(Q.t.HpQykZ),
    children: [(0, i.jsxs)(c.kSQ, {
      children: [K ? (0, i.jsx)(c.sNh, {
        id: "settings",
        label: Q.intl.string(Q.t["154/bG"]),
        icon: ej ? c.Ncx : c.ewm,
        action: () => {
          D.Z.open(t.id, (0, I.r)())
        }
      }) : null, eo, (0, i.jsx)(c.sNh, {
        id: "privacy",
        label: Q.intl.string(Q.t.BayiAg),
        icon: c.b7C,
        action: () => (0, c.ZDy)(async () => {
          let {
            default: e
          } = await n.e("59500").then(n.bind(n, 241420));
          return n => (0, i.jsx)(e, z(q({}, n), {
            guild: t
          }))
        })
      }), ed]
    }), en ? null : (0, i.jsx)(c.kSQ, {
      children: (0, i.jsx)(c.sNh, {
        id: "leave",
        label: Q.intl.string(Q.t.Dv8gFR),
        icon: c.PBZ,
        color: "danger",
        action: em
      })
    })]
  }) : eu ? null : (0, i.jsxs)(c.v2r, {
    onSelect: V,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": Q.intl.string(Q.t.HpQykZ),
    children: [(0, i.jsxs)(c.kSQ, {
      children: [(0, i.jsx)(c.sNh, {
        id: "premium-subscribe",
        label: Q.intl.string(Q.t.VJEVbm),
        icon: c.$Eu,
        action: () => {
          (0, w.f)({
            guildId: t.id,
            location: {
              section: F.jXE.GUILD_HEADER_POPOUT
            }
          })
        }
      }), (0, N.up)(t) && (0, N.jq)(t) && (0, i.jsx)(c.sNh, {
        id: "guild-tag",
        label: Q.intl.string(Y.default.mf2OwM),
        icon: (0, i.jsx)(E.m0, {
          guildId: t.id,
          guildBadge: t.profile.badge,
          guildTag: t.profile.tag,
          inline: false
        }),
        action: () => (0, _.Z)(t.id)
      })]
    }), (0, i.jsxs)(c.kSQ, {
      children: [en && J.isStaff() && eO ? (0, i.jsx)(c.sNh, {
        id: "create-deadchat",
        label: "Deadchat Ping",
        icon: c.eQA,
        action: () => {
          (0, u.j8)(t.id, F.uaV.GUILD_DEADCHAT_REVIVE_PROMPT)
        }
      }) : null, en && J.isStaff() && ex ? (0, i.jsx)(c.sNh, {
        id: "create-gaming-ping",
        label: "Gaming Stats Ping",
        icon: c.eQA,
        action: () => {
          (0, u.j8)(t.id, F.uaV.GUILD_GAMING_STATS_PROMPT)
        }
      }) : null, eo, K ? (0, i.jsx)(c.sNh, {
        id: "settings",
        label: Q.intl.string(Q.t["154/bG"]),
        icon: ej ? c.Ncx : c.ewm,
        action: () => {
          D.Z.open(t.id, (0, I.r)())
        }
      }) : null, ee ? (0, i.jsx)(c.sNh, {
        id: "insights",
        label: Q.intl.string(Q.t["0wWfUF"]),
        icon: c.IeX,
        action: () => D.Z.open(t.id, F.pNK.ANALYTICS)
      }) : null, $ ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.sNh, {
          id: "create-channel",
          label: Q.intl.string(Q.t["fUYU+v"]),
          icon: c.oFk,
          action: () => (0, c.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("45094"), n.e("67133")]).then(n.bind(n, 218613));
            return n => (0, i.jsx)(e, z(q({}, n), {
              channelType: F.d4z.GUILD_TEXT,
              guildId: t.id
            }))
          })
        }), (0, i.jsx)(c.sNh, {
          id: "create-category",
          label: Q.intl.string(Q.t["ISN+ND"]),
          icon: c.f1I,
          action: () => (0, c.ZDy)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("45094"), n.e("67133")]).then(n.bind(n, 218613));
            return n => (0, i.jsx)(e, z(q({}, n), {
              channelType: F.d4z.GUILD_CATEGORY,
              guildId: t.id
            }))
          })
        })]
      }) : null, el, eg, ef, ea, ep]
    }), (0, i.jsxs)(c.kSQ, {
      children: [eb, (0, i.jsx)(c.sNh, {
        id: "notifications",
        label: (0, i.jsxs)("div", {
          className: W.newBadgeRow,
          children: [Q.intl.string(Q.t.h850Sk), eZ && (0, i.jsx)(c.IGR, {
            className: W.newBadge,
            text: Q.intl.string(Q.t.y2b7CA)
          })]
        }),
        icon: eZ ? true : c.Dkj,
        action: () => (0, c.ZDy)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("15076"), n.e("39672")]).then(n.bind(n, 907941));
          return n => (0, i.jsx)(e, z(q({}, n), {
            guildId: t.id
          }))
        })
      }), (0, i.jsx)(c.sNh, {
        id: "privacy",
        label: Q.intl.string(Q.t.BayiAg),
        icon: c.b7C,
        action: () => (0, c.ZDy)(async () => {
          let {
            default: e
          } = await n.e("59500").then(n.bind(n, 241420));
          return n => (0, i.jsx)(e, z(q({}, n), {
            guild: t
          }))
        })
      })]
    }), (0, i.jsxs)(c.kSQ, {
      children: [ed, (0, i.jsx)(c.S89, {
        id: "hide-muted-channels",
        label: Q.intl.string(Q.t.UwOLJC),
        checked: X,
        action: () => s.Z.toggleCollapseGuild(t.id)
      })]
    }), (0, i.jsxs)(c.kSQ, {
      children: [eh, et && t.features.has(F.oNc.COMMUNITY) ? (0, i.jsx)(c.sNh, {
        id: "report-raid",
        label: Q.intl.string(Q.t.cswId3),
        icon: c.b7C,
        color: "danger",
        action: () => (0, m.J)(t.id)
      }) : null, en ? null : (0, i.jsx)(c.sNh, {
        id: "leave",
        label: Q.intl.string(Q.t.J2TBi4),
        icon: c.PBZ,
        color: "danger",
        action: em
      })]
    })]
  })
})