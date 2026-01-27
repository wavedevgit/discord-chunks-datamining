/** Chunk was on web.js **/
/** chunk id: 509536, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  K: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk361158 = require("./361158.jsx"),
  Chunk375965 = require("./375965.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk405680 = require("./405680.jsx"),
  Chunk426760 = require("./426760.jsx");
let p = "BoostedGuildPerksModalConnected",
  _ = e => {
    let {
      guildId: t,
      close: n,
      location: s,
      scrollToPowerupCards: p
    } = e, _ = (0, i.bG)([u.default], () => u.default.getCurrentUser()), h = (0, i.bG)([c.A], () => c.A.getGuild(t), [t]), {
      analyticsLocations: m
    } = (0, o.Ay)(a.A.BOOSTED_GUILD_PERKS_MODAL), g = (0, l.j)("BoostedGuildPerksModal");
    if (null == _ || null == h) return null;
    let E = g ? f.A : d.A;
    return (0, r.jsx)(o.f5, {
      value: m,
      children: (0, r.jsx)(E, {
        analyticsLocation: s,
        onClose: n,
        guild: h,
        scrollToPowerupCards: p
      })
    })
  };

function h(e) {
  let {
    guildId: t,
    location: n,
    scrollToPowerupCards: i
  } = e;
  (0, s.B8)(e => {
    let {
      closeLayer: a
    } = e;
    return (0, r.jsx)(_, {
      close: a,
      guildId: t,
      location: n,
      scrollToPowerupCards: i
    })
  }, {
    layerKey: p
  })
}