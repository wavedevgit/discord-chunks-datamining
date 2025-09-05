/** Chunk was on web.js **/
/** chunk id: 857658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => L
}), require("./388685.js"), require("./781311.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk688619 = require("./688619.js"),
  o = require.n(Chunk688619),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk608787 = require("./608787.jsx"),
  Chunk866442 = require("./866442.js"),
  Chunk19602 = require("./19602.jsx"),
  Chunk680018 = require("./680018.jsx"),
  Chunk861066 = require("./861066.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk408886 = require("./408886.js"),
  Chunk233398 = require("./233398.js"),
  Chunk866419 = require("./866419.js"),
  Chunk507962 = require("./507962.js"),
  Chunk684555 = require("./684555.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk970281 = require("./970281.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      v(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function S(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk970281.loader,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
  })
}
let C = (0, Chunk608787.Un)({
    createPromise: () => Promise.all([require.e("3115"), require.e("35855")]).then(require.bind(require, 164267)),
    webpackId: 164267,
    name: "CustomThemeColorPickerControlV2",
    renderLoader: A
  }),
  N = 5,
  R = "#000000";

function P(e, t) {
  return e.length < 1 ? 0 : t / (e.length - 1) * 80 + 10
}

function w(e) {
  let {
    colors: t,
    selectedIndex: n,
    onColorSelect: a
  } = e, [o, s] = i.useMemo(() => {
    let e = t.map((e, n) => P(t, n)),
      n = t.map((t, n) => "".concat(t, " ").concat(e[n], "%")).join(", ");
    return [e, {
      background: "linear-gradient(to right, ".concat(n, ")")
    }]
  }, [t]);
  return (0, r.jsx)("div", {
    className: O.gradientBar,
    style: s,
    children: t.map((e, t) => {
      let s = o[t],
        c = t === n;
      return (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(p.P3F, {
          className: l()(O.colorSquare, {
            [O.selected]: c
          }),
          style: {
            left: "".concat(s, "%"),
            backgroundColor: e
          },
          onClick: () => a(t),
          children: (0, r.jsx)("div", {
            className: O.colorSquareInner
          })
        }), c && (0, r.jsx)("div", {
          className: O.colorSquareSelectedTriangle,
          style: {
            left: "".concat(s, "%")
          }
        })]
      }, t)
    })
  })
}

function D(e) {
  let {
    color: t
  } = e, n = i.useMemo(() => ({
    backgroundColor: (0, u.FX)(t) ? t : R
  }), [t]);
  return (0, r.jsx)("div", {
    className: O.hexColorPreview,
    style: n,
    "aria-label": "Color preview"
  })
}

function x(e) {
  if (!(0, u.FX)(e)) return e;
  let t = o()(e);
  return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex()
}

function L(e) {
  let {
    value: t,
    onChange: n,
    className: a,
    colors: o,
    setColors: s
  } = e, c = (0, h.Z)(), [v, T] = i.useState(0), [A, R] = i.useState(t);
  i.useEffect(() => {
    if (o.length > 0 && v < o.length) {
      let e = o[v];
      (0, u.FX)(e) && (R(e), n(e))
    }
    v >= o.length && T(0)
  }, [v, o, n]);
  let P = e => {
      let t = e.trim();
      return t.startsWith("#") ? t : t.length > 0 ? "#".concat(t) : t
    },
    L = e => {
      let t = P(e);
      if (R(t), (0, u.FX)(t) && ((0, E.zW)(), n(t), o.length > 0)) {
        let e = [...o];
        e[v] = t, s(e)
      }
    },
    j = i.useCallback(e => {
      R(e.hex)
    }, []),
    k = e => {
      if ((0, E.P0)(), n(e.hex), o.length > 0) {
        let t = [...o];
        t[v] = e.hex, s(t)
      }
    },
    M = async () => {
      if (null != c) try {
        let {
          sRGBHex: e
        } = await c.open();
        (0, E.J4)(), L(e)
      } catch (e) {}
    }, U = () => {
      if (o.length === N) return;
      0 === o.length && (0, g.ft)(), (0, E.gG)();
      let e = o.length > 0 ? o[o.length - 1] : A,
        t = o.length > 0 ? x(e) : e,
        n = [...o, t];
      s(n), T(n.length - 1)
    }, G = e => {
      if (o.length > 1) {
        (0, E.JL)();
        let t = o.filter((t, n) => n !== e);
        s(t), v >= t.length ? T(t.length - 1) : v > e && T(v - 1)
      }
    }, B = e => {
      T(e), (0, E.w8)()
    }, Z = o.length > 1;
  return (0, r.jsxs)("div", {
    className: l()(O.container, a),
    children: [Z && (0, r.jsx)(w, {
      colors: o,
      selectedIndex: v,
      onColorSelect: B
    }), (0, r.jsx)(C, {
      onChange: j,
      onChangeComplete: k,
      color: A
    }), (0, r.jsxs)("div", {
      className: O.hexInputContainer,
      children: [(0, r.jsx)(D, {
        color: A
      }), (0, r.jsx)("input", {
        className: O.hexInput,
        value: A.toUpperCase(),
        onChange: e => L(e.target.value),
        maxLength: 7,
        placeholder: m.Dp,
        type: "text"
      }), (0, r.jsxs)("div", {
        className: O.trailingIcons,
        children: [null != c && (0, r.jsx)(p.ua7, {
          text: y.intl.string(b.default["NCFz+P"]),
          tooltipClassName: O.eyeDropperTooltip,
          children: e => (0, r.jsx)(_.h, S(I({
            variant: "icon-only",
            size: "sm"
          }, e), {
            onClick: M,
            icon: d.i,
            "aria-label": y.intl.string(b.default["NCFz+P"])
          }))
        }), Z && (0, r.jsx)(p.ua7, {
          text: y.intl.string(y.t.N86XcH),
          children: e => (0, r.jsx)(_.h, S(I({}, e), {
            variant: "icon-only",
            size: "sm",
            onClick: () => G(v),
            icon: p.V_R,
            "aria-label": y.intl.string(y.t.N86XcH)
          }))
        })]
      })]
    }), o.length < N && (0, r.jsx)(f.z, {
      variant: "secondary",
      size: "md",
      onClick: U,
      icon: p.BRu,
      text: y.intl.string(b.default.JUQcdX),
      fullWidth: true
    })]
  })
}