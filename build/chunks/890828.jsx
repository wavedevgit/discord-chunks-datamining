/** Chunk was on 89298 **/
/** chunk id: 890828, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => W
}), require("./361932.js"), require("./187205.js"), require("./388685.js"), require("./642613.js"), require("./781311.js"), require("./539854.js"), require("./472816.js"), require("./794429.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk318374 = require("./318374.jsx"),
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
  Chunk688095 = require("./688095.js");
let T = e => [e.userId, ... function(e) {
    let t = I.default.getUser(e.userId);
    if (null == t) return [];
    let n = t.username,
      i = (0, m.e3)(t);
    return Array.from(new Set([n, i.nick, ...Object.values(i.names)].flat().filter(C.lm)))
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
      return [i.name, i.id, i.guild_id, null != (n = null == (t = _.Z.getGuild(i.guild_id)) ? true : t.name) ? n : "", ...r.flatMap(e => T(e))].filter(C.lm)
    },
    throttleMs: 100
  },
  k = {
    searchType: Chunk886118.S.FUZZY,
    sortType: Chunk886118.E.JARO_WINKLER,
    searchStringGenerator: T,
    throttleMs: 100
  },
  D = Chunk73800.memo(function(e) {
    let {
      channel: t,
      query: n
    } = e, [o] = (0, a.e7)([j.Z], () => [j.Z.getVoiceStatesForChannel(t.id), j.Z.getVoiceStateVersion()], [t.id], N.Q), [l, c] = r.useState([]);
    (0, O.BO)(n, Object.values(o), c, k);
    let u = (0, a.Wu)([j.Z, I.default, b.Z, S.Z], () => Object.values(j.Z.getVoiceStatesForChannel(t.id)).map(e => I.default.getUser(e.userId)).filter(C.lm).sort((e, t) => {
        var i, r, o, a;
        if (l.length > 0 && "" !== n.trim()) {
          if (l.some(t => t.userId === e.id)) return false;
          if (l.some(e => e.userId === t.id)) return 1
        }
        return S.Z.isFriend(e.id) && !S.Z.isFriend(t.id) ? false : !S.Z.isFriend(e.id) && S.Z.isFriend(t.id) ? 1 : (null != (o = null == (i = b.Z.getUserAffinity(t.id)) ? true : i.vcProbability) ? o : 0) - (null != (a = null == (r = b.Z.getUserAffinity(e.id)) ? true : r.vcProbability) ? a : 0)
      }), [t.id, l, n]),
      d = t.getGuildId(),
      f = Math.max(l.length, 2);
    return null == d ? null : <p.Z users={u} guildId={d} maxUsers={Math.min(f, 4)} size={s.EFr.SIZE_24} overflowCountClassName={P.overflowCount} overflowCountVariant={"text-xs/semibold"} disableUserPopout={true} aria-label={Z.intl.string(Z.t.TxqPQU)} />
  }),
  R = Chunk73800.memo(function(e) {
    var t;
    let {
      channel: n
    } = e, r = n.getGuildId(), o = (0, a.e7)([_.Z], () => _.Z.getGuild(r), [r]);
    if (null == o) switch (n.type) {
      case w.d4z.DM:
        return <h.je channel={n} size={s.EFr.SIZE_32} />;
      case w.d4z.GROUP_DM:
        return <h.ge channel={n} size={s.EFr.SIZE_32} />;
      default:
        return null
    }
    return <d.ZP mask={d.QS.CLAN_ICON} width={32} height={32}><div className={P.guildIconWrapper}><f.Ft guildId={o.id} guildName={null != (t = o.name) ? t : Z.intl.string(Z.t.DmIUGB)} guildIcon={o.icon} iconSize={32} /></div></d.ZP>
  }),
  L = Chunk73800.memo(function(e) {
    var t;
    let {
      channelId: n,
      isHighlighted: r,
      currentVoiceChannel: o,
      onClick: d,
      onMouseOver: p,
      onMouseLeave: f,
      query: h
    } = e, m = (0, a.e7)([v.Z], () => v.Z.getChannel(n), [n]), g = null == m ? true : m.getGuildId(), y = (0, a.e7)([_.Z], () => _.Z.getGuild(g), [g]), O = (0, u.KS)(m, y), b = (null == o ? true : o.id) === n, E = b ? "text-feedback-positive" : r ? "interactive-active" : "text-muted", x = b ? s.TVs.colors.TEXT_FEEDBACK_POSITIVE : r ? s.TVs.colors.INTERACTIVE_ACTIVE : s.TVs.colors.ICON_MUTED;
    return null == m ? null : <s.kL8 className={l()(P.channelItemContainer, r && P.channelItemHighlighted)} aria-label={m.name} onClick={() => d(n)} onMouseOver={() => p(n)} onMouseLeave={() => f(n)}>{<div className={P.channelItemIcon}><R channel={m} /></div>}{<div className={P.channelItemNameContainer}>{<div className={P.channelItemName}>{null != O ? <O color={x} size={"xs"} className={P.channelIcon} /> : true}{<s.Text variant={b ? "text-sm/semibold" : "text-sm/medium"} color={E} className={P.channelItemNameText}>{(0, c.F6)(m, I.default, S.Z)}</s.Text>}</div>}{<s.Text variant={b ? "text-xs/semibold" : "text-xs/medium"} color={E}>{null != (t = null == y ? true : y.name) ? t : m.name}</s.Text>}</div>}{<div className={P.channelItemAvatars}><D channel={m} currentVoiceChannel={o} query={h} /></div>}</s.kL8>
  }),
  M = Chunk73800.memo(function(e) {
    let {
      emptyText: t
    } = e;
    return <div className={P.emptyChannelItem}><s.Text variant={"text-md/normal"} color={"text-primary"}>{t}</s.Text></div>
  }),
  z = Chunk73800.memo(function(e) {
    let {
      sectionHeader: t,
      channelIds: n,
      currentVoiceChannel: o,
      onSelect: l,
      hasQuery: a,
      query: c,
      scrollable: u = true
    } = e, [d, p] = r.useState(null), f = e => {
      p(e)
    }, h = () => {
      p(null)
    }, m = e => () => {
      l(e)
    }, g = u ? s.zJl : "div";
    return <div>{<div className={P.recentChannelsMenuHeader}><s.Text variant={"text-sm/semibold"} color={"text-muted"}>{t}</s.Text></div>}{<g className={P.channelList}>{a && 0 === n.length && <M emptyText={Z.intl.string(Z.t.nxSS09)} />}{n.map(e => <L channelId={e} isHighlighted={e === d} currentVoiceChannel={o} onClick={m(e)} onMouseOver={f} onMouseLeave={h} query={c} />)}</g>}</div>
  });

function U(e) {
  let {
    searchQuery: t,
    currentVoiceChannel: n,
    onSelect: r
  } = e, {
    recentVoiceChannelIds: o,
    friendVoiceChannelIds: c
  } = function() {
    let e = function() {
        let e = (0, a.Wu)([I.default, S.Z, b.Z], () => S.Z.getFriendIDs().sort((e, t) => {
          var n, i, r, o;
          return null == e && null == t ? 0 : null == e ? 1 : null == t ? false : (null != (r = null == (n = b.Z.getUserAffinity(t)) ? true : n.communicationProbability) ? r : 0) - (null != (o = null == (i = b.Z.getUserAffinity(e)) ? true : i.communicationProbability) ? o : 0)
        }).reduce((e, t) => {
          let n = I.default.getUser(t);
          return null != n && e.push(n), e
        }, []), []);
        return (0, a.Wu)([j.Z, v.Z, x.Z], () => Array.from(e.map(e => j.Z.getDiscoverableVoiceStateForUser(e.id)).reduce((e, t) => {
          let n = null == t ? true : t.channelId;
          if (null == n) return e;
          let i = v.Z.getChannel(n);
          return null != i && x.Z.can(w.Plq.CONNECT, i) && e.add(n), e
        }, new Set)).filter(C.lm), [e])
      }(),
      t = (0, a.Wu)([g.Z, v.Z, x.Z], () => {
        let t = g.Z.getChannelHistory(),
          n = new Set(e);
        return Array.from(new Set(t.reduce((e, t) => {
          let i = v.Z.getChannel(t);
          return null != i && x.Z.can(w.Plq.CONNECT, i) && !n.has(t) && e.push(t), e
        }, [])))
      }, [e]);
    return {
      friendVoiceChannelIds: e,
      recentVoiceChannelIds: t
    }
  }();
  return o.length > 0 || c.length > 0 ? <s.zJl className={l()(P.channelList, P.channelListWrapper)}>{o.length > 0 && <z sectionHeader={Z.intl.string(Z.t.lnk2NT)} channelIds={o.slice(0, 3)} hasQuery={false} query={t} currentVoiceChannel={n} onSelect={r} scrollable={false} />}{c.length > 0 && <z sectionHeader={Z.intl.string(Z.t["0lvb9P"])} channelIds={c.slice(0, 8)} hasQuery={false} query={t} currentVoiceChannel={n} onSelect={r} scrollable={false} />}</s.zJl> : <M emptyText={Z.intl.string(Z.t["3ET7Aw"])} />
}

function V(e) {
  e.stopPropagation()
}

function W(e) {
  var t, n;
  let {
    currentVoiceChannel: o,
    onClose: l,
    onSelect: c
  } = e, u = (0, a.Wu)([_.Z, E.ZP, j.Z, S.Z, x.Z], () => _.Z.getGuildsArray().reduce((e, t) => [...e, ...E.ZP.getChannels(t.id)[E.Zb].filter(e => x.Z.can(w.Plq.VIEW_CHANNEL, e.channel) && x.Z.can(w.Plq.CONNECT, e.channel)).map(e => {
    let {
      channel: t
    } = e;
    return t
  })], []).map(e => ({
    channel: e,
    voiceStates: Object.values(j.Z.getVoiceStatesForChannel(e.id)).filter(e => S.Z.isFriend(e.userId))
  })), []), [d, p] = r.useState(""), [f, h] = r.useState([]);
  (0, O.BO)(d, u, h, A);
  let m = r.useCallback(e => {
      "Escape" === e.key && l()
    }, [l]),
    g = r.useCallback(e => {
      c(e), l()
    }, [c, l]);
  r.useEffect(() => (document.addEventListener("keydown", m, true), () => {
    document.removeEventListener("keydown", m, true)
  }), [l, m]);
  let y = "" !== d.trim(),
    b = f.length > 20,
    v = {
      count: b ? 20 : f.length
    },
    I = r.useMemo(() => ({
      onMouseDown: V,
      onMouseMove: V,
      onMouseUp: V,
      onMouseEnter: V,
      onMouseLeave: V
    }), []);
  return <div{...t = function(e) {
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
    className: P.recentChannelsMenu
  }, I), n = n = {
    children: [(0, i.jsx)("div", {
      className: P.searchBarContainer,
      children: (0, i.jsx)(s.E1j, {
        autoFocus: true,
        query: d,
        placeholder: Z.intl.string(Z.t.UyA6SU),
        onClear: () => {
          p("")
        },
        onKeyDown: m,
        onChange: e => {
          p(e)
        },
        className: P.searchBar,
        inputProps: {
          "aria-label": Z.intl.string(Z.t.UyA6SU)
        }
      })
    }), y ? (0, i.jsx)(z, {
      sectionHeader: b ? Z.intl.format(Z.t.qdXiQ0, v) : Z.intl.format(Z.t["Aq+8wM"], v),
      channelIds: f.map(e => {
        let {
          channel: t
        } = e;
        return t.id
      }).slice(0, 20),
      hasQuery: y,
      query: d,
      currentVoiceChannel: o,
      onSelect: g
    }) : (0, i.jsx)(U, {
      searchQuery: d,
      currentVoiceChannel: o,
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
  }), t} />
}