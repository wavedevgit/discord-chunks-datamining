/** Chunk was on 91053 **/
/** chunk id: 739830, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk585483 = require("./585483.js"),
  Chunk723170 = require("./723170.js"),
  Chunk64247 = require("./64247.jsx"),
  Chunk124368 = require("./124368.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
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

function f(e, t) {
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

function g(e) {
  let {
    channel: t
  } = e, n = (0, o.B)(t), [g, m] = i.useState(false), b = i.useRef(null);
  i.useEffect(() => {
    let e = () => m(true);
    return s.S.subscribe(u.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e), () => {
      s.S.unsubscribe(u.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e)
    }
  }, []);
  let _ = p.intl.string(p.t.h850Ss);
  return (0, r.jsx)(l.yRy, {
    targetElementRef: b,
    shouldShow: g,
    animation: l.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: false,
    onRequestClose: () => m(false),
    renderPopout: e => (0, r.jsx)(c.Z, f(h({}, e), {
      channel: t,
      navId: "thread-context",
      label: p.intl.string(p.t["1NBjqb"])
    })),
    children: (e, t) => {
      let {
        isShown: i
      } = t;
      return (0, r.jsx)(a.ZP.Icon, f(h({}, e), {
        ref: b,
        onClick: () => m(e => !e),
        tooltip: i ? null : _,
        icon: n === d.iN.NO_MESSAGES ? l.owu : l.Dkj,
        "aria-label": _,
        selected: i
      }))
    }
  })
}