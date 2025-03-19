/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => v
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(866442),
  o = n(481060),
  c = n(393238),
  A = n(44315),
  d = n(663993),
  u = n(981631),
  g = n(388032),
  f = n(758419);

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function p(e, t) {
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
let h = (0, d.Un)({
  createPromise: () => n.e("4848").then(n.bind(n, 336231)),
  webpackId: 336231
});

function C(e) {
  let t = (0, l.Bd)(e) > .25;
  return (0, A.Lq)(t ? u.Ilk.WHITE_500 : u.Ilk.PRIMARY_530)
}

function b(e) {
  let {
    value: t,
    onChange: n,
    disabled: s = !1
  } = e, [c, A] = i.useState(t);

  function d() {
    n(c)
  }

  function h(e) {
    n(e), A(e)
  }
  let b = t === u.p6O,
    v = b ? c : t,
    x = (0, r.jsx)(o.dz2, {
      size: "custom",
      width: 32,
      height: 24,
      color: C(t)
    }),
    N = (0, o.arW)({
      orientation: "horizontal",
      isDisabled: s
    }),
    j = (0, o.xUy)({
      isSelected: b,
      label: g.NW.formatToPlainString(g.t.ZC69mJ, {
        colorHex: (0, l.Rf)(u.p6O)
      })
    }),
    E = (0, o.xUy)({
      isSelected: !b,
      label: g.NW.formatToPlainString(g.t["3kiLZW"], {
        colorHex: (0, l.Rf)(t)
      })
    });
  return (0, r.jsxs)("div", p(m({
    className: f.buttonsContainer,
    "aria-label": g.NW.string(g.t.FJjrIy)
  }, N), {
    children: [(0, r.jsx)("div", {
      className: a()(f.colorSwatch, {
        [f.disabled]: s
      }),
      children: (0, r.jsxs)(o.P3F, p(m({
        onClick: s ? void 0 : function() {
          n(u.p6O)
        },
        "aria-disabled": s
      }, j), {
        children: [(0, r.jsx)("div", {
          className: f.swatch,
          style: {
            backgroundColor: (0, l.Rf)(u.p6O)
          },
          children: b ? x : null
        }), (0, r.jsx)(o.Text, {
          className: f.swatchDescription,
          color: "header-secondary",
          variant: "text-xs/normal",
          "aria-hidden": !0,
          children: g.NW.string(g.t.Mcfzam)
        })]
      }))
    }), (0, r.jsxs)("div", {
      className: a()(f.colorSwatch, {
        [f.disabled]: s
      }),
      children: [(0, r.jsxs)(o.P3F, p(m({
        onClick: s ? void 0 : d,
        "aria-disabled": s
      }, E), {
        children: [(0, r.jsx)("div", {
          className: a()(f.customSwatch, {
            [f.defaultSwatch]: v === u.p6O
          }),
          style: {
            "--custom-color": (0, l.Rf)(v)
          },
          children: b ? null : x
        }), (0, r.jsx)(o.Text, {
          className: f.swatchDescription,
          color: "header-secondary",
          variant: "text-xs/normal",
          "aria-hidden": !0,
          children: g.NW.string(g.t["2ArXy8"])
        })]
      })), !s && (0, r.jsx)(o.yRy, {
        onRequestOpen: d,
        renderPopout: e => (0, r.jsx)(o.Z$W, p(m({}, e), {
          value: t,
          onChange: h
        })),
        children: e => (0, r.jsx)(o.P3F, p(m({}, e), {
          className: f.dropperIconButton,
          "aria-label": g.NW.string(g.t.Qp04hI),
          children: (0, r.jsx)(o.ilE, {
            size: "custom",
            className: f.dropperIcon,
            width: 14,
            height: 14,
            color: C(v)
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
      disabled: s = !1
    } = e,
    {
      ref: a,
      width: l
    } = (0, c.Z)();
  return t = null == l || l < 440 ? (0, r.jsx)(b, {
    value: n,
    onChange: i,
    disabled: s
  }) : (0, r.jsx)(h, {
    defaultColor: u.p6O,
    colors: u.pmI,
    value: n,
    onChange: i,
    disabled: s
  }), (0, r.jsx)("div", {
    ref: a,
    children: t
  })
}