/** Chunk was on 19370 **/
/** chunk id: 97594, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk466377 = require("./466377.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk376641 = require("./376641.js"),
  Chunk714338 = require("./714338.js"),
  Chunk607070 = require("./607070.js"),
  Chunk585483 = require("./585483.js"),
  Chunk254109 = require("./254109.js"),
  Chunk212459 = require("./212459.js"),
  Chunk730606 = require("./730606.jsx"),
  Chunk860153 = require("./860153.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk105969 = require("./105969.js");

function h(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  true === n || d.Z.useReducedMotion ? e.set(t) : e.start(t)
}

function S(e) {
  var {
    onClose: t,
    items: n,
    startingIndex: i,
    enabledContentHarmTypeFlags: S,
    shouldHideMediaOptions: v = false,
    transitionState: T
  } = e, j = function(e, t) {
    if (null == e) return {};
    var n, a, r = function(e, t) {
      if (null == e) return {};
      var n, a, r = {},
        i = Object.keys(e);
      for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["onClose", "items", "startingIndex", "enabledContentHarmTypeFlags", "shouldHideMediaOptions", "transitionState"]);
  let [C, E] = r.useState(null != i ? i : 0), [x, P] = r.useState(false), [M, w] = (0, c.q_F)(() => ({
    scale: d.Z.useReducedMotion ? 1 : .9,
    x: 0,
    y: 0,
    config: {
      friction: 30,
      tension: 300
    }
  })), D = r.useRef(null);
  r.useEffect(() => {
    if (null != t) return p.S.subscribe(b.CkL.MEDIA_MODAL_CLOSE, t), () => {
      p.S.unsubscribe(b.CkL.MEDIA_MODAL_CLOSE, t)
    }
  }, [t]), r.useEffect(() => {
    var e, t;
    T === c.Dvm.ENTERING && h(M.scale, 1), T === c.Dvm.ENTERED && (u.Z.disable(), u.Z.enableTemp(s.P)), T === c.Dvm.HIDDEN && (h(M.scale, .9), u.Z.disable(), u.Z.enableTemp(s.v)), T === c.Dvm.EXITING && h(M.scale, .9);
    let n = () => {
        u.Z.disable(), T === c.Dvm.ENTERED ? u.Z.enableTemp(s.P) : u.Z.enableTemp(s.v)
      },
      a = () => {
        u.Z.disableTemp()
      },
      r = null == (t = D.current) || null == (e = t.ownerDocument) ? true : e.defaultView;
    return null == r || r.addEventListener("focus", n), null == r || r.addEventListener("blur", a), () => {
      null == r || r.removeEventListener("focus", n), null == r || r.removeEventListener("blur", a), u.Z.disableTemp()
    }
  }, [T, M]);
  let I = r.useCallback(e => {
      E(e), (0, m.yg)(m.uG.SELECTED_ITEM_CHANGE)
    }, []),
    A = r.useMemo(() => ({
      scale: M.scale,
      x: M.x,
      y: M.y,
      setScale(e, t) {
        h(M.scale, e, null == t ? true : t.immediate)
      },
      setOffset(e, t, n) {
        h(M.x, e, null == n ? true : n.immediate), h(M.y, t, null == n ? true : n.immediate)
      },
      zoomed: x,
      setZoomed(e) {
        P(e), h(M.scale, e ? 2.5 : 1), e || (h(M.x, 0), h(M.y, 0))
      }
    }), [x, M]);
  return (0, a.jsx)(c.f6W, {
    theme: b.BRd.MIDNIGHT,
    children: e => {
      var r, i;
      return (0, a.jsx)(c.Y0X, (r = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), a.forEach(function(t) {
            var a;
            a = n[t], t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = a
          })
        }
        return e
      }({
        "data-migration-pending": true,
        hideShadow: true,
        className: o()(_.carouselModal, e),
        transitionState: T
      }, j), i = i = {
        size: c.CgR.DYNAMIC,
        animation: l.fM.SUBTLE,
        fullscreenOnMobile: false,
        onClick: t,
        "aria-label": O.intl.string(O.t.AMTX3t),
        parentComponent: "MediaViewerModal",
        children: (0, a.jsxs)(g.z.Provider, {
          value: A,
          children: [(0, a.jsx)(f.Z, {
            item: n[C],
            hideMediaOptions: v,
            onClose: t
          }), (0, a.jsx)("div", {
            style: {
              display: "none"
            },
            ref: D
          }), (0, a.jsx)(y.ZP, {
            items: n,
            startIndex: C,
            onIndexChange: I,
            enabledContentHarmTypeFlags: S,
            shouldHideMediaOptions: v
          })]
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n.push.apply(n, a)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
      }), r))
    }
  })
}