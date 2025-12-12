/** Chunk was on 45620 **/
/** chunk id: 702486, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  z: () => u
});
var Chunk473749 = require("./473749.js"),
  Chunk638730 = require("./638730.js"),
  Chunk381585 = require("./381585.jsx"),
  Chunk780475 = require("./780475.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");
let c = (e, t, n, r) => {
    let {
      scrollTop: l = 0,
      scrollOffset: o = 0,
      scrollHeight: i = 0,
      scrollWidth: a = 0
    } = r;
    if (i > 0) {
      let r = (l + o) / i;
      r > 0 && s.default.track(e, {
        scroll_visible_percent: r,
        source: n,
        page_height: Math.round(i),
        page_width: Math.round(a),
        page_session_id: t
      })
    }
  },
  u = (e, t) => {
    let {
      analyticsSource: n
    } = (0, i.MV)(t), s = (0, l.h)(c, 5e3, [], {
      trailing: true
    }), u = (0, o.sp)(), d = null == u ? true : u.sessionId;
    return {
      handleScroll: r.useCallback(() => {
        if (null != e.current) {
          let t = e.current.getScrollerNode();
          null != t && s(a.rMx.COLLECTIBLES_SHOP_SCROLLED, null != d ? d : "", n, {
            scrollTop: t.scrollTop,
            scrollOffset: t.offsetHeight,
            scrollHeight: t.scrollHeight,
            scrollWidth: t.scrollWidth
          })
        }
      }, [s, n, d, e])
    }
  }