/** Chunk was on web.js **/
/** chunk id: 164599, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk309635 = require("./309635.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk927578 = require("./927578.js"),
  Chunk919395 = require("./919395.js"),
  Chunk128450 = require("./128450.jsx"),
  Chunk212168 = require("./212168.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk97671 = require("./97671.js");

function y(e) {
  let {
    user: t,
    guild: n,
    initialSelectedEffect: a,
    className: y,
    sectionTitle: O,
    forcedDivider: A = false,
    withTutorial: v = false,
    showBorder: S = false
  } = e, {
    analyticsLocations: I
  } = (0, c.Ay)(), T = f.Ay.canUsePremiumProfileCustomization(t), C = (0, p.N2)({
    user: t,
    guildId: null == n ? true : n.id
  }), {
    pendingProfileEffect: N,
    errors: R
  } = (0, p.nZ)(null == n ? true : n.id), w = true === N ? null != C : null != N, P = () => {
    (0, u.W)({
      analyticsLocations: I,
      guild: n,
      initialSelectedEffect: a
    })
  }, D = () => {
    (0, p.mZ)(null, null == n ? true : n.id)
  };
  i.useEffect(() => {
    T && d.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, {
      type: g.e.PROFILE_EFFECTS_INLINE_SETTINGS,
      location_stack: I
    })
  }, [T, I]);
  let x = v ? l.wLn : o.$n;
  return (0, r.jsx)(_.A, {
    forcedDivider: A,
    borderType: h.i.PREMIUM,
    hasBackground: true,
    title: O,
    showBorder: S,
    errors: R,
    className: y,
    children: (0, r.jsxs)("div", {
      className: b.NC,
      children: [(0, r.jsx)(x, {
        size: o.$n.Sizes.SMALL,
        onClick: P,
        className: s()({
          [b.yj]: v
        }),
        children: E.intl.string(E.t["/dRfCf"])
      }), w && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: b.DT,
        children: (0, r.jsx)(l.Button, {
          variant: "secondary",
          size: "sm",
          text: null != n ? E.intl.string(E.t.CHf9iJ) : E.intl.string(E.t.uMuafO),
          onClick: D
        })
      })]
    })
  })
}