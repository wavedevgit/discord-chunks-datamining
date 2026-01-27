/** Chunk was on web.js **/
/** chunk id: 264322, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A4: () => ey,
  Ay: () => em,
  ON: () => eE,
  RF: () => eG,
  SD: () => eg,
  Sx: () => eF,
  XC: () => eA,
  ZA: () => eS,
  Zn: () => en
}), require("./228524.js"), require("./896048.js"), require("./321073.js"), require("./638769.js"), require("./747238.js"), require("./114821.js"), require("./339614.js"), require("./938796.js");
var r, Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
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

function x(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function M(e) {
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

function j(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : j(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let U = new Chunk626584.A("ApplicationCommandIndexStore"),
  G = Symbol("currentUser"),
  F = Symbol("stale"),
  V = Symbol("current"),
  B = Object.freeze({
    descriptors: [],
    commands: [],
    sectionedCommands: [],
    loading: true
  }),
  H = Object.freeze({
    serverVersion: V,
    fetchState: {
      fetching: false
    },
    result: {
      sections: {},
      sectionIdsByBotId: {},
      version: V
    }
  }),
  Y = Object.freeze({
    serverVersion: F,
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

function Q(e, t) {
  let n, r = arguments.length > 2 && true !== arguments[2] && arguments[2],
    i = Z(e),
    a = eh.indices[i];
  return null != a ? ("fetchState" in t && a.fetchState.fetching && a.fetchState.abort.abort(), n = M({}, a, t)) : r && (n = M({
    serverVersion: F,
    fetchState: {
      fetching: false
    }
  }, t)), true !== n && (eh.indices[i] = n, "application" === e.type && (eh.applicationIndices.set(i, n), eh.applicationIndicesVersion = eh.applicationIndicesVersion + 1)), a
}

function X(e) {
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
  for (let e of Object.values(eh.indices)) e.serverVersion = F;
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
    n = new s.K;
  Q(e, {
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
    o = null == (n = O.default.getCurrentUser()) ? true : n.id;
  if (null == o) return z || q.push(e), false;
  let s = {},
    l = {},
    c = new Set;
  for (let e of a.applications) {
    if (null == e.bot && null != e.bot_id) {
      l[e.bot_id] = e.id;
      let t = O.default.getUser(e.bot_id);
      null != t ? e.bot = t : c.add(e.bot_id)
    } else null != e.bot && (l[e.bot.id] = e.id);
    let t = {
      descriptor: k(M({}, (0, w.bq)(eP(e), false)), {
        permissions: null != e.permissions ? (0, _.UZ)(eM(e.permissions, o)) : true,
        botId: e.bot_id
      }),
      commands: {}
    };
    s[e.id] = t
  }
  for (let e of ("guild" === i.type && c.size > 0 && u.A.requestMembersById(i.guildId, [...c]), (0, w.Lz)(a.application_commands.map(e => eD(e, o)), true))) {
    let t = s[e.applicationId];
    if (null == t) {
      U.error("Command has no matching application");
      continue
    }
    t.commands[e.id] = e
  }
  let d = null != (t = a.version) ? t : V;
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

function ea(e) {
  let {
    target: t
  } = e;
  Q(t, {
    fetchState: {
      fetching: false,
      retryAfter: Date.now() + W
    }
  })
}

function eo(e) {
  var t;
  let {
    guildId: n,
    version: r
  } = e, i = Q({
    type: "guild",
    guildId: n
  }, {
    serverVersion: null != r ? r : F
  }), a = null == i || null == (t = i.result) ? true : t.sectionIdsByBotId;
  if (null != a)
    for (let e in a) {
      let t = E.A.getDMFromUserId(e);
      null != t && Q({
        type: "channel",
        channelId: t
      }, {
        serverVersion: F
      })
    }
}

function es(e, t) {
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
    let s = i.sections[r];
    o()(null != s, "Bot has no matching index section"), o()(null != s.descriptor.application, "Bot's index section has no application info");
    let l = (0, w.bq)(k(M({}, s.descriptor.application), {
      bot: t
    }), false, n);
    s.descriptor = M({}, s.descriptor, l), a = true
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
  }) && Q(null != r ? {
    type: "guild",
    guildId: r
  } : {
    type: "channel",
    channelId: n
  }, {
    serverVersion: F
  }), eh.hasUserStateApplication(t) && Q({
    type: "user"
  }, {
    serverVersion: F
  }), eh.hasApplicationState(t) && Q({
    type: "application",
    applicationId: t
  }, {
    serverVersion: F
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
    serverVersion: F
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
    } = e, o = this.indices[null != a ? a : i];
    return null != (null != (t = null == o || null == (n = o.result) ? true : n.sections) ? t : {})[r]
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
      o = this.getApplicationState(n.applicationId),
      s = this.getApplicationStates(),
      l = (0, R.Bh)(r, t.commandTypes),
      c = null == r || (null == l ? true : l.hasBaseAccessPermissions) === true,
      u = false !== t.applicationCommands,
      d = false;
    n.allowFetch && (u && c && null != r && eN(r) && (v.default.track(L.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
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
    }), d = true), ew(o) && null != n.applicationId && ((0, T.$)({
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
      applicationStates: n.allowApplicationState ? s : new Map,
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
    super(...e), x(this, "indices", {}), x(this, "applicationIndices", new Map), x(this, "applicationIndicesVersion", 0), x(this, "oldLocale", h.default.locale), x(this, "collator", new Intl.Collator(h.default.locale, K))
  }
}
x(e_, "displayName", "ApplicationCommandIndexStore");
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
    GUILD_APPLICATION_COMMAND_INDEX_UPDATE: eo,
    GUILD_MEMBERS_CHUNK_BATCH: ef
  }),
  em = eh;

function eg(e, t, n) {
  let [r, a] = i.useState(true), o = (0, l.cf)([eh], () => "channel" === e.type ? eh.getContextState(e) : eh.getUserState());
  return i.useEffect(() => {
    if (r) {
      if ("contextless" === e.type) {
        n && ew(o) && (0, T.$)({
          type: "user"
        });
        return
      }
      n && t && eN(e.channel) && (v.default.track(L.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
        miss: null == o.result,
        size: Object.keys(eh.indices).length
      }), ew(o) && (null != e.channel.guild_id ? (0, T.$)({
        type: "guild",
        guildId: e.channel.guild_id
      }) : (0, T.$)({
        type: "channel",
        channelId: e.channel.id
      }))), a(false)
    }
  }, [o, n, e, t, r]), o
}

function eE(e, t) {
  let [n, r] = i.useState(true), a = (0, l.cf)([eh], () => {
    var t;
    return null != (t = eh.indices[e]) ? t : Y
  });
  return i.useEffect(() => {
    n && null != e && (t && (v.default.track(L.HAw.APPLICATION_COMMAND_CACHE_FETCH, {
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
    commands: o,
    sectionedCommands: s,
    loading: l
  } = eS(e, n, r), c = i.useMemo(() => "channel" === e.type ? {
    channel: e.channel,
    guild: t
  } : true, [e, t]), u = (0, I.F)(c);
  return i.useMemo(() => {
    if (!r.includeFrecency || 0 === u.length) return {
      descriptors: a,
      commands: o,
      sectionedCommands: s,
      loading: l
    };
    let e = o.filter(e => u.includes(e.id)).sort((e, t) => {
      let n = S.Ay.getScoreWithoutLoadingLatest(c, e);
      return S.Ay.getScoreWithoutLoadingLatest(c, t) - n
    }).splice(0, D.Ob);
    return 0 === e.length ? {
      descriptors: a,
      commands: o,
      sectionedCommands: s,
      loading: l
    } : {
      descriptors: [A.gZ[D.Ik.FRECENCY], ...a],
      commands: e.concat(o),
      sectionedCommands: [{
        section: A.gZ[D.Ik.FRECENCY],
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

function eS(e, t, n) {
  let r = "channel" === e.type ? e.channel : true,
    a = (0, R.MW)(r, t.commandTypes),
    o = false !== t.applicationCommands,
    s = eg(e, o, n.allowFetch),
    l = ey(o, n.allowFetch),
    c = eO(),
    u = ev();
  return eb(n.applicationId, n.allowFetch), i.useMemo(() => eT({
    permissionContext: a,
    text: t.text,
    allowApplicationCommands: o,
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
  }), [a, t.text, t.builtIns, o, n.scoreMethod, n.allowEmptySections, n.sortOptions, n.allowApplicationState, n.applicationId, n.installOnDemand, s, l, e, c, u])
}

function eT(e) {
  var t, n, r, i, a, s, l;
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
  } = c, N = null == _ ? true : _.toLowerCase(), w = null == N ? true : N.split(" "), R = h === C.n.ONLY_TEXT, P = h !== C.n.DENY ? (0, A.Ez)(T, true, R) : [], L = [], x = {
    permissionContext: c,
    query: N,
    splitQuery: w,
    allowEmptySections: y,
    scoreMethod: O,
    installOnDemand: I
  }, j = null != (t = null == (r = u.result) ? true : r.sections) ? t : {}, U = null != (n = null == (i = d.result) ? true : i.sections) ? n : {}, G = new Set;
  if (g) {
    if (c.hasBaseAccessPermissions)
      for (let e in j) {
        let t = j[e];
        (null == E || t.descriptor.id === E) && G.add(e)
      }
    for (let e in U) {
      let t = U[e];
      (null == E || t.descriptor.id === E) && G.add(e)
    }
  }
  let F = new Map;
  for (let [e, t] of p)
    if (null == E || e === E) {
      let e = null == (s = t.result) ? true : s.sections;
      if (null != e)
        for (let t of Object.keys(e)) G.add(t), F.set(t, e[t])
    } for (let e of Array.from(G)) {
    let t, n, r = j[e],
      i = U[e],
      a = F.get(e),
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
    let c = eC(t, n, s, l, x);
    null != c && L.push(c)
  }
  if (v.applications.useFrecency && m.bW.loadIfNecessary(), L.sort((e, t) => {
      if (v.applications.useScore && O === C.M.APPLICATION_ONLY) {
        var n, r, i, a;
        let o = null != (n = null == (i = e.data[0]) ? true : i.score) ? n : Number.MAX_VALUE,
          s = null != (r = null == (a = t.data[0]) ? true : a.score) ? r : Number.MAX_VALUE;
        if (o !== s) return o - s
      }
      if (v.applications.useFrecency) {
        let n = f.A.getScoreWithoutLoadingLatest(e.section.id),
          r = f.A.getScoreWithoutLoadingLatest(t.section.id);
        if (n !== r) return r - n
      }
      return eU(e.section.name, t.section.name)
    }), P.length > 0 || true === y) {
    let e = eC(A.gZ[D.Ik.BUILT_IN], P, true, true, x);
    null != e && L.push(e)
  }
  let V = L.flatMap(e => e.data.map(t => k(M({}, t), {
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
    V.sort((e, t) => {
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
    commands: V,
    descriptors: L.map(e => e.section),
    sectionedCommands: L,
    loading: (null == u ? true : u.fetchState.fetching) === true || (null == d ? true : d.fetchState.fetching) === true || null != E && (null == (a = p.get(E)) ? true : a.fetchState.fetching) === true
  }
}

function eC(e, t, n, r, i) {
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
  return 0 !== (a = c !== C.M.NONE && null != o && null != s ? ej(o, s, E, e, c) : E).length || l ? ((c === C.M.NONE || c === C.M.APPLICATION_ONLY) && a.sort((e, t) => eU(e.displayName, t.displayName)), {
    section: e,
    data: a
  }) : null
}

function eN(e) {
  var t;
  return (null == e ? true : e.guild_id) != null || e.type === L.rbe.DM && (null == (t = O.default.getUser(e.getRecipientId())) ? true : t.bot) === true
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
  var n, r, i, a, o;
  let s = k(M({}, e), {
    description: null != (n = null != (r = e.description_default) ? r : e.description) ? n : "",
    dm_permission: e.dm_permission,
    name: null != (i = e.name_default) ? i : e.name,
    options: null != (a = null == (o = e.options) ? true : o.map(eL)) ? a : [],
    permissions: null != e.permissions ? eM(e.permissions, t) : true
  });
  return e.description !== e.description_default && (s.description_localized = e.description), e.name !== e.name_default && (s.name_localized = e.name), s
}

function eL(e) {
  var t, n, r, i;
  let a = k(M({}, e), {
    choices: null == (r = e.choices) ? true : r.map(ex),
    description: null != (t = e.description_default) ? t : e.description,
    name: null != (n = e.name_default) ? n : e.name,
    options: null == (i = e.options) ? true : i.map(eL)
  });
  return e.description !== e.description_default && (a.description_localized = e.description), e.name !== e.name_default && (a.name_localized = e.name), a
}

function ex(e) {
  var t;
  let n = k(M({}, e), {
    name: null != (t = e.name_default) ? t : e.name
  });
  return e.name !== e.name_default && (n.name_localized = e.name), n
}

function eM(e, t) {
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

function ej(e, t, n, r, i) {
  let a, o = [];
  if (i === C.M.APPLICATION_ONLY || i === C.M.COMMAND_OR_APPLICATION) {
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
    (i === C.M.COMMAND_ONLY || i === C.M.COMMAND_OR_APPLICATION) && (n = ek(t, e, c, u)), (true === n || true !== a && a < n) && (n = a), true !== n && o.push(k(M({}, t), {
      score: n
    }))
  }
  return o
}

function ek(e, t, n, r) {
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

function eU(e, t) {
  return eh.collator.compare(e, t)
}

function eG(e, t) {
  return eU(e, t)
}

function eF(e, t) {
  var n, r, i, a, o, s;
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
    g = null == (s = eh.getApplicationState(t).result) || null == (o = s.sections) ? true : o[t];
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