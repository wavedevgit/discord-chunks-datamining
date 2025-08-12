/** Chunk was on 20501 **/
/** chunk id: 358230, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  T: () => g,
  Z: () => p
}), require("./539854.js");
var Chunk73800 = require("./73800.js"),
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
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, i = arguments.length > 2 ? arguments[2] : true;
  return h(e === m._ || e === u.I_8 ? (0, a.t)() : s.Z.getGuildWithoutChangingGuildActionRows(e).guildChannels, {
    currentVoiceChannelId: d.Z.getVoiceChannelId(),
    selectedChannelId: d.Z.getChannelId()
  }, {
    withVoiceChannels: t,
    withCurrentVoiceChannel: n
  }, i)
}

function g(e, t, n) {
  let {
    withVoiceChannels: s = false,
    withCurrentVoiceChannel: a = false
  } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {}, l = arguments.length > 4 ? arguments[4] : true, u = (0, r.e7)([c.default], () => c.default.getGuildChangeSentinel(e)), m = (0, r.e7)([o.Z], () => o.Z.version), {
    currentVoiceChannelId: p,
    selectedChannelId: g
  } = (0, r.cj)([d.Z], () => ({
    currentVoiceChannelId: d.Z.getVoiceChannelId(),
    selectedChannelId: d.Z.getChannelId()
  }));
  return (0, i.useMemo)(() => h(t, {
    currentVoiceChannelId: p,
    selectedChannelId: g
  }, {
    withVoiceChannels: s,
    withCurrentVoiceChannel: a
  }, l).map(e => e.id), [t, n, u, m])
}

function h(e, t) {
  let {
    currentVoiceChannelId: n,
    selectedChannelId: i
  } = t, {
    withVoiceChannels: r,
    withCurrentVoiceChannel: s
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, a = arguments.length > 3 ? arguments[3] : true, o = [];
  return e.forEachShownChannel(e => {
    ((0, l.r8)(e.type) || r && (0, l.bw)(e.type) || s && (e.id === n || e.id === i)) && o.push(e)
  }, a), o
}