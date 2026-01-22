/** Chunk was on 71447 **/
/** chunk id: 594831, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => H
}), require("./114821.js"), require("./339614.js"), require("./896048.js"), require("./638769.js"), require("./733351.js"), require("./321073.js"), require("./864466.js"), require("./443073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk342952 = require("./342952.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk145497 = require("./145497.jsx"),
  Chunk166444 = require("./166444.jsx"),
  Chunk565860 = require("./565860.js"),
  Chunk648427 = require("./648427.js"),
  Chunk379078 = require("./379078.js"),
  Chunk704554 = require("./704554.js"),
  Chunk21119 = require("./21119.js"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk977997 = require("./977997.js"),
  Chunk403362 = require("./403362.js"),
  Chunk996439 = require("./996439.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk953679 = require("./953679.js");
let P = e => [e.userId, ... function(e) {
    let t = j.default.getUser(e.userId);
    if (null == t) return [];
    let n = t.username,
      i = (0, m.jP)(t);
    return Array.from(new Set([n, i.nick, ...Object.values(i.names)].flat().filter(N.Vq)))
  }(e)],
  D = {
    searchType: Chunk379078.n.FUZZY,
    sortType: Chunk379078.r.JARO_WINKLER,
    searchStringGenerator: e => {
      var t, n;
      let {
        channel: i,
        voiceStates: r
      } = e;
      return [i.name, i.id, i.guild_id, null != (t = null == (n = b.A.getGuild(i.guild_id)) ? true : n.name) ? t : "", ...r.flatMap(e => P(e))].filter(N.Vq)
    },
    throttleMs: 100
  },
  R = {
    searchType: Chunk379078.n.FUZZY,
    sortType: Chunk379078.r.JARO_WINKLER,
    searchStringGenerator: P,
    throttleMs: 100
  },
  L = Chunk64700.memo(function(e) {
    let {
      channel: t,
      query: n
    } = e, [l] = (0, o.bG)([I.A], () => [I.A.getVoiceStatesForChannel(t.id), I.A.getVoiceStateVersion()], [t.id], w.D), [a, u] = r.useState([]);
    (0, A.RT)(n, Object.values(l), u, R);
    let d = (0, o.yK)([I.A, j.default, O.A, x.A], () => Object.values(I.A.getVoiceStatesForChannel(t.id)).map(e => j.default.getUser(e.userId)).filter(N.Vq).sort((e, t) => {
        var i, r, l, o;
        if (a.length > 0 && "" !== n.trim()) {
          if (a.some(t => t.userId === e.id)) return false;
          if (a.some(e => e.userId === t.id)) return 1
        }
        return x.A.isFriend(e.id) && !x.A.isFriend(t.id) ? false : !x.A.isFriend(e.id) && x.A.isFriend(t.id) ? 1 : (null != (i = null == (l = O.A.getUserAffinity(t.id)) ? true : l.vcProbability) ? i : 0) - (null != (r = null == (o = O.A.getUserAffinity(e.id)) ? true : o.vcProbability) ? r : 0)
      }), [t.id, a, n]),
      p = t.getGuildId(),
      h = Math.max(a.length, 2);
    return null == p ? null : (0, i.jsx)(s.A, {
      users: d,
      guildId: p,
      maxUsers: Math.min(h, 4),
      size: c._3J.SIZE_24,
      overflowCountClassName: _.mB,
      overflowCountVariant: "text-xs/semibold",
      disableUserPopout: true,
      "aria-label": C.intl.string(C.t.TxqPQR)
    })
  }),
  k = Chunk64700.memo(function(e) {
    var t;
    let {
      channel: n
    } = e, r = n.getGuildId(), l = (0, o.bG)([b.A], () => b.A.getGuild(r), [r]);
    if (null == l) switch (n.type) {
      case T.rbe.DM:
        return (0, i.jsx)(f.Pk, {
          channel: n,
          size: c._3J.SIZE_32
        });
      case T.rbe.GROUP_DM:
        return (0, i.jsx)(f.IC, {
          channel: n,
          size: c._3J.SIZE_32
        });
      default:
        return null
    }
    return (0, i.jsx)(p.Ay, {
      mask: p.hW.CLAN_ICON,
      width: 32,
      height: 32,
      children: (0, i.jsx)("div", {
        className: _.Ko,
        children: (0, i.jsx)(h.j, {
          guildId: l.id,
          guildName: null != (t = l.name) ? t : C.intl.string(C.t.DmIUGK),
          guildIcon: l.icon,
          iconSize: 32
        })
      })
    })
  }),
  M = Chunk64700.memo(function(e) {
    var t;
    let {
      channelId: n,
      isHighlighted: r,
      currentVoiceChannel: l,
      onClick: s,
      onMouseOver: p,
      onMouseLeave: h,
      query: f
    } = e, m = (0, o.bG)([E.A], () => E.A.getChannel(n), [n]), g = null == m ? true : m.getGuildId(), y = (0, o.bG)([b.A], () => b.A.getGuild(g), [g]), A = (0, d.gU)(m, y), O = (null == l ? true : l.id) === n, v = O ? "text-feedback-positive" : r ? "interactive-text-active" : "text-muted", S = O ? c.LU0.colors.TEXT_FEEDBACK_POSITIVE : r ? c.LU0.colors.INTERACTIVE_TEXT_ACTIVE : c.LU0.colors.ICON_MUTED;
    return null == m ? null : (0, i.jsxs)(c.sqX, {
      className: a()(_.Uw, r && _.gt),
      "aria-label": m.name,
      onClick: () => s(n),
      onMouseOver: () => p(n),
      onMouseLeave: () => h(n),
      children: [(0, i.jsx)("div", {
        className: _._N,
        children: (0, i.jsx)(k, {
          channel: m
        })
      }), (0, i.jsxs)("div", {
        className: _.rg,
        children: [(0, i.jsxs)("div", {
          className: _.Ks,
          children: [null != A ? (0, i.jsx)(A, {
            color: S,
            size: "xs",
            className: _.p
          }) : true, (0, i.jsx)(c.Text, {
            variant: O ? "text-sm/semibold" : "text-sm/medium",
            color: v,
            className: _.rU,
            children: (0, u.m1)(m, j.default, x.A)
          })]
        }), (0, i.jsx)(c.Text, {
          variant: O ? "text-xs/semibold" : "text-xs/medium",
          color: v,
          children: null != (t = null == y ? true : y.name) ? t : m.name
        })]
      }), (0, i.jsx)("div", {
        className: _.vU,
        children: (0, i.jsx)(L, {
          channel: m,
          currentVoiceChannel: l,
          query: f
        })
      })]
    })
  }),
  V = Chunk64700.memo(function(e) {
    let {
      emptyText: t
    } = e;
    return (0, i.jsx)("div", {
      className: _.KJ,
      children: (0, i.jsx)(c.Text, {
        variant: "text-md/normal",
        color: "text-strong",
        children: t
      })
    })
  }),
  U = Chunk64700.memo(function(e) {
    let {
      sectionHeader: t,
      channelIds: n,
      currentVoiceChannel: l,
      onSelect: a,
      hasQuery: o,
      query: s,
      scrollable: u = true
    } = e, [d, p] = r.useState(null), h = e => {
      p(e)
    }, f = () => {
      p(null)
    }, m = u ? c.IpV : "div";
    return (0, i.jsxs)("div", {
      children: [(0, i.jsx)("div", {
        className: _.qs,
        children: (0, i.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "text-muted",
          children: t
        })
      }), (0, i.jsxs)(m, {
        className: _.o5,
        children: [o && 0 === n.length && (0, i.jsx)(V, {
          emptyText: C.intl.string(C.t.nxSS03)
        }), n.map(e => (0, i.jsx)(M, {
          channelId: e,
          isHighlighted: e === d,
          currentVoiceChannel: l,
          onClick: () => {
            a(e)
          },
          onMouseOver: h,
          onMouseLeave: f,
          query: s
        }, e))]
      })]
    })
  });

function z(e) {
  let t, n, r, {
      searchQuery: l,
      currentVoiceChannel: s,
      onSelect: u
    } = e,
    {
      recentVoiceChannelIds: d,
      friendVoiceChannelIds: p
    } = (t = (0, o.yK)([j.default, x.A, O.A], () => x.A.getFriendIDs().sort((e, t) => {
      var n, i, r, l;
      return null == e && null == t ? 0 : null == e ? 1 : null == t ? false : (null != (n = null == (r = O.A.getUserAffinity(t)) ? true : r.communicationProbability) ? n : 0) - (null != (i = null == (l = O.A.getUserAffinity(e)) ? true : l.communicationProbability) ? i : 0)
    }).reduce((e, t) => {
      let n = j.default.getUser(t);
      return null != n && e.push(n), e
    }, []), []), n = (0, o.yK)([I.A, E.A, S.A], () => Array.from(t.map(e => I.A.getDiscoverableVoiceStateForUser(e.id)).reduce((e, t) => {
      let n = null == t ? true : t.channelId;
      if (null == n) return e;
      let i = E.A.getChannel(n);
      return null != i && S.A.can(T.xBc.CONNECT, i) && e.add(n), e
    }, new Set)).filter(N.Vq), [t]), r = (0, o.yK)([g.A, E.A, S.A], () => {
      let e = g.A.getChannelHistory(),
        t = new Set(n);
      return Array.from(new Set(e.reduce((e, n) => {
        let i = E.A.getChannel(n);
        return null != i && S.A.can(T.xBc.CONNECT, i) && !t.has(n) && e.push(n), e
      }, [])))
    }, [n]), {
      friendVoiceChannelIds: n,
      recentVoiceChannelIds: r
    });
  return d.length > 0 || p.length > 0 ? (0, i.jsxs)(c.IpV, {
    className: a()(_.o5, _.Hc),
    children: [d.length > 0 && (0, i.jsx)(U, {
      sectionHeader: C.intl.string(C.t.lnk2NQ),
      channelIds: d.slice(0, 3),
      hasQuery: false,
      query: l,
      currentVoiceChannel: s,
      onSelect: e => u(e, "recent channel"),
      scrollable: false
    }), p.length > 0 && (0, i.jsx)(U, {
      sectionHeader: C.intl.string(C.t["0lvb9O"]),
      channelIds: p.slice(0, 8),
      hasQuery: false,
      query: l,
      currentVoiceChannel: s,
      onSelect: e => u(e, "friend channel"),
      scrollable: false
    })]
  }) : (0, i.jsx)(V, {
    emptyText: C.intl.string(C.t["3ET7Ay"])
  })
}

function G(e) {
  e.stopPropagation()
}

function H(e) {
  var t, n;
  let {
    currentVoiceChannel: l,
    onClose: a,
    onSelect: s
  } = e, u = (0, o.yK)([b.A, v.Ay, I.A, x.A, S.A], () => b.A.getGuildsArray().reduce((e, t) => [...e, ...v.Ay.getChannels(t.id)[v.vM].filter(e => S.A.can(T.xBc.VIEW_CHANNEL, e.channel) && S.A.can(T.xBc.CONNECT, e.channel)).map(e => {
    let {
      channel: t
    } = e;
    return t
  })], []).map(e => ({
    channel: e,
    voiceStates: Object.values(I.A.getVoiceStatesForChannel(e.id)).filter(e => x.A.isFriend(e.userId))
  })), []), [d, p] = r.useState(""), [h, f] = r.useState([]);
  (0, A.RT)(d, u, f, D);
  let m = r.useCallback(e => {
      "Escape" === e.key && a()
    }, [a]),
    g = r.useCallback((e, t) => {
      s(e, t), a()
    }, [s, a]);
  r.useEffect(() => (document.addEventListener("keydown", m, true), () => {
    document.removeEventListener("keydown", m, true)
  }), [a, m]);
  let y = "" !== d.trim(),
    O = h.length > 20,
    E = {
      count: O ? 20 : h.length
    },
    j = r.useMemo(() => ({
      onMouseDown: G,
      onMouseMove: G,
      onMouseUp: G,
      onMouseEnter: G,
      onMouseLeave: G
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
    className: _.Dz
  }, j), n = n = {
    children: [(0, i.jsx)("div", {
      className: _.PP,
      children: (0, i.jsx)(c.IWV, {
        autoFocus: true,
        query: d,
        placeholder: C.intl.string(C.t.UyA6ST),
        onClear: () => {
          p("")
        },
        onKeyDown: m,
        onChange: e => {
          p(e)
        },
        inputProps: {
          "aria-label": C.intl.string(C.t.UyA6ST)
        }
      })
    }), y ? (0, i.jsx)(U, {
      sectionHeader: O ? C.intl.format(C.t.qdXiQ1, E) : C.intl.format(C.t["Aq+8wB"], E),
      channelIds: h.map(e => {
        let {
          channel: t
        } = e;
        return t.id
      }).slice(0, 20),
      hasQuery: y,
      query: d,
      currentVoiceChannel: l,
      onSelect: e => g(e, "search channel")
    }) : (0, i.jsx)(z, {
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