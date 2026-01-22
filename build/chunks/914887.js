/** Chunk was on web.js **/
/** chunk id: 914887, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a: () => o
});
var Chunk64700 = require("./64700.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js");
let s = 1e3;

function o(e, t, n, o) {
  let l = r.useRef(null),
    c = r.useRef(t),
    u = r.useRef({
      positionInSection: n,
      analyticsLocations: o
    });
  r.useEffect(() => {
    c.current = t
  }, [t]);
  let d = r.useCallback(() => {
      let {
        sessionId: t,
        guildId: n,
        pageIndex: r,
        pageTitle: s,
        pageSection: o,
        pageSectionTitle: l,
        isUserGuildMember: d,
        pageHasLeaderboard: f
      } = c.current, {
        positionInSection: p,
        analyticsLocations: _
      } = u.current;
      i.default.track(a.HAw.SLAYER_STOREFRONT_CARD_IMPRESSION, {
        slayer_storefront_session_id: t,
        sku_id: e,
        guild_id: n,
        page_index: r,
        page_title: s,
        page_section: o,
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
      }, s)) : null !== l.current && (clearTimeout(l.current), l.current = null)
    }, [d]);
  return r.useEffect(() => () => {
    null !== l.current && (clearTimeout(l.current), l.current = null)
  }, []), {
    handleCardVisibilityChange: f
  }
}