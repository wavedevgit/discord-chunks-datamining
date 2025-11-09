/** Chunk was on web.js **/
/** chunk id: 654904, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $r: () => h,
  DP: () => E,
  Ly: () => g,
  SG: () => m
}), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js");
require("./531643.jsx");
var Chunk643879 = require("./643879.js"),
  Chunk768581 = require("./768581.js");
require("./403182.js");
var Chunk51144 = require("./51144.js"),
  Chunk661543 = require("./661543.js"),
  Chunk200299 = require("./200299.js"),
  Chunk486324 = require("./486324.js"),
  Chunk388032 = require("./388032.jsx");

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

function h(e) {
  let {
    uploadType: t,
    guildId: i,
    analyticsSource: s,
    filters: l,
    isTryItOut: _ = false
  } = e;
  (0, a.ZDy)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("91689"), n.e("89289"), n.e("50893")]).then(n.bind(n, 28130));
    return n => (0, r.jsx)(e, p({
      filters: l,
      maxFileSizeBytes: u.B,
      imageSpecifications: t === d.pC.BANNER ? f.intl.string(f.t.IhzZlo) : true,
      onComplete: e => {
        let {
          assetOrigin: n,
          imageUri: r,
          file: a,
          originalAsset: l
        } = e, u = a.name.replace(/\.[^/.]+$/, ""), d = (0, o.Z1)({
          filename: u,
          assetOrigin: n
        }), f = (0, o.cN)({
          assetOrigin: n,
          imageUri: r,
          description: d,
          originalAsset: l
        });
        (0, c.j)({
          image: f,
          file: a,
          uploadType: t,
          guildId: i,
          analyticsSource: s,
          isTryItOut: _
        })
      },
      uploadType: t,
      showUpsellHeader: true
    }, n))
  })
}

function m(e, t, n) {
  let r = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {};
  if (null != e) return e;
  let {
    size: i = 80,
    canAnimate: a = true
  } = r, o = null === e;
  return o && null == t ? s.ZP.getDefaultAvatarURL(n.id, n.discriminator) : o || (null == t ? true : t.avatar) == null ? n.getAvatarURL(true, i, a) : n.getAvatarURL(null == t ? true : t.guildId, i, a)
}

function g(e) {
  var t;
  let {
    pendingNickname: n,
    pendingGlobalName: r,
    user: i,
    guildMember: a
  } = e, o = "" === n ? null : null != n ? n : null == a ? true : a.nick, s = "" === r ? i.username : r;
  return null != (t = null != o ? o : s) ? t : l.ZP.getName(i)
}

function E(e) {
  return (null != e ? (0, i.Bd)(e) : 1) > .25
}