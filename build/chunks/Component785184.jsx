/** Chunk was on web.js **/
/** chunk id: 785184, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk7093 = require("./7093.js"),
  Chunk40347 = require("./40347.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk92038 = require("./92038.js");
let f = Chunk647438.lazy(() => require.e("22274").then(require.bind(require, 269792)));

function _() {
  let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion),
    t = (0, Chunk7093.Z)(e => e.shouldRenderTenureLevelUp),
    n = (0, Chunk40347.Z)();
  return module || !exports || null == require ? null : (0, Chunk951288.jsx)(p, {
    levelUpData: require
  })
}

function p(e) {
  let {
    levelUpData: t
  } = e, n = i.useRef(null), a = i.useCallback(() => {
    l.Z.setState({
      shouldRenderTenureLevelUp: false
    })
  }, []);
  return i.useEffect(() => a, [a]), (0, r.jsx)(o.EqS, {
    containerRef: n,
    children: (0, r.jsxs)("div", {
      className: d.wrapper,
      children: [(0, r.jsx)(o.M0o, {
        className: d.closeButton,
        tooltip: u.intl.string(u.t.cpT0Cg),
        color: o.YX$.SECONDARY,
        size: o.tT7.SIZE_24,
        icon: (0, r.jsx)(o.Dio, {
          size: "xs",
          color: "currentColor"
        }),
        onClick: a
      }), (0, r.jsx)(i.Suspense, {
        fallback: null,
        children: (0, r.jsx)(f, {
          levelUpData: t
        })
      })]
    })
  })
}