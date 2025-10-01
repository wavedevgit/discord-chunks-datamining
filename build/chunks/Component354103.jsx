/** Chunk was on 29679 **/
/** chunk id: 354103, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  V: () => j
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497321 = require("./497321.jsx"),
  Chunk158638 = require("./158638.js"),
  Chunk246946 = require("./246946.js"),
  Chunk63063 = require("./63063.js"),
  Chunk436879 = require("./436879.js"),
  Chunk736617 = require("./736617.js"),
  Chunk566084 = require("./566084.js"),
  Chunk295051 = require("./295051.jsx"),
  Chunk383793 = require("./383793.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk501668 = require("./501668.js");

function j(e) {
  let {
    guild: t
  } = e, n = i.useRef(null), j = (0, o.g1)(t.id, "GuildSettingsBoostPerks"), v = (0, l.e7)([c.Z], () => c.Z.hideInstantInvites);
  (0, u.Z)(n, h.KsC.BOOST_PERKS_VANITY_URL);
  let {
    vanityURLCode: _,
    vanityURLUses: O,
    originalVanityURLCode: y,
    errorDetails: C,
    fetched: N
  } = (0, l.cj)([g.Z], () => ({
    vanityURLCode: g.Z.vanityURLCode,
    vanityURLUses: g.Z.vanityURLUses,
    originalVanityURLCode: g.Z.originalVanityURLCode,
    errorDetails: g.Z.errorDetails,
    fetched: g.Z.fetchedVanityURL
  })), E = null == t ? true : t.id;
  return (i.useEffect(() => {
    null == E || N || (0, m.U5)(E)
  }, [N, E]), null == t) ? null : v ? (0, r.jsx)(a.Z, {}) : (0, r.jsxs)(s.hjN, {
    ref: n,
    children: [(0, r.jsxs)(s.vwX, {
      className: b.title,
      children: [x.intl.string(x.t["5XZKy8"]), (0, r.jsx)(p.xl, {
        guild: t
      })]
    }), (0, r.jsx)(s.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      className: b.description,
      children: j ? x.intl.format(x.t["J/v84O"], {
        helpCenterArticle: d.Z.getArticleURL(h.BhN.GUILD_VANITY_URL)
      }) : x.intl.format(x.t.koklFB, {
        helpCenterArticle: d.Z.getArticleURL(h.BhN.GUILD_VANITY_URL)
      })
    }), (0, r.jsx)(f.z, {
      guild: t,
      vanityURLCode: _,
      vanityURLUses: O,
      originalVanityURLCode: y,
      errorDetails: C
    })]
  })
}