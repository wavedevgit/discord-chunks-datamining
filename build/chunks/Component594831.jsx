/** Chunk was on 7685 **/
/** chunk id: 594831, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Ay: () => B,
  Dz: () => k,
  MV: () => P,
  S4: () => G,
  qZ: () => L
}), require("./114821.js"), require("./339614.js"), require("./896048.js"), require("./638769.js"), require("./733351.js"), require("./321073.js"), require("./864466.js"), require("./443073.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
let w = e => [e.userId, ... function(e) {
    let t = T.default.getUser(e.userId);
    if (null == t) return [];
    let n = t.username,
      l = (0, p.jP)(t);
    return Array.from(new Set([n, l.nick, ...Object.values(l.names)].flat().filter(C.Vq)))
  }(e)],
  P = {
    searchType: Chunk379078.n.FUZZY,
    sortType: Chunk379078.r.JARO_WINKLER,
    searchStringGenerator: e => {
      var t, n;
      let {
        channel: l,
        voiceStates: r
      } = e;
      return [l.name, l.id, l.guild_id, null != (t = null == (n = O.A.getGuild(l.guild_id)) ? true : n.name) ? t : "", ...(null != r ? r : []).flatMap(e => w(e))].filter(C.Vq)
    },
    throttleMs: 100
  },
  R = {
    searchType: Chunk379078.n.FUZZY,
    sortType: Chunk379078.r.JARO_WINKLER,
    searchStringGenerator: w,
    throttleMs: 100
  },
  U = Chunk64700.memo(function(e) {
    let {
      channel: t,
      query: n
    } = e, [i] = (0, a.bG)([_.A], () => [_.A.getVoiceStatesForChannel(t.id), _.A.getVoiceStateVersion()], [t.id], x.D), [s, c] = r.useState([]);
    (0, E.RT)(n, Object.values(i), c, R);
    let d = (0, a.yK)([_.A, T.default, A.A, N.A], () => Object.values(_.A.getVoiceStatesForChannel(t.id)).map(e => T.default.getUser(e.userId)).filter(C.Vq).sort((e, t) => {
        var l, r, i, a;
        if (s.length > 0 && "" !== n.trim()) {
          if (s.some(t => t.userId === e.id)) return false;
          if (s.some(e => e.userId === t.id)) return 1
        }
        return N.A.isFriend(e.id) && !N.A.isFriend(t.id) ? false : !N.A.isFriend(e.id) && N.A.isFriend(t.id) ? 1 : (null != (l = null == (i = A.A.getUserAffinity(t.id)) ? true : i.vcProbability) ? l : 0) - (null != (r = null == (a = A.A.getUserAffinity(e.id)) ? true : a.vcProbability) ? r : 0)
      }), [t.id, s, n]),
      h = t.getGuildId(),
      g = Math.max(s.length, 2);
    return null == h ? null : (0, l.jsx)(o.A, {
      users: d,
      guildId: h,
      maxUsers: Math.min(g, 4),
      size: u._3J.SIZE_24,
      overflowCountClassName: j.mB,
      overflowCountVariant: "text-xs/semibold",
      disableUserPopout: true,
      "aria-label": M.intl.string(M.t.TxqPQR)
    })
  });

function G() {
  let e, t = (e = (0, a.yK)([T.default, N.A, A.A], () => N.A.getFriendIDs().sort((e, t) => {
      var n, l, r, i;
      return null == e && null == t ? 0 : null == e ? 1 : null == t ? false : (null != (n = null == (r = A.A.getUserAffinity(t)) ? true : r.communicationProbability) ? n : 0) - (null != (l = null == (i = A.A.getUserAffinity(e)) ? true : i.communicationProbability) ? l : 0)
    }).reduce((e, t) => {
      let n = T.default.getUser(t);
      return null != n && e.push(n), e
    }, []), []), (0, a.yK)([_.A, S.A, b.A], () => Array.from(e.map(e => _.A.getDiscoverableVoiceStateForUser(e.id)).reduce((e, t) => {
      let n = null == t ? true : t.channelId;
      if (null == n) return e;
      let l = S.A.getChannel(n);
      return null != l && b.A.can(D.xBc.VIEW_CHANNEL, l) && b.A.can(D.xBc.CONNECT, l) && e.add(n), e
    }, new Set)).filter(C.Vq), [e])),
    n = (0, a.yK)([I.A, S.A, b.A], () => {
      let e = I.A.getVoiceChannelHistory(),
        n = new Set(t);
      return Array.from(new Set(e.reduce((e, t) => {
        let l = S.A.getChannel(t);
        return null != l && b.A.can(D.xBc.VIEW_CHANNEL, l) && b.A.can(D.xBc.CONNECT, l) && !n.has(t) && e.push(t), e
      }, [])))
    }, [t]);
  return {
    friendVoiceChannelIds: t,
    recentVoiceChannelIds: n
  }
}

function L() {
  return (0, a.yK)([O.A, v.Ay, _.A, N.A, b.A], () => O.A.getGuildsArray().reduce((e, t) => [...e, ...v.Ay.getChannels(t.id)[v.vM].filter(e => b.A.can(D.xBc.VIEW_CHANNEL, e.channel) && b.A.can(D.xBc.CONNECT, e.channel)).map(e => {
    let {
      channel: t
    } = e;
    return t
  })], []).map(e => ({
    channel: e,
    voiceStates: Object.values(_.A.getVoiceStatesForChannel(e.id)).filter(e => N.A.isFriend(e.userId))
  })), [])
}

function k() {
  return (0, a.yK)([O.A, v.Ay, b.A], () => O.A.getGuildsArray().reduce((e, t) => [...e, ...v.Ay.getChannels(t.id)[v.I6].map(e => {
    let {
      channel: t
    } = e;
    return t
  }).filter(e => null != e && !!(0, y.pQ)(e.type) && b.A.can(D.xBc.VIEW_CHANNEL, e))], []).map(e => ({
    channel: e,
    voiceStates: []
  })), [])
}
let F = Chunk64700.memo(function(e) {
    var t;
    let {
      channel: n
    } = e, r = n.getGuildId(), i = (0, a.bG)([O.A], () => O.A.getGuild(r), [r]);
    if (null == i) switch (n.type) {
      case D.rbe.DM:
        return (0, l.jsx)(f.Pk, {
          channel: n,
          size: u._3J.SIZE_32
        });
      case D.rbe.GROUP_DM:
        return (0, l.jsx)(f.IC, {
          channel: n,
          size: u._3J.SIZE_32
        });
      default:
        return null
    }
    return (0, l.jsx)(h.Ay, {
      mask: h.hW.CLAN_ICON,
      width: 32,
      height: 32,
      children: (0, l.jsx)("div", {
        className: j.Ko,
        children: (0, l.jsx)(g.j, {
          guildId: i.id,
          guildName: null != (t = i.name) ? t : M.intl.string(M.t.DmIUGK),
          guildIcon: i.icon,
          iconSize: 32
        })
      })
    })
  }),
  V = Chunk64700.memo(function(e) {
    var t;
    let {
      channelId: n,
      isHighlighted: r,
      currentVoiceChannel: i,
      onClick: o,
      onMouseOver: h,
      onMouseLeave: g,
      query: f,
      showVoiceAvatars: p = true
    } = e, I = (0, a.bG)([S.A], () => S.A.getChannel(n), [n]), m = null == I ? true : I.getGuildId(), E = (0, a.bG)([O.A], () => O.A.getGuild(m), [m]), A = (0, d.gU)(I, E), y = (null == i ? true : i.id) === n, v = y ? "text-feedback-positive" : r ? "interactive-text-active" : "text-muted", b = y ? u.LU0.colors.TEXT_FEEDBACK_POSITIVE : r ? u.LU0.colors.INTERACTIVE_TEXT_ACTIVE : u.LU0.colors.ICON_MUTED;
    return null == I ? null : (0, l.jsxs)(u.sqX, {
      className: s()(j.Uw, r && j.gt),
      "aria-label": I.name,
      onClick: () => o(n),
      onMouseOver: () => h(n),
      onMouseLeave: () => g(n),
      children: [(0, l.jsx)("div", {
        className: j._N,
        children: (0, l.jsx)(F, {
          channel: I
        })
      }), (0, l.jsxs)("div", {
        className: j.rg,
        children: [(0, l.jsxs)("div", {
          className: j.Ks,
          children: [null != A ? (0, l.jsx)(A, {
            color: b,
            size: "xs",
            className: j.p
          }) : true, (0, l.jsx)(u.Text, {
            variant: y ? "text-sm/semibold" : "text-sm/medium",
            color: v,
            className: j.rU,
            children: (0, c.m1)(I, T.default, N.A)
          })]
        }), (0, l.jsx)(u.Text, {
          variant: y ? "text-xs/semibold" : "text-xs/medium",
          color: v,
          children: null != (t = null == E ? true : E.name) ? t : I.name
        })]
      }), (0, l.jsx)("div", {
        className: j.vU,
        children: p ? (0, l.jsx)(U, {
          channel: I,
          currentVoiceChannel: i,
          query: f
        }) : null
      })]
    })
  }),
  H = Chunk64700.memo(function(e) {
    let {
      emptyText: t
    } = e;
    return (0, l.jsx)("div", {
      className: j.KJ,
      children: (0, l.jsx)(u.Text, {
        variant: "text-md/normal",
        color: "text-strong",
        children: t
      })
    })
  }),
  Y = Chunk64700.memo(function(e) {
    let {
      sectionHeader: t,
      channelIds: n,
      currentVoiceChannel: i,
      onSelect: s,
      hasQuery: a,
      query: o,
      scrollable: c = true,
      showVoiceAvatars: d = true
    } = e, [h, g] = r.useState(null), f = e => {
      g(e)
    }, p = () => {
      g(null)
    }, I = c ? u.IpV : "div";
    return (0, l.jsxs)("div", {
      children: [(0, l.jsx)("div", {
        className: j.qs,
        children: (0, l.jsx)(u.Text, {
          variant: "text-sm/semibold",
          color: "text-muted",
          children: t
        })
      }), (0, l.jsxs)(I, {
        className: j.o5,
        children: [a && 0 === n.length && (0, l.jsx)(H, {
          emptyText: M.intl.string(M.t.nxSS03)
        }), n.map(e => (0, l.jsx)(V, {
          channelId: e,
          isHighlighted: e === h,
          currentVoiceChannel: i,
          onClick: () => {
            s(e)
          },
          onMouseOver: f,
          onMouseLeave: p,
          query: o,
          showVoiceAvatars: d
        }, e))]
      })]
    })
  });

function W(e) {
  let {
    searchQuery: t,
    currentVoiceChannel: n,
    onSelect: r
  } = e, {
    recentVoiceChannelIds: i,
    friendVoiceChannelIds: a
  } = G();
  return i.length > 0 || a.length > 0 ? (0, l.jsxs)(u.IpV, {
    className: s()(j.o5, j.Hc),
    children: [i.length > 0 && (0, l.jsx)(Y, {
      sectionHeader: M.intl.string(M.t.lnk2NQ),
      channelIds: i.slice(0, 3),
      hasQuery: false,
      query: t,
      currentVoiceChannel: n,
      onSelect: e => r(e, "recent channel"),
      scrollable: false
    }), a.length > 0 && (0, l.jsx)(Y, {
      sectionHeader: M.intl.string(M.t["0lvb9O"]),
      channelIds: a.slice(0, 8),
      hasQuery: false,
      query: t,
      currentVoiceChannel: n,
      onSelect: e => r(e, "friend channel"),
      scrollable: false
    })]
  }) : (0, l.jsx)(H, {
    emptyText: M.intl.string(M.t["3ET7Ay"])
  })
}

function z(e) {
  e.stopPropagation()
}

function B(e) {
  var t, n;
  let {
    currentVoiceChannel: i,
    onClose: s,
    onSelect: a,
    allAvailableChannelRows: o
  } = e, [c, d] = r.useState(""), [h, g] = r.useState([]);
  (0, E.RT)(c, o, g, P);
  let f = r.useCallback(e => {
      "Escape" === e.key && s()
    }, [s]),
    p = r.useCallback((e, t) => {
      a(e, t), s()
    }, [a, s]);
  r.useEffect(() => (document.addEventListener("keydown", f, true), () => {
    document.removeEventListener("keydown", f, true)
  }), [s, f]);
  let I = "" !== c.trim(),
    m = h.length > 20,
    A = {
      count: m ? 20 : h.length
    },
    y = r.useMemo(() => ({
      onMouseDown: z,
      onMouseMove: z,
      onMouseUp: z,
      onMouseEnter: z,
      onMouseLeave: z
    }), []);
  return (0, l.jsxs)("div", (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        l = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), l.forEach(function(t) {
        var l;
        l = n[t], t in e ? Object.defineProperty(e, t, {
          value: l,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = l
      })
    }
    return e
  }({
    className: j.Dz
  }, y), n = n = {
    children: [(0, l.jsx)("div", {
      className: j.PP,
      children: (0, l.jsx)(u.IWV, {
        autoFocus: true,
        query: c,
        placeholder: M.intl.string(M.t.UyA6ST),
        onClear: () => {
          d("")
        },
        onKeyDown: f,
        onChange: e => {
          d(e)
        },
        inputProps: {
          "aria-label": M.intl.string(M.t.UyA6ST)
        }
      })
    }), I ? (0, l.jsx)(Y, {
      sectionHeader: m ? M.intl.format(M.t.qdXiQ1, A) : M.intl.format(M.t["Aq+8wB"], A),
      channelIds: h.map(e => {
        let {
          channel: t
        } = e;
        return t.id
      }).slice(0, 20),
      hasQuery: I,
      query: c,
      currentVoiceChannel: i,
      onSelect: e => p(e, "search channel"),
      showVoiceAvatars: true
    }) : (0, l.jsx)(W, {
      searchQuery: c,
      currentVoiceChannel: i,
      onSelect: p
    })]
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}