/** Chunk was on 47841 **/
/** chunk id: 423418, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  u: () => j
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk974544 = require("./974544.jsx"),
  Chunk840120 = require("./840120.js"),
  Chunk351906 = require("./351906.js"),
  Chunk975571 = require("./975571.js"),
  Chunk665346 = require("./665346.js"),
  Chunk310527 = require("./310527.js"),
  Chunk737331 = require("./737331.js"),
  Chunk627011 = require("./627011.jsx"),
  Chunk911144 = require("./911144.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk182452 = require("./182452.js");

function j(e) {
  let {
    guild: t
  } = e, n = i.useRef(null), j = (0, o.M5)(t.id, "GuildSettingsBoostPerks"), _ = (0, l.bG)([c.A], () => c.A.hideInstantInvites);
  (0, u.A)(n, b.nd0.BOOST_PERKS_VANITY_URL);
  let {
    vanityURLCode: O,
    vanityURLUses: v,
    originalVanityURLCode: y,
    errorDetails: A,
    fetched: E
  } = (0, l.cf)([m.A], () => ({
    vanityURLCode: m.A.vanityURLCode,
    vanityURLUses: m.A.vanityURLUses,
    originalVanityURLCode: m.A.originalVanityURLCode,
    errorDetails: m.A.errorDetails,
    fetched: m.A.fetchedVanityURL
  })), N = null == t ? true : t.id;
  return (i.useEffect(() => {
    null == N || E || (0, g.Je)(N)
  }, [E, N]), null == t) ? null : _ ? (0, r.jsx)(a.A, {}) : (0, r.jsxs)("div", {
    ref: n,
    children: [(0, r.jsxs)(s.Heading, {
      variant: "heading-md/medium",
      color: "text-strong",
      className: x.D,
      children: [h.intl.string(h.t["5XZKy/"]), (0, r.jsx)(p.rV, {
        guild: t
      })]
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      className: x.h,
      children: j ? h.intl.format(h.t["J/v84B"], {
        helpCenterArticle: d.A.getArticleURL(b.MVz.GUILD_VANITY_URL)
      }) : h.intl.format(h.t.koklFG, {
        helpCenterArticle: d.A.getArticleURL(b.MVz.GUILD_VANITY_URL)
      })
    }), (0, r.jsx)(f.C, {
      guild: t,
      vanityURLCode: O,
      vanityURLUses: v,
      originalVanityURLCode: y,
      errorDetails: A
    })]
  })
}