/** Chunk was on 22477 **/
/** chunk id: 231545, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk92653 = require("./92653.js"),
  Chunk827734 = require("./827734.js"),
  Chunk736653 = require("./736653.js"),
  Chunk302031 = require("./302031.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk661251 = require("./661251.js");
let d = {
  base00: Chunk827734.A.colors.BACKGROUND_BASE_LOWER.css,
  base03: Chunk827734.A.colors.TEXT_FEEDBACK_WARNING.css,
  base07: Chunk827734.A.colors.TEXT_DEFAULT.css,
  base08: Chunk827734.A.colors.TEXT_MUTED.css,
  base09: Chunk827734.A.colors.TEXT_FEEDBACK_POSITIVE.css,
  base0B: Chunk827734.A.colors.TEXT_FEEDBACK_WARNING.css,
  base0D: Chunk827734.A.colors.TEXT_BRAND.css
};

function u(e) {
  let t = {};
  for (let [n, a] of Object.entries(e)) t[n] = a;
  return t
}
let m = u(d),
  p = u(d);

function h(e) {
  return o.AKn.test(e) ? (0, a.jsx)(s.Ay, {
    type: s.Ay.Types.TEXT,
    children: () => e
  }) : e
}

function x(e) {
  let {
    data: t
  } = e, n = (0, i.Ay)();
  return (0, a.jsx)("div", {
    className: c.H$,
    children: (0, a.jsx)(l.d, {
      data: t,
      theme: "light" === n ? p : m,
      invertTheme: false,
      valueRenderer: h,
      shouldExpandNode: () => true
    })
  })
}