/** Chunk was on 93886 **/
/** chunk id: 428530, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js"), require("./35282.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk404905 = require("./404905.js"),
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
  for (let [a, n] of Object.entries(e)) t[a] = n;
  return t
}
let m = u(d),
  x = u(d);

function h(e) {
  return o.Jn9.test(e) ? (0, n.jsx)(s.ZP, {
    type: s.ZP.Types.TEXT,
    children: () => e
  }) : e
}

function p(e) {
  let {
    data: t
  } = e, a = (0, i.ZP)();
  return (0, n.jsx)("div", {
    className: c.inspectorWrapper,
    children: (0, n.jsx)(r.L, {
      data: t,
      theme: "light" === a ? x : m,
      invertTheme: false,
      valueRenderer: h,
      shouldExpandNode: () => true
    })
  })
}