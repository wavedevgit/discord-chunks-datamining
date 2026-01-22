/** Chunk was on 97492 **/
/** chunk id: 60504, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk453903 = require("./453903.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk421773 = require("./421773.js"),
  Chunk650583 = require("./650583.js"),
  Chunk342910 = require("./342910.js");

function u(e) {
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
}

function d(e) {
  let {
    renderPopout: t,
    onMouseEnter: n,
    onMouseLeave: i,
    closePopout: a,
    isHovered: s
  } = e, o = function(e, t) {
    if (null == e) return {};
    var n, r, l, i = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
      return i
    }
    if (i = function(e, t) {
        if (null == e) return {};
        var n, r, l = {},
          i = Object.getOwnPropertyNames(e);
        for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
        return l
      }(e, t), Object.getOwnPropertySymbols)
      for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }(e, ["renderPopout", "onMouseEnter", "onMouseLeave", "closePopout", "isHovered"]);
  return l.useEffect(() => {
    s || a()
  }, [a, s]), (0, r.jsx)("div", {
    onMouseEnter: n,
    onMouseLeave: i,
    children: t(u({
      closePopout: a
    }, o))
  })
}
let f = Chunk64700.forwardRef(function(e, t) {
  let {
    renderPopout: n,
    popoutTargetRef: f,
    children: p,
    align: h = "left",
    isPopoutBlocked: b,
    onPopoutOpen: g,
    onPopoutClose: m,
    onRequestClose: A
  } = e, [y, O] = l.useState(false), {
    isHovered: j,
    setIsHovered: v,
    onMouseEnter: x,
    onMouseLeave: E,
    cancelTimers: _
  } = (0, s.A)(200, 300);

  function C(e) {
    "focus" === e.type || y || x()
  }

  function S() {
    y || E()
  }

  function I(e) {
    _(), O(!y), y ? null == m || m() : null == g || g(), (!j || y) && e()
  }
  l.useImperativeHandle(t, () => ({
    hidePopout() {
      v(false), O(false)
    }
  }), [v, O]);
  let N = j && !b || y;
  return (0, r.jsx)(a.YNO, {
    targetElementRef: f,
    animation: a.YNO.Animation.FADE,
    shouldShow: N,
    animationPosition: "top",
    position: "top",
    align: h,
    spacing: 16,
    onRequestClose: () => {
      if ((null == A ? true : A()) === i.o) return i.o;
      v(false), O(false), null == m || m()
    },
    renderPopout: e => (0, r.jsx)(d, u({
      isHovered: N,
      onFocus: () => O(true),
      onMouseEnter: x,
      onMouseLeave: S,
      renderPopout: n
    }, e)),
    children: e => {
      let {
        onClick: t,
        onKeyDown: n
      } = e;
      return (0, r.jsx)(r.Fragment, {
        children: p({
          onClick: e => I(() => t(e)),
          onKeyDown: e => {
            (e.key === o.dh.ENTER || e.key === o.dh.SPACE) && I(() => n(e))
          },
          className: c.g,
          onMouseEnter: C,
          onMouseLeave: S,
          isActive: y
        })
      })
    }
  })
})