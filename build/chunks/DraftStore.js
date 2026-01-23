/** Chunk was on web.js **/
/** chunk id: 31717, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => j,
  C: () => E
}), require("./896048.js"), require("./733351.js");
var r, Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk73153 = require("./73153.js"),
  Chunk403362 = require("./403362.js"),
  Chunk661191 = require("./661191.js"),
  Chunk961350 = require("./961350.js"),
  Chunk734057 = require("./734057.js"),
  Chunk919638 = require("./919638.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
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
let g = require("./652215.js").CS1 + 500;
var E = function(e) {
  return e[e.ChannelMessage = 0] = "ChannelMessage", e[e.ThreadSettings = 1] = "ThreadSettings", e[e.FirstThreadMessage = 2] = "FirstThreadMessage", e[e.ApplicationLauncherCommand = 3] = "ApplicationLauncherCommand", e[e.Poll = 4] = "Poll", e[e.SlashCommand = 5] = "SlashCommand", e[e.ForwardContextMessage = 6] = "ForwardContextMessage", e[e.InteractionModal = 7] = "InteractionModal", e
}({});
let y = {};

function b(e) {
  return e.length > g && (e = e.substr(0, g)), e
}

function O(e) {
  let t = y[e];
  return null == t && (t = y[e] = {}), t
}

function v(e) {
  let {
    type: t,
    channelId: n,
    draft: r,
    draftType: i
  } = e, a = d.A.getChannel(n);
  r === (null == a ? true : a.template) && (r = "");
  let s = u.default.getId();
  if (null != s && null != r && "" !== r) {
    var o;
    let e = O(s),
      t = e[n];
    null == t && (t = e[n] = {}), (r = b(r)) !== (null == (o = t[i]) ? true : o.draft) && (t[i] = {
      timestamp: Date.now(),
      draft: r
    })
  } else S(n, i);
  return "DRAFT_SAVE" === t
}

function A(e) {
  let {
    channelId: t,
    draftType: n
  } = e;
  return S(t, n)
}

function I(e) {
  let {
    channelId: t,
    draft: n
  } = e, r = u.default.getId();
  if (null == r) return;
  let i = O(r),
    a = i[t];
  null == a && (a = i[t] = {}), a[1] = m(_({
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

function T() {
  let e = u.default.getId();
  if (null == e || f.A.totalUnavailableGuilds > 0) return;
  let t = O(e);
  for (let e in t) null == d.A.getChannel(e) && delete t[e]
}

function C() {
  let e = u.default.getId();
  return e in y || (y[e] = {}), T(), false
}

function N() {
  return T(), false
}

function w(e) {
  let {
    channel: {
      id: t
    }
  } = e, n = u.default.getId();
  if (null == n) returnfalse;
  let r = O(n);
  return delete r[t], false
}

function R(e) {
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
    var s, o;
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

function P(e) {
  e.isSwitchingAccount || (y = {})
}

function D(e) {
  e.userId in y && delete y[e.userId]
}

function x() {
  for (let [e, t] of c.default.entries(y))
    for (let [n, r] of c.default.entries(t)) {
      let t = r[0];
      null != t && ("" === t.draft || "" === t.draft.trim()) && S(n, 0, e)
    }
}
class L extends(r = Chunk311907.Ay.PersistedStore) {
  initialize(e) {
    y = null != e ? e : {}, x(), this.waitFor(u.default, d.A, f.A)
  }
  getState() {
    return y
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
    return a()(n).mapValues(t => null == t ? true : t[e]).pickBy(l.Vq).toPairs().map(e => {
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
p(L, "displayName", "DraftStore"), p(L, "persistKey", "DraftStore"), p(L, "migrations", [e => {
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
let j = new L(Chunk73153.h, {
  CONNECTION_OPEN: C,
  LOGOUT: P,
  MULTI_ACCOUNT_REMOVE_ACCOUNT: D,
  GUILD_DELETE: N,
  CHANNEL_DELETE: w,
  THREAD_DELETE: w,
  THREAD_CREATE: R,
  DRAFT_SAVE: v,
  DRAFT_CHANGE: v,
  DRAFT_CLEAR: A,
  THREAD_SETTINGS_DRAFT_CHANGE: I
})