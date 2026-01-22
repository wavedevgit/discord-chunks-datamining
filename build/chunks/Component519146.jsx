/** Chunk was on 69079 **/
/** chunk id: 519146, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk110259 = require("./110259.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk139286 = require("./139286.js"),
  Chunk308234 = require("./308234.jsx"),
  Chunk303612 = require("./303612.jsx"),
  Chunk71393 = require("./71393.js"),
  Chunk871109 = require("./871109.js"),
  Chunk571654 = require("./571654.js"),
  Chunk819968 = require("./819968.jsx"),
  Chunk897518 = require("./897518.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk451144 = require("./451144.js");

function O(e) {
  var t, n;
  let {
    transitionState: a,
    guildProductListingId: O,
    analyticsLocation: v,
    guildId: _,
    onClose: y
  } = e, N = (0, c.bG)([f.A], () => f.A.getGuildProduct(O));
  l()(null != N, "guildProductListing cannot be null"), (0, u.A)({
    type: s.ImpressionTypes.MODAL,
    name: s.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
    properties: {
      guild_product_listing_id: O,
      has_entitlement: true === N.has_entitlement,
      location: v
    }
  });
  let D = null != (t = (0, b.z)(N)) ? t : "",
    I = (0, b.X)(N),
    z = (0, c.bG)([h.A], () => h.A.getGuild(_)),
    P = (0, p.A)({
      guildId: _,
      guildProductListingId: O,
      sourceAnalyticsLocations: d.A.GUILD_PRODUCT_INFO_MODAL
    });
  return (0, r.jsxs)(i.Modal, {
    title: N.name,
    subtitle: g.intl.format(g.t.xImSei, {
      productType: D,
      personName: null != (n = null == z ? true : z.name) ? n : ""
    }),
    size: "md",
    transitionState: a,
    onClose: y,
    "aria-label": N.name,
    actions: [P],
    actionBarInput: (0, r.jsx)(o.Text, {
      tag: "div",
      variant: "heading-xl/semibold",
      color: "text-strong",
      children: I
    }),
    children: [(0, r.jsx)(m.y, {
      height: 267,
      listing: N,
      className: A.F0,
      alt: ""
    }), (0, r.jsxs)("div", {
      className: A.rf,
      children: [(0, r.jsx)(j.A, {
        listing: N
      }), (0, r.jsx)(o.hKd, {
        size: 16
      }), (0, r.jsx)("div", {
        className: A.OO
      }), (0, r.jsx)(o.hKd, {
        size: 16
      }), (0, r.jsx)(o.Heading, {
        variant: "heading-lg/medium",
        color: "text-strong",
        children: g.intl.string(g.t.TNnDJs)
      }), (0, r.jsx)(o.hKd, {
        size: 12
      }), (0, r.jsx)(x.A, {
        className: A.h_,
        variant: "text-md/normal",
        color: "text-muted",
        text: N.description
      })]
    })]
  })
}