/** Chunk was on 81985 **/
/** chunk id: 304388, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk930295 = require("./930295.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk579185 = require("./579185.js"),
  Chunk295907 = require("./295907.js"),
  Chunk674463 = require("./674463.js");

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
  var {
    renderPopout: t,
    onMouseEnter: n,
    onMouseLeave: l,
    closePopout: a,
    isHovered: o
  } = e, s = function(e, t) {
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
  }(e, ["renderPopout", "onMouseEnter", "onMouseLeave", "closePopout", "isHovered"]);
  return i.useEffect(() => {
    o || a()
  }, [a, o]), (0, r.jsx)("div", {
    onMouseEnter: n,
    onMouseLeave: l,
    children: t(u({
      closePopout: a
    }, s))
  })
}
let p = Chunk473749.forwardRef(function(e, t) {
  let {
    renderPopout: n,
    popoutTargetRef: p,
    children: f,
    align: h = "left",
    isPopoutBlocked: g,
    onPopoutOpen: m,
    onPopoutClose: b,
    onRequestClose: y
  } = e, [v, O] = i.useState(false), {
    isHovered: j,
    setIsHovered: x,
    onMouseEnter: C,
    onMouseLeave: E,
    cancelTimers: S
  } = (0, o.Z)(200, 300);

  function _(e) {
    "focus" === e.type || v || C()
  }

  function I() {
    v || E()
  }

  function P(e) {
    S(), O(!v), v ? null == b || b() : null == m || m(), (!j || v) && e()
  }
  i.useImperativeHandle(t, () => ({
    hidePopout() {
      x(false), O(false)
    }
  }), [x, O]);
  let Z = j && !g || v;
  return (0, r.jsx)(a.yRy, {
    targetElementRef: p,
    animation: a.yRy.Animation.FADE,
    shouldShow: Z,
    animationPosition: "top",
    position: "top",
    align: h,
    spacing: 16,
    onRequestClose: () => {
      if ((null == y ? true : y()) === l.F) return l.F;
      x(false), O(false), null == b || b()
    },
    renderPopout: e => (0, r.jsx)(d, u({
      isHovered: Z,
      onFocus: () => O(true),
      onMouseEnter: C,
      onMouseLeave: I,
      renderPopout: n
    }, e)),
    children: e => {
      let {
        onClick: t,
        onKeyDown: n
      } = e;
      return (0, r.jsx)(r.Fragment, {
        children: f({
          onClick: e => P(() => t(e)),
          onKeyDown: e => {
            (e.key === s.vn.ENTER || e.key === s.vn.SPACE) && P(() => n(e))
          },
          className: c.actionBarButton,
          onMouseEnter: _,
          onMouseLeave: I,
          isActive: v
        })
      })
    }
  })
})