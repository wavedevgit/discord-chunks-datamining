/** Chunk was on 35755 **/
n.d(t, {
  Q2: () => I,
  pe: () => A
}), n(47120), n(653041), n(301563), n(86693), n(536091);
var i = n(192379),
  l = n(392711),
  r = n.n(l),
  o = n(373793),
  a = n(288385),
  s = n(442837),
  c = n(911969),
  u = n(127255),
  d = n(654455),
  p = n(213459),
  m = n(807169),
  f = n(104793),
  h = n(822245),
  v = n(471518),
  y = n(177653),
  b = n(631827),
  N = n(424602),
  g = n(827498),
  x = n(783097),
  j = n(689079),
  E = n(665692);

function P(e, t) {
  let n = h.Z.getScoreWithoutLoadingLatest(e.id);
  return h.Z.getScoreWithoutLoadingLatest(t.id) - n
}

function C(e, t) {
  let n = (0, x.$d)(e),
    i = (0, x.$d)(t);
  return (0, p.un)(n, i)
}

function O(e, t) {
  return (0, p.un)(e.displayName, t.displayName)
}

function A(e) {
  let {
    context: t,
    query: n,
    commandLimit: l,
    applicationLimit: o,
    searchesCommands: a = !0,
    searchesBots: s = !0,
    searchesActivities: h = !0
  } = e;
  n.startsWith("".concat(E.GI)) && (n = n.substring(1));
  let {
    commands: v,
    commandSectionMap: y,
    loading: g
  } = function(e) {
    var t, n;
    let {
      context: l,
      includeBuiltIn: r = !0,
      allowFetch: o = !0
    } = e, a = (0, p.em)(l, !0, o), s = (0, p.PL)(!0, o);
    return i.useMemo(() => {
      var e, t, n, i, o;
      let c = null !== (n = null === (e = a.result) || void 0 === e ? void 0 : e.sections) && void 0 !== n ? n : {},
        u = null !== (i = null === (t = s.result) || void 0 === t ? void 0 : t.sections) && void 0 !== i ? i : {},
        d = [...Object.keys(c), ...Object.keys(u).filter(e => !(e in c))];
      r && d.push(j.bi.BUILT_IN);
      let m = "channel" in l && (0, N.aZ)(l.channel, "AppLauncherSearchUtils.useApplicationCommandsInContext()"),
        f = [],
        h = {};
      for (let e of d) {
        let t = (0, p.If)(l, e),
          n = null !== (o = t.sectionCommands) && void 0 !== o ? o : [];
        f.push(...n), n.forEach(e => {
          null != t.descriptor && (h[e.id] = t.descriptor)
        })
      }
      return {
        commands: f.filter(e => !m || e.applicationId !== N.gu),
        commandSectionMap: h,
        loading: !0 === a.fetchState.fetching || !0 === s.fetchState.fetching
      }
    }, [l, r, a.fetchState.fetching, null === (t = a.result) || void 0 === t ? void 0 : t.sections, s.fetchState.fetching, null === (n = s.result) || void 0 === n ? void 0 : n.sections])
  }({
    context: t,
    includeBuiltIn: !0
  }), {
    apps: A
  } = function(e) {
    let {
      context: t,
      onlyWithCommands: n,
      includeBuiltIn: l,
      allowFetch: r = !0,
      includeEmbeddedApps: o,
      includeNonEmbeddedApps: a
    } = e, s = "channel" === t.type ? t.channel : void 0, u = (0, m.Hs)(s, [c.yU.CHAT]).hasBaseAccessPermissions, d = (0, p.em)(t, u, r), f = (0, p.PL)(u, r), h = i.useCallback(e => {
      let t = e.descriptor.application;
      return null != t && (!!(o && (0, x.ye)(t)) || null != t && a && !(0, x.ye)(t) && (!n || Object.keys(e.commands).length > 0))
    }, [o, a, n]), v = [], y = new Set;
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
    a && l && v.push(x.Wx);
    let b = "channel" in t && (0, N.aZ)(t.channel, "AppLauncherSearchUtils.useApplicationsInContext()");
    return {
      apps: v.filter(e => !b || e.id !== N.gu),
      loading: (null == d ? void 0 : d.fetchState.fetching) === !0 || (null == f ? void 0 : f.fetchState.fetching) === !0
    }
  }({
    context: t,
    onlyWithCommands: !0,
    includeBuiltIn: !0,
    includeEmbeddedApps: h,
    includeNonEmbeddedApps: s
  }), I = (0, u.Z)({
    guildId: "channel" === t.type ? t.channel.guild_id : null,
    context: t
  }), _ = i.useMemo(() => {
    var e, i, r, o, s, u;
    if (!a) return [];
    return (0, b.N)(v, {
      limit: l,
      filterPredicates: [function(e) {
        let t = (0, m.k)("channel" === e.type ? e.channel : void 0, [c.yU.CHAT]),
          n = {};
        return i => {
          let {
            context: l,
            userId: r,
            roleIds: o,
            isImpersonating: a
          } = t;
          if (!(i.applicationId in n)) {
            let {
              descriptor: t,
              isGuildInstalled: s,
              isUserInstalled: c
            } = (0, p.If)(e, i.applicationId), u = (null == l ? void 0 : l.guild_id) != null ? f.ML(null == t ? void 0 : t.permissions, l.guild_id, r, o, a) : null, d = (null == l ? void 0 : l.guild_id) != null ? f.ZJ(null == t ? void 0 : t.permissions, l, l.guild_id) : null;
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
            commandBotId: null == s ? void 0 : s.botId,
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
        let t = null == e ? void 0 : e.split(" "),
          n = t[0],
          i = t.slice(1).join(" ");
        return e => {
          let t = e.untranslatedName,
            l = e.displayName;
          return !!(t.startsWith(n) && t.split(" ").slice(1).join(" ").startsWith(i) || l.startsWith(n) && l.split(" ").slice(1).join(" ").startsWith(i))
        }
      }(e), (r = e, e => {
        let t = e.untranslatedName,
          n = e.displayName;
        return t.includes(r) || n.includes(r)
      }), (o = e, e => {
        var t;
        for (let {
            name: n,
            serverLocalizedName: i
          }
          of null !== (t = e.options) && void 0 !== t ? t : [])
          if (n.startsWith(o) || "".concat(e.untranslatedName, " ").concat(n).startsWith(o) || null != e.displayName && "".concat(e.displayName, " ").concat(n).startsWith(o) || null != i && (i.startsWith(o) || "".concat(e.untranslatedName, " ").concat(i).startsWith(o) || null != e.displayName && "".concat(e.displayName, " ").concat(i).startsWith(o))) return !0;
        return !1
      }), (s = e, e => {
        var t;
        for (let {
            name: n,
            serverLocalizedName: i
          }
          of null !== (t = e.options) && void 0 !== t ? t : [])
          if (n.includes(s) || (null == i ? void 0 : i.includes(s))) return !0;
        return !1
      })],
      sortComparers: [(u = {
        channel: "channel" === t.type ? t.channel : void 0
      }, (e, t) => {
        let n = d.ZP.getScoreWithoutLoadingLatest(u, e);
        return d.ZP.getScoreWithoutLoadingLatest(u, t) - n
      }), O]
    })
  }, [a, v, l, t, n]), S = i.useMemo(() => {
    if (0 === _.length) return [];
    let e = new Map(A.map(e => [e.id, e]));
    return r().compact(_.map(t => {
      var n;
      let i = e.get(t.applicationId);
      if (null == i) return null;
      let l = null !== (n = y[t.id]) && void 0 !== n ? n : null;
      return {
        command: t,
        application: i,
        section: l
      }
    }))
  }, [A, _, y]), T = i.useMemo(() => {
    var e, i, l, r, a;
    let u = [];
    if (h) {
      let e = new Set(A.map(e => {
        let {
          id: t
        } = e;
        return t
      }));
      u.push(...A), u.push(...I.filter(t => {
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
    return (0, b.N)(u, {
      limit: o,
      filterPredicates: [function(e) {
        let t = (0, m.k)("channel" === e.type ? e.channel : void 0, [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT]);
        return n => {
          let {
            context: i,
            userId: l,
            roleIds: r,
            isImpersonating: o
          } = t, {
            descriptor: a,
            sectionCommands: s,
            isGuildInstalled: c,
            isUserInstalled: u
          } = (0, p.If)(e, n.id), d = (null == i ? void 0 : i.guild_id) != null ? f.ML(null == a ? void 0 : a.permissions, i.guild_id, l, r, o) : null, m = (null == i ? void 0 : i.guild_id) != null ? f.ZJ(null == a ? void 0 : a.permissions, i, i.guild_id) : null;
          return null == s || !(s.length > 0) || s.some(e => f.Ft(e, t, {
            applicationAllowedForUser: d,
            applicationAllowedForChannel: m,
            commandBotId: null == a ? void 0 : a.botId,
            isGuildInstalled: c,
            isUserInstalled: u
          }) === f.mF.ALLOWED)
        }
      }(t)],
      bucketPredicates: [(i = e = n, e => (0, x.$d)(e).toLocaleLowerCase().startsWith(i.toLocaleLowerCase())), (l = e, e => (0, x.$d)(e).toLocaleLowerCase().includes(l.toLocaleLowerCase())), (r = e, e => {
        var t, n;
        let i = null === (t = (0, x.jD)(e)) || void 0 === t ? void 0 : t.toLocaleLowerCase();
        return null !== (n = null == i ? void 0 : i.startsWith(r.toLocaleLowerCase())) && void 0 !== n && n
      }), (a = e, e => {
        var t, n;
        let i = null === (t = (0, x.jD)(e)) || void 0 === t ? void 0 : t.toLocaleLowerCase();
        return null !== (n = null == i ? void 0 : i.includes(a.toLocaleLowerCase())) && void 0 !== n && n
      })],
      sortComparers: [P, C]
    })
  }, [s, h, o, t, n, A, I]), L = S.length > 0, Z = T.length > 0;
  return {
    commandResults: S,
    hasCommandResults: L,
    applicationResults: T,
    hasApplicationResults: Z,
    isEmptyState: !L && !Z,
    loading: g && a
  }
}

function I(e) {
  let {
    context: t,
    query: n,
    fetches: l = !0,
    pageLimit: r = 1 / 0,
    entrypoint: c
  } = e;
  n.startsWith("".concat(E.GI)) && (n = n.substring(1));
  let u = c === g._b.VOICE,
    d = "channel" === t.type ? t.channel.guild_id : void 0,
    [p, m] = i.useState(1),
    f = i.useRef(p);
  f.current = p;
  let {
    fetchState: h,
    totalPages: b
  } = (0, s.cj)([y.Z], () => {
    var e, t;
    return {
      fetchState: y.Z.getFetchState({
        query: n,
        guildId: d,
        page: p,
        integrationType: o.Y.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: !0,
        excludeNonEmbeddedApps: u,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
        source: a.F.APP_LAUNCHER
      }),
      totalPages: null !== (t = null === (e = y.Z.getSearchResults({
        query: n,
        guildId: d,
        page: p,
        integrationType: o.Y.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: !0,
        excludeNonEmbeddedApps: u,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
        source: a.F.APP_LAUNCHER
      })) || void 0 === e ? void 0 : e.totalPages) && void 0 !== t ? t : 0
    }
  }, [n, d, p, u]), N = i.useMemo(() => Array.from({
    length: h === y.M.FETCHED || h === y.M.ERROR ? p : p - 1
  }, (e, t) => {
    var i, l;
    return null !== (l = null === (i = y.Z.getSearchResults({
      query: n,
      guildId: d,
      page: t + 1,
      integrationType: o.Y.USER_INSTALL,
      minUserInstallCommandCount: 1,
      excludeAppsWithCustomInstallUrl: !0,
      excludeNonEmbeddedApps: u,
      excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
      source: a.F.APP_LAUNCHER
    })) || void 0 === i ? void 0 : i.results) && void 0 !== l ? l : []
  }), [h, d, n, p, u]), x = i.useCallback(() => {
    let e = N.length;
    h === y.M.FETCHED && e === f.current && e > 0 && e < b && e < r && N[e - 1].length > 0 && (f.current++, m(e => e + 1))
  }, [h, r, N, b]), j = i.useCallback(e => {
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
        integrationType: o.Y.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: !0,
        excludeNonEmbeddedApps: u,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: !0,
        source: a.F.APP_LAUNCHER
      }
    })
  }, [u]);
  return i.useEffect(() => {
    l && j({
      query: n,
      page: p,
      guildId: d
    })
  }, [n, d, j, p, l]), i.useEffect(() => {
    m(1)
  }, [d, n]), {
    fetchState: h,
    applicationResults: N.flat(),
    fetchNextPage: x
  }
}