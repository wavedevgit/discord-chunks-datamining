/** Chunk was on 5665 **/
/** chunk id: 304388, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk930295 = require("./930295.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk579185 = require("./579185.js"),
  Chunk420212 = require("./420212.js"),
  Chunk689598 = require("./689598.js");

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
let p = Chunk647438.forwardRef(function(e, t) {
  let {
    renderPopout: n,
    popoutTargetRef: p,
    children: h,
    align: f = "left",
    isPopoutBlocked: m,
    onPopoutOpen: g,
    onPopoutClose: b,
    onRequestClose: _
  } = e, [y, C] = i.useState(false), {
    isHovered: x,
    setIsHovered: v,
    onMouseEnter: O,
    onMouseLeave: j,
    cancelTimers: E
  } = (0, o.Z)(200, 300);

  function S(e) {
    "focus" === e.type || y || O()
  }

  function I() {
    y || j()
  }

  function P(e) {
    E(), C(!y), y ? null == b || b() : null == g || g(), (!x || y) && e()
  }
  i.useImperativeHandle(t, () => ({
    hidePopout() {
      v(false), C(false)
    }
  }), [v, C]);
  let Z = x && !m || y;
  return (0, r.jsx)(a.yRy, {
    targetElementRef: p,
    animation: a.yRy.Animation.FADE,
    shouldShow: Z,
    animationPosition: "top",
    position: "top",
    align: f,
    spacing: 16,
    onRequestClose: () => {
      if ((null == _ ? true : _()) === l.F) return l.F;
      v(false), C(false), null == b || b()
    },
    renderPopout: e => (0, r.jsx)(d, u({
      isHovered: Z,
      onFocus: () => C(true),
      onMouseEnter: O,
      onMouseLeave: I,
      renderPopout: n
    }, e)),
    children: e => {
      let {
        onClick: t,
        onKeyDown: n
      } = e;
      return (0, r.jsx)(r.Fragment, {
        children: h({
          onClick: e => P(() => t(e)),
          onKeyDown: e => {
            (e.key === s.vn.ENTER || e.key === s.vn.SPACE) && P(() => n(e))
          },
          className: c.actionBarButton,
          onMouseEnter: S,
          onMouseLeave: I,
          isActive: y
        })
      })
    }
  })
})