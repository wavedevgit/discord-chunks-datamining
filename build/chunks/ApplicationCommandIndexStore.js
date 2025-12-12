/** Chunk was on web.js **/
/** chunk id: 213459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FN: () => en,
  If: () => eZ,
  JK: () => eS,
  LD: () => eE,
  PL: () => eb,
  ZP: () => eh,
  em: () => eg,
  un: () => eG,
  v1: () => eT
}), require("./953529.js"), require("./388685.js"), require("./539854.js"), require("./642613.js"), require("./35282.js"), require("./361932.js"), require("./187205.js"), require("./997841.js");
var r, Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  a = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk749210 = require("./749210.js"),
  Chunk911969 = require("./911969.js"),
  Chunk822245 = require("./822245.js"),
  Chunk710845 = require("./710845.js"),
  Chunk399860 = require("./399860.js"),
  Chunk706454 = require("./706454.js"),
  Chunk675478 = require("./675478.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk226351 = require("./226351.js"),
  Chunk254711 = require("./254711.js"),
  Chunk700089 = require("./700089.js"),
  Chunk654455 = require("./654455.js"),
  Chunk963456 = require("./963456.js"),
  Chunk367790 = require("./367790.js"),
  Chunk895924 = require("./895924.js"),
  Chunk581364 = require("./581364.js"),
  Chunk807169 = require("./807169.js"),
  Chunk104793 = require("./104793.js"),
  Chunk689079 = require("./689079.js"),
  Chunk981631 = require("./981631.js");

function L(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function j(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      L(e, t, n[t])
    })
  }
  return e
}

function M(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function k(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let U = new Chunk710845.Z("ApplicationCommandIndexStore"),
  G = Symbol("currentUser"),
  Z = Symbol("stale"),
  F = Symbol("current"),
  B = Object.freeze({
    descriptors: [],
    commands: [],
    sectionedCommands: [],
    loading: true
  }),
  V = Object.freeze({
    serverVersion: F,
    fetchState: {
      fetching: false
    },
    result: {
      sections: {},
      sectionIdsByBotId: {},
      version: F
    }
  }),
  H = Object.freeze({
    serverVersion: Z,
    fetchState: {
      fetching: false
    }
  }),
  Y = 5e3,
  W = {
    sensitivity: "accent",
    numeric: true
  },
  K = false,
  z = [];

function q(e) {
  switch (e.type) {
    case "guild":
      return e.guildId;
    case "channel":
      return e.channelId;
    case "user":
      return G;
    case "application":
      return e.applicationId
  }
}

function Q(e, t) {
  let n, r = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = q(e),
    o = em.indices[i];
  return null != o ? ("fetchState" in t && o.fetchState.fetching && o.fetchState.abort.abort(), n = j({}, o, t)) : r && (n = j({
    serverVersion: Z,
    fetchState: {
      fetching: false
    }
  }, t)), true !== n && (em.indices[i] = n, "application" === e.type && (em.applicationIndices.set(i, n), em.applicationIndicesVersion = em.applicationIndicesVersion + 1)), o
}

function X(e) {
  let t = q(e),
    n = em.indices[t];
  (null == n ? true : n.fetchState.fetching) && n.fetchState.abort.abort(), delete em.indices[t]
}

function J() {
  for (let e of Object.values(em.indices)) module.fetchState.fetching && module.fetchState.abort.abort();
  em.indices = {}
}

function $() {
  for (let e of z) ei(module);
  z = []
}

function ee() {
  for (let e of Object.values(em.indices)) module.serverVersion = Z;
  $(), K = true
}

function et(e) {
  var t;
  let {
    target: n
  } = e, r = q(n);
  eP(null != (t = em.indices[r]) ? t : H) && er(n)
}
async function en(e) {
  var t, n, r;
  let i = q(e),
    o = null != (t = em.indices[i]) ? t : H;
  if (!eP(o)) {
    if (o.fetchState.fetching) {
      let e = o.fetchState.promise;
      return await e, null != (n = em.indices[i]) ? n : H
    }
    return o
  }
  return await er(e), null != (r = em.indices[i]) ? r : H
}
async function er(e) {
  let t = new AbortController,
    n = new v.o;
  Q(e, {
    fetchState: {
      fetching: true,
      abort: t,
      promise: n.promise
    }
  }, true), await (0, C.a)(e, t).then(n.resolve).catch(n.reject)
}

function ei(e) {
  var t, n;
  let r = arguments.length > 1 && true !== arguments[1] && arguments[1],
    {
      target: i,
      index: o
    } = e,
    a = null == (t = y.default.getCurrentUser()) ? true : t.id;
  if (null == a) return K || z.push(e), false;
  let s = {},
    l = {},
    u = new Set;
  for (let e of o.applications) {
    if (null == e.bot && null != e.bot_id) {
      l[e.bot_id] = e.id;
      let t = y.default.getUser(e.bot_id);
      null != t ? e.bot = t : u.add(e.bot_id)
    } else null != e.bot && (l[e.bot.id] = e.id);
    let t = {
      descriptor: k(j({}, (0, P.X0)(ew(e), false)), {
        permissions: null != e.permissions ? (0, p.tk)(ej(e.permissions, a)) : true,
        botId: e.bot_id
      }),
      commands: {}
    };
    s[e.id] = t
  }
  for (let e of ("guild" === i.type && u.size > 0 && c.Z.requestMembersById(i.guildId, [...u]), (0, P.nG)(o.application_commands.map(e => eD(e, a)), true))) {
    let t = s[e.applicationId];
    if (null == t) {
      U.error("Command has no matching application");
      continue
    }
    t.commands[e.id] = e
  }
  let d = null != (n = o.version) ? n : F;
  Q(i, {
    serverVersion: d,
    result: {
      sections: s,
      sectionIdsByBotId: l,
      version: d
    },
    fetchState: {
      fetching: false
    }
  }, r)
}

function eo(e) {
  let {
    target: t
  } = e;
  Q(t, {
    fetchState: {
      fetching: false,
      retryAfter: Date.now() + Y
    }
  })
}

function ea(e) {
  var t;
  let {
    guildId: n,
    version: r
  } = e, i = Q({
    type: "guild",
    guildId: n
  }, {
    serverVersion: null != r ? r : Z
  }), o = null == i || null == (t = i.result) ? true : t.sectionIdsByBotId;
  if (null != o)
    for (let e in o) {
      let t = g.Z.getDMFromUserId(e);
      null != t && Q({
        type: "channel",
        channelId: t
      }, {
        serverVersion: Z
      })
    }
}

function es(e, t) {
  var n;
  let r = q({
      type: "guild",
      guildId: e
    }),
    i = null == (n = em.indices[r]) ? true : n.result;
  if (null == i) returnfalse;
  let o = false;
  return t.forEach(e => {
    let {
      user: t,
      nick: n
    } = e;
    if (!t.bot) return;
    let r = i.sectionIdsByBotId[t.id];
    if (null == r) return;
    let s = i.sections[r];
    a()(null != s, "Bot has no matching index section"), a()(null != s.descriptor.application, "Bot's index section has no application info");
    let l = (0, P.X0)(k(j({}, s.descriptor.application), {
      bot: t
    }), false, n);
    s.descriptor = j({}, s.descriptor, l), o = true
  }), o
}

function el(e) {
  let {
    applicationId: t,
    channelId: n,
    guildId: r
  } = e;
  em.hasContextStateApplication({
    applicationId: t,
    channelId: n,
    guildId: r
  }) && Q(null != r ? {
    type: "guild",
    guildId: r
  } : {
    type: "channel",
    channelId: n
  }, {
    serverVersion: Z
  }), em.hasUserStateApplication(t) && Q({
    type: "user"
  }, {
    serverVersion: Z
  }), em.hasApplicationState(t) && Q({
    type: "application",
    applicationId: t
  }, {
    serverVersion: Z
  })
}

function ec(e) {
  let {
    channel: t
  } = e;
  X({
    type: "channel",
    channelId: t.id
  })
}

function eu(e) {
  let {
    guild: t
  } = e;
  X({
    type: "guild",
    guildId: t.id
  })
}

function ed() {
  Q({
    type: "user"
  }, {
    serverVersion: Z
  })
}

function ef(e) {
  let {
    chunks: t
  } = e, n = false;
  for (let e of t) n = es(e.guildId, e.members) || n;
  return n
}

function ep() {
  let e = Chunk706454.default.locale;
  return module !== em.oldLocale && (J(), em.collator = new Intl.Collator(module, {
    sensitivity: "accent",
    numeric: true
  }), em.oldLocale = module, true)
}
class e_ extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk706454.default), this.waitFor(Chunk654455.ZP, Chunk822245.Z, Chunk314897.default, Chunk592125.Z, Chunk271383.ZP, Chunk430824.Z, Chunk594174.default), this.syncWith([Chunk706454.default], () => {
      ep()
    })
  }
  getContextState(e) {
    var t, n;
    return "contextless" !== e.type && eN(e.channel) ? null != (n = this.indices[null != (t = e.channel.guild_id) ? t : e.channel.id]) ? n : H : V
  }
  hasContextStateApplication(e) {
    var t, n;
    let {
      applicationId: r,
      channelId: i,
      guildId: o
    } = e, a = this.indices[null != o ? o : i];
    return null != (null != (n = null == a || null == (t = a.result) ? true : t.sections) ? n : {})[r]
  }
  getGuildState(e) {
    var t;
    return null == e ? V : null != (t = this.indices[e]) ? t : H
  }
  getUserState() {
    var e;
    return null != (e = this.indices[G]) ? module : H
  }
  hasUserStateApplication(e) {
    var t, n;
    let r = this.indices[G];
    return null != (null != (n = null == r || null == (t = r.result) ? true : t.sections) ? n : {})[e]
  }
  getApplicationState(e) {
    var t;
    return null == e ? V : null != (t = this.indices[e]) ? t : H
  }
  getApplicationStates() {
    return this.applicationIndices
  }
  hasApplicationState(e) {
    return e in this.indices
  }
  query(e, t, n) {
    if (null == y.default.getCurrentUser()) return B;
    let r = "channel" === e.type ? e.channel : true,
      i = this.getContextState(e),
      o = this.getUserState(),
      a = this.getApplicationState(n.applicationId),
      s = this.getApplicationStates(),
      l = (0, R.k)(r, t.commandTypes),
      c = null == r || (null == l ? true : l.hasBaseAccessPermissions) === true,
      u = false !== t.applicationCommands,
      d = false;
    n.allowFetch && (u && c && null != r && eN(r) && (O.default.track(x.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
      miss: null == i.result,
      size: Object.keys(em.indices).length
    }), eP(i) && null != r && (null != r.guild_id ? (0, C.j)({
      type: "guild",
      guildId: r.guild_id
    }) : (0, C.j)({
      type: "channel",
      channelId: r.id
    }), d = true)), eP(o) && ((0, C.j)({
      type: "user"
    }), d = true), eP(a) && null != n.applicationId && ((0, C.j)({
      type: "application",
      applicationId: n.applicationId
    }), d = true));
    let f = eC({
      permissionContext: l,
      text: t.text,
      allowApplicationCommands: u,
      builtIns: t.builtIns,
      scoreMethod: n.scoreMethod,
      allowEmptySections: n.allowEmptySections,
      contextState: i,
      userState: o,
      applicationStates: n.allowApplicationState ? s : new Map,
      sortOptions: n.sortOptions,
      singleApplicationId: n.applicationId,
      installOnDemand: n.installOnDemand
    });
    return f.loading = f.loading || d, f
  }
  queryInstallOnDemandApp(e, t) {
    let n = g.Z.getChannel(t);
    null != n && this.query(null != n ? {
      channel: n,
      type: "channel"
    } : {
      type: "contextless"
    }, {
      commandTypes: [u.yU.CHAT]
    }, {
      placeholderCount: 5,
      scoreMethod: A.p.COMMAND_ONLY,
      applicationId: e,
      allowFetch: true
    })
  }
  constructor(...e) {
    super(...e), L(this, "indices", {}), L(this, "applicationIndices", new Map), L(this, "applicationIndicesVersion", 0), L(this, "oldLocale", _.default.locale), L(this, "collator", new Intl.Collator(_.default.locale, W))
  }
}
L(e_, "displayName", "ApplicationCommandIndexStore");
let em = new e_(Chunk570140.Z, {
    LOGOUT: J,
    CONNECTION_OPEN: ee,
    APPLICATION_COMMAND_INDEX_FETCH_REQUEST: et,
    APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: ei,
    APPLICATION_COMMAND_INDEX_FETCH_FAILURE: eo,
    APPLICATION_COMMAND_EXECUTE_BAD_VERSION: el,
    CHANNEL_DELETE: ec,
    GUILD_DELETE: eu,
    USER_APPLICATION_UPDATE: ed,
    USER_APPLICATION_REMOVE: ed,
    GUILD_APPLICATION_COMMAND_INDEX_UPDATE: ea,
    GUILD_MEMBERS_CHUNK_BATCH: ef
  }),
  eh = em;

function eg(e, t, n) {
  let [r, o] = i.useState(true), a = (0, s.cj)([em], () => "channel" === e.type ? em.getContextState(e) : em.getUserState());
  return i.useEffect(() => {
    if (r) {
      if ("contextless" === e.type) {
        n && eP(a) && (0, C.j)({
          type: "user"
        });
        return
      }
      n && t && eN(e.channel) && (O.default.track(x.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
        miss: null == a.result,
        size: Object.keys(em.indices).length
      }), eP(a) && (null != e.channel.guild_id ? (0, C.j)({
        type: "guild",
        guildId: e.channel.guild_id
      }) : (0, C.j)({
        type: "channel",
        channelId: e.channel.id
      }))), o(false)
    }
  }, [a, n, e, t, r]), a
}

function eE(e, t) {
  let [n, r] = i.useState(true), o = (0, s.cj)([em], () => {
    var t;
    return null != (t = em.indices[e]) ? t : H
  });
  return i.useEffect(() => {
    n && null != e && (t && (O.default.track(x.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
      miss: null == o.result,
      size: Object.keys(em.indices).length
    }), eP(o) && (0, C.j)({
      type: "guild",
      guildId: e
    })), r(false))
  }, [o, t, e, n]), o
}

function eb(e, t) {
  let [n, r] = i.useState(true), o = (0, s.cj)([em], () => em.getUserState());
  return i.useEffect(() => {
    n && (t && eP(o) && e && (0, C.j)({
      type: "user"
    }), r(false))
  }, [o, t, e, n]), o
}

function ey(e, t) {
  let [n, r] = i.useState(true), o = (0, s.e7)([em], () => em.getApplicationState(e));
  i.useEffect(() => {
    n && (t && eP(o) && null != e && (0, C.j)({
      type: "application",
      applicationId: e
    }), r(false))
  }, [t, e, o, n])
}

function eO() {
  return (0, Chunk442837.e7)([em], () => em.getApplicationStates())
}

function ev() {
  return (0, Chunk442837.e7)([em], () => em.applicationIndicesVersion)
}

function eS(e, t, n, r) {
  let {
    descriptors: o,
    commands: a,
    sectionedCommands: s,
    loading: l
  } = eT(e, n, r), c = i.useMemo(() => "channel" === e.type ? {
    channel: e.channel,
    guild: t
  } : true, [e, t]), u = (0, I.R)(c);
  return i.useMemo(() => {
    if (!r.includeFrecency || 0 === u.length) return {
      descriptors: o,
      commands: a,
      sectionedCommands: s,
      loading: l
    };
    let e = a.filter(e => u.includes(e.id)).sort((e, t) => {
      let n = T.ZP.getScoreWithoutLoadingLatest(c, e);
      return T.ZP.getScoreWithoutLoadingLatest(c, t) - n
    }).splice(0, D.hz);
    return 0 === e.length ? {
      descriptors: o,
      commands: a,
      sectionedCommands: s,
      loading: l
    } : {
      descriptors: [S.Tm[D.bi.FRECENCY], ...o],
      commands: e.concat(a),
      sectionedCommands: [{
        section: S.Tm[D.bi.FRECENCY],
        data: e
      }, ...s],
      loading: l
    }
  }, [l, r.includeFrecency, u, a, o, s, c])
}
let eI = Object.freeze({
  applications: {
    useFrecency: false,
    useScore: false
  },
  commands: {
    useFrecency: true,
    useScore: true
  }
});

function eT(e, t, n) {
  let r = "channel" === e.type ? e.channel : true,
    o = (0, R.Hs)(r, t.commandTypes),
    a = false !== t.applicationCommands,
    s = eg(e, a, n.allowFetch),
    l = eb(a, n.allowFetch),
    c = eO(),
    u = ev();
  return ey(n.applicationId, n.allowFetch), i.useMemo(() => eC({
    permissionContext: o,
    text: t.text,
    allowApplicationCommands: a,
    builtIns: t.builtIns,
    scoreMethod: n.scoreMethod,
    allowEmptySections: n.allowEmptySections,
    contextState: s,
    userState: l,
    launcherContext: e,
    applicationStates: n.allowApplicationState ? c : new Map,
    sortOptions: n.sortOptions,
    singleApplicationId: n.applicationId,
    installOnDemand: n.installOnDemand
  }), [o, t.text, t.builtIns, a, n.scoreMethod, n.allowEmptySections, n.sortOptions, n.allowApplicationState, n.applicationId, n.installOnDemand, s, l, e, c, u])
}

function eC(e) {
  var t, n, r, i, o, s, l;
  let {
    permissionContext: c,
    contextState: u,
    userState: f,
    applicationStates: p,
    text: _,
    builtIns: h = A.D.ALLOW,
    allowApplicationCommands: g = true,
    singleApplicationId: E,
    allowEmptySections: y = false,
    scoreMethod: O = A.p.NONE,
    sortOptions: v = eI,
    installOnDemand: I = false
  } = e, {
    commandTypes: C
  } = c, N = null == _ ? true : _.toLowerCase(), P = null == N ? true : N.split(" "), R = h === A.D.ONLY_TEXT, w = h !== A.D.DENY ? (0, S.Kh)(C, true, R) : [], x = [], L = {
    permissionContext: c,
    query: N,
    splitQuery: P,
    allowEmptySections: y,
    scoreMethod: O,
    installOnDemand: I
  }, M = null != (i = null == (t = u.result) ? true : t.sections) ? i : {}, U = null != (o = null == (n = f.result) ? true : n.sections) ? o : {}, G = new Set;
  if (g) {
    if (c.hasBaseAccessPermissions)
      for (let e in M) {
        let t = M[e];
        (null == E || t.descriptor.id === E) && G.add(e)
      }
    for (let e in U) {
      let t = U[e];
      (null == E || t.descriptor.id === E) && G.add(e)
    }
  }
  let Z = new Map;
  for (let [e, t] of p)
    if (null == E || e === E) {
      let e = null == (s = t.result) ? true : s.sections;
      if (null != e)
        for (let t of Object.keys(e)) G.add(t), Z.set(t, e[t])
    } for (let e of Array.from(G)) {
    let t, n, r = M[e],
      i = U[e],
      o = Z.get(e),
      s = null != r,
      l = null != i;
    if (null != r && null != i) {
      for (let e in t = i.descriptor, n = [], i.commands) {
        let t = i.commands[e];
        n.push(t)
      }
      for (let e in r.commands)
        if (!(e in i.commands)) {
          let t = r.commands[e];
          n.push(t)
        }
    } else null != r ? (t = r.descriptor, n = Object.values(r.commands)) : null != i ? (t = i.descriptor, n = Object.values(i.commands)) : null != o && (t = o.descriptor, n = Object.values(o.commands));
    a()(null != t, "Failed to select application descriptor"), a()(null != n, "Failed to select list of application commands");
    let c = eA(t, n, s, l, L);
    null != c && x.push(c)
  }
  if (v.applications.useFrecency && m.DZ.loadIfNecessary(), x.sort((e, t) => {
      if (v.applications.useScore && O === A.p.APPLICATION_ONLY) {
        var n, r, i, o;
        let a = null != (i = null == (n = e.data[0]) ? true : n.score) ? i : Number.MAX_VALUE,
          s = null != (o = null == (r = t.data[0]) ? true : r.score) ? o : Number.MAX_VALUE;
        if (a !== s) return a - s
      }
      if (v.applications.useFrecency) {
        let n = d.Z.getScoreWithoutLoadingLatest(e.section.id),
          r = d.Z.getScoreWithoutLoadingLatest(t.section.id);
        if (n !== r) return r - n
      }
      return eU(e.section.name, t.section.name)
    }), w.length > 0 || true === y) {
    let e = eA(S.Tm[D.bi.BUILT_IN], w, true, true, L);
    null != e && x.push(e)
  }
  let F = x.flatMap(e => e.data.map(t => k(j({}, t), {
    section: e.section
  })));
  if (O === A.p.COMMAND_ONLY || O === A.p.COMMAND_OR_APPLICATION) {
    let e = c.context,
      t = b.Z.getGuild(null == c || null == (l = c.context) ? true : l.guild_id);
    v.commands.useFrecency && m.DZ.loadIfNecessary();
    let n = null != e ? {
      channel: e,
      guild: t
    } : true;
    F.sort((e, t) => {
      if (v.commands.useScore) {
        var r, i;
        let n = null != (r = e.score) ? r : 0,
          o = null != (i = t.score) ? i : 0;
        if (n !== o) return n - o
      }
      if (v.commands.useFrecency) {
        let r = T.ZP.getScoreWithoutLoadingLatest(n, e),
          i = T.ZP.getScoreWithoutLoadingLatest(n, t);
        if (r !== i) return i - r
      }
      return eU(e.displayName, t.displayName)
    })
  }
  return {
    commands: F,
    descriptors: x.map(e => e.section),
    sectionedCommands: x,
    loading: (null == u ? true : u.fetchState.fetching) === true || (null == f ? true : f.fetchState.fetching) === true || null != E && (null == (r = p.get(E)) ? true : r.fetchState.fetching) === true
  }
}

function eA(e, t, n, r, i) {
  let o, {
      query: a,
      splitQuery: s,
      allowEmptySections: l,
      scoreMethod: c,
      permissionContext: u,
      installOnDemand: d
    } = i,
    {
      context: f,
      userId: p,
      roleIds: _,
      isImpersonating: m
    } = u,
    h = (null == f ? true : f.guild_id) != null ? w.ML(e.permissions, f.guild_id, p, _, m) : null,
    g = (null == f ? true : f.guild_id) != null ? w.ZJ(e.permissions, f, f.guild_id) : null,
    E = [];
  for (let i of t) w.Ft(i, u, {
    applicationAllowedForUser: h,
    applicationAllowedForChannel: g,
    commandBotId: e.botId,
    isGuildInstalled: n,
    isUserInstalled: r || d
  }) === w.mF.ALLOWED && E.push(i);
  return 0 !== (o = c !== A.p.NONE && null != a && null != s ? eM(a, s, E, e, c) : E).length || l ? ((c === A.p.NONE || c === A.p.APPLICATION_ONLY) && o.sort((e, t) => eU(e.displayName, t.displayName)), {
    section: e,
    data: o
  }) : null
}

function eN(e) {
  var t;
  return (null == e ? true : e.guild_id) != null || e.type === x.d4z.DM && (null == (t = y.default.getUser(e.getRecipientId())) ? true : t.bot) === true
}

function eP(e) {
  return !!eR(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
}

function eR(e) {
  var t;
  return (null == (t = e.result) ? true : t.version) !== e.serverVersion
}

function ew(e) {
  return {
    description: e.description,
    icon: e.icon,
    id: e.id,
    name: e.name,
    bot: e.bot,
    flags: e.flags
  }
}

function eD(e, t) {
  var n, r, i, o, a;
  let s = k(j({}, e), {
    description: null != (i = null != (r = e.description_default) ? r : e.description) ? i : "",
    dm_permission: e.dm_permission,
    name: null != (o = e.name_default) ? o : e.name,
    options: null != (a = null == (n = e.options) ? true : n.map(ex)) ? a : [],
    permissions: null != e.permissions ? ej(e.permissions, t) : true
  });
  return e.description !== e.description_default && (s.description_localized = e.description), e.name !== e.name_default && (s.name_localized = e.name), s
}

function ex(e) {
  var t, n, r, i;
  let o = k(j({}, e), {
    choices: null == (t = e.choices) ? true : t.map(eL),
    description: null != (r = e.description_default) ? r : e.description,
    name: null != (i = e.name_default) ? i : e.name,
    options: null == (n = e.options) ? true : n.map(ex)
  });
  return e.description !== e.description_default && (o.description_localized = e.description), e.name !== e.name_default && (o.name_localized = e.name), o
}

function eL(e) {
  var t;
  let n = k(j({}, e), {
    name: null != (t = e.name_default) ? t : e.name
  });
  return e.name !== e.name_default && (n.name_localized = e.name), n
}

function ej(e, t) {
  let n = [];
  if (null != e.user && n.push({
      type: N.Kw.USER,
      id: t,
      permission: e.user
    }), null != e.channels)
    for (let [t, r] of Object.entries(e.channels)) n.push({
      type: N.Kw.CHANNEL,
      id: t,
      permission: r
    });
  if (null != e.roles)
    for (let [t, r] of Object.entries(e.roles)) n.push({
      type: N.Kw.ROLE,
      id: t,
      permission: r
    });
  return n
}

function eM(e, t, n, r, i) {
  let o, a = [];
  if (i === A.p.APPLICATION_ONLY || i === A.p.COMMAND_OR_APPLICATION) {
    let t = r.name.toLocaleLowerCase();
    if (t.startsWith(e)) o = 5;
    else if (t.includes(e)) o = 6;
    else {
      var s, l;
      let t = null == (l = r.application) || null == (s = l.description) ? true : s.toLocaleLowerCase();
      (null == t ? true : t.includes(e)) && (o = 8)
    }
  }
  let c = t[0],
    u = t.slice(1).join(" ");
  for (let t of n) {
    let n;
    (i === A.p.COMMAND_ONLY || i === A.p.COMMAND_OR_APPLICATION) && (n = ek(t, e, c, u)), (true === n || true !== o && o < n) && (n = o), true !== n && a.push(k(j({}, t), {
      score: n
    }))
  }
  return a
}

function ek(e, t, n, r) {
  var i;
  let o = e.untranslatedName.toLocaleLowerCase(),
    a = e.displayName.toLocaleLowerCase();
  if (o.startsWith(t) || a.startsWith(t)) return 0;
  if (o.startsWith(n) && o.split(" ").slice(1).join(" ").startsWith(r) || a.startsWith(n) && a.split(" ").slice(1).join(" ").startsWith(r)) return 1;
  if (o.includes(t) || (null == a ? true : a.includes(t))) return 2;
  let s = false;
  for (let {
      name: n,
      serverLocalizedName: r
    }
    of null != (i = e.options) ? i : []) {
    if (n.startsWith(t) || "".concat(o, " ").concat(n).startsWith(t) || null != a && "".concat(a, " ").concat(n).startsWith(t) || null != r && (r.startsWith(t) || "".concat(o, " ").concat(r).startsWith(t) || null != a && "".concat(a, " ").concat(r).startsWith(t))) return 3;
    (n.includes(t) || (null == r ? true : r.includes(t))) && (s = true)
  }
  if (s) return 4;
  let l = e.untranslatedDescription.toLocaleLowerCase(),
    c = e.displayDescription.toLocaleLowerCase();
  if (l.includes(t) || c.includes(t)) return 7
}

function eU(e, t) {
  return em.collator.compare(e, t)
}

function eG(e, t) {
  return eU(e, t)
}

function eZ(e, t) {
  var n, r, i, o, a, s;
  let l, c;
  if (t === D.bi.BUILT_IN) return {
    descriptor: S.Tm[D.bi.BUILT_IN],
    sectionCommands: (0, S.Kh)([u.yU.CHAT], true, false),
    isGuildInstalled: true,
    isUserInstalled: true
  };
  let d = em.getContextState(e),
    f = em.getUserState(),
    p = null != (a = null == (n = d.result) ? true : n.sections) ? a : {},
    _ = null != (s = null == (r = f.result) ? true : r.sections) ? s : {},
    m = p[t],
    h = _[t],
    g = null == (o = em.getApplicationState(t).result) || null == (i = o.sections) ? true : i[t];
  if (null != m && null != h) {
    for (let e in l = h.descriptor, c = [], h.commands) {
      let t = h.commands[e];
      c.push(t)
    }
    for (let e in m.commands)
      if (!(e in h.commands)) {
        let t = m.commands[e];
        c.push(t)
      }
  } else null != m ? (l = m.descriptor, c = Object.values(m.commands)) : null != h ? (l = h.descriptor, c = Object.values(h.commands)) : null != g && (l = g.descriptor, c = Object.values(g.commands));
  return {
    descriptor: l,
    sectionCommands: c,
    isGuildInstalled: null != m,
    isUserInstalled: null != h
  }
}