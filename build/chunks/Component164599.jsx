/** Chunk was on 78376 **/
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
    sectionTitle: O,
    forcedDivider: C = false,
    withTutorial: x = false,
    showBorder: S = false
  } = e, {
    analyticsLocations: T
  } = (0, c.Ay)(), I = _.Ay.canUsePremiumProfileCustomization(t), y = (0, p.N2)({
    user: t,
    guildId: null == n ? true : n.id
  }), {
    pendingProfileEffect: N,
    errors: j
  } = (0, p.nZ)(null == n ? true : n.id);
  i.useEffect(() => {
    I && u.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
      type: f.e.PROFILE_EFFECTS_INLINE_SETTINGS,
      location_stack: T
    })
  }, [I, T]);
  let v = x ? o.wLn : a.$n;
  return (0, r.jsx)(m.A, {
    forcedDivider: C,
    borderType: g.i.PREMIUM,
    hasBackground: true,
    title: O,
    showBorder: S,
    errors: j,
    className: E,
    children: (0, r.jsxs)("div", {
      className: h.NC,
      children: [(0, r.jsx)(v, {
        size: a.$n.Sizes.SMALL,
        onClick: () => {
          (0, d.W)({
            analyticsLocations: T,
            guild: n,
            initialSelectedEffect: l
          })
        },
        className: s()({
          [h.yj]: x
        }),
        children: b.intl.string(b.t["/dRfCf"])
      }), (true === N ? null != y : null != N) && (0, r.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: h.DT,
        children: (0, r.jsx)(o.Button, {
          variant: "secondary",
          size: "sm",
          text: null != n ? b.intl.string(b.t.CHf9iJ) : b.intl.string(b.t.uMuafO),
          onClick: () => {
            (0, p.mZ)(null, null == n ? true : n.id)
          }
        })
      })]
    })
  })
}