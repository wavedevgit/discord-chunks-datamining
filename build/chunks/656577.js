/** Chunk was on web.js **/
/** chunk id: 656577, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ec: () => p,
  l4: () => E,
  zj: () => b
});
var Chunk524437 = require("./524437.js"),
  Chunk695346 = require("./695346.js"),
  Chunk594174 = require("./594174.js"),
  Chunk704454 = require("./704454.js");
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
      isFriend: i = false
    } = e;
    if (null != t && t !== r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
    let s = a.default.getCurrentUser();
    return (0, o.bc)("resolveSettingWithDefaults") ? g({
      isDm: n,
      isFriend: i
    }) : (0, o.g2)("resolveSettingWithDefaults") ? r.Q4.BLUR : (null == s ? true : s.nsfwAllowed) === false ? m({
      isDm: n,
      isFriend: i
    }) : h({
      isDm: n,
      isFriend: i
    })
  },
  h = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    if (!t) return r.Q4.SHOW;
    let a = i.UP.getSetting();
    return n ? u[a] : d[a]
  },
  m = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    if (!t) return r.Q4.BLUR;
    let a = i.UP.getSetting();
    return n ? f[a] : _[a]
  },
  g = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    return t && !n ? r.Q4.BLOCK : r.Q4.BLUR
  },
  E = e => {
    let t = null != e ? e : i.Sh.getSetting();
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
    i.Sh.updateSetting(c({}, t, e))
  }