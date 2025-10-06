/** Chunk was on 64982 **/
/** chunk id: 500395, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk213609 = require("./213609.js"),
  Chunk787051 = require("./787051.js"),
  Chunk696936 = require("./696936.jsx"),
  Chunk539290 = require("./539290.jsx"),
  Chunk975464 = require("./975464.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk370511 = require("./370511.js"),
  Chunk270395 = require("./270395.js");

function p(e) {
  let {
    config: t
  } = e, {
    noticeText: n,
    ctaLabel: i,
    ctaClickable: s,
    onCtaClicked: a
  } = t;
  return (0, r.jsxs)("div", {
    className: m.__invalid_ctaContainer,
    children: [(0, r.jsx)("img", {
      className: m.__invalid_heroBanner,
      src: g,
      alt: u.intl.string(u.t.Af4klJ)
    }), (0, r.jsxs)("div", {
      className: m.__invalid_ctaContent,
      children: [(0, r.jsx)(l.X6q, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: u.intl.string(u.t.PqYfh4)
      }), (0, r.jsx)(l.LZC, {
        size: 12
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: u.intl.string(u.t["41wkMT"])
      }), (0, r.jsx)(l.LZC, {
        size: 24
      }), (0, r.jsx)(c.Z, {
        className: m.waitlist,
        color: o.W.BROWN,
        buttonPosition: c.E.RIGHT,
        notice: n,
        ctaLabel: i,
        ctaDisabled: !s,
        onClick: a
      })]
    })]
  })
}

function f(e) {
  let {
    guild: t,
    config: n
  } = e, {
    isLoading: o,
    error: c,
    creatorMonetizationOnboardingMarketing: u
  } = (0, a.Z)(t.id);
  return ((0, s.Z)({
    type: i.ImpressionTypes.PANE,
    name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_WAITLIST_LANDING,
    properties: {
      guild_id: t.id
    }
  }), o) ? (0, r.jsx)(l.$jN, {}) : (0, r.jsxs)("div", {
    className: m.__invalid_container,
    children: [(0, r.jsx)(p, {
      config: n
    }), (0, r.jsx)(d.C, {
      onboardingMarketing: u,
      onboardingMarketingError: c
    })]
  })
}