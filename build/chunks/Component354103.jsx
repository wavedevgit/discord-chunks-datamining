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
    vanityURLUses: C,
    originalVanityURLCode: O,
    errorDetails: y,
    fetched: E
  } = (0, l.cj)([m.Z], () => ({
    vanityURLCode: m.Z.vanityURLCode,
    vanityURLUses: m.Z.vanityURLUses,
    originalVanityURLCode: m.Z.originalVanityURLCode,
    errorDetails: m.Z.errorDetails,
    fetched: m.Z.fetchedVanityURL
  })), N = null == t ? true : t.id;
  return (i.useEffect(() => {
    null == N || E || (0, g.U5)(N)
  }, [E, N]), null == t) ? null : v ? (0, r.jsx)(s.Z, {}) : (0, r.jsxs)("div", {
    ref: n,
    children: [(0, r.jsxs)(a.vwX, {
      className: x.title,
      children: [b.intl.string(b.t["5XZKy/"]), (0, r.jsx)(p.xl, {
        guild: t
      })]
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      className: x.description,
      children: j ? b.intl.format(b.t["J/v84B"], {
        helpCenterArticle: d.Z.getArticleURL(h.BhN.GUILD_VANITY_URL)
      }) : b.intl.format(b.t.koklFG, {
        helpCenterArticle: d.Z.getArticleURL(h.BhN.GUILD_VANITY_URL)
      })
    }), (0, r.jsx)(f.z, {
      guild: t,
      vanityURLCode: _,
      vanityURLUses: C,
      originalVanityURLCode: O,
      errorDetails: y
    })]
  })
}