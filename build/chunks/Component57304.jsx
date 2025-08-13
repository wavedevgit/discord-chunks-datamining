/** Chunk was on 21087 **/
/** chunk id: 57304, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk23536 = require("./23536.jsx"),
  Chunk40851 = require("./40851.jsx"),
  Chunk622822 = require("./622822.js"),
  Chunk731290 = require("./731290.js"),
  Chunk306680 = require("./306680.js"),
  Chunk594174 = require("./594174.js"),
  Chunk585483 = require("./585483.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
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

function y(e, t) {
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
let x = function(e) {
  let {
    channel: t
  } = e, n = (0, l.e7)([u.Z, h.default], () => {
    let e = h.default.getCurrentUser();
    return null == e || (0, c.aC)(t) && (!e.nsfwAllowed || !u.Z.didAgree(t.getGuildId()))
  }, [t]), [x, j] = i.useState(false), _ = (0, l.e7)([d.ZP], () => d.ZP.hasUnreadPins(t.id), [t]), O = (0, o.Aq)(), v = i.useRef(null), C = i.useCallback(() => {
    n || j(e => !e)
  }, [n]);

  function E(e) {
    (null == e ? true : e.shiftKey) || O.dispatch(g.CkL.POPOUT_CLOSE)
  }
  return i.useEffect(() => (p.S.subscribe(g.CkL.TOGGLE_CHANNEL_PINS, C), () => {
    p.S.unsubscribe(g.CkL.TOGGLE_CHANNEL_PINS, C)
  }), [C]), (0, r.jsx)(a.yRy, {
    targetElementRef: v,
    shouldShow: x,
    animation: a.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: false,
    ignoreModalClicks: true,
    onRequestClose: () => j(false),
    renderPopout: function(e) {
      return (0, r.jsx)(s.Z, y(b({}, e), {
        onJump: E,
        channel: t
      }))
    },
    clickTrap: true,
    children: (e, t) => {
      let {
        isShown: i
      } = t;
      return (0, r.jsx)(f.JO, y(b({}, e), {
        ref: v,
        onClick: C,
        tooltip: i ? null : m.intl.string(m.t["mp1N//"]),
        icon: a.qQX,
        iconSize: 20,
        "aria-label": m.intl.string(m.t["mp1N//"]),
        disabled: n,
        showBadge: _,
        selected: i
      }))
    }
  })
}