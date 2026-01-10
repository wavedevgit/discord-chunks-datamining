/** Chunk was on 81985 **/
/** chunk id: 57304, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk23536 = require("./23536.jsx"),
  Chunk622822 = require("./622822.js"),
  Chunk728285 = require("./728285.jsx"),
  Chunk306680 = require("./306680.js"),
  Chunk585483 = require("./585483.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
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

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let b = function(e) {
  let {
    channel: t
  } = e, n = (0, s.$5)(t), [b, y] = i.useState(false), v = (0, l.e7)([u.ZP], () => u.ZP.hasUnreadPins(t.id), [t]), O = (0, c.Aq)(), j = i.useRef(null), x = i.useCallback(() => {
    n || y(e => !e)
  }, [n]);

  function C(e) {
    (null == e ? true : e.shiftKey) || O.dispatch(f.CkL.POPOUT_CLOSE)
  }
  return i.useEffect(() => (d.S.subscribe(f.CkL.TOGGLE_CHANNEL_PINS, x), () => {
    d.S.unsubscribe(f.CkL.TOGGLE_CHANNEL_PINS, x)
  }), [x]), (0, r.jsx)(a.yRy, {
    targetElementRef: j,
    shouldShow: b,
    animation: a.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: false,
    ignoreModalClicks: true,
    onRequestClose: () => y(false),
    renderPopout: function(e) {
      return (0, r.jsx)(o.Z, m(g({}, e), {
        onJump: C,
        channel: t
      }))
    },
    clickTrap: true,
    children: (e, t) => {
      let {
        isShown: i
      } = t;
      return (0, r.jsx)(p.JO, m(g({}, e), {
        ref: j,
        onClick: x,
        tooltip: i ? null : h.intl.string(h.t["mp1N/2"]),
        icon: a.qQX,
        iconSize: 20,
        "aria-label": h.intl.string(h.t["mp1N/2"]),
        disabled: n,
        showBadge: v,
        selected: i
      }))
    }
  })
}