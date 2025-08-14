/** Chunk was on 67544 **/
/** chunk id: 623553, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk668826 = require("./668826.js"),
  Chunk18582 = require("./18582.jsx"),
  Chunk3072 = require("./3072.js"),
  Chunk763283 = require("./763283.jsx"),
  Chunk892689 = require("./892689.jsx"),
  Chunk477839 = require("./477839.js"),
  Chunk511479 = require("./511479.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk73205 = require("./73205.js"),
  Chunk225893 = require("./225893.js"),
  Chunk768675 = require("./768675.js"),
  Chunk624868 = require("./624868.js");
let Chunk171665 = require("./171665.js");

function h() {
  return 100 * Math.round(5e3 * Math.random() / 100)
}

function x(e) {
  let {
    isPaused: t,
    width: n,
    height: x
  } = e, v = (0, s.useRef)(null), O = (0, s.useRef)(false), [j, N] = (0, s.useState)(false), P = (0, s.useRef)(h()), _ = (0, i.eR)(y);
  return (0, s.useEffect)(() => () => clearTimeout(O.current), []), (0, r.jsx)(l.Z, {
    ref: v,
    isPaused: t,
    itemId: u.yN.LOOTBOXES,
    chance: .2,
    points: 0,
    width: n,
    height: x,
    dropPadding: 200,
    maxDrops: 1,
    children: e => (0, r.jsx)("div", {
      className: p.lootbox,
      children: j ? (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)("div", {
          className: p.points,
          children: [(0, r.jsxs)(c.Z, {
            variant: "text-lg/normal",
            children: ["+", P.current]
          }), (0, r.jsx)("img", {
            src: m,
            alt: f.intl.string(d.default.BropER)
          })]
        }), (0, r.jsx)("img", {
          src: b,
          alt: f.intl.string(d.default.CwZfY2),
          width: 100,
          height: 100
        })]
      }) : (0, r.jsx)(a.Z, {
        onClick: () => {
          N(true), _(), (0, o.KH)(u.yN.LOOTBOXES, P.current), O.current = setTimeout(() => {
            var t;
            null == (t = v.current) || t.removeDrop(e), P.current = h(), N(false), clearTimeout(O.current)
          }, 1e3)
        },
        children: (0, r.jsx)("img", {
          src: g,
          alt: f.intl.string(d.default.CwZfY2),
          width: 100,
          height: 100
        })
      })
    })
  })
}