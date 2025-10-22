/** Chunk was on 38062 **/
/** chunk id: 546604, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk75498 = require("./75498.js");

function v(e) {
  var t, n;
  let {
    transitionState: a,
    guildProductListingId: v,
    analyticsLocation: Z,
    guildId: N,
    onClose: O
  } = e, y = (0, o.e7)([h.Z], () => h.Z.getGuildProduct(v));
  i()(null != y, "guildProductListing cannot be null"), (0, u.Z)({
    type: s.ImpressionTypes.MODAL,
    name: s.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
    properties: {
      guild_product_listing_id: v,
      has_entitlement: true === y.has_entitlement,
      location: Z
    }
  });
  let C = null != (t = (0, p.C)(y)) ? t : "",
    I = (0, p.k)(y),
    L = (0, o.e7)([f.Z], () => f.Z.getGuild(N)),
    D = (0, _.Z)({
      guildId: N,
      guildProductListingId: v,
      sourceAnalyticsLocations: d.Z.GUILD_PRODUCT_INFO_MODAL
    });
  return (0, r.jsxs)(l.Modal, {
    title: y.name,
    subtitle: g.intl.format(g.t.xImSei, {
      productType: C,
      personName: null != (n = null == L ? true : L.name) ? n : ""
    }),
    size: "md",
    transitionState: a,
    onClose: O,
    "aria-label": y.name,
    actions: [D],
    actionBarInput: (0, r.jsx)(c.Text, {
      tag: "div",
      variant: "heading-xl/semibold",
      color: "header-primary",
      children: I
    }),
    children: [(0, r.jsx)(x.e, {
      height: 267,
      listing: y,
      className: b.headerImage,
      alt: ""
    }), (0, r.jsxs)("div", {
      className: b.body,
      children: [(0, r.jsx)(j.Z, {
        listing: y
      }), (0, r.jsx)(c.LZC, {
        size: 16
      }), (0, r.jsx)("div", {
        className: b.seperator
      }), (0, r.jsx)(c.LZC, {
        size: 16
      }), (0, r.jsx)(c.Heading, {
        variant: "heading-lg/medium",
        color: "header-primary",
        children: g.intl.string(g.t.TNnDJs)
      }), (0, r.jsx)(c.LZC, {
        size: 12
      }), (0, r.jsx)(m.Z, {
        className: b.description,
        variant: "text-md/normal",
        color: "text-muted",
        text: y.description
      })]
    })]
  })
}