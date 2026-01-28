/** Chunk was on 5606 **/
/** chunk id: 164599, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => E
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

function E(e) {
  let {
    user: t,
    guild: n,
    initialSelectedEffect: l,
    className: E,
    sectionTitle: x,
    forcedDivider: O = false,
    withTutorial: C = false,
    showBorder: y = false
  } = e, {
    analyticsLocations: j
  } = (0, c.Ay)(), T = p.Ay.canUsePremiumProfileCustomization(t), v = (0, _.N2)({
    user: t,
    guildId: null == n ? true : n.id
  }), {
    pendingProfileEffect: S,
    errors: I
  } = (0, _.nZ)(null == n ? true : n.id);
  i.useEffect(() => {
    T && u.default.track(f.HAw.PREMIUM_UPSELL_VIEWED, {
      type: b.e.PROFILE_EFFECTS_INLINE_SETTINGS,
      location_stack: j
    })
  }, [T, j]);
  let N = C ? o.wLn : a.$n;
  return (0, r.jsx)(m.A, {
    forcedDivider: O,
    borderType: g.i.PREMIUM,
    hasBackground: true,
    title: x,
    showBorder: y,
    errors: I,
    className: E,
    children: (0, r.jsxs)("div", {
      className: A.NC,
      children: [(0, r.jsx)(N, {
        size: a.$n.Sizes.SMALL,
        onClick: () => {
          (0, d.W)({
            analyticsLocations: j,
            guild: n,
            initialSelectedEffect: l
          })
        },
        className: s()({
          [A.yj]: C
        }),
        children: h.intl.string(h.t["/dRfCf"])
      }), (true === S ? null != v : null != S) && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: A.DT,
        children: (0, r.jsx)(o.Button, {
          variant: "secondary",
          size: "sm",
          text: null != n ? h.intl.string(h.t.CHf9iJ) : h.intl.string(h.t.uMuafO),
          onClick: () => {
            (0, _.mZ)(null, null == n ? true : n.id)
          }
        })
      })]
    })
  })
}