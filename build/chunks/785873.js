/** Chunk was on web.js **/
/** chunk id: 785873, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  X: () => s
});
var Chunk473749 = require("./473749.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js");
let a = 1e3;

function s(e, t, n, s) {
  let l = r.useRef(null),
    c = r.useRef(t),
    u = r.useRef({
      positionInSection: n,
      analyticsLocations: s
    });
  r.useEffect(() => {
    c.current = t
  }, [t]);
  let d = r.useCallback(() => {
      let {
        sessionId: t,
        guildId: n,
        pageIndex: r,
        pageTitle: a,
        pageSection: s,
        pageSectionTitle: l,
        isUserGuildMember: d,
        pageHasLeaderboard: f
      } = c.current, {
        positionInSection: p,
        analyticsLocations: _
      } = u.current;
      i.default.track(o.rMx.SLAYER_STOREFRONT_CARD_IMPRESSION, {
        slayer_storefront_session_id: t,
        sku_id: e,
        guild_id: n,
        page_index: r,
        page_title: a,
        page_section: s,
        page_section_title: l,
        position_in_section: p,
        is_user_guild_member: d,
        page_has_leaderboard: f,
        location_stack: _
      })
    }, [e]),
    f = r.useCallback(e => {
      e ? null === l.current && (l.current = window.setTimeout(() => {
        d(), l.current = null
      }, a)) : null !== l.current && (clearTimeout(l.current), l.current = null)
    }, [d]);
  return r.useEffect(() => () => {
    null !== l.current && (clearTimeout(l.current), l.current = null)
  }, []), {
    handleCardVisibilityChange: f
  }
}