/** Chunk was on web.js **/
/** chunk id: 857658, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => P
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
  Chunk28664 = require("./28664.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk408886 = require("./408886.js"),
  Chunk233398 = require("./233398.js"),
  Chunk866419 = require("./866419.js"),
  Chunk771934 = require("./771934.js"),
  Chunk531421 = require("./531421.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk209289 = require("./209289.js");

function v() {
  return (0, Chunk951288.jsx)("div", {
    className: Chunk209289.loader,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
  })
}
let I = (0, Chunk608787.Un)({
    createPromise: () => Promise.all([require.e("3115"), require.e("35855")]).then(require.bind(require, 164267)),
    webpackId: 164267,
    name: "CustomThemeColorPickerControlV2",
    renderLoader: v
  }),
  S = 5,
  T = "#000000";

function A(e, t) {
  return e.length < 1 ? 0 : t / (e.length - 1) * 80 + 10
}

function C(e) {
  let {
    colors: t,
    selectedIndex: n,
    onColorSelect: a
  } = e, [o, s] = i.useMemo(() => {
    let e = t.map((e, n) => A(t, n)),
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

function N(e) {
  let {
    color: t
  } = e, n = i.useMemo(() => ({
    backgroundColor: (0, u.FX)(t) ? t : T
  }), [t]);
  return (0, r.jsx)("div", {
    className: O.hexColorPreview,
    style: n,
    "aria-label": "Color preview"
  })
}

function R(e) {
  if (!(0, u.FX)(e)) return e;
  let t = o()(e);
  return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex()
}

function P(e) {
  let {
    value: t,
    onChange: n,
    className: a,
    colors: o,
    setColors: s
  } = e, c = (0, h.Z)(), [v, T] = i.useState(0), [A, P] = i.useState(t);
  i.useEffect(() => {
    if (o.length > 0 && v < o.length) {
      let e = o[v];
      (0, u.FX)(e) && (P(e), n(e))
    }
    v >= o.length && T(0)
  }, [v, o, n]);
  let w = e => {
      let t = e.trim();
      return t.startsWith("#") ? t : t.length > 0 ? "#".concat(t) : t
    },
    D = e => {
      let t = w(e);
      if (P(t), (0, u.FX)(t) && ((0, E.zW)(), n(t), o.length > 0)) {
        let e = [...o];
        e[v] = t, s(e)
      }
    },
    L = i.useCallback(e => {
      P(e.hex)
    }, []),
    x = e => {
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
        (0, E.J4)(), D(e)
      } catch (e) {}
    }, k = () => {
      if (o.length === S) return;
      0 === o.length && (0, g.ft)(), (0, E.gG)();
      let e = o.length > 0 ? o[o.length - 1] : A,
        t = o.length > 0 ? R(e) : e,
        n = [...o, t];
      s(n), T(n.length - 1)
    }, j = e => {
      if (o.length > 1) {
        (0, E.JL)();
        let t = o.filter((t, n) => n !== e);
        s(t), v >= t.length ? T(t.length - 1) : v > e && T(v - 1)
      }
    }, U = e => {
      T(e), (0, E.w8)()
    }, G = o.length > 1;
  return (0, r.jsxs)("div", {
    className: l()(O.container, a),
    children: [G && (0, r.jsx)(C, {
      colors: o,
      selectedIndex: v,
      onColorSelect: U
    }), (0, r.jsx)(I, {
      onChange: L,
      onChangeComplete: x,
      color: A
    }), (0, r.jsxs)("div", {
      className: O.hexInputContainer,
      children: [(0, r.jsx)(N, {
        color: A
      }), (0, r.jsx)("input", {
        className: O.hexInput,
        value: A.toUpperCase(),
        onChange: e => D(e.target.value),
        maxLength: 7,
        placeholder: m.Dp,
        type: "text"
      }), (0, r.jsxs)("div", {
        className: O.trailingIcons,
        children: [null != c && (0, r.jsx)(f.u, {
          text: y.intl.string(b.default["NCFz+N"]),
          children: (0, r.jsx)(_.hU, {
            variant: "icon-only",
            size: "sm",
            onClick: M,
            icon: d.i,
            "aria-label": y.intl.string(b.default["NCFz+N"])
          })
        }), G && (0, r.jsx)(f.u, {
          text: y.intl.string(y.t.N86XcP),
          children: (0, r.jsx)(_.hU, {
            variant: "icon-only",
            size: "sm",
            onClick: () => j(v),
            icon: p.V_R,
            "aria-label": y.intl.string(y.t.N86XcP)
          })
        })]
      })]
    }), o.length < S && (0, r.jsx)(_.zxk, {
      variant: "secondary",
      size: "md",
      onClick: k,
      icon: p.BRu,
      text: y.intl.string(b.default.JUQcdT),
      fullWidth: true
    })]
  })
}