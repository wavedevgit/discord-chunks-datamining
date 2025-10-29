/** Chunk was on 91053 **/
/** chunk id: 442336, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk9156 = require("./9156.js"),
  Chunk585483 = require("./585483.js"),
  Chunk621600 = require("./621600.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk110255 = require("./110255.jsx"),
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
  } = e, n = i.useRef(null), [b, _] = (0, l.Wu)([o.ZP], () => [o.ZP.isChannelMuted(t.getGuildId(), t.id), o.ZP.resolvedMessageNotifications(t)], [t]), [y, x] = i.useState(false);
  i.useEffect(() => {
    let e = () => x(true);
    return c.S.subscribe(p.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e), () => {
      c.S.unsubscribe(p.CkL.OPEN_THREAD_NOTIFICATION_SETTINGS, e)
    }
  }, []);
  let j = e => {
      e.shiftKey ? s.Z.updateChannelOverrideSettings(t.guild_id, t.id, {
        muted: !b
      }, d.UE.muted(!b)) : x(e => !e)
    },
    v = f.intl.string(f.t.h850Ss);
  return (0, r.jsx)(a.yRy, {
    targetElementRef: n,
    shouldShow: y,
    animation: a.yRy.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: false,
    onRequestClose: () => x(false),
    renderPopout: e => (0, r.jsx)(h.Z, m(g({}, e), {
      channel: t,
      navId: "channel-context",
      label: f.intl.string(f.t.Xm41aV)
    })),
    clickTrap: true,
    children: (e, t) => {
      let {
        isShown: i
      } = t;
      return (0, r.jsx)(u.ZP.Icon, m(g({}, e), {
        ref: n,
        onClick: j,
        tooltip: i ? null : v,
        icon: b || _ !== p.bL.ALL_MESSAGES ? a.owu : a.Dkj,
        "aria-label": v,
        selected: i
      }))
    }
  })
}