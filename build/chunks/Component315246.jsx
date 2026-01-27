/** Chunk was on web.js **/
/** chunk id: 315246, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => O,
  n: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk409626 = require("./409626.js"),
  Chunk692969 = require("./692969.js"),
  Chunk243949 = require("./243949.jsx"),
  Chunk20805 = require("./20805.js"),
  Chunk420706 = require("./420706.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk596020 = require("./596020.js");

function m(e, t, n) {
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
      m(e, t, n[t])
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

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = "content-inventory-context";

function O(e) {
  var t;
  let {
    user: n,
    guildId: m,
    channel: E,
    entry: O,
    onSelect: v,
    disableGameProfileLinks: A
  } = e, I = i.useRef(null), S = i.useContext(p.Jd), T = (0, d.A)({
    userId: n.id,
    guildId: m,
    channelId: null == E ? true : E.id,
    onAction: S
  }), C = (0, l.A)({
    id: n.id,
    label: _.intl.string(_.t["/AXYnE"])
  }), N = "application_id" in O.extra ? O.extra.application_id : null, w = (0, l.A)({
    id: N,
    label: _.intl.string(_.t["FfCL+6"])
  }), R = (0, f.zD)(O), P = (0, u.A)({
    location: "ContentPopoutContextMenu",
    applicationId: R && true !== A ? null == (t = O.extra) ? true : t.application_id : true,
    source: c.Ob.ActivityCardContextMenu,
    trackEntryPointImpression: true,
    sourceUserId: O.author_id
  });
  return (0, r.jsx)(o.YNO, {
    targetElementRef: I,
    align: "top",
    position: "right",
    disablePointerEvents: false,
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, r.jsx)(o.W1t, {
        "data-menu-mixed": true,
        navId: b,
        onClose: () => {
          (0, s.Z_)(), t()
        },
        "aria-label": _.intl.string(_.t.liqwPJ),
        onSelect: v,
        children: (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsxs)(o.rXV, {
            children: [T, null != P && (0, r.jsx)(o.Drp, {
              id: "game-profile",
              label: _.intl.string(_.t.f7aVGn),
              action: e => {
                P(e), null == S || S()
              }
            })]
          }), (0, r.jsxs)(o.rXV, {
            children: [C, w]
          })]
        })
      })
    },
    children: e => (0, r.jsx)(a.m, {
      asContainer: true,
      text: _.intl.string(_.t["UKOtz+"]),
      children: (0, r.jsx)(o.DUT, y(g({
        innerRef: I,
        className: h.r
      }, e), {
        children: (0, r.jsx)(o.jNK, {
          color: "currentColor",
          size: "custom",
          width: 16,
          height: 16
        })
      }))
    })
  })
}