/** Chunk was on web.js **/
/** chunk id: 694320, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk436774 = require("./436774.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk569408 = require("./569408.js");

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await require.e("3289").then(require.bind(require, 682609));
    return t => (0, r.jsx)(e, y({
      channel: null
    }, t))
  })
}

function v(e) {
  let {
    className: t,
    iconOnly: n
  } = e, a = (0, s.e7)([p.Z, _.Z], () => {
    let e = _.Z.getChannel(p.Z.getChannelId());
    return (null == e ? true : e.isPrivate()) ? m.ZY5.DM_CHANNEL : m.ZY5.GUILD_CHANNEL
  }), {
    analyticsLocations: b
  } = (0, d.ZP)(u.Z.PREMIUM_UPSELL);
  i.useEffect(() => {
    h.default.track(m.rMx.PREMIUM_UPSELL_VIEWED, {
      type: "longer messages inline",
      location: {
        location_page: a,
        location_section: m.jXE.CHANNEL_TEXT_AREA
      },
      location_stack: b
    })
  }, [a, b]);
  let y = () => (0, r.jsxs)("div", {
      className: o()(E.root, t),
      children: [(0, r.jsx)(c.SrA, {
        size: "md",
        className: E.premium,
        color: f.JX.PREMIUM_TIER_2
      }), (0, r.jsx)(c.Text, {
        className: E.text,
        variant: "text-sm/normal",
        children: g.intl.format(g.t.BNAIBU, {
          onLearnMore: O
        })
      })]
    }),
    v = () => (0, r.jsx)(c.P3F, {
      className: E.iconOnly,
      onClick: () => O(),
      children: (0, r.jsx)(l.u, {
        text: g.intl.string(g.t["+eFIjX"]),
        position: "top",
        children: (0, r.jsx)(c.SrA, {
          size: "md",
          color: "currentColor",
          className: E.premium
        })
      })
    });
  return n ? v() : y()
}