/** Chunk was on 19418 **/
/** chunk id: 222785, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => B
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  a = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk686449 = require("./686449.js"),
  Chunk819744 = require("./819744.js"),
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
  Chunk583970 = require("./583970.js");

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

function J(e, t) {
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
let B = Chunk64700.memo(function(e) {
  let {
    guild: t,
    onClose: l,
    onSelect: B
  } = e, W = (0, o.bG)([L.default], () => L.default.getCurrentUser());
  a()(null != W, "GuildHeaderPopout: user cannot be undefined"), r.useEffect(() => {
    U.default.track(k.HAw.GUILD_DROPDOWN_MENU_VIEWED, {
      guild_id: t.id
    })
  });
  let X = (0, o.bG)([C.Ay], () => C.Ay.isGuildCollapsed(t.id), [t.id]),
    {
      canAccessSettings: Y,
      canManageChannels: Q,
      showGuildAnalytics: q
    } = (0, o.cf)([T.A], () => ({
      canAccessSettings: T.A.canAccessGuildSettings(t),
      canManageChannels: T.A.can(k.xBc.MANAGE_CHANNELS, t),
      showGuildAnalytics: T.A.can(k.xBc.VIEW_GUILD_ANALYTICS, t) && t.features.has(k.GuildFeatures.COMMUNITY)
    }), [t]),
    K = (0, m.ic)(t),
    Z = (0, G.bM)(t, W),
    $ = (0, o.bG)([_.A], () => _.A.isLurking(t.id), [t.id]),
    z = (0, o.bG)([N.Ay], () => N.Ay.isCurrentUserGuest(t.id)),
    ee = (0, D.A)(t.id, true),
    et = (0, b.Ay)(t),
    en = (0, h.A)({
      source: k.PE1.GUILD_HEADER,
      guild: t
    }),
    ei = (0, O.A)({
      guildId: t.id,
      userId: W.id,
      analyticsLocation: {
        page: k.liQ.GUILD_CHANNEL,
        section: k.JJy.GUILD_DROPDOWN_MENU
      },
      icon: c.R2l
    }),
    er = t.features.has(k.GuildFeatures.HUB),
    el = t.id === R.V,
    ea = t.id === k.gNP,
    eo = (0, M.A)(t.id),
    ec = (0, p.A)(t),
    ed = (0, f.A)(t),
    es = (0, j.A)(t, true),
    eu = (0, y.A)(t),
    {
      isFavoritesPerk: eb
    } = (0, g.l)("GuildHeaderPopout"),
    eg = (0, S.A)(t),
    {
      triggerDeadchat: ep
    } = u.c.useExperiment({
      guildId: t.id,
      location: "guild header"
    }, {
      autoTrackExposure: false
    }),
    ef = r.useCallback(() => {
      (0, c.mMO)(async () => {
        let {
          default: e
        } = await n.e("53485").then(n.bind(n, 20508));
        return n => (0, i.jsx)(e, J(V({}, n), {
          guild: t
        }))
      })
    }, [t]);
  return $ || z ? (0, i.jsx)(c.W1t, {
    "data-menu-mixed": true,
    onSelect: B,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": H.intl.string(H.t.HpQykc),
    children: (0, i.jsx)(c.Drp, {
      id: "leave-guild",
      label: H.intl.string(H.t.J2TBi3),
      icon: c.oLl,
      action: () => {
        P.A.leaveGuild(t.id, true)
      }
    })
  }) : el ? (0, i.jsxs)(c.W1t, {
    "data-menu-mixed": true,
    onSelect: B,
    navId: "favorites-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": H.intl.string(H.t.HpQykc),
    children: [(0, i.jsxs)(c.rXV, {
      children: [eb && (0, i.jsx)(c.Drp, {
        id: "add-channel",
        label: H.intl.string(H.t["6uDHk6"]),
        color: "brand",
        icon: c.U1e,
        action: () => (0, c.mMO)(async () => {
          let {
            default: e
          } = await n.e("15077").then(n.bind(n, 889186));
          return t => (0, i.jsx)(e, V({}, t))
        })
      }), (0, i.jsx)(c.Drp, {
        id: "create-category",
        label: H.intl.string(H.t["ISN+NM"]),
        icon: c.YPf,
        action: () => (0, c.mMO)(async () => {
          let {
            default: e
          } = await n.e("5639").then(n.bind(n, 395199));
          return t => (0, i.jsx)(e, V({}, t))
        })
      })]
    }), (0, i.jsx)(c.rXV, {
      children: (0, i.jsx)(c.sLh, {
        id: "hide-muted-channels",
        label: H.intl.string(H.t.UwOLJO),
        checked: X,
        action: () => d.A.toggleCollapseGuild(t.id)
      })
    })]
  }) : er ? (0, i.jsxs)(c.W1t, {
    "data-menu-mixed": true,
    onSelect: B,
    navId: "guild-header-popout",
    variant: "fixed",
    onClose: l,
    "aria-label": H.intl.string(H.t.HpQykc),
    children: [(0, i.jsxs)(c.rXV, {
      children: [Y ? (0, i.jsx)(c.Drp, {
        id: "settings",
        label: H.intl.string(H.t["154/bL"]),
        icon: eg ? c.vJI : c.Zes,
        action: () => {
          P.A.open(t.id, (0, v.x)())
        }
      }) : null, en, (0, i.jsx)(c.Drp, {
        id: "privacy",
        label: H.intl.string(H.t.BayiAo),
        icon: c.lmn,
        action: () => (0, c.mMO)(async () => {
          let {
            default: e
          } = await n.e("62026").then(n.bind(n, 585265));
          return n => (0, i.jsx)(e, J(V({}, n), {
            guild: t
          }))
        })
      }), ei]
    }), Z ? null : (0, i.jsx)(c.rXV, {
      children: (0, i.jsx)(c.Drp, {
        id: "leave",
        label: H.intl.string(H.t.Dv8gFT),
        icon: c.oLl,
        color: "danger",
        action: ef
      })
    })]
  }) : ea ? null : (0, i.jsxs)(c.W1t, {
    "data-menu-mixed": true,
    onSelect: B,
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
          (0, I.K)({
            guildId: t.id,
            location: {
              section: k.JJy.GUILD_HEADER_POPOUT
            }
          })
        }
      }), (0, x.Rg)(t) && (0, x.q0)(t) && (0, i.jsx)(c.Drp, {
        id: "guild-tag",
        label: H.intl.string(F.default.mf2OwH),
        icon: (0, i.jsx)(E.o9, {
          guildId: t.id,
          guildBadge: t.profile.badge,
          guildTag: t.profile.tag,
          inline: false
        }),
        action: () => (0, w.A)(t.id)
      })]
    }), (0, i.jsxs)(c.rXV, {
      children: [Z && W.isStaff() && ep ? (0, i.jsx)(c.Drp, {
        id: "create-deadchat",
        label: "Deadchat Ping",
        icon: c.MBj,
        action: () => {
          (0, s.g)(t.id, k.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT)
        }
      }) : null, en, Y ? (0, i.jsx)(c.Drp, {
        id: "settings",
        label: H.intl.string(H.t["154/bL"]),
        icon: eg ? c.vJI : c.Zes,
        action: () => {
          P.A.open(t.id, (0, v.x)())
        }
      }) : null, q ? (0, i.jsx)(c.Drp, {
        id: "insights",
        label: H.intl.string(H.t["0wWfUG"]),
        icon: c.Uy2,
        action: () => P.A.open(t.id, k.BEX.ANALYTICS)
      }) : null, Q ? (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.Drp, {
          id: "create-channel",
          label: H.intl.string(H.t["fUYU+j"]),
          icon: c.U1e,
          action: () => (0, c.mMO)(async () => {
            let {
              default: e
            } = await Promise.all([n.e("64233"), n.e("9743")]).then(n.bind(n, 409200));
            return n => (0, i.jsx)(e, J(V({}, n), {
              channelType: k.rbe.GUILD_TEXT,
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
            return n => (0, i.jsx)(e, J(V({}, n), {
              channelType: k.rbe.GUILD_CATEGORY,
              guildId: t.id
            }))
          })
        })]
      }) : null, ee, ec, ed, et, eu]
    }), (0, i.jsxs)(c.rXV, {
      children: [eo, (0, i.jsx)(c.Drp, {
        id: "notifications",
        label: H.intl.string(H.t.h850Ss),
        icon: c.XFE,
        action: () => (0, c.mMO)(async () => {
          let {
            default: e
          } = await Promise.all([n.e("64992"), n.e("67208")]).then(n.bind(n, 401539));
          return n => (0, i.jsx)(e, J(V({}, n), {
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
          return n => (0, i.jsx)(e, J(V({}, n), {
            guild: t
          }))
        })
      })]
    }), (0, i.jsxs)(c.rXV, {
      children: [ei, (0, i.jsx)(c.sLh, {
        id: "hide-muted-channels",
        label: H.intl.string(H.t.UwOLJO),
        checked: X,
        action: () => d.A.toggleCollapseGuild(t.id)
      })]
    }), (0, i.jsxs)(c.rXV, {
      children: [es, K && t.features.has(k.GuildFeatures.COMMUNITY) ? (0, i.jsx)(c.Drp, {
        id: "report-raid",
        label: H.intl.string(H.t.cswId3),
        icon: c.lmn,
        color: "danger",
        action: () => (0, A.M)(t.id)
      }) : null, Z ? null : (0, i.jsx)(c.Drp, {
        id: "leave",
        label: H.intl.string(H.t.J2TBi3),
        icon: c.oLl,
        color: "danger",
        action: ef
      })]
    })]
  })
})