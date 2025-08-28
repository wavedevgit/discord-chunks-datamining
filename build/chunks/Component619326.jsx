/** Chunk was on 88479 **/
/** chunk id: 619326, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk866442 = require("./866442.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk44315 = require("./44315.js"),
  Chunk663993 = require("./663993.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk267877 = require("./267877.js");

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = (0, Chunk663993.Un)({
  createPromise: () => require.e("4848").then(require.bind(require, 797967)),
  webpackId: 797967
});

function x(e) {
  let t = (0, s.Bd)(e) > .25;
  return (0, d.Lq)(t ? m.Ilk.WHITE_500 : m.Ilk.PRIMARY_530)
}

function j(e) {
  let {
    value: t,
    onChange: n,
    disabled: l = false
  } = e, c = i.useRef(null), [d, u] = i.useState(t);

  function b() {
    n(d)
  }

  function j(e) {
    n(e), u(e)
  }
  let _ = t === m.p6O,
    v = _ ? d : t,
    O = (0, r.jsx)(o.dz2, {
      size: "custom",
      width: 32,
      height: 24,
      color: x(t)
    }),
    y = (0, o.arW)({
      orientation: "horizontal",
      isDisabled: l
    }),
    {
      ref: C
    } = y,
    N = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.keys(e);
        for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(y, ["ref"]),
    E = (0, o.xUy)({
      isSelected: _,
      label: g.intl.formatToPlainString(g.t.ZC69mJ, {
        colorHex: m.Pbq
      })
    }),
    I = (0, o.xUy)({
      isSelected: !_,
      label: g.intl.formatToPlainString(g.t["3kiLZW"], {
        colorHex: (0, s.Rf)(t)
      })
    });
  return (0, r.jsxs)("div", h(f({
    className: p.buttonsContainer,
    "aria-label": g.intl.string(g.t.FJjrIy),
    ref: C
  }, N), {
    children: [(0, r.jsx)("div", {
      className: a()(p.colorSwatch, {
        [p.disabled]: l
      }),
      children: (0, r.jsxs)(o.P3F, h(f({
        onClick: l ? true : function() {
          n(m.p6O)
        },
        "aria-disabled": l
      }, E), {
        children: [(0, r.jsx)("div", {
          className: p.swatch,
          style: {
            backgroundColor: m.Pbq
          },
          children: _ ? O : null
        }), (0, r.jsx)(o.Text, {
          className: p.swatchDescription,
          color: "header-secondary",
          variant: "text-xs/normal",
          "aria-hidden": true,
          children: g.intl.string(g.t.Mcfzam)
        })]
      }))
    }), (0, r.jsxs)("div", {
      className: a()(p.colorSwatch, {
        [p.disabled]: l
      }),
      children: [(0, r.jsxs)(o.P3F, h(f({
        onClick: l ? true : b,
        "aria-disabled": l
      }, I), {
        children: [(0, r.jsx)("div", {
          className: a()(p.customSwatch, {
            [p.defaultSwatch]: v === m.p6O
          }),
          style: {
            "--custom-color": (0, s.Rf)(v)
          },
          children: _ ? null : O
        }), (0, r.jsx)(o.Text, {
          className: p.swatchDescription,
          color: "header-secondary",
          variant: "text-xs/normal",
          "aria-hidden": true,
          children: g.intl.string(g.t["2ArXy8"])
        })]
      })), !l && (0, r.jsx)(o.yRy, {
        targetElementRef: c,
        onRequestOpen: b,
        renderPopout: e => (0, r.jsx)(o.Z$W, h(f({}, e), {
          value: t,
          onChange: j
        })),
        children: e => (0, r.jsx)(o.P3F, h(f({}, e), {
          innerRef: c,
          className: p.dropperIconButton,
          "aria-label": g.intl.string(g.t.Qp04hI),
          children: (0, r.jsx)(o.ilE, {
            size: "custom",
            className: p.dropperIcon,
            width: 14,
            height: 14,
            color: x(v)
          })
        }))
      })]
    })]
  }))
}

function _(e) {
  let t, {
      value: n,
      onChange: i,
      disabled: l = false
    } = e,
    {
      ref: a,
      width: s
    } = (0, c.ZP)();
  return t = null == s || s < 440 ? (0, r.jsx)(j, {
    value: n,
    onChange: i,
    disabled: l
  }) : (0, r.jsx)(b, {
    defaultColor: m.p6O,
    colors: m.pmI,
    value: n,
    onChange: i,
    disabled: l
  }), (0, r.jsx)("div", {
    ref: a,
    children: t
  })
}