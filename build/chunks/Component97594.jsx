/** Chunk was on 39476 **/
/** chunk id: 97594, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk141983 = require("./141983.js");

function g(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  true === n || d.Z.useReducedMotion ? e.set(t) : e.start(t)
}

function v(e) {
  var {
    onClose: t,
    items: n,
    startingIndex: o,
    enabledContentHarmTypeFlags: v,
    shouldHideMediaOptions: S = false,
    transitionState: j
  } = e, x = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        o = Object.keys(e);
      for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["onClose", "items", "startingIndex", "enabledContentHarmTypeFlags", "shouldHideMediaOptions", "transitionState"]);
  let [T, C] = i.useState(null != o ? o : 0), [P, _] = i.useState(false), [w, L] = (0, s.q_F)(() => ({
    scale: d.Z.useReducedMotion ? 1 : .9,
    x: 0,
    y: 0,
    config: {
      friction: 30,
      tension: 300
    }
  })), M = i.useRef(null);
  i.useEffect(() => {
    if (null != t) return p.S.subscribe(O.CkL.MEDIA_MODAL_CLOSE, t), () => {
      p.S.unsubscribe(O.CkL.MEDIA_MODAL_CLOSE, t)
    }
  }, [t]), i.useEffect(() => {
    var e, t;
    j === s.Dvm.ENTERING && g(w.scale, 1), j === s.Dvm.ENTERED && (u.Z.disable(), u.Z.enableTemp(c.P)), j === s.Dvm.HIDDEN && (g(w.scale, .9), u.Z.disable(), u.Z.enableTemp(c.v)), j === s.Dvm.EXITING && g(w.scale, .9);
    let n = () => {
        u.Z.disable(), j === s.Dvm.ENTERED ? u.Z.enableTemp(c.P) : u.Z.enableTemp(c.v)
      },
      r = () => {
        u.Z.disableTemp()
      },
      i = null == (t = M.current) || null == (e = t.ownerDocument) ? true : e.defaultView;
    return null == i || i.addEventListener("focus", n), null == i || i.addEventListener("blur", r), () => {
      null == i || i.removeEventListener("focus", n), null == i || i.removeEventListener("blur", r), u.Z.disableTemp()
    }
  }, [j, w]);
  let D = i.useCallback(e => {
      C(e), (0, m.yg)(m.uG.SELECTED_ITEM_CHANGE)
    }, []),
    I = i.useMemo(() => ({
      scale: w.scale,
      x: w.x,
      y: w.y,
      setScale(e, t) {
        g(w.scale, e, null == t ? true : t.immediate)
      },
      setOffset(e, t, n) {
        g(w.x, e, null == n ? true : n.immediate), g(w.y, t, null == n ? true : n.immediate)
      },
      zoomed: P,
      setZoomed(e) {
        _(e), g(w.scale, e ? 2.5 : 1), e || (g(w.x, 0), g(w.y, 0))
      }
    }), [P, w]);
  return (0, r.jsx)(s.f6W, {
    theme: O.BRd.MIDNIGHT,
    children: e => {
      var i, o;
      return (0, r.jsx)(s.Y0X, (i = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        "data-migration-pending": true,
        hideShadow: true,
        className: l()(E.carouselModal, e),
        transitionState: j
      }, x), o = o = {
        size: s.CgR.DYNAMIC,
        animation: a.fM.SUBTLE,
        fullscreenOnMobile: false,
        onClick: t,
        "aria-label": h.intl.string(h.t.AMTX3t),
        parentComponent: "MediaViewerModal",
        children: (0, r.jsxs)(f.z.Provider, {
          value: I,
          children: [(0, r.jsx)(b.Z, {
            item: n[T],
            hideMediaOptions: S,
            onClose: t
          }), (0, r.jsx)("div", {
            style: {
              display: "none"
            },
            ref: M
          }), (0, r.jsx)(y.ZP, {
            items: n,
            startIndex: T,
            onIndexChange: D,
            enabledContentHarmTypeFlags: v,
            shouldHideMediaOptions: S
          })]
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e))
      }), i))
    }
  })
}