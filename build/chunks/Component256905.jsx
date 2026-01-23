/** Chunk was on web.js **/
/** chunk id: 256905, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => p,
  R: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk734057 = require("./734057.js"),
  Chunk954571 = require("./954571.js"),
  Chunk793367 = require("./793367.js"),
  Chunk652215 = require("./652215.js");

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

function d(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = f(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let p = "Media Viewer Modal";

function _(e, t) {
  var c, f, _;
  let [h, ...m] = [e, t], {
    location: g,
    contextKey: E
  } = h, y = d(h, ["location", "contextKey"]), [b] = m, O = null == (_ = y.items[null != (c = y.startingIndex) ? c : 0]) || null == (f = _.sourceMetadata) ? true : f.message, v = a.A.getChannel(null == O ? true : O.channel_id);
  (0, o.H9)({
    guildId: null == v ? true : v.guild_id,
    channelId: null == v ? true : v.id,
    channelType: null == v ? true : v.type,
    numMediaItems: y.items.length,
    source: g,
    hasMediaOptions: !y.shouldHideMediaOptions
  }), s.default.track(l.HAw.OPEN_MODAL, {
    type: l.JJy.MEDIA_VIEWER,
    source: g,
    guild_id: null == v ? true : v.guild_id,
    channel_id: null == v ? true : v.id,
    channel_type: null == v ? true : v.type
  }), (0, i.mMO)(async () => {
    let {
      default: e
    } = await n.e("48654").then(n.bind(n, 321565));
    return t => (0, r.jsx)(e, u({}, t, y))
  }, {
    modalKey: p,
    contextKey: E,
    onCloseCallback: o.a2,
    backdropStyle: i.F2Z.LIGHTBOX,
    stackingBehavior: b
  })
}