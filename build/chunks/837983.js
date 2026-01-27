/** Chunk was on web.js **/
/** chunk id: 837983, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  j_: () => B,
  pd: () => H
}), require("./896048.js"), require("./321073.js"), require("./747238.js"), require("./864466.js"), require("./443073.js");
var Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk485845 = require("./485845.js"),
  Chunk994369 = require("./994369.js"),
  Chunk311907 = require("./311907.js"),
  Chunk155718 = require("./155718.js"),
  Chunk887700 = require("./887700.js"),
  Chunk26909 = require("./26909.js"),
  Chunk264322 = require("./264322.js"),
  Chunk240591 = require("./240591.js"),
  Chunk46477 = require("./46477.js"),
  Chunk630248 = require("./630248.js"),
  Chunk354138 = require("./354138.js"),
  Chunk651753 = require("./651753.js"),
  Chunk784472 = require("./784472.js"),
  Chunk500049 = require("./500049.js"),
  Chunk735991 = require("./735991.js"),
  Chunk73510 = require("./73510.js");

function v(e) {
  let {
    context: t,
    onlyWithCommands: n,
    includeBuiltIn: i,
    allowFetch: a = true,
    includeEmbeddedApps: o,
    includeNonEmbeddedApps: s
  } = e, l = "channel" === t.type ? t.channel : true, u = (0, p.MW)(l, [c.kc.CHAT]).hasBaseAccessPermissions, d = (0, f.SD)(t, u, a), _ = (0, f.A4)(u, a), h = r.useCallback(e => {
    let t = e.descriptor.application;
    return null != t && (!!(o && (0, b.Ag)(t)) || null != t && s && !(0, b.Ag)(t) && (!n || Object.keys(e.commands).length > 0))
  }, [o, s, n]), m = [], g = new Set;
  if (null != d.result)
    for (let e of Object.values(d.result.sections)) {
      let t = e.descriptor.application;
      null != t && h(e) && (m.push(t), g.add(t.id))
    }
  if (null != _.result)
    for (let e of Object.values(_.result.sections)) {
      let t = e.descriptor.application;
      null != t && !g.has(t.id) && h(e) && m.push(t)
    }
  return s && i && m.push(b.N3), {
    apps: m,
    loading: (null == d ? true : d.fetchState.fetching) === true || (null == _ ? true : _.fetchState.fetching) === true
  }
}

function A(e) {
  var t, n;
  let {
    context: i,
    includeBuiltIn: a = true,
    allowFetch: o = true
  } = e, s = (0, f.SD)(i, true, o), l = (0, f.A4)(true, o);
  return r.useMemo(() => {
    var e, t, n, r, o;
    let c = null != (e = null == (n = s.result) ? true : n.sections) ? e : {},
      u = null != (t = null == (r = l.result) ? true : r.sections) ? t : {},
      d = [...Object.keys(c), ...Object.keys(u).filter(e => !(e in c))];
    a && d.push(O.Ik.BUILT_IN);
    let p = [],
      _ = {};
    for (let e of d) {
      let t = (0, f.Sx)(i, e),
        n = null != (o = t.sectionCommands) ? o : [];
      p.push(...n), n.forEach(e => {
        null != t.descriptor && (_[e.id] = t.descriptor)
      })
    }
    return {
      commands: p,
      commandSectionMap: _,
      loading: true === s.fetchState.fetching || true === l.fetchState.fetching
    }
  }, [i, a, s.fetchState.fetching, null == (t = s.result) ? true : t.sections, l.fetchState.fetching, null == (n = l.result) ? true : n.sections])
}

function I(e) {
  let t = (0, p.Bh)("channel" === e.type ? e.channel : true, [c.kc.CHAT, c.kc.PRIMARY_ENTRY_POINT]);
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
    } = (0, f.Sx)(e, n.id), d = (null == r ? true : r.guild_id) != null ? _.we(null == s ? true : s.permissions, r.guild_id, i, a, o) : null, p = (null == r ? true : r.guild_id) != null ? _._W(null == s ? true : s.permissions, r, r.guild_id) : null;
    return null == l || !(l.length > 0) || l.some(e => _.zl(e, t, {
      applicationAllowedForUser: d,
      applicationAllowedForChannel: p,
      commandBotId: null == s ? true : s.botId,
      isGuildInstalled: c,
      isUserInstalled: u
    }) === _.CA.ALLOWED)
  }
}

function S(e) {
  return [T(e), C(e), N(e), w(e)]
}

function T(e) {
  return t => (0, b.lq)(t).toLocaleLowerCase().startsWith(e.toLocaleLowerCase())
}

function C(e) {
  return t => (0, b.lq)(t).toLocaleLowerCase().includes(e.toLocaleLowerCase())
}

function N(e) {
  return t => {
    var n, r;
    let i = null == (r = (0, b.u8)(t)) ? true : r.toLocaleLowerCase();
    return null != (n = null == i ? true : i.startsWith(e.toLocaleLowerCase())) && n
  }
}

function w(e) {
  return t => {
    var n, r;
    let i = null == (r = (0, b.u8)(t)) ? true : r.toLocaleLowerCase();
    return null != (n = null == i ? true : i.includes(e.toLocaleLowerCase())) && n
  }
}

function R(e, t) {
  let n = h.A.getScoreWithoutLoadingLatest(e.id);
  return h.A.getScoreWithoutLoadingLatest(t.id) - n
}

function P(e, t) {
  let n = (0, b.lq)(e),
    r = (0, b.lq)(t);
  return (0, f.RF)(n, r)
}

function D(e) {
  let t = (0, p.Bh)("channel" === e.type ? e.channel : true, [c.kc.CHAT]),
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
      } = (0, f.Sx)(e, r.applicationId), u = (null == i ? true : i.guild_id) != null ? _.we(null == t ? true : t.permissions, i.guild_id, a, o, s) : null, d = (null == i ? true : i.guild_id) != null ? _._W(null == t ? true : t.permissions, i, i.guild_id) : null;
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
      isUserInstalled: p
    } = n[r.applicationId];
    return _.zl(r, t, {
      applicationAllowedForUser: u,
      applicationAllowedForChannel: c,
      commandBotId: null == l ? true : l.botId,
      isGuildInstalled: d,
      isUserInstalled: p
    }) === _.CA.ALLOWED
  }
}

function L(e) {
  return [x(e), M(e), j(e), k(e), U(e)]
}

function x(e) {
  return t => {
    let n = t.untranslatedName,
      r = t.displayName;
    return n.startsWith(e) || r.startsWith(e)
  }
}

function M(e) {
  let t = null == e ? true : e.split(" "),
    n = t[0],
    r = t.slice(1).join(" ");
  return e => {
    let t = e.untranslatedName,
      i = e.displayName;
    return !!(t.startsWith(n) && t.split(" ").slice(1).join(" ").startsWith(r) || i.startsWith(n) && i.split(" ").slice(1).join(" ").startsWith(r)) || false
  }
}

function j(e) {
  return t => {
    let n = t.untranslatedName,
      r = t.displayName;
    return n.includes(e) || r.includes(e)
  }
}

function k(e) {
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

function U(e) {
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

function G(e) {
  return [F(e), V]
}

function F(e) {
  return (t, n) => {
    let r = d.Ay.getScoreWithoutLoadingLatest(e, t);
    return d.Ay.getScoreWithoutLoadingLatest(e, n) - r
  }
}

function V(e, t) {
  return (0, f.RF)(e.displayName, t.displayName)
}

function B(e) {
  let {
    context: t,
    query: n,
    commandLimit: i,
    applicationLimit: o,
    searchesCommands: s = true,
    searchesBots: l = true,
    searchesActivities: c = true
  } = e;
  n.startsWith("".concat("/")) && (n = n.substring(1));
  let {
    commands: d,
    commandSectionMap: f,
    loading: p
  } = A({
    context: t,
    includeBuiltIn: true
  }), {
    apps: _
  } = v({
    context: t,
    onlyWithCommands: true,
    includeBuiltIn: true,
    includeEmbeddedApps: c,
    includeNonEmbeddedApps: l
  }), h = (0, u.A)({
    guildId: "channel" === t.type ? t.channel.guild_id : null
  }), m = r.useMemo(() => s ? (0, E.V)(d, {
    limit: i,
    filterPredicates: [D(t)],
    bucketPredicates: L(n),
    sortComparers: G({
      channel: "channel" === t.type ? t.channel : true
    })
  }) : [], [s, d, i, t, n]), g = r.useMemo(() => {
    if (0 === m.length) return [];
    let e = new Map(_.map(e => [e.id, e]));
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
  }, [_, m, f]), y = r.useMemo(() => {
    let e = [];
    if (c) {
      let t = new Set(_.map(e => {
        let {
          id: t
        } = e;
        return t
      }));
      e.push(..._), e.push(...h.filter(e => {
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
    } else l && (e = _);
    return (0, E.V)(e, {
      limit: o,
      filterPredicates: [I(t)],
      bucketPredicates: S(n),
      sortComparers: [R, P]
    })
  }, [l, c, o, t, n, _, h]), b = g.length > 0, O = y.length > 0, T = !b && !O;
  return {
    commandResults: g,
    hasCommandResults: b,
    applicationResults: y,
    hasApplicationResults: O,
    isEmptyState: T,
    loading: p && s
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
  n.startsWith("".concat("/")) && (n = n.substring(1));
  let u = c === y.s4.VOICE,
    d = "channel" === t.type ? t.channel.guild_id : true,
    [f, p] = r.useState(1),
    _ = r.useRef(f);
  _.current = f;
  let {
    fetchState: h,
    totalPages: E
  } = (0, l.cf)([g.A], () => {
    var e, t;
    return {
      fetchState: g.A.getFetchState({
        query: n,
        guildId: d,
        page: f,
        integrationType: o.b.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: true,
        excludeNonEmbeddedApps: u,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true,
        source: s.V.APP_LAUNCHER
      }),
      totalPages: null != (e = null == (t = g.A.getSearchResults({
        query: n,
        guildId: d,
        page: f,
        integrationType: o.b.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: true,
        excludeNonEmbeddedApps: u,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true,
        source: s.V.APP_LAUNCHER
      })) ? true : t.totalPages) ? e : 0
    }
  }, [n, d, f, u]), b = r.useMemo(() => Array.from({
    length: h === g.e.FETCHED || h === g.e.ERROR ? f : f - 1
  }, (e, t) => {
    var r, i;
    return null != (r = null == (i = g.A.getSearchResults({
      query: n,
      guildId: d,
      page: t + 1,
      integrationType: o.b.USER_INSTALL,
      minUserInstallCommandCount: 1,
      excludeAppsWithCustomInstallUrl: true,
      excludeNonEmbeddedApps: u,
      excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true,
      source: s.V.APP_LAUNCHER
    })) ? true : i.results) ? r : []
  }), [h, d, n, f, u]), O = r.useCallback(() => {
    let e = b.length;
    h === g.e.FETCHED && e === _.current && e > 0 && e < E && e < a && b[e - 1].length > 0 && (_.current++, p(e => e + 1))
  }, [h, a, b, E]), v = r.useCallback(e => {
    let {
      query: t,
      page: n,
      guildId: r
    } = e;
    m.$P({
      query: t,
      guildId: r,
      options: {
        page: n,
        integrationType: o.b.USER_INSTALL,
        minUserInstallCommandCount: 1,
        excludeAppsWithCustomInstallUrl: true,
        excludeNonEmbeddedApps: u,
        excludeEmbeddedAppsWithoutPrimaryEntryPointAppCommand: true,
        source: s.V.APP_LAUNCHER
      }
    })
  }, [u]);
  return r.useEffect(() => {
    i && v({
      query: n,
      page: f,
      guildId: d
    })
  }, [n, d, v, f, i]), r.useEffect(() => {
    p(1)
  }, [d, n]), {
    fetchState: h,
    applicationResults: b.flat(),
    fetchNextPage: O
  }
}
require("./827669.js")