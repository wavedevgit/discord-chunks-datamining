/** Chunk was on web.js **/
/** chunk id: 256905, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => u,
  R: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk700331 = require("./700331.js");

function o(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function s(e) {
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

function l(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = c(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function c(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let u = "Media Viewer Modal";

function d(e, t) {
  var o, c, d;
  let [f, ...p] = [e, t], {
    location: _,
    contextKey: h
  } = f, m = l(f, ["location", "contextKey"]), [g] = p, E = null == (d = m.items[null != (o = m.startingIndex) ? o : 0]) || null == (c = d.sourceMetadata) ? true : c.message;
  a.l.markSessionStarted({
    channelId: null == E ? true : E.channel_id,
    numMediaItems: m.items.length,
    source: _,
    hasMediaOptions: !m.shouldHideMediaOptions
  }), (0, i.mMO)(async () => {
    let {
      default: e
    } = await n.e("48654").then(n.bind(n, 321565));
    return t => (0, r.jsx)(e, s({}, t, m))
  }, {
    modalKey: u,
    contextKey: h,
    onCloseCallback: a.l.markSessionCompleted,
    backdropStyle: i.F2Z.LIGHTBOX,
    stackingBehavior: g
  })
}