/** Chunk was on web.js **/
/** chunk id: 140492, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js"), require("./290780.js");
var Chunk358230 = require("./358230.js"),
  Chunk931261 = require("./931261.js"),
  Chunk355298 = require("./355298.js"),
  Chunk333984 = require("./333984.js"),
  Chunk937797 = require("./937797.js"),
  Chunk905423 = require("./905423.js"),
  Chunk695346 = require("./695346.js"),
  Chunk283595 = require("./283595.js"),
  Chunk923834 = require("./923834.js"),
  Chunk55589 = require("./55589.js"),
  Chunk823379 = require("./823379.js"),
  Chunk475468 = require("./475468.js"),
  Chunk981631 = require("./981631.js"),
  Chunk176505 = require("./176505.js"),
  Chunk46140 = require("./46140.js");
let E = () => {
  let e = Chunk355298.Z.getMessageRequestsCount() > 0 || Chunk333984.Z.getSpamChannelsCount() > 0;
  return [Chunk981631.Z5c.FRIENDS, module ? Chunk981631.Z5c.MESSAGE_REQUESTS : null, Chunk283595.Z.hasLibraryApplication() && !Chunk695346.bm.getSetting() ? Chunk981631.Z5c.APPLICATION_LIBRARY : null, Chunk981631.Z5c.APPLICATION_STORE, Chunk981631.Z5c.COLLECTIBLES_SHOP, Chunk695346.Ex.getSetting() ? Chunk981631.Z5c.FAMILY_CENTER : null, Chunk937797.m8.getConfig({
    location: Chunk46140.dr.IN_APP_NAVIGATION
  }).enabled ? Chunk981631.Z5c.QUEST_HOME_V2 : null].filter(Chunk823379.lm)
};

function b(e, t) {
  return e < 0 ? t - 1 : e >= t ? 0 : e
}

function y(e) {
  return E().findIndex(t => e.startsWith(t))
}

function O(e, t) {
  (0, p.K)(e, t)
}

function v(e) {
  let t = d.Z.getCurrentRoute();
  e === h.Z5c.APPLICATION_STORE && null != t ? (0, p.z)(t) : (0, p.z)(e)
}

function I(e) {
  let {
    channelId: t,
    path: n,
    basePath: r
  } = l.Z.getState(), i = f.Z.getPrivateChannelIds(), a = __OVERLAY__ ? i : [...E(), ...i], o = (null == t ? y(null != n ? n : r) : null != t ? a.indexOf(t) : 0) + e;
  o >= a.length ? o = 0 : o < 0 && (o = a.length - 1);
  let s = a[o];
  E().includes(s) ? v(s) : O(h.ME, s)
}

function T(e, t) {
  let n = l.Z.getState().channelId,
    a = (0, r.Z)(t, {
      withCurrentVoiceChannel: true
    }).map(e => e.id);
  (0, i.s)(t) && a.unshift(m.oC.GUILD_HOME);
  let o = b((null != n ? a.indexOf(n) : false) + e, a.length);
  O(t, a[o])
}

function S() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 1,
    t = Chunk905423.Z.getState().guildId;
  null == exports ? I(module) : T(module, exports)
}