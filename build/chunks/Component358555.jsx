/** Chunk was on web.js **/
/** chunk id: 358555, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk481060 = require("./481060.js"),
  Chunk666188 = require("./666188.js"),
  Chunk372769 = require("./372769.jsx"),
  Chunk523751 = require("./523751.jsx"),
  Chunk623624 = require("./623624.jsx"),
  Chunk290034 = require("./290034.jsx"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk453301 = require("./453301.js");

function y(e) {
  let {
    guild: t,
    isBannerVisible: n,
    disableBoostClick: i
  } = e, a = (0, o.e7)([m.default, _.ZP], () => {
    let e = m.default.getCurrentUser();
    return _.ZP.isMember(t.id, null == e ? true : e.id)
  }), {
    premiumTier: c,
    premiumSubscriberCount: u
  } = t;
  if (0 === u && c === g.Eu4.NONE) return null;
  let d = e => {
      e.stopPropagation(), e.preventDefault(), a && !i && (0, f.f)({
        guildId: t.id,
        location: {
          section: g.jXE.GUILD_HEADER,
          object: g.qAy.BOOST_GEM_ICON
        }
      })
    },
    y = c === g.Eu4.NONE ? E.intl.string(E.t.c2wsn6) : h.nW(c);
  return (0, r.jsx)("div", {
    className: b.guildIconContainer,
    children: (0, r.jsx)(s.i_, {
      title: y,
      body: E.intl.format(E.t.If4iTS, {
        subscriberCount: u
      }),
      position: "bottom",
      children: (0, r.jsx)(l.P3F, {
        className: b.__invalid_premiumGuildIcon,
        onClick: d,
        children: (0, r.jsx)(p.Z, {
          size: 18,
          premiumTier: c,
          iconBackgroundClassName: n ? b.boostedGuildTierIconBackgroundWithVisibleBanner : true,
          iconClassName: n && c !== g.Eu4.TIER_3 ? b.boostedGuildTierMutedIconWithVisibleBanner : null
        })
      })
    })
  })
}

function O(e) {
  let {
    guild: t,
    disableColor: n,
    disableBoostClick: i
  } = e;
  return (0, c.Z)(t) ? (0, r.jsx)("div", {
    className: b.guildIconV2Container,
    children: (0, r.jsx)(d.Z, {
      guild: t,
      size: 18,
      tooltipPosition: "bottom",
      tooltipColor: l.aML.Colors.PRIMARY,
      className: a()(b.guildBadge, {
        [b.disableColor]: n
      }),
      disableBoostClick: i
    })
  }) : (0, r.jsx)("div", {
    className: b.guildIconContainer,
    children: (0, r.jsx)(u.Z, {
      guild: t,
      size: 18,
      tooltipPosition: "bottom",
      tooltipColor: l.aML.Colors.PRIMARY,
      className: a()(b.guildBadge, {
        [b.disableColor]: n
      })
    })
  })
}

function v(e) {
  let {
    guild: t,
    disableBoostClick: n
  } = e, i = false;
  return (0, c.Z)(t) ? (0, r.jsx)(O, {
    guild: t,
    disableColor: false,
    disableBoostClick: n
  }) : t.features.has(g.GuildFeatures.VERIFIED) || t.features.has(g.GuildFeatures.PARTNERED) ? (0, r.jsx)(O, {
    guild: t,
    disableColor: !i
  }) : (0, r.jsx)(y, {
    guild: t,
    isBannerVisible: i,
    disableBoostClick: n
  })
}