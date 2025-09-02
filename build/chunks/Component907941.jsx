/** Chunk was on 15076 **/
/** chunk id: 907941, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => X
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk798140 = require("./798140.js"),
  Chunk740504 = require("./740504.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk11352 = require("./11352.js"),
  Chunk610617 = require("./610617.jsx"),
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
  Chunk385888 = require("./385888.js");

function D() {
  return (D = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = arguments[t];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
    }
    return e
  }).apply(this, arguments)
}

function k(e) {
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

function V(e) {
  let {
    label: t,
    channelId: n
  } = e, [s, l] = (0, d.Wu)([b.Z], () => {
    let e = b.Z.getChannel(n);
    return [e, (null == e ? true : e.parent_id) != null ? b.Z.getChannel(e.parent_id) : null]
  });
  return null == s ? t : (0, i.jsx)(h.ZZ$, {
    icon: (0, p.KS)(s),
    title: t,
    subtitle: null == l ? true : l.name
  })
}

function W(e) {
  var t;
  let {
    muteConfig: n,
    muted: s,
    guild: l,
    handleCheckboxChange: r
  } = e, a = null != (t = null == n ? true : n.selected_time_window) ? t : G.Oe.ALWAYS;
  return null == l ? null : (0, i.jsxs)(h.xJW, {
    className: U.largeSpacing,
    children: [(0, i.jsx)(h.j7V, {
      hideBorder: true,
      value: s,
      onChange: e => r("muted", e, P.UE.muted(e)),
      note: R.intl.string(R.t["8wbTQ0"]),
      children: R.intl.format(R.t["J+7D9P"], {
        name: l.name
      })
    }), s ? (0, i.jsxs)("div", {
      className: U.mutedContainer,
      children: [(0, i.jsxs)("div", {
        children: [(0, i.jsx)(h.vwX, {
          tag: "h3",
          className: U.muteUntilTitle,
          children: R.intl.string(R.t.Ztu2Ym)
        }), (0, i.jsx)(S.Z, {
          className: U.muteUntilText,
          muteConfig: n
        })]
      }), (0, i.jsx)(h.q4e, {
        className: U.muteTimeSelector,
        options: (0, M.W9)(),
        value: a,
        onChange: e => {
          let t = e > 0 ? o()().add(e, "second").toISOString() : null;
          g.Z.updateGuildNotificationSettings(l.id, {
            muted: true,
            mute_config: {
              selected_time_window: e,
              end_time: t
            }
          }, P.ZB.Muted)
        }
      })]
    }) : null, (0, i.jsx)(h.$i$, {})]
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
    className: U.spacing,
    children: [(0, i.jsx)(h.xJW, {
      title: R.intl.string(R.t.lprV7e),
      className: U.largeSpacing,
      children: (0, i.jsx)(h.FXm, {
        disabled: t,
        value: n,
        onChange: e => l("message_notifications", e, P.UE.notifications(e.value)),
        options: [{
          name: R.intl.string(R.t["n/bTaW"]),
          value: A.bL.ALL_MESSAGES,
          desc: null != s && s >= A.qWG ? R.intl.string(R.t.Dh5p5u) : null
        }, {
          name: R.intl.format(R.t.L2hmY2, {}),
          value: A.bL.ONLY_MENTIONS
        }, {
          name: R.intl.string(R.t.CtVGyc),
          value: A.bL.NO_MESSAGES
        }]
      })
    }), (0, i.jsx)(h.$i$, {})]
  })
}

function Y(e) {
  let {
    guildId: t,
    onClose: n
  } = e;
  return j.Y.useExperiment({
    location: "connected_notification_settings"
  }, {
    autoTrackExposure: true
  }).enabled ? (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(N.Z, {
      guildId: t,
      onClose: n
    }), (0, i.jsx)(h.$i$, {
      className: U.customNotificationSoundsDivider
    })]
  }) : null
}

function B(e) {
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
  return (0, i.jsxs)(h.xJW, {
    className: U.largeSpacing,
    children: [(0, i.jsx)(h.j7V, {
      onChange: e => s("suppress_everyone", e, P.UE.suppressEveryone(e)),
      value: t,
      children: R.intl.format(R.t.OWiWAg, {})
    }), (0, i.jsx)(h.j7V, {
      onChange: e => s("suppress_roles", e, P.UE.suppressRoles(e)),
      value: n,
      children: R.intl.string(R.t["O/QdoK"])
    }), (0, i.jsx)(h.j7V, {
      onChange: e => {
        g.Z.updateGuildNotificationSettings(d, {
          notify_highlights: e ? A.gLR.DISABLED : A.gLR.ENABLED
        }, P.UE.highlights(!e))
      },
      value: o || l === A.gLR.DISABLED,
      disabled: o,
      note: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(h.Text, {
          variant: "text-sm/normal",
          children: R.intl.string(R.t["Vw/Xn5"])
        }), (0, i.jsx)("div", {
          className: U.highlightsLink,
          children: (0, i.jsx)(h.eee, {
            href: T.Z.getArticleURL(A.BhN.HIGHLIGHTS),
            children: R.intl.string(R.t.PRBn9P)
          })
        })]
      }),
      children: (0, i.jsx)(i.Fragment, {
        children: R.intl.string(R.t.gPuteH)
      })
    }), (0, i.jsx)(h.j7V, {
      value: r,
      onChange: e => s("mute_scheduled_events", e, P.UE.mutedEvents(e)),
      children: R.intl.string(R.t.ONG3Y2)
    }), (0, i.jsx)(h.j7V, {
      value: !o && a,
      disabled: o,
      onChange: e => s("mobile_push", e, P.UE.mobilePush(e)),
      children: R.intl.string(R.t["h1DL6+"])
    })]
  })
}

function F(e) {
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
    return t.type !== A.d4z.GUILD_CATEGORY || null != a[t.id] && a[t.id].length > 0
  }).map(e => {
    let {
      channel: t
    } = e;
    return {
      value: t.id,
      label: (0, v.F6)(t, L.default, Z.Z)
    }
  }).value();
  return (0, i.jsxs)(h.xJW, {
    title: R.intl.string(R.t.O4TIvr),
    className: U.largeSpacing,
    children: [(0, i.jsx)(h.R94, {
      type: h.R94.Types.DESCRIPTION,
      className: U.smallSpacing,
      children: R.intl.string(R.t["2Y9ZfH"])
    }), (0, i.jsx)(h.VcW, {
      value: A.lds,
      placeholder: R.intl.string(R.t["Z+oF8v"]),
      renderOptionLabel: e => (0, i.jsx)(V, {
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

function q(e) {
  let {
    newChannelOverrides: t,
    channelOverrides: n,
    channels: l,
    categories: r,
    muted: a,
    setNewChannelOverrides: o,
    latestOverrideId: d,
    messageNotifications: u
  } = e, g = s.useMemo(() => new Set([...t, ...(0, M.OD)(n)]), [n, t]), x = (0, h.dQu)(c.Z.unsafe_rawColors.GREEN_360).hex(), v = e => {
    let n = new Set(t);
    n.delete(e), o(n)
  }, p = l.map(e => {
    let {
      channel: t
    } = e;
    if (!g.has(t.id) || null != r[t.id] && 0 === r[t.id].length) return null;
    let s = n[t.id];
    return (0, i.jsx)(w.f, {
      channel: t,
      guildMuted: a,
      muted: null != s && (0, m.m$)(s),
      messageNotifications: null != s ? s.message_notifications : null,
      guildMessageNotifications: u,
      onDelete: v,
      checkboxColor: x,
      autoFocus: t.id === d
    }, t.id)
  }).filter(y.lm);
  return (0 === g.size || 0 === p.length) && p.push((0, i.jsx)("div", {
    className: U.overridePlaceholder,
    children: (0, i.jsx)(h.Text, {
      className: U.overrideHeader,
      variant: "text-sm/semibold",
      children: R.intl.string(R.t["2Y9ZfH"])
    })
  }, "placeholder")), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)("div", {
      className: U.channelNotificationHeaders,
      children: [(0, i.jsx)(h.X6q, {
        variant: "eyebrow",
        className: U.headerName,
        children: R.intl.string(R.t.uShwWl)
      }), (0, i.jsx)(h.X6q, {
        variant: "eyebrow",
        className: U.headerOption,
        children: R.intl.string(R.t.e29Z19)
      }), (0, i.jsx)(h.X6q, {
        variant: "eyebrow",
        className: U.headerOption,
        children: R.intl.string(R.t.DD6gNT)
      }), (0, i.jsx)(h.X6q, {
        variant: "eyebrow",
        className: U.headerOption,
        children: R.intl.string(R.t.CtVGyc)
      }), (0, i.jsx)(h.X6q, {
        variant: "eyebrow",
        className: U.headerOption,
        children: (0, i.jsx)(h.ua7, {
          text: R.intl.string(R.t["8wbTQ0"]),
          position: "bottom",
          children: e => {
            var t, n;
            return (0, i.jsx)("span", (t = k({}, e), n = n = {
              children: R.intl.string(R.t.sWmtIy)
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
              var n = Object.keys(e);
              if (Object.getOwnPropertySymbols) {
                var i = Object.getOwnPropertySymbols(e);
                n.push.apply(n, i)
              }
              return n
            })(Object(n)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
          }
        })
      })]
    }), p]
  })
}

function H(e) {
  let {
    guildId: t,
    onClose: n,
    transitionState: l
  } = e, r = (0, d.e7)([O.Z], () => O.Z.getCategories(t)), a = (0, d.e7)([C.Z], () => C.Z.getGuild(t)), o = (0, d.e7)([E.Z], () => E.Z.getMemberCount(t)), {
    suppressEveryone: c,
    suppressRoles: h,
    muteEvents: m,
    mobilePush: v,
    muted: p,
    muteConfig: j,
    messageNotifications: N,
    channelOverrides: S,
    notifyHighlights: b
  } = (0, d.cj)([_.ZP], () => ({
    suppressEveryone: _.ZP.isSuppressEveryoneEnabled(t),
    suppressRoles: _.ZP.isSuppressRolesEnabled(t),
    muteEvents: _.ZP.isMuteScheduledEventsEnabled(t),
    mobilePush: _.ZP.isMobilePushEnabled(t),
    muted: _.ZP.isMuted(t),
    muteConfig: _.ZP.getMuteConfig(t),
    messageNotifications: _.ZP.getMessageNotifications(t),
    channelOverrides: _.ZP.getChannelOverrides(t),
    notifyHighlights: _.ZP.getNotifyHighlights(t)
  })), [Z, L] = s.useState(new Set), [y, T] = s.useState(null), P = s.useMemo(() => (0, x.Z)(r._categories, r, e => {
    let {
      channel: {
        type: t
      }
    } = e;
    return (0, f.r8)(t) || t === A.d4z.GUILD_CATEGORY
  }), [r]), M = (e, n, i) => {
    g.Z.updateGuildNotificationSettings(t, {
      [e]: n
    }, i)
  };
  return (0, i.jsxs)(u.Modal, {
    title: R.intl.string(R.t.h850Sk),
    actions: [{
      text: R.intl.string(R.t.i4jeWV),
      onClick: n
    }],
    onClose: n,
    transitionState: l,
    children: [(0, i.jsx)(W, {
      muteConfig: j,
      muted: p,
      guild: a,
      handleCheckboxChange: M
    }), (0, i.jsx)(z, {
      muted: p,
      messageNotifications: N,
      memberCount: o,
      handleRadioChange: (e, n, i) => {
        g.Z.updateGuildNotificationSettings(t, {
          [e]: n.value
        }, i)
      }
    }), (0, i.jsx)(Y, {
      guildId: t,
      onClose: n
    }), (0, i.jsx)(B, {
      suppressEveryone: c,
      suppressRoles: h,
      handleCheckboxChange: M,
      notifyHighlights: b,
      muteEvents: m,
      mobilePush: v,
      muted: p,
      guildId: t
    }), (0, i.jsx)(F, {
      setNewChannelOverrides: L,
      newChannelOverrides: Z,
      setLatestOverrideId: T,
      channels: P,
      categories: r
    }), (0, i.jsx)(q, {
      newChannelOverrides: Z,
      channelOverrides: S,
      channels: P,
      categories: r,
      muted: p,
      setNewChannelOverrides: L,
      latestOverrideId: y,
      messageNotifications: N
    })]
  })
}

function X(e) {
  var t = D({}, function(e) {
    if (null == e) throw TypeError("Cannot destructure " + e);
    return e
  }(e));
  return (0, M.Mn)("NotificationSettingsModal") ? (0, i.jsx)(I.Z, k({}, t)) : (0, i.jsx)(H, k({}, t))
}