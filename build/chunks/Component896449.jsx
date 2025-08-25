/** Chunk was on web.js **/
/** chunk id: 896449, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => b,
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk37258 = require("./37258.jsx"),
  Chunk26033 = require("./26033.js"),
  Chunk178762 = require("./178762.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk709516 = require("./709516.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function E(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = "content-inventory-context";

function y(e) {
  var t;
  let {
    user: n,
    guildId: h,
    channel: g,
    entry: y,
    onSelect: O,
    disableGameProfileLinks: v
  } = e, I = i.useRef(null), T = i.useContext(f.Ir), S = (0, u.Z)({
    userId: n.id,
    guildId: h,
    channelId: null == g ? true : g.id,
    onAction: T
  }), A = (0, s.Z)({
    id: n.id,
    label: _.intl.string(_.t["/AXYnJ"])
  }), C = "application_id" in y.extra ? y.extra.application_id : null, N = (0, s.Z)({
    id: C,
    label: _.intl.string(_.t["FfCL+/"])
  }), R = (0, d.dX)(y), P = (0, c.Z)({
    location: "ContentPopoutContextMenu",
    applicationId: R && true !== v ? null == (t = y.extra) ? true : t.application_id : true,
    source: l.m1.ActivityCardContextMenu,
    trackEntryPointImpression: true,
    sourceUserId: y.author_id
  });
  return (0, r.jsx)(o.yRy, {
    targetElementRef: I,
    align: "top",
    position: "right",
    disablePointerEvents: false,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.v2r, {
        navId: b,
        onClose: () => {
          (0, a.Zy)(), t()
        },
        "aria-label": _.intl.string(_.t.liqwPD),
        onSelect: O,
        children: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)(o.kSQ, {
            children: [S, null != P && (0, r.jsx)(o.sNh, {
              id: "game-profile",
              label: _.intl.string(_.t.f7aVGh),
              action: e => {
                P(e), null == T || T()
              }
            })]
          }), (0, r.jsxs)(o.kSQ, {
            children: [A, N]
          })]
        })
      })
    },
    children: e => (0, r.jsx)(o.ua7, {
      text: _.intl.string(_.t.UKOtz8),
      children: t => (0, r.jsx)(o.P3F, E(m(E(m({
        innerRef: I
      }, t), {
        className: p.menuIcon
      }), e), {
        children: (0, r.jsx)(o.xhG, {
          color: "currentColor",
          size: "custom",
          width: 16,
          height: 16
        })
      }))
    })
  })
}