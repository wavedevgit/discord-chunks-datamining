/** Chunk was on web.js **/
/** chunk id: 31995, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => S
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk409626 = require("./409626.js"),
  Chunk611656 = require("./611656.js"),
  Chunk52129 = require("./52129.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk760751 = require("./760751.js"),
  Chunk486020 = require("./486020.js"),
  Chunk332173 = require("./332173.jsx"),
  Chunk936755 = require("./936755.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk670567 = require("./670567.js");

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

function A(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let S = function(e) {
  let {
    gameId: t,
    channelId: a
  } = e, O = i.useRef(null), A = (0, o.bG)([h.A], () => h.A.getDetectableGame(t)), S = (0, o.bG)([_.A], () => _.A.getChannel(a)), T = null != S ? S.getGuildId() : null, C = null != A ? e => {
    (0, u.L3)(e, async () => {
      let {
        default: e
      } = await n.e("24843").then(n.bind(n, 348902));
      return t => (0, r.jsx)(e, I(v({}, t), {
        game: A,
        guildId: T
      }))
    })
  } : true, N = null != A ? (0, r.jsx)("img", {
    alt: "",
    className: s()(b.Kk, b.FP),
    src: m.Ay.getApplicationIconURL({
      id: A.id,
      icon: A.icon,
      size: 32
    })
  }) : null, w = (0, f.Ay)({
    applicationId: t,
    location: "GameMention",
    source: d.Ob.GameMention,
    trackEntryPointImpression: false,
    autoTrackExposure: false
  }), R = i.useCallback(() => {
    (0, c.mMO)(async () => {
      let {
        default: e
      } = await n.e("56466").then(n.bind(n, 188841));
      return t => (0, r.jsx)(e, v({}, t))
    })
  }, []), P = null != A ? "@game ".concat(A.name) : true;
  return (0, r.jsx)(p.A, {
    applicationId: t,
    targetElementRef: O,
    source: d.Ob.GameMention,
    children: e => {
      var n;
      return (0, r.jsx)(l.m, {
        asContainer: true,
        tag: "span",
        text: P,
        "aria-label": P,
        delay: 750,
        children: (0, r.jsxs)(g.A, I(v({
          onContextMenu: C,
          ref: O
        }, e), {
          onClick: n => {
            if (w.shouldOpenGameProfile && null != t) {
              var r;
              null == (r = e.onClick) || r.call(e, n)
            } else R()
          },
          children: [(0, r.jsx)(E.A, {
            children: N
          }), (0, r.jsx)("span", {
            className: b.UU,
            children: null != (n = null == A ? true : A.name) ? n : y.intl.string(y.t["11pdXZ"])
          })]
        }))
      })
    }
  })
}