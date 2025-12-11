/** Chunk was on 9536 **/
/** chunk id: 354103, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  V: () => j
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk959045 = require("./959045.js");

function j(e) {
  let {
    guild: t
  } = e, n = i.useRef(null), j = (0, o.g1)(t.id, "GuildSettingsBoostPerks"), v = (0, l.e7)([c.Z], () => c.Z.hideInstantInvites);
  (0, u.Z)(n, p.KsC.BOOST_PERKS_VANITY_URL);
  let {
    vanityURLCode: O,
    vanityURLUses: C,
    originalVanityURLCode: y,
    errorDetails: N,
    fetched: E
  } = (0, l.cj)([f.Z], () => ({
    vanityURLCode: f.Z.vanityURLCode,
    vanityURLUses: f.Z.vanityURLUses,
    originalVanityURLCode: f.Z.originalVanityURLCode,
    errorDetails: f.Z.errorDetails,
    fetched: f.Z.fetchedVanityURL
  })), I = null == t ? true : t.id;
  return (i.useEffect(() => {
    null == I || E || (0, g.U5)(I)
  }, [E, I]), null == t) ? null : v ? (0, r.jsx)(s.Z, {}) : (0, r.jsxs)("div", {
    ref: n,
    children: [(0, r.jsxs)(a.Heading, {
      variant: "heading-md/medium",
      color: "text-strong",
      className: x.title,
      children: [h.intl.string(h.t["5XZKy/"]), (0, r.jsx)(m.xl, {
        guild: t
      })]
    }), (0, r.jsx)(a.Text, {
      variant: "text-sm/medium",
      color: "text-subtle",
      className: x.description,
      children: j ? h.intl.format(h.t["J/v84B"], {
        helpCenterArticle: d.Z.getArticleURL(p.BhN.GUILD_VANITY_URL)
      }) : h.intl.format(h.t.koklFG, {
        helpCenterArticle: d.Z.getArticleURL(p.BhN.GUILD_VANITY_URL)
      })
    }), (0, r.jsx)(b.z, {
      guild: t,
      vanityURLCode: O,
      vanityURLUses: C,
      originalVanityURLCode: y,
      errorDetails: N
    })]
  })
}