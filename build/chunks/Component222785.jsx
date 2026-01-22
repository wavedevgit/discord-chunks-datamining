/** Chunk was on 97357 **/
/** chunk id: 222785, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => X
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686449 = require("./686449.js"),
  Chunk819744 = require("./819744.js"),
  Chunk14197 = require("./14197.js"),
  Chunk149305 = require("./149305.js"),
  Chunk293260 = require("./293260.jsx"),
  Chunk616075 = require("./616075.js"),
  Chunk226958 = require("./226958.jsx"),
  Chunk82770 = require("./82770.jsx"),
  Chunk346247 = require("./346247.jsx"),
  Chunk434352 = require("./434352.jsx"),
  Chunk664967 = require("./664967.jsx"),
  Chunk531335 = require("./531335.jsx"),
  Chunk957316 = require("./957316.jsx"),
  Chunk974103 = require("./974103.js"),
  Chunk509536 = require("./509536.jsx"),
  Chunk359047 = require("./359047.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk595818 = require("./595818.js"),
  Chunk685073 = require("./685073.js"),
  Chunk534400 = require("./534400.jsx"),
  Chunk647534 = require("./647534.jsx"),
  Chunk857071 = require("./857071.js"),
  Chunk36942 = require("./36942.jsx"),
  Chunk149280 = require("./149280.js"),
  Chunk260509 = require("./260509.js"),
  Chunk696451 = require("./696451.js"),
  Chunk576705 = require("./576705.js"),
  Chunk543465 = require("./543465.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk349828 = require("./349828.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk583970 = require("./583970.js"),
  Chunk467249 = require("./467249.js");

function B(e) {
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
let X = Chunk64700.memo(function(e) {
  let {
    guild: t,
    onClose: l,
    onSelect: X
  } = e, Y = (0, o.bG)([U.default], () => U.default.getCurrentUser());
  a()(null != Y, "GuildHeaderPopout: user cannot be undefined"), r.useEffect(() => {
    k.default.track(R.HAw.GUILD_DROPDOWN_MENU_VIEWED, {
      guild_id: t.id
    })
  });
  let Q = (0, o.bG)([L.Ay], () => L.Ay.isGuildCollapsed(t.id), [t.id]),
    {
      canAccessSettings: q,
      canManageChannels: K,
      showGuildAnalytics: Z
    } = (0, o.cf)([C.A], () => ({
      canAccessSettings: C.A.canAccessGuildSettings(t),
      canManageChannels: C.A.can(R.xBc.MANAGE_CHANNELS, t),
      showGuildAnalytics: C.A.can(R.xBc.VIEW_GUILD_ANALYTICS, t) && t.features.has(R.GuildFeatures.COMMUNITY)
    }), [t]),
    $ = (0, I.ic)(t),
    z = (0, N.bM)(t, Y),
    ee = (0, o.bG)([G.A], () => G.A.isLurking(t.id), [t.id]),
    et = (0, o.bG)([T.Ay], () => T.Ay.isCurrentUserGuest(t.id)),
    en = (0, P.A)(t.id, true),
    ei = (0, b.Ay)(t),
    er = (0, m.A)({
      source: R.PE1.GUILD_HEADER,
      guild: t
    }),
    el = (0, y.A)({
      guildId: t.id,
      userId: Y.id,
      analyticsLocation: {
        page: R.liQ.GUILD_CHANNEL,
        section: R.JJy.GUILD_DROPDOWN_MENU
      },
      icon: c.R2l
    }),
    ea = t.features.has(R.GuildFeatures.HUB),
    eo = t.id === F.V,
    ec = t.id === R.gNP,
    ed = (0, S.A)(t.id),
    es = (0, f.A)(t),
    eu = (0, O.A)(t),
    eg = (0, h.A)(t, true),
    eb = (0, j.A)(t),
    {
      isFavoritesPerk: ep
    } = (0, p.l)("GuildHeaderPopout"),
    ef = (0, M.A)(t),
    {
      triggerDeadchat: eO
    } = g.c.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: false
    }),
    {
      triggerGamingStats: ey
    } = u.W.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: false
    }),
    ej = r.useCallback(() => {
      (0, c.mMO)(async () => {
        let {
          default: e
        } = await n.e("53485").then(n.bind(n, 20508));
        return n => (0, i.jsx)(e, W(B({}, n), {
          guild: t
        }))
      })
    }, [t]);
  return ee || et ? (0, i.jsx)(c.W1t, {
    onSelect: X,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": H.intl.string(H.t.HpQykc),
    children: (0, i.jsx)(c.Drp, {
      id: "leave-guild",
      label: H.intl.string(H.t.J2TBi3),
      icon: c.oLl,
      action: () => {
        v.A.leaveGuild(t.id, true)
      }
    })
  }) : eo ? (0, i.jsxs)(c.W1t, {
    onSelect: X,
    navId: "favorites-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": H.intl.string(H.t.HpQykc),
    children: [(0, i.jsxs)(c.rXV, {
      children: [ep && (0, i.jsx)(c.Drp, {
        id: "add-channel",
        label: H.intl.string(H.t["6uDHk6"]),
        color: "brand",
        icon: c.U1e,
        action: () => (0, c.mMO)(async () => {
          let {
            default: e
          } = await n.e("15077").then(n.bind(n, 889186));
          return t => (0, i.jsx)(e, B({}, t))
        })
      }), (0, i.jsx)(c.Drp, {
        id: "create-category",
        label: H.intl.string(H.t["ISN+NM"]),
        icon: c.YPf,
        action: () => (0, c.mMO)(async () => {
          let {
            default: e
          } = await n.e("5639").then(n.bind(n, 395199));
          return t => (0, i.jsx)(e, B({}, t))
        })
      })]
    }), (0, i.jsx)(c.rXV, {
      children: (0, i.jsx)(c.sLh, {
        id: "hide-muted-channels",
        label: H.intl.string(H.t.UwOLJO),
        checked: Q,
        action: () => d.A.toggleCollapseGuild(t.id)
      })
    })]
  }) : ea ? (0, i.jsxs)(c.W1t, {
    onSelect: X,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": H.intl.string(H.t.HpQykc),
    children: [(0, i.jsxs)(c.rXV, {
      children: [q ? (0, i.jsx)(c.Drp, {
        id: "settings",
        label: H.intl.string(H.t["154/bL"]),
        icon: ef ? c.vJI : c.Zes,
        action: () => {
          v.A.open(t.id, (0, D.x)())
        }
      }) : null, er, (0, i.jsx)(c.Drp, {
        id: "privacy",
        label: H.intl.string(H.t.BayiAo),
        icon: c.lmn,
        action: () => (0, c.mMO)(async () => {
          let {
            default: e
          } = await n.e("62026").then(n.bind(n, 585265));
          return n => (0, i.jsx)(e, W(B({}, n), {
            guild: t
          }))
        })
      }), el]
    }), z ? null : (0, i.jsx)(c.rXV, {
      children: (0, i.jsx)(c.Drp, {
        id: "leave",
        label: H.intl.string(H.t.Dv8gFT),
        icon: c.oLl,
        color: "danger",
        action: ej
      })
    })]
  }) : ec ? null : (0, i.jsxs)(c.W1t, {
    onSelect: X,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": H.intl.string(H.t.HpQykc),
    children: [(0, i.jsxs)(c.rXV, {
      children: [(0, i.jsx)(c.Drp, {
        id: "premium-subscribe",
        label: H.intl.string(H.t.VJEVbu),
        icon: c._Jp,
        action: () => {
          (0, x.K)({
            guildId: t.id,
            location: {
              section: R.JJy.GUILD_HEADER_POPOUT
            }
          })
        }
      }), (0, _.Rg)(t) && (0, _.q0)(t) && (0, i.jsx)(c.Drp, {
        id: "guild-tag",
        label: H.intl.string(J.default.mf2OwH),
        icon: (0, i.jsx)(E.o9, {
          guildId: t.id,
          guildBadge: t.profile.badge,
          guildTag: t.profile.tag,
          inline: false
        }),
        action: () => (0, w.A)(t.id)
      })]
    }), (0, i.jsxs)(c.rXV, {
      children: [z && Y.isStaff() && eO ? (0, i.jsx)(c.Drp, {
        id: "create-deadchat",
        label: "Deadchat Ping",
        icon: c.MBj,
        action: () => {
          (0, s.g)(t.id, R.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT)
        }
      }) : null, z && Y.isStaff() && ey ? (0, i.jsx)(c.Drp, {
        id: "create-gaming-ping",
        label: "Gaming Stats Ping",
        icon: c.MBj,
        action: () => {
          (0, s.g)(t.id, R.lAJ.GUILD_GAMING_STATS_PROMPT)
        }
      }) : null, er, q ? (0, i.jsx)(c.Drp, {
        id: "settings",
        label: H.intl.string(H.t["154/bL"]),
        icon: ef ? c.vJI : c.Zes,
        action: () => {
          v.A.open(t.id, (0, D.x)())
        }
      }) : null, Z ? (0, i.jsx)(c.Drp, {
        id: "insights",
        label: H.intl.string(H.t["0wWfUG"]),
        icon: c.Uy2,
        action: () => v.A.open(t.id, R.BEX.ANALYTICS)
      }) : null, K ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.Drp, {
          id: "create-channel",
          label: H.intl.string(H.t["fUYU+j"]),
          icon: c.U1e,
          action: () => (0, c.mMO)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("64233"), n.e("9743")]).then(n.bind(n, 409200));
            return n => (0, i.jsx)(e, W(B({}, n), {
              channelType: R.rbe.GUILD_TEXT,
              guildId: t.id
            }))
          })
        }), (0, i.jsx)(c.Drp, {
          id: "create-category",
          label: H.intl.string(H.t["ISN+NM"]),
          icon: c.YPf,
          action: () => (0, c.mMO)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("64233"), n.e("9743")]).then(n.bind(n, 409200));
            return n => (0, i.jsx)(e, W(B({}, n), {
              channelType: R.rbe.GUILD_CATEGORY,
              guildId: t.id
            }))
          })
        })]
      }) : null, en, es, eu, ei, eb]
    }), (0, i.jsxs)(c.rXV, {
      children: [ed, (0, i.jsx)(c.Drp, {
        id: "notifications",
        label: (0, i.jsx)("div", {
          className: V.I,
          children: H.intl.string(H.t.h850Ss)
        }),
        icon: c.XFE,
        action: () => (0, c.mMO)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("64992"), n.e("67208")]).then(n.bind(n, 401539));
          return n => (0, i.jsx)(e, W(B({}, n), {
            guildId: t.id
          }))
        })
      }), (0, i.jsx)(c.Drp, {
        id: "privacy",
        label: H.intl.string(H.t.BayiAo),
        icon: c.lmn,
        action: () => (0, c.mMO)(async () => {
          let {
            default: e
          } = await n.e("62026").then(n.bind(n, 585265));
          return n => (0, i.jsx)(e, W(B({}, n), {
            guild: t
          }))
        })
      })]
    }), (0, i.jsxs)(c.rXV, {
      children: [el, (0, i.jsx)(c.sLh, {
        id: "hide-muted-channels",
        label: H.intl.string(H.t.UwOLJO),
        checked: Q,
        action: () => d.A.toggleCollapseGuild(t.id)
      })]
    }), (0, i.jsxs)(c.rXV, {
      children: [eg, $ && t.features.has(R.GuildFeatures.COMMUNITY) ? (0, i.jsx)(c.Drp, {
        id: "report-raid",
        label: H.intl.string(H.t.cswId3),
        icon: c.lmn,
        color: "danger",
        action: () => (0, A.M)(t.id)
      }) : null, z ? null : (0, i.jsx)(c.Drp, {
        id: "leave",
        label: H.intl.string(H.t.J2TBi3),
        icon: c.oLl,
        color: "danger",
        action: ej
      })]
    })]
  })
})