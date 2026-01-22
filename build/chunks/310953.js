/** Chunk was on web.js **/
/** chunk id: 310953, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p,
  W: () => _
}), require("./321073.js");
var Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk960755 = require("./960755.js"),
  Chunk994020 = require("./994020.js"),
  Chunk95701 = require("./95701.js"),
  Chunk924985 = require("./924985.js"),
  Chunk458294 = require("./458294.js"),
  Chunk309010 = require("./309010.js"),
  Chunk652215 = require("./652215.js"),
  Chunk349828 = require("./349828.js");

function p(e) {
  let {
    withVoiceChannels: t = false,
    withCurrentVoiceChannel: n = false
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : true;
  return h(e === f.V || e === d.YYv ? (0, s.g)() : a.A.getGuildWithoutChangingGuildActionRows(e).guildChannels, {
    currentVoiceChannelId: u.A.getVoiceChannelId(),
    selectedChannelId: u.A.getChannelId()
  }, {
    withVoiceChannels: t,
    withCurrentVoiceChannel: n
  }, r)
}

function _(e, t, n) {
  let {
    withVoiceChannels: a = false,
    withCurrentVoiceChannel: s = false
  } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {}, o = arguments.length > 4 ? arguments[4] : true, d = (0, i.bG)([c.default], () => c.default.getGuildChangeSentinel(e)), f = (0, i.bG)([l.A], () => l.A.version), {
    currentVoiceChannelId: p,
    selectedChannelId: _
  } = (0, i.cf)([u.A], () => ({
    currentVoiceChannelId: u.A.getVoiceChannelId(),
    selectedChannelId: u.A.getChannelId()
  }));
  return (0, r.useMemo)(() => h(t, {
    currentVoiceChannelId: p,
    selectedChannelId: _
  }, {
    withVoiceChannels: a,
    withCurrentVoiceChannel: s
  }, o).map(e => e.id), [t, n, d, f])
}

function h(e, t) {
  let {
    currentVoiceChannelId: n,
    selectedChannelId: r
  } = t, {
    withVoiceChannels: i,
    withCurrentVoiceChannel: a
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, s = arguments.length > 3 ? arguments[3] : true, l = [];
  return e.forEachShownChannel(e => {
    ((0, o.tr)(e.type) || i && (0, o.ay)(e.type) || a && (e.id === n || e.id === r)) && l.push(e)
  }, s), l
}