/** Chunk was on 15076 **/
/** chunk id: 907941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => Q
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
  Chunk385888 = require("./385888.js");

function k() {
  return (k = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
    }
    return e
  }).apply(this, arguments)
}

function z(e) {
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

function H(e) {
  let {
    label: t,
    channelId: n
  } = e, [s, l] = (0, c.Wu)([E.Z], () => {
    let e = E.Z.getChannel(n);
    return [e, (null == e ? true : e.parent_id) != null ? E.Z.getChannel(e.parent_id) : null]
  });
  return null == s ? t : (0, i.jsx)(g.ZZ$, {
    icon: (0, v.KS)(s),
    title: t,
    subtitle: null == l ? true : l.name
  })
}

function V(e) {
  var t;
  let {
    muteConfig: n,
    muted: s,
    guild: l,
    handleCheckboxChange: r
  } = e, a = null != (t = null == n ? true : n.selected_time_window) ? t : I.Oe.ALWAYS;
  return null == l ? null : (0, i.jsxs)("div", {
    className: U.largeSpacing,
    children: [(0, i.jsxs)(g.Kqy, {
      gap: 20,
      children: [(0, i.jsx)(g.rsf, {
        label: D.intl.formatToPlainString(D.t["J+7D9E"], {
          name: l.name
        }),
        description: D.intl.string(D.t["8wbTQ6"]),
        checked: s,
        onChange: e => r("muted", e, P.UE.muted(e))
      }), s ? (0, i.jsx)(g.q4e, {
        label: D.intl.string(D.t.Ztu2Yo),
        options: (0, T.W9)(),
        value: a,
        onChange: e => {
          let t = e > 0 ? o()().add(e, "second").toISOString() : null;
          m.Z.updateGuildNotificationSettings(l.id, {
            muted: true,
            mute_config: {
              selected_time_window: e,
              end_time: t
            }
          }, P.ZB.Muted)
        }
      }) : null]
    }), (0, i.jsx)(g.izJ, {
      gap: 20
    })]
  })
}

function Y(e) {
  let {
    muted: t,
    messageNotifications: n,
    memberCount: s,
    handleRadioChange: l
  } = e;
  return (0, i.jsxs)("div", {
    className: U.spacing,
    children: [(0, i.jsx)("div", {
      className: U.largeSpacing,
      children: (0, i.jsx)(g.FXm, {
        label: D.intl.string(D.t.lprV7V),
        disabled: t,
        value: n,
        onChange: e => l("message_notifications", e, P.UE.notifications(e)),
        options: [{
          name: D.intl.string(D.t["n/bTaY"]),
          value: G.bL.ALL_MESSAGES,
          desc: null != s && s >= G.qWG ? D.intl.string(D.t.Dh5p5j) : null
        }, {
          name: D.intl.format(D.t.L2hmYy, {}),
          value: G.bL.ONLY_MENTIONS
        }, {
          name: D.intl.string(D.t.CtVGyQ),
          value: G.bL.NO_MESSAGES
        }]
      })
    }), (0, i.jsx)(g.izJ, {})]
  })
}

function W(e) {
  let {
    guildId: t
  } = e, n = (0, f.Tz)(t), s = (0, c.e7)([N.Z], () => N.Z.getGuildAlertSettings()[t]);
  if (n) return (0, i.jsxs)("div", {
    className: U.spacing,
    children: [(0, i.jsx)(g.l09, {
      className: U.largeSpacing,
      children: (0, i.jsxs)(d.gNt, {
        label: D.intl.string(D.t.D9yVAH),
        description: D.intl.string(D.t["0PhAOH"]),
        children: [(0, i.jsx)(g.rsf, {
          label: D.intl.string(D.t.u6dc5B),
          description: D.intl.string(D.t.z8Td48),
          checked: !(null == s ? true : s.disableRaidAlertNag),
          onChange: e => (0, b.PS)(t, t => {
            t.disableRaidAlertNag = !e
          }, b.fy.INFREQUENT_USER_ACTION)
        }), (0, i.jsx)(g.rsf, {
          label: D.intl.string(D.t.P8MG6q),
          description: D.intl.string(D.t.PyxXs8),
          checked: !(null == s ? true : s.disableRaidAlertPush),
          onChange: e => (0, b.PS)(t, t => {
            t.disableRaidAlertPush = !e
          }, b.fy.INFREQUENT_USER_ACTION)
        })]
      })
    }), (0, i.jsx)(g.izJ, {})]
  })
}

function F(e) {
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
  return (0, i.jsxs)(g.Kqy, {
    className: U.largeSpacing,
    gap: 16,
    children: [(0, i.jsx)(g.rsf, {
      label: D.intl.format(D.t.OWiWAp, {}),
      onChange: e => s("suppress_everyone", e, P.UE.suppressEveryone(e)),
      checked: t
    }), (0, i.jsx)(g.izJ, {}), (0, i.jsx)(g.rsf, {
      label: D.intl.string(D.t["O/QdoD"]),
      onChange: e => s("suppress_roles", e, P.UE.suppressRoles(e)),
      checked: n
    }), (0, i.jsx)(g.izJ, {}), (0, i.jsxs)(g.Kqy, {
      gap: 4,
      children: [(0, i.jsx)(g.rsf, {
        label: D.intl.string(D.t.gPuteJ),
        onChange: e => {
          m.Z.updateGuildNotificationSettings(d, {
            notify_highlights: e ? G.gLR.DISABLED : G.gLR.ENABLED
          }, P.UE.highlights(!e))
        },
        checked: o || l === G.gLR.DISABLED,
        disabled: o,
        description: D.intl.string(D.t["Vw/Xn8"])
      }), (0, i.jsx)(g.Anchor, {
        href: M.Z.getArticleURL(G.BhN.HIGHLIGHTS),
        children: (0, i.jsx)(g.Text, {
          variant: "text-sm/normal",
          color: "text-link",
          children: D.intl.string(D.t.PRBn9K)
        })
      })]
    }), (0, i.jsx)(g.izJ, {}), (0, i.jsx)(g.rsf, {
      label: D.intl.string(D.t.ONG3Yz),
      checked: r,
      onChange: e => s("mute_scheduled_events", e, P.UE.mutedEvents(e))
    }), (0, i.jsx)(g.izJ, {}), (0, i.jsx)(g.rsf, {
      label: D.intl.string(D.t.h1DL66),
      checked: !o && a,
      disabled: o,
      onChange: e => s("mobile_push", e, P.UE.mobilePush(e))
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
    return t.type !== G.d4z.GUILD_CATEGORY || null != a[t.id] && a[t.id].length > 0
  }).map(e => {
    let {
      channel: t
    } = e;
    return {
      value: t.id,
      label: (0, j.F6)(t, y.default, L.Z)
    }
  }).value();
  return (0, i.jsx)("div", {
    className: U.largeSpacing,
    children: (0, i.jsx)(g.VcW, {
      label: D.intl.string(D.t["Z+oF8h"]),
      description: D.intl.string(D.t["2Y9ZfA"]),
      value: G.lds,
      placeholder: D.intl.string(D.t["Z+oF8h"]),
      renderOptionLabel: e => (0, i.jsx)(H, {
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

function J(e) {
  let {
    newChannelOverrides: t,
    channelOverrides: n,
    channels: l,
    categories: r,
    muted: a,
    setNewChannelOverrides: o,
    latestOverrideId: d,
    messageNotifications: c
  } = e, m = s.useMemo(() => new Set([...t, ...(0, T.OD)(n)]), [n, t]), p = (0, g.dQu)(u.Z.unsafe_rawColors.GREEN_360).hex(), j = e => {
    let n = new Set(t);
    n.delete(e), o(n)
  }, v = l.map(e => {
    let {
      channel: t
    } = e;
    if (!m.has(t.id) || null != r[t.id] && 0 === r[t.id].length) return null;
    let s = n[t.id];
    return (0, i.jsx)(w.f, {
      channel: t,
      guildMuted: a,
      muted: null != s && (0, x.m$)(s),
      messageNotifications: null != s ? s.message_notifications : null,
      guildMessageNotifications: c,
      onDelete: j,
      checkboxColor: p,
      autoFocus: t.id === d
    }, t.id)
  }).filter(A.lm);
  return (0 === m.size || 0 === v.length) && v.push((0, i.jsx)("div", {
    className: U.overridePlaceholder,
    children: (0, i.jsx)(g.Text, {
      className: U.overrideHeader,
      variant: "text-sm/semibold",
      children: D.intl.string(D.t["2Y9ZfA"])
    })
  }, "placeholder")), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: U.channelNotificationHeaders,
      children: [(0, i.jsx)(g.Heading, {
        variant: "eyebrow",
        className: U.headerName,
        children: D.intl.string(D.t.uShwWv)
      }), (0, i.jsx)(g.Heading, {
        variant: "eyebrow",
        className: U.headerOption,
        children: D.intl.string(D.t.e29Z12)
      }), (0, i.jsx)(g.Heading, {
        variant: "eyebrow",
        className: U.headerOption,
        children: D.intl.string(D.t.DD6gNd)
      }), (0, i.jsx)(g.Heading, {
        variant: "eyebrow",
        className: U.headerOption,
        children: D.intl.string(D.t.CtVGyQ)
      }), (0, i.jsx)(g.Heading, {
        variant: "eyebrow",
        className: U.headerOption,
        children: (0, i.jsx)(h.u, {
          text: D.intl.string(D.t["8wbTQ6"]),
          position: "bottom",
          children: (0, i.jsx)("span", {
            children: D.intl.string(D.t.sWmtI6)
          })
        })
      })]
    }), v]
  })
}

function B(e) {
  let {
    guildId: t,
    onClose: n,
    transitionState: l
  } = e, r = (0, c.e7)([O.Z], () => O.Z.getCategories(t)), a = (0, c.e7)([Z.Z], () => Z.Z.getGuild(t)), o = (0, c.e7)([C.Z], () => C.Z.getMemberCount(t)), {
    suppressEveryone: u,
    suppressRoles: h,
    muteEvents: g,
    mobilePush: x,
    muted: j,
    muteConfig: v,
    messageNotifications: f,
    channelOverrides: N,
    notifyHighlights: b
  } = (0, c.cj)([_.ZP], () => ({
    suppressEveryone: _.ZP.isSuppressEveryoneEnabled(t),
    suppressRoles: _.ZP.isSuppressRolesEnabled(t),
    muteEvents: _.ZP.isMuteScheduledEventsEnabled(t),
    mobilePush: _.ZP.isMobilePushEnabled(t),
    muted: _.ZP.isMuted(t),
    muteConfig: _.ZP.getMuteConfig(t),
    messageNotifications: _.ZP.getMessageNotifications(t),
    channelOverrides: _.ZP.getChannelOverrides(t),
    notifyHighlights: _.ZP.getNotifyHighlights(t)
  })), [E, L] = s.useState(new Set), [y, A] = s.useState(null), M = s.useMemo(() => (0, p.Z)(r._categories, r, e => {
    let {
      channel: {
        type: t
      }
    } = e;
    return (0, S.r8)(t) || t === G.d4z.GUILD_CATEGORY
  }), [r]), P = (e, n, i) => {
    m.Z.updateGuildNotificationSettings(t, {
      [e]: n
    }, i)
  };
  return (0, i.jsxs)(d.Modal, {
    title: D.intl.string(D.t.h850Ss),
    actions: [{
      text: D.intl.string(D.t.i4jeWR),
      onClick: n
    }],
    onClose: n,
    transitionState: l,
    children: [(0, i.jsx)(V, {
      muteConfig: v,
      muted: j,
      guild: a,
      handleCheckboxChange: P
    }), (0, i.jsx)(Y, {
      muted: j,
      messageNotifications: f,
      memberCount: o,
      handleRadioChange: (e, n, i) => {
        m.Z.updateGuildNotificationSettings(t, {
          [e]: n
        }, i)
      }
    }), (0, i.jsx)(W, {
      guildId: t
    }), (0, i.jsx)(F, {
      suppressEveryone: u,
      suppressRoles: h,
      handleCheckboxChange: P,
      notifyHighlights: b,
      muteEvents: g,
      mobilePush: x,
      muted: j,
      guildId: t
    }), (0, i.jsx)(q, {
      setNewChannelOverrides: L,
      newChannelOverrides: E,
      setLatestOverrideId: A,
      channels: M,
      categories: r
    }), (0, i.jsx)(J, {
      newChannelOverrides: E,
      channelOverrides: N,
      channels: M,
      categories: r,
      muted: j,
      setNewChannelOverrides: L,
      latestOverrideId: y,
      messageNotifications: f
    })]
  })
}

function Q(e) {
  var t = k({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  return (0, T.Mn)("NotificationSettingsModal") ? (0, i.jsx)(R.Z, z({}, t)) : (0, i.jsx)(B, z({}, t))
}