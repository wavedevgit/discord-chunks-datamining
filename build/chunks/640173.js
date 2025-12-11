/** Chunk was on 77033 **/
/** chunk id: 640173, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  I: () => r
});
var Chunk473749 = require("./473749.js"),
  Chunk638730 = require("./638730.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function s(e, n, t, l) {
  let {
    scrollTop: i = 0,
    scrollOffset: o = 0,
    scrollHeight: s = 0,
    scrollWidth: r = 0
  } = l;
  if (s > 0) {
    let l = (i + o) / s;
    if (l > 0) {
      let {
        sessionId: i,
        guildId: o,
        pageIndex: d,
        pageTitle: c,
        isUserGuildMember: u,
        pageHasLeaderboard: f
      } = n;
      a.default.track(e, {
        slayer_storefront_session_id: i,
        guild_id: o,
        page_index: d,
        page_title: c,
        is_user_guild_member: u,
        page_has_leaderboard: f,
        scroll_visible_percent: l,
        page_height: Math.round(s),
        page_width: Math.round(r),
        location_stack: t
      })
    }
  }
}
let r = (e, n, t) => {
  let a = l.useRef(n);
  l.useEffect(() => {
    a.current = n
  }, [n]);
  let r = (0, i.h)(s, 5e3, [], {
    trailing: true
  });
  return {
    handleScroll: l.useCallback(() => {
      if (null != e.current) {
        let n = e.current.getScrollerNode(),
          l = a.current;
        null != n && r(o.rMx.SLAYER_STOREFRONT_PAGE_SCROLLED, l, t, {
          scrollTop: n.scrollTop,
          scrollOffset: n.offsetHeight,
          scrollHeight: n.scrollHeight,
          scrollWidth: n.scrollWidth
        })
      }
    }, [r, t, e])
  }
}