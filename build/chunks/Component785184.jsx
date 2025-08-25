/** Chunk was on web.js **/
/** chunk id: 785184, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk7093 = require("./7093.js"),
  Chunk101966 = require("./101966.js"),
  Chunk40347 = require("./40347.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk92038 = require("./92038.js");
let d = Chunk647438.lazy(() => require.e("22274").then(require.bind(require, 269792)));

function f() {
  let e = (0, Chunk101966.Z)({
      location: "TenureLevelUpAnimationLazyWrapper"
    }),
    t = (0, Chunk7093.Z)(e => e.shouldRenderTenureLevelUp),
    n = (0, Chunk40347.Z)();
  return module && exports && null != require ? (0, Chunk951288.jsx)(_, {
    levelUpData: require
  }) : null
}

function _(e) {
  let {
    levelUpData: t
  } = e, n = i.useRef(null), s = i.useCallback(() => {
    a.Z.setState({
      shouldRenderTenureLevelUp: false
    })
  }, []);
  return i.useEffect(() => s, [s]), (0, r.jsx)(o.EqS, {
    containerRef: n,
    children: (0, r.jsxs)("div", {
      className: u.wrapper,
      children: [(0, r.jsx)(o.M0o, {
        className: u.closeButton,
        tooltip: c.intl.string(c.t.cpT0Cg),
        color: o.YX$.SECONDARY,
        size: o.tT7.SIZE_24,
        icon: (0, r.jsx)(o.Dio, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: s
      }), (0, r.jsx)(i.Suspense, {
        fallback: null,
        children: (0, r.jsx)(d, {
          levelUpData: t
        })
      })]
    })
  })
}