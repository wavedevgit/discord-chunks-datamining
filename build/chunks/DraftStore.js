/** Chunk was on web.js **/
/** chunk id: 703558, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => M,
  d: () => E
}), require("./388685.js"), require("./781311.js");
var r, Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk570140 = require("./570140.js"),
  Chunk823379 = require("./823379.js"),
  Chunk709054 = require("./709054.js"),
  Chunk314897 = require("./314897.js"),
  Chunk592125 = require("./592125.js"),
  Chunk486472 = require("./486472.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      _(e, t, n[t])
    })
  }
  return e
}

function h(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let g = require("./981631.js").en1 + 500;
var E = function(e) {
  return e[e.ChannelMessage = 0] = "ChannelMessage", e[e.ThreadSettings = 1] = "ThreadSettings", e[e.FirstThreadMessage = 2] = "FirstThreadMessage", e[e.ApplicationLauncherCommand = 3] = "ApplicationLauncherCommand", e[e.Poll = 4] = "Poll", e[e.SlashCommand = 5] = "SlashCommand", e[e.ForwardContextMessage = 6] = "ForwardContextMessage", e[e.InteractionModal = 7] = "InteractionModal", e
}({});
let b = {};

function y(e) {
  return e.length > g && (e = e.substr(0, g)), e
}

function O(e) {
  let t = b[e];
  return null == t && (t = b[e] = {}), t
}

function v(e) {
  let {
    type: t,
    channelId: n,
    draft: r,
    draftType: i
  } = e, a = d.Z.getChannel(n);
  r === (null == a ? true : a.template) && (r = "");
  let o = u.default.getId();
  if (null != o && null != r && "" !== r) {
    var s;
    let e = O(o),
      t = e[n];
    if (null == t && (t = e[n] = {}), (r = y(r)) === (null == (s = t[i]) ? true : s.draft)) returnfalse;
    t[i] = {
      timestamp: Date.now(),
      draft: r
    }
  } else S(n, i);
  return "DRAFT_SAVE" === t
}

function I(e) {
  let {
    channelId: t,
    draftType: n
  } = e;
  return S(t, n)
}

function T(e) {
  let {
    channelId: t,
    draft: n
  } = e, r = u.default.getId();
  if (null == r) return;
  let i = O(r),
    a = i[t];
  null == a && (a = i[t] = {}), a[1] = m(p({
    timestamp: Date.now()
  }, a[1], n), {
    parentChannelId: t
  })
}

function S(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] ? arguments[2] : u.default.getId();
  if (null == n) returnfalse;
  let r = O(n),
    i = r[e];
  if (null == i) returnfalse;
  delete i[t], a().isEmpty(i) && delete r[e]
}

function A() {
  let e = Chunk314897.default.getId();
  if (null == module || Chunk486472.Z.totalUnavailableGuilds > 0) return;
  let t = O(module);
  for (let e in exports) null == Chunk592125.Z.getChannel(module) && delete exports[module]
}

function C() {
  let e = Chunk314897.default.getId();
  return module in b || (b[module] = {}), A(), false
}

function N() {
  return A(), false
}

function R(e) {
  let {
    channel: {
      id: t
    }
  } = e, n = u.default.getId();
  if (null == n) returnfalse;
  let r = O(n);
  return delete r[t], false
}

function P(e) {
  let {
    channel: t
  } = e, n = u.default.getId();
  if (null == n || t.ownerId === n) returnfalse;
  let r = O(n),
    i = r[t.parent_id];
  if (null == i) returnfalse;
  let a = i[1];
  if (null == a || a.parentMessageId !== c.default.castChannelIdAsMessageId(t.id)) returnfalse;
  {
    var o, s;
    let e = r[t.parent_id];
    if (null == e) returnfalse;
    let n = null != (s = null == (o = e[2]) ? true : o.draft) ? s : "";
    "" !== n && (r[t.id] = {
      0: {
        timestamp: Date.now(),
        draft: n
      }
    }), S(t.parent_id, 1), S(t.parent_id, 2)
  }
}

function D(e) {
  e.isSwitchingAccount || (b = {})
}

function w(e) {
  e.userId in b && delete b[e.userId]
}

function x() {
  for (let [e, t] of Chunk709054.default.entries(b))
    for (let [n, r] of Chunk709054.default.entries(exports)) {
      let t = r[0];
      null != exports && ("" === exports.draft || "" === exports.draft.trim()) && S(require, 0, module)
    }
}
class L extends(r = Chunk442837.ZP.PersistedStore) {
  initialize(e) {
    b = null != e ? e : {}, x(), this.waitFor(u.default, d.Z, f.Z)
  }
  getState() {
    return b
  }
  getThreadDraftWithParentMessageId(e) {
    let t = u.default.getId();
    if (null == t) return;
    let n = O(t),
      r = c.default.keys(n).find(t => {
        let n = this.getThreadSettings(t);
        return (null == n ? true : n.parentMessageId) === e
      });
    return null != r ? this.getThreadSettings(r) : true
  }
  getRecentlyEditedDrafts(e) {
    let t = u.default.getId();
    if (null == t) return [];
    let n = O(t);
    return a()(n).mapValues(t => null == t ? true : t[e]).pickBy(l.lm).toPairs().map(e => {
      let [t, {
        timestamp: n,
        draft: r
      }] = e;
      return {
        channelId: t,
        timestamp: n,
        draft: r
      }
    }).sortBy(e => {
      let {
        timestamp: t
      } = e;
      return -t
    }).value()
  }
  getDraft(e, t) {
    let n = u.default.getId();
    if (null == n) return "";
    let r = O(n)[e];
    if (null != r) {
      let e = r[t];
      if (null != e) return e.draft
    }
    return ""
  }
  getThreadSettings(e) {
    let t = u.default.getId();
    if (null == t) return null;
    let n = O(t)[e];
    return null == n ? null : n[1]
  }
}
_(L, "displayName", "DraftStore"), _(L, "persistKey", "DraftStore"), _(L, "migrations", [e => {
  if (null == e) return {};
  for (let t in e) "timestamp" in e[t] && (e[t] = {
    0: e[t]
  });
  return e
}, e => {
  let t = u.default.getId();
  if (null == e || null == t) return {};
  let n = {},
    r = n[t] = {};
  for (let t in e) r[t] = e[t];
  return n
}]);
let M = new L(Chunk570140.Z, {
  CONNECTION_OPEN: C,
  LOGOUT: D,
  MULTI_ACCOUNT_REMOVE_ACCOUNT: w,
  GUILD_DELETE: N,
  CHANNEL_DELETE: R,
  THREAD_DELETE: R,
  THREAD_CREATE: P,
  DRAFT_SAVE: v,
  DRAFT_CHANGE: v,
  DRAFT_CLEAR: I,
  THREAD_SETTINGS_DRAFT_CHANGE: T
})