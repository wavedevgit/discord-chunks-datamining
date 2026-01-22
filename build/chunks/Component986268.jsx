/** Chunk was on web.js **/
/** chunk id: 986268, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk397927 = require("./397927.js"),
  Chunk454938 = require("./454938.js"),
  Chunk714991 = require("./714991.jsx"),
  Chunk57991 = require("./57991.jsx"),
  Chunk509536 = require("./509536.jsx"),
  Chunk2697 = require("./2697.jsx"),
  Chunk696451 = require("./696451.js"),
  Chunk287809 = require("./287809.js"),
  Chunk473145 = require("./473145.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk617286 = require("./617286.js");

function y(e) {
  let {
    guild: t,
    isBannerVisible: n,
    disableBoostClick: i
  } = e, a = (0, s.bG)([h.default, _.Ay], () => {
    let e = h.default.getCurrentUser();
    return _.Ay.isMember(t.id, null == e ? true : e.id)
  }), {
    premiumTier: c,
    premiumSubscriberCount: u
  } = t;
  if (0 === u && c === g.TVA.NONE) return null;
  let d = e => {
      e.stopPropagation(), e.preventDefault(), a && !i && (0, f.K)({
        guildId: t.id,
        location: {
          section: g.JJy.GUILD_HEADER,
          object: g.ZSU.BOOST_GEM_ICON
        }
      })
    },
    y = c === g.TVA.NONE ? E.intl.string(E.t.c2wsn6) : m.gb(c);
  return (0, r.jsx)("div", {
    className: b._C,
    children: (0, r.jsx)(o.un, {
      title: y,
      body: E.intl.format(E.t.If4iTS, {
        subscriberCount: u
      }),
      position: "bottom",
      children: (0, r.jsx)(l.DUT, {
        className: b.__invalid_premiumGuildIcon,
        onClick: d,
        children: (0, r.jsx)(p.A, {
          size: 18,
          premiumTier: c,
          iconBackgroundClassName: n ? b.z_ : true,
          iconClassName: n && c !== g.TVA.TIER_3 ? b.S1 : null
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
  return (0, c.A)(t) ? (0, r.jsx)("div", {
    className: b.Qv,
    children: (0, r.jsx)(d.A, {
      guild: t,
      size: 18,
      tooltipPosition: "bottom",
      tooltipColor: l.STz.Colors.PRIMARY,
      className: a()(b.n2, {
        [b.cE]: n
      }),
      disableBoostClick: i
    })
  }) : (0, r.jsx)("div", {
    className: b._C,
    children: (0, r.jsx)(u.A, {
      guild: t,
      size: 18,
      tooltipPosition: "bottom",
      tooltipColor: l.STz.Colors.PRIMARY,
      className: a()(b.n2, {
        [b.cE]: n
      })
    })
  })
}

function A(e) {
  let {
    guild: t,
    disableBoostClick: n
  } = e, i = false;
  return (0, c.A)(t) ? (0, r.jsx)(O, {
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