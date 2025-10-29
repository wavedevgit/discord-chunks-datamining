/** Chunk was on 35755 **/
/** chunk id: 392370, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q2: () => _,
  pe: () => A
}), require("./388685.js"), require("./539854.js"), require("./35282.js"), require("./472816.js"), require("./794429.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  r = require.n(Chunk392711),
  Chunk373793 = require("./373793.js"),
  Chunk288385 = require("./288385.js"),
  Chunk442837 = require("./442837.js"),
  Chunk911969 = require("./911969.js"),
  Chunk127255 = require("./127255.js"),
  Chunk654455 = require("./654455.js"),
  Chunk213459 = require("./213459.js"),
  Chunk807169 = require("./807169.js"),
  Chunk104793 = require("./104793.js"),
  Chunk822245 = require("./822245.js"),
  Chunk471518 = require("./471518.js"),
  Chunk177653 = require("./177653.js"),
  Chunk631827 = require("./631827.js"),
  Chunk827498 = require("./827498.js"),
  Chunk783097 = require("./783097.js"),
  Chunk689079 = require("./689079.js"),
  Chunk761652 = require("./761652.js");

function C(e, t) {
  let n = h.Z.getScoreWithoutLoadingLatest(e.id);
  return h.Z.getScoreWithoutLoadingLatest(t.id) - n
}

function E(e, t) {
  let n = (0, b.$d)(e),
    i = (0, b.$d)(t);
  return (0, p.un)(n, i)
}

function P(e, t) {
  return (0, p.un)(e.displayName, t.displayName)
}

function A(e) {
  let {
    context: t,
    query: n,
    commandLimit: l,
    applicationLimit: a,
    searchesCommands: o = true,
    searchesBots: s = true,
    searchesActivities: h = true
  } = e;
  n.startsWith("".concat(j.GI)) && (n = n.substring(1));
  let {
    commands: v,
    commandSectionMap: y,
    loading: x
  } = function(e) {
    var t, n;
    let {
      context: l,
      includeBuiltIn: r = true,
      allowFetch: a = true
    } = e, o = (0, p.em)(l, true, a), s = (0, p.PL)(true, a);
    return i.useMemo(() => {
      var e, t, n, i, a;
      let c = null != (n = null == (e = o.result) ? true : e.sections) ? n : {},
        u = null != (i = null == (t = s.result) ? true : t.sections) ? i : {},
        d = [...Object.keys(c), ...Object.keys(u).filter(e => !(e in c))];
      r && d.push(N.bi.BUILT_IN);
      let m = [],
        f = {};
      for (let e of d) {
        let t = (0, p.If)(l, e),
          n = null != (a = t.sectionCommands) ? a : [];
        m.push(...n), n.forEach(e => {
          null != t.descriptor && (f[e.id] = t.descriptor)
        })
      }
      return {
        commands: m,
        commandSectionMap: f,
        loading: true === o.fetchState.fetching || true === s.fetchState.fetching
      }
    }, [l, r, o.fetchState.fetching, null == (t = o.result) ? true : t.sections, s.fetchState.fetching, null == (n = s.result) ? true : n.sections])
  }({
    context: t,
    includeBuiltIn: true
  }), {
    apps: A
  } = function(e) {
    let {
      context: t,
      onlyWithCommands: n,
      includeBuiltIn: l,
      allowFetch: r = true,
      includeEmbeddedApps: a,
      includeNonEmbeddedApps: o
    } = e, s = "channel" === t.type ? t.channel : true, u = (0, m.Hs)(s, [c.yU.CHAT]).hasBaseAccessPermissions, d = (0, p.em)(t, u, r), f = (0, p.PL)(u, r), h = i.useCallback(e => {
      let t = e.descriptor.application;
      return null != t && (!!(a && (0, b.ye)(t)) || null != t && o && !(0, b.ye)(t) && (!n || Object.keys(e.commands).length > 0))
    }, [a, o, n]), v = [], y = new Set;
    if (null != d.result)
      for (let e of Object.values(d.result.sections)) {
        let t = e.descriptor.application;
        null != t && h(e) && (v.push(t), y.add(t.id))
      }
    if (null != f.result)
      for (let e of Object.values(f.result.sections)) {
        let t = e.descriptor.application;
        null != t && !y.has(t.id) && h(e) && v.push(t)
      }
    return o && l && v.push(b.Wx), {
      apps: v,
      loading: (null == d ? true : d.fetchState.fetching) === true || (null == f ? true : f.fetchState.fetching) === true
    }
  }({
    context: t,
    onlyWithCommands: true,
    includeBuiltIn: true,
    includeEmbeddedApps: h,
    includeNonEmbeddedApps: s
  }), _ = (0, u.Z)({
    guildId: "channel" === t.type ? t.channel.guild_id : null
  }), O = i.useMemo(() => {
    var e, i, r, a, s, u;
    if (!o) return [];
    return (0, g.N)(v, {
      limit: l,
      filterPredicates: [function(e) {
        let t = (0, m.k)("channel" === e.type ? e.channel : true, [c.yU.CHAT]),
          n = {};
        return i => {
          let {
            context: l,
            userId: r,
            roleIds: a,
            isImpersonating: o
          } = t;
          if (!(i.applicationId in n)) {
            let {
              descriptor: t,
              isGuildInstalled: s,
              isUserInstalled: c
            } = (0, p.If)(e, i.applicationId), u = (null == l ? true : l.guild_id) != null ? f.ML(null == t ? true : t.permissions, l.guild_id, r, a, o) : null, d = (null == l ? true : l.guild_id) != null ? f.ZJ(null == t ? true : t.permissions, l, l.guild_id) : null;
            n[i.applicationId] = {
              descriptor: t,
              applicationAllowedForUser: u,
              applicationAllowedForChannel: d,
              isGuildInstalled: s,
              isUserInstalled: c
            }
          }
          let {
            descriptor: s,
            applicationAllowedForChannel: c,
            applicationAllowedForUser: u,
            isGuildInstalled: d,
            isUserInstalled: m
          } = n[i.applicationId];
          return f.Ft(i, t, {
            applicationAllowedForUser: u,
            applicationAllowedForChannel: c,
            commandBotId: null == s ? true : s.botId,
            isGuildInstalled: d,
            isUserInstalled: m
          }) === f.mF.ALLOWED
        }
      }(t)],
      bucketPredicates: [(i = e = n, e => {
        let t = e.untranslatedName,
          n = e.displayName;
        return t.startsWith(i) || n.startsWith(i)
      }), function(e) {
        let t = null == e ? true : e.split(" "),
          n = t[0],
          i = t.slice(1).join(" ");
        return e => {
          let t = e.untranslatedName,
            l = e.displayName;
          return !!(t.startsWith(n) && t.split(" ").slice(1).join(" ").startsWith(i) || l.startsWith(n) && l.split(" ").slice(1).join(" ").startsWith(i)) || false
        }
      }(e), (r = e, e => {
        let t = e.untranslatedName,
          n = e.displayName;
        return t.includes(r) || n.includes(r)
      }), (a = e, e => {
        var t;
        for (let {
            name: n,
            serverLocalizedName: i
          }
          of null != (t = e.options) ? t : [])
          if (n.startsWith(a) || "".concat(e.untranslatedName, " ").concat(n).startsWith(a) || null != e.displayName && "".concat(e.displayName, " ").concat(n).startsWith(a) || null != i && (i.startsWith(a) || "".concat(e.untranslatedName, " ").concat(i).startsWith(a) || null != e.displayName && "".concat(e.displayName, " ").concat(i).startsWith(a))) returntrue;
        returnfalse
      }), (s = e, e => {
        var t;
        for (let {
            name: n,
            serverLocalizedName: i
          }
          of null != (t = e.options) ? t : [])
          if (n.includes(s) || (null == i ? true : i.includes(s))) returntrue;
        returnfalse
      })],
      sortComparers: [(u = {
        channel: "channel" === t.type ? t.channel : true
      }, (e, t) => {
        let n = d.ZP.getScoreWithoutLoadingLatest(u, e);
        return d.ZP.getScoreWithoutLoadingLatest(u, t) - n
      }), P]
    })
  }, [o, v, l, t, n]), I = i.useMemo(() => {
    if (0 === O.length) return [];
    let e = new Map(A.map(e => [e.id, e]));
    return r().compact(O.map(t => {
      var n;
      let i = e.get(t.applicationId);
      if (null == i) return null;
      let l = null != (n = y[t.id]) ? n : null;
      return {
        command: t,
        application: i,
        section: l
      }
    }))
  }, [A, O, y]), S = i.useMemo(() => {
    var e, i, l, r, o;
    let u = [];
    if (h) {
      let e = new Set(A.map(e => {
        let {
          id: t
        } = e;
        return t
      }));
      u.push(...A), u.push(..._.filter(t => {
        let {
          application: {
            id: n
          }
        } = t;
        return !e.has(n)
      }).map(e => {
        let {
          application: t
        } = e;
        return t
      }))
    } else s && (u = A);
    return (0, g.N)(u, {
      limit: a,
      filterPredicates: [function(e) {
        let t = (0, m.k)("channel" === e.type ? e.channel : true, [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT]);
        return n => {
          let {
            context: i,
            userId: l,
            roleIds: r,
            isImpersonating: a
          } = t, {
            descriptor: o,
            sectionCommands: s,
            isGuildInstalled: c,
            isUserInstalled: u
          } = (0, p.If)(e, n.id), d = (null == i ? true : i.guild_id) != null ? f.ML(null == o ? true : o.permissions, i.guild_id, l, r, a) : null, m = (null == i ? true : i.guild_id) != null ? f.ZJ(null == o ? true : o.permissions, i, i.guild_id) : null;
          return null == s || !(s.length > 0) || s.some(e => f.Ft(e, t, {
            applicationAllowedForUser: d,
            applicationAllowedForChannel: m,
            commandBotId: null == o ? true : o.botId,
            isGuildInstalled: c,
            isUserInstalled: u
          }) === f.mF.ALLOWED)
        }
      }(t)],
      bucketPredicates: [(i = e = n, e => (0, b.$d)(e).toLocaleLowerCase().startsWith(i.toLocaleLowerCase())), (l = e, e => (0, b.$d)(e).toLocaleLowerCase().includes(l.toLocaleLowerCase())), (r = e, e => {
        var t, n;
        let i = null == (t = (0, b.jD)(e)) ? true : t.toLocaleLowerCase();
        return null != (n = null == i ? true : i.startsWith(r.toLocaleLowerCase())) && n
      }), (o = e, e => {
        var t, n;
        let i = null == (t = (0, b.jD)(e)) ? true : t.toLocaleLowerCase();
        return null != (n = null == i ? true : i.includes(o.toLocaleLowerCase())) && n
      })],
      sortComparers: [C, E]
    })
  }, [s, h, a, t, n, A, _]), T = I.length > 0, L = S.length > 0;
  return {
    commandResults: I,
    hasCommandResults: T,
    applicationResults: S,
    hasApplicationResults: L,
    isEmptyState: !T && !L,
    loading: x && o
  }
}

function _(e) {
  let {
    context: t,
    query: n,
    fetches: l = true,
    pageLimit: r = 1 / 0,
    entrypoint: c
  } = e;
  n.startsWith("".concat(j.GI)) && (n = n.substring(1));
  let u = c === x._b.VOICE,
    d = "channel" === t.type ? t.channel.guild_id : true,
    [p, m] = i.useState(1),
    f = i.useRef(p);
  f.current = p;
  let {
    fetchState: h,
    totalPages: g
  } = (0, s.cj)([y.Z], () => {
    var e, t;
    return {
      fetchState: y.Z.getFetchState({
        query: n,
        guildId: d,
        page: p,
        integrationType: a.Y.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: true,
        excludeNonEmbeddedApps: u,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true,
        source: o.F.APP_LAUNCHER
      }),
      totalPages: null != (t = null == (e = y.Z.getSearchResults({
        query: n,
        guildId: d,
        page: p,
        integrationType: a.Y.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: true,
        excludeNonEmbeddedApps: u,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true,
        source: o.F.APP_LAUNCHER
      })) ? true : e.totalPages) ? t : 0
    }
  }, [n, d, p, u]), b = i.useMemo(() => Array.from({
    length: h === y.M.FETCHED || h === y.M.ERROR ? p : p - 1
  }, (e, t) => {
    var i, l;
    return null != (l = null == (i = y.Z.getSearchResults({
      query: n,
      guildId: d,
      page: t + 1,
      integrationType: a.Y.USER_INSTALL,
      minUserInstallCommandCount: 1,
      excludeAppsWithCustomInstallUrl: true,
      excludeNonEmbeddedApps: u,
      excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true,
      source: o.F.APP_LAUNCHER
    })) ? true : i.results) ? l : []
  }), [h, d, n, p, u]), N = i.useCallback(() => {
    let e = b.length;
    h === y.M.FETCHED && e === f.current && e > 0 && e < g && e < r && b[e - 1].length > 0 && (f.current++, m(e => e + 1))
  }, [h, r, b, g]), C = i.useCallback(e => {
    let {
      query: t,
      page: n,
      guildId: i
    } = e;
    v.yC({
      query: t,
      guildId: i,
      options: {
        page: n,
        integrationType: a.Y.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: true,
        excludeNonEmbeddedApps: u,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true,
        source: o.F.APP_LAUNCHER
      }
    })
  }, [u]);
  return i.useEffect(() => {
    l && C({
      query: n,
      page: p,
      guildId: d
    })
  }, [n, d, C, p, l]), i.useEffect(() => {
    m(1)
  }, [d, n]), {
    fetchState: h,
    applicationResults: b.flat(),
    fetchNextPage: N
  }
}