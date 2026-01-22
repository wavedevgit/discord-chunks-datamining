/** Chunk was on 48654 **/
/** chunk id: 321565, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
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

function S(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  true === n || d.A.useReducedMotion ? e.set(t) : e.start(t)
}

function h(e) {
  let {
    onClose: t,
    items: n,
    startingIndex: r,
    enabledContentHarmTypeFlags: h,
    shouldHideMediaOptions: T = false,
    transitionState: _
  } = e, j = function(e, t) {
    if (null == e) return {};
    var n, l, i, r = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) l = n[i], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
      return r
    }
    if (r = function(e, t) {
        if (null == e) return {};
        var n, l, i = {},
          r = Object.getOwnPropertyNames(e);
        for (l = 0; l < r.length; l++) n = r[l], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) l = n[i], !(t.indexOf(l) >= 0) && Object.prototype.propertyIsEnumerable.call(e, l) && (r[l] = e[l]);
    return r
  }(e, ["onClose", "items", "startingIndex", "enabledContentHarmTypeFlags", "shouldHideMediaOptions", "transitionState"]), [A, v] = i.useState(null != r ? r : 0), [C, I] = i.useState(false), [x, N] = (0, s.zhh)(() => ({
    scale: d.A.useReducedMotion ? 1 : .9,
    x: 0,
    y: 0,
    config: {
      friction: 30,
      tension: 300
    }
  })), D = i.useRef(null);
  i.useEffect(() => {
    if (null != t) return p._.subscribe(y.jej.MEDIA_MODAL_CLOSE, t), () => {
      p._.unsubscribe(y.jej.MEDIA_MODAL_CLOSE, t)
    }
  }, [t]), i.useEffect(() => {
    var e, t;
    _ === s.ip4.ENTERING && S(x.scale, 1), _ === s.ip4.ENTERED && (u.A.disable(), u.A.enableTemp(c.w)), _ === s.ip4.HIDDEN && (S(x.scale, .9), u.A.disable(), u.A.enableTemp(c.b)), _ === s.ip4.EXITING && S(x.scale, .9);
    let n = () => {
        u.A.disable(), _ === s.ip4.ENTERED ? u.A.enableTemp(c.w) : u.A.enableTemp(c.b)
      },
      l = () => {
        u.A.disableTemp()
      },
      i = null == (t = D.current) || null == (e = t.ownerDocument) ? true : e.defaultView;
    return null == i || i.addEventListener("focus", n), null == i || i.addEventListener("blur", l), () => {
      null == i || i.removeEventListener("focus", n), null == i || i.removeEventListener("blur", l), u.A.disableTemp()
    }
  }, [_, x]);
  let R = i.useCallback(e => {
      v(e), (0, f.Yq)(f.NJ.SELECTED_ITEM_CHANGE)
    }, []),
    P = i.useMemo(() => ({
      scale: x.scale,
      x: x.x,
      y: x.y,
      setScale(e, t) {
        S(x.scale, e, null == t ? true : t.immediate)
      },
      setOffset(e, t, n) {
        S(x.x, e, null == n ? true : n.immediate), S(x.y, t, null == n ? true : n.immediate)
      },
      zoomed: C,
      setZoomed(e) {
        I(e), S(x.scale, e ? 2.5 : 1), e || (S(x.x, 0), S(x.y, 0))
      }
    }), [C, x]);
  return (0, l.jsx)(s.NPJ, {
    theme: y.NJ8.MIDNIGHT,
    children: e => {
      var i, r;
      return (0, l.jsx)(s.EOs, (i = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            l = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), l.forEach(function(t) {
            var l;
            l = n[t], t in e ? Object.defineProperty(e, t, {
              value: l,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = l
          })
        }
        return e
      }({
        "data-migration-pending": true,
        hideShadow: true,
        className: a()(g.O, e),
        transitionState: _
      }, j), r = r = {
        size: s.rIJ.DYNAMIC,
        animation: o.WM.SUBTLE,
        fullscreenOnMobile: false,
        onClick: t,
        "aria-label": E.intl.string(E.t.AMTX3j),
        parentComponent: "MediaViewerModal",
        children: (0, l.jsxs)(b.f.Provider, {
          value: P,
          children: [(0, l.jsx)(m.A, {
            item: n[A],
            hideMediaOptions: T,
            onClose: t
          }), (0, l.jsx)("div", {
            style: {
              display: "none"
            },
            ref: D
          }), (0, l.jsx)(O.Ay, {
            items: n,
            startIndex: A,
            onIndexChange: R,
            enabledContentHarmTypeFlags: h,
            shouldHideMediaOptions: T
          })]
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          n.push.apply(n, l)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(r, e))
      }), i))
    }
  })
}