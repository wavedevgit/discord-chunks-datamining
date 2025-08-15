/** Chunk was on 82081 **/
/** chunk id: 720463, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  E: () => P,
  WrappedBalanceWidgetEarnedOrbsCoachmarkModal: () => T
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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
let k = () => {
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
      descriptionText: t = j.intl.string(j.t["6If1Cw"]),
      onClose: r = () => {}
    } = e;
    return (0, n.jsxs)("div", {
      className: i()(v.container, x.baseCardOutline),
      children: [(0, n.jsx)(g.s, {
        onClick: r
      }), (0, n.jsx)(_.V, {
        rightOffset: 20,
        invertTail: true,
        tailSpineClassName: v.coachmarkTailSpine,
        tailTargetInnerClassName: v.coachmarkTailTargetInner
      }), (0, n.jsx)(k, {}), (0, n.jsx)("div", {
        className: v.contentContainer,
        children: (0, n.jsxs)("div", {
          className: v.textContainer,
          children: [(0, n.jsx)(s.X6q, {
            variant: "heading-md/bold",
            color: "header-primary",
            className: v.coachmarkTitle,
            children: j.intl.string(j.t["D/nzVl"])
          }), (0, n.jsx)(s.Text, {
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
    onClickPill: r,
    onClose: o,
    onCloseCallback: i
  } = e;
  ! function(e, t) {
    if (null != e) {
      var r, n, a = function(e, t) {
        if (null == e) return {};
        var r, n, a = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
      }
    }
  }(e, ["backgroundElementRef", "onClickPill", "onClose", "onCloseCallback"]);
  let {
    balance: c
  } = (0, d.A)(), s = a.useCallback(async () => {
    await (0, u.j2)(), await o(), i()
  }, [o, i]), l = a.useCallback(async () => {
    await s(), r()
  }, [r, s]);
  return (0, n.jsxs)(h.E9, {
    className: v.coachmarkModalContainer,
    backgroundElementRef: t,
    onGetBoundingRect: O.dG4,
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
    children: [(0, n.jsx)(m.A4, {
      isInModalOverlay: true,
      onClick: l,
      balance: c,
      balanceWidgetMode: p.b.DEFAULT
    }), (0, n.jsx)(P, {
      onClose: s
    })]
  })
}

function T(e) {
  return (0, n.jsx)(f.x, {
    errorSource: "ORBS_EARNED_ORBS_COACHMARK_MODAL",
    children: (0, n.jsx)(w, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
          n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
          return Object.getOwnPropertyDescriptor(r, e).enumerable
        }))), n.forEach(function(t) {
          var n;
          n = r[t], t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = n
        })
      }
      return e
    }({}, e))
  })
}