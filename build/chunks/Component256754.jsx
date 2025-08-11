/** Chunk was on web.js **/
/** chunk id: 256754, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  i: () => f
});
var Chunk255367 = require("./255367.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk598117 = require("./598117.js"),
  Chunk981631 = require("./981631.js");

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

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = async function() {
  let {
    userImage: e = null,
    guildId: t = null,
    analyticsLocation: l = null
  } = arguments.length > 0 && true !== arguments[0] ? arguments[0] : {};
  Chunk626135.default.track(Chunk981631.rMx.OPEN_MODAL, {
    type: "Emoji Studio",
    source: l
  }), await (0, Chunk481060.ZDy)(async () => {
    let {
      EmojiStudioModal: i
    } = await Promise.all([require.e("20087"), require.e("43404")]).then(require.bind(require, 546200));
    return n => (0, r.jsx)(i, d(c({}, n), {
      userImage: e,
      guildId: t
    }))
  }, {
    modalKey: Chunk598117.Hj
  })
}