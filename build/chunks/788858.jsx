/** Chunk was on web.js **/
/** chunk id: 788858, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk622822 = require("./622822.js"),
  Chunk447003 = require("./447003.js"),
  Chunk496675 = require("./496675.js"),
  Chunk231338 = require("./231338.js");

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

function f(e, t) {
  if (null == e) return {};
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function p(e) {
  var {
    channel: t
  } = e, n = f(e, ["channel"]);
  let u = (0, i.e7)([l.Z], () => t.isPrivate() || l.Z.can(c.Pl.CONNECT, t));
  if (t.isDM() || t.isGroupDM()) return <o.Csw{...d({}, n)} />;
  let _ = t.isGuildStageVoice(),
    p = !u || (0, s.Z)(t);
  return _ && p ? <o.pki{...d({}, n)} /> : _ ? <o.ewx{...d({}, n)} /> : (0, a.aC)(t) ? <o.BVY{...d({}, n)} /> : p ? <o.gjC{...d({}, n)} /> : <o.gj8{...d({}, n)} />
}