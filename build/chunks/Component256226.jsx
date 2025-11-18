/** Chunk was on web.js **/
/** chunk id: 256226, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => R
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
  Chunk559475 = require("./559475.js"),
  Chunk134433 = require("./134433.jsx"),
  Chunk518738 = require("./518738.js"),
  Chunk884902 = require("./884902.js"),
  Chunk48950 = require("./48950.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk139205 = require("./139205.js");

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function T(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      I(e, t, n[t])
    })
  }
  return e
}

function S(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function A(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : S(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e, t) {
  if (null == e) return {};
  var n, r, i = N(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let R = Chunk473749.forwardRef(function(e, t) {
  var a, I, S;
  let N, {
      canRemove: R,
      className: P,
      role: D,
      onRemove: w,
      guildId: L,
      disableBorderColor: x,
      onMouseDown: M,
      onRoleClick: j
    } = e,
    k = (0, s.JA)(D.id),
    {
      tabIndex: U
    } = k,
    G = C(k, ["tabIndex"]),
    B = (0, E.p9)({
      roleId: D.id,
      size: 16,
      guildId: L
    }),
    Z = (0, c.e7)([h.Z], () => h.Z.roleStyle),
    F = (0, m.t)("user_profile_member_role"),
    V = (null == (a = D.tags) ? true : a.guild_connections) === null,
    H = i.useCallback(e => {
      (0, p.jW)(e, async () => {
        let {
          default: e
        } = await n.e("5396").then(n.bind(n, 731646));
        return t => (0, r.jsx)(e, A(T({}, t), {
          id: D.id,
          label: O.intl.string(O.t.sMsaLg)
        }))
      })
    }, [D.id]),
    Y = i.useCallback(() => {
      if (F) {
        if (null != j) return void j(D.id);
        (0, _.ZDy)(async () => {
          let {
            default: e
          } = await n.e("88146").then(n.bind(n, 501171));
          return t => (0, r.jsx)(e, A(T({}, t), {
            guildId: L,
            roleId: D.id,
            channelId: true
          }))
        })
      }
    }, [F, L, D.id, j]),
    W = (0, _.dQu)(u.Z.unsafe_rawColors.PRIMARY_300).hsl(),
    K = null != (I = D.colorString) ? I : W,
    z = null != (S = (0, l.wK)(K, .6)) ? S : true,
    q = u.Z.unsafe_rawColors.WHITE_500.css,
    X = (0, l._i)(K);
  null != X && .3 > (0, l.Bd)(X) && (q = u.Z.unsafe_rawColors.PRIMARY_630.css);
  let Q = (0, b._f)(L, D, D.colorStrings);
  N = V ? (0, r.jsx)(g.Z, {
    className: v.roleFlowerStar,
    iconClassName: R ? v.roleVerifiedIcon : true,
    color: K,
    size: 14
  }) : "dot" === Z ? (0, r.jsx)(_.FhE, {
    className: v.roleDot,
    color: K,
    background: false,
    colors: Q,
    tooltip: false
  }) : (0, r.jsx)(_.xko, {
    color: K,
    colors: Q,
    className: v.roleCircle
  });
  let J = i.useMemo(() => {
      var t;
      return T({
        borderColor: x ? true : z
      }, null != (t = e.style) ? t : {})
    }, [z, x, e.style]),
    $ = () => R ? (0, r.jsx)(f.u, {
      asContainer: true,
      text: O.intl.string(O.t.u3RVsH),
      children: (0, r.jsxs)(_.P3F, {
        className: o()(v.roleRemoveButtonCanRemove, v.roleRemoveButton),
        onClick: e => {
          e.stopPropagation(), w(e)
        },
        tabIndex: U,
        focusProps: {
          focusClassName: v.roleRemoveIconFocused
        },
        "aria-hidden": false,
        "aria-label": O.intl.formatToPlainString(O.t.QrxwhY, {
          roleName: D.name
        }),
        children: [N, (0, r.jsx)(_.Dio, {
          size: "md",
          color: q,
          className: v.roleRemoveIcon,
          "aria-hidden": true
        })]
      })
    }) : (0, r.jsx)("div", {
      className: v.roleRemoveButton,
      children: N
    }),
    ee = (0, r.jsxs)(r.Fragment, {
      children: [$(), null != B ? (0, r.jsx)(y.Z, A(T({
        className: v.roleIcon
      }, B), {
        enableTooltip: false
      })) : null, (0, r.jsx)("div", {
        className: v.roleName,
        "aria-hidden": true,
        children: (0, r.jsx)(_.Text, {
          variant: "text-xs/medium",
          children: (0, r.jsx)(d.Z, {
            children: D.name
          })
        })
      })]
    });
  return (0, r.jsx)(_.tEY, {
    children: F ? (0, r.jsx)(_.P3F, A(T({
      innerRef: t,
      onClick: Y,
      className: o()(v.role, v.clickable, P),
      style: J,
      onContextMenu: H,
      "aria-label": D.name,
      tabIndex: U
    }, G), {
      children: ee
    })) : (0, r.jsx)("div", A(T({
      ref: t,
      onMouseDown: M,
      className: o()(v.role, P),
      style: J,
      onContextMenu: H,
      "aria-label": D.name,
      tabIndex: U
    }, G), {
      children: ee
    }))
  })
})