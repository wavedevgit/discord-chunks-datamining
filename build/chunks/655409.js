/** Chunk was on web.js **/
/** chunk id: 655409, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => o
});
var Chunk473749 = require("./473749.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");

function o(e, t, n, o) {
  let s = r.useRef(false),
    l = r.useRef(t),
    c = r.useRef({
      positionInSection: n,
      analyticsLocations: o
    });
  return r.useEffect(() => {
    l.current = t
  }, [t]), {
    handleCardHover: r.useCallback(() => {
      if (!s.current) {
        let {
          sessionId: t,
          guildId: n,
          pageIndex: r,
          pageTitle: o,
          section: u,
          sectionTitle: d,
          isUserGuildMember: f
        } = l.current, {
          positionInSection: _,
          analyticsLocations: p
        } = c.current;
        i.default.track(a.rMx.SLAYER_SHOP_CARD_HOVERED, {
          slayer_shop_session_id: t,
          sku_id: e,
          guild_id: n,
          page_index: r,
          page_title: o,
          section: u,
          section_title: d,
          position_in_section: _,
          is_user_guild_member: f,
          location_stack: p
        }), s.current = true
      }
    }, [e]),
    handleCardUnhover: r.useCallback(() => {
      s.current = false
    }, [])
  }
}