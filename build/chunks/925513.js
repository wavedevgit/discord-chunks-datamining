/** Chunk was on web.js **/
/** chunk id: 925513, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Jr: () => m,
  O6: () => h,
  _i: () => d,
  v6: () => g
});
var Chunk647438 = require("./647438.js"),
  Chunk524437 = require("./524437.js"),
  Chunk695346 = require("./695346.js"),
  Chunk594174 = require("./594174.js"),
  Chunk704454 = require("./704454.js"),
  Chunk981631 = require("./981631.js");

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
let d = e => {
    let {
      setting: t,
      isDm: n = false,
      isFriend: r = false
    } = e;
    if (null != t && t !== i.Q4.UNSET_EXPLICIT_CONTENT_REDACTION) return t;
    let o = a.default.getCurrentUser();
    return (0, s.bc)("resolveSettingWithDefaults") ? f({
      isDm: n,
      isFriend: r
    }) : (0, s.g2)("resolveSettingWithDefaults") ? i.Q4.BLUR : (null == o ? true : o.nsfwAllowed) === false ? p({
      isDm: n,
      isFriend: r
    }) : _({
      isDm: n,
      isFriend: r
    })
  },
  f = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    return t && !n ? i.Q4.BLOCK : i.Q4.BLUR
  },
  _ = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    return t && n ? i.Q4.SHOW : t ? i.Q4.BLOCK : i.Q4.SHOW
  },
  p = e => {
    let {
      isDm: t = false,
      isFriend: n = false
    } = e;
    return t && n ? i.Q4.BLUR : t ? i.Q4.BLOCK : i.Q4.BLUR
  },
  h = e => {
    let t = null != e ? e : o.j7.getSetting();
    return {
      goreContentGuilds: d({
        setting: null == t ? true : t.goreContentGuilds
      }),
      goreContentNonFriendDm: d({
        setting: null == t ? true : t.goreContentNonFriendDm,
        isDm: true
      }),
      goreContentFriendDm: d({
        setting: null == t ? true : t.goreContentFriendDm,
        isDm: true,
        isFriend: true
      })
    }
  },
  m = e => {
    let t = h();
    o.j7.updateSetting(u({}, t, e))
  },
  g = () => Chunk647438.useMemo(() => Chunk981631.BhN.EXPLICIT_MEDIA_REDACTION, [])