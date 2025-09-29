/** Chunk was on web.js **/
/** chunk id: 656577, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FE: () => _,
  MS: () => f,
  ec: () => p,
  l4: () => E,
  zj: () => b
});
var Chunk524437 = require("./524437.js"),
  Chunk128064 = require("./128064.js"),
  Chunk695346 = require("./695346.js"),
  Chunk594174 = require("./594174.js");
require("./721360.js");
var Chunk973005 = require("./973005.js");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}
let u = {
    [Chunk973005.TI.DISABLED.valueOf()]: Chunk524437.Q4.SHOW,
    [Chunk973005.TI.NON_FRIENDS.valueOf()]: Chunk524437.Q4.SHOW,
    [Chunk973005.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: Chunk524437.Q4.BLOCK
  },
  d = {
    [Chunk973005.TI.DISABLED.valueOf()]: Chunk524437.Q4.SHOW,
    [Chunk973005.TI.NON_FRIENDS.valueOf()]: Chunk524437.Q4.BLOCK,
    [Chunk973005.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: Chunk524437.Q4.BLOCK
  },
  f = {
    [Chunk973005.TI.DISABLED.valueOf()]: Chunk524437.Q4.BLUR,
    [Chunk973005.TI.NON_FRIENDS.valueOf()]: Chunk524437.Q4.BLUR,
    [Chunk973005.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: Chunk524437.Q4.BLOCK
  },
  _ = {
    [Chunk973005.TI.DISABLED.valueOf()]: Chunk524437.Q4.BLUR,
    [Chunk973005.TI.NON_FRIENDS.valueOf()]: Chunk524437.Q4.BLOCK,
    [Chunk973005.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: Chunk524437.Q4.BLOCK
  },
  p = e => {
    let {
      setting: t,
      isDm: n = false,
      isFriend: a = false
    } = e;
    if (null != t && t !== r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
    let s = o.default.getCurrentUser();
    return (0, i.c_)("resolveSettingWithDefaults") ? g({
      isDm: n,
      isFriend: a
    }) : (null == s ? true : s.nsfwAllowed) === false ? m({
      isDm: n,
      isFriend: a
    }) : h({
      isDm: n,
      isFriend: a
    })
  },
  h = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    if (!t) return r.Q4.SHOW;
    let i = a.UP.getSetting();
    return n ? u[i] : d[i]
  },
  m = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    if (!t) return r.Q4.BLUR;
    let i = a.UP.getSetting();
    return n ? f[i] : _[i]
  },
  g = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    return t && !n ? r.Q4.BLOCK : r.Q4.BLUR
  },
  E = e => {
    let t = null != e ? e : a.Sh.getSetting();
    return {
      explicitContentGuilds: p({
        setting: null == t ? true : t.explicitContentGuilds
      }),
      explicitContentNonFriendDm: p({
        setting: null == t ? true : t.explicitContentNonFriendDm,
        isDm: true
      }),
      explicitContentFriendDm: p({
        setting: null == t ? true : t.explicitContentFriendDm,
        isDm: true,
        isFriend: true
      })
    }
  },
  b = e => {
    let t = E();
    a.Sh.updateSetting(c({}, t, e))
  }