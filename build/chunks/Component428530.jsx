/** Chunk was on 79041 **/
/** chunk id: 428530, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk805203 = require("./805203.js"),
  Chunk692547 = require("./692547.js"),
  Chunk410030 = require("./410030.js"),
  Chunk95398 = require("./95398.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk451429 = require("./451429.js");
let d = {
  base00: Chunk692547.Z.colors.BACKGROUND_BASE_LOWER.css,
  base03: Chunk692547.Z.colors.TEXT_FEEDBACK_WARNING.css,
  base07: Chunk692547.Z.colors.TEXT_DEFAULT.css,
  base08: Chunk692547.Z.colors.TEXT_MUTED.css,
  base09: Chunk692547.Z.colors.TEXT_FEEDBACK_POSITIVE.css,
  base0B: Chunk692547.Z.colors.TEXT_FEEDBACK_WARNING.css,
  base0D: Chunk692547.Z.colors.TEXT_BRAND.css
};

function u(e) {
  let t = {};
  for (let [n, a] of Object.entries(e)) t[n] = a;
  return t
}
let m = u(d),
  p = u(d);

function h(e) {
  return s.Jn9.test(e) ? (0, a.jsx)(o.ZP, {
    type: o.ZP.Types.TEXT,
    children: () => e
  }) : e
}

function x(e) {
  let {
    data: t
  } = e, n = (0, i.ZP)();
  return (0, a.jsx)("div", {
    className: c.inspectorWrapper,
    children: (0, a.jsx)(r.L, {
      data: t,
      theme: "light" === n ? p : m,
      invertTheme: false,
      valueRenderer: h,
      shouldExpandNode: () => true
    })
  })
}