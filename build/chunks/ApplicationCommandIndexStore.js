/** Chunk was on web.js **/
/** chunk id: 213459, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FN: () => et,
  If: () => eG,
  JK: () => ev,
  LD: () => eg,
  PL: () => eE,
  ZP: () => eh,
  em: () => em,
  un: () => eU,
  v1: () => eT
}), require("./953529.js"), require("./388685.js"), require("./539854.js"), require("./642613.js"), require("./35282.js"), require("./361932.js"), require("./187205.js"), require("./997841.js");
var r, Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
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

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function L(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      x(e, t, n[t])
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

function j(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : M(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let k = new Chunk710845.Z("ApplicationCommandIndexStore"),
  U = Symbol("currentUser"),
  G = Symbol("stale"),
  B = Symbol("current"),
  Z = Object.freeze({
    descriptors: [],
    commands: [],
    sectionedCommands: [],
    loading: true
  }),
  F = Object.freeze({
    serverVersion: B,
    fetchState: {
      fetching: false
    },
    result: {
      sections: {},
      sectionIdsByBotId: {},
      version: B
    }
  }),
  V = Object.freeze({
    serverVersion: G,
    fetchState: {
      fetching: false
    }
  }),
  H = 5e3,
  Y = {
    sensitivity: "accent",
    numeric: true
  },
  W = false,
  K = [];

function z(e) {
  switch (e.type) {
    case "guild":
      return e.guildId;
    case "channel":
      return e.channelId;
    case "user":
      return U;
    case "application":
      return e.applicationId
  }
}

function q(e, t) {
  let n, r = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = z(e),
    a = ep.indices[i];
  return null != a ? ("fetchState" in t && a.fetchState.fetching && a.fetchState.abort.abort(), n = L({}, a, t)) : r && (n = L({
    serverVersion: G,
    fetchState: {
      fetching: false
    }
  }, t)), true !== n && (ep.indices[i] = n, "application" === e.type && (ep.applicationIndices.set(i, n), ep.applicationIndicesVersion = ep.applicationIndicesVersion + 1)), a
}

function X(e) {
  let t = z(e),
    n = ep.indices[t];
  (null == n ? true : n.fetchState.fetching) && n.fetchState.abort.abort(), delete ep.indices[t]
}

function Q() {
  for (let e of Object.values(ep.indices)) module.fetchState.fetching && module.fetchState.abort.abort();
  ep.indices = {}
}

function J() {
  for (let e of K) er(module);
  K = []
}

function $() {
  for (let e of Object.values(ep.indices)) module.serverVersion = G;
  J(), W = true
}

function ee(e) {
  var t;
  let {
    target: n
  } = e, r = z(n);
  eN(null != (t = ep.indices[r]) ? t : V) && en(n)
}
async function et(e) {
  var t, n, r;
  let i = z(e),
    a = null != (t = ep.indices[i]) ? t : V;
  if (!eN(a)) {
    if (a.fetchState.fetching) {
      let e = a.fetchState.promise;
      return await e, null != (n = ep.indices[i]) ? n : V
    }
    return a
  }
  return await en(e), null != (r = ep.indices[i]) ? r : V
}
async function en(e) {
  let t = new AbortController,
    n = new O.o;
  q(e, {
    fetchState: {
      fetching: true,
      abort: t,
      promise: n.promise
    }
  }, true), await (0, S.a)(e, t).then(n.resolve).catch(n.reject)
}

function er(e) {
  var t, n;
  let r = arguments.length > 1 && true !== arguments[1] && arguments[1],
    {
      target: i,
      index: a
    } = e,
    o = null == (t = b.default.getCurrentUser()) ? true : t.id;
  if (null == o) return W || K.push(e), false;
  let s = {},
    l = {},
    u = new Set;
  for (let e of a.applications) {
    if (null == e.bot && null != e.bot_id) {
      l[e.bot_id] = e.id;
      let t = b.default.getUser(e.bot_id);
      null != t ? e.bot = t : u.add(e.bot_id)
    } else null != e.bot && (l[e.bot.id] = e.id);
    let t = {
      descriptor: j(L({}, (0, N.X0)(eP(e))), {
        permissions: null != e.permissions ? (0, _.tk)(eL(e.permissions, o)) : true,
        botId: e.bot_id
      }),
      commands: {}
    };
    s[e.id] = t
  }
  for (let e of ("guild" === i.type && u.size > 0 && c.Z.requestMembersById(i.guildId, [...u]), (0, N.nG)(a.application_commands.map(e => ew(e, o)), true))) {
    let t = s[e.applicationId];
    if (null == t) {
      k.error("Command has no matching application");
      continue
    }
    t.commands[e.id] = e
  }
  let d = null != (n = a.version) ? n : B;
  q(i, {
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

function ei(e) {
  let {
    target: t
  } = e;
  q(t, {
    fetchState: {
      fetching: false,
      retryAfter: Date.now() + H
    }
  })
}

function ea(e) {
  var t;
  let {
    guildId: n,
    version: r
  } = e, i = q({
    type: "guild",
    guildId: n
  }, {
    serverVersion: null != r ? r : G
  }), a = null == i || null == (t = i.result) ? true : t.sectionIdsByBotId;
  if (null != a)
    for (let e in a) {
      let t = g.Z.getDMFromUserId(e);
      null != t && q({
        type: "channel",
        channelId: t
      }, {
        serverVersion: G
      })
    }
}

function eo(e, t) {
  var n;
  let r = z({
      type: "guild",
      guildId: e
    }),
    i = null == (n = ep.indices[r]) ? true : n.result;
  if (null == i) returnfalse;
  let a = false;
  return t.forEach(e => {
    let {
      user: t
    } = e;
    if (!t.bot) return;
    let n = i.sectionIdsByBotId[t.id];
    if (null == n) return;
    let r = i.sections[n];
    o()(null != r, "Bot has no matching index section"), o()(null != r.descriptor.application, "Bot's index section has no application info");
    let s = (0, N.X0)(j(L({}, r.descriptor.application), {
      bot: t
    }));
    r.descriptor = L({}, r.descriptor, s), a = true
  }), a
}

function es(e) {
  let {
    applicationId: t,
    channelId: n,
    guildId: r
  } = e;
  ep.hasContextStateApplication({
    applicationId: t,
    channelId: n,
    guildId: r
  }) && q(null != r ? {
    type: "guild",
    guildId: r
  } : {
    type: "channel",
    channelId: n
  }, {
    serverVersion: G
  }), ep.hasUserStateApplication(t) && q({
    type: "user"
  }, {
    serverVersion: G
  }), ep.hasApplicationState(t) && q({
    type: "application",
    applicationId: t
  }, {
    serverVersion: G
  })
}

function el(e) {
  let {
    channel: t
  } = e;
  X({
    type: "channel",
    channelId: t.id
  })
}

function ec(e) {
  let {
    guild: t
  } = e;
  X({
    type: "guild",
    guildId: t.id
  })
}

function eu() {
  q({
    type: "user"
  }, {
    serverVersion: G
  })
}

function ed(e) {
  let {
    chunks: t
  } = e, n = false;
  for (let e of t) n = eo(e.guildId, e.members) || n;
  return n
}

function ef() {
  let e = Chunk706454.default.locale;
  return module !== ep.oldLocale && (Q(), ep.collator = new Intl.Collator(module, {
    sensitivity: "accent",
    numeric: true
  }), ep.oldLocale = module, true)
}
class e_ extends(r = Chunk442837.ZP.Store) {
  initialize() {
    this.waitFor(Chunk706454.default), this.waitFor(Chunk654455.ZP, Chunk822245.Z, Chunk314897.default, Chunk592125.Z, Chunk430824.Z, Chunk594174.default), this.syncWith([Chunk706454.default], () => {
      ef()
    })
  }
  getContextState(e) {
    var t, n;
    return "contextless" !== e.type && eC(e.channel) ? null != (n = this.indices[null != (t = e.channel.guild_id) ? t : e.channel.id]) ? n : V : F
  }
  hasContextStateApplication(e) {
    var t, n;
    let {
      applicationId: r,
      channelId: i,
      guildId: a
    } = e, o = this.indices[null != a ? a : i];
    return null != (null != (n = null == o || null == (t = o.result) ? true : t.sections) ? n : {})[r]
  }
  getGuildState(e) {
    var t;
    return null == e ? F : null != (t = this.indices[e]) ? t : V
  }
  getUserState() {
    var e;
    return null != (e = this.indices[U]) ? module : V
  }
  hasUserStateApplication(e) {
    var t, n;
    let r = this.indices[U];
    return null != (null != (n = null == r || null == (t = r.result) ? true : t.sections) ? n : {})[e]
  }
  getApplicationState(e) {
    var t;
    return null == e ? F : null != (t = this.indices[e]) ? t : V
  }
  getApplicationStates() {
    return this.applicationIndices
  }
  hasApplicationState(e) {
    return e in this.indices
  }
  query(e, t, n) {
    if (null == b.default.getCurrentUser()) return Z;
    let r = "channel" === e.type ? e.channel : true,
      i = this.getContextState(e),
      a = this.getUserState(),
      o = this.getApplicationState(n.applicationId),
      s = this.getApplicationStates(),
      l = (0, R.k)(r, t.commandTypes),
      c = null == r || (null == l ? true : l.hasBaseAccessPermissions) === true,
      u = false !== t.applicationCommands,
      d = false;
    n.allowFetch && (u && c && null != r && eC(r) && (y.default.track(D.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
      miss: null == i.result,
      size: Object.keys(ep.indices).length
    }), eN(i) && null != r && (null != r.guild_id ? (0, S.j)({
      type: "guild",
      guildId: r.guild_id
    }) : (0, S.j)({
      type: "channel",
      channelId: r.id
    }), d = true)), eN(a) && ((0, S.j)({
      type: "user"
    }), d = true), eN(o) && null != n.applicationId && ((0, S.j)({
      type: "application",
      applicationId: n.applicationId
    }), d = true));
    let f = eS({
      permissionContext: l,
      text: t.text,
      allowApplicationCommands: u,
      builtIns: t.builtIns,
      scoreMethod: n.scoreMethod,
      allowEmptySections: n.allowEmptySections,
      contextState: i,
      userState: a,
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
    super(...e), x(this, "indices", {}), x(this, "applicationIndices", new Map), x(this, "applicationIndicesVersion", 0), x(this, "oldLocale", p.default.locale), x(this, "collator", new Intl.Collator(p.default.locale, Y))
  }
}
x(e_, "displayName", "ApplicationCommandIndexStore");
let ep = new e_(Chunk570140.Z, {
    LOGOUT: Q,
    CONNECTION_OPEN: $,
    APPLICATION_COMMAND_INDEX_FETCH_REQUEST: ee,
    APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: er,
    APPLICATION_COMMAND_INDEX_FETCH_FAILURE: ei,
    APPLICATION_COMMAND_EXECUTE_BAD_VERSION: es,
    CHANNEL_DELETE: el,
    GUILD_DELETE: ec,
    USER_APPLICATION_UPDATE: eu,
    USER_APPLICATION_REMOVE: eu,
    GUILD_APPLICATION_COMMAND_INDEX_UPDATE: ea,
    GUILD_MEMBERS_CHUNK_BATCH: ed
  }),
  eh = ep;

function em(e, t, n) {
  let [r, a] = i.useState(true), o = (0, s.cj)([ep], () => "channel" === e.type ? ep.getContextState(e) : ep.getUserState());
  return i.useEffect(() => {
    if (r) {
      if ("contextless" === e.type) {
        n && eN(o) && (0, S.j)({
          type: "user"
        });
        return
      }
      n && t && eC(e.channel) && (y.default.track(D.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
        miss: null == o.result,
        size: Object.keys(ep.indices).length
      }), eN(o) && (null != e.channel.guild_id ? (0, S.j)({
        type: "guild",
        guildId: e.channel.guild_id
      }) : (0, S.j)({
        type: "channel",
        channelId: e.channel.id
      }))), a(false)
    }
  }, [o, n, e, t, r]), o
}

function eg(e, t) {
  let [n, r] = i.useState(true), a = (0, s.cj)([ep], () => {
    var t;
    return null != (t = ep.indices[e]) ? t : V
  });
  return i.useEffect(() => {
    n && null != e && (t && (y.default.track(D.rMx.APPLICATION_COMMAND_CACHE_FETCH, {
      miss: null == a.result,
      size: Object.keys(ep.indices).length
    }), eN(a) && (0, S.j)({
      type: "guild",
      guildId: e
    })), r(false))
  }, [a, t, e, n]), a
}

function eE(e, t) {
  let [n, r] = i.useState(true), a = (0, s.cj)([ep], () => ep.getUserState());
  return i.useEffect(() => {
    n && (t && eN(a) && e && (0, S.j)({
      type: "user"
    }), r(false))
  }, [a, t, e, n]), a
}

function eb(e, t) {
  let [n, r] = i.useState(true), a = (0, s.e7)([ep], () => ep.getApplicationState(e));
  i.useEffect(() => {
    n && (t && eN(a) && null != e && (0, S.j)({
      type: "application",
      applicationId: e
    }), r(false))
  }, [t, e, a, n])
}

function ey() {
  return (0, Chunk442837.e7)([ep], () => ep.getApplicationStates())
}

function eO() {
  return (0, Chunk442837.e7)([ep], () => ep.applicationIndicesVersion)
}

function ev(e, t, n, r) {
  let {
    descriptors: a,
    commands: o,
    sectionedCommands: s,
    loading: l
  } = eT(e, n, r), c = i.useMemo(() => "channel" === e.type ? {
    channel: e.channel,
    guild: t
  } : true, [e, t]), u = (0, I.R)(c);
  return i.useMemo(() => {
    if (!r.includeFrecency || 0 === u.length) return {
      descriptors: a,
      commands: o,
      sectionedCommands: s,
      loading: l
    };
    let e = o.filter(e => u.includes(e.id)).sort((e, t) => {
      let n = T.ZP.getScoreWithoutLoadingLatest(c, e);
      return T.ZP.getScoreWithoutLoadingLatest(c, t) - n
    }).splice(0, w.hz);
    return 0 === e.length ? {
      descriptors: a,
      commands: o,
      sectionedCommands: s,
      loading: l
    } : {
      descriptors: [v.Tm[w.bi.FRECENCY], ...a],
      commands: e.concat(o),
      sectionedCommands: [{
        section: v.Tm[w.bi.FRECENCY],
        data: e
      }, ...s],
      loading: l
    }
  }, [l, r.includeFrecency, u, o, a, s, c])
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
    a = (0, R.Hs)(r, t.commandTypes),
    o = false !== t.applicationCommands,
    s = em(e, o, n.allowFetch),
    l = eE(o, n.allowFetch),
    c = ey(),
    u = eO();
  return eb(n.applicationId, n.allowFetch), i.useMemo(() => eS({
    permissionContext: a,
    text: t.text,
    allowApplicationCommands: o,
    builtIns: t.builtIns,
    scoreMethod: n.scoreMethod,
    allowEmptySections: n.allowEmptySections,
    contextState: s,
    userState: l,
    applicationStates: n.allowApplicationState ? c : new Map,
    sortOptions: n.sortOptions,
    singleApplicationId: n.applicationId,
    installOnDemand: n.installOnDemand
  }), [a, t.text, t.builtIns, o, n.scoreMethod, n.allowEmptySections, n.sortOptions, n.allowApplicationState, n.applicationId, n.installOnDemand, s, l, c, u])
}

function eS(e) {
  var t, n, r, i, a, s, l;
  let {
    permissionContext: c,
    contextState: u,
    userState: f,
    applicationStates: _,
    text: p,
    builtIns: m = A.D.ALLOW,
    allowApplicationCommands: g = true,
    singleApplicationId: b,
    allowEmptySections: y = false,
    scoreMethod: O = A.p.NONE,
    sortOptions: I = eI,
    installOnDemand: S = false
  } = e, {
    commandTypes: C
  } = c, N = null == p ? true : p.toLowerCase(), R = null == N ? true : N.split(" "), P = m === A.D.ONLY_TEXT, D = m !== A.D.DENY ? (0, v.Kh)(C, true, P) : [], x = [], M = {
    permissionContext: c,
    query: N,
    splitQuery: R,
    allowEmptySections: y,
    scoreMethod: O,
    installOnDemand: S
  }, k = null != (i = null == (t = u.result) ? true : t.sections) ? i : {}, U = null != (a = null == (n = f.result) ? true : n.sections) ? a : {}, G = new Set;
  if (g) {
    if (c.hasBaseAccessPermissions)
      for (let e in k) {
        let t = k[e];
        (null == b || t.descriptor.id === b) && G.add(e)
      }
    for (let e in U) {
      let t = U[e];
      (null == b || t.descriptor.id === b) && G.add(e)
    }
  }
  let B = new Map;
  for (let [e, t] of _)
    if (null == b || e === b) {
      let e = null == (s = t.result) ? true : s.sections;
      if (null != e)
        for (let t of Object.keys(e)) G.add(t), B.set(t, e[t])
    } for (let e of Array.from(G)) {
    let t, n, r = k[e],
      i = U[e],
      a = B.get(e),
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
    } else null != r ? (t = r.descriptor, n = Object.values(r.commands)) : null != i ? (t = i.descriptor, n = Object.values(i.commands)) : null != a && (t = a.descriptor, n = Object.values(a.commands));
    o()(null != t, "Failed to select application descriptor"), o()(null != n, "Failed to select list of application commands");
    let c = eA(t, n, s, l, M);
    null != c && x.push(c)
  }
  if (I.applications.useFrecency && h.DZ.loadIfNecessary(), x.sort((e, t) => {
      if (I.applications.useScore && O === A.p.APPLICATION_ONLY) {
        var n, r, i, a;
        let o = null != (i = null == (n = e.data[0]) ? true : n.score) ? i : Number.MAX_VALUE,
          s = null != (a = null == (r = t.data[0]) ? true : r.score) ? a : Number.MAX_VALUE;
        if (o !== s) return o - s
      }
      if (I.applications.useFrecency) {
        let n = d.Z.getScoreWithoutLoadingLatest(e.section.id),
          r = d.Z.getScoreWithoutLoadingLatest(t.section.id);
        if (n !== r) return r - n
      }
      return ek(e.section.name, t.section.name)
    }), D.length > 0 || true === y) {
    let e = eA(v.Tm[w.bi.BUILT_IN], D, true, true, M);
    null != e && x.push(e)
  }
  let Z = x.flatMap(e => e.data.map(t => j(L({}, t), {
    section: e.section
  })));
  if (O === A.p.COMMAND_ONLY || O === A.p.COMMAND_OR_APPLICATION) {
    let e = c.context,
      t = E.Z.getGuild(null == c || null == (l = c.context) ? true : l.guild_id);
    I.commands.useFrecency && h.DZ.loadIfNecessary();
    let n = null != e ? {
      channel: e,
      guild: t
    } : true;
    Z.sort((e, t) => {
      if (I.commands.useScore) {
        var r, i;
        let n = null != (r = e.score) ? r : 0,
          a = null != (i = t.score) ? i : 0;
        if (n !== a) return n - a
      }
      if (I.commands.useFrecency) {
        let r = T.ZP.getScoreWithoutLoadingLatest(n, e),
          i = T.ZP.getScoreWithoutLoadingLatest(n, t);
        if (r !== i) return i - r
      }
      return ek(e.displayName, t.displayName)
    })
  }
  return {
    commands: Z,
    descriptors: x.map(e => e.section),
    sectionedCommands: x,
    loading: (null == u ? true : u.fetchState.fetching) === true || (null == f ? true : f.fetchState.fetching) === true || null != b && (null == (r = _.get(b)) ? true : r.fetchState.fetching) === true
  }
}

function eA(e, t, n, r, i) {
  let a, {
      query: o,
      splitQuery: s,
      allowEmptySections: l,
      scoreMethod: c,
      permissionContext: u,
      installOnDemand: d
    } = i,
    {
      context: f,
      userId: _,
      roleIds: p,
      isImpersonating: h
    } = u,
    m = (null == f ? true : f.guild_id) != null ? P.ML(e.permissions, f.guild_id, _, p, h) : null,
    g = (null == f ? true : f.guild_id) != null ? P.ZJ(e.permissions, f, f.guild_id) : null,
    E = [];
  for (let i of t) P.Ft(i, u, {
    applicationAllowedForUser: m,
    applicationAllowedForChannel: g,
    commandBotId: e.botId,
    isGuildInstalled: n,
    isUserInstalled: r || d
  }) === P.mF.ALLOWED && E.push(i);
  return 0 !== (a = c !== A.p.NONE && null != o && null != s ? eM(o, s, E, e, c) : E).length || l ? ((c === A.p.NONE || c === A.p.APPLICATION_ONLY) && a.sort((e, t) => ek(e.displayName, t.displayName)), {
    section: e,
    data: a
  }) : null
}

function eC(e) {
  var t;
  return (null == e ? true : e.guild_id) != null || e.type === D.d4z.DM && (null == (t = b.default.getUser(e.getRecipientId())) ? true : t.bot) === true
}

function eN(e) {
  return !!eR(e) && !e.fetchState.fetching && (null == e.fetchState.retryAfter || Date.now() >= e.fetchState.retryAfter)
}

function eR(e) {
  var t;
  return (null == (t = e.result) ? true : t.version) !== e.serverVersion
}

function eP(e) {
  return {
    description: e.description,
    icon: e.icon,
    id: e.id,
    name: e.name,
    bot: e.bot,
    flags: e.flags
  }
}

function ew(e, t) {
  var n, r, i, a, o;
  let s = j(L({}, e), {
    description: null != (i = null != (r = e.description_default) ? r : e.description) ? i : "",
    dm_permission: e.dm_permission,
    name: null != (a = e.name_default) ? a : e.name,
    options: null != (o = null == (n = e.options) ? true : n.map(eD)) ? o : [],
    permissions: null != e.permissions ? eL(e.permissions, t) : true
  });
  return e.description !== e.description_default && (s.description_localized = e.description), e.name !== e.name_default && (s.name_localized = e.name), s
}

function eD(e) {
  var t, n, r, i;
  let a = j(L({}, e), {
    choices: null == (t = e.choices) ? true : t.map(ex),
    description: null != (r = e.description_default) ? r : e.description,
    name: null != (i = e.name_default) ? i : e.name,
    options: null == (n = e.options) ? true : n.map(eD)
  });
  return e.description !== e.description_default && (a.description_localized = e.description), e.name !== e.name_default && (a.name_localized = e.name), a
}

function ex(e) {
  var t;
  let n = j(L({}, e), {
    name: null != (t = e.name_default) ? t : e.name
  });
  return e.name !== e.name_default && (n.name_localized = e.name), n
}

function eL(e, t) {
  let n = [];
  if (null != e.user && n.push({
      type: C.Kw.USER,
      id: t,
      permission: e.user
    }), null != e.channels)
    for (let [t, r] of Object.entries(e.channels)) n.push({
      type: C.Kw.CHANNEL,
      id: t,
      permission: r
    });
  if (null != e.roles)
    for (let [t, r] of Object.entries(e.roles)) n.push({
      type: C.Kw.ROLE,
      id: t,
      permission: r
    });
  return n
}

function eM(e, t, n, r, i) {
  let a, o = [];
  if (i === A.p.APPLICATION_ONLY || i === A.p.COMMAND_OR_APPLICATION) {
    let t = r.name.toLocaleLowerCase();
    if (t.startsWith(e)) a = 5;
    else if (t.includes(e)) a = 6;
    else {
      var s, l;
      let t = null == (l = r.application) || null == (s = l.description) ? true : s.toLocaleLowerCase();
      (null == t ? true : t.includes(e)) && (a = 8)
    }
  }
  let c = t[0],
    u = t.slice(1).join(" ");
  for (let t of n) {
    let n;
    (i === A.p.COMMAND_ONLY || i === A.p.COMMAND_OR_APPLICATION) && (n = ej(t, e, c, u)), (true === n || true !== a && a < n) && (n = a), true !== n && o.push(j(L({}, t), {
      score: n
    }))
  }
  return o
}

function ej(e, t, n, r) {
  var i;
  let a = e.untranslatedName.toLocaleLowerCase(),
    o = e.displayName.toLocaleLowerCase();
  if (a.startsWith(t) || o.startsWith(t)) return 0;
  if (a.startsWith(n) && a.split(" ").slice(1).join(" ").startsWith(r) || o.startsWith(n) && o.split(" ").slice(1).join(" ").startsWith(r)) return 1;
  if (a.includes(t) || (null == o ? true : o.includes(t))) return 2;
  let s = false;
  for (let {
      name: n,
      serverLocalizedName: r
    }
    of null != (i = e.options) ? i : []) {
    if (n.startsWith(t) || "".concat(a, " ").concat(n).startsWith(t) || null != o && "".concat(o, " ").concat(n).startsWith(t) || null != r && (r.startsWith(t) || "".concat(a, " ").concat(r).startsWith(t) || null != o && "".concat(o, " ").concat(r).startsWith(t))) return 3;
    (n.includes(t) || (null == r ? true : r.includes(t))) && (s = true)
  }
  if (s) return 4;
  let l = e.untranslatedDescription.toLocaleLowerCase(),
    c = e.displayDescription.toLocaleLowerCase();
  if (l.includes(t) || c.includes(t)) return 7
}

function ek(e, t) {
  return ep.collator.compare(e, t)
}

function eU(e, t) {
  return ek(e, t)
}

function eG(e, t) {
  var n, r, i, a, o, s;
  let l, c;
  if (t === w.bi.BUILT_IN) return {
    descriptor: v.Tm[w.bi.BUILT_IN],
    sectionCommands: (0, v.Kh)([u.yU.CHAT], true, false),
    isGuildInstalled: true,
    isUserInstalled: true
  };
  let d = ep.getContextState(e),
    f = ep.getUserState(),
    _ = null != (o = null == (n = d.result) ? true : n.sections) ? o : {},
    p = null != (s = null == (r = f.result) ? true : r.sections) ? s : {},
    h = _[t],
    m = p[t],
    g = null == (a = ep.getApplicationState(t).result) || null == (i = a.sections) ? true : i[t];
  if (null != h && null != m) {
    for (let e in l = m.descriptor, c = [], m.commands) {
      let t = m.commands[e];
      c.push(t)
    }
    for (let e in h.commands)
      if (!(e in m.commands)) {
        let t = h.commands[e];
        c.push(t)
      }
  } else null != h ? (l = h.descriptor, c = Object.values(h.commands)) : null != m ? (l = m.descriptor, c = Object.values(m.commands)) : null != g && (l = g.descriptor, c = Object.values(g.commands));
  return {
    descriptor: l,
    sectionCommands: c,
    isGuildInstalled: null != h,
    isUserInstalled: null != m
  }
}