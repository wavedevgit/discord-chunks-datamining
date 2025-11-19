/** Chunk was on 47863 **/
/** chunk id: 289989, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk209739 = require("./209739.js"),
  o = require.n(Chunk209739),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk579806 = require("./579806.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk960861 = require("./960861.js"),
  Chunk39540 = require("./39540.js"),
  Chunk152165 = require("./152165.jsx"),
  Chunk615161 = require("./615161.jsx"),
  Chunk70722 = require("./70722.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk341338 = require("./341338.js");

function S(e) {
  let {
    id: t,
    text: n,
    icon: i,
    selected: s,
    onClick: o
  } = e;
  return (0, r.jsx)(c.P3F, {
    role: "radio",
    "aria-checked": s,
    onClick: () => o(t),
    tabIndex: 0,
    className: l()(j.nativeSourceTypeButton, j.nativePickerRadioItem, {
      [j.selected]: s
    }),
    children: (0, r.jsxs)("div", {
      className: j.nativeSourceTypeButtonInner,
      children: [(0, r.jsx)(i, {
        size: "lg"
      }), (0, r.jsx)(a.xvT, {
        variant: "text-sm/medium",
        color: "none",
        children: n
      })]
    })
  })
}

function b(e) {
  let {
    onSourceSelect: t
  } = e;
  (0, p.UB)(), (0, h.Z)(t, x.Vq);
  let [{
    nativeSourceType: n
  }, i] = (0, _.E_)(), l = (0, f.isMac)() && o().satisfies(null === d.Z || true === d.Z ? true : d.Z.os.release, g.jR), s = u.Z.getUseGamescopeCapture(), b = s ? "gamescope" : "screen";
  return (0, r.jsxs)("div", {
    className: j.root,
    children: [(0, r.jsx)(a.X6q, {
      className: j.header,
      variant: "heading-lg/semibold",
      color: "text-default",
      children: v.intl.string(v.t.XyYoFc)
    }), l ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.xvT, {
        className: j.body,
        variant: "text-sm/medium",
        color: "text-secondary",
        children: v.intl.format(v.t.sbbPhW, {
          buttonName: v.intl.string(v.t.FiBjwU)
        })
      }), (0, r.jsx)(m.Z, {})]
    }) : (0, r.jsxs)("div", {
      className: j.sourceTypeButtons,
      children: [(0, r.jsx)(S, {
        selected: n === b,
        onClick: () => {
          i({
            type: "set_native_source_type",
            sourceType: b
          })
        },
        id: "screen",
        text: v.intl.string(v.t.cVUFXY),
        icon: c.pzj
      }), !s && (0, r.jsx)(S, {
        selected: "window" === n,
        onClick: () => {
          i({
            type: "set_native_source_type",
            sourceType: "window"
          })
        },
        id: "window",
        text: v.intl.string(v.t.dG2A1E),
        icon: c.GON
      })]
    })]
  })
}