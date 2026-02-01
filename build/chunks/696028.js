/** Chunk was on 9753 **/
/** chunk id: 696028, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
});
var Chunk64700 = require("./64700.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function a(e, t, n, a) {
  let s = r.useRef(false),
    o = r.useRef(t),
    c = r.useRef({
      positionInSection: n,
      analyticsLocations: a
    });
  return r.useEffect(() => {
    o.current = t
  }, [t]), {
    handleCardHover: r.useCallback(() => {
      if (!s.current) {
        let {
          sessionId: t,
          guildId: n,
          pageIndex: r,
          pageTitle: a,
          pageSection: u,
          pageSectionTitle: d,
          isUserGuildMember: p,
          pageHasLeaderboard: m
        } = o.current, {
          positionInSection: f,
          analyticsLocations: g
        } = c.current;
        i.default.track(l.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
          slayer_storefront_session_id: t,
          sku_id: e,
          guild_id: n,
          page_index: r,
          page_title: a,
          page_section: u,
          page_section_title: d,
          position_in_section: f,
          is_user_guild_member: p,
          page_has_leaderboard: m,
          location_stack: g
        }), s.current = true
      }
    }, [e]),
    handleCardUnhover: r.useCallback(() => {
      s.current = false
    }, [])
  }
}