/** Chunk was on 81985 **/
/** chunk id: 739830, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk41776 = require("./41776.js"),
  Chunk585483 = require("./585483.js"),
  Chunk723170 = require("./723170.js"),
  Chunk64247 = require("./64247.jsx"),
  Chunk124368 = require("./124368.js"),
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

function b(e) {
  let {
    channel: t
  } = e, n = (0, u.B)(t), [b, y] = i.useState(false), v = i.useRef(null), O = (0, l.e7)([s.Z], () => null != t.guild_id && s.Z.isLurking(t.guild_id));
  if (i.useEffect(() => {
      let e = () => y(true);
      return c.S.subscribe(f.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e), () => {
        c.S.unsubscribe(f.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e)
      }
    }, []), O) return null;
  let j = h.intl.string(h.t.h850Ss);
  return (0, r.jsx)(a.yRy, {
    targetElementRef: v,
    shouldShow: b,
    animation: a.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: false,
    onRequestClose: () => y(false),
    renderPopout: e => (0, r.jsx)(d.Z, m(g({}, e), {
      channel: t,
      navId: "thread-context",
      label: h.intl.string(h.t["1NBjqb"])
    })),
    children: (e, t) => {
      let {
        isShown: i
      } = t;
      return (0, r.jsx)(o.ZP.Icon, m(g({}, e), {
        ref: v,
        onClick: () => y(e => !e),
        tooltip: i ? null : j,
        icon: n === p.iN.NO_MESSAGES ? a.owu : a.Dkj,
        "aria-label": j,
        selected: i
      }))
    }
  })
}