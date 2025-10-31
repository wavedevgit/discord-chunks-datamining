/** Chunk was on 1272 **/
/** chunk id: 779715, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk150063 = require("./150063.js"),
  Chunk252618 = require("./252618.js"),
  Chunk313201 = require("./313201.js"),
  Chunk984370 = require("./984370.jsx"),
  Chunk199104 = require("./199104.jsx"),
  Chunk108427 = require("./108427.js"),
  Chunk210887 = require("./210887.js"),
  Chunk626135 = require("./626135.js"),
  Chunk270759 = require("./270759.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk236202 = require("./236202.js");
let E = function() {
  Chunk647438.useEffect(() => {
    Chunk150063.Y(Chunk981631.Z5c.ME_ACTIVITY), (0, Chunk108427.e)("activity"), Chunk626135.default.track(Chunk981631.rMx.ACTIVITY_FEED_VIEWED, {})
  }, []);
  let e = (0, Chunk442837.e7)([Chunk210887.Z], () => Chunk210887.Z.theme),
    t = (0, Chunk313201.Dt)();
  return (0, Chunk951288.jsxs)("main", {
    className: Chunk236202.container,
    "aria-label": Chunk388032.intl.string(Chunk388032.t.IC5Ann),
    children: [(0, Chunk951288.jsx)(Chunk252618.yY, {
      location: Chunk388032.intl.string(Chunk388032.t.IC5Ann)
    }), (0, Chunk951288.jsx)(Chunk481060.f6W, {
      theme: module,
      children: e => (0, r.jsxs)(u.Z, {
        className: e,
        toolbar: (0, r.jsx)(h.F, {}),
        role: "navigation",
        "aria-labelledby": t,
        children: [(0, r.jsx)(u.Z.Icon, {
          icon: a.g8d,
          "aria-hidden": true
        }), (0, r.jsx)(u.Z.Title, {
          id: t,
          children: _.intl.string(_.t.F4Zggw)
        })]
      })
    }), (0, Chunk951288.jsx)("div", {
      className: Chunk236202.tabBody,
      children: (0, Chunk951288.jsx)("div", {
        className: Chunk236202.nowPlayingColumnFullWidth,
        children: (0, Chunk951288.jsx)(Chunk199104.Z, {
          isStandalone: true
        })
      })
    })]
  })
}