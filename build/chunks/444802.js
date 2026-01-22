/** Chunk was on web.js **/
/** chunk id: 444802, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T4: () => g,
  WX: () => b,
  gC: () => p,
  jj: () => m,
  qY: () => E
});
var Chunk64700 = require("./64700.js"),
  Chunk923457 = require("./923457.js"),
  Chunk873298 = require("./873298.js"),
  Chunk207560 = require("./207560.js"),
  Chunk64313 = require("./64313.js"),
  Chunk253932 = require("./253932.js"),
  Chunk287809 = require("./287809.js"),
  Chunk652215 = require("./652215.js");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}
let p = e => {
    let {
      setting: t,
      isDm: n = false,
      isFriend: r = false
    } = e;
    if (null != t && t !== a.TO.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
    let l = c.default.getCurrentUser(),
      u = (0, o.o)("resolveExplicitContentSettingWithDefaults");
    return (0, s.To)(i.p.SENSITIVE_CONTENT) || u ? _({
      isDm: n,
      isFriend: r
    }) : (null == l ? true : l.nsfwAllowed) === false ? m({
      isDm: n,
      isFriend: r
    }) : h({
      isDm: n,
      isFriend: r
    })
  },
  _ = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    return t && !n ? a.TO.BLOCK : a.TO.BLUR
  },
  h = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    return t && n ? a.TO.SHOW : t ? a.TO.BLOCK : a.TO.SHOW
  },
  m = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    return t && n ? a.TO.BLUR : t ? a.TO.BLOCK : a.TO.BLUR
  },
  g = e => {
    let t = null != e ? e : l.qN.getSetting();
    return {
      goreContentGuilds: p({
        setting: null == t ? true : t.goreContentGuilds
      }),
      goreContentNonFriendDm: p({
        setting: null == t ? true : t.goreContentNonFriendDm,
        isDm: true
      }),
      goreContentFriendDm: p({
        setting: null == t ? true : t.goreContentFriendDm,
        isDm: true,
        isFriend: true
      })
    }
  },
  E = e => {
    let t = g();
    l.qN.updateSetting(f({}, t, e))
  },
  b = () => r.useMemo(() => u.MVz.EXPLICIT_MEDIA_REDACTION, [])