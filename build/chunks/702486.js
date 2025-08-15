/** Chunk was on 45620 **/
/** chunk id: 702486, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  z: () => u
});
var Chunk647438 = require("./647438.js"),
  Chunk638730 = require("./638730.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk780475 = require("./780475.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");
let c = (e, t, r, n) => {
    let {
      scrollTop: l = 0,
      scrollOffset: a = 0,
      scrollHeight: i = 0,
      scrollWidth: s = 0
    } = n;
    if (i > 0) {
      let n = (l + a) / i;
      n > 0 && o.default.track(e, {
        scroll_visible_percent: n,
        source: r,
        page_height: Math.round(i),
        page_width: Math.round(s),
        page_session_id: t
      })
    }
  },
  u = (e, t) => {
    let {
      analyticsSource: r
    } = (0, i.MV)(t), o = (0, l.h)(c, 5e3, [], {
      trailing: true
    }), u = (0, a.sp)(), d = null == u ? true : u.sessionId;
    return {
      handleScroll: n.useCallback(() => {
        if (null != e.current) {
          let t = e.current.getScrollerNode();
          null != t && o(s.rMx.COLLECTIBLES_SHOP_SCROLLED, null != d ? d : "", r, {
            scrollTop: t.scrollTop,
            scrollOffset: t.offsetHeight,
            scrollHeight: t.scrollHeight,
            scrollWidth: t.scrollWidth
          })
        }
      }, [o, r, d, e])
    }
  }