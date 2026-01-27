/** Chunk was on 41727 **/
/** chunk id: 187360, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk832712 = require("./832712.js"),
  Chunk543465 = require("./543465.js"),
  Chunk203982 = require("./203982.js"),
  Chunk477427 = require("./477427.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk461678 = require("./461678.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

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
  } = e, n = l.useRef(null), [b, A] = (0, i.yK)([o.Ay], () => [o.Ay.isChannelMuted(t.getGuildId(), t.id), o.Ay.resolvedMessageNotifications(t)], [t]), [y, _] = l.useState(false);
  l.useEffect(() => {
    let e = () => _(true);
    return c._.subscribe(h.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e), () => {
      c._.unsubscribe(h.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e)
    }
  }, []);
  let O = e => {
      e.shiftKey ? a.A.updateChannelOverrideSettings(t.guild_id, t.id, {
        muted: !b
      }, u.G_.muted(!b)) : _(e => !e)
    },
    j = f.intl.string(f.t.h850Ss);
  return (0, r.jsx)(s.YNO, {
    targetElementRef: n,
    shouldShow: y,
    animation: s.YNO.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: false,
    onRequestClose: () => _(false),
    renderPopout: e => (0, r.jsx)(p.A, m(g({}, e), {
      channel: t,
      navId: "channel-context",
      label: f.intl.string(f.t.Xm41aV)
    })),
    clickTrap: true,
    children: (e, t) => {
      let {
        isShown: l
      } = t;
      return (0, r.jsx)(d.Ay.Icon, m(g({}, e), {
        ref: n,
        onClick: O,
        tooltip: l ? null : j,
        icon: b || A !== h.orn.ALL_MESSAGES ? s.a_I : s.XFE,
        "aria-label": j,
        selected: l
      }))
    }
  })
}