/** Chunk was on 38062 **/
/** chunk id: 546604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => Z
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk213609 = require("./213609.js"),
  Chunk240657 = require("./240657.jsx"),
  Chunk809086 = require("./809086.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk240864 = require("./240864.js"),
  Chunk942833 = require("./942833.js"),
  Chunk409110 = require("./409110.jsx"),
  Chunk843880 = require("./843880.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk490171 = require("./490171.js");

function Z(e) {
  var t, n;
  let {
    transitionState: r,
    guildProductListingId: Z,
    analyticsLocation: _,
    guildId: N,
    onClose: O
  } = e, C = (0, o.e7)([h.Z], () => h.Z.getGuildProduct(Z));
  i()(null != C, "guildProductListing cannot be null"), (0, u.Z)({
    type: s.ImpressionTypes.MODAL,
    name: s.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
    properties: {
      guild_product_listing_id: Z,
      has_entitlement: true === C.has_entitlement,
      location: _
    }
  });
  let I = null != (t = (0, j.C)(C)) ? t : "",
    y = (0, j.k)(C),
    L = (0, o.e7)([f.Z], () => f.Z.getGuild(N)),
    D = (0, g.Z)({
      guildId: N,
      guildProductListingId: Z,
      sourceAnalyticsLocations: d.Z.GUILD_PRODUCT_INFO_MODAL
    });
  return (0, a.jsxs)(l.Modal, {
    title: C.name,
    subtitle: b.intl.format(b.t.xImSei, {
      productType: I,
      personName: null != (n = null == L ? true : L.name) ? n : ""
    }),
    size: "md",
    transitionState: r,
    onClose: O,
    "aria-label": C.name,
    actions: [D],
    actionBarInput: (0, a.jsx)(c.Text, {
      tag: "div",
      variant: "heading-xl/semibold",
      color: "text-strong",
      children: y
    }),
    children: [(0, a.jsx)(x.e, {
      height: 267,
      listing: C,
      className: v.headerImage,
      alt: ""
    }), (0, a.jsxs)("div", {
      className: v.body,
      children: [(0, a.jsx)(p.Z, {
        listing: C
      }), (0, a.jsx)(c.LZC, {
        size: 16
      }), (0, a.jsx)("div", {
        className: v.seperator
      }), (0, a.jsx)(c.LZC, {
        size: 16
      }), (0, a.jsx)(c.Heading, {
        variant: "heading-lg/medium",
        color: "text-strong",
        children: b.intl.string(b.t.TNnDJs)
      }), (0, a.jsx)(c.LZC, {
        size: 12
      }), (0, a.jsx)(m.Z, {
        className: v.description,
        variant: "text-md/normal",
        color: "text-muted",
        text: C.description
      })]
    })]
  })
}