/** Chunk was on 48654 **/
/** chunk id: 321565, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk935462 = require("./935462.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk707685 = require("./707685.js"),
  Chunk775121 = require("./775121.js"),
  Chunk775602 = require("./775602.js"),
  Chunk203982 = require("./203982.js"),
  Chunk793367 = require("./793367.js"),
  Chunk454290 = require("./454290.js"),
  Chunk369254 = require("./369254.jsx"),
  Chunk847816 = require("./847816.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk285953 = require("./285953.js");

function h(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  true === n || d.A.useReducedMotion ? e.set(t) : e.start(t)
}

function S(e) {
  let {
    onClose: t,
    items: n,
    startingIndex: r,
    enabledContentHarmTypeFlags: S,
    shouldHideMediaOptions: _ = false,
    transitionState: T
  } = e, A = function(e, t) {
    if (null == e) return {};
    var n, i, l, r = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) i = n[l], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
      return r
    }
    if (r = function(e, t) {
        if (null == e) return {};
        var n, i, l = {},
          r = Object.getOwnPropertyNames(e);
        for (i = 0; i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) i = n[l], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
    return r
  }(e, ["onClose", "items", "startingIndex", "enabledContentHarmTypeFlags", "shouldHideMediaOptions", "transitionState"]), [j, v] = l.useState(null != r ? r : 0), [C, I] = l.useState(false), [N, x] = (0, s.zhh)(() => ({
    scale: d.A.useReducedMotion ? 1 : .9,
    x: 0,
    y: 0,
    config: {
      friction: 30,
      tension: 300
    }
  })), D = l.useRef(null);
  l.useEffect(() => {
    if (null != t) return p._.subscribe(b.jej.MEDIA_MODAL_CLOSE, t), () => {
      p._.unsubscribe(b.jej.MEDIA_MODAL_CLOSE, t)
    }
  }, [t]), l.useEffect(() => {
    var e, t;
    T === s.ip4.ENTERING && h(N.scale, 1), T === s.ip4.ENTERED && (u.A.disable(), u.A.enableTemp(c.w)), T === s.ip4.HIDDEN && (h(N.scale, .9), u.A.disable(), u.A.enableTemp(c.b)), T === s.ip4.EXITING && h(N.scale, .9);
    let n = () => {
        u.A.disable(), T === s.ip4.ENTERED ? u.A.enableTemp(c.w) : u.A.enableTemp(c.b)
      },
      i = () => {
        u.A.disableTemp()
      },
      l = null == (t = D.current) || null == (e = t.ownerDocument) ? true : e.defaultView;
    return null == l || l.addEventListener("focus", n), null == l || l.addEventListener("blur", i), () => {
      null == l || l.removeEventListener("focus", n), null == l || l.removeEventListener("blur", i), u.A.disableTemp()
    }
  }, [T, N]);
  let R = l.useCallback(e => {
      v(e), (0, f.Yq)(f.NJ.SELECTED_ITEM_CHANGE)
    }, []),
    P = l.useMemo(() => ({
      scale: N.scale,
      x: N.x,
      y: N.y,
      setScale(e, t) {
        h(N.scale, e, null == t ? true : t.immediate)
      },
      setOffset(e, t, n) {
        h(N.x, e, null == n ? true : n.immediate), h(N.y, t, null == n ? true : n.immediate)
      },
      zoomed: C,
      setZoomed(e) {
        I(e), h(N.scale, e ? 2.5 : 1), e || (h(N.x, 0), h(N.y, 0))
      }
    }), [C, N]);
  return (0, i.jsx)(s.NPJ, {
    theme: b.NJ8.MIDNIGHT,
    children: e => {
      var l, r;
      return (0, i.jsx)(s.EOs, (l = function(e) {
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
        className: o()(g.O, e),
        transitionState: T
      }, A), r = r = {
        size: s.rIJ.DYNAMIC,
        animation: a.WM.SUBTLE,
        fullscreenOnMobile: false,
        onClick: t,
        "aria-label": E.intl.string(E.t.AMTX3j),
        parentComponent: "MediaViewerModal",
        children: (0, i.jsxs)(m.f.Provider, {
          value: P,
          children: [(0, i.jsx)(y.A, {
            item: n[j],
            hideMediaOptions: _,
            onClose: t
          }), (0, i.jsx)("div", {
            style: {
              display: "none"
            },
            ref: D
          }), (0, i.jsx)(O.Ay, {
            items: n,
            startIndex: j,
            onIndexChange: R,
            enabledContentHarmTypeFlags: S,
            shouldHideMediaOptions: _
          })]
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e))
      }), l))
    }
  })
}