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
  Chunk538534 = require("./538534.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk798140 = require("./798140.js"),
  Chunk740504 = require("./740504.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk777861 = require("./777861.jsx"),
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
  Chunk681296 = require("./681296.js");

function k() {
  return (k = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
    }
    return e
  }).apply(this, arguments)
}

function U(e) {
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
  } = e, [s, l] = (0, c.Wu)([b.Z], () => {
    let e = b.Z.getChannel(n);
    return [e, (null == e ? true : e.parent_id) != null ? b.Z.getChannel(e.parent_id) : null]
  });
  return null == s ? t : (0, i.jsx)(m.ZZ$, {
    icon: (0, f.KS)(s),
    title: t,
    subtitle: null == l ? true : l.name
  })
}

function z(e) {
  var t;
  let {
    muteConfig: n,
    muted: s,
    guild: l,
    handleCheckboxChange: r
  } = e, a = null != (t = null == n ? true : n.selected_time_window) ? t : I.Oe.ALWAYS;
  return null == l ? null : (0, i.jsxs)("div", {
    className: D.largeSpacing,
    children: [(0, i.jsx)(m.rsf, {
      label: R.intl.formatToPlainString(R.t["J+7D9P"], {
        name: l.name
      }),
      description: R.intl.string(R.t["8wbTQ0"]),
      checked: s,
      onChange: e => r("muted", e, w.UE.muted(e))
    }), s ? (0, i.jsxs)("div", {
      className: D.mutedContainer,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)(m.vwX, {
          tag: "h3",
          className: D.muteUntilTitle,
          children: R.intl.string(R.t.Ztu2Ym)
        }), (0, i.jsx)(N.Z, {
          className: D.muteUntilText,
          muteConfig: n
        })]
      }), (0, i.jsx)(m.q4e, {
        className: D.muteTimeSelector,
        options: (0, T.W9)(),
        value: a,
        onChange: e => {
          let t = e > 0 ? o()().add(e, "second").toISOString() : null;
          x.Z.updateGuildNotificationSettings(l.id, {
            muted: true,
            mute_config: {
              selected_time_window: e,
              end_time: t
            }
          }, w.ZB.Muted)
        }
      })]
    }) : null, (0, i.jsx)(m.izJ, {})]
  })
}

function V(e) {
  let {
    muted: t,
    messageNotifications: n,
    memberCount: s,
    handleRadioChange: l
  } = e;
  return (0, i.jsxs)("div", {
    className: D.spacing,
    children: [(0, i.jsx)(m.xJW, {
      title: R.intl.string(R.t.lprV7e),
      className: D.largeSpacing,
      children: (0, i.jsx)(h.E, {
        disabled: t,
        value: n,
        onChange: e => l("message_notifications", e, w.UE.notifications(e)),
        options: [{
          name: R.intl.string(R.t["n/bTaW"]),
          value: G.bL.ALL_MESSAGES,
          desc: null != s && s >= G.qWG ? R.intl.string(R.t.Dh5p5u) : null
        }, {
          name: R.intl.format(R.t.L2hmY2, {}),
          value: G.bL.ONLY_MENTIONS
        }, {
          name: R.intl.string(R.t.CtVGyc),
          value: G.bL.NO_MESSAGES
        }]
      })
    }), (0, i.jsx)(m.izJ, {})]
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
  return (0, i.jsxs)(m.Kqy, {
    className: D.largeSpacing,
    gap: 16,
    children: [(0, i.jsx)(m.rsf, {
      label: R.intl.format(R.t.OWiWAg, {}),
      onChange: e => s("suppress_everyone", e, w.UE.suppressEveryone(e)),
      checked: t
    }), (0, i.jsx)(m.izJ, {}), (0, i.jsx)(m.rsf, {
      label: R.intl.string(R.t["O/QdoK"]),
      onChange: e => s("suppress_roles", e, w.UE.suppressRoles(e)),
      checked: n
    }), (0, i.jsx)(m.izJ, {}), (0, i.jsxs)(m.Kqy, {
      gap: 4,
      children: [(0, i.jsx)(m.rsf, {
        label: R.intl.string(R.t.gPuteH),
        onChange: e => {
          x.Z.updateGuildNotificationSettings(d, {
            notify_highlights: e ? G.gLR.DISABLED : G.gLR.ENABLED
          }, w.UE.highlights(!e))
        },
        checked: o || l === G.gLR.DISABLED,
        disabled: o,
        description: R.intl.string(R.t["Vw/Xn5"])
      }), (0, i.jsx)(m.eee, {
        href: M.Z.getArticleURL(G.BhN.HIGHLIGHTS),
        children: (0, i.jsx)(m.Text, {
          variant: "text-sm/normal",
          color: "text-link",
          children: R.intl.string(R.t.PRBn9P)
        })
      })]
    }), (0, i.jsx)(m.izJ, {}), (0, i.jsx)(m.rsf, {
      label: R.intl.string(R.t.ONG3Y2),
      checked: r,
      onChange: e => s("mute_scheduled_events", e, w.UE.mutedEvents(e))
    }), (0, i.jsx)(m.izJ, {}), (0, i.jsx)(m.rsf, {
      label: R.intl.string(R.t["h1DL6+"]),
      checked: !o && a,
      disabled: o,
      onChange: e => s("mobile_push", e, w.UE.mobilePush(e))
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
      label: (0, j.F6)(t, _.default, C.Z)
    }
  }).value();
  return (0, i.jsxs)(m.xJW, {
    title: R.intl.string(R.t.O4TIvr),
    className: D.largeSpacing,
    children: [(0, i.jsx)(m.R94, {
      type: m.R94.Types.DESCRIPTION,
      className: D.smallSpacing,
      children: R.intl.string(R.t["2Y9ZfH"])
    }), (0, i.jsx)(m.VcW, {
      value: G.lds,
      placeholder: R.intl.string(R.t["Z+oF8v"]),
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
    })]
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
  } = e, h = s.useMemo(() => new Set([...t, ...(0, T.OD)(n)]), [n, t]), x = (0, m.dQu)(u.Z.unsafe_rawColors.GREEN_360).hex(), v = e => {
    let n = new Set(t);
    n.delete(e), o(n)
  }, j = l.map(e => {
    let {
      channel: t
    } = e;
    if (!h.has(t.id) || null != r[t.id] && 0 === r[t.id].length) return null;
    let s = n[t.id];
    return (0, i.jsx)(P.f, {
      channel: t,
      guildMuted: a,
      muted: null != s && (0, p.m$)(s),
      messageNotifications: null != s ? s.message_notifications : null,
      guildMessageNotifications: c,
      onDelete: v,
      checkboxColor: x,
      autoFocus: t.id === d
    }, t.id)
  }).filter(y.lm);
  return (0 === h.size || 0 === j.length) && j.push((0, i.jsx)("div", {
    className: D.overridePlaceholder,
    children: (0, i.jsx)(m.Text, {
      className: D.overrideHeader,
      variant: "text-sm/semibold",
      children: R.intl.string(R.t["2Y9ZfH"])
    })
  }, "placeholder")), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: D.channelNotificationHeaders,
      children: [(0, i.jsx)(m.X6q, {
        variant: "eyebrow",
        className: D.headerName,
        children: R.intl.string(R.t.uShwWl)
      }), (0, i.jsx)(m.X6q, {
        variant: "eyebrow",
        className: D.headerOption,
        children: R.intl.string(R.t.e29Z19)
      }), (0, i.jsx)(m.X6q, {
        variant: "eyebrow",
        className: D.headerOption,
        children: R.intl.string(R.t.DD6gNT)
      }), (0, i.jsx)(m.X6q, {
        variant: "eyebrow",
        className: D.headerOption,
        children: R.intl.string(R.t.CtVGyc)
      }), (0, i.jsx)(m.X6q, {
        variant: "eyebrow",
        className: D.headerOption,
        children: (0, i.jsx)(g.u, {
          text: R.intl.string(R.t["8wbTQ0"]),
          position: "bottom",
          children: (0, i.jsx)("span", {
            children: R.intl.string(R.t.sWmtIy)
          })
        })
      })]
    }), j]
  })
}

function F(e) {
  let {
    guildId: t,
    onClose: n,
    transitionState: l
  } = e, r = (0, c.e7)([E.Z], () => E.Z.getCategories(t)), a = (0, c.e7)([Z.Z], () => Z.Z.getGuild(t)), o = (0, c.e7)([O.Z], () => O.Z.getMemberCount(t)), {
    suppressEveryone: u,
    suppressRoles: h,
    muteEvents: g,
    mobilePush: m,
    muted: p,
    muteConfig: j,
    messageNotifications: f,
    channelOverrides: N,
    notifyHighlights: b
  } = (0, c.cj)([L.ZP], () => ({
    suppressEveryone: L.ZP.isSuppressEveryoneEnabled(t),
    suppressRoles: L.ZP.isSuppressRolesEnabled(t),
    muteEvents: L.ZP.isMuteScheduledEventsEnabled(t),
    mobilePush: L.ZP.isMobilePushEnabled(t),
    muted: L.ZP.isMuted(t),
    muteConfig: L.ZP.getMuteConfig(t),
    messageNotifications: L.ZP.getMessageNotifications(t),
    channelOverrides: L.ZP.getChannelOverrides(t),
    notifyHighlights: L.ZP.getNotifyHighlights(t)
  })), [C, _] = s.useState(new Set), [y, M] = s.useState(null), w = s.useMemo(() => (0, v.Z)(r._categories, r, e => {
    let {
      channel: {
        type: t
      }
    } = e;
    return (0, S.r8)(t) || t === G.d4z.GUILD_CATEGORY
  }), [r]), T = (e, n, i) => {
    x.Z.updateGuildNotificationSettings(t, {
      [e]: n
    }, i)
  };
  return (0, i.jsxs)(d.Modal, {
    title: R.intl.string(R.t.h850Sk),
    actions: [{
      text: R.intl.string(R.t.i4jeWV),
      onClick: n
    }],
    onClose: n,
    transitionState: l,
    children: [(0, i.jsx)(z, {
      muteConfig: j,
      muted: p,
      guild: a,
      handleCheckboxChange: T
    }), (0, i.jsx)(V, {
      muted: p,
      messageNotifications: f,
      memberCount: o,
      handleRadioChange: (e, n, i) => {
        x.Z.updateGuildNotificationSettings(t, {
          [e]: n
        }, i)
      }
    }), (0, i.jsx)(Y, {
      suppressEveryone: u,
      suppressRoles: h,
      handleCheckboxChange: T,
      notifyHighlights: b,
      muteEvents: g,
      mobilePush: m,
      muted: p,
      guildId: t
    }), (0, i.jsx)(q, {
      setNewChannelOverrides: _,
      newChannelOverrides: C,
      setLatestOverrideId: M,
      channels: w,
      categories: r
    }), (0, i.jsx)(H, {
      newChannelOverrides: C,
      channelOverrides: N,
      channels: w,
      categories: r,
      muted: p,
      setNewChannelOverrides: _,
      latestOverrideId: y,
      messageNotifications: f
    })]
  })
}

function J(e) {
  var t = k({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  return (0, T.Mn)("NotificationSettingsModal") ? (0, i.jsx)(A.Z, U({}, t)) : (0, i.jsx)(F, U({}, t))
}