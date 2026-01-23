/** Chunk was on 96811 **/
/** chunk id: 864057, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk299855 = require("./299855.js"),
  a = require.n(Chunk299855),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk77729 = require("./77729.js"),
  Chunk430452 = require("./430452.js"),
  Chunk723702 = require("./723702.js"),
  Chunk571044 = require("./571044.js"),
  Chunk624130 = require("./624130.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk297524 = require("./297524.jsx"),
  Chunk502075 = require("./502075.js"),
  Chunk818348 = require("./818348.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk687637 = require("./687637.js");

function b(e) {
  let {
    id: t,
    text: r,
    icon: i,
    selected: s,
    onClick: a
  } = e;
  return (0, n.jsx)(c.DUT, {
    role: "radio",
    "aria-checked": s,
    onClick: () => a(t),
    tabIndex: 0,
    className: l()(v.tp, v.ey, {
      [v.wH]: s
    }),
    children: (0, n.jsxs)("div", {
      className: v.DD,
      children: [(0, n.jsx)(i, {
        size: "lg"
      }), (0, n.jsx)(o.EYj, {
        variant: "text-sm/medium",
        color: "none",
        children: r
      })]
    })
  })
}

function y(e) {
  let {
    onSourceSelect: t
  } = e;
  (0, h.jd)(), (0, p.A)(t, g.FX);
  let [{
    nativeSourceType: r
  }, i] = (0, x.tS)(), l = (0, f.isMac)() && a().satisfies(null === d.A || true === d.A ? true : d.A.os.release, j.WZ), s = u.A.getUseGamescopeCapture(), y = s ? "gamescope" : "screen";
  return (0, n.jsxs)("div", {
    className: v.zr,
    children: [(0, n.jsx)(o.DZT, {
      className: v.wx,
      variant: "heading-lg/semibold",
      color: "text-default",
      children: _.intl.string(_.t.XyYoFc)
    }), l ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(o.EYj, {
        className: v.rf,
        variant: "text-sm/medium",
        color: "text-subtle",
        children: _.intl.format(_.t.sbbPhW, {
          buttonName: _.intl.string(_.t.FiBjwU)
        })
      }), (0, n.jsx)(m.A, {})]
    }) : (0, n.jsxs)("div", {
      className: v.Ro,
      children: [(0, n.jsx)(b, {
        selected: r === y,
        onClick: () => {
          i({
            type: "set_native_source_type",
            sourceType: y
          })
        },
        id: "screen",
        text: _.intl.string(_.t.cVUFXY),
        icon: c.kN9
      }), !s && (0, n.jsx)(b, {
        selected: "window" === r,
        onClick: () => {
          i({
            type: "set_native_source_type",
            sourceType: "window"
          })
        },
        id: "window",
        text: _.intl.string(_.t.dG2A1E),
        icon: c.WxK
      })]
    })]
  })
}