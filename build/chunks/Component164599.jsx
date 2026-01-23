/** Chunk was on web.js **/
/** chunk id: 164599, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
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

function b(e) {
  let {
    user: t,
    guild: n,
    initialSelectedEffect: a,
    className: b,
    sectionTitle: O,
    forcedDivider: v = false,
    withTutorial: A = false,
    showBorder: I = false
  } = e, {
    analyticsLocations: S
  } = (0, c.Ay)(), T = f.Ay.canUsePremiumProfileCustomization(t), C = (0, p.N2)({
    user: t,
    guildId: null == n ? true : n.id
  }), {
    pendingProfileEffect: N,
    errors: w
  } = (0, p.nZ)(null == n ? true : n.id), R = true === N ? null != C : null != N, P = () => {
    (0, u.W)({
      analyticsLocations: S,
      guild: n,
      initialSelectedEffect: a
    })
  }, D = () => {
    (0, p.mZ)(null, null == n ? true : n.id)
  };
  i.useEffect(() => {
    T && d.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, {
      type: g.e.PROFILE_EFFECTS_INLINE_SETTINGS,
      location_stack: S
    })
  }, [T, S]);
  let x = A ? l.wLn : o.$n;
  return (0, r.jsx)(_.A, {
    forcedDivider: v,
    borderType: h.i.PREMIUM,
    hasBackground: true,
    title: O,
    showBorder: I,
    errors: w,
    className: b,
    children: (0, r.jsxs)("div", {
      className: y.NC,
      children: [(0, r.jsx)(x, {
        size: o.$n.Sizes.SMALL,
        onClick: P,
        className: s()({
          [y.yj]: A
        }),
        children: E.intl.string(E.t["/dRfCf"])
      }), R && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: y.DT,
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