/** Chunk was on web.js **/
/** chunk id: 102001, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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
let A = e => {
  let {
    className: t,
    guildId: n,
    channel: a,
    shouldTrackUpsellViewed: A,
    setTrackedUpsellViewed: v
  } = e, {
    location: S
  } = (0, c.p)(), {
    analyticsLocations: I
  } = (0, d.Ay)(), T = (0, o.bG)([m.A], () => m.A.getGuild(n)), {
    canManageAllExpressions: C
  } = (0, h.nr)(T), N = null != T && 0 === (0, g.aG)(T.premiumTier) && !T.features.has(E.GuildFeatures.MORE_STICKERS);
  if (i.useEffect(() => {
      C && N && A && ((0, u.zV)(E.HAw.PREMIUM_GUILD_UPSELL_VIEWED, {
        location: S,
        guild_id: null == T ? true : T.id,
        channel_id: null == a ? true : a.id,
        type: "Expression Picker Inline Sticker Upsell",
        location_stack: I
      }), v(true))
    }, [N, T, a, S, A, v, I, C]), null == T || !C) return null;
  if (N) {
    let e = () => {
      (0, p.A)({
        analyticsLocations: I,
        analyticsSourceLocation: S,
        guild: T,
        perks: (0, b.q5)()
      })
    };
    return (0, r.jsxs)("div", {
      className: s()(O.UX, t),
      children: [(0, r.jsx)(l.vRF, {
        size: "md",
        color: "currentColor",
        className: O.Kk
      }), (0, r.jsx)(l.Text, {
        color: "interactive-text-default",
        className: O.rf,
        variant: "text-sm/normal",
        children: y.intl.format(y.t.AXWla1, {
          count: (0, g.aG)(E.TVA.TIER_1)
        })
      }), (0, r.jsx)(l.QWc, {
        variant: "primary",
        text: y.intl.string(y.t["Gb+BJD"]),
        onClick: e
      })]
    })
  } {
    let e = () => {
      (0, f.v8)(), _.A.open(n, E.BEX.STICKERS, S)
    };
    return (0, r.jsxs)("div", {
      className: s()(O.UX, t),
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
        children: y.intl.string(y.t.S83wgh)
      }), (0, r.jsx)(l.QWc, {
        variant: "primary",
        text: y.intl.string(y.t.bwNjug),
        onClick: e
      })]
    })
  }
}