/** Chunk was on web.js **/
/** chunk id: 632119, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Bb: () => _,
  C$: () => b,
  Jz: () => O,
  Ys: () => m,
  fu: () => h
});
var Chunk923457 = require("./923457.js"),
  Chunk873298 = require("./873298.js"),
  Chunk207560 = require("./207560.js"),
  Chunk64313 = require("./64313.js"),
  Chunk253932 = require("./253932.js"),
  Chunk287809 = require("./287809.js");
require("./975214.js");
var Chunk656402 = require("./656402.js");

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
let f = {
    [Chunk656402.Je.DISABLED.valueOf()]: Chunk873298.TO.SHOW,
    [Chunk656402.Je.NON_FRIENDS.valueOf()]: Chunk873298.TO.SHOW,
    [Chunk656402.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: Chunk873298.TO.BLOCK
  },
  p = {
    [Chunk656402.Je.DISABLED.valueOf()]: Chunk873298.TO.SHOW,
    [Chunk656402.Je.NON_FRIENDS.valueOf()]: Chunk873298.TO.BLOCK,
    [Chunk656402.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: Chunk873298.TO.BLOCK
  },
  _ = {
    [Chunk656402.Je.DISABLED.valueOf()]: Chunk873298.TO.BLUR,
    [Chunk656402.Je.NON_FRIENDS.valueOf()]: Chunk873298.TO.BLUR,
    [Chunk656402.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: Chunk873298.TO.BLOCK
  },
  h = {
    [Chunk656402.Je.DISABLED.valueOf()]: Chunk873298.TO.BLUR,
    [Chunk656402.Je.NON_FRIENDS.valueOf()]: Chunk873298.TO.BLOCK,
    [Chunk656402.Je.FRIENDS_AND_NON_FRIENDS.valueOf()]: Chunk873298.TO.BLOCK
  },
  m = e => {
    let {
      setting: t,
      isDm: n = false,
      isFriend: o = false
    } = e;
    if (null != t && t !== i.TO.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
    let c = l.default.getCurrentUser(),
      u = (0, s.o)("resolveExplicitContentSettingWithDefaults");
    return (0, a.To)(r.p.SENSITIVE_CONTENT) || u ? y({
      isDm: n,
      isFriend: o
    }) : (null == c ? true : c.nsfwAllowed) === false ? E({
      isDm: n,
      isFriend: o
    }) : g({
      isDm: n,
      isFriend: o
    })
  },
  g = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    if (!t) return i.TO.SHOW;
    let r = o.cj.getSetting();
    return n ? f[r] : p[r]
  },
  E = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    if (!t) return i.TO.BLUR;
    let r = o.cj.getSetting();
    return n ? _[r] : h[r]
  },
  y = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    return t && !n ? i.TO.BLOCK : i.TO.BLUR
  },
  b = e => {
    let t = null != e ? e : o.Vd.getSetting();
    return {
      explicitContentGuilds: m({
        setting: null == t ? true : t.explicitContentGuilds
      }),
      explicitContentNonFriendDm: m({
        setting: null == t ? true : t.explicitContentNonFriendDm,
        isDm: true
      }),
      explicitContentFriendDm: m({
        setting: null == t ? true : t.explicitContentFriendDm,
        isDm: true,
        isFriend: true
      })
    }
  },
  O = e => {
    let t = b();
    o.Vd.updateSetting(d({}, t, e))
  }