/** Chunk was on 384 **/
/** chunk id: 619326, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk866442 = require("./866442.js"),
  Chunk692547 = require("./692547.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk393238 = require("./393238.js"),
  Chunk663993 = require("./663993.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk267877 = require("./267877.js");

function h(e) {
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

function x(e, t) {
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

function j(e) {
  return (0, a.Bd)(e) > .25 ? o.Z.unsafe_rawColors.WHITE_500.css : o.Z.unsafe_rawColors.PRIMARY_530.css
}

function _(e) {
  let {
    value: t,
    onChange: n,
    disabled: l = false
  } = e, o = i.useRef(null), [d, g] = i.useState(t);

  function b() {
    n(d)
  }

  function _(e) {
    n(e), g(e)
  }
  let v = t === m.p6O,
    O = v ? d : t,
    C = (0, r.jsx)(u.dz2, {
      size: "custom",
      width: 32,
      height: 24,
      color: j(t)
    }),
    y = (0, c.Jb)({
      orientation: "horizontal",
      isDisabled: l
    }),
    {
      ref: N
    } = y,
    E = function(e, t) {
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
    I = (0, c.jm)({
      isSelected: v,
      label: p.intl.formatToPlainString(p.t.ZC69mL, {
        colorHex: m.Pbq
      })
    }),
    S = (0, c.jm)({
      isSelected: !v,
      label: p.intl.formatToPlainString(p.t["3kiLZZ"], {
        colorHex: (0, a.Rf)(t)
      })
    });
  return (0, r.jsxs)("div", x(h({
    className: f.buttonsContainer,
    "aria-label": p.intl.string(p.t["FJjrI/"]),
    ref: N
  }, E), {
    children: [(0, r.jsx)("div", {
      className: s()(f.colorSwatch, {
        [f.disabled]: l
      }),
      children: (0, r.jsxs)(u.P3F, x(h({
        onClick: l ? true : function() {
          n(m.p6O)
        },
        "aria-disabled": l
      }, I), {
        children: [(0, r.jsx)("div", {
          className: f.swatch,
          style: {
            backgroundColor: m.Pbq
          },
          children: v ? C : null
        }), (0, r.jsx)(u.Text, {
          className: f.swatchDescription,
          color: "text-default",
          variant: "text-xs/normal",
          "aria-hidden": true,
          children: p.intl.string(p.t.Mcfzar)
        })]
      }))
    }), (0, r.jsxs)("div", {
      className: s()(f.colorSwatch, {
        [f.disabled]: l
      }),
      children: [(0, r.jsxs)(u.P3F, x(h({
        onClick: l ? true : b,
        "aria-disabled": l
      }, S), {
        children: [(0, r.jsx)("div", {
          className: s()(f.customSwatch, {
            [f.defaultSwatch]: O === m.p6O
          }),
          style: {
            "--custom-color": (0, a.Rf)(O)
          },
          children: v ? null : C
        }), (0, r.jsx)(u.Text, {
          className: f.swatchDescription,
          color: "text-default",
          variant: "text-xs/normal",
          "aria-hidden": true,
          children: p.intl.string(p.t["2ArXy1"])
        })]
      })), !l && (0, r.jsx)(u.yRy, {
        targetElementRef: o,
        onRequestOpen: b,
        renderPopout: e => (0, r.jsx)(u.Z$W, x(h({}, e), {
          value: t,
          onChange: _
        })),
        children: e => (0, r.jsx)(u.P3F, x(h({}, e), {
          innerRef: o,
          className: f.dropperIconButton,
          "aria-label": p.intl.string(p.t.Qp04hK),
          children: (0, r.jsx)(u.ilE, {
            size: "custom",
            className: f.dropperIcon,
            width: 14,
            height: 14,
            color: j(O)
          })
        }))
      })]
    })]
  }))
}

function v(e) {
  let t, {
      value: n,
      onChange: i,
      disabled: l = false
    } = e,
    {
      ref: s,
      width: a
    } = (0, d.ZP)();
  return t = null == a || a < 440 ? (0, r.jsx)(_, {
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
    ref: s,
    children: t
  })
}