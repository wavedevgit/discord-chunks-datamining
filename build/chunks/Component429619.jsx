/** Chunk was on 9207 **/
/** chunk id: 429619, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk823092 = require("./823092.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk979286 = require("./979286.js"),
  Chunk492499 = require("./492499.js"),
  Chunk652215 = require("./652215.js"),
  Chunk788868 = require("./788868.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk844551 = require("./844551.js");
let A = () => {
  var e;
  let {
    analyticsLocations: t
  } = (0, a.Ay)(s.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), n = i.useRef(null), {
    asset: A,
    popoutAsset: f,
    title: b,
    body: h,
    version: E,
    revertTextColor: O
  } = (0, u.M)(), x = i.useContext(o.gl), C = null != (e = null == x ? true : x.navigateWithValidation) ? e : e => e();
  return i.useEffect(() => {
    c.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
      type: p.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
      location_stack: t,
      version: E
    })
  }, [t, E]), (0, r.jsxs)("div", {
    ref: n,
    className: g.kL,
    style: {
      backgroundImage: "url(".concat(A, ")")
    },
    children: [(0, r.jsx)("div", {
      className: g.JS,
      "aria-hidden": true,
      role: "presentation",
      children: (0, r.jsx)("img", {
        src: f,
        className: g.Qw,
        alt: ""
      })
    }), (0, r.jsxs)("div", {
      className: g.Em,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-lg/extrabold",
        color: O ? "text-overlay-dark" : "currentColor",
        className: g.DD,
        children: b
      }), (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: O ? "text-overlay-dark" : "currentColor",
        children: h
      })]
    }), (0, r.jsx)(l.Button, {
      onClick: () => {
        C(() => (0, d.Cz)({
          analyticsLocations: t,
          analyticsSource: s.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
        }))
      },
      variant: "overlay-primary",
      text: m.intl.string(m.t.fYfGgK)
    })]
  })
}