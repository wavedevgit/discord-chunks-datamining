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
  } = e, n = i.useRef(null), j = (0, c.M5)(t.id, "GuildSettingsBoostPerks"), O = (0, l.bG)([o.A], () => o.A.hideInstantInvites);
  (0, u.A)(n, p.nd0.BOOST_PERKS_VANITY_URL);
  let {
    vanityURLCode: y,
    vanityURLUses: v,
    originalVanityURLCode: A,
    errorDetails: E,
    fetched: N
  } = (0, l.cf)([g.A], () => ({
    vanityURLCode: g.A.vanityURLCode,
    vanityURLUses: g.A.vanityURLUses,
    originalVanityURLCode: g.A.originalVanityURLCode,
    errorDetails: g.A.errorDetails,
    fetched: g.A.fetchedVanityURL
  })), _ = null == t ? true : t.id;
  return (i.useEffect(() => {
    null == _ || N || (0, f.Je)(_)
  }, [N, _]), null == t) ? null : O ? (0, r.jsx)(a.A, {}) : (0, r.jsxs)("div", {
    ref: n,
    children: [(0, r.jsxs)(s.Heading, {
      variant: "heading-md/medium",
      color: "text-strong",
      className: h.D,
      children: [x.intl.string(x.t["5XZKy/"]), (0, r.jsx)(b.rV, {
        guild: t
      })]
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      className: h.h,
      children: j ? x.intl.format(x.t["J/v84B"], {
        helpCenterArticle: d.A.getArticleURL(p.MVz.GUILD_VANITY_URL)
      }) : x.intl.format(x.t.koklFG, {
        helpCenterArticle: d.A.getArticleURL(p.MVz.GUILD_VANITY_URL)
      })
    }), (0, r.jsx)(m.C, {
      guild: t,
      vanityURLCode: y,
      vanityURLUses: v,
      originalVanityURLCode: A,
      errorDetails: E
    })]
  })
}