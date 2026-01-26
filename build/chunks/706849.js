/** Chunk was on 46875 **/
/** chunk id: 706849, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk531685 = require("./531685.js"),
  Chunk365971 = require("./365971.js"),
  Chunk613999 = require("./613999.js");
let s = {
  useForumChannelSeenManager: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e, s = r.useRef(null), o = (0, i.Xg)(), c = !l.A.isFocused(o);
    return r.useLayoutEffect(() => (null == s.current && (s.current = new a.Ay({
      guildId: t,
      channelId: n,
      isPaused: c,
      windowId: o
    }), s.current.initialize()), () => {
      var e;
      null == (e = s.current) || e.terminate(), s.current = null
    }), [n, t, c, o]), s.current
  }
}