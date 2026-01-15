/** Chunk was on web.js **/
/** chunk id: 358230, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  T: () => _,
  Z: () => p
}), require("./539854.js");
var Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk734307 = require("./734307.js"),
  Chunk854444 = require("./854444.js"),
  Chunk131704 = require("./131704.js"),
  Chunk680089 = require("./680089.js"),
  Chunk888369 = require("./888369.js"),
  Chunk944486 = require("./944486.js"),
  Chunk981631 = require("./981631.js"),
  Chunk647086 = require("./647086.js");

function p(e) {
  let {
    withVoiceChannels: t = false,
    withCurrentVoiceChannel: n = false
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : true;
  return h(e === f._ || e === d.I_8 ? (0, o.t)() : a.Z.getGuildWithoutChangingGuildActionRows(e).guildChannels, {
    currentVoiceChannelId: u.Z.getVoiceChannelId(),
    selectedChannelId: u.Z.getChannelId()
  }, {
    withVoiceChannels: t,
    withCurrentVoiceChannel: n
  }, r)
}

function _(e, t, n) {
  let {
    withVoiceChannels: a = false,
    withCurrentVoiceChannel: o = false
  } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {}, s = arguments.length > 4 ? arguments[4] : true, d = (0, i.e7)([c.default], () => c.default.getGuildChangeSentinel(e)), f = (0, i.e7)([l.Z], () => l.Z.version), {
    currentVoiceChannelId: p,
    selectedChannelId: _
  } = (0, i.cj)([u.Z], () => ({
    currentVoiceChannelId: u.Z.getVoiceChannelId(),
    selectedChannelId: u.Z.getChannelId()
  }));
  return (0, r.useMemo)(() => h(t, {
    currentVoiceChannelId: p,
    selectedChannelId: _
  }, {
    withVoiceChannels: a,
    withCurrentVoiceChannel: o
  }, s).map(e => e.id), [t, n, d, f])
}

function h(e, t) {
  let {
    currentVoiceChannelId: n,
    selectedChannelId: r
  } = t, {
    withVoiceChannels: i,
    withCurrentVoiceChannel: a
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, o = arguments.length > 3 ? arguments[3] : true, l = [];
  return e.forEachShownChannel(e => {
    ((0, s.r8)(e.type) || i && (0, s.bw)(e.type) || a && (e.id === n || e.id === r)) && l.push(e)
  }, o), l
}