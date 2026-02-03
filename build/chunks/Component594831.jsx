/** Chunk was on 71447 **/
/** chunk id: 594831, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => K,
  Dz: () => G,
  MV: () => R,
  S4: () => L,
  qZ: () => U
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
  Chunk95701 = require("./95701.js"),
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
let D = e => [e.userId, ... function(e) {
    let t = I.default.getUser(e.userId);
    if (null == t) return [];
    let n = t.username,
      i = (0, g.jP)(t);
    return Array.from(new Set([n, i.nick, ...Object.values(i.names)].flat().filter(T.Vq)))
  }(e)],
  R = {
    searchType: Chunk379078.n.FUZZY,
    sortType: Chunk379078.r.JARO_WINKLER,
    searchStringGenerator: e => {
      var t, n;
      let {
        channel: i,
        voiceStates: r
      } = e;
      return [i.name, i.id, i.guild_id, null != (t = null == (n = x.A.getGuild(i.guild_id)) ? true : n.name) ? t : "", ...(null != r ? r : []).flatMap(e => D(e))].filter(T.Vq)
    },
    throttleMs: 100
  },
  k = {
    searchType: Chunk379078.n.FUZZY,
    sortType: Chunk379078.r.JARO_WINKLER,
    searchStringGenerator: D,
    throttleMs: 100
  },
  M = Chunk64700.memo(function(e) {
    let {
      channel: t,
      query: n
    } = e, [l] = (0, s.bG)([j.A], () => [j.A.getVoiceStatesForChannel(t.id), j.A.getVoiceStateVersion()], [t.id], C.D), [a, c] = r.useState([]);
    (0, A.RT)(n, Object.values(l), c, k);
    let d = (0, s.yK)([j.A, I.default, v.A, S.A], () => Object.values(j.A.getVoiceStatesForChannel(t.id)).map(e => I.default.getUser(e.userId)).filter(T.Vq).sort((e, t) => {
        var i, r, l, s;
        if (a.length > 0 && "" !== n.trim()) {
          if (a.some(t => t.userId === e.id)) return false;
          if (a.some(e => e.userId === t.id)) return 1
        }
        return S.A.isFriend(e.id) && !S.A.isFriend(t.id) ? false : !S.A.isFriend(e.id) && S.A.isFriend(t.id) ? 1 : (null != (i = null == (l = v.A.getUserAffinity(t.id)) ? true : l.vcProbability) ? i : 0) - (null != (r = null == (s = v.A.getUserAffinity(e.id)) ? true : s.vcProbability) ? r : 0)
      }), [t.id, a, n]),
      h = t.getGuildId(),
      p = Math.max(a.length, 2);
    return null == h ? null : (0, i.jsx)(o.A, {
      users: d,
      guildId: h,
      maxUsers: Math.min(p, 4),
      size: u._3J.SIZE_24,
      overflowCountClassName: P.mB,
      overflowCountVariant: "text-xs/semibold",
      disableUserPopout: true,
      "aria-label": w.intl.string(w.t.TxqPQR)
    })
  });

function L() {
  let e, t = (e = (0, s.yK)([I.default, S.A, v.A], () => S.A.getFriendIDs().sort((e, t) => {
      var n, i, r, l;
      return null == e && null == t ? 0 : null == e ? 1 : null == t ? false : (null != (n = null == (r = v.A.getUserAffinity(t)) ? true : r.communicationProbability) ? n : 0) - (null != (i = null == (l = v.A.getUserAffinity(e)) ? true : l.communicationProbability) ? i : 0)
    }).reduce((e, t) => {
      let n = I.default.getUser(t);
      return null != n && e.push(n), e
    }, []), []), (0, s.yK)([j.A, E.A, _.A], () => Array.from(e.map(e => j.A.getDiscoverableVoiceStateForUser(e.id)).reduce((e, t) => {
      let n = null == t ? true : t.channelId;
      if (null == n) return e;
      let i = E.A.getChannel(n);
      return null != i && _.A.can(N.xBc.VIEW_CHANNEL, i) && _.A.can(N.xBc.CONNECT, i) && e.add(n), e
    }, new Set)).filter(T.Vq), [e])),
    n = (0, s.yK)([m.A, E.A, _.A], () => {
      let e = m.A.getVoiceChannelHistory(),
        n = new Set(t);
      return Array.from(new Set(e.reduce((e, t) => {
        let i = E.A.getChannel(t);
        return null != i && _.A.can(N.xBc.VIEW_CHANNEL, i) && _.A.can(N.xBc.CONNECT, i) && !n.has(t) && e.push(t), e
      }, [])))
    }, [t]);
  return {
    friendVoiceChannelIds: t,
    recentVoiceChannelIds: n
  }
}

function U() {
  return (0, s.yK)([x.A, O.Ay, j.A, S.A, _.A], () => x.A.getGuildsArray().reduce((e, t) => [...e, ...O.Ay.getChannels(t.id)[O.vM].filter(e => _.A.can(N.xBc.VIEW_CHANNEL, e.channel) && _.A.can(N.xBc.CONNECT, e.channel)).map(e => {
    let {
      channel: t
    } = e;
    return t
  })], []).map(e => ({
    channel: e,
    voiceStates: Object.values(j.A.getVoiceStatesForChannel(e.id)).filter(e => S.A.isFriend(e.userId))
  })), [])
}

function G() {
  return (0, s.yK)([x.A, O.Ay, _.A], () => x.A.getGuildsArray().reduce((e, t) => [...e, ...O.Ay.getChannels(t.id)[O.I6].map(e => {
    let {
      channel: t
    } = e;
    return t
  }).filter(e => null != e && !!(0, b.pQ)(e.type) && _.A.can(N.xBc.VIEW_CHANNEL, e))], []).map(e => ({
    channel: e,
    voiceStates: []
  })), [])
}
let V = Chunk64700.memo(function(e) {
    var t;
    let {
      channel: n
    } = e, r = n.getGuildId(), l = (0, s.bG)([x.A], () => x.A.getGuild(r), [r]);
    if (null == l) switch (n.type) {
      case N.rbe.DM:
        return (0, i.jsx)(f.Pk, {
          channel: n,
          size: u._3J.SIZE_32
        });
      case N.rbe.GROUP_DM:
        return (0, i.jsx)(f.IC, {
          channel: n,
          size: u._3J.SIZE_32
        });
      default:
        return null
    }
    return (0, i.jsx)(h.Ay, {
      mask: h.hW.CLAN_ICON,
      width: 32,
      height: 32,
      children: (0, i.jsx)("div", {
        className: P.Ko,
        children: (0, i.jsx)(p.j, {
          guildId: l.id,
          guildName: null != (t = l.name) ? t : w.intl.string(w.t.DmIUGK),
          guildIcon: l.icon,
          iconSize: 32
        })
      })
    })
  }),
  z = Chunk64700.memo(function(e) {
    var t;
    let {
      channelId: n,
      isHighlighted: r,
      currentVoiceChannel: l,
      onClick: o,
      onMouseOver: h,
      onMouseLeave: p,
      query: f,
      showVoiceAvatars: g = true
    } = e, m = (0, s.bG)([E.A], () => E.A.getChannel(n), [n]), y = null == m ? true : m.getGuildId(), A = (0, s.bG)([x.A], () => x.A.getGuild(y), [y]), v = (0, d.gU)(m, A), b = (null == l ? true : l.id) === n, O = b ? "text-feedback-positive" : r ? "interactive-text-active" : "text-muted", _ = b ? u.LU0.colors.TEXT_FEEDBACK_POSITIVE : r ? u.LU0.colors.INTERACTIVE_TEXT_ACTIVE : u.LU0.colors.ICON_MUTED;
    return null == m ? null : (0, i.jsxs)(u.sqX, {
      className: a()(P.Uw, r && P.gt),
      "aria-label": m.name,
      onClick: () => o(n),
      onMouseOver: () => h(n),
      onMouseLeave: () => p(n),
      children: [(0, i.jsx)("div", {
        className: P._N,
        children: (0, i.jsx)(V, {
          channel: m
        })
      }), (0, i.jsxs)("div", {
        className: P.rg,
        children: [(0, i.jsxs)("div", {
          className: P.Ks,
          children: [null != v ? (0, i.jsx)(v, {
            color: _,
            size: "xs",
            className: P.p
          }) : true, (0, i.jsx)(u.Text, {
            variant: b ? "text-sm/semibold" : "text-sm/medium",
            color: O,
            className: P.rU,
            children: (0, c.m1)(m, I.default, S.A)
          })]
        }), (0, i.jsx)(u.Text, {
          variant: b ? "text-xs/semibold" : "text-xs/medium",
          color: O,
          children: null != (t = null == A ? true : A.name) ? t : m.name
        })]
      }), (0, i.jsx)("div", {
        className: P.vU,
        children: g ? (0, i.jsx)(M, {
          channel: m,
          currentVoiceChannel: l,
          query: f
        }) : null
      })]
    })
  }),
  F = Chunk64700.memo(function(e) {
    let {
      emptyText: t
    } = e;
    return (0, i.jsx)("div", {
      className: P.KJ,
      children: (0, i.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "text-strong",
        children: t
      })
    })
  }),
  H = Chunk64700.memo(function(e) {
    let {
      sectionHeader: t,
      channelIds: n,
      currentVoiceChannel: l,
      onSelect: a,
      hasQuery: s,
      query: o,
      scrollable: c = true,
      showVoiceAvatars: d = true
    } = e, [h, p] = r.useState(null), f = e => {
      p(e)
    }, g = () => {
      p(null)
    }, m = c ? u.IpV : "div";
    return (0, i.jsxs)("div", {
      children: [(0, i.jsx)("div", {
        className: P.qs,
        children: (0, i.jsx)(u.Text, {
          variant: "text-sm/semibold",
          color: "text-muted",
          children: t
        })
      }), (0, i.jsxs)(m, {
        className: P.o5,
        children: [s && 0 === n.length && (0, i.jsx)(F, {
          emptyText: w.intl.string(w.t.nxSS03)
        }), n.map(e => (0, i.jsx)(z, {
          channelId: e,
          isHighlighted: e === h,
          currentVoiceChannel: l,
          onClick: () => {
            a(e)
          },
          onMouseOver: f,
          onMouseLeave: g,
          query: o,
          showVoiceAvatars: d
        }, e))]
      })]
    })
  });

function Y(e) {
  let {
    searchQuery: t,
    currentVoiceChannel: n,
    onSelect: r
  } = e, {
    recentVoiceChannelIds: l,
    friendVoiceChannelIds: s
  } = L();
  return l.length > 0 || s.length > 0 ? (0, i.jsxs)(u.IpV, {
    className: a()(P.o5, P.Hc),
    children: [l.length > 0 && (0, i.jsx)(H, {
      sectionHeader: w.intl.string(w.t.lnk2NQ),
      channelIds: l.slice(0, 3),
      hasQuery: false,
      query: t,
      currentVoiceChannel: n,
      onSelect: e => r(e, "recent channel"),
      scrollable: false
    }), s.length > 0 && (0, i.jsx)(H, {
      sectionHeader: w.intl.string(w.t["0lvb9O"]),
      channelIds: s.slice(0, 8),
      hasQuery: false,
      query: t,
      currentVoiceChannel: n,
      onSelect: e => r(e, "friend channel"),
      scrollable: false
    })]
  }) : (0, i.jsx)(F, {
    emptyText: w.intl.string(w.t["3ET7Ay"])
  })
}

function W(e) {
  e.stopPropagation()
}

function K(e) {
  var t, n;
  let {
    currentVoiceChannel: l,
    onClose: a,
    onSelect: s,
    allAvailableChannelRows: o
  } = e, [c, d] = r.useState(""), [h, p] = r.useState([]);
  (0, A.RT)(c, o, p, R);
  let f = r.useCallback(e => {
      "Escape" === e.key && a()
    }, [a]),
    g = r.useCallback((e, t) => {
      s(e, t), a()
    }, [s, a]);
  r.useEffect(() => (document.addEventListener("keydown", f, true), () => {
    document.removeEventListener("keydown", f, true)
  }), [a, f]);
  let m = "" !== c.trim(),
    y = h.length > 20,
    v = {
      count: y ? 20 : h.length
    },
    b = r.useMemo(() => ({
      onMouseDown: W,
      onMouseMove: W,
      onMouseUp: W,
      onMouseEnter: W,
      onMouseLeave: W
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
    className: P.Dz
  }, b), n = n = {
    children: [(0, i.jsx)("div", {
      className: P.PP,
      children: (0, i.jsx)(u.IWV, {
        autoFocus: true,
        query: c,
        placeholder: w.intl.string(w.t.UyA6ST),
        onClear: () => {
          d("")
        },
        onKeyDown: f,
        onChange: e => {
          d(e)
        },
        inputProps: {
          "aria-label": w.intl.string(w.t.UyA6ST)
        }
      })
    }), m ? (0, i.jsx)(H, {
      sectionHeader: y ? w.intl.format(w.t.qdXiQ1, v) : w.intl.format(w.t["Aq+8wB"], v),
      channelIds: h.map(e => {
        let {
          channel: t
        } = e;
        return t.id
      }).slice(0, 20),
      hasQuery: m,
      query: c,
      currentVoiceChannel: l,
      onSelect: e => g(e, "search channel"),
      showVoiceAvatars: true
    }) : (0, i.jsx)(Y, {
      searchQuery: c,
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