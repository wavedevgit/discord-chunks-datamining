/** Chunk was on web.js **/
/** chunk id: 385612, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  XD: () => h,
  eh: () => g,
  sN: () => E,
  sv: () => m
}), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk317097 = require("./317097.js"),
  Chunk397927 = require("./397927.js");
require("./23658.jsx");
var Chunk101058 = require("./101058.js"),
  Chunk486020 = require("./486020.js");
require("./453771.js");
var Chunk427262 = require("./427262.js"),
  Chunk687650 = require("./687650.js"),
  Chunk478644 = require("./478644.js"),
  Chunk339984 = require("./339984.js"),
  Chunk985018 = require("./985018.jsx");

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

function h(e) {
  let {
    uploadType: t,
    guildId: i,
    analyticsSource: s,
    filters: l,
    isTryItOut: p = false
  } = e;
  (0, a.mMO)(async () => {
    let {
      default: e
    } = await Promise.all([n.e("79149"), n.e("53653"), n.e("66863")]).then(n.bind(n, 551028));
    return n => (0, r.jsx)(e, _({
      filters: l,
      maxFileSizeBytes: u.j,
      imageSpecifications: t === d.HL.BANNER ? f.intl.string(f.t.IhzZlo) : true,
      onComplete: e => {
        let {
          assetOrigin: n,
          imageUri: r,
          file: a,
          originalAsset: l
        } = e, u = a.name.replace(/\.[^/.]+$/, ""), d = (0, o.Rh)({
          filename: u,
          assetOrigin: n
        }), f = (0, o.XB)({
          assetOrigin: n,
          imageUri: r,
          description: d,
          originalAsset: l
        });
        (0, c.H)({
          image: f,
          file: a,
          uploadType: t,
          guildId: i,
          analyticsSource: s,
          isTryItOut: p
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
  return o && null == t ? s.Ay.getDefaultAvatarURL(n.id, n.discriminator) : o || (null == t ? true : t.avatar) == null ? n.getAvatarURL(true, i, a) : n.getAvatarURL(null == t ? true : t.guildId, i, a)
}

function g(e) {
  var t;
  let {
    pendingNickname: n,
    pendingGlobalName: r,
    user: i,
    guildMember: a
  } = e, o = "" === n ? null : null != n ? n : null == a ? true : a.nick, s = "" === r ? i.username : r;
  return null != (t = null != o ? o : s) ? t : l.Ay.getName(i)
}

function E(e) {
  return (null != e ? (0, i.OK)(e) : 1) > .25
}