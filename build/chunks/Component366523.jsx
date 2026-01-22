/** Chunk was on web.js **/
/** chunk id: 366523, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p,
  e: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk310784 = require("./310784.js"),
  s = require.n(Chunk310784),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk654107 = require("./654107.js"),
  Chunk871123 = require("./871123.js"),
  Chunk492075 = require("./492075.js");
let f = "#000000";

function p(e) {
  let {
    cardImage: t,
    cardBackgroundImage: n,
    altText: a,
    containerClassName: o,
    backgroundImageClassName: u,
    foregroundImageClassName: p,
    shape: _
  } = e, [h, m] = (0, c.rh)(t.toString(), f), g = i.useMemo(() => {
    let e = s()(h).brighten(1.5).saturate(.3).alpha(.8).hex(),
      t = null != m ? m : s()(h).saturate(1.2).alpha(.9).hex();
    return "linear-gradient(135deg, ".concat(e, ", ").concat(t, ")")
  }, [h, m]);
  return (0, r.jsxs)("div", {
    className: l()(d.Ui, {
      [d.Ew]: "square" === _
    }, o),
    children: [(0, r.jsx)("div", {
      className: l()(d.GC, u),
      style: null != n ? {
        backgroundImage: "url(".concat(n.toString(), ")")
      } : {
        backgroundImage: g
      }
    }), (0, r.jsx)("img", {
      src: t.toString(),
      alt: a,
      draggable: false,
      className: l()(d.LC, {
        [d.Ew]: "square" === _
      }, p)
    })]
  })
}

function _(e) {
  let {
    sku: t,
    containerClassName: n,
    backgroundImageClassName: i,
    foregroundImageClassName: a,
    shape: s
  } = e, o = (0, u.fq)(t), l = (0, u.xf)(t);
  return null == o ? null : (0, r.jsx)(p, {
    cardImage: o,
    cardBackgroundImage: l,
    altText: t.name,
    containerClassName: n,
    backgroundImageClassName: i,
    foregroundImageClassName: a,
    shape: s
  })
}