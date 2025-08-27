/** Chunk was on web.js **/
/** chunk id: 312097, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => p,
  Q: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk254109 = require("./254109.js"),
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

function d(e, t) {
  if (null == e) return {};
  var n, r, i = f(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let _ = "Media Viewer Modal";

function p(e) {
  var t, c, f, {
      location: p,
      contextKey: h
    } = e,
    m = d(e, ["location", "contextKey"]);
  let g = null == (c = m.items[null != (f = m.startingIndex) ? f : 0]) || null == (t = c.sourceMetadata) ? true : t.message,
    E = a.Z.getChannel(null == g ? true : g.channel_id);
  (0, s.fS)({
    guildId: null == E ? true : E.guild_id,
    channelId: null == E ? true : E.id,
    channelType: null == E ? true : E.type,
    numMediaItems: m.items.length,
    source: p,
    hasMediaOptions: !m.shouldHideMediaOptions
  }), o.default.track(l.rMx.OPEN_MODAL, {
    type: l.jXE.MEDIA_VIEWER,
    source: p,
    guild_id: null == E ? true : E.guild_id,
    channel_id: null == E ? true : E.id,
    channel_type: null == E ? true : E.type
  }), (0, i.ZDy)(async () => {
    let {
      default: e
    } = await n.e("39476").then(n.bind(n, 97594));
    return t => (0, r.jsx)(e, u({}, t, m))
  }, {
    modalKey: _,
    contextKey: h,
    onCloseCallback: s.VO,
    backdropStyle: i.fCB.LIGHTBOX
  })
}