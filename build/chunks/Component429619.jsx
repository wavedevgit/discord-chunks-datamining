/** Chunk was on web.js **/
/** chunk id: 429619, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
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
let m = () => {
  var e;
  let {
    analyticsLocations: t
  } = (0, o.Ay)(s.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL), n = i.useRef(null), {
    asset: m,
    popoutAsset: g,
    title: E,
    body: b,
    version: y,
    revertTextColor: O
  } = (0, d.M)(), A = i.useContext(l.gl), v = null != (e = null == A ? true : A.navigateWithValidation) ? e : e => e();
  i.useEffect(() => {
    c.default.track(f.HAw.PREMIUM_UPSELL_VIEWED, {
      type: p.e.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
      location_stack: t,
      version: y
    })
  }, [t, y]);
  let S = () => {
    v(() => (0, u.Cz)({
      analyticsLocations: t,
      analyticsSource: s.A.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
    }))
  };
  return (0, r.jsxs)("div", {
    ref: n,
    className: h.kL,
    style: {
      backgroundImage: "url(".concat(m, ")")
    },
    children: [(0, r.jsx)("div", {
      className: h.JS,
      "aria-hidden": true,
      role: "presentation",
      children: (0, r.jsx)("img", {
        src: g,
        className: h.Qw,
        alt: ""
      })
    }), (0, r.jsxs)("div", {
      className: h.Em,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-lg/extrabold",
        color: O ? "text-overlay-dark" : "currentColor",
        className: h.DD,
        children: E
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: O ? "text-overlay-dark" : "currentColor",
        children: b
      })]
    }), (0, r.jsx)(a.Button, {
      onClick: S,
      variant: "overlay-primary",
      text: _.intl.string(_.t.fYfGgK)
    })]
  })
}