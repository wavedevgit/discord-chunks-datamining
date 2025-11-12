/** Chunk was on web.js **/
/** chunk id: 392370, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q2: () => H,
  pe: () => V
}), require("./388685.js"), require("./539854.js"), require("./35282.js"), require("./472816.js"), require("./794429.js");
var Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
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

function I(e) {
  let {
    context: t,
    onlyWithCommands: n,
    includeBuiltIn: i,
    allowFetch: a = true,
    includeEmbeddedApps: o,
    includeNonEmbeddedApps: s
  } = e, l = "channel" === t.type ? t.channel : true, u = (0, _.Hs)(l, [c.yU.CHAT]).hasBaseAccessPermissions, d = (0, f.em)(t, u, a), p = (0, f.PL)(u, a), h = r.useCallback(e => {
    let t = e.descriptor.application;
    return null != t && (!!(o && (0, y.ye)(t)) || null != t && s && !(0, y.ye)(t) && (!n || Object.keys(e.commands).length > 0))
  }, [o, s, n]), m = [], g = new Set;
  if (null != d.result)
    for (let e of Object.values(d.result.sections)) {
      let t = e.descriptor.application;
      null != t && h(e) && (m.push(t), g.add(t.id))
    }
  if (null != p.result)
    for (let e of Object.values(p.result.sections)) {
      let t = e.descriptor.application;
      null != t && !g.has(t.id) && h(e) && m.push(t)
    }
  return s && i && m.push(y.Wx), {
    apps: m,
    loading: (null == d ? true : d.fetchState.fetching) === true || (null == p ? true : p.fetchState.fetching) === true
  }
}

function T(e) {
  var t, n;
  let {
    context: i,
    includeBuiltIn: a = true,
    allowFetch: o = true
  } = e, s = (0, f.em)(i, true, o), l = (0, f.PL)(true, o);
  return r.useMemo(() => {
    var e, t, n, r, o;
    let c = null != (n = null == (e = s.result) ? true : e.sections) ? n : {},
      u = null != (r = null == (t = l.result) ? true : t.sections) ? r : {},
      d = [...Object.keys(c), ...Object.keys(u).filter(e => !(e in c))];
    a && d.push(O.bi.BUILT_IN);
    let _ = [],
      p = {};
    for (let e of d) {
      let t = (0, f.If)(i, e),
        n = null != (o = t.sectionCommands) ? o : [];
      _.push(...n), n.forEach(e => {
        null != t.descriptor && (p[e.id] = t.descriptor)
      })
    }
    return {
      commands: _,
      commandSectionMap: p,
      loading: true === s.fetchState.fetching || true === l.fetchState.fetching
    }
  }, [i, a, s.fetchState.fetching, null == (t = s.result) ? true : t.sections, l.fetchState.fetching, null == (n = l.result) ? true : n.sections])
}

function S(e) {
  let t = (0, _.k)("channel" === e.type ? e.channel : true, [c.yU.CHAT, c.yU.PRIMARY_ENTRY_POINT]);
  return n => {
    let {
      context: r,
      userId: i,
      roleIds: a,
      isImpersonating: o
    } = t, {
      descriptor: s,
      sectionCommands: l,
      isGuildInstalled: c,
      isUserInstalled: u
    } = (0, f.If)(e, n.id), d = (null == r ? true : r.guild_id) != null ? p.ML(null == s ? true : s.permissions, r.guild_id, i, a, o) : null, _ = (null == r ? true : r.guild_id) != null ? p.ZJ(null == s ? true : s.permissions, r, r.guild_id) : null;
    return null == l || !(l.length > 0) || l.some(e => p.Ft(e, t, {
      applicationAllowedForUser: d,
      applicationAllowedForChannel: _,
      commandBotId: null == s ? true : s.botId,
      isGuildInstalled: c,
      isUserInstalled: u
    }) === p.mF.ALLOWED)
  }
}

function A(e) {
  return [C(e), N(e), R(e), P(e)]
}

function C(e) {
  return t => (0, y.$d)(t).toLocaleLowerCase().startsWith(e.toLocaleLowerCase())
}

function N(e) {
  return t => (0, y.$d)(t).toLocaleLowerCase().includes(e.toLocaleLowerCase())
}

function R(e) {
  return t => {
    var n, r;
    let i = null == (n = (0, y.jD)(t)) ? true : n.toLocaleLowerCase();
    return null != (r = null == i ? true : i.startsWith(e.toLocaleLowerCase())) && r
  }
}

function P(e) {
  return t => {
    var n, r;
    let i = null == (n = (0, y.jD)(t)) ? true : n.toLocaleLowerCase();
    return null != (r = null == i ? true : i.includes(e.toLocaleLowerCase())) && r
  }
}

function D(e, t) {
  let n = h.Z.getScoreWithoutLoadingLatest(e.id);
  return h.Z.getScoreWithoutLoadingLatest(t.id) - n
}

function w(e, t) {
  let n = (0, y.$d)(e),
    r = (0, y.$d)(t);
  return (0, f.un)(n, r)
}

function x(e) {
  let t = (0, _.k)("channel" === e.type ? e.channel : true, [c.yU.CHAT]),
    n = {};
  return r => {
    let {
      context: i,
      userId: a,
      roleIds: o,
      isImpersonating: s
    } = t;
    if (!(r.applicationId in n)) {
      let {
        descriptor: t,
        isGuildInstalled: l,
        isUserInstalled: c
      } = (0, f.If)(e, r.applicationId), u = (null == i ? true : i.guild_id) != null ? p.ML(null == t ? true : t.permissions, i.guild_id, a, o, s) : null, d = (null == i ? true : i.guild_id) != null ? p.ZJ(null == t ? true : t.permissions, i, i.guild_id) : null;
      n[r.applicationId] = {
        descriptor: t,
        applicationAllowedForUser: u,
        applicationAllowedForChannel: d,
        isGuildInstalled: l,
        isUserInstalled: c
      }
    }
    let {
      descriptor: l,
      applicationAllowedForChannel: c,
      applicationAllowedForUser: u,
      isGuildInstalled: d,
      isUserInstalled: _
    } = n[r.applicationId];
    return p.Ft(r, t, {
      applicationAllowedForUser: u,
      applicationAllowedForChannel: c,
      commandBotId: null == l ? true : l.botId,
      isGuildInstalled: d,
      isUserInstalled: _
    }) === p.mF.ALLOWED
  }
}

function L(e) {
  return [M(e), j(e), k(e), U(e), G(e)]
}

function M(e) {
  return t => {
    let n = t.untranslatedName,
      r = t.displayName;
    return n.startsWith(e) || r.startsWith(e)
  }
}

function j(e) {
  let t = null == e ? true : e.split(" "),
    n = t[0],
    r = t.slice(1).join(" ");
  return e => {
    let t = e.untranslatedName,
      i = e.displayName;
    return !!(t.startsWith(n) && t.split(" ").slice(1).join(" ").startsWith(r) || i.startsWith(n) && i.split(" ").slice(1).join(" ").startsWith(r)) || false
  }
}

function k(e) {
  return t => {
    let n = t.untranslatedName,
      r = t.displayName;
    return n.includes(e) || r.includes(e)
  }
}

function U(e) {
  return t => {
    var n;
    for (let {
        name: r,
        serverLocalizedName: i
      }
      of null != (n = t.options) ? n : [])
      if (r.startsWith(e) || "".concat(t.untranslatedName, " ").concat(r).startsWith(e) || null != t.displayName && "".concat(t.displayName, " ").concat(r).startsWith(e) || null != i && (i.startsWith(e) || "".concat(t.untranslatedName, " ").concat(i).startsWith(e) || null != t.displayName && "".concat(t.displayName, " ").concat(i).startsWith(e))) returntrue;
    returnfalse
  }
}

function G(e) {
  return t => {
    var n;
    for (let {
        name: r,
        serverLocalizedName: i
      }
      of null != (n = t.options) ? n : [])
      if (r.includes(e) || (null == i ? true : i.includes(e))) returntrue;
    returnfalse
  }
}

function B(e) {
  return [Z(e), F]
}

function Z(e) {
  return (t, n) => {
    let r = d.ZP.getScoreWithoutLoadingLatest(e, t);
    return d.ZP.getScoreWithoutLoadingLatest(e, n) - r
  }
}

function F(e, t) {
  return (0, f.un)(e.displayName, t.displayName)
}

function V(e) {
  let {
    context: t,
    query: n,
    commandLimit: i,
    applicationLimit: o,
    searchesCommands: s = true,
    searchesBots: l = true,
    searchesActivities: c = true
  } = e;
  n.startsWith("".concat(v.GI)) && (n = n.substring(1));
  let {
    commands: d,
    commandSectionMap: f,
    loading: _
  } = T({
    context: t,
    includeBuiltIn: true
  }), {
    apps: p
  } = I({
    context: t,
    onlyWithCommands: true,
    includeBuiltIn: true,
    includeEmbeddedApps: c,
    includeNonEmbeddedApps: l
  }), h = (0, u.Z)({
    guildId: "channel" === t.type ? t.channel.guild_id : null
  }), m = r.useMemo(() => s ? (0, E.N)(d, {
    limit: i,
    filterPredicates: [x(t)],
    bucketPredicates: L(n),
    sortComparers: B({
      channel: "channel" === t.type ? t.channel : true
    })
  }) : [], [s, d, i, t, n]), g = r.useMemo(() => {
    if (0 === m.length) return [];
    let e = new Map(p.map(e => [e.id, e]));
    return a().compact(m.map(t => {
      var n;
      let r = e.get(t.applicationId);
      if (null == r) return null;
      let i = null != (n = f[t.id]) ? n : null;
      return {
        command: t,
        application: r,
        section: i
      }
    }))
  }, [p, m, f]), b = r.useMemo(() => {
    let e = [];
    if (c) {
      let t = new Set(p.map(e => {
        let {
          id: t
        } = e;
        return t
      }));
      e.push(...p), e.push(...h.filter(e => {
        let {
          application: {
            id: n
          }
        } = e;
        return !t.has(n)
      }).map(e => {
        let {
          application: t
        } = e;
        return t
      }))
    } else l && (e = p);
    return (0, E.N)(e, {
      limit: o,
      filterPredicates: [S(t)],
      bucketPredicates: A(n),
      sortComparers: [D, w]
    })
  }, [l, c, o, t, n, p, h]), y = g.length > 0, O = b.length > 0, C = !y && !O;
  return {
    commandResults: g,
    hasCommandResults: y,
    applicationResults: b,
    hasApplicationResults: O,
    isEmptyState: C,
    loading: _ && s
  }
}

function H(e) {
  let {
    context: t,
    query: n,
    fetches: i = true,
    pageLimit: a = 1 / 0,
    entrypoint: c
  } = e;
  n.startsWith("".concat(v.GI)) && (n = n.substring(1));
  let u = c === b._b.VOICE,
    d = "channel" === t.type ? t.channel.guild_id : true,
    [f, _] = r.useState(1),
    p = r.useRef(f);
  p.current = f;
  let {
    fetchState: h,
    totalPages: E
  } = (0, l.cj)([g.Z], () => {
    var e, t;
    return {
      fetchState: g.Z.getFetchState({
        query: n,
        guildId: d,
        page: f,
        integrationType: o.Y.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: true,
        excludeNonEmbeddedApps: u,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true,
        source: s.F.APP_LAUNCHER
      }),
      totalPages: null != (t = null == (e = g.Z.getSearchResults({
        query: n,
        guildId: d,
        page: f,
        integrationType: o.Y.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: true,
        excludeNonEmbeddedApps: u,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true,
        source: s.F.APP_LAUNCHER
      })) ? true : e.totalPages) ? t : 0
    }
  }, [n, d, f, u]), y = r.useMemo(() => Array.from({
    length: h === g.M.FETCHED || h === g.M.ERROR ? f : f - 1
  }, (e, t) => {
    var r, i;
    return null != (i = null == (r = g.Z.getSearchResults({
      query: n,
      guildId: d,
      page: t + 1,
      integrationType: o.Y.USER_INSTALL,
      minUserInstallCommandCount: 1,
      excludeAppsWithCustomInstallUrl: true,
      excludeNonEmbeddedApps: u,
      excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true,
      source: s.F.APP_LAUNCHER
    })) ? true : r.results) ? i : []
  }), [h, d, n, f, u]), O = r.useCallback(() => {
    let e = y.length;
    h === g.M.FETCHED && e === p.current && e > 0 && e < E && e < a && y[e - 1].length > 0 && (p.current++, _(e => e + 1))
  }, [h, a, y, E]), I = r.useCallback(e => {
    let {
      query: t,
      page: n,
      guildId: r
    } = e;
    m.yC({
      query: t,
      guildId: r,
      options: {
        page: n,
        integrationType: o.Y.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: true,
        excludeNonEmbeddedApps: u,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true,
        source: s.F.APP_LAUNCHER
      }
    })
  }, [u]);
  return r.useEffect(() => {
    i && I({
      query: n,
      page: f,
      guildId: d
    })
  }, [n, d, I, f, i]), r.useEffect(() => {
    _(1)
  }, [d, n]), {
    fetchState: h,
    applicationResults: y.flat(),
    fetchNextPage: O
  }
}