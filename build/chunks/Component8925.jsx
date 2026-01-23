/** Chunk was on web.js **/
/** chunk id: 8925, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => S,
  ME: () => O,
  c5: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk101555 = require("./101555.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk570287 = require("./570287.js"),
  Chunk679492 = require("./679492.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk55837 = require("./55837.js");

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

function y(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = 2700,
  v = "> -# *",
  A = {
    [Chunk518477.dS.AVATAR]: () => h.intl.string(h.t["fEUP/i"]),
    [Chunk518477.dS.STATUS]: () => h.intl.string(h.t.TKdBC8),
    [Chunk518477.dS.ACTIVITY]: () => h.intl.string(h.t.bSe71F)
  },
  I = {
    [Chunk518477.dS.AVATAR]: () => h.intl.string(h.t.xvN0fV),
    [Chunk518477.dS.STATUS]: () => h.intl.string(h.t["C/vzS7"]),
    [Chunk518477.dS.ACTIVITY]: () => h.intl.string(h.t.ObfsSj)
  };

function S(e) {
  let {
    user: t,
    sourceType: n,
    isVisible: a,
    isExpandable: g,
    interactionSourceId: y,
    targetRef: O,
    onAction: v,
    renderMoreButtonPopout: S
  } = e, T = i.useRef(null), C = (0, o.bG)([d.default], () => d.default.getId() === t.id), N = (0, f.A)(t.id), {
    onInteraction: R,
    onInteractionPopoutTargetRefChange: w
  } = (0, p.Pq)();
  if (t.bot || C || !N) return null;
  let P = () => {
      w(O), n === _.dS.AVATAR ? v({
        action: "PRESS_REACT_AVATAR"
      }) : n === _.dS.STATUS ? v({
        action: "PRESS_REACT_CUSTOM_STATUS"
      }) : v({
        action: "PRESS_REACT_ACTIVITY"
      }), null == R || R({
        interactionType: _.AQ.REACT,
        interactionSource: n,
        interactionSourceId: y
      })
    },
    D = () => {
      w(O), n === _.dS.AVATAR ? v({
        action: "PRESS_REPLY_AVATAR"
      }) : n === _.dS.STATUS ? v({
        action: "PRESS_REPLY_CUSTOM_STATUS"
      }) : v({
        action: "PRESS_REPLY_ACTIVITY"
      }), null == R || R({
        interactionType: _.AQ.REPLY,
        interactionSource: n,
        interactionSourceId: y
      })
    };
  return (0, r.jsxs)(u.Ay, {
    className: s()(m.oO, {
      [m.RK]: a,
      [m.lu]: g,
      [m.U7]: n === _.dS.STATUS,
      [m.nL]: n === _.dS.AVATAR,
      [m.bt]: n === _.dS.ACTIVITY
    }),
    children: [(0, r.jsx)(l.m, {
      asContainer: true,
      text: h.intl.string(h.t.nhaI4b),
      shouldShow: a,
      delay: 0,
      ariaHidden: true,
      children: (0, r.jsx)(u.$n, {
        onClick: P,
        className: m.x6,
        "aria-label": A[n](),
        "aria-haspopup": "dialog",
        children: (0, r.jsx)(c.nm2, {
          size: "xs",
          className: m.Kk
        })
      })
    }), (0, r.jsx)(l.m, {
      asContainer: true,
      text: h.intl.string(h.t.RmDYKK),
      shouldShow: a,
      delay: 0,
      ariaHidden: true,
      children: (0, r.jsx)(u.$n, {
        onClick: D,
        className: m.x6,
        "aria-label": I[n](),
        "aria-haspopup": "dialog",
        children: (0, r.jsx)(c.W4J, {
          size: "xs",
          className: m.Kk
        })
      })
    }), null == S ? true : S(e => {
      let t = () => {
        var t;
        w(T), null == (t = e.onClick) || t.call(e)
      };
      return (0, r.jsx)(l.m, {
        asContainer: true,
        text: h.intl.string(h.t["UKOtz+"]),
        shouldShow: a,
        delay: 0,
        ariaHidden: true,
        children: (0, r.jsx)(u.$n, b(E({
          ref: T
        }, e), {
          onClick: t,
          className: m.x6,
          "aria-label": h.intl.string(h.t["UKOtz+"]),
          children: (0, r.jsx)(c.jNK, {
            size: "xs",
            className: m.Kk
          })
        }))
      })
    })]
  })
}