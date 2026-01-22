/** Chunk was on web.js **/
/** chunk id: 48862, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk404374 = require("./404374.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk133440 = require("./133440.js");

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
  (0, c.mMO)(async () => {
    let {
      default: e
    } = await n.e("66920").then(n.bind(n, 220763));
    return t => (0, r.jsx)(e, y({
      channel: null
    }, t))
  })
}

function A(e) {
  let {
    className: t,
    iconOnly: n
  } = e, a = (0, o.bG)([_.A, p.A], () => {
    let e = p.A.getChannel(_.A.getChannelId());
    return (null == e ? true : e.isPrivate()) ? m.liQ.DM_CHANNEL : m.liQ.GUILD_CHANNEL
  }), {
    analyticsLocations: b
  } = (0, d.Ay)(u.A.PREMIUM_UPSELL);
  i.useEffect(() => {
    h.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, {
      type: "longer messages inline",
      location: {
        location_page: a,
        location_section: m.JJy.CHANNEL_TEXT_AREA
      },
      location_stack: b
    })
  }, [a, b]);
  let y = () => (0, r.jsxs)("div", {
      className: s()(E.zr, t),
      children: [(0, r.jsx)(c.tvc, {
        size: "md",
        className: E.M2,
        color: f.k0.PREMIUM_TIER_2
      }), (0, r.jsx)(c.Text, {
        className: E.Qq,
        variant: "text-sm/normal",
        children: g.intl.format(g.t.BNAIBU, {
          onLearnMore: O
        })
      })]
    }),
    A = () => (0, r.jsx)(c.DUT, {
      className: E.e7,
      onClick: () => O(),
      children: (0, r.jsx)(l.m, {
        text: g.intl.string(g.t["+eFIjX"]),
        position: "top",
        children: (0, r.jsx)(c.tvc, {
          size: "md",
          color: "currentColor",
          className: E.M2
        })
      })
    });
  return n ? A() : y()
}