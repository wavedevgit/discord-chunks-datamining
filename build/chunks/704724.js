/** Chunk was on web.js **/
/** chunk id: 704724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  J6: () => f,
  Jz: () => _,
  ky: () => c,
  qY: () => d
});
var Chunk873298 = require("./873298.js"),
  Chunk632119 = require("./632119.js"),
  Chunk444802 = require("./444802.js"),
  Chunk93857 = require("./93857.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function l(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      o(e, t, n[t])
    })
  }
  return e
}
let c = e => null != e && e !== r.TO.UNSET_EXPLICIT_CONTENT_REDACTION,
  u = e => {
    let t = s.oQ.getControlledSetting(e),
      {
        goreContentNonFriendDm: n,
        goreContentFriendDm: i
      } = null != t ? t : {};
    return {
      goreContentNonFriendDm: c(n) ? n : (0, a.jj)({
        isDm: true
      }),
      goreContentFriendDm: c(i) ? i : (0, a.jj)({
        isDm: true,
        isFriend: true
      }),
      goreContentGuilds: r.TO.BLUR
    }
  },
  d = (e, t) => {
    let n = u(e);
    s.oQ.updateControlledSetting(e, l({}, n, t))
  },
  f = e => {
    let {
      teenId: t,
      setting: n,
      isFriend: r = false
    } = e;
    if (c(n)) return n;
    let a = s.sM.getControlledSetting(t);
    return r ? i.Bb[a] : i.fu[a]
  },
  p = e => {
    let t = s.p7.getControlledSetting(e);
    return {
      explicitContentNonFriendDm: f({
        teenId: e,
        setting: null == t ? true : t.explicitContentNonFriendDm
      }),
      explicitContentFriendDm: f({
        teenId: e,
        setting: null == t ? true : t.explicitContentFriendDm,
        isFriend: true
      }),
      explicitContentGuilds: r.TO.BLUR
    }
  },
  _ = (e, t) => {
    let n = p(e);
    s.p7.updateControlledSetting(e, l({}, n, t))
  }