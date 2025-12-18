/** Chunk was on 15076 **/
/** chunk id: 907941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => $
}), require("./388685.js"), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk311047 = require("./311047.jsx"),
  Chunk668339 = require("./668339.jsx"),
  Chunk199849 = require("./199849.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk798140 = require("./798140.js"),
  Chunk740504 = require("./740504.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk528011 = require("./528011.js"),
  Chunk487419 = require("./487419.js"),
  Chunk675478 = require("./675478.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk324067 = require("./324067.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk699516 = require("./699516.js"),
  Chunk9156 = require("./9156.js"),
  Chunk594174 = require("./594174.js"),
  Chunk823379 = require("./823379.js"),
  Chunk63063 = require("./63063.js"),
  Chunk621600 = require("./621600.js"),
  Chunk423589 = require("./423589.js"),
  Chunk444899 = require("./444899.jsx"),
  Chunk74888 = require("./74888.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk969943 = require("./969943.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk99079 = require("./99079.js");

function Y() {
  return (Y = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
    }
    return e
  }).apply(this, arguments)
}

function F(e) {
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

function W(e) {
  let {
    label: t,
    channelId: n
  } = e, [s, l] = (0, c.Wu)([Z.Z], () => {
    let e = Z.Z.getChannel(n);
    return [e, (null == e ? true : e.parent_id) != null ? Z.Z.getChannel(e.parent_id) : null]
  });
  return null == s ? t : (0, i.jsx)(h.Z, {
    icon: (0, N.KS)(s),
    title: t,
    subtitle: null == l ? true : l.name
  })
}

function J(e) {
  var t;
  let {
    muteConfig: n,
    muted: s,
    guild: l,
    handleCheckboxChange: r
  } = e, a = null != (t = null == n ? true : n.selected_time_window) ? t : D.Oe.ALWAYS;
  return null == l ? null : (0, i.jsxs)("div", {
    className: H.largeSpacing,
    children: [(0, i.jsxs)(p.Kqy, {
      gap: 20,
      children: [(0, i.jsx)(p.rsf, {
        label: z.intl.formatToPlainString(z.t["J+7D9E"], {
          name: l.name
        }),
        description: z.intl.string(z.t["8wbTQ6"]),
        checked: s,
        onChange: e => r("muted", e, G.UE.muted(e))
      }), s ? (0, i.jsx)(m.y6, {
        label: z.intl.string(z.t.Ztu2Yo),
        options: (0, k.W9)(),
        value: a,
        onChange: e => {
          let t = e > 0 ? o()().add(e, "second").toISOString() : null;
          j.Z.updateGuildNotificationSettings(l.id, {
            muted: true,
            mute_config: {
              selected_time_window: e,
              end_time: t
            }
          }, G.ZB.Muted)
        }
      }) : null]
    }), (0, i.jsx)(p.izJ, {
      gap: 20
    })]
  })
}

function B(e) {
  let {
    muted: t,
    messageNotifications: n,
    memberCount: s,
    handleRadioChange: l
  } = e;
  return (0, i.jsxs)("div", {
    className: H.spacing,
    children: [(0, i.jsx)("div", {
      className: H.largeSpacing,
      children: (0, i.jsx)(p.FXm, {
        label: z.intl.string(z.t.lprV7V),
        disabled: t,
        value: n,
        onChange: e => l("message_notifications", e, G.UE.notifications(e)),
        options: [{
          name: z.intl.string(z.t["n/bTaY"]),
          value: U.bL.ALL_MESSAGES,
          desc: null != s && s >= U.qWG ? z.intl.string(z.t.Dh5p5j) : null
        }, {
          name: z.intl.format(z.t.L2hmYy, {}),
          value: U.bL.ONLY_MENTIONS
        }, {
          name: z.intl.string(z.t.CtVGyQ),
          value: U.bL.NO_MESSAGES
        }]
      })
    }), (0, i.jsx)(p.izJ, {})]
  })
}

function Q(e) {
  let {
    guildId: t
  } = e, n = (0, S.Tz)(t), s = (0, c.e7)([E.Z], () => E.Z.getGuildAlertSettings()[t]);
  if (n) return (0, i.jsxs)("div", {
    className: H.spacing,
    children: [(0, i.jsx)(p.l09, {
      className: H.largeSpacing,
      children: (0, i.jsxs)(d.gNt, {
        label: z.intl.string(z.t.D9yVAH),
        description: z.intl.string(z.t["0PhAOH"]),
        children: [(0, i.jsx)(p.rsf, {
          label: z.intl.string(z.t.u6dc5B),
          description: z.intl.string(z.t.z8Td48),
          checked: !(null == s ? true : s.disableRaidAlertNag),
          onChange: e => (0, C.PS)(t, t => {
            t.disableRaidAlertNag = !e
          }, C.fy.INFREQUENT_USER_ACTION)
        }), (0, i.jsx)(p.rsf, {
          label: z.intl.string(z.t.P8MG6q),
          description: z.intl.string(z.t.PyxXs8),
          checked: !(null == s ? true : s.disableRaidAlertPush),
          onChange: e => (0, C.PS)(t, t => {
            t.disableRaidAlertPush = !e
          }, C.fy.INFREQUENT_USER_ACTION)
        })]
      })
    }), (0, i.jsx)(p.izJ, {})]
  })
}

function V(e) {
  let {
    suppressEveryone: t,
    suppressRoles: n,
    handleCheckboxChange: s,
    notifyHighlights: l,
    muteEvents: r,
    mobilePush: a,
    muted: o,
    guildId: d
  } = e;
  return (0, i.jsxs)(p.Kqy, {
    className: H.largeSpacing,
    gap: 16,
    children: [(0, i.jsx)(p.rsf, {
      label: z.intl.format(z.t.OWiWAp, {}),
      onChange: e => s("suppress_everyone", e, G.UE.suppressEveryone(e)),
      checked: t
    }), (0, i.jsx)(p.izJ, {}), (0, i.jsx)(p.rsf, {
      label: z.intl.string(z.t["O/QdoD"]),
      onChange: e => s("suppress_roles", e, G.UE.suppressRoles(e)),
      checked: n
    }), (0, i.jsx)(p.izJ, {}), (0, i.jsxs)(p.Kqy, {
      gap: 4,
      children: [(0, i.jsx)(p.rsf, {
        label: z.intl.string(z.t.gPuteJ),
        onChange: e => {
          j.Z.updateGuildNotificationSettings(d, {
            notify_highlights: e ? U.gLR.DISABLED : U.gLR.ENABLED
          }, G.UE.highlights(!e))
        },
        checked: o || l === U.gLR.DISABLED,
        disabled: o,
        description: z.intl.string(z.t["Vw/Xn8"])
      }), (0, i.jsx)(p.Anchor, {
        href: T.Z.getArticleURL(U.BhN.HIGHLIGHTS),
        children: (0, i.jsx)(p.Text, {
          variant: "text-sm/normal",
          color: "text-link",
          children: z.intl.string(z.t.PRBn9K)
        })
      })]
    }), (0, i.jsx)(p.izJ, {}), (0, i.jsx)(p.rsf, {
      label: z.intl.string(z.t.ONG3Yz),
      checked: r,
      onChange: e => s("mute_scheduled_events", e, G.UE.mutedEvents(e))
    }), (0, i.jsx)(p.izJ, {}), (0, i.jsx)(p.rsf, {
      label: z.intl.string(z.t.h1DL66),
      checked: !o && a,
      disabled: o,
      onChange: e => s("mobile_push", e, G.UE.mobilePush(e))
    })]
  })
}

function q(e) {
  let {
    setNewChannelOverrides: t,
    newChannelOverrides: n,
    setLatestOverrideId: s,
    channels: l,
    categories: a
  } = e, o = r()(l).filter(e => {
    let {
      channel: t
    } = e;
    return t.type !== U.d4z.GUILD_CATEGORY || null != a[t.id] && a[t.id].length > 0
  }).map(e => {
    let {
      channel: t
    } = e;
    return {
      value: t.id,
      label: (0, b.F6)(t, M.default, A.Z)
    }
  }).value();
  return (0, i.jsx)("div", {
    className: H.largeSpacing,
    children: (0, i.jsx)(g.d, {
      label: z.intl.string(z.t["Z+oF8h"]),
      description: z.intl.string(z.t["2Y9ZfA"]),
      value: U.lds,
      placeholder: z.intl.string(z.t["Z+oF8h"]),
      renderOptionLabel: e => (0, i.jsx)(W, {
        label: e.label,
        channelId: e.value
      }),
      options: o,
      onChange: e => {
        if (null == e) return;
        let i = new Set(n);
        i.add(e), t(i), s(e)
      }
    })
  })
}

function K(e) {
  let {
    newChannelOverrides: t,
    channelOverrides: n,
    channels: l,
    categories: r,
    muted: a,
    setNewChannelOverrides: o,
    latestOverrideId: d,
    messageNotifications: c
  } = e, h = s.useMemo(() => new Set([...t, ...(0, k.OD)(n)]), [n, t]), g = (0, p.dQu)(u.Z.unsafe_rawColors.GREEN_360).hex(), m = e => {
    let n = new Set(t);
    n.delete(e), o(n)
  }, j = l.map(e => {
    let {
      channel: t
    } = e;
    if (!h.has(t.id) || null != r[t.id] && 0 === r[t.id].length) return null;
    let s = n[t.id];
    return (0, i.jsx)(R.f, {
      channel: t,
      guildMuted: a,
      muted: null != s && (0, f.m$)(s),
      messageNotifications: null != s ? s.message_notifications : null,
      guildMessageNotifications: c,
      onDelete: m,
      checkboxColor: g,
      autoFocus: t.id === d
    }, t.id)
  }).filter(w.lm);
  return (0 === h.size || 0 === j.length) && j.push((0, i.jsx)("div", {
    className: H.overridePlaceholder,
    children: (0, i.jsx)(p.Text, {
      className: H.overrideHeader,
      variant: "text-sm/semibold",
      children: z.intl.string(z.t["2Y9ZfA"])
    })
  }, "placeholder")), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: H.channelNotificationHeaders,
      children: [(0, i.jsx)(p.Heading, {
        variant: "eyebrow",
        className: H.headerName,
        children: z.intl.string(z.t.uShwWv)
      }), (0, i.jsx)(p.Heading, {
        variant: "eyebrow",
        className: H.headerOption,
        children: z.intl.string(z.t.e29Z12)
      }), (0, i.jsx)(p.Heading, {
        variant: "eyebrow",
        className: H.headerOption,
        children: z.intl.string(z.t.DD6gNd)
      }), (0, i.jsx)(p.Heading, {
        variant: "eyebrow",
        className: H.headerOption,
        children: z.intl.string(z.t.CtVGyQ)
      }), (0, i.jsx)(p.Heading, {
        variant: "eyebrow",
        className: H.headerOption,
        children: (0, i.jsx)(x.u, {
          text: z.intl.string(z.t["8wbTQ6"]),
          position: "bottom",
          children: (0, i.jsx)("span", {
            children: z.intl.string(z.t.sWmtI6)
          })
        })
      })]
    }), j]
  })
}

function X(e) {
  let {
    guildId: t,
    onClose: n,
    transitionState: l
  } = e, r = (0, c.e7)([L.Z], () => L.Z.getCategories(t)), a = (0, c.e7)([y.Z], () => y.Z.getGuild(t)), o = (0, c.e7)([_.Z], () => _.Z.getMemberCount(t)), {
    suppressEveryone: u,
    suppressRoles: h,
    muteEvents: g,
    mobilePush: m,
    muted: x,
    muteConfig: p,
    messageNotifications: f,
    channelOverrides: b,
    notifyHighlights: N
  } = (0, c.cj)([P.ZP], () => ({
    suppressEveryone: P.ZP.isSuppressEveryoneEnabled(t),
    suppressRoles: P.ZP.isSuppressRolesEnabled(t),
    muteEvents: P.ZP.isMuteScheduledEventsEnabled(t),
    mobilePush: P.ZP.isMobilePushEnabled(t),
    muted: P.ZP.isMuted(t),
    muteConfig: P.ZP.getMuteConfig(t),
    messageNotifications: P.ZP.getMessageNotifications(t),
    channelOverrides: P.ZP.getChannelOverrides(t),
    notifyHighlights: P.ZP.getNotifyHighlights(t)
  })), [S, E] = s.useState(new Set), [C, Z] = s.useState(null), A = s.useMemo(() => (0, v.Z)(r._categories, r, e => {
    let {
      channel: {
        type: t
      }
    } = e;
    return (0, O.r8)(t) || t === U.d4z.GUILD_CATEGORY
  }), [r]), M = (e, n, i) => {
    j.Z.updateGuildNotificationSettings(t, {
      [e]: n
    }, i)
  };
  return (0, i.jsxs)(d.Modal, {
    title: z.intl.string(z.t.h850Ss),
    actions: [{
      text: z.intl.string(z.t.i4jeWR),
      onClick: n
    }],
    onClose: n,
    transitionState: l,
    children: [(0, i.jsx)(J, {
      muteConfig: p,
      muted: x,
      guild: a,
      handleCheckboxChange: M
    }), (0, i.jsx)(B, {
      muted: x,
      messageNotifications: f,
      memberCount: o,
      handleRadioChange: (e, n, i) => {
        j.Z.updateGuildNotificationSettings(t, {
          [e]: n
        }, i)
      }
    }), (0, i.jsx)(Q, {
      guildId: t
    }), (0, i.jsx)(V, {
      suppressEveryone: u,
      suppressRoles: h,
      handleCheckboxChange: M,
      notifyHighlights: N,
      muteEvents: g,
      mobilePush: m,
      muted: x,
      guildId: t
    }), (0, i.jsx)(q, {
      setNewChannelOverrides: E,
      newChannelOverrides: S,
      setLatestOverrideId: Z,
      channels: A,
      categories: r
    }), (0, i.jsx)(K, {
      newChannelOverrides: S,
      channelOverrides: b,
      channels: A,
      categories: r,
      muted: x,
      setNewChannelOverrides: E,
      latestOverrideId: C,
      messageNotifications: f
    })]
  })
}

function $(e) {
  var t = Y({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  return (0, k.Mn)("NotificationSettingsModal") ? (0, i.jsx)(I.Z, F({}, t)) : (0, i.jsx)(X, F({}, t))
}