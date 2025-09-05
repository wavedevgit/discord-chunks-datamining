/** Chunk was on web.js **/
/** chunk id: 877865, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => D
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
  Chunk490236 = require("./490236.jsx"),
  Chunk861066 = require("./861066.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk408886 = require("./408886.js"),
  Chunk233398 = require("./233398.js"),
  Chunk866419 = require("./866419.js"),
  Chunk507962 = require("./507962.js"),
  Chunk119475 = require("./119475.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk531604 = require("./531604.js");

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
    className: Chunk531604.loader,
    children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
  })
}
let C = (0, Chunk608787.Un)({
    createPromise: () => Promise.all([require.e("3115"), require.e("24530")]).then(require.bind(require, 932329)),
    webpackId: 932329,
    name: "CustomThemeColorPickerControl",
    renderLoader: A
  }),
  N = 5;

function R(e, t) {
  return e.length < 1 ? 0 : t / (e.length - 1) * 80 + 10
}

function P(e) {
  let {
    colors: t,
    selectedIndex: n,
    onColorSelect: a
  } = e, [o, s] = i.useMemo(() => {
    let e = t.map((e, n) => R(t, n)),
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
        l = t === n;
      return (0, r.jsxs)(i.Fragment, {
        children: [(0, r.jsx)(p.P3F, {
          className: O.colorCircle,
          style: {
            left: "".concat(s, "%"),
            backgroundColor: e
          },
          onClick: () => a(t),
          children: (0, r.jsx)("div", {
            className: O.colorCircleInner
          })
        }), l && (0, r.jsx)("div", {
          className: O.colorCircleSelectedTriangle,
          style: {
            left: "".concat(s, "%")
          }
        })]
      }, t)
    })
  })
}

function w(e) {
  if (!(0, u.FX)(e)) return e;
  let t = o()(e);
  return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex()
}

function D(e) {
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
  let D = e => {
      let t = e.trim();
      return t.startsWith("#") ? t : t.length > 0 ? "#".concat(t) : t
    },
    x = e => {
      let t = D(e);
      if (R(t), (0, u.FX)(t) && ((0, E.zW)(), n(t), o.length > 0)) {
        let e = [...o];
        e[v] = t, s(e)
      }
    },
    L = i.useCallback(e => {
      R(e.hex)
    }, []),
    j = e => {
      if ((0, E.P0)(), n(e.hex), o.length > 0) {
        let t = [...o];
        t[v] = e.hex, s(t)
      }
    },
    k = async () => {
      if (null != c) try {
        let {
          sRGBHex: e
        } = await c.open();
        (0, E.J4)(), x(e)
      } catch (e) {}
    }, M = () => {
      if (o.length === N) return;
      0 === o.length && (0, g.ft)(), (0, E.gG)();
      let e = o.length > 0 ? o[o.length - 1] : A,
        t = o.length > 0 ? w(e) : e,
        n = [...o, t];
      s(n), T(n.length - 1)
    }, U = e => {
      if (o.length > 1) {
        (0, E.JL)();
        let t = o.filter((t, n) => n !== e);
        s(t), v >= t.length ? T(t.length - 1) : v > e && T(v - 1)
      }
    }, G = e => {
      T(e), (0, E.w8)()
    }, B = o.length > 1;
  return (0, r.jsxs)("div", {
    className: l()(O.container, a),
    children: [(0, r.jsxs)("div", {
      className: O.headerContainer,
      children: [(0, r.jsx)(p.Text, {
        variant: "text-sm/medium",
        children: y.intl.string(b.default["8ZcEfn"])
      }), (0, r.jsx)(p.ua7, {
        text: y.intl.string(b.default["61KGaW"]),
        shouldShow: o.length === N,
        children: e => (0, r.jsx)(p.P3F, S(I({}, e), {
          onClick: o.length === N ? true : M,
          className: l()(O.addColorButton, {
            [O.disabled]: o.length === N
          }),
          children: (0, r.jsx)(p.Text, {
            variant: "text-sm/medium",
            className: O.addColorButtonText,
            children: y.intl.string(b.default["+tTysr"])
          })
        }))
      })]
    }), B && (0, r.jsx)(P, {
      colors: o,
      selectedIndex: v,
      onColorSelect: G
    }), (0, r.jsx)(C, {
      onChange: L,
      onChangeComplete: j,
      color: A
    }), (0, r.jsxs)("div", {
      className: O.hexInputContainer,
      children: [(0, r.jsx)("input", {
        className: O.hexInput,
        value: A.toUpperCase(),
        onChange: e => x(e.target.value),
        maxLength: 7,
        placeholder: m.Dp,
        type: "text"
      }), (0, r.jsxs)("div", {
        className: O.trailingIcons,
        children: [null != c && (0, r.jsx)(p.ua7, {
          text: y.intl.string(b.default["8QXO8v"]),
          tooltipClassName: O.eyeDropperTooltip,
          children: e => (0, r.jsx)(_.h, S(I({
            variant: "icon-only",
            size: "sm"
          }, e), {
            onClick: k,
            icon: d.i,
            "aria-label": y.intl.string(b.default["8QXO8v"])
          }))
        }), B && (0, r.jsx)(p.ua7, {
          text: y.intl.string(b.default["rTik5+"]),
          children: e => (0, r.jsx)(_.h, S(I({}, e), {
            variant: "icon-only",
            size: "sm",
            onClick: () => U(v),
            icon: f.X,
            "aria-label": y.intl.string(b.default["rTik5+"])
          }))
        })]
      })]
    })]
  })
}