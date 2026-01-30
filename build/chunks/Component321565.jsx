/** Chunk was on 48654 **/
/** chunk id: 321565, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
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
  Chunk700331 = require("./700331.js"),
  Chunk454290 = require("./454290.js"),
  Chunk369254 = require("./369254.jsx"),
  Chunk847816 = require("./847816.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk285953 = require("./285953.js");

function _(e, t) {
  let n = arguments.length > 2 && true !== arguments[2] && arguments[2];
  true === n || d.A.useReducedMotion ? e.set(t) : e.start(t)
}

function h(e) {
  let {
    onClose: t,
    items: n,
    startingIndex: l,
    enabledContentHarmTypeFlags: h,
    shouldHideMediaOptions: S = false,
    transitionState: A
  } = e, j = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["onClose", "items", "startingIndex", "enabledContentHarmTypeFlags", "shouldHideMediaOptions", "transitionState"]), [v, T] = i.useState(null != l ? l : 0), [w, P] = i.useState(false), [C, D] = (0, s.zhh)(() => ({
    scale: d.A.useReducedMotion ? 1 : .9,
    x: 0,
    y: 0,
    config: {
      friction: 30,
      tension: 300
    }
  })), I = i.useRef(null);
  i.useEffect(() => {
    if (null != t) return p._.subscribe(y.jej.MEDIA_MODAL_CLOSE, t), () => {
      p._.unsubscribe(y.jej.MEDIA_MODAL_CLOSE, t)
    }
  }, [t]), i.useEffect(() => {
    var e, t;
    A === s.ip4.ENTERING && _(C.scale, 1), A === s.ip4.ENTERED && (u.A.disable(), u.A.enableTemp(c.w)), A === s.ip4.HIDDEN && (_(C.scale, .9), u.A.disable(), u.A.enableTemp(c.b)), A === s.ip4.EXITING && _(C.scale, .9);
    let n = () => {
        u.A.disable(), A === s.ip4.ENTERED ? u.A.enableTemp(c.w) : u.A.enableTemp(c.b)
      },
      r = () => {
        u.A.disableTemp()
      },
      i = null == (t = I.current) || null == (e = t.ownerDocument) ? true : e.defaultView;
    return null == i || i.addEventListener("focus", n), null == i || i.addEventListener("blur", r), () => {
      null == i || i.removeEventListener("focus", n), null == i || i.removeEventListener("blur", r), u.A.disableTemp()
    }
  }, [A, C]);
  let R = i.useCallback(e => {
      T(e), f.l.markActionPerformed(f.N.SELECTED_ITEM_CHANGE)
    }, []),
    N = i.useMemo(() => ({
      scale: C.scale,
      x: C.x,
      y: C.y,
      setScale(e, t) {
        _(C.scale, e, null == t ? true : t.immediate)
      },
      setOffset(e, t, n) {
        _(C.x, e, null == n ? true : n.immediate), _(C.y, t, null == n ? true : n.immediate)
      },
      zoomed: w,
      setZoomed(e) {
        P(e), _(C.scale, e ? 2.5 : 1), e || (_(C.x, 0), _(C.y, 0))
      }
    }), [w, C]);
  return (0, r.jsx)(s.NPJ, {
    theme: y.NJ8.MIDNIGHT,
    children: e => {
      var i, l;
      return (0, r.jsx)(s.EOs, (i = function(e) {
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
        className: o()(E.O, e),
        transitionState: A
      }, j), l = l = {
        size: s.rIJ.DYNAMIC,
        animation: a.WM.SUBTLE,
        fullscreenOnMobile: false,
        onClick: t,
        "aria-label": g.intl.string(g.t.AMTX3j),
        parentComponent: "MediaViewerModal",
        children: (0, r.jsxs)(m.f.Provider, {
          value: N,
          children: [(0, r.jsx)(b.A, {
            item: n[v],
            hideMediaOptions: S,
            onClose: t
          }), (0, r.jsx)("div", {
            style: {
              display: "none"
            },
            ref: I
          }), (0, r.jsx)(O.Ay, {
            items: n,
            startIndex: v,
            onIndexChange: R,
            enabledContentHarmTypeFlags: h,
            shouldHideMediaOptions: S
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