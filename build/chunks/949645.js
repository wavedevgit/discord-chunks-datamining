/** Chunk was on 2827 **/
/** chunk id: 949645, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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
let f = () => {
  let e = s.A.getMessageRequestsCount() > 0 || a.A.getSpamChannelsCount() > 0;
  return [g.BVt.FRIENDS, (0, l.HF)("navigateToChannel") ? g.BVt.ICYMI : null, d.A.hasLibraryApplication() && !c.l_.getSetting() ? g.BVt.APPLICATION_LIBRARY : null, e ? g.BVt.MESSAGE_REQUESTS : null, g.BVt.APPLICATION_STORE, g.BVt.COLLECTIBLES_SHOP, c.dm.getSetting() ? g.BVt.FAMILY_CENTER : null, g.BVt.QUEST_HOME_V2].filter(p.Vq)
};

function b() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : 1,
    t = o.A.getState().guildId;
  if (null == t) ! function(e) {
    var t, n;
    let {
      channelId: r,
      path: i,
      basePath: l
    } = o.A.getState(), s = _.A.getPrivateChannelIds(), a = __OVERLAY__ ? s : [...f(), ...s], c = (null == r ? (t = null != i ? i : l, f().findIndex(e => t.startsWith(e))) : null != r ? a.indexOf(r) : 0) + e;
    c >= a.length ? c = 0 : c < 0 && (c = a.length - 1);
    let d = a[c];
    if (f().includes(d)) {
      let e;
      e = u.A.getCurrentRoute(), d === g.BVt.APPLICATION_STORE && null != e ? (0, m.a)(e) : (0, m.a)(d)
    } else n = g.ME, (0, m.i)(n, d)
  }(e);
  else {
    var n, l, s;
    let a, c;
    a = o.A.getState().channelId, c = (0, r.A)(t, {
      withCurrentVoiceChannel: true
    }).map(e => e.id), (0, i.K)(t) && c.unshift(A.VV.GUILD_HOME), n = (null != a ? c.indexOf(a) : false) + e, l = c.length, s = c[n < 0 ? l - 1 : n >= l ? 0 : n], (0, m.i)(t, s)
  }
}