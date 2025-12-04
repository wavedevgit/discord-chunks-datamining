/** Chunk was on 384 **/
/** chunk id: 500395, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk787051 = require("./787051.js"),
  Chunk975464 = require("./975464.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk370511 = require("./370511.js"),
  Chunk270395 = require("./270395.js");

function g(e) {
  let {
    config: t
  } = e, {
    noticeText: n,
    ctaLabel: i,
    ctaClickable: a,
    onCtaClicked: s
  } = t;
  return (0, r.jsxs)("div", {
    className: d.__invalid_ctaContainer,
    children: [(0, r.jsx)("img", {
      className: d.__invalid_heroBanner,
      src: u,
      alt: c.intl.string(c.t.Af4klP)
    }), (0, r.jsxs)("div", {
      className: d.__invalid_ctaContent,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: c.intl.string(c.t["PqYfh/"])
      }), (0, r.jsx)(l.LZC, {
        size: 12
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: c.intl.string(c.t["41wkMc"])
      }), (0, r.jsx)(l.LZC, {
        size: 24
      }), (0, r.jsx)(l.Wn, {
        messageType: l.QYI.INFO,
        action: (0, r.jsx)(l.Button, {
          variant: "overlay-secondary",
          text: i,
          onClick: s,
          disabled: !a
        }),
        children: n
      })]
    })]
  })
}

function m(e) {
  let {
    guild: t,
    config: n
  } = e, {
    isLoading: c,
    error: u,
    creatorMonetizationOnboardingMarketing: m
  } = (0, s.Z)(t.id);
  return ((0, a.Z)({
    type: i.ImpressionTypes.PANE,
    name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_WAITLIST_LANDING,
    properties: {
      guild_id: t.id
    }
  }), c) ? (0, r.jsx)(l.$jN, {}) : (0, r.jsxs)("div", {
    className: d.__invalid_container,
    children: [(0, r.jsx)(g, {
      config: n
    }), (0, r.jsx)(o.C, {
      onboardingMarketing: m,
      onboardingMarketingError: u
    })]
  })
}