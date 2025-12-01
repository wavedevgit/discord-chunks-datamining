/** Chunk was on web.js **/
/** chunk id: 256226, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk866442 = require("./866442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk607070 = require("./607070.js"),
  Chunk134433 = require("./134433.jsx"),
  Chunk518738 = require("./518738.js"),
  Chunk884902 = require("./884902.js"),
  Chunk48950 = require("./48950.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk787185 = require("./787185.js");

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
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

function I(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : I(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = C(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let N = Chunk473749.forwardRef(function(e, t) {
  var a, v, I;
  let C, {
      canRemove: N,
      className: P,
      role: R,
      onRemove: w,
      guildId: D,
      disableBorderColor: x,
      onMouseDown: L
    } = e,
    j = (0, s.JA)(R.id),
    {
      tabIndex: M
    } = j,
    k = A(j, ["tabIndex"]),
    U = (0, g.p9)({
      roleId: R.id,
      size: 16,
      guildId: D
    }),
    G = (0, c.e7)([m.Z], () => m.Z.roleStyle),
    Z = (null == (a = R.tags) ? true : a.guild_connections) === null,
    B = i.useCallback(e => {
      (0, _.jW)(e, async () => {
        let {
          default: e
        } = await n.e("5396").then(n.bind(n, 731646));
        return t => (0, r.jsx)(e, T(S({}, t), {
          id: R.id,
          label: y.intl.string(y.t.sMsaLg)
        }))
      })
    }, [R.id]),
    F = (0, p.dQu)(u.Z.unsafe_rawColors.PRIMARY_300).hsl(),
    V = null != (v = R.colorString) ? v : F,
    H = null != (I = (0, l.wK)(V, .6)) ? I : true,
    Y = u.Z.unsafe_rawColors.WHITE_500.css,
    W = (0, l._i)(V);
  null != W && .3 > (0, l.Bd)(W) && (Y = u.Z.unsafe_rawColors.PRIMARY_630.css);
  let K = (0, E._f)(D, R, R.colorStrings);
  C = Z ? (0, r.jsx)(h.Z, {
    className: O.roleFlowerStar,
    iconClassName: N ? O.roleVerifiedIcon : true,
    color: V,
    size: 14
  }) : "dot" === G ? (0, r.jsx)(p.FhE, {
    className: O.roleDot,
    color: V,
    background: false,
    colors: K,
    tooltip: false
  }) : (0, r.jsx)(p.xko, {
    color: V,
    colors: K,
    className: O.roleCircle
  });
  let z = i.useMemo(() => {
      var t;
      return S({
        borderColor: x ? true : H
      }, null != (t = e.style) ? t : {})
    }, [H, x, e.style]),
    q = () => N ? (0, r.jsx)(f.u, {
      asContainer: true,
      text: y.intl.string(y.t.u3RVsH),
      children: (0, r.jsxs)(p.P3F, {
        className: o()(O.roleRemoveButtonCanRemove, O.roleRemoveButton),
        onClick: w,
        tabIndex: M,
        focusProps: {
          focusClassName: O.roleRemoveIconFocused
        },
        "aria-hidden": false,
        "aria-label": y.intl.formatToPlainString(y.t.QrxwhY, {
          roleName: R.name
        }),
        children: [C, (0, r.jsx)(p.Dio, {
          size: "md",
          color: Y,
          className: O.roleRemoveIcon,
          "aria-hidden": true
        })]
      })
    }) : (0, r.jsx)(p.P3F, {
      className: O.roleRemoveButton,
      tabIndex: false,
      focusProps: {
        focusClassName: O.roleRemoveIconFocused
      },
      "aria-hidden": true,
      "aria-label": y.intl.formatToPlainString(y.t.QrxwhY, {
        roleName: R.name
      }),
      children: C
    });
  return (0, r.jsx)(p.tEY, {
    children: (0, r.jsxs)("div", T(S({
      ref: t,
      className: o()(O.role, P),
      style: z,
      onContextMenu: B,
      onMouseDown: L,
      "aria-label": R.name,
      tabIndex: M
    }, k), {
      children: [q(), null != U ? (0, r.jsx)(b.Z, T(S({
        className: O.roleIcon
      }, U), {
        enableTooltip: false
      })) : null, (0, r.jsx)("div", {
        "aria-hidden": true,
        className: O.roleName,
        children: (0, r.jsx)(p.Text, {
          variant: "text-xs/medium",
          children: (0, r.jsx)(d.Z, {
            children: R.name
          })
        })
      })]
    }))
  })
})