/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => N
});
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(91192),
  l = n(866442),
  c = n(442837),
  u = n(692547),
  d = n(481060),
  f = n(239091),
  _ = n(607070),
  p = n(134433),
  h = n(111028),
  m = n(91218),
  g = n(518738),
  E = n(388032),
  v = n(986647);

function b(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      b(e, t, n[t])
    })
  }
  return e
}

function O(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : O(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function S(e, t) {
  if (null == e) return {};
  var n, r, i = T(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function T(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let N = i.forwardRef(function(e, t) {
  var o, b, O;
  let T;
  let {
    canRemove: N,
    className: A,
    role: C,
    onRemove: R,
    guildId: P,
    disableBorderColor: w,
    onMouseDown: D
  } = e, L = (0, s.JA)(C.id), {
    tabIndex: x
  } = L, M = S(L, ["tabIndex"]), k = (0, g.p9)({
    roleId: C.id,
    size: 16,
    guildId: P
  }), j = (0, c.e7)([_.Z], () => _.Z.roleStyle), U = (null === (o = C.tags) || void 0 === o ? void 0 : o.guild_connections) === null, G = i.useCallback(e => {
    (0, f.jW)(e, async () => {
      let {
        default: e
      } = await n.e("5396").then(n.bind(n, 731646));
      return t => (0, r.jsx)(e, I(y({}, t), {
        id: C.id,
        label: E.NW.string(E.t.sMsaLi)
      }))
    })
  }, [C.id]), B = (0, d.dQu)(u.Z.unsafe_rawColors.PRIMARY_300).hsl(), V = null !== (b = C.colorString) && void 0 !== b ? b : B, F = null !== (O = (0, l.wK)(V, .6)) && void 0 !== O ? O : void 0, Z = u.Z.unsafe_rawColors.WHITE_500.css, H = (0, l._i)(V);
  null != H && .3 > (0, l.Bd)(H) && (Z = u.Z.unsafe_rawColors.PRIMARY_630.css), T = U ? (0, r.jsx)(p.Z, {
    className: v.roleFlowerStar,
    iconClassName: N ? v.roleVerifiedIcon : void 0,
    color: V,
    size: 14
  }) : "dot" === j ? (0, r.jsx)(d.FhE, {
    className: v.roleDot,
    color: V,
    background: !1,
    tooltip: !1
  }) : (0, r.jsx)(d.xko, {
    color: V,
    className: v.roleCircle
  });
  let W = i.useMemo(() => {
      var t;
      return y({
        borderColor: w ? void 0 : F
      }, null !== (t = e.style) && void 0 !== t ? t : {})
    }, [F, w, e.style]),
    Y = () => N ? (0, r.jsx)(d.DY3, {
      text: E.NW.string(E.t.u3RVsL),
      children: (0, r.jsxs)(d.P3F, {
        className: a()(v.roleRemoveButtonCanRemove, v.roleRemoveButton),
        onClick: R,
        tabIndex: x,
        focusProps: {
          focusClassName: v.roleRemoveIconFocused
        },
        "aria-hidden": !1,
        "aria-label": E.NW.formatToPlainString(E.t.QrxwhY, {
          roleName: C.name
        }),
        children: [T, (0, r.jsx)(d.Dio, {
          size: "md",
          color: Z,
          className: v.roleRemoveIcon,
          "aria-hidden": !0
        })]
      })
    }) : (0, r.jsx)(d.P3F, {
      className: v.roleRemoveButton,
      tabIndex: -1,
      focusProps: {
        focusClassName: v.roleRemoveIconFocused
      },
      "aria-hidden": !0,
      "aria-label": E.NW.formatToPlainString(E.t.QrxwhY, {
        roleName: C.name
      }),
      children: T
    });
  return (0, r.jsx)(d.tEY, {
    children: (0, r.jsxs)("div", I(y({
      ref: t,
      className: a()(v.role, A),
      style: W,
      onContextMenu: G,
      onMouseDown: D,
      "aria-label": C.name,
      tabIndex: x
    }, M), {
      children: [Y(), null != k ? (0, r.jsx)(m.Z, I(y({
        className: v.roleIcon
      }, k), {
        enableTooltip: !1
      })) : null, (0, r.jsx)("div", {
        "aria-hidden": !0,
        className: v.roleName,
        children: (0, r.jsx)(d.Text, {
          variant: "text-xs/medium",
          children: (0, r.jsx)(h.Z, {
            children: C.name
          })
        })
      })]
    }))
  })
})