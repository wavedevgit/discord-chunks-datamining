/** Chunk was on 44669 **/
/** chunk id: 287074, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk945830 = require("./945830.jsx"),
  Chunk323073 = require("./323073.js"),
  Chunk267102 = require("./267102.jsx"),
  Chunk222823 = require("./222823.js"),
  Chunk203982 = require("./203982.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
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
  } = e, n = (0, o.vL)(t), [b, A] = l.useState(false), y = (0, i.bG)([u.Ay], () => u.Ay.hasUnreadPins(t.id), [t]), O = (0, c.aL)(), j = l.useRef(null), x = l.useCallback(() => {
    n || A(e => !e)
  }, [n]);

  function _(e) {
    (null == e ? true : e.shiftKey) || O.dispatch(h.jej.POPOUT_CLOSE)
  }
  return l.useEffect(() => (d._.subscribe(h.jej.TOGGLE_CHANNEL_PINS, x), () => {
    d._.unsubscribe(h.jej.TOGGLE_CHANNEL_PINS, x)
  }), [x]), (0, r.jsx)(s.YNO, {
    targetElementRef: j,
    shouldShow: b,
    animation: s.YNO.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: false,
    ignoreModalClicks: true,
    onRequestClose: () => A(false),
    renderPopout: function(e) {
      return (0, r.jsx)(a.A, m(f({}, e), {
        onJump: _,
        channel: t
      }))
    },
    clickTrap: true,
    children: (e, t) => {
      let {
        isShown: l
      } = t;
      return (0, r.jsx)(p.In, m(f({}, e), {
        ref: j,
        onClick: x,
        tooltip: l ? null : g.intl.string(g.t["mp1N/2"]),
        icon: s.tsw,
        iconSize: 20,
        "aria-label": g.intl.string(g.t["mp1N/2"]),
        disabled: n,
        showBadge: y,
        selected: l
      }))
    }
  })
}