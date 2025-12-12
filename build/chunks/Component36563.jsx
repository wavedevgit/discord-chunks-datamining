/** Chunk was on web.js **/
/** chunk id: 36563, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P,
  g: () => N
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk751688 = require("./751688.jsx"),
  Chunk5192 = require("./5192.js"),
  Chunk51144 = require("./51144.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk120230 = require("./120230.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i = v(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}

function S() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk481060.EFr.SIZE_24;
  switch (module) {
    case Chunk481060.EFr.SIZE_16:
      return Chunk120230.size16;
    case Chunk481060.EFr.SIZE_20:
      return Chunk120230.size20;
    case Chunk481060.EFr.SIZE_24:
    default:
      return Chunk120230.size24
  }
}

function I() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : Chunk481060.EFr.SIZE_24;
  switch (module) {
    case Chunk481060.EFr.SIZE_16:
    case Chunk481060.EFr.SIZE_20:
      return "text-xxs/semibold";
    case Chunk481060.EFr.SIZE_24:
    default:
      return "text-xs/medium"
  }
}

function T(e) {
  let {
    users: t,
    maxUsers: n,
    guildId: i,
    channelId: o,
    size: s = u.EFr.SIZE_24,
    shouldShowOverflowCount: d,
    disableUsernameTooltip: f
  } = e, m = S(s), g = d ? n - 1 : Math.min(t.length, n), E = g - 1, b = l()(t).take(g).map((e, t) => {
    let n = p.ZP.getNickname(i, o, e),
      l = null != n ? n : _.ZP.getName(e),
      g = t === E && !d,
      b = a()(h.avatar, m, g && h.isLast),
      y = (0, r.jsx)(u.qEK, {
        src: e.getAvatarURL(i, 24),
        size: s,
        "aria-hidden": true
      });
    return (0, r.jsx)("li", {
      className: b,
      children: f ? (0, r.jsx)("span", {
        role: "img",
        "aria-label": l,
        children: y
      }) : (0, r.jsx)(c.u, {
        text: l,
        ariaHidden: true,
        children: (0, r.jsx)("span", {
          role: "img",
          "aria-label": l,
          children: y
        })
      })
    }, e.id)
  }).value();
  return (0, r.jsx)("ul", {
    className: h.avatars,
    children: b
  })
}

function C(e) {
  let {
    count: t,
    textVariant: n,
    color: i = "interactive-text-default",
    size: o = u.EFr.SIZE_24,
    className: s
  } = e, l = S(o), c = null != n ? n : I(o);
  return (0, r.jsxs)(u.Text, {
    variant: c,
    color: i,
    className: a()(h.overflow, l, s),
    children: [(0, r.jsx)(u.nn4, {
      children: m.intl.formatToPlainString(m.t.RGr9tj, {
        count: t
      })
    }), (0, r.jsx)("span", {
      "aria-hidden": true,
      children: t > 99 ? ">99" : "+".concat(t)
    })]
  })
}

function A(e) {
  let {
    users: t,
    maxUsers: n,
    guildId: i,
    channelId: o,
    size: a = u.EFr.SIZE_24,
    overflowCountClassName: s,
    overflowCountColor: l = "interactive-text-default",
    hideOverflowCount: c = false
  } = e, d = t.length - n, f = d + 1, p = d > 0 && !c;
  return t.length <= 0 ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(T, {
      users: t,
      maxUsers: n,
      guildId: i,
      channelId: o,
      size: a,
      shouldShowOverflowCount: p,
      disableUsernameTooltip: true
    }), p && (0, r.jsx)(C, {
      count: f,
      color: l,
      size: a,
      className: s
    })]
  })
}

function N(e) {
  var {
    className: t,
    "aria-label": n,
    "aria-labelledby": i,
    "aria-hidden": o
  } = e, s = O(e, ["className", "aria-label", "aria-labelledby", "aria-hidden"]);
  return (0, r.jsx)("div", {
    role: "group",
    className: a()(t, h.avatars),
    "aria-label": n,
    "aria-labelledby": i,
    "aria-hidden": o,
    children: (0, r.jsx)(A, E({}, s))
  })
}

function P(e) {
  let {
    users: t,
    maxUsers: o,
    guildId: s,
    channelId: l,
    className: c,
    size: _ = u.EFr.SIZE_24,
    overflowCountVariant: g,
    overflowCountColor: b = "interactive-text-default",
    overflowCountClassName: O,
    hideOverflowCount: v = false,
    disableUsernameTooltip: S = false,
    disableUserPopout: I = false,
    onClickOverflow: A,
    onFocusOverflow: N,
    onUserClick: P,
    onUserPopoutRequestClose: R,
    "aria-label": w,
    "aria-labelledby": D,
    "aria-hidden": x
  } = e, [L, j] = i.useState(false), M = i.useRef(null), k = t.length - o, U = k + 1, G = k > 0 && !v && !x, Z = () => (0, r.jsx)(u.VqE, {
    className: h.popoutWrapper,
    "aria-label": w,
    "aria-labelledby": D,
    children: (0, r.jsx)(u.Ttm, {
      className: h.scroller,
      children: t.map(e => (0, r.jsx)(f.Z, {
        user: e,
        guildId: s,
        channelId: l,
        nick: p.ZP.getNickname(s, l, e),
        disablePopout: "function" == typeof I ? I(e.id) : I,
        onClick: P,
        onPopoutRequestClose: () => {
          j(false), null == R || R()
        },
        onContextMenu: t => (0, d.jW)(t, async () => {
          let {
            default: t
          } = await Promise.all([n.e("79695"), n.e("69220"), n.e("77635")]).then(n.bind(n, 881351));
          return n => (0, r.jsx)(t, y(E({}, n), {
            user: e,
            guildId: s,
            channelId: l
          }))
        }, {
          onClose: () => j(false)
        })
      }, e.id))
    })
  }), F = () => G ? (0, r.jsx)(u.yRy, {
    targetElementRef: M,
    renderPopout: Z,
    shouldShow: L,
    position: "bottom",
    onRequestClose: () => j(false),
    children: e => (0, r.jsx)(u.P3F, y(E({}, e), {
      innerRef: M,
      className: h.button,
      onFocus: N,
      onClick: e => {
        null == A || A(e), j(true)
      },
      "aria-label": m.intl.formatToPlainString(m.t.R8Z8Qr, {
        count: U
      }),
      children: (0, r.jsx)(C, {
        count: U,
        textVariant: g,
        color: b,
        size: _,
        className: O
      })
    }))
  }, "overflow") : null;
  return t.length <= 0 ? null : (0, r.jsxs)("div", {
    role: "group",
    "aria-label": w,
    "aria-labelledby": D,
    className: a()(c, h.avatars),
    "aria-hidden": x,
    children: [(0, r.jsx)(T, {
      users: t,
      maxUsers: o,
      guildId: s,
      channelId: l,
      size: _,
      shouldShowOverflowCount: G,
      disableUsernameTooltip: S
    }), F()]
  })
}