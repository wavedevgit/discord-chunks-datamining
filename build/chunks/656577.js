/** Chunk was on web.js **/
/** chunk id: 656577, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  FE: () => _,
  MS: () => p,
  ec: () => h,
  l4: () => b,
  zj: () => y
});
var Chunk524437 = require("./524437.js"),
  Chunk128064 = require("./128064.js"),
  Chunk312870 = require("./312870.js"),
  Chunk695346 = require("./695346.js"),
  Chunk594174 = require("./594174.js");
require("./721360.js");
var Chunk973005 = require("./973005.js");

function c(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      c(e, t, n[t])
    })
  }
  return e
}
let d = {
    [Chunk973005.TI.DISABLED.valueOf()]: Chunk524437.Q4.SHOW,
    [Chunk973005.TI.NON_FRIENDS.valueOf()]: Chunk524437.Q4.SHOW,
    [Chunk973005.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: Chunk524437.Q4.BLOCK
  },
  f = {
    [Chunk973005.TI.DISABLED.valueOf()]: Chunk524437.Q4.SHOW,
    [Chunk973005.TI.NON_FRIENDS.valueOf()]: Chunk524437.Q4.BLOCK,
    [Chunk973005.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: Chunk524437.Q4.BLOCK
  },
  p = {
    [Chunk973005.TI.DISABLED.valueOf()]: Chunk524437.Q4.BLUR,
    [Chunk973005.TI.NON_FRIENDS.valueOf()]: Chunk524437.Q4.BLUR,
    [Chunk973005.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: Chunk524437.Q4.BLOCK
  },
  _ = {
    [Chunk973005.TI.DISABLED.valueOf()]: Chunk524437.Q4.BLUR,
    [Chunk973005.TI.NON_FRIENDS.valueOf()]: Chunk524437.Q4.BLOCK,
    [Chunk973005.TI.FRIENDS_AND_NON_FRIENDS.valueOf()]: Chunk524437.Q4.BLOCK
  },
  h = e => {
    let {
      setting: t,
      isDm: n = false,
      isFriend: o = false
    } = e;
    if (null != t && t !== r.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
    let l = s.default.getCurrentUser(),
      c = (0, a.U)("resolveExplicitContentSettingWithDefaults");
    return (0, i.c_)("resolveExplicitContentSettingWithDefaults") || c ? E({
      isDm: n,
      isFriend: o
    }) : (null == l ? true : l.nsfwAllowed) === false ? g({
      isDm: n,
      isFriend: o
    }) : m({
      isDm: n,
      isFriend: o
    })
  },
  m = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    if (!t) return r.Q4.SHOW;
    let i = o.UP.getSetting();
    return n ? d[i] : f[i]
  },
  g = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    if (!t) return r.Q4.BLUR;
    let i = o.UP.getSetting();
    return n ? p[i] : _[i]
  },
  E = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    return t && !n ? r.Q4.BLOCK : r.Q4.BLUR
  },
  b = e => {
    let t = null != e ? e : o.Sh.getSetting();
    return {
      explicitContentGuilds: h({
        setting: null == t ? true : t.explicitContentGuilds
      }),
      explicitContentNonFriendDm: h({
        setting: null == t ? true : t.explicitContentNonFriendDm,
        isDm: true
      }),
      explicitContentFriendDm: h({
        setting: null == t ? true : t.explicitContentFriendDm,
        isDm: true,
        isFriend: true
      })
    }
  },
  y = e => {
    let t = b();
    o.Sh.updateSetting(u({}, t, e))
  }