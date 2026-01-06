/** Chunk was on 46746 **/
/** chunk id: 741127, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk209739 = require("./209739.js"),
  o = require.n(Chunk209739),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk579806 = require("./579806.js"),
  Chunk131951 = require("./131951.js"),
  Chunk358085 = require("./358085.js"),
  Chunk960861 = require("./960861.js"),
  Chunk39540 = require("./39540.js"),
  Chunk443762 = require("./443762.jsx"),
  Chunk152165 = require("./152165.jsx"),
  Chunk70722 = require("./70722.js"),
  Chunk231338 = require("./231338.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk371848 = require("./371848.js");

function b(e) {
  let {
    id: t,
    text: r,
    icon: i,
    selected: l,
    onClick: o
  } = e;
  return (0, n.jsx)(a.P3F, {
    role: "radio",
    "aria-checked": l,
    onClick: () => o(t),
    tabIndex: 0,
    className: s()(_.nativeSourceTypeButton, _.nativePickerRadioItem, {
      [_.selected]: l
    }),
    children: (0, n.jsxs)("div", {
      className: _.nativeSourceTypeButtonInner,
      children: [(0, n.jsx)(i, {
        size: "lg"
      }), (0, n.jsx)(c.xvT, {
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
  (0, h.UB)(), (0, p.Z)(t, v.Vq);
  let [{
    nativeSourceType: r
  }, i] = (0, x.E_)(), s = (0, f.isMac)() && o().satisfies(null === d.Z || true === d.Z ? true : d.Z.os.release, g.jR), l = u.Z.getUseGamescopeCapture(), y = l ? "gamescope" : "screen";
  return (0, n.jsxs)("div", {
    className: _.root,
    children: [(0, n.jsx)(c.X6q, {
      className: _.header,
      variant: "heading-lg/semibold",
      color: "text-default",
      children: j.intl.string(j.t.XyYoFc)
    }), s ? (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(c.xvT, {
        className: _.body,
        variant: "text-sm/medium",
        color: "text-subtle",
        children: j.intl.format(j.t.sbbPhW, {
          buttonName: j.intl.string(j.t.FiBjwU)
        })
      }), (0, n.jsx)(m.Z, {})]
    }) : (0, n.jsxs)("div", {
      className: _.sourceTypeButtons,
      children: [(0, n.jsx)(b, {
        selected: r === y,
        onClick: () => {
          i({
            type: "set_native_source_type",
            sourceType: y
          })
        },
        id: "screen",
        text: j.intl.string(j.t.cVUFXY),
        icon: a.pzj
      }), !l && (0, n.jsx)(b, {
        selected: "window" === r,
        onClick: () => {
          i({
            type: "set_native_source_type",
            sourceType: "window"
          })
        },
        id: "window",
        text: j.intl.string(j.t.dG2A1E),
        icon: a.GON
      })]
    })]
  })
}