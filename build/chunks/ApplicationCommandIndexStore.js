/** Chunk was on web.js **/
/** chunk id: 264322, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A4: () => ey,
  Ay: () => em,
  ON: () => eE,
  RF: () => eG,
  SD: () => eg,
  Sx: () => eV,
  XC: () => eA,
  ZA: () => eS,
  Zn: () => en
}), require("./228524.js"), require("./896048.js"), require("./321073.js"), require("./638769.js"), require("./747238.js"), require("./114821.js"), require("./339614.js"), require("./938796.js");
var r, Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk683588 = require("./683588.js"),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk686956 = require("./686956.js"),
  Chunk155718 = require("./155718.js"),
  Chunk630248 = require("./630248.js"),
  Chunk626584 = require("./626584.js"),
  Chunk200662 = require("./200662.js"),
  Chunk773669 = require("./773669.js"),
  Chunk594061 = require("./594061.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk827785 = require("./827785.js"),
  Chunk56494 = require("./56494.js"),
  Chunk26909 = require("./26909.js"),
  Chunk577700 = require("./577700.js"),
  Chunk210978 = require("./210978.js"),
  Chunk392054 = require("./392054.js"),
  Chunk168186 = require("./168186.js"),
  Chunk240591 = require("./240591.js"),
  Chunk46477 = require("./46477.js"),
  Chunk73510 = require("./73510.js"),
  Chunk652215 = require("./652215.js");

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
let U = new Chunk626584.A("ApplicationCommandIndexStore"),
  G = Symbol("currentUser"),
  V = Symbol("stale"),
  F = Symbol("current"),
  B = Object.freeze({
    descriptors: [],
    commands: [],
    sectionedCommands: [],
    loading: true
  }),
  H = Object.freeze({
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
  Y = Object.freeze({
    serverVersion: V,
    fetchState: {
      fetching: false
    }
  }),
  W = 5e3,
  K = {
    sensitivity: "accent",
    numeric: true
  },
  z = false,
  q = [];

function Z(e) {
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

function X(e, t) {
  let n, r = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = Z(e),
    a = eh.indices[i];
  return null != a ? ("fetchState" in t && a.fetchState.fetching && a.fetchState.abort.abort(), n = j({}, a, t)) : r && (n = j({
    serverVersion: V,
    fetchState: {
      fetching: false
    }
  }, t)), true !== n && (eh.indices[i] = n, "application" === e.type && (eh.applicationIndices.set(i, n), eh.applicationIndicesVersion = eh.applicationIndicesVersion + 1)), a
}

function Q(e) {
  let t = Z(e),
    n = eh.indices[t];
  (null == n ? true : n.fetchState.fetching) && n.fetchState.abort.abort(), delete eh.indices[t]
}

function J() {
  for (let e of Object.values(eh.indices)) e.fetchState.fetching && e.fetchState.abort.abort();
  eh.indices = {}
}

function $() {
  for (let e of q) ei(e);
  q = []
}

function ee() {
  for (let e of Object.values(eh.indices)) e.serverVersion = V;
  $(), z = true
}

function et(e) {
  var t;
  let {
    target: n
  } = e, r = Z(n);
  ew(null != (t = eh.indices[r]) ? t : Y) && er(n)
}
async function en(e) {
  var t, n, r;
  let i = Z(e),
    a = null != (t = eh.indices[i]) ? t : Y;
  if (!ew(a)) {
    if (a.fetchState.fetching) {
      let e = a.fetchState.promise;
      return await e, null != (r = eh.indices[i]) ? r : Y
    }
    return a
  }
  return await er(e), null != (n = eh.indices[i]) ? n : Y
}
async function er(e) {
  let t = new AbortController,
    n = new o.K;
  X(e, {
    fetchState: {
      fetching: true,
      abort: t,
      promise: n.promise
    }
  }, true), await (0, T.E)(e, t).then(n.resolve).catch(n.reject)
}

function ei(e) {
  var t, n;
  let r = arguments.length > 1 && true !== arguments[1] && arguments[1],
    {
      target: i,
      index: a
    } = e,
    s = null == (n = O.default.getCurrentUser()) ? true : n.id;
  if (null == s) return z || q.push(e), false;
  let o = {},
    l = {},
    c = new Set;
  for (let e of a.applications) {
    if (null == e.bot && null != e.bot_id) {
      l[e.bot_id] = e.id;
      let t = O.default.getUser(e.bot_id);
      null != t ? e.bot = t : c.add(e.bot_id)
    } else null != e.bot && (l[e.bot.id] = e.id);
    let t = {
      descriptor: k(j({}, (0, w.bq)(eP(e), false)), {
        permissions: null != e.permissions ? (0, _.UZ)(ej(e.permissions, s)) : true,
        botId: e.bot_id
      }),
      commands: {}
    };
    o[e.id] = t
  }
  for (let e of ("guild" === i.type && c.size > 0 && u.A.requestMembersById(i.guildId, [...c]), (0, w.Lz)(a.application_commands.map(e => eD(e, s)), true))) {
    let t = o[e.applicationId];
    if (null == t) {
      U.error("Command has no matching application");
      continue
    }
    t.commands[e.id] = e
  }
  let d = null != (t = a.version) ? t : F;
  X(i, {
    serverVersion: d,
    result: {
      sections: o,
      sectionIdsByBotId: l,
      version: d
    },
    fetchState: {
      fetching: false
    }
  }, r)
}

function ea(e) {
  let {
    target: t
  } = e;
  X(t, {
    fetchState: {
      fetching: false,
      retryAfter: Date.now() + W
    }
  })
}

function es(e) {
  var t;
  let {
    guildId: n,
    version: r
  } = e, i = X({
    type: "guild",
    guildId: n
  }, {
    serverVersion: null != r ? r : V
  }), a = null == i || null == (t = i.result) ? true : t.sectionIdsByBotId;
  if (null != a)
    for (let e in a) {
      let t = E.A.getDMFromUserId(e);
      null != t && X({
        type: "channel",
        channelId: t
      }, {
        serverVersion: V
      })
    }
}

function eo(e, t) {
  var n;
  let r = Z({
      type: "guild",
      guildId: e
    }),
    i = null == (n = eh.indices[r]) ? true : n.result;
  if (null == i) returnfalse;
  let a = false;
  return t.forEach(e => {
    let {
      user: t,
      nick: n
    } = e;
    if (!t.bot) return;
    let r = i.sectionIdsByBotId[t.id];
    if (null == r) return;
    let o = i.sections[r];
    s()(null != o, "Bot has no matching index section"), s()(null != o.descriptor.application, "Bot's index section has no application info");
    let l = (0, w.bq)(k(j({}, o.descriptor.application), {
      bot: t
    }), false, n);
    o.descriptor = j({}, o.descriptor, l), a = true
  }), a
}

function el(e) {
  let {
    applicationId: t,
    channelId: n,
    guildId: r
  } = e;
  eh.hasContextStateApplication({
    applicationId: t,
    channelId: n,
    guildId: r
  }) && X(null != r ? {
    type: "guild",
    guildId: r
  } : {
    type: "channel",
    channelId: n
  }, {
    serverVersion: V
  }), eh.hasUserStateApplication(t) && X({
    type: "user"
  }, {
    serverVersion: V
  }), eh.hasApplicationState(t) && X({
    type: "application",
    applicationId: t
  }, {
    serverVersion: V
  })
}

function ec(e) {
  let {
    channel: t
  } = e;
  Q({
    type: "channel",
    channelId: t.id
  })
}

function eu(e) {
  let {
    guild: t
  } = e;
  Q({
    type: "guild",
    guildId: t.id
  })
}

function ed() {
  X({
    type: "user"
  }, {
    serverVersion: V
  })
}

function ef(e) {
  let {
    chunks: t
  } = e, n = false;
  for (let e of t) n = eo(e.guildId, e.members) || n;
  return n
}

function ep() {
  let e = h.default.locale;
  return e !== eh.oldLocale && (J(), eh.collator = new Intl.Collator(e, {
    sensitivity: "accent",
    numeric: true
  }), eh.oldLocale = e, true)
}
class e_ extends(r = Chunk311907.Ay.Store) {
  initialize() {
    this.waitFor(h.default), this.waitFor(S.Ay, f.A, g.default, E.A, y.Ay, b.A, O.default), this.syncWith([h.default], () => {
      ep()
    })
  }
  getContextState(e) {
    var t, n;
    return "contextless" !== e.type && eN(e.channel) ? null != (t = this.indices[null != (n = e.channel.guild_id) ? n : e.channel.id]) ? t : Y : H
  }
  hasContextStateApplication(e) {
    var t, n;
    let {
      applicationId: r,
      channelId: i,
      guildId: a
    } = e, s = this.indices[null != a ? a : i];
    return null != (null != (t = null == s || null == (n = s.result) ? true : n.sections) ? t : {})[r]
  }
  getGuildState(e) {
    var t;
    return null == e ? H : null != (t = this.indices[e]) ? t : Y
  }
  getUserState() {
    var e;
    return null != (e = this.indices[G]) ? e : Y
  }
  hasUserStateApplication(e) {
    var t, n;
    let r = this.indices[G];
    return null != (null != (t = null == r || null == (n = r.result) ? true : n.sections) ? t : {})[e]
  }
  getApplicationState(e) {
    var t;
    return null == e ? H : null != (t = this.indices[e]) ? t : Y
  }
  getApplicationStates() {
    return this.applicationIndices
  }
  hasApplicationState(e) {
    return e in this.indices
  }
  query(e, t, n) {
    if (null == O.default.getCurrentUser()) return B;
    let r = "channel" === e.type ? e.channel : true,
      i = this.getContextState(e),
      a = this.getUserState(),
      s = this.getApplicationState(n.applicationId),
      o = this.getApplicationStates(),
      l = (0, R.Bh)(r, t.commandTypes),
      c = null == r || (null == l ? true : l.hasBaseAccessPermissions) === true,
      u = false !== t.applicationCommands,
      d = false;
    n.allowFetch && (u && c && null != r && eN(r) && (v.default.track(x.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
      miss: null == i.result,
      size: Object.keys(eh.indices).length
    }), ew(i) && null != r && (null != r.guild_id ? (0, T.$)({
      type: "guild",
      guildId: r.guild_id
    }) : (0, T.$)({
      type: "channel",
      channelId: r.id
    }), d = true)), ew(a) && ((0, T.$)({
      type: "user"
    }), d = true), ew(s) && null != n.applicationId && ((0, T.$)({
      type: "application",
      applicationId: n.applicationId
    }), d = true));
    let f = eT({
      permissionContext: l,
      text: t.text,
      allowApplicationCommands: u,
      builtIns: t.builtIns,
      scoreMethod: n.scoreMethod,
      allowEmptySections: n.allowEmptySections,
      contextState: i,
      userState: a,
      applicationStates: n.allowApplicationState ? o : new Map,
      sortOptions: n.sortOptions,
      singleApplicationId: n.applicationId,
      installOnDemand: n.installOnDemand
    });
    return f.loading = f.loading || d, f
  }
  queryInstallOnDemandApp(e, t) {
    let n = E.A.getChannel(t);
    null != n && this.query(null != n ? {
      channel: n,
      type: "channel"
    } : {
      type: "contextless"
    }, {
      commandTypes: [d.kc.CHAT]
    }, {
      placeholderCount: 5,
      scoreMethod: C.M.COMMAND_ONLY,
      applicationId: e,
      allowFetch: true
    })
  }
  constructor(...e) {
    super(...e), L(this, "indices", {}), L(this, "applicationIndices", new Map), L(this, "applicationIndicesVersion", 0), L(this, "oldLocale", h.default.locale), L(this, "collator", new Intl.Collator(h.default.locale, K))
  }
}
L(e_, "displayName", "ApplicationCommandIndexStore");
let eh = new e_(Chunk73153.h, {
    LOGOUT: J,
    CONNECTION_OPEN: ee,
    APPLICATION_COMMAND_INDEX_FETCH_REQUEST: et,
    APPLICATION_COMMAND_INDEX_FETCH_SUCCESS: ei,
    APPLICATION_COMMAND_INDEX_FETCH_FAILURE: ea,
    APPLICATION_COMMAND_EXECUTE_BAD_VERSION: el,
    CHANNEL_DELETE: ec,
    GUILD_DELETE: eu,
    USER_APPLICATION_UPDATE: ed,
    USER_APPLICATION_REMOVE: ed,
    GUILD_APPLICATION_COMMAND_INDEX_UPDATE: es,
    GUILD_MEMBERS_CHUNK_BATCH: ef
  }),
  em = eh;

function eg(e, t, n) {
  let [r, a] = i.useState(true), s = (0, l.cf)([eh], () => "channel" === e.type ? eh.getContextState(e) : eh.getUserState());
  return i.useEffect(() => {
    if (r) {
      if ("contextless" === e.type) {
        n && ew(s) && (0, T.$)({
          type: "user"
        });
        return
      }
      n && t && eN(e.channel) && (v.default.track(x.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
        miss: null == s.result,
        size: Object.keys(eh.indices).length
      }), ew(s) && (null != e.channel.guild_id ? (0, T.$)({
        type: "guild",
        guildId: e.channel.guild_id
      }) : (0, T.$)({
        type: "channel",
        channelId: e.channel.id
      }))), a(false)
    }
  }, [s, n, e, t, r]), s
}

function eE(e, t) {
  let [n, r] = i.useState(true), a = (0, l.cf)([eh], () => {
    var t;
    return null != (t = eh.indices[e]) ? t : Y
  });
  return i.useEffect(() => {
    n && null != e && (t && (v.default.track(x.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
      miss: null == a.result,
      size: Object.keys(eh.indices).length
    }), ew(a) && (0, T.$)({
      type: "guild",
      guildId: e
    })), r(false))
  }, [a, t, e, n]), a
}

function ey(e, t) {
  let [n, r] = i.useState(true), a = (0, l.cf)([eh], () => eh.getUserState());
  return i.useEffect(() => {
    n && (t && ew(a) && e && (0, T.$)({
      type: "user"
    }), r(false))
  }, [a, t, e, n]), a
}

function eb(e, t) {
  let [n, r] = i.useState(true), a = (0, l.bG)([eh], () => eh.getApplicationState(e));
  i.useEffect(() => {
    n && (t && ew(a) && null != e && (0, T.$)({
      type: "application",
      applicationId: e
    }), r(false))
  }, [t, e, a, n])
}

function eO() {
  return (0, l.bG)([eh], () => eh.getApplicationStates())
}

function ev() {
  return (0, l.bG)([eh], () => eh.applicationIndicesVersion)
}

function eA(e, t, n, r) {
  let {
    descriptors: a,
    commands: s,
    sectionedCommands: o,
    loading: l
  } = eS(e, n, r), c = i.useMemo(() => "channel" === e.type ? {
    channel: e.channel,
    guild: t
  } : true, [e, t]), u = (0, I.F)(c);
  return i.useMemo(() => {
    if (!r.includeFrecency || 0 === u.length) return {
      descriptors: a,
      commands: s,
      sectionedCommands: o,
      loading: l
    };
    let e = s.filter(e => u.includes(e.id)).sort((e, t) => {
      let n = S.Ay.getScoreWithoutLoadingLatest(c, e);
      return S.Ay.getScoreWithoutLoadingLatest(c, t) - n
    }).splice(0, D.Ob);
    return 0 === e.length ? {
      descriptors: a,
      commands: s,
      sectionedCommands: o,
      loading: l
    } : {
      descriptors: [A.gZ[D.Ik.FRECENCY], ...a],
      commands: e.concat(s),
      sectionedCommands: [{
        section: A.gZ[D.Ik.FRECENCY],
        data: e
      }, ...o],
      loading: l
    }
  }, [l, r.includeFrecency, u, s, a, o, c])
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

function eS(e, t, n) {
  let r = "channel" === e.type ? e.channel : true,
    a = (0, R.MW)(r, t.commandTypes),
    s = false !== t.applicationCommands,
    o = eg(e, s, n.allowFetch),
    l = ey(s, n.allowFetch),
    c = eO(),
    u = ev();
  return eb(n.applicationId, n.allowFetch), i.useMemo(() => eT({
    permissionContext: a,
    text: t.text,
    allowApplicationCommands: s,
    builtIns: t.builtIns,
    scoreMethod: n.scoreMethod,
    allowEmptySections: n.allowEmptySections,
    contextState: o,
    userState: l,
    launcherContext: e,
    applicationStates: n.allowApplicationState ? c : new Map,
    sortOptions: n.sortOptions,
    singleApplicationId: n.applicationId,
    installOnDemand: n.installOnDemand
  }), [a, t.text, t.builtIns, s, n.scoreMethod, n.allowEmptySections, n.sortOptions, n.allowApplicationState, n.applicationId, n.installOnDemand, o, l, e, c, u])
}

function eT(e) {
  var t, n, r, i, a, o, l;
  let {
    permissionContext: c,
    contextState: u,
    userState: d,
    applicationStates: p,
    text: _,
    builtIns: h = C.n.ALLOW,
    allowApplicationCommands: g = true,
    singleApplicationId: E,
    allowEmptySections: y = false,
    scoreMethod: O = C.M.NONE,
    sortOptions: v = eI,
    installOnDemand: I = false
  } = e, {
    commandTypes: T
  } = c, N = null == _ ? true : _.toLowerCase(), w = null == N ? true : N.split(" "), R = h === C.n.ONLY_TEXT, P = h !== C.n.DENY ? (0, A.Ez)(T, true, R) : [], x = [], L = {
    permissionContext: c,
    query: N,
    splitQuery: w,
    allowEmptySections: y,
    scoreMethod: O,
    installOnDemand: I
  }, M = null != (t = null == (r = u.result) ? true : r.sections) ? t : {}, U = null != (n = null == (i = d.result) ? true : i.sections) ? n : {}, G = new Set;
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
  let V = new Map;
  for (let [e, t] of p)
    if (null == E || e === E) {
      let e = null == (o = t.result) ? true : o.sections;
      if (null != e)
        for (let t of Object.keys(e)) G.add(t), V.set(t, e[t])
    } for (let e of Array.from(G)) {
    let t, n, r = M[e],
      i = U[e],
      a = V.get(e),
      o = null != r,
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
    s()(null != t, "Failed to select application descriptor"), s()(null != n, "Failed to select list of application commands");
    let c = eC(t, n, o, l, L);
    null != c && x.push(c)
  }
  if (v.applications.useFrecency && m.bW.loadIfNecessary(), x.sort((e, t) => {
      if (v.applications.useScore && O === C.M.APPLICATION_ONLY) {
        var n, r, i, a;
        let s = null != (n = null == (i = e.data[0]) ? true : i.score) ? n : Number.MAX_VALUE,
          o = null != (r = null == (a = t.data[0]) ? true : a.score) ? r : Number.MAX_VALUE;
        if (s !== o) return s - o
      }
      if (v.applications.useFrecency) {
        let n = f.A.getScoreWithoutLoadingLatest(e.section.id),
          r = f.A.getScoreWithoutLoadingLatest(t.section.id);
        if (n !== r) return r - n
      }
      return eU(e.section.name, t.section.name)
    }), P.length > 0 || true === y) {
    let e = eC(A.gZ[D.Ik.BUILT_IN], P, true, true, L);
    null != e && x.push(e)
  }
  let F = x.flatMap(e => e.data.map(t => k(j({}, t), {
    section: e.section
  })));
  if (O === C.M.COMMAND_ONLY || O === C.M.COMMAND_OR_APPLICATION) {
    let e = c.context,
      t = b.A.getGuild(null == c || null == (l = c.context) ? true : l.guild_id);
    v.commands.useFrecency && m.bW.loadIfNecessary();
    let n = null != e ? {
      channel: e,
      guild: t
    } : true;
    F.sort((e, t) => {
      if (v.commands.useScore) {
        var r, i;
        let n = null != (r = e.score) ? r : 0,
          a = null != (i = t.score) ? i : 0;
        if (n !== a) return n - a
      }
      if (v.commands.useFrecency) {
        let r = S.Ay.getScoreWithoutLoadingLatest(n, e),
          i = S.Ay.getScoreWithoutLoadingLatest(n, t);
        if (r !== i) return i - r
      }
      return eU(e.displayName, t.displayName)
    })
  }
  return {
    commands: F,
    descriptors: x.map(e => e.section),
    sectionedCommands: x,
    loading: (null == u ? true : u.fetchState.fetching) === true || (null == d ? true : d.fetchState.fetching) === true || null != E && (null == (a = p.get(E)) ? true : a.fetchState.fetching) === true
  }
}

function eC(e, t, n, r, i) {
  let a, {
      query: s,
      splitQuery: o,
      allowEmptySections: l,
      scoreMethod: c,
      permissionContext: u,
      installOnDemand: d
    } = i,
    {
      context: f,
      userId: p,
      roleIds: _,
      isImpersonating: h
    } = u,
    m = (null == f ? true : f.guild_id) != null ? P.we(e.permissions, f.guild_id, p, _, h) : null,
    g = (null == f ? true : f.guild_id) != null ? P._W(e.permissions, f, f.guild_id) : null,
    E = [];
  for (let i of t) P.zl(i, u, {
    applicationAllowedForUser: m,
    applicationAllowedForChannel: g,
    commandBotId: e.botId,
    isGuildInstalled: n,
    isUserInstalled: r || d
  }) === P.CA.ALLOWED && E.push(i);
  return 0 !== (a = c !== C.M.NONE && null != s && null != o ? eM(s, o, E, e, c) : E).length || l ? ((c === C.M.NONE || c === C.M.APPLICATION_ONLY) && a.sort((e, t) => eU(e.displayName, t.displayName)), {
    section: e,
    data: a
  }) : null
}

function eN(e) {
  var t;
  return (null == e ? true : e.guild_id) != null || e.type === x.rbe.DM && (null == (t = O.default.getUser(e.getRecipientId())) ? true : t.bot) === true
}

function ew(e) {
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

function eD(e, t) {
  var n, r, i, a, s;
  let o = k(j({}, e), {
    description: null != (n = null != (r = e.description_default) ? r : e.description) ? n : "",
    dm_permission: e.dm_permission,
    name: null != (i = e.name_default) ? i : e.name,
    options: null != (a = null == (s = e.options) ? true : s.map(ex)) ? a : [],
    permissions: null != e.permissions ? ej(e.permissions, t) : true
  });
  return e.description !== e.description_default && (o.description_localized = e.description), e.name !== e.name_default && (o.name_localized = e.name), o
}

function ex(e) {
  var t, n, r, i;
  let a = k(j({}, e), {
    choices: null == (r = e.choices) ? true : r.map(eL),
    description: null != (t = e.description_default) ? t : e.description,
    name: null != (n = e.name_default) ? n : e.name,
    options: null == (i = e.options) ? true : i.map(ex)
  });
  return e.description !== e.description_default && (a.description_localized = e.description), e.name !== e.name_default && (a.name_localized = e.name), a
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
      type: N.RA.USER,
      id: t,
      permission: e.user
    }), null != e.channels)
    for (let [t, r] of Object.entries(e.channels)) n.push({
      type: N.RA.CHANNEL,
      id: t,
      permission: r
    });
  if (null != e.roles)
    for (let [t, r] of Object.entries(e.roles)) n.push({
      type: N.RA.ROLE,
      id: t,
      permission: r
    });
  return n
}

function eM(e, t, n, r, i) {
  let a, s = [];
  if (i === C.M.APPLICATION_ONLY || i === C.M.COMMAND_OR_APPLICATION) {
    let t = r.name.toLocaleLowerCase();
    if (t.startsWith(e)) a = 5;
    else if (t.includes(e)) a = 6;
    else {
      var o, l;
      let t = null == (l = r.application) || null == (o = l.description) ? true : o.toLocaleLowerCase();
      (null == t ? true : t.includes(e)) && (a = 8)
    }
  }
  let c = t[0],
    u = t.slice(1).join(" ");
  for (let t of n) {
    let n;
    (i === C.M.COMMAND_ONLY || i === C.M.COMMAND_OR_APPLICATION) && (n = ek(t, e, c, u)), (true === n || true !== a && a < n) && (n = a), true !== n && s.push(k(j({}, t), {
      score: n
    }))
  }
  return s
}

function ek(e, t, n, r) {
  var i;
  let a = e.untranslatedName.toLocaleLowerCase(),
    s = e.displayName.toLocaleLowerCase();
  if (a.startsWith(t) || s.startsWith(t)) return 0;
  if (a.startsWith(n) && a.split(" ").slice(1).join(" ").startsWith(r) || s.startsWith(n) && s.split(" ").slice(1).join(" ").startsWith(r)) return 1;
  if (a.includes(t) || (null == s ? true : s.includes(t))) return 2;
  let o = false;
  for (let {
      name: n,
      serverLocalizedName: r
    }
    of null != (i = e.options) ? i : []) {
    if (n.startsWith(t) || "".concat(a, " ").concat(n).startsWith(t) || null != s && "".concat(s, " ").concat(n).startsWith(t) || null != r && (r.startsWith(t) || "".concat(a, " ").concat(r).startsWith(t) || null != s && "".concat(s, " ").concat(r).startsWith(t))) return 3;
    (n.includes(t) || (null == r ? true : r.includes(t))) && (o = true)
  }
  if (o) return 4;
  let l = e.untranslatedDescription.toLocaleLowerCase(),
    c = e.displayDescription.toLocaleLowerCase();
  if (l.includes(t) || c.includes(t)) return 7
}

function eU(e, t) {
  return eh.collator.compare(e, t)
}

function eG(e, t) {
  return eU(e, t)
}

function eV(e, t) {
  var n, r, i, a, s, o;
  let l, c;
  if (t === D.Ik.BUILT_IN) return {
    descriptor: A.gZ[D.Ik.BUILT_IN],
    sectionCommands: (0, A.Ez)([d.kc.CHAT], true, false),
    isGuildInstalled: true,
    isUserInstalled: true
  };
  let u = eh.getContextState(e),
    f = eh.getUserState(),
    p = null != (n = null == (i = u.result) ? true : i.sections) ? n : {},
    _ = null != (r = null == (a = f.result) ? true : a.sections) ? r : {},
    h = p[t],
    m = _[t],
    g = null == (o = eh.getApplicationState(t).result) || null == (s = o.sections) ? true : s[t];
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