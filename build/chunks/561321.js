/** Chunk was on 47841 **/
/** chunk id: 561321, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Rg: () => d,
  eK: () => u,
  fS: () => g,
  v: () => f
});
var Chunk311907 = require("./311907.js"),
  Chunk734057 = require("./734057.js"),
  Chunk71393 = require("./71393.js"),
  Chunk488926 = require("./488926.js"),
  Chunk863694 = require("./863694.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(e, t) {
  return (0, r.bG)([a.A], () => a.A.editedDefaultChannelIds.has(e) || null != t && a.A.editedDefaultChannelIds.has(t))
}

function u(e, t) {
  return (0, r.bG)([a.A], () => e === t || null != t && a.A.editedDefaultChannelIds.has(t))
}

function f(e, t) {
  return (0, r.bG)([a.A, i.A], () => null != t && a.A.editedDefaultChannelIds.has(t) ? o.intl.string(o.t.Lz94y1) : s.MJ(c.xBc.VIEW_CHANNEL, i.A.getChannel(e)) ? true : o.intl.string(o.t["031cXt"]))
}

function g(e, t) {
  let n = (0, r.bG)([l.A], () => {
      var n;
      return (null == (n = l.A.getGuild(e)) ? true : n.rulesChannelId) === t
    }),
    s = (0, r.bG)([i.A], () => {
      var e;
      return null == (e = i.A.getChannel(t)) ? true : e.isGuildVocal()
    });
  return n ? o.intl.string(o.t["2XWEK9"]) : s ? o.intl.string(o.t.t6iJLY) : true
}