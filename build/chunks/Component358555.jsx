/** Chunk was on web.js **/
/** chunk id: 358555, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => A
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk666188 = require("./666188.js"),
  Chunk372769 = require("./372769.jsx"),
  Chunk523751 = require("./523751.jsx"),
  Chunk623624 = require("./623624.jsx"),
  Chunk290034 = require("./290034.jsx"),
  Chunk340541 = require("./340541.js"),
  Chunk271383 = require("./271383.js"),
  Chunk594174 = require("./594174.js"),
  Chunk267642 = require("./267642.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk566588 = require("./566588.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e) {
  let {
    guild: t,
    isBannerVisible: n,
    disableBoostClick: i
  } = e, a = (0, o.e7)([h.default, p.ZP], () => {
    let e = h.default.getCurrentUser();
    return p.ZP.isMember(t.id, null == e ? true : e.id)
  }), {
    premiumTier: l,
    premiumSubscriberCount: c
  } = t;
  if (0 === c && l === g.Eu4.NONE) return null;
  let u = e => {
      e.stopPropagation(), e.preventDefault(), a && !i && (0, d.f)({
        guildId: t.id,
        location: {
          section: g.jXE.GUILD_HEADER,
          object: g.qAy.BOOST_GEM_ICON
        }
      })
    },
    _ = l === g.Eu4.NONE ? E.intl.string(E.t.c2wsn6) : m.nW(l),
    y = (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)("div", {
        className: b.tierTooltipTitle,
        children: _
      }), (0, r.jsx)("div", {
        children: E.intl.format(E.t.If4iTS, {
          subscriberCount: c
        })
      })]
    });
  return (0, r.jsx)("div", {
    className: b.guildIconContainer,
    children: (0, r.jsx)(s.aML, {
      "data-migration-pending": true,
      text: y,
      position: "bottom",
      "aria-label": null != _ ? _ : "",
      children: e => (0, r.jsx)(s.P3F, I(O({}, e), {
        className: b.__invalid_premiumGuildIcon,
        onClick: u,
        children: (0, r.jsx)(f.Z, {
          size: 18,
          premiumTier: l,
          iconBackgroundClassName: n ? b.boostedGuildTierIconBackgroundWithVisibleBanner : true,
          iconClassName: n && l !== g.Eu4.TIER_3 ? b.boostedGuildTierMutedIconWithVisibleBanner : null
        })
      }))
    })
  })
}

function T(e) {
  let {
    guild: t,
    disableColor: n,
    disableBoostClick: i
  } = e, o = (0, l.Z)(t), d = (0, _._k)({
    location: "guild_status_badge"
  });
  return o ? (0, r.jsx)("div", {
    className: a()(b.guildIconV2Container, {
      [b.invitesRefresh]: d.isGuildEntrypointEnabled
    }),
    children: (0, r.jsx)(u.Z, {
      guild: t,
      size: 18,
      tooltipPosition: "bottom",
      tooltipColor: s.aML.Colors.PRIMARY,
      className: a()(b.guildBadge, {
        [b.disableColor]: n
      }),
      disableBoostClick: i
    })
  }) : (0, r.jsx)("div", {
    className: a()(b.guildIconContainer, {
      [b.invitesRefresh]: d.isGuildEntrypointEnabled
    }),
    children: (0, r.jsx)(c.Z, {
      guild: t,
      size: 18,
      tooltipPosition: "bottom",
      tooltipColor: s.aML.Colors.PRIMARY,
      className: a()(b.guildBadge, {
        [b.disableColor]: n
      })
    })
  })
}

function A(e) {
  let {
    guild: t,
    disableBoostClick: n
  } = e, i = false;
  return (0, l.Z)(t) ? (0, r.jsx)(T, {
    guild: t,
    disableColor: false,
    disableBoostClick: n
  }) : t.features.has(g.GuildFeatures.VERIFIED) || t.features.has(g.GuildFeatures.PARTNERED) ? (0, r.jsx)(T, {
    guild: t,
    disableColor: !i
  }) : (0, r.jsx)(S, {
    guild: t,
    isBannerVisible: i,
    disableBoostClick: n
  })
}