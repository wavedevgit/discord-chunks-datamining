/** Chunk was on web.js **/
/** chunk id: 266076, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk43267 = require("./43267.js"),
  Chunk93687 = require("./93687.js"),
  Chunk785232 = require("./785232.jsx");

function c(e, t) {
  if (null == e) return {};
  var n, r, i = u(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function u(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function d(e) {
  var {
    channel: t,
    size: n,
    facepileSizeOverride: i,
    experimentLocation: u,
    isTyping: d,
    status: f,
    className: _,
    animated: p = false
  } = e, h = c(e, ["channel", "size", "facepileSizeOverride", "experimentLocation", "isTyping", "status", "className", "animated"]);
  let {
    isFacepileEnabled: m
  } = s.Z.useExperiment({
    location: u
  }, {
    autoTrackExposure: true
  });
  return t.recipients.length >= 2 && m && null == t.icon ? (0, r.jsx)(l.Z, {
    "aria-label": h["aria-label"],
    "aria-hidden": h["aria-hidden"],
    className: _,
    recipients: t.recipients,
    size: null != i ? i : n,
    isTyping: d,
    status: f
  }) : (0, r.jsx)(a.qEK, {
    "aria-hidden": h["aria-hidden"],
    "aria-label": h["aria-label"],
    className: _,
    size: n,
    src: (0, o.x)(t, 80, p)
  })
}
let f = Chunk647438.memo(d)