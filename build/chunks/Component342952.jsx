/** Chunk was on web.js **/
/** chunk id: 342952, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => R,
  I: () => N
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk538451 = require("./538451.jsx"),
  Chunk562153 = require("./562153.js"),
  Chunk427262 = require("./427262.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk232358 = require("./232358.js");

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
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = A(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}

function v() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : u._3J.SIZE_24;
  switch (e) {
    case u._3J.SIZE_16:
      return m.nc;
    case u._3J.SIZE_20:
      return m.qV;
    case u._3J.SIZE_24:
    default:
      return m.q1
  }
}

function S() {
  let e = arguments.length > 0 && true !== arguments[0] ? arguments[0] : u._3J.SIZE_24;
  switch (e) {
    case u._3J.SIZE_16:
    case u._3J.SIZE_20:
      return "text-xxs/semibold";
    case u._3J.SIZE_24:
    default:
      return "text-xs/medium"
  }
}

function I(e) {
  let {
    users: t,
    maxUsers: n,
    guildId: i,
    channelId: a,
    size: o = u._3J.SIZE_24,
    shouldShowOverflowCount: d,
    disableUsernameTooltip: f
  } = e, h = v(o), g = d ? n - 1 : Math.min(t.length, n), E = g - 1, b = l()(t).take(g).map((e, t) => {
    let n = p.Ay.getNickname(i, a, e),
      l = null != n ? n : _.Ay.getName(e),
      g = t === E && !d,
      b = s()(m.my, h, g && m.NE),
      y = (0, r.jsx)(u.euF, {
        src: e.getAvatarURL(i, 24),
        size: o,
        "aria-hidden": true
      });
    return (0, r.jsx)("li", {
      className: b,
      children: f ? (0, r.jsx)("span", {
        role: "img",
        "aria-label": l,
        children: y
      }) : (0, r.jsx)(c.m, {
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
    className: m.HD,
    children: b
  })
}

function T(e) {
  let {
    count: t,
    textVariant: n,
    color: i = "interactive-text-default",
    size: a = u._3J.SIZE_24,
    className: o
  } = e, l = v(a), c = null != n ? n : S(a);
  return (0, r.jsxs)(u.Text, {
    variant: c,
    color: i,
    className: s()(m.ju, l, o),
    children: [(0, r.jsx)(u.AC4, {
      children: h.intl.formatToPlainString(h.t.RGr9tj, {
        count: t
      })
    }), (0, r.jsx)("span", {
      "aria-hidden": true,
      children: t > 99 ? ">99" : "+".concat(t)
    })]
  })
}

function C(e) {
  let {
    users: t,
    maxUsers: n,
    guildId: i,
    channelId: a,
    size: s = u._3J.SIZE_24,
    overflowCountClassName: o,
    overflowCountColor: l = "interactive-text-default",
    hideOverflowCount: c = false
  } = e, d = t.length - n, f = d + 1, p = d > 0 && !c;
  return t.length <= 0 ? null : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(I, {
      users: t,
      maxUsers: n,
      guildId: i,
      channelId: a,
      size: s,
      shouldShowOverflowCount: p,
      disableUsernameTooltip: true
    }), p && (0, r.jsx)(T, {
      count: f,
      color: l,
      size: s,
      className: o
    })]
  })
}

function N(e) {
  let {
    className: t,
    "aria-label": n,
    "aria-labelledby": i,
    "aria-hidden": a
  } = e, o = O(e, ["className", "aria-label", "aria-labelledby", "aria-hidden"]);
  return (0, r.jsx)("div", {
    role: "group",
    className: s()(t, m.HD),
    "aria-label": n,
    "aria-labelledby": i,
    "aria-hidden": a,
    children: (0, r.jsx)(C, E({}, o))
  })
}

function R(e) {
  let {
    users: t,
    maxUsers: a,
    guildId: o,
    channelId: l,
    className: c,
    size: _ = u._3J.SIZE_24,
    overflowCountVariant: g,
    overflowCountColor: b = "interactive-text-default",
    overflowCountClassName: O,
    hideOverflowCount: A = false,
    disableUsernameTooltip: v = false,
    disableUserPopout: S = false,
    onClickOverflow: C,
    onFocusOverflow: N,
    onUserClick: R,
    onUserPopoutRequestClose: w,
    "aria-label": P,
    "aria-labelledby": D,
    "aria-hidden": x
  } = e, [L, j] = i.useState(false), M = i.useRef(null), k = t.length - a, U = k + 1, G = k > 0 && !A && !x, V = () => (0, r.jsx)(u.lGe, {
    className: m.XM,
    "aria-label": P,
    "aria-labelledby": D,
    children: (0, r.jsx)(u.HOs, {
      className: m.XG,
      children: t.map(e => (0, r.jsx)(f.A, {
        user: e,
        guildId: o,
        channelId: l,
        nick: p.Ay.getNickname(o, l, e),
        disablePopout: "function" == typeof S ? S(e.id) : S,
        onClick: R,
        onPopoutRequestClose: () => {
          j(false), null == w || w()
        },
        onContextMenu: t => (0, d.L3)(t, async () => {
          let {
            default: t
          } = await Promise.all([n.e("97262"), n.e("32418"), n.e("8893")]).then(n.bind(n, 668569));
          return n => (0, r.jsx)(t, y(E({}, n), {
            user: e,
            guildId: o,
            channelId: l
          }))
        }, {
          onClose: () => j(false)
        })
      }, e.id))
    })
  }), F = () => G ? (0, r.jsx)(u.YNO, {
    targetElementRef: M,
    renderPopout: V,
    shouldShow: L,
    position: "bottom",
    onRequestClose: () => j(false),
    children: e => (0, r.jsx)(u.DUT, y(E({}, e), {
      innerRef: M,
      className: m.x6,
      onFocus: N,
      onClick: e => {
        null == C || C(e), j(true)
      },
      "aria-label": h.intl.formatToPlainString(h.t.R8Z8Qr, {
        count: U
      }),
      children: (0, r.jsx)(T, {
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
    "aria-label": P,
    "aria-labelledby": D,
    className: s()(c, m.HD),
    "aria-hidden": x,
    children: [(0, r.jsx)(I, {
      users: t,
      maxUsers: a,
      guildId: o,
      channelId: l,
      size: _,
      shouldShowOverflowCount: G,
      disableUsernameTooltip: v
    }), F()]
  })
}