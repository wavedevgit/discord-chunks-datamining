/** Chunk was on 96811 **/
/** chunk id: 864057, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
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

function y(e) {
  let {
    id: t,
    text: r,
    icon: l,
    selected: i,
    onClick: a
  } = e;
  return (0, n.jsx)(o.DUT, {
    role: "radio",
    "aria-checked": i,
    onClick: () => a(t),
    tabIndex: 0,
    className: s()(v.tp, v.ey, {
      [v.wH]: i
    }),
    children: (0, n.jsxs)("div", {
      className: v.DD,
      children: [(0, n.jsx)(l, {
        size: "lg"
      }), (0, n.jsx)(c.EYj, {
        variant: "text-sm/medium",
        color: "none",
        children: r
      })]
    })
  })
}

function S(e) {
  let {
    onSourceSelect: t
  } = e;
  (0, h.jd)(), (0, p.A)(t, g.FX);
  let [{
    nativeSourceType: r
  }, l] = (0, x.tS)(), s = (0, u.isMac)() && a().satisfies(null === d.A || true === d.A ? true : d.A.os.release, m.WZ), i = f.A.getUseGamescopeCapture(), S = i ? "gamescope" : "screen";
  return (0, n.jsxs)("div", {
    className: v.zr,
    children: [(0, n.jsx)(c.DZT, {
      className: v.wx,
      variant: "heading-lg/semibold",
      color: "text-default",
      children: b.intl.string(b.t.XyYoFc)
    }), s ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(c.EYj, {
        className: v.rf,
        variant: "text-sm/medium",
        color: "text-subtle",
        children: b.intl.format(b.t.sbbPhW, {
          buttonName: b.intl.string(b.t.FiBjwU)
        })
      }), (0, n.jsx)(j.A, {})]
    }) : (0, n.jsxs)("div", {
      className: v.Ro,
      children: [(0, n.jsx)(y, {
        selected: r === S,
        onClick: () => {
          l({
            type: "set_native_source_type",
            sourceType: S
          })
        },
        id: "screen",
        text: b.intl.string(b.t.cVUFXY),
        icon: o.kN9
      }), !i && (0, n.jsx)(y, {
        selected: "window" === r,
        onClick: () => {
          l({
            type: "set_native_source_type",
            sourceType: "window"
          })
        },
        id: "window",
        text: b.intl.string(b.t.dG2A1E),
        icon: o.WxK
      })]
    })]
  })
}