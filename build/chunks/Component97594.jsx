/** Chunk was on 39476 **/
/** chunk id: 97594, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
    var n, i, r = function(e, t) {
      if (null == e) return {};
      var n, i, r = {},
        l = Object.keys(e);
      for (i = 0; i < l.length; i++) n = l[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
      return r
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (i = 0; i < l.length; i++) n = l[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
    }
    return r
  }(e, ["onClose", "items", "startingIndex", "enabledContentHarmTypeFlags", "shouldHideMediaOptions", "transitionState"]);
  let [j, C] = r.useState(null != l ? l : 0), [D, x] = r.useState(false), [P, L] = (0, s.q_F)(() => ({
    scale: d.Z.useReducedMotion ? 1 : .9,
    x: 0,
    y: 0,
    config: {
      friction: 30,
      tension: 300
    }
  })), R = r.useRef(null);
  r.useEffect(() => {
    if (null != t) return f.S.subscribe(b.CkL.MEDIA_MODAL_CLOSE, t), () => {
      f.S.unsubscribe(b.CkL.MEDIA_MODAL_CLOSE, t)
    }
  }, [t]), r.useEffect(() => {
    var e, t;
    v === s.Dvm.ENTERING && h(P.scale, 1), v === s.Dvm.ENTERED && (u.Z.disable(), u.Z.enableTemp(c.P)), v === s.Dvm.HIDDEN && (h(P.scale, .9), u.Z.disable(), u.Z.enableTemp(c.v)), v === s.Dvm.EXITING && h(P.scale, .9);
    let n = () => {
        u.Z.disable(), v === s.Dvm.ENTERED ? u.Z.enableTemp(c.P) : u.Z.enableTemp(c.v)
      },
      i = () => {
        u.Z.disableTemp()
      },
      r = null == (t = R.current) || null == (e = t.ownerDocument) ? true : e.defaultView;
    return null == r || r.addEventListener("focus", n), null == r || r.addEventListener("blur", i), () => {
      null == r || r.removeEventListener("focus", n), null == r || r.removeEventListener("blur", i), u.Z.disableTemp()
    }
  }, [v, P]);
  let M = r.useCallback(e => {
      C(e), (0, p.yg)(p.uG.SELECTED_ITEM_CHANGE)
    }, []),
    I = r.useMemo(() => ({
      scale: P.scale,
      x: P.x,
      y: P.y,
      setScale(e, t) {
        h(P.scale, e, null == t ? true : t.immediate)
      },
      setOffset(e, t, n) {
        h(P.x, e, null == n ? true : n.immediate), h(P.y, t, null == n ? true : n.immediate)
      },
      zoomed: D,
      setZoomed(e) {
        x(e), h(P.scale, e ? 2.5 : 1), e || (h(P.x, 0), h(P.y, 0))
      }
    }), [D, P]);
  return (0, i.jsx)(s.f6W, {
    theme: b.BRd.MIDNIGHT,
    children: e => {
      var r, l;
      return (0, i.jsx)(s.Y0X, (r = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            var i;
            i = n[t], t in e ? Object.defineProperty(e, t, {
              value: i,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = i
          })
        }
        return e
      }({
        "data-migration-pending": true,
        hideShadow: true,
        className: a()(g.carouselModal, e),
        transitionState: v
      }, T), l = l = {
        size: s.CgR.DYNAMIC,
        animation: o.fM.SUBTLE,
        fullscreenOnMobile: false,
        onClick: t,
        "aria-label": E.intl.string(E.t.AMTX3t),
        parentComponent: "MediaViewerModal",
        children: (0, i.jsxs)(m.z.Provider, {
          value: I,
          children: [(0, i.jsx)(O.Z, {
            item: n[j],
            hideMediaOptions: _,
            onClose: t
          }), (0, i.jsx)("div", {
            style: {
              display: "none"
            },
            ref: R
          }), (0, i.jsx)(y.ZP, {
            items: n,
            startIndex: j,
            onIndexChange: M,
            enabledContentHarmTypeFlags: S,
            shouldHideMediaOptions: _
          })]
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(l)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(l, e))
      }), r))
    }
  })
}