/** Chunk was on 77033 **/
/** chunk id: 640173, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  I: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk638730 = require("./638730.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function r(e, n, t, l) {
  let {
    scrollTop: i = 0,
    scrollOffset: o = 0,
    scrollHeight: r = 0,
    scrollWidth: s = 0
  } = l;
  if (r > 0) {
    let l = (i + o) / r;
    if (l > 0) {
      let {
        sessionId: i,
        guildId: o,
        pageIndex: d,
        pageTitle: c,
        isUserGuildMember: u,
        pageHasLeaderboard: g
      } = n;
      a.default.track(e, {
        slayer_storefront_session_id: i,
        guild_id: o,
        page_index: d,
        page_title: c,
        is_user_guild_member: u,
        page_has_leaderboard: g,
        scroll_visible_percent: l,
        page_height: Math.round(r),
        page_width: Math.round(s),
        location_stack: t
      })
    }
  }
}
let s = (e, n, t) => {
  let a = l.useRef(n);
  l.useEffect(() => {
    a.current = n
  }, [n]);
  let s = (0, i.h)(r, 5e3, [], {
    trailing: true
  });
  return {
    handleScroll: l.useCallback(() => {
      if (null != e.current) {
        let n = e.current.getScrollerNode(),
          l = a.current;
        null != n && s(o.rMx.SLAYER_STOREFRONT_PAGE_SCROLLED, l, t, {
          scrollTop: n.scrollTop,
          scrollOffset: n.offsetHeight,
          scrollHeight: n.scrollHeight,
          scrollWidth: n.scrollWidth
        })
      }
    }, [s, t, e])
  }
}