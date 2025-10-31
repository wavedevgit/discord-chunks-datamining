/** Chunk was on 15076 **/
/** chunk id: 907941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => J
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function R() {
  return (R = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
    }
    return e
  }).apply(this, arguments)
}

function D(e) {
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

function k(e) {
  let {
    label: t,
    channelId: n
  } = e, [s, l] = (0, c.Wu)([N.Z], () => {
    let e = N.Z.getChannel(n);
    return [e, (null == e ? true : e.parent_id) != null ? N.Z.getChannel(e.parent_id) : null]
  });
  return null == s ? t : (0, i.jsx)(g.ZZ$, {
    icon: (0, j.KS)(s),
    title: t,
    subtitle: null == l ? true : l.name
  })
}

function U(e) {
  var t;
  let {
    muteConfig: n,
    muted: s,
    guild: l,
    handleCheckboxChange: r
  } = e, a = null != (t = null == n ? true : n.selected_time_window) ? t : T.Oe.ALWAYS;
  return null == l ? null : (0, i.jsxs)("div", {
    className: I.largeSpacing,
    children: [(0, i.jsxs)(g.Kqy, {
      gap: 20,
      children: [(0, i.jsx)(g.rsf, {
        label: G.intl.formatToPlainString(G.t["J+7D9E"], {
          name: l.name
        }),
        description: G.intl.string(G.t["8wbTQ6"]),
        checked: s,
        onChange: e => r("muted", e, y.UE.muted(e))
      }), s ? (0, i.jsx)(g.q4e, {
        label: G.intl.string(G.t.Ztu2Yo),
        options: (0, M.W9)(),
        value: a,
        onChange: e => {
          let t = e > 0 ? o()().add(e, "second").toISOString() : null;
          m.Z.updateGuildNotificationSettings(l.id, {
            muted: true,
            mute_config: {
              selected_time_window: e,
              end_time: t
            }
          }, y.ZB.Muted)
        }
      }) : null]
    }), (0, i.jsx)(g.izJ, {
      gap: 20
    })]
  })
}

function z(e) {
  let {
    muted: t,
    messageNotifications: n,
    memberCount: s,
    handleRadioChange: l
  } = e;
  return (0, i.jsxs)("div", {
    className: I.spacing,
    children: [(0, i.jsx)("div", {
      className: I.largeSpacing,
      children: (0, i.jsx)(g.FXm, {
        label: G.intl.string(G.t.lprV7V),
        disabled: t,
        value: n,
        onChange: e => l("message_notifications", e, y.UE.notifications(e)),
        options: [{
          name: G.intl.string(G.t["n/bTaY"]),
          value: P.bL.ALL_MESSAGES,
          desc: null != s && s >= P.qWG ? G.intl.string(G.t.Dh5p5j) : null
        }, {
          name: G.intl.format(G.t.L2hmYy, {}),
          value: P.bL.ONLY_MENTIONS
        }, {
          name: G.intl.string(G.t.CtVGyQ),
          value: P.bL.NO_MESSAGES
        }]
      })
    }), (0, i.jsx)(g.izJ, {})]
  })
}

function Y(e) {
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
    className: I.largeSpacing,
    gap: 16,
    children: [(0, i.jsx)(g.rsf, {
      label: G.intl.format(G.t.OWiWAp, {}),
      onChange: e => s("suppress_everyone", e, y.UE.suppressEveryone(e)),
      checked: t
    }), (0, i.jsx)(g.izJ, {}), (0, i.jsx)(g.rsf, {
      label: G.intl.string(G.t["O/QdoD"]),
      onChange: e => s("suppress_roles", e, y.UE.suppressRoles(e)),
      checked: n
    }), (0, i.jsx)(g.izJ, {}), (0, i.jsxs)(g.Kqy, {
      gap: 4,
      children: [(0, i.jsx)(g.rsf, {
        label: G.intl.string(G.t.gPuteJ),
        onChange: e => {
          m.Z.updateGuildNotificationSettings(d, {
            notify_highlights: e ? P.gLR.DISABLED : P.gLR.ENABLED
          }, y.UE.highlights(!e))
        },
        checked: o || l === P.gLR.DISABLED,
        disabled: o,
        description: G.intl.string(G.t["Vw/Xn8"])
      }), (0, i.jsx)(g.Anchor, {
        href: _.Z.getArticleURL(P.BhN.HIGHLIGHTS),
        children: (0, i.jsx)(g.Text, {
          variant: "text-sm/normal",
          color: "text-link",
          children: G.intl.string(G.t.PRBn9K)
        })
      })]
    }), (0, i.jsx)(g.izJ, {}), (0, i.jsx)(g.rsf, {
      label: G.intl.string(G.t.ONG3Yz),
      checked: r,
      onChange: e => s("mute_scheduled_events", e, y.UE.mutedEvents(e))
    }), (0, i.jsx)(g.izJ, {}), (0, i.jsx)(g.rsf, {
      label: G.intl.string(G.t.h1DL66),
      checked: !o && a,
      disabled: o,
      onChange: e => s("mobile_push", e, y.UE.mobilePush(e))
    })]
  })
}

function V(e) {
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
    return t.type !== P.d4z.GUILD_CATEGORY || null != a[t.id] && a[t.id].length > 0
  }).map(e => {
    let {
      channel: t
    } = e;
    return {
      value: t.id,
      label: (0, v.F6)(t, C.default, O.Z)
    }
  }).value();
  return (0, i.jsx)("div", {
    className: I.largeSpacing,
    children: (0, i.jsx)(g.VcW, {
      label: G.intl.string(G.t["Z+oF8h"]),
      description: G.intl.string(G.t["2Y9ZfA"]),
      value: P.lds,
      placeholder: G.intl.string(G.t["Z+oF8h"]),
      renderOptionLabel: e => (0, i.jsx)(k, {
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

function H(e) {
  let {
    newChannelOverrides: t,
    channelOverrides: n,
    channels: l,
    categories: r,
    muted: a,
    setNewChannelOverrides: o,
    latestOverrideId: d,
    messageNotifications: c
  } = e, m = s.useMemo(() => new Set([...t, ...(0, M.OD)(n)]), [n, t]), p = (0, g.dQu)(u.Z.unsafe_rawColors.GREEN_360).hex(), v = e => {
    let n = new Set(t);
    n.delete(e), o(n)
  }, j = l.map(e => {
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
      onDelete: v,
      checkboxColor: p,
      autoFocus: t.id === d
    }, t.id)
  }).filter(L.lm);
  return (0 === m.size || 0 === j.length) && j.push((0, i.jsx)("div", {
    className: I.overridePlaceholder,
    children: (0, i.jsx)(g.Text, {
      className: I.overrideHeader,
      variant: "text-sm/semibold",
      children: G.intl.string(G.t["2Y9ZfA"])
    })
  }, "placeholder")), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: I.channelNotificationHeaders,
      children: [(0, i.jsx)(g.Heading, {
        variant: "eyebrow",
        className: I.headerName,
        children: G.intl.string(G.t.uShwWv)
      }), (0, i.jsx)(g.Heading, {
        variant: "eyebrow",
        className: I.headerOption,
        children: G.intl.string(G.t.e29Z12)
      }), (0, i.jsx)(g.Heading, {
        variant: "eyebrow",
        className: I.headerOption,
        children: G.intl.string(G.t.DD6gNd)
      }), (0, i.jsx)(g.Heading, {
        variant: "eyebrow",
        className: I.headerOption,
        children: G.intl.string(G.t.CtVGyQ)
      }), (0, i.jsx)(g.Heading, {
        variant: "eyebrow",
        className: I.headerOption,
        children: (0, i.jsx)(h.u, {
          text: G.intl.string(G.t["8wbTQ6"]),
          position: "bottom",
          children: (0, i.jsx)("span", {
            children: G.intl.string(G.t.sWmtI6)
          })
        })
      })]
    }), j]
  })
}

function W(e) {
  let {
    guildId: t,
    onClose: n,
    transitionState: l
  } = e, r = (0, c.e7)([b.Z], () => b.Z.getCategories(t)), a = (0, c.e7)([E.Z], () => E.Z.getGuild(t)), o = (0, c.e7)([S.Z], () => S.Z.getMemberCount(t)), {
    suppressEveryone: u,
    suppressRoles: h,
    muteEvents: g,
    mobilePush: x,
    muted: v,
    muteConfig: j,
    messageNotifications: N,
    channelOverrides: O,
    notifyHighlights: C
  } = (0, c.cj)([Z.ZP], () => ({
    suppressEveryone: Z.ZP.isSuppressEveryoneEnabled(t),
    suppressRoles: Z.ZP.isSuppressRolesEnabled(t),
    muteEvents: Z.ZP.isMuteScheduledEventsEnabled(t),
    mobilePush: Z.ZP.isMobilePushEnabled(t),
    muted: Z.ZP.isMuted(t),
    muteConfig: Z.ZP.getMuteConfig(t),
    messageNotifications: Z.ZP.getMessageNotifications(t),
    channelOverrides: Z.ZP.getChannelOverrides(t),
    notifyHighlights: Z.ZP.getNotifyHighlights(t)
  })), [L, _] = s.useState(new Set), [y, M] = s.useState(null), w = s.useMemo(() => (0, p.Z)(r._categories, r, e => {
    let {
      channel: {
        type: t
      }
    } = e;
    return (0, f.r8)(t) || t === P.d4z.GUILD_CATEGORY
  }), [r]), A = (e, n, i) => {
    m.Z.updateGuildNotificationSettings(t, {
      [e]: n
    }, i)
  };
  return (0, i.jsxs)(d.Modal, {
    title: G.intl.string(G.t.h850Ss),
    actions: [{
      text: G.intl.string(G.t.i4jeWR),
      onClick: n
    }],
    onClose: n,
    transitionState: l,
    children: [(0, i.jsx)(U, {
      muteConfig: j,
      muted: v,
      guild: a,
      handleCheckboxChange: A
    }), (0, i.jsx)(z, {
      muted: v,
      messageNotifications: N,
      memberCount: o,
      handleRadioChange: (e, n, i) => {
        m.Z.updateGuildNotificationSettings(t, {
          [e]: n
        }, i)
      }
    }), (0, i.jsx)(Y, {
      suppressEveryone: u,
      suppressRoles: h,
      handleCheckboxChange: A,
      notifyHighlights: C,
      muteEvents: g,
      mobilePush: x,
      muted: v,
      guildId: t
    }), (0, i.jsx)(V, {
      setNewChannelOverrides: _,
      newChannelOverrides: L,
      setLatestOverrideId: M,
      channels: w,
      categories: r
    }), (0, i.jsx)(H, {
      newChannelOverrides: L,
      channelOverrides: O,
      channels: w,
      categories: r,
      muted: v,
      setNewChannelOverrides: _,
      latestOverrideId: y,
      messageNotifications: N
    })]
  })
}

function J(e) {
  var t = R({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  return (0, M.Mn)("NotificationSettingsModal") ? (0, i.jsx)(A.Z, D({}, t)) : (0, i.jsx)(W, D({}, t))
}