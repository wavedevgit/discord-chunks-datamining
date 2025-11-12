/** Chunk was on web.js **/
/** chunk id: 925513, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jr: () => g,
  O6: () => m,
  _i: () => f,
  v6: () => E,
  zR: () => h
});
var Chunk647438 = require("./647438.js"),
  Chunk524437 = require("./524437.js"),
  Chunk128064 = require("./128064.js"),
  Chunk312870 = require("./312870.js"),
  Chunk695346 = require("./695346.js"),
  Chunk594174 = require("./594174.js"),
  Chunk981631 = require("./981631.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}
let f = e => {
    let {
      setting: t,
      isDm: n = false,
      isFriend: r = false
    } = e;
    if (null != t && t !== i.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
    let s = l.default.getCurrentUser(),
      c = (0, o.U)("resolveExplicitContentSettingWithDefaults");
    return (0, a.c_)("resolveExplicitContentSettingWithDefaults") || c ? _({
      isDm: n,
      isFriend: r
    }) : (null == s ? true : s.nsfwAllowed) === false ? h({
      isDm: n,
      isFriend: r
    }) : p({
      isDm: n,
      isFriend: r
    })
  },
  _ = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    return t && !n ? i.Q4.BLOCK : i.Q4.BLUR
  },
  p = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    return t && n ? i.Q4.SHOW : t ? i.Q4.BLOCK : i.Q4.SHOW
  },
  h = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    return t && n ? i.Q4.BLUR : t ? i.Q4.BLOCK : i.Q4.BLUR
  },
  m = e => {
    let t = null != e ? e : s.j7.getSetting();
    return {
      goreContentGuilds: f({
        setting: null == t ? true : t.goreContentGuilds
      }),
      goreContentNonFriendDm: f({
        setting: null == t ? true : t.goreContentNonFriendDm,
        isDm: true
      }),
      goreContentFriendDm: f({
        setting: null == t ? true : t.goreContentFriendDm,
        isDm: true,
        isFriend: true
      })
    }
  },
  g = e => {
    let t = m();
    s.j7.updateSetting(d({}, t, e))
  },
  E = () => Chunk647438.useMemo(() => Chunk981631.BhN.EXPLICIT_MEDIA_REDACTION, [])