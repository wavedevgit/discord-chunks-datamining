/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => m
});
var r = n(200651);
n(192379);
var i = n(990547),
  s = n(481060),
  a = n(213609),
  l = n(787051),
  o = n(696936),
  A = n(539290),
  c = n(975464),
  d = n(388032),
  u = n(128281),
  g = n(270395);

function f(e) {
  let {
    config: t
  } = e, {
    noticeText: n,
    ctaLabel: i,
    ctaClickable: a,
    onCtaClicked: l
  } = t;
  return (0, r.jsxs)("div", {
    className: u.__invalid_ctaContainer,
    children: [(0, r.jsx)("img", {
      className: u.__invalid_heroBanner,
      src: g,
      alt: d.NW.string(d.t.Af4klJ)
    }), (0, r.jsxs)("div", {
      className: u.__invalid_ctaContent,
      children: [(0, r.jsx)(s.X6q, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: d.NW.string(d.t.PqYfh4)
      }), (0, r.jsx)(s.LZC, {
        size: 12
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: d.NW.string(d.t["41wkMT"])
      }), (0, r.jsx)(s.LZC, {
        size: 24
      }), (0, r.jsx)(A.Z, {
        className: u.waitlist,
        color: o.W.BROWN,
        buttonPosition: A.E.RIGHT,
        notice: n,
        ctaLabel: i,
        ctaDisabled: !a,
        ctaClassName: u.waitlistCtaButton,
        onClick: l
      })]
    })]
  })
}

function m(e) {
  let {
    guild: t,
    config: n
  } = e, {
    isLoading: o,
    error: A,
    creatorMonetizationOnboardingMarketing: d
  } = (0, l.Z)(t.id);
  return ((0, a.Z)({
    type: i.ImpressionTypes.PANE,
    name: i.ImpressionNames.ENABLE_CREATOR_MONETIZATION_WAITLIST_LANDING,
    properties: {
      guild_id: t.id
    }
  }), o) ? (0, r.jsx)(s.$jN, {}) : (0, r.jsxs)("div", {
    className: u.__invalid_container,
    children: [(0, r.jsx)(f, {
      config: n
    }), (0, r.jsx)(c.C, {
      onboardingMarketing: d,
      onboardingMarketingError: A
    })]
  })
}