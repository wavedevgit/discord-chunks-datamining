/** Chunk was on 50751 **/
/** chunk id: 890828, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => W
}), require("./361932.js"), require("./187205.js"), require("./388685.js"), require("./642613.js"), require("./781311.js"), require("./539854.js"), require("./472816.js"), require("./794429.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk36563 = require("./36563.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk305347 = require("./305347.jsx"),
  Chunk473403 = require("./473403.jsx"),
  Chunk99214 = require("./99214.js"),
  Chunk46145 = require("./46145.js"),
  Chunk886118 = require("./886118.js"),
  Chunk301801 = require("./301801.js"),
  Chunk752048 = require("./752048.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk979651 = require("./979651.js"),
  Chunk823379 = require("./823379.js"),
  Chunk136015 = require("./136015.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk805953 = require("./805953.js");
let P = e => [e.userId, ... function(e) {
    let t = C.default.getUser(e.userId);
    if (null == t) return [];
    let n = t.username,
      i = (0, m.e3)(t);
    return Array.from(new Set([n, i.nick, ...Object.values(i.names)].flat().filter(_.lm)))
  }(e)],
  A = {
    searchType: Chunk886118.S.FUZZY,
    sortType: Chunk886118.E.JARO_WINKLER,
    searchStringGenerator: e => {
      var t, n;
      let {
        channel: i,
        voiceStates: r
      } = e;
      return [i.name, i.id, i.guild_id, null != (n = null == (t = S.Z.getGuild(i.guild_id)) ? true : t.name) ? n : "", ...r.flatMap(e => P(e))].filter(_.lm)
    },
    throttleMs: 100
  },
  k = {
    searchType: Chunk886118.S.FUZZY,
    sortType: Chunk886118.E.JARO_WINKLER,
    searchStringGenerator: P,
    throttleMs: 100
  },
  D = Chunk473749.memo(function(e) {
    let {
      channel: t,
      query: n
    } = e, [l] = (0, o.e7)([j.Z], () => [j.Z.getVoiceStatesForChannel(t.id), j.Z.getVoiceStateVersion()], [t.id], Z.Q), [a, u] = r.useState([]);
    (0, y.BO)(n, Object.values(l), u, k);
    let d = (0, o.Wu)([j.Z, C.default, O.Z, I.Z], () => Object.values(j.Z.getVoiceStatesForChannel(t.id)).map(e => C.default.getUser(e.userId)).filter(_.lm).sort((e, t) => {
        var i, r, l, o;
        if (a.length > 0 && "" !== n.trim()) {
          if (a.some(t => t.userId === e.id)) return false;
          if (a.some(e => e.userId === t.id)) return 1
        }
        return I.Z.isFriend(e.id) && !I.Z.isFriend(t.id) ? false : !I.Z.isFriend(e.id) && I.Z.isFriend(t.id) ? 1 : (null != (l = null == (i = O.Z.getUserAffinity(t.id)) ? true : i.vcProbability) ? l : 0) - (null != (o = null == (r = O.Z.getUserAffinity(e.id)) ? true : r.vcProbability) ? o : 0)
      }), [t.id, a, n]),
      f = t.getGuildId(),
      h = Math.max(a.length, 2);
    return null == f ? null : (0, i.jsx)(s.Z, {
      users: d,
      guildId: f,
      maxUsers: Math.min(h, 4),
      size: c.EFr.SIZE_24,
      overflowCountClassName: T.overflowCount,
      overflowCountVariant: "text-xs/semibold",
      disableUserPopout: true,
      "aria-label": w.intl.string(w.t.TxqPQR)
    })
  }),
  R = Chunk473749.memo(function(e) {
    var t;
    let {
      channel: n
    } = e, r = n.getGuildId(), l = (0, o.e7)([S.Z], () => S.Z.getGuild(r), [r]);
    if (null == l) switch (n.type) {
      case N.d4z.DM:
        return (0, i.jsx)(p.je, {
          channel: n,
          size: c.EFr.SIZE_32
        });
      case N.d4z.GROUP_DM:
        return (0, i.jsx)(p.ge, {
          channel: n,
          size: c.EFr.SIZE_32
        });
      default:
        return null
    }
    return (0, i.jsx)(f.ZP, {
      mask: f.QS.CLAN_ICON,
      width: 32,
      height: 32,
      children: (0, i.jsx)("div", {
        className: T.guildIconWrapper,
        children: (0, i.jsx)(h.Ft, {
          guildId: l.id,
          guildName: null != (t = l.name) ? t : w.intl.string(w.t.DmIUGK),
          guildIcon: l.icon,
          iconSize: 32
        })
      })
    })
  }),
  L = Chunk473749.memo(function(e) {
    var t;
    let {
      channelId: n,
      isHighlighted: r,
      currentVoiceChannel: l,
      onClick: s,
      onMouseOver: f,
      onMouseLeave: h,
      query: p
    } = e, m = (0, o.e7)([v.Z], () => v.Z.getChannel(n), [n]), g = null == m ? true : m.getGuildId(), b = (0, o.e7)([S.Z], () => S.Z.getGuild(g), [g]), y = (0, d.KS)(m, b), O = (null == l ? true : l.id) === n, E = O ? "text-feedback-positive" : r ? "interactive-text-active" : "text-muted", x = O ? c.TVs.colors.TEXT_FEEDBACK_POSITIVE : r ? c.TVs.colors.INTERACTIVE_TEXT_ACTIVE : c.TVs.colors.ICON_MUTED;
    return null == m ? null : (0, i.jsxs)(c.kL8, {
      className: a()(T.channelItemContainer, r && T.channelItemHighlighted),
      "aria-label": m.name,
      onClick: () => s(n),
      onMouseOver: () => f(n),
      onMouseLeave: () => h(n),
      children: [(0, i.jsx)("div", {
        className: T.channelItemIcon,
        children: (0, i.jsx)(R, {
          channel: m
        })
      }), (0, i.jsxs)("div", {
        className: T.channelItemNameContainer,
        children: [(0, i.jsxs)("div", {
          className: T.channelItemName,
          children: [null != y ? (0, i.jsx)(y, {
            color: x,
            size: "xs",
            className: T.channelIcon
          }) : true, (0, i.jsx)(c.Text, {
            variant: O ? "text-sm/semibold" : "text-sm/medium",
            color: E,
            className: T.channelItemNameText,
            children: (0, u.F6)(m, C.default, I.Z)
          })]
        }), (0, i.jsx)(c.Text, {
          variant: O ? "text-xs/semibold" : "text-xs/medium",
          color: E,
          children: null != (t = null == b ? true : b.name) ? t : m.name
        })]
      }), (0, i.jsx)("div", {
        className: T.channelItemAvatars,
        children: (0, i.jsx)(D, {
          channel: m,
          currentVoiceChannel: l,
          query: p
        })
      })]
    })
  }),
  M = Chunk473749.memo(function(e) {
    let {
      emptyText: t
    } = e;
    return (0, i.jsx)("div", {
      className: T.emptyChannelItem,
      children: (0, i.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-strong",
        children: t
      })
    })
  }),
  z = Chunk473749.memo(function(e) {
    let {
      sectionHeader: t,
      channelIds: n,
      currentVoiceChannel: l,
      onSelect: a,
      hasQuery: o,
      query: s,
      scrollable: u = true
    } = e, [d, f] = r.useState(null), h = e => {
      f(e)
    }, p = () => {
      f(null)
    }, m = u ? c.zJl : "div";
    return (0, i.jsxs)("div", {
      children: [(0, i.jsx)("div", {
        className: T.recentChannelsMenuHeader,
        children: (0, i.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-muted",
          children: t
        })
      }), (0, i.jsxs)(m, {
        className: T.channelList,
        children: [o && 0 === n.length && (0, i.jsx)(M, {
          emptyText: w.intl.string(w.t.nxSS03)
        }), n.map(e => (0, i.jsx)(L, {
          channelId: e,
          isHighlighted: e === d,
          currentVoiceChannel: l,
          onClick: () => {
            a(e)
          },
          onMouseOver: h,
          onMouseLeave: p,
          query: s
        }, e))]
      })]
    })
  });

function V(e) {
  let {
    searchQuery: t,
    currentVoiceChannel: n,
    onSelect: r
  } = e, {
    recentVoiceChannelIds: l,
    friendVoiceChannelIds: s
  } = function() {
    let e = function() {
        let e = (0, o.Wu)([C.default, I.Z, O.Z], () => I.Z.getFriendIDs().sort((e, t) => {
          var n, i, r, l;
          return null == e && null == t ? 0 : null == e ? 1 : null == t ? false : (null != (r = null == (n = O.Z.getUserAffinity(t)) ? true : n.communicationProbability) ? r : 0) - (null != (l = null == (i = O.Z.getUserAffinity(e)) ? true : i.communicationProbability) ? l : 0)
        }).reduce((e, t) => {
          let n = C.default.getUser(t);
          return null != n && e.push(n), e
        }, []), []);
        return (0, o.Wu)([j.Z, v.Z, x.Z], () => Array.from(e.map(e => j.Z.getDiscoverableVoiceStateForUser(e.id)).reduce((e, t) => {
          let n = null == t ? true : t.channelId;
          if (null == n) return e;
          let i = v.Z.getChannel(n);
          return null != i && x.Z.can(N.Plq.CONNECT, i) && e.add(n), e
        }, new Set)).filter(_.lm), [e])
      }(),
      t = (0, o.Wu)([g.Z, v.Z, x.Z], () => {
        let t = g.Z.getChannelHistory(),
          n = new Set(e);
        return Array.from(new Set(t.reduce((e, t) => {
          let i = v.Z.getChannel(t);
          return null != i && x.Z.can(N.Plq.CONNECT, i) && !n.has(t) && e.push(t), e
        }, [])))
      }, [e]);
    return {
      friendVoiceChannelIds: e,
      recentVoiceChannelIds: t
    }
  }();
  return l.length > 0 || s.length > 0 ? (0, i.jsxs)(c.zJl, {
    className: a()(T.channelList, T.channelListWrapper),
    children: [l.length > 0 && (0, i.jsx)(z, {
      sectionHeader: w.intl.string(w.t.lnk2NQ),
      channelIds: l.slice(0, 3),
      hasQuery: false,
      query: t,
      currentVoiceChannel: n,
      onSelect: e => r(e, "recent channel"),
      scrollable: false
    }), s.length > 0 && (0, i.jsx)(z, {
      sectionHeader: w.intl.string(w.t["0lvb9O"]),
      channelIds: s.slice(0, 8),
      hasQuery: false,
      query: t,
      currentVoiceChannel: n,
      onSelect: e => r(e, "friend channel"),
      scrollable: false
    })]
  }) : (0, i.jsx)(M, {
    emptyText: w.intl.string(w.t["3ET7Ay"])
  })
}

function U(e) {
  e.stopPropagation()
}

function W(e) {
  var t, n;
  let {
    currentVoiceChannel: l,
    onClose: a,
    onSelect: s
  } = e, u = (0, o.Wu)([S.Z, E.ZP, j.Z, I.Z, x.Z], () => S.Z.getGuildsArray().reduce((e, t) => [...e, ...E.ZP.getChannels(t.id)[E.Zb].filter(e => x.Z.can(N.Plq.VIEW_CHANNEL, e.channel) && x.Z.can(N.Plq.CONNECT, e.channel)).map(e => {
    let {
      channel: t
    } = e;
    return t
  })], []).map(e => ({
    channel: e,
    voiceStates: Object.values(j.Z.getVoiceStatesForChannel(e.id)).filter(e => I.Z.isFriend(e.userId))
  })), []), [d, f] = r.useState(""), [h, p] = r.useState([]);
  (0, y.BO)(d, u, p, A);
  let m = r.useCallback(e => {
      "Escape" === e.key && a()
    }, [a]),
    g = r.useCallback((e, t) => {
      s(e, t), a()
    }, [s, a]);
  r.useEffect(() => (document.addEventListener("keydown", m, true), () => {
    document.removeEventListener("keydown", m, true)
  }), [a, m]);
  let b = "" !== d.trim(),
    O = h.length > 20,
    v = {
      count: O ? 20 : h.length
    },
    C = r.useMemo(() => ({
      onMouseDown: U,
      onMouseMove: U,
      onMouseUp: U,
      onMouseEnter: U,
      onMouseLeave: U
    }), []);
  return (0, i.jsxs)("div", (t = function(e) {
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
  }({
    className: T.recentChannelsMenu
  }, C), n = n = {
    children: [(0, i.jsx)("div", {
      className: T.searchBarContainer,
      children: (0, i.jsx)(c.E1j, {
        autoFocus: true,
        query: d,
        placeholder: w.intl.string(w.t.UyA6ST),
        onClear: () => {
          f("")
        },
        onKeyDown: m,
        onChange: e => {
          f(e)
        },
        inputProps: {
          "aria-label": w.intl.string(w.t.UyA6ST)
        }
      })
    }), b ? (0, i.jsx)(z, {
      sectionHeader: O ? w.intl.format(w.t.qdXiQ1, v) : w.intl.format(w.t["Aq+8wB"], v),
      channelIds: h.map(e => {
        let {
          channel: t
        } = e;
        return t.id
      }).slice(0, 20),
      hasQuery: b,
      query: d,
      currentVoiceChannel: l,
      onSelect: e => g(e, "search channel")
    }) : (0, i.jsx)(V, {
      searchQuery: d,
      currentVoiceChannel: l,
      onSelect: g
    })]
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