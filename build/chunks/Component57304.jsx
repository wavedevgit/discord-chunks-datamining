/** Chunk was on 91053 **/
/** chunk id: 57304, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  } = e, n = (0, o.$5)(t), [b, _] = i.useState(false), y = (0, l.e7)([d.ZP], () => d.ZP.hasUnreadPins(t.id), [t]), x = (0, c.Aq)(), j = i.useRef(null), v = i.useCallback(() => {
    n || _(e => !e)
  }, [n]);

  function O(e) {
    (null == e ? true : e.shiftKey) || x.dispatch(p.CkL.POPOUT_CLOSE)
  }
  return i.useEffect(() => (u.S.subscribe(p.CkL.TOGGLE_CHANNEL_PINS, v), () => {
    u.S.unsubscribe(p.CkL.TOGGLE_CHANNEL_PINS, v)
  }), [v]), (0, r.jsx)(a.yRy, {
    targetElementRef: j,
    shouldShow: b,
    animation: a.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: false,
    ignoreModalClicks: true,
    onRequestClose: () => _(false),
    renderPopout: function(e) {
      return (0, r.jsx)(s.Z, m(g({}, e), {
        onJump: O,
        channel: t
      }))
    },
    clickTrap: true,
    children: (e, t) => {
      let {
        isShown: i
      } = t;
      return (0, r.jsx)(h.JO, m(g({}, e), {
        ref: j,
        onClick: v,
        tooltip: i ? null : f.intl.string(f.t["mp1N/2"]),
        icon: a.qQX,
        iconSize: 20,
        "aria-label": f.intl.string(f.t["mp1N/2"]),
        disabled: n,
        showBadge: y,
        selected: i
      }))
    }
  })
}