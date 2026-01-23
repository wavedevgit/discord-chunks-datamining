/** Chunk was on web.js **/
/** chunk id: 949645, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./896048.js"), require("./667532.js");
var Chunk310953 = require("./310953.js"),
  Chunk473529 = require("./473529.js"),
  Chunk335934 = require("./335934.js"),
  Chunk380335 = require("./380335.js"),
  Chunk157550 = require("./157550.js"),
  Chunk366811 = require("./366811.js"),
  Chunk253932 = require("./253932.js"),
  Chunk189081 = require("./189081.js"),
  Chunk839067 = require("./839067.js"),
  Chunk645959 = require("./645959.js"),
  Chunk403362 = require("./403362.js"),
  Chunk265422 = require("./265422.js"),
  Chunk652215 = require("./652215.js"),
  Chunk746080 = require("./746080.js");
let g = () => {
  let e = s.A.getMessageRequestsCount() > 0 || o.A.getSpamChannelsCount() > 0;
  return [h.BVt.FRIENDS, (0, a.HF)("navigateToChannel") ? h.BVt.ICYMI : null, u.A.hasLibraryApplication() && !c.l_.getSetting() ? h.BVt.APPLICATION_LIBRARY : null, e ? h.BVt.MESSAGE_REQUESTS : null, h.BVt.APPLICATION_STORE, h.BVt.COLLECTIBLES_SHOP, c.dm.getSetting() ? h.BVt.FAMILY_CENTER : null, h.BVt.QUEST_HOME_V2].filter(p.Vq)
};

function E(e, t) {
  return e < 0 ? t - 1 : e >= t ? 0 : e
}

function y(e) {
  return g().findIndex(t => e.startsWith(t))
}

function b(e, t) {
  (0, _.i)(e, t)
}

function O(e) {
  let t = d.A.getCurrentRoute();
  e === h.BVt.APPLICATION_STORE && null != t ? (0, _.a)(t) : (0, _.a)(e)
}

function v(e) {
  let {
    channelId: t,
    path: n,
    basePath: r
  } = l.A.getState(), i = f.A.getPrivateChannelIds(), a = __OVERLAY__ ? i : [...g(), ...i], s = (null == t ? y(null != n ? n : r) : null != t ? a.indexOf(t) : 0) + e;
  s >= a.length ? s = 0 : s < 0 && (s = a.length - 1);
  let o = a[s];
  g().includes(o) ? O(o) : b(h.ME, o)
}

function A(e, t) {
  let n = l.A.getState().channelId,
    a = (0, r.A)(t, {
      withCurrentVoiceChannel: true
    }).map(e => e.id);
  (0, i.K)(t) && a.unshift(m.VV.GUILD_HOME);
  let s = E((null != n ? a.indexOf(n) : false) + e, a.length);
  b(t, a[s])
}

function I() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 1,
    t = l.A.getState().guildId;
  null == t ? v(e) : A(e, t)
}