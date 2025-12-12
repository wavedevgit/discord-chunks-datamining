/** Chunk was on web.js **/
/** chunk id: 896449, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  N: () => y,
  Z: () => O
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk37258 = require("./37258.jsx"),
  Chunk26033 = require("./26033.js"),
  Chunk178762 = require("./178762.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk214226 = require("./214226.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function g(e) {
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

function E(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let y = "content-inventory-context";

function O(e) {
  var t;
  let {
    user: n,
    guildId: h,
    channel: E,
    entry: O,
    onSelect: v,
    disableGameProfileLinks: S
  } = e, I = i.useRef(null), T = i.useContext(p.Ir), C = (0, d.Z)({
    userId: n.id,
    guildId: h,
    channelId: null == E ? true : E.id,
    onAction: T
  }), A = (0, l.Z)({
    id: n.id,
    label: _.intl.string(_.t["/AXYnE"])
  }), N = "application_id" in O.extra ? O.extra.application_id : null, P = (0, l.Z)({
    id: N,
    label: _.intl.string(_.t["FfCL+6"])
  }), R = (0, f.dX)(O), w = (0, u.Z)({
    location: "ContentPopoutContextMenu",
    applicationId: R && true !== S ? null == (t = O.extra) ? true : t.application_id : true,
    source: c.m1.ActivityCardContextMenu,
    trackEntryPointImpression: true,
    sourceUserId: O.author_id
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
        navId: y,
        onClose: () => {
          (0, s.Zy)(), t()
        },
        "aria-label": _.intl.string(_.t.liqwPJ),
        onSelect: v,
        children: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)(o.kSQ, {
            children: [C, null != w && (0, r.jsx)(o.sNh, {
              id: "game-profile",
              label: _.intl.string(_.t.f7aVGn),
              action: e => {
                w(e), null == T || T()
              }
            })]
          }), (0, r.jsxs)(o.kSQ, {
            children: [A, P]
          })]
        })
      })
    },
    children: e => (0, r.jsx)(a.u, {
      asContainer: true,
      text: _.intl.string(_.t["UKOtz+"]),
      children: (0, r.jsx)(o.P3F, b(g({
        innerRef: I,
        className: m.menuIcon
      }, e), {
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