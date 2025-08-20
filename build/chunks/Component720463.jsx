/** Chunk was on web.js **/
/** chunk id: 720463, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  E: () => P,
  WrappedBalanceWidgetEarnedOrbsCoachmarkModal: () => D
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk70097 = require("./70097.jsx"),
  Chunk751648 = require("./751648.js"),
  Chunk790542 = require("./790542.js"),
  Chunk317257 = require("./317257.js"),
  Chunk970815 = require("./970815.jsx"),
  Chunk543936 = require("./543936.js"),
  Chunk622562 = require("./622562.jsx"),
  Chunk937860 = require("./937860.jsx"),
  Chunk335346 = require("./335346.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk665923 = require("./665923.js"),
  Chunk161093 = require("./161093.js"),
  Chunk447489 = require("./447489.js"),
  Chunk484885 = require("./484885.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function A(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
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
let R = () => {
    let e = (0, Chunk442837.e7)([Chunk607070.Z], () => Chunk607070.Z.useReducedMotion);
    return (0, Chunk951288.jsx)("div", {
      className: Chunk161093.centerContent,
      children: module ? (0, Chunk951288.jsx)("img", {
        src: Chunk447489.Z,
        className: Chunk161093.orbAsset,
        alt: "Orb"
      }) : (0, Chunk951288.jsxs)(Chunk70097.Z, {
        autoPlay: true,
        loop: true,
        className: Chunk161093.orbAsset,
        children: [(0, Chunk951288.jsx)("source", {
          src: Chunk484885.Z,
          type: "video/webm"
        }), (0, Chunk951288.jsx)("img", {
          src: Chunk447489.Z,
          className: Chunk161093.orbAsset,
          alt: "Orb"
        })]
      })
    })
  },
  P = e => {
    let {
      descriptionText: t = y.intl.string(y.t["6If1Cw"]),
      onClose: n = () => {}
    } = e;
    return (0, r.jsxs)("div", {
      className: o()(v.container, O.baseCardOutline),
      children: [(0, r.jsx)(g.s, {
        onClick: n
      }), (0, r.jsx)(E.V, {
        rightOffset: 20,
        invertTail: true,
        tailSpineClassName: v.coachmarkTailSpine,
        tailTargetInnerClassName: v.coachmarkTailTargetInner
      }), (0, r.jsx)(R, {}), (0, r.jsx)("div", {
        className: v.contentContainer,
        children: (0, r.jsxs)("div", {
          className: v.textContainer,
          children: [(0, r.jsx)(l.X6q, {
            variant: "heading-md/bold",
            color: "header-primary",
            className: v.coachmarkTitle,
            children: y.intl.string(y.t["D/nzVl"])
          }), (0, r.jsx)(l.Text, {
            variant: "text-sm/medium",
            className: v.coachmarkDescription,
            children: t
          })]
        })
      })]
    })
  };

function w(e) {
  var {
    backgroundElementRef: t,
    onClickPill: n,
    onClose: a,
    onCloseCallback: o
  } = e;
  C(e, ["backgroundElementRef", "onClickPill", "onClose", "onCloseCallback"]);
  let {
    balance: s
  } = (0, f.A)(), l = i.useCallback(async () => {
    await (0, d.j2)(), await a(), o()
  }, [a, o]), c = i.useCallback(async () => {
    await l(), n()
  }, [n, l]);
  return (0, r.jsxs)(m.E9, {
    className: v.coachmarkModalContainer,
    backgroundElementRef: t,
    onGetBoundingRect: b.dG4,
    getOffsetsRelativeToElement: () => ({
      top: 0,
      right: 0
    }),
    minimumOffsets: {
      right: 12
    },
    fallbackAbsoluteOffsets: {
      top: 84,
      right: 32
    },
    children: [(0, r.jsx)(p.A4, {
      isInModalOverlay: true,
      onClick: c,
      balance: s,
      balanceWidgetMode: _.b.DEFAULT
    }), (0, r.jsx)(P, {
      onClose: l
    })]
  })
}

function D(e) {
  return (0, r.jsx)(h.x, {
    errorSource: "ORBS_EARNED_ORBS_COACHMARK_MODAL",
    children: (0, r.jsx)(w, A({}, e))
  })
}