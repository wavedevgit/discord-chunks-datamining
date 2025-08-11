/** Chunk was on 34779 **/
/** chunk id: 147522, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./361932.js"), require("./187205.js"), require("./539854.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk661824 = require("./661824.js"),
  Chunk289481 = require("./289481.js"),
  Chunk809780 = require("./809780.js"),
  Chunk388032 = require("./388032.js"),
  Chunk739910 = require("./739910.js");

function d(e, t, n) {
  let {
    markChannelRead: i,
    markGuildRead: d,
    deleteChannel: h,
    toggle: p,
    getNumUnreadChannels: f
  } = t, g = null;
  return l().flatMap(e, e => {
    let t = e.sortOrder !== g;
    g = e.sortOrder;
    let l = [];
    return t && (e.hasLoadedAnything && e.sortOrder === a.As.ReallyOldChannel ? l.push(<o.Z className={u.divider} contentClassName={u.dividerContent}>{c.intl.string(c.t.roBMzs)}</o.Z>) : e.hasLoadedAnything && e.sortOrder === a.As.NoNotifications && l.push(<o.Z className={u.divider} contentClassName={u.dividerContent}>{c.intl.string(c.t["2Ys7np"])}</o.Z>)), l.push(<s.Z channel={e} markChannelRead={i} markGuildRead={d} toggle={p} deleteChannel={h} onJump={n} getNumUnreadChannels={f} />), l
  })
}