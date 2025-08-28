/** Chunk was on 39476 **/
/** chunk id: 97594, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
    startingIndex: l,
    enabledContentHarmTypeFlags: S,
    shouldHideMediaOptions: _ = false,
    transitionState: v
  } = e, T = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["onClose", "items", "startingIndex", "enabledContentHarmTypeFlags", "shouldHideMediaOptions", "transitionState"]);
  let [j, C] = i.useState(null != l ? l : 0), [D, P] = i.useState(false), [x, w] = (0, s.q_F)(() => ({
    scale: d.Z.useReducedMotion ? 1 : .9,
    x: 0,
    y: 0,
    config: {
      friction: 30,
      tension: 300
    }
  })), L = i.useRef(null);
  i.useEffect(() => {
    if (null != t) return p.S.subscribe(b.CkL.MEDIA_MODAL_CLOSE, t), () => {
      p.S.unsubscribe(b.CkL.MEDIA_MODAL_CLOSE, t)
    }
  }, [t]), i.useEffect(() => {
    var e, t;
    v === s.Dvm.ENTERING && h(x.scale, 1), v === s.Dvm.ENTERED && (u.Z.disable(), u.Z.enableTemp(c.P)), v === s.Dvm.HIDDEN && (h(x.scale, .9), u.Z.disable(), u.Z.enableTemp(c.v)), v === s.Dvm.EXITING && h(x.scale, .9);
    let n = () => {
        u.Z.disable(), v === s.Dvm.ENTERED ? u.Z.enableTemp(c.P) : u.Z.enableTemp(c.v)
      },
      r = () => {
        u.Z.disableTemp()
      },
      i = null == (t = L.current) || null == (e = t.ownerDocument) ? true : e.defaultView;
    return null == i || i.addEventListener("focus", n), null == i || i.addEventListener("blur", r), () => {
      null == i || i.removeEventListener("focus", n), null == i || i.removeEventListener("blur", r), u.Z.disableTemp()
    }
  }, [v, x]);
  let R = i.useCallback(e => {
      C(e), (0, f.yg)(f.uG.SELECTED_ITEM_CHANGE)
    }, []),
    M = i.useMemo(() => ({
      scale: x.scale,
      x: x.x,
      y: x.y,
      setScale(e, t) {
        h(x.scale, e, null == t ? true : t.immediate)
      },
      setOffset(e, t, n) {
        h(x.x, e, null == n ? true : n.immediate), h(x.y, t, null == n ? true : n.immediate)
      },
      zoomed: D,
      setZoomed(e) {
        P(e), h(x.scale, e ? 2.5 : 1), e || (h(x.x, 0), h(x.y, 0))
      }
    }), [D, x]);
  return (0, r.jsx)(s.f6W, {
    theme: b.BRd.MIDNIGHT,
    children: e => {
      var i, l;
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
        className: o()(E.carouselModal, e),
        transitionState: v
      }, T), l = l = {
        size: s.CgR.DYNAMIC,
        animation: a.fM.SUBTLE,
        fullscreenOnMobile: false,
        onClick: t,
        "aria-label": g.intl.string(g.t.AMTX3t),
        parentComponent: "MediaViewerModal",
        children: (0, r.jsxs)(y.z.Provider, {
          value: M,
          children: [(0, r.jsx)(O.Z, {
            item: n[j],
            hideMediaOptions: _,
            onClose: t
          }), (0, r.jsx)("div", {
            style: {
              display: "none"
            },
            ref: L
          }), (0, r.jsx)(m.ZP, {
            items: n,
            startIndex: j,
            onIndexChange: R,
            enabledContentHarmTypeFlags: S,
            shouldHideMediaOptions: _
          })]
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(l, e))
      }), i))
    }
  })
}