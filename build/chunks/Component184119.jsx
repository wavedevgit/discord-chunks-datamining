/** Chunk was on 67096 **/
/** chunk id: 184119, original params: e,A,t (module,exports,require) **/
require.d(exports, {
  A: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk990078 = require("./990078.jsx"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk946274 = require("./946274.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk893347 = require("./893347.js");

function g(e) {
  for (var A = 1; A < arguments.length; A++) {
    var t = null != arguments[A] ? arguments[A] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), r.forEach(function(A) {
      var r;
      r = t[A], A in e ? Object.defineProperty(e, A, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[A] = r
    })
  }
  return e
}

function p(e, A) {
  return A = null != A ? A : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(A)) : (function(e, A) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t.push.apply(t, r)
    }
    return t
  })(Object(A)).forEach(function(t) {
    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(A, t))
  }), e
}
let f = "custom-image",
  m = Chunk64700.forwardRef(function(e, A) {
    let {
      selectedImageName: t,
      onChange: n,
      disabled: l = false,
      name: i,
      alt: d,
      data: u
    } = e, f = i === t, m = (0, o.Gx)({
      isSelected: f,
      label: d
    }), v = l ? true : () => {
      n(u, i)
    };
    return (0, r.jsx)(s.DUT, p(g({
      ref: A,
      className: a()(c.hO, {
        [c.wH]: f,
        [c.r9]: l
      }),
      onClick: v,
      "aria-disabled": l
    }, m), {
      children: (0, r.jsx)("img", {
        src: u,
        alt: d,
        className: c.mp
      })
    }))
  });

function v(e) {
  let {
    presetImages: A,
    image: t,
    imageName: l,
    savedImageName: v,
    onChange: h,
    uploadButtonLabel: q = u.intl.string(u.t["MsUY/S"]),
    radioGroupAriaLabel: b = u.intl.string(u.t["0Q0UJq"]),
    disabled: C = false
  } = e, j = l === f, [U, V] = n.useState(j ? t : null), [O, x] = n.useState(null), y = n.useRef(null), P = n.useRef(null);
  n.useEffect(() => {
    v !== f && (V(null), x(null))
  }, [v]);
  let K = null != O ? u.intl.formatToPlainString(u.t["Kw+5YX"], {
      filename: O
    }) : u.intl.string(u.t.SNPvSv),
    N = (0, o._u)({
      orientation: "horizontal",
      isDisabled: C
    }),
    {
      ref: I
    } = N,
    F = function(e, A) {
      if (null == e) return {};
      var t, r, n, l = {};
      if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (n = 0, t = Reflect.ownKeys(e); n < t.length; n++) r = t[n], !(A.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
        return l
      }
      if (l = function(e, A) {
          if (null == e) return {};
          var t, r, n = {},
            l = Object.getOwnPropertyNames(e);
          for (r = 0; r < l.length; r++) t = l[r], !(A.indexOf(t) >= 0) && Object.prototype.propertyIsEnumerable.call(e, t) && (n[t] = e[t]);
          return n
        }(e, A), Object.getOwnPropertySymbols)
        for (n = 0, t = Object.getOwnPropertySymbols(e); n < t.length; n++) r = t[n], !(A.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }(N, ["ref"]);
  return n.useEffect(() => {
    if (j && null != O) {
      var e, A;
      null == (A = P.current) || null == (e = A.ref) || e.focus()
    }
  }, [j, O]), (0, r.jsxs)("div", {
    className: c.fE,
    children: [(0, r.jsx)(s.vN3, {
      within: true,
      children: (0, r.jsxs)("div", {
        className: a()(c.au, {
          [c.r9]: C,
          [c.R]: null != U
        }),
        "aria-disabled": C,
        children: [(0, r.jsx)(s.XGR, {
          size: "xs",
          color: "currentColor",
          "aria-hidden": true
        }), (0, r.jsx)(s.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          "aria-hidden": true,
          children: q
        }), (0, r.jsx)(d.Ay, {
          ref: y,
          tabIndex: 0,
          onChange: (e, A) => {
            null != A && (x(A.name), V(e), h(e, f))
          },
          "aria-label": q
        })]
      })
    }), null != U && (0, r.jsxs)("div", {
      className: c.kt,
      children: [(0, r.jsx)(i.m, {
        asContainer: true,
        text: u.intl.string(u.t.AQYXMO),
        children: (0, r.jsx)(s.DUT, {
          className: c.xA,
          onClick: () => {
            var e;
            return null == (e = y.current) ? true : e.activateUploadDialogue()
          },
          "aria-label": u.intl.formatToPlainString(u.t.Qc9Lg6, {
            filename: O
          }),
          children: (0, r.jsx)(s.R2l, {
            size: "xs",
            color: "currentColor",
            className: c.IZ
          })
        })
      }), (0, r.jsx)(i.m, {
        asContainer: true,
        text: u.intl.string(u.t.WxqWU0),
        children: (0, r.jsx)(s.DUT, {
          className: c.xA,
          onClick: () => {
            l === f && h(A[0].data, A[0].name), V(null), x(null)
          },
          "aria-label": u.intl.formatToPlainString(u.t.Z43V9S, {
            filename: O
          }),
          children: (0, r.jsx)(s.ucK, {
            size: "md",
            color: "currentColor",
            className: c.fy
          })
        })
      })]
    }), (0, r.jsxs)("div", p(g({
      "aria-label": b,
      ref: I
    }, F), {
      className: c.R$,
      children: [null != U && (0, r.jsx)(m, {
        ref: P,
        selectedImageName: l,
        onChange: h,
        disabled: C,
        name: f,
        alt: K,
        data: U
      }), A.map(e => (0, r.jsx)(m, g({
        selectedImageName: l,
        onChange: h,
        disabled: C
      }, e), e.name))]
    }))]
  })
}