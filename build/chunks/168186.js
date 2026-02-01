/** Chunk was on web.js **/
/** chunk id: 168186, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $S: () => M,
  Am: () => G,
  Ap: () => R,
  Cq: () => P,
  Ez: () => k,
  Lz: () => T,
  Oe: () => v,
  PV: () => N,
  Qr: () => x,
  XM: () => w,
  bq: () => j,
  gI: () => V,
  hT: () => C,
  my: () => U,
  zl: () => D
}), require("./896048.js"), require("./228524.js"), require("./321073.js"), require("./114821.js"), require("./339614.js"), require("./747238.js"), require("./733351.js");
var Chunk824120 = require("./824120.js"),
  i = require.n(Chunk824120),
  Chunk284009 = require("./284009.js"),
  o = require.n(Chunk284009),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk136722 = require("./136722.js"),
  Chunk155718 = require("./155718.js"),
  Chunk58149 = require("./58149.js"),
  Chunk200662 = require("./200662.js");
require("./95701.js");
var Chunk31717 = require("./31717.js"),
  Chunk392054 = require("./392054.js"),
  Chunk73510 = require("./73510.js"),
  Chunk652215 = require("./652215.js"),
  Chunk818348 = require("./818348.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  var t, n, r;
  let i, {
    rootCommand: a,
    command: o,
    applicationId: s,
    subCommandPath: l,
    useKeyedPermissions: d
  } = e;
  null != a.permissions && a.permissions.length > 0 && (d ? i = (0, f.UZ)(a.permissions) : (i = {}, a.permissions.forEach(e => {
    i[e.id] = e
  })));
  let p = (null != l ? l : []).map(e => e.name),
    m = (null != l ? l : []).map(e => e.displayName);
  return {
    version: a.version,
    guildId: a.guild_id,
    id: [a.id, ...p].join(h.v4),
    untranslatedName: [a.name, ...p].join(" "),
    serverLocalizedName: o.name_localized,
    applicationId: s,
    type: null != (t = a.type) ? t : u.kc.CHAT,
    inputType: _.y$.BOT,
    untranslatedDescription: o.description,
    options: A(o.options),
    rootCommand: a,
    subCommandPath: l,
    defaultMemberPermissions: null == a.default_member_permissions ? true : c.iu(a.default_member_permissions),
    dmPermission: a.dm_permission,
    permissions: i,
    displayName: [null != (n = a.name_localized) ? n : a.name, ...m].join(" "),
    displayDescription: null != (r = o.description_localized) ? r : o.description,
    nsfw: a.nsfw,
    contexts: a.contexts,
    integration_types: a.integration_types,
    global_popularity_rank: a.global_popularity_rank,
    handler: a.handler
  }
}

function A(e) {
  return null == e ? true : e.map(e => {
    var t, n;
    let r = O(y({}, e), {
      choices: I(e.choices),
      options: A(e.options),
      serverLocalizedName: e.name_localized,
      displayName: null != (t = e.name_localized) ? t : e.name,
      displayDescription: null != (n = e.description_localized) ? n : e.description
    });
    return e.type === u.n4.CHANNEL && "channel_types" in e ? O(y({}, r), {
      channelTypes: e.channel_types
    }) : (e.type === u.n4.NUMBER || e.type === u.n4.INTEGER) && ("min_value" in e || "max_value" in e) ? O(y({}, r), {
      minValue: e.min_value,
      maxValue: e.max_value
    }) : e.type === u.n4.STRING && ("min_length" in e || "max_length" in e) ? O(y({}, r), {
      minLength: e.min_length,
      maxLength: e.max_length
    }) : r
  })
}

function I(e) {
  return null == e ? true : e.map(e => {
    var t;
    return O(y({}, e), {
      displayName: null != (t = e.name_localized) ? t : e.name
    })
  })
}

function S(e) {
  var t, n;
  let {
    rootCommand: r,
    command: i,
    applicationId: a,
    subCommandPath: o,
    useKeyedPermissions: s
  } = e;
  if (i.hasOwnProperty("id")) {
    if (null == i.options || 0 === i.options.length) return [v({
      rootCommand: r,
      command: i,
      applicationId: a,
      subCommandPath: o,
      useKeyedPermissions: s
    })]
  } else if (i.type !== u.n4.SUB_COMMAND && i.type !== u.n4.SUB_COMMAND_GROUP && (null == i.options || 0 === i.options.length)) return [v({
    rootCommand: r,
    command: i,
    applicationId: a,
    subCommandPath: o,
    useKeyedPermissions: s
  })];
  let l = [];
  if (null == i.options) return l;
  let c = i.options.filter(e => e.type === u.n4.SUB_COMMAND_GROUP);
  for (let e = 0; e < c.length; e++) l.push(...S({
    rootCommand: r,
    command: c[e],
    applicationId: a,
    subCommandPath: (null != o ? o : []).concat([{
      name: c[e].name,
      type: u.n4.SUB_COMMAND_GROUP,
      displayName: null != (t = c[e].name_localized) ? t : c[e].name
    }]),
    useKeyedPermissions: s
  }));
  let d = i.options.filter(e => e.type === u.n4.SUB_COMMAND);
  for (let e = 0; e < d.length; e++) l.push(v({
    rootCommand: r,
    command: d[e],
    applicationId: a,
    subCommandPath: (null != o ? o : []).concat([{
      name: d[e].name,
      type: u.n4.SUB_COMMAND,
      displayName: null != (n = d[e].name_localized) ? n : d[e].name
    }]),
    useKeyedPermissions: s
  }));
  return 0 === c.length && 0 === d.length && l.push(v({
    rootCommand: r,
    command: i,
    applicationId: a,
    subCommandPath: o,
    useKeyedPermissions: s
  })), l
}

function T(e, t) {
  return l().flatMap(e, e => (o()(null != e.id, "Missing command id"), S({
    rootCommand: e,
    command: e,
    applicationId: e.application_id,
    subCommandPath: true,
    useKeyedPermissions: t
  })))
}

function C(e) {
  return m.Ut1.test(e.trim())
}

function N(e, t, n, r) {
  let i = [];
  return l()(e).forEach(e => {
    t.test(e.displayName) && (null == e.predicate || e.predicate(n)) && i.push(e)
  }), i.slice(0, r)
}

function w(e) {
  let t = e.type === u.n4.STRING,
    n = e.type === u.n4.CHANNEL,
    r = e.type === u.n4.USER || e.type === u.n4.MENTIONABLE,
    i = e.type === u.n4.ROLE || e.type === u.n4.MENTIONABLE;
  return {
    canMentionEveryone: t || i,
    canMentionHere: t,
    canMentionChannels: t || n,
    canMentionUsers: t || r,
    canMentionRoles: t || i,
    canMentionAnyGuildUser: r,
    canMentionNonMentionableRoles: i,
    canMentionOtherGlobals: t
  }
}

function R(e) {
  return i()(e).subtract(1).toString()
}
let P = Chunk136722.iu(0);

function D(e) {
  let {
    PermissionStore: t,
    guild: n,
    selfMember: r,
    applicationLevelPermissions: i,
    commandLevelPermissions: a,
    defaultMemberPermissions: o
  } = e;
  if (n.ownerId === r.userId || t.can(g.xB.ADMINISTRATOR, n)) returntrue;
  let s = n.id;
  if (null != a) {
    let e = L(r, s, a);
    if ("boolean" == typeof e) return e
  }
  let l = L(r, s, i);
  return ("boolean" != typeof l || !!l) && (null == o || !c.aI(o, P) && t.can(o, n))
}

function L(e, t, n) {
  let r = n[(0, f.Eu)(e.userId, _.RA.USER)];
  if (null != r) return r.permission;
  let i = false;
  for (let t of e.roles) {
    let e = n[(0, f.Eu)(t, _.RA.ROLE)];
    if (null != e && (i = true, e.permission)) returntrue
  }
  if (i) returnfalse;
  let a = n[(0, f.Eu)(t, _.RA.ROLE)];
  return null != a ? a.permission : null
}

function x(e) {
  switch (e) {
    case _.iw.CHAT:
    case _.iw.APPLICATION_LAUNCHER:
    case _.iw.APP_LAUNCHER_APPLICATION_VIEW:
    case _.iw.CONTEXT_MENU:
    case _.iw.VOICE_UI:
    case _.iw.VOICE_TILE_ACTIVITY_SUGGESTIONS:
    case _.iw.MINI_SHELF:
    case _.iw.USER_PROFILE:
    case _.iw.NOW_PLAYING:
    case _.iw.ACTIVITY_DETAILS:
    case _.iw.ACTIVITIES_HOME:
    case _.iw.ACTIVITY_INSTANCE_EMBED:
    case _.iw.ACTIVITY_BOOKMARK_EMBED:
    case _.iw.APP_MESSAGE_EMBED:
    case _.iw.APP_DMS_ENTRY_POINT_COMMAND_BUTTON:
    case _.iw.IMAGE_RECS_MENU:
    case _.iw.IMAGE_RECS_SUBMENU:
      return p.C.SlashCommand
  }
}

function M(e) {
  if (null != e)
    if (e.id === h.Ik.BUILT_IN) return _.gK.BUILT_IN;
    else if (e.id === h.Ik.FRECENCY) return _.gK.FRECENCY;
  else return _.gK.APP
}

function j(e, t, n) {
  var r, i;
  return {
    type: _.Hf.APPLICATION,
    id: e.id,
    name: null != (r = null != n ? n : null == e || null == (i = e.bot) ? true : i.username) ? r : e.name,
    icon: e.icon,
    application: e,
    isUserApp: null != t && t
  }
}

function k(e) {
  let t = e.id,
    n = e.options,
    r = null == n ? true : n.find(e => e.type === u.n4.SUB_COMMAND_GROUP);
  null != r && (t += "".concat(h.v4).concat(r.name), n = r.options);
  let i = null == n ? true : n.find(e => e.type === u.n4.SUB_COMMAND);
  return null != i && (t += "".concat(h.v4).concat(i.name), n = i.options), {
    commandKey: t,
    interactionOptions: n
  }
}

function U(e) {
  var t, n;
  let {
    command: r,
    location: i,
    triggerSection: a,
    queryLength: o,
    sectionName: s,
    query: l,
    searchResultsPosition: c,
    source: u
  } = e;
  (0, d.zV)(m.HAw.APPLICATION_COMMAND_SELECTED, {
    command_id: null != (t = null == (n = r.rootCommand) ? true : n.id) ? t : r.id,
    application_id: r.applicationId,
    location: i,
    section: a,
    query_length: o,
    command_text_length: r.displayName.length,
    section_name: s,
    query: l,
    search_results_position: c,
    source: u
  })
}

function G(e) {
  let t = e.interactionMetadata;
  return null == t ? null : "triggering_interaction_metadata" in t ? t.triggering_interaction_metadata : t
}

function V(e, t) {
  var n;
  let r = null == (n = t.result) ? true : n.sections;
  return null != r && e in r
}