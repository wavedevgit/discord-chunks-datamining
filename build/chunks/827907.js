/** Chunk was on 64523 **/
/** chunk id: 827907, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  EH: () => m,
  Mf: () => d,
  lL: () => g,
  t4: () => u
});
var Chunk442837 = require("./442837.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk700785 = require("./700785.js"),
  Chunk889369 = require("./889369.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e, t) {
  return (0, r.e7)([a.Z], () => a.Z.editedDefaultChannelIds.has(e) || null != t && a.Z.editedDefaultChannelIds.has(t))
}

function u(e, t) {
  return (0, r.e7)([a.Z], () => e === t || null != t && a.Z.editedDefaultChannelIds.has(t))
}

function m(e, t) {
  return (0, r.e7)([a.Z, i.Z], () => null != t && a.Z.editedDefaultChannelIds.has(t) ? c.intl.string(c.t.Lz94y8) : s.Uu(o.Plq.VIEW_CHANNEL, i.Z.getChannel(e)) ? true : c.intl.string(c.t["031cXl"]))
}

function g(e, t) {
  let n = (0, r.e7)([l.Z], () => {
      var n;
      return (null == (n = l.Z.getGuild(e)) ? true : n.rulesChannelId) === t
    }),
    s = (0, r.e7)([i.Z], () => {
      var e;
      return null == (e = i.Z.getChannel(t)) ? true : e.isGuildVocal()
    });
  return n ? c.intl.string(c.t["2XWEKy"]) : s ? c.intl.string(c.t.t6iJLS) : true
}