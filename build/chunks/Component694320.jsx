/** Chunk was on web.js **/
/** chunk id: 694320, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk436774 = require("./436774.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk385774 = require("./385774.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y() {
  (0, Chunk481060.ZDy)(async () => {
    let {
      default: e
    } = await require.e("3289").then(require.bind(require, 682609));
    return t => (0, r.jsx)(e, b({
      channel: null
    }, t))
  })
}

function O(e) {
  let {
    className: t,
    iconOnly: n
  } = e, a = (0, s.e7)([_.Z, f.Z], () => {
    let e = f.Z.getChannel(_.Z.getChannelId());
    return (null == e ? true : e.isPrivate()) ? h.ZY5.DM_CHANNEL : h.ZY5.GUILD_CHANNEL
  }), {
    analyticsLocations: E
  } = (0, u.ZP)(c.Z.PREMIUM_UPSELL);
  i.useEffect(() => {
    p.default.track(h.rMx.PREMIUM_UPSELL_VIEWED, {
      type: "longer messages inline",
      location: {
        location_page: a,
        location_section: h.jXE.CHANNEL_TEXT_AREA
      },
      location_stack: E
    })
  }, [a, E]);
  let O = () => (0, r.jsxs)("div", {
      className: o()(g.root, t),
      children: [(0, r.jsx)(l.SrA, {
        size: "md",
        className: g.premium,
        color: d.JX.PREMIUM_TIER_2
      }), (0, r.jsx)(l.Text, {
        className: g.text,
        variant: "text-sm/normal",
        children: m.intl.format(m.t.BNAIBQ, {
          onLearnMore: y
        })
      })]
    }),
    v = () => (0, r.jsx)(l.P3F, {
      className: g.iconOnly,
      onClick: () => y(),
      children: (0, r.jsx)(l.ua7, {
        text: m.intl.string(m.t["+eFIjY"]),
        position: "top",
        children: e => (0, r.jsx)(l.SrA, b({
          size: "md",
          color: "currentColor",
          className: g.premium
        }, e))
      })
    });
  return n ? v() : O()
}