/** Chunk was on 59275 **/
/** chunk id: 564322, original params: e,t,l (module,exports,require) **/
"use strict";
require.d(exports, {
  X: () => u
});
var Chunk64700 = require("./64700.js"),
  Chunk59520 = require("./59520.js"),
  Chunk440938 = require("./440938.jsx"),
  Chunk790297 = require("./790297.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");
let c = (e, t, l, n) => {
    let {
      scrollTop: r = 0,
      scrollOffset: s = 0,
      scrollHeight: a = 0,
      scrollWidth: o = 0
    } = n;
    if (a > 0) {
      let n = (r + s) / a;
      n > 0 && i.default.track(e, {
        scroll_visible_percent: n,
        source: l,
        page_height: Math.round(a),
        page_width: Math.round(o),
        page_session_id: t
      })
    }
  },
  u = (e, t) => {
    let {
      analyticsSource: l
    } = (0, a.lC)(t), i = (0, r.I)(c, 5e3, [], {
      trailing: true
    }), u = (0, s.uM)(), d = null == u ? true : u.sessionId;
    return {
      handleScroll: n.useCallback(() => {
        if (null != e.current) {
          let t = e.current.getScrollerNode();
          null != t && i(o.HAw.COLLECTIBLES_SHOP_SCROLLED, null != d ? d : "", l, {
            scrollTop: t.scrollTop,
            scrollOffset: t.offsetHeight,
            scrollHeight: t.scrollHeight,
            scrollWidth: t.scrollWidth
          })
        }
      }, [i, l, d, e])
    }
  }