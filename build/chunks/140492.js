/** Chunk was on web.js **/
/** chunk id: 140492, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js"), require("./290780.js");
var Chunk358230 = require("./358230.js"),
  Chunk931261 = require("./931261.js"),
  Chunk355298 = require("./355298.js"),
  Chunk333984 = require("./333984.js"),
  Chunk905423 = require("./905423.js"),
  Chunk695346 = require("./695346.js"),
  Chunk283595 = require("./283595.js"),
  Chunk923834 = require("./923834.js"),
  Chunk55589 = require("./55589.js"),
  Chunk823379 = require("./823379.js"),
  Chunk475468 = require("./475468.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js");
let m = () => {
  let e = Chunk355298.Z.getMessageRequestsCount() > 0 || Chunk333984.Z.getSpamChannelsCount() > 0;
  return [Chunk981631.Z5c.FRIENDS, module ? Chunk981631.Z5c.MESSAGE_REQUESTS : null, Chunk283595.Z.hasLibraryApplication() && !Chunk695346.bm.getSetting() ? Chunk981631.Z5c.APPLICATION_LIBRARY : null, Chunk981631.Z5c.APPLICATION_STORE, Chunk981631.Z5c.COLLECTIBLES_SHOP, Chunk695346.Ex.getSetting() ? Chunk981631.Z5c.FAMILY_CENTER : null].filter(Chunk823379.lm)
};

function g(e, t) {
  return e < 0 ? t - 1 : e >= t ? 0 : e
}

function E(e) {
  return m().findIndex(t => e.startsWith(t))
}

function b(e, t) {
  (0, _.K)(e, t)
}

function y(e) {
  let t = u.Z.getCurrentRoute();
  e === p.Z5c.APPLICATION_STORE && null != t ? (0, _.z)(t) : (0, _.z)(e)
}

function O(e) {
  let {
    channelId: t,
    path: n,
    basePath: r
  } = s.Z.getState(), i = d.Z.getPrivateChannelIds(), a = __OVERLAY__ ? i : [...m(), ...i], o = (null == t ? E(null != n ? n : r) : null != t ? a.indexOf(t) : 0) + e;
  o >= a.length ? o = 0 : o < 0 && (o = a.length - 1);
  let l = a[o];
  m().includes(l) ? y(l) : b(p.ME, l)
}

function v(e, t) {
  let n = s.Z.getState().channelId,
    a = (0, r.Z)(t, {
      withCurrentVoiceChannel: true
    }).map(e => e.id);
  (0, i.s)(t) && a.unshift(h.oC.GUILD_HOME);
  let o = g((null != n ? a.indexOf(n) : false) + e, a.length);
  b(t, a[o])
}

function I() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 1,
    t = Chunk905423.Z.getState().guildId;
  null == exports ? O(module) : v(module, exports)
}