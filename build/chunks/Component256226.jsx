/** Chunk was on web.js **/
/** chunk id: 256226, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk866442 = require("./866442.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk607070 = require("./607070.js"),
  Chunk134433 = require("./134433.jsx"),
  Chunk111028 = require("./111028.jsx"),
  Chunk91218 = require("./91218.jsx"),
  Chunk518738 = require("./518738.js"),
  Chunk884902 = require("./884902.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk787185 = require("./787185.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function v(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      O(e, t, n[t])
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

function S(e, t) {
  if (null == e) return {};
  var n, r, i = A(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let N = Chunk73800.forwardRef(function(e, t) {
  var a, O, I;
  let A, {
      canRemove: N,
      className: C,
      role: R,
      onRemove: P,
      guildId: w,
      disableBorderColor: D,
      onMouseDown: L
    } = e,
    x = (0, s.JA)(R.id),
    {
      tabIndex: M
    } = x,
    k = S(x, ["tabIndex"]),
    j = (0, g.p9)({
      roleId: R.id,
      size: 16,
      guildId: w
    }),
    U = (0, c.e7)([_.Z], () => _.Z.roleStyle),
    G = (null == (a = R.tags) ? true : a.guild_connections) === null,
    B = i.useCallback(e => {
      (0, f.jW)(e, async () => {
        let {
          default: e
        } = await n.e("5396").then(n.bind(n, 731646));
        return t => (0, r.jsx)(e, T(v({}, t), {
          id: R.id,
          label: b.intl.string(b.t.sMsaLi)
        }))
      })
    }, [R.id]),
    V = (0, d.dQu)(u.Z.unsafe_rawColors.PRIMARY_300).hsl(),
    F = null != (O = R.colorString) ? O : V,
    Z = null != (I = (0, l.wK)(F, .6)) ? I : true,
    H = u.Z.unsafe_rawColors.WHITE_500.css,
    Y = (0, l._i)(F);
  null != Y && .3 > (0, l.Bd)(Y) && (H = u.Z.unsafe_rawColors.PRIMARY_630.css);
  let W = (0, E._f)(w, R, R.colorStrings);
  A = G ? (0, r.jsx)(p.Z, {
    className: y.roleFlowerStar,
    iconClassName: N ? y.roleVerifiedIcon : true,
    color: F,
    size: 14
  }) : "dot" === U ? (0, r.jsx)(d.FhE, {
    className: y.roleDot,
    color: F,
    background: false,
    colors: W,
    tooltip: false
  }) : (0, r.jsx)(d.xko, {
    color: F,
    colors: W,
    className: y.roleCircle
  });
  let K = i.useMemo(() => {
      var t;
      return v({
        borderColor: D ? true : Z
      }, null != (t = e.style) ? t : {})
    }, [Z, D, e.style]),
    z = () => N ? (0, r.jsx)(d.DY3, {
      text: b.intl.string(b.t.u3RVsL),
      children: (0, r.jsxs)(d.P3F, {
        className: o()(y.roleRemoveButtonCanRemove, y.roleRemoveButton),
        onClick: P,
        tabIndex: M,
        focusProps: {
          focusClassName: y.roleRemoveIconFocused
        },
        "aria-hidden": false,
        "aria-label": b.intl.formatToPlainString(b.t.QrxwhY, {
          roleName: R.name
        }),
        children: [A, (0, r.jsx)(d.Dio, {
          size: "md",
          color: H,
          className: y.roleRemoveIcon,
          "aria-hidden": true
        })]
      })
    }) : (0, r.jsx)(d.P3F, {
      className: y.roleRemoveButton,
      tabIndex: false,
      focusProps: {
        focusClassName: y.roleRemoveIconFocused
      },
      "aria-hidden": true,
      "aria-label": b.intl.formatToPlainString(b.t.QrxwhY, {
        roleName: R.name
      }),
      children: A
    });
  return (0, r.jsx)(d.tEY, {
    children: (0, r.jsxs)("div", T(v({
      ref: t,
      className: o()(y.role, C),
      style: K,
      onContextMenu: B,
      onMouseDown: L,
      "aria-label": R.name,
      tabIndex: M
    }, k), {
      children: [z(), null != j ? (0, r.jsx)(m.Z, T(v({
        className: y.roleIcon
      }, j), {
        enableTooltip: false
      })) : null, (0, r.jsx)("div", {
        "aria-hidden": true,
        className: y.roleName,
        children: (0, r.jsx)(d.Text, {
          variant: "text-xs/medium",
          children: (0, r.jsx)(h.Z, {
            children: R.name
          })
        })
      })]
    }))
  })
})