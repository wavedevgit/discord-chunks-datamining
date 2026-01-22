/** Chunk was on web.js **/
/** chunk id: 696028, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");

function s(e, t, n, s) {
  let o = r.useRef(false),
    l = r.useRef(t),
    c = r.useRef({
      positionInSection: n,
      analyticsLocations: s
    });
  return r.useEffect(() => {
    l.current = t
  }, [t]), {
    handleCardHover: r.useCallback(() => {
      if (!o.current) {
        let {
          sessionId: t,
          guildId: n,
          pageIndex: r,
          pageTitle: s,
          pageSection: u,
          pageSectionTitle: d,
          isUserGuildMember: f,
          pageHasLeaderboard: p
        } = l.current, {
          positionInSection: _,
          analyticsLocations: h
        } = c.current;
        i.default.track(a.HAw.SLAYER_STOREFRONT_CARD_HOVERED, {
          slayer_storefront_session_id: t,
          sku_id: e,
          guild_id: n,
          page_index: r,
          page_title: s,
          page_section: u,
          page_section_title: d,
          position_in_section: _,
          is_user_guild_member: f,
          page_has_leaderboard: p,
          location_stack: h
        }), o.current = true
      }
    }, [e]),
    handleCardUnhover: r.useCallback(() => {
      o.current = false
    }, [])
  }
}