/** Chunk was on web.js **/
/** chunk id: 102001, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk212245 = require("./212245.js"),
  Chunk58149 = require("./58149.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk151271 = require("./151271.js"),
  Chunk631305 = require("./631305.jsx"),
  Chunk997509 = require("./997509.js"),
  Chunk931991 = require("./931991.js"),
  Chunk71393 = require("./71393.js"),
  Chunk473145 = require("./473145.js"),
  Chunk652215 = require("./652215.js"),
  Chunk874864 = require("./874864.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk476217 = require("./476217.js");
let v = e => {
  let {
    className: t,
    guildId: n,
    channel: a,
    shouldTrackUpsellViewed: v,
    setTrackedUpsellViewed: A
  } = e, {
    location: I
  } = (0, c.p)(), {
    analyticsLocations: S
  } = (0, d.Ay)(), T = (0, s.bG)([m.A], () => m.A.getGuild(n)), {
    canManageAllExpressions: C
  } = (0, h.nr)(T), N = null != T && 0 === (0, g.aG)(T.premiumTier) && !T.features.has(E.GuildFeatures.MORE_STICKERS);
  if (i.useEffect(() => {
      C && N && v && ((0, u.zV)(E.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
        location: I,
        guild_id: null == T ? true : T.id,
        channel_id: null == a ? true : a.id,
        type: "Expression Picker Inline Sticker Upsell",
        location_stack: S
      }), A(true))
    }, [N, T, a, I, v, A, S, C]), null == T || !C) return null;
  if (N) {
    let e = () => {
      (0, p.A)({
        analyticsLocations: S,
        analyticsSourceLocation: I,
        guild: T,
        perks: (0, y.q5)()
      })
    };
    return (0, r.jsxs)("div", {
      className: o()(O.UX, t),
      children: [(0, r.jsx)(l.vRF, {
        size: "md",
        color: "currentColor",
        className: O.Kk
      }), (0, r.jsx)(l.Text, {
        color: "interactive-text-default",
        className: O.rf,
        variant: "text-sm/normal",
        children: b.intl.format(b.t.AXWla1, {
          count: (0, g.aG)(E.TVA.TIER_1)
        })
      }), (0, r.jsx)(l.QWc, {
        variant: "primary",
        text: b.intl.string(b.t["Gb+BJD"]),
        onClick: e
      })]
    })
  } {
    let e = () => {
      (0, f.v8)(), _.A.open(n, E.BEX.STICKERS, I)
    };
    return (0, r.jsxs)("div", {
      className: o()(O.UX, t),
      children: [(0, r.jsx)(l.tEP, {
        size: "custom",
        color: "currentColor",
        className: O.Kk,
        width: 20,
        height: 20
      }), (0, r.jsx)(l.Text, {
        color: "interactive-text-default",
        className: O.rf,
        variant: "text-sm/normal",
        children: b.intl.string(b.t.S83wgh)
      }), (0, r.jsx)(l.QWc, {
        variant: "primary",
        text: b.intl.string(b.t.bwNjug),
        onClick: e
      })]
    })
  }
}