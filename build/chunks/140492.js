/** Chunk was on 75708 **/
/** chunk id: 140492, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
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
let f = () => {
  let e = Chunk355298.Z.getMessageRequestsCount() > 0 || Chunk333984.Z.getSpamChannelsCount() > 0;
  return [Chunk981631.Z5c.FRIENDS, module ? Chunk981631.Z5c.MESSAGE_REQUESTS : null, Chunk283595.Z.hasLibraryApplication() && !Chunk695346.bm.getSetting() ? Chunk981631.Z5c.APPLICATION_LIBRARY : null, Chunk981631.Z5c.APPLICATION_STORE, Chunk981631.Z5c.COLLECTIBLES_SHOP, Chunk695346.Ex.getSetting() ? Chunk981631.Z5c.FAMILY_CENTER : null].filter(Chunk823379.lm)
};

function b() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 1,
    t = Chunk905423.Z.getState().guildId;
  null == exports ? function(e) {
    let {
      channelId: t,
      path: n,
      basePath: i
    } = l.Z.getState(), r = u.Z.getPrivateChannelIds(), s = __OVERLAY__ ? r : [...f(), ...r], a = (null == t ? (c = null != n ? n : i, f().findIndex(e => c.startsWith(e))) : null != t ? s.indexOf(t) : 0) + e;
    a >= s.length ? a = 0 : a < 0 && (a = s.length - 1);
    let o = s[a];
    if (f().includes(o)) {
      var c, m;
      let e = d.Z.getCurrentRoute();
      o === g.Z5c.APPLICATION_STORE && null != e ? (0, p.z)(e) : (0, p.z)(o)
    } else m = g.ME, (0, p.K)(m, o)
  }(module) : function(e, t) {
    var n, s, a;
    let o = l.Z.getState().channelId,
      c = (0, i.Z)(t, {
        withCurrentVoiceChannel: true
      }).map(e => e.id);
    (0, r.s)(t) && c.unshift(h.oC.GUILD_HOME);
    let d = (n = (null != o ? c.indexOf(o) : false) + e, s = c.length, n < 0 ? s - 1 : n >= s ? 0 : n);
    a = c[d], (0, p.K)(t, a)
  }(module, exports)
}