/** Chunk was on 5606 **/
/** chunk id: 310953, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _,
  W: () => m
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

function _(e) {
  let {
    withVoiceChannels: t = false,
    withCurrentVoiceChannel: n = false
  } = arguments.length > 1 && true !== arguments[1] ? arguments[1] : {}, r = arguments.length > 2 ? arguments[2] : true;
  return g(e === p.V || e === u.YYv ? (0, s.g)() : l.A.getGuildWithoutChangingGuildActionRows(e).guildChannels, {
    currentVoiceChannelId: d.A.getVoiceChannelId(),
    selectedChannelId: d.A.getChannelId()
  }, {
    withVoiceChannels: t,
    withCurrentVoiceChannel: n
  }, r)
}

function m(e, t, n) {
  let {
    withVoiceChannels: l = false,
    withCurrentVoiceChannel: s = false
  } = arguments.length > 3 && true !== arguments[3] ? arguments[3] : {}, a = arguments.length > 4 ? arguments[4] : true, u = (0, i.bG)([c.default], () => c.default.getGuildChangeSentinel(e)), p = (0, i.bG)([o.A], () => o.A.version), {
    currentVoiceChannelId: _,
    selectedChannelId: m
  } = (0, i.cf)([d.A], () => ({
    currentVoiceChannelId: d.A.getVoiceChannelId(),
    selectedChannelId: d.A.getChannelId()
  }));
  return (0, r.useMemo)(() => g(t, {
    currentVoiceChannelId: _,
    selectedChannelId: m
  }, {
    withVoiceChannels: l,
    withCurrentVoiceChannel: s
  }, a).map(e => e.id), [t, n, u, p])
}

function g(e, t) {
  let {
    currentVoiceChannelId: n,
    selectedChannelId: r
  } = t, {
    withVoiceChannels: i,
    withCurrentVoiceChannel: l
  } = arguments.length > 2 && true !== arguments[2] ? arguments[2] : {}, s = arguments.length > 3 ? arguments[3] : true, o = [];
  return e.forEachShownChannel(e => {
    ((0, a.tr)(e.type) || i && (0, a.ay)(e.type) || l && (e.id === n || e.id === r)) && o.push(e)
  }, s), o
}