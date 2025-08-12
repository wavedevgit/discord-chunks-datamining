/** Chunk was on web.js **/
/** chunk id: 304388, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk930295 = require("./930295.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk579185 = require("./579185.js"),
  Chunk420212 = require("./420212.js"),
  Chunk523972 = require("./523972.js");

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function d(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      u(e, t, n[t])
    })
  }
  return e
}

function f(e, t) {
  if (null == e) return {};
  var n, r, i = _(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function _(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let p = 300,
  h = 200;

function m(e) {
  var {
    renderPopout: t,
    onMouseEnter: n,
    onMouseLeave: o,
    closePopout: a,
    isHovered: s
  } = e, l = f(e, ["renderPopout", "onMouseEnter", "onMouseLeave", "closePopout", "isHovered"]);
  return i.useEffect(() => {
    s || a()
  }, [a, s]), (0, r.jsx)("div", {
    onMouseEnter: n,
    onMouseLeave: o,
    children: t(d({
      closePopout: a
    }, l))
  })
}
let g = Chunk73800.forwardRef(function(e, t) {
  let {
    renderPopout: n,
    popoutTargetRef: u,
    children: f,
    align: _ = "left",
    isPopoutBlocked: g,
    onPopoutOpen: E,
    onPopoutClose: b,
    onRequestClose: y
  } = e, [O, v] = i.useState(false), {
    isHovered: I,
    setIsHovered: T,
    onMouseEnter: S,
    onMouseLeave: A,
    cancelTimers: N
  } = (0, s.Z)(h, p);

  function C(e) {
    "focus" === e.type || O || S()
  }

  function R() {
    O || A()
  }

  function P(e) {
    N(), v(!O), O ? null == b || b() : null == E || E(), (!I || O) && e()
  }

  function w(e, t) {
    (e.key === l.vn.ENTER || e.key === l.vn.SPACE) && P(() => t(e))
  }
  i.useImperativeHandle(t, () => ({
    hidePopout() {
      T(false), v(false)
    }
  }), [T, v]);
  let D = I && !g || O,
    L = O;
  return (0, r.jsx)(a.yRy, {
    targetElementRef: u,
    animation: a.yRy.Animation.FADE,
    shouldShow: D,
    animationPosition: "top",
    position: "top",
    align: _,
    spacing: 16,
    onRequestClose: () => {
      if ((null == y ? true : y()) === o.F) return o.F;
      T(false), v(false), null == b || b()
    },
    renderPopout: e => (0, r.jsx)(m, d({
      isHovered: D,
      onFocus: () => v(true),
      onMouseEnter: S,
      onMouseLeave: R,
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
          onKeyDown: e => w(e, n),
          className: c.actionBarButton,
          onMouseEnter: C,
          onMouseLeave: R,
          isActive: L
        })
      })
    }
  })
})