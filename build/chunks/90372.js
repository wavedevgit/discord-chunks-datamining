/** Chunk was on 193 **/
/** chunk id: 90372, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk451478 = require("./451478.js"),
  Chunk830917 = require("./830917.js"),
  Chunk985518 = require("./985518.js");
let s = {
  useForumChannelSeenManager: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e, s = a.useRef(null), o = (0, i.UU)(), c = !r.Z.isFocused(o);
    return a.useLayoutEffect(() => (null == s.current && (s.current = new l.ZP({
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