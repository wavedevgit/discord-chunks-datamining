/** Chunk was on 47841 **/
/** chunk id: 994870, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk110259 = require("./110259.js"),
  Chunk397927 = require("./397927.js"),
  Chunk139286 = require("./139286.js"),
  Chunk893148 = require("./893148.js"),
  Chunk400281 = require("./400281.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk5164 = require("./5164.js"),
  Chunk584643 = require("./584643.js");

function f(e) {
  let {
    config: t
  } = e, {
    noticeText: n,
    ctaLabel: i,
    ctaClickable: s,
    onCtaClicked: a
  } = t;
  return (0, r.jsxs)("div", {
    className: d.__invalid_ctaContainer,
    children: [(0, r.jsx)("img", {
      className: d.__invalid_heroBanner,
      src: u,
      alt: o.intl.string(o.t.Af4klP)
    }), (0, r.jsxs)("div", {
      className: d.__invalid_ctaContent,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        children: o.intl.string(o.t["PqYfh/"])
      }), (0, r.jsx)(l.hKd, {
        size: 12
      }), (0, r.jsx)(l.Text, {
        variant: "text-md/normal",
        color: "text-default",
        children: o.intl.string(o.t["41wkMc"])
      }), (0, r.jsx)(l.hKd, {
        size: 24
      }), (0, r.jsx)(l.po8, {
        messageType: l.YCn.INFO,
        action: (0, r.jsx)(l.Button, {
          variant: "overlay-secondary",
          text: i,
          onClick: a,
          disabled: !s
        }),
        children: n
      })]
    })]
  })
}

function g(e) {
  let {
    guild: t,
    config: n
  } = e, {
    isLoading: o,
    error: u,
    creatorMonetizationOnboardingMarketing: g
  } = (0, a.A)(t.id);
  return ((0, s.A)({
    type: i.ImpressionTypes.PANE,
    name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_WAITLIST_LANDING,
    properties: {
      guild_id: t.id
    }
  }), o) ? (0, r.jsx)(l.y$y, {}) : (0, r.jsxs)("div", {
    className: d.__invalid_container,
    children: [(0, r.jsx)(f, {
      config: n
    }), (0, r.jsx)(c.j, {
      onboardingMarketing: g,
      onboardingMarketingError: u
    })]
  })
}