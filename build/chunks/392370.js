/** Chunk was on 35755 **/
n.d(t, {
  Q2: () => O,
  pe: () => A
}), n(47120), n(653041), n(301563), n(86693), n(536091);
var i = n(192379),
  r = n(392711),
  l = n.n(r),
  o = n(373793),
  a = n(288385),
  c = n(442837),
  s = n(911969),
  d = n(127255),
  u = n(654455),
  p = n(213459),
  m = n(807169),
  f = n(104793),
  h = n(822245),
  b = n(471518),
  v = n(177653),
  C = n(631827),
  _ = n(424602),
  x = n(827498),
  y = n(783097),
  N = n(689079),
  g = n(665692);

function j(e, t) {
  let n = h.Z.getScoreWithoutLoadingLatest(e.id);
  return h.Z.getScoreWithoutLoadingLatest(t.id) - n
}

function P(e, t) {
  let n = (0, y.$d)(e),
    i = (0, y.$d)(t);
  return (0, p.un)(n, i)
}

function E(e, t) {
  return (0, p.un)(e.displayName, t.displayName)
}

function A(e) {
  let {
    context: t,
    query: n,
    commandLimit: r,
    applicationLimit: o,
    searchesCommands: a = !0,
    searchesBots: c = !0,
    searchesActivities: h = !0
  } = e;
  n.startsWith("".concat(g.GI)) && (n = n.substring(1));
  let {
    commands: b,
    commandSectionMap: v,
    loading: x
  } = function(e) {
    var t, n;
    let {
      context: r,
      includeBuiltIn: l = !0,
      allowFetch: o = !0
    } = e, a = (0, p.em)(r, !0, o), c = (0, p.PL)(!0, o);
    return i.useMemo(() => {
      var e, t, n, i, o;
      let s = null !== (n = null === (e = a.result) || void 0 === e ? void 0 : e.sections) && void 0 !== n ? n : {},
        d = null !== (i = null === (t = c.result) || void 0 === t ? void 0 : t.sections) && void 0 !== i ? i : {},
        u = [...Object.keys(s), ...Object.keys(d).filter(e => !(e in s))];
      l && u.push(N.bi.BUILT_IN);
      let m = "channel" in r && (0, _.aZ)(r.channel, "AppLauncherSearchUtils.useApplicationCommandsInContext()"),
        f = [],
        h = {};
      for (let e of u) {
        let t = (0, p.If)(r, e),
          n = null !== (o = t.sectionCommands) && void 0 !== o ? o : [];
        f.push(...n), n.forEach(e => {
          null != t.descriptor && (h[e.id] = t.descriptor)
        })
      }
      return {
        commands: f.filter(e => !m || e.applicationId !== _.gu),
        commandSectionMap: h,
        loading: !0 === a.fetchState.fetching || !0 === c.fetchState.fetching
      }
    }, [r, l, a.fetchState.fetching, null === (t = a.result) || void 0 === t ? void 0 : t.sections, c.fetchState.fetching, null === (n = c.result) || void 0 === n ? void 0 : n.sections])
  }({
    context: t,
    includeBuiltIn: !0
  }), {
    apps: A
  } = function(e) {
    let {
      context: t,
      onlyWithCommands: n,
      includeBuiltIn: r,
      allowFetch: l = !0,
      includeEmbeddedApps: o,
      includeNonEmbeddedApps: a
    } = e, c = "channel" === t.type ? t.channel : void 0, d = (0, m.Hs)(c, [s.yU.CHAT]).hasBaseAccessPermissions, u = (0, p.em)(t, d, l), f = (0, p.PL)(d, l), h = i.useCallback(e => {
      let t = e.descriptor.application;
      return null != t && (!!(o && (0, y.ye)(t)) || null != t && a && !(0, y.ye)(t) && (!n || Object.keys(e.commands).length > 0))
    }, [o, a, n]), b = [], v = new Set;
    if (null != u.result)
      for (let e of Object.values(u.result.sections)) {
        let t = e.descriptor.application;
        null != t && h(e) && (b.push(t), v.add(t.id))
      }
    if (null != f.result)
      for (let e of Object.values(f.result.sections)) {
        let t = e.descriptor.application;
        null != t && !v.has(t.id) && h(e) && b.push(t)
      }
    a && r && b.push(y.Wx);
    let C = "channel" in t && (0, _.aZ)(t.channel, "AppLauncherSearchUtils.useApplicationsInContext()");
    return {
      apps: b.filter(e => !C || e.id !== _.gu),
      loading: (null == u ? void 0 : u.fetchState.fetching) === !0 || (null == f ? void 0 : f.fetchState.fetching) === !0
    }
  }({
    context: t,
    onlyWithCommands: !0,
    includeBuiltIn: !0,
    includeEmbeddedApps: h,
    includeNonEmbeddedApps: c
  }), O = (0, d.Z)({
    guildId: "channel" === t.type ? t.channel.guild_id : null,
    context: t
  }), I = i.useMemo(() => {
    var e, i, l, o, c, d;
    if (!a) return [];
    return (0, C.N)(b, {
      limit: r,
      filterPredicates: [function(e) {
        let t = (0, m.k)("channel" === e.type ? e.channel : void 0, [s.yU.CHAT]),
          n = {};
        return i => {
          let {
            context: r,
            userId: l,
            roleIds: o,
            isImpersonating: a
          } = t;
          if (!(i.applicationId in n)) {
            let {
              descriptor: t,
              isGuildInstalled: c,
              isUserInstalled: s
            } = (0, p.If)(e, i.applicationId), d = (null == r ? void 0 : r.guild_id) != null ? f.ML(null == t ? void 0 : t.permissions, r.guild_id, l, o, a) : null, u = (null == r ? void 0 : r.guild_id) != null ? f.ZJ(null == t ? void 0 : t.permissions, r, r.guild_id) : null;
            n[i.applicationId] = {
              descriptor: t,
              applicationAllowedForUser: d,
              applicationAllowedForChannel: u,
              isGuildInstalled: c,
              isUserInstalled: s
            }
          }
          let {
            descriptor: c,
            applicationAllowedForChannel: s,
            applicationAllowedForUser: d,
            isGuildInstalled: u,
            isUserInstalled: m
          } = n[i.applicationId];
          return f.Ft(i, t, {
            applicationAllowedForUser: d,
            applicationAllowedForChannel: s,
            commandBotId: null == c ? void 0 : c.botId,
            isGuildInstalled: u,
            isUserInstalled: m
          }) === f.mF.ALLOWED
        }
      }(t)],
      bucketPredicates: [(i = e = n, e => {
        let t = e.untranslatedName,
          n = e.displayName;
        return t.startsWith(i) || n.startsWith(i)
      }), function(e) {
        let t = null == e ? void 0 : e.split(" "),
          n = t[0],
          i = t.slice(1).join(" ");
        return e => {
          let t = e.untranslatedName,
            r = e.displayName;
          return !!(t.startsWith(n) && t.split(" ").slice(1).join(" ").startsWith(i) || r.startsWith(n) && r.split(" ").slice(1).join(" ").startsWith(i))
        }
      }(e), (l = e, e => {
        let t = e.untranslatedName,
          n = e.displayName;
        return t.includes(l) || n.includes(l)
      }), (o = e, e => {
        var t;
        for (let {
            name: n,
            serverLocalizedName: i
          }
          of null !== (t = e.options) && void 0 !== t ? t : [])
          if (n.startsWith(o) || "".concat(e.untranslatedName, " ").concat(n).startsWith(o) || null != e.displayName && "".concat(e.displayName, " ").concat(n).startsWith(o) || null != i && (i.startsWith(o) || "".concat(e.untranslatedName, " ").concat(i).startsWith(o) || null != e.displayName && "".concat(e.displayName, " ").concat(i).startsWith(o))) return !0;
        return !1
      }), (c = e, e => {
        var t;
        for (let {
            name: n,
            serverLocalizedName: i
          }
          of null !== (t = e.options) && void 0 !== t ? t : [])
          if (n.includes(c) || (null == i ? void 0 : i.includes(c))) return !0;
        return !1
      })],
      sortComparers: [(d = {
        channel: "channel" === t.type ? t.channel : void 0
      }, (e, t) => {
        let n = u.ZP.getScoreWithoutLoadingLatest(d, e);
        return u.ZP.getScoreWithoutLoadingLatest(d, t) - n
      }), E]
    })
  }, [a, b, r, t, n]), S = i.useMemo(() => {
    if (0 === I.length) return [];
    let e = new Map(A.map(e => [e.id, e]));
    return l().compact(I.map(t => {
      var n;
      let i = e.get(t.applicationId);
      if (null == i) return null;
      let r = null !== (n = v[t.id]) && void 0 !== n ? n : null;
      return {
        command: t,
        application: i,
        section: r
      }
    }))
  }, [A, I, v]), T = i.useMemo(() => {
    var e, i, r, l, a;
    let d = [];
    if (h) {
      let e = new Set(A.map(e => {
        let {
          id: t
        } = e;
        return t
      }));
      d.push(...A), d.push(...O.filter(t => {
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
    } else c && (d = A);
    return (0, C.N)(d, {
      limit: o,
      filterPredicates: [function(e) {
        let t = (0, m.k)("channel" === e.type ? e.channel : void 0, [s.yU.CHAT, s.yU.PRIMARY_ENTRY_POINT]);
        return n => {
          let {
            context: i,
            userId: r,
            roleIds: l,
            isImpersonating: o
          } = t, {
            descriptor: a,
            sectionCommands: c,
            isGuildInstalled: s,
            isUserInstalled: d
          } = (0, p.If)(e, n.id), u = (null == i ? void 0 : i.guild_id) != null ? f.ML(null == a ? void 0 : a.permissions, i.guild_id, r, l, o) : null, m = (null == i ? void 0 : i.guild_id) != null ? f.ZJ(null == a ? void 0 : a.permissions, i, i.guild_id) : null;
          return null == c || !(c.length > 0) || c.some(e => f.Ft(e, t, {
            applicationAllowedForUser: u,
            applicationAllowedForChannel: m,
            commandBotId: null == a ? void 0 : a.botId,
            isGuildInstalled: s,
            isUserInstalled: d
          }) === f.mF.ALLOWED)
        }
      }(t)],
      bucketPredicates: [(i = e = n, e => (0, y.$d)(e).toLocaleLowerCase().startsWith(i.toLocaleLowerCase())), (r = e, e => (0, y.$d)(e).toLocaleLowerCase().includes(r.toLocaleLowerCase())), (l = e, e => {
        var t, n;
        let i = null === (t = (0, y.jD)(e)) || void 0 === t ? void 0 : t.toLocaleLowerCase();
        return null !== (n = null == i ? void 0 : i.startsWith(l.toLocaleLowerCase())) && void 0 !== n && n
      }), (a = e, e => {
        var t, n;
        let i = null === (t = (0, y.jD)(e)) || void 0 === t ? void 0 : t.toLocaleLowerCase();
        return null !== (n = null == i ? void 0 : i.includes(a.toLocaleLowerCase())) && void 0 !== n && n
      })],
      sortComparers: [j, P]
    })
  }, [c, h, o, t, n, A, O]), L = S.length > 0, R = T.length > 0;
  return {
    commandResults: S,
    hasCommandResults: L,
    applicationResults: T,
    hasApplicationResults: R,
    isEmptyState: !L && !R,
    loading: x && a
  }
}

function O(e) {
  let {
    context: t,
    query: n,
    fetches: r = !0,
    pageLimit: l = 1 / 0,
    entrypoint: s
  } = e;
  n.startsWith("".concat(g.GI)) && (n = n.substring(1));
  let d = s === x._b.VOICE,
    u = "channel" === t.type ? t.channel.guild_id : void 0,
    [p, m] = i.useState(1),
    f = i.useRef(p);
  f.current = p;
  let {
    fetchState: h,
    totalPages: C
  } = (0, c.cj)([v.Z], () => {
    var e, t;
    return {
      fetchState: v.Z.getFetchState({
        query: n,
        guildId: u,
        page: p,
        integrationType: o.Y.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: !0,
        excludeNonEmbeddedApps: d,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
        source: a.F.APP_LAUNCHER
      }),
      totalPages: null !== (t = null === (e = v.Z.getSearchResults({
        query: n,
        guildId: u,
        page: p,
        integrationType: o.Y.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: !0,
        excludeNonEmbeddedApps: d,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
        source: a.F.APP_LAUNCHER
      })) || void 0 === e ? void 0 : e.totalPages) && void 0 !== t ? t : 0
    }
  }, [n, u, p, d]), _ = i.useMemo(() => Array.from({
    length: h === v.M.FETCHED || h === v.M.ERROR ? p : p - 1
  }, (e, t) => {
    var i, r;
    return null !== (r = null === (i = v.Z.getSearchResults({
      query: n,
      guildId: u,
      page: t + 1,
      integrationType: o.Y.USER_INSTALL,
      minUserInstallCommandCount: 1,
      excludeAppsWithCustomInstallUrl: !0,
      excludeNonEmbeddedApps: d,
      excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
      source: a.F.APP_LAUNCHER
    })) || void 0 === i ? void 0 : i.results) && void 0 !== r ? r : []
  }), [h, u, n, p, d]), y = i.useCallback(() => {
    let e = _.length;
    h === v.M.FETCHED && e === f.current && e > 0 && e < C && e < l && _[e - 1].length > 0 && (f.current++, m(e => e + 1))
  }, [h, l, _, C]), N = i.useCallback(e => {
    let {
      query: t,
      page: n,
      guildId: i
    } = e;
    b.yC({
      query: t,
      guildId: i,
      options: {
        page: n,
        integrationType: o.Y.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: !0,
        excludeNonEmbeddedApps: d,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
        source: a.F.APP_LAUNCHER
      }
    })
  }, [d]);
  return i.useEffect(() => {
    r && N({
      query: n,
      page: p,
      guildId: u
    })
  }, [n, u, N, p, r]), i.useEffect(() => {
    m(1)
  }, [u, n]), {
    fetchState: h,
    applicationResults: _.flat(),
    fetchNextPage: y
  }
}