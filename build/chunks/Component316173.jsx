/** Chunk was on 1272 **/
/** chunk id: 316173, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk481060 = require("./481060.js"),
  Chunk304761 = require("./304761.js"),
  Chunk865427 = require("./865427.js"),
  Chunk820254 = require("./820254.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk187794 = require("./187794.js");
let h = "isHideDevBanner",
  m = () => {
    var e;
    let [t, n] = (0, i.useState)((null == (e = s.K.get(h, "false")) ? true : e.toString()) === "true"), l = (0, o.e7)([u.C], () => {
      var e;
      return (0, d.fD)() ? null == (e = u.C.getCurrentBuildOverride().overrides) ? true : e.discord_web : null
    });
    if (t) return null;
    let m = () => {
        s.K.set(h, true), n(true)
      },
      b = () => (0, r.jsx)(c.P3F, {
        onClick: m,
        className: g.closeButton,
        "aria-label": f.intl.string(f.t.WAI6xu),
        children: (0, r.jsx)(c.Dio, {
          size: "md",
          color: "currentColor",
          className: g.closeIcon
        })
      });
    return null != l ? (0, r.jsxs)("div", {
      className: a()(g.devBanner, g.buildOverride),
      children: [(0, r.jsx)(p.Z, {
        className: g.icon
      }), f.intl.string(f.t.Wj3LW4), (0, r.jsx)(b, {})]
    }) : "staging" === window.GLOBAL_ENV.RELEASE_CHANNEL ? (0, r.jsxs)("div", {
      className: a()(g.devBanner, g.staging),
      children: [(0, r.jsx)(p.Z, {
        className: g.icon
      }), f.intl.format(f.t.uyrfYF, {
        buildNumber: "487067"
      }), (0, r.jsx)(b, {})]
    }) : null
  }