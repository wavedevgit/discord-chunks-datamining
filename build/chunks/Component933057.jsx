/** Chunk was on 1113 **/
/** chunk id: 933057, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk857071 = require("./857071.js"),
  Chunk203982 = require("./203982.js"),
  Chunk607508 = require("./607508.js"),
  Chunk914703 = require("./914703.jsx"),
  Chunk37411 = require("./37411.js"),
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

function b(e) {
  let {
    channel: t
  } = e, n = (0, u.X)(t), [b, A] = l.useState(false), y = l.useRef(null), O = (0, i.bG)([o.A], () => null != t.guild_id && o.A.isLurking(t.guild_id));
  if (l.useEffect(() => {
      let e = () => A(true);
      return c._.subscribe(p.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e), () => {
        c._.unsubscribe(p.jej.OPEN_THREAD_NOTIFICATION_SETTINGS, e)
      }
    }, []), O) return null;
  let _ = g.intl.string(g.t.h850Ss);
  return (0, r.jsx)(s.YNO, {
    targetElementRef: y,
    shouldShow: b,
    animation: s.YNO.Animation.NONE,
    position: "bottom",
    align: "right",
    autoInvert: false,
    onRequestClose: () => A(false),
    renderPopout: e => (0, r.jsx)(d.A, m(f({}, e), {
      channel: t,
      navId: "thread-context",
      label: g.intl.string(g.t["1NBjqb"])
    })),
    children: (e, t) => {
      let {
        isShown: l
      } = t;
      return (0, r.jsx)(a.Ay.Icon, m(f({}, e), {
        ref: y,
        onClick: () => A(e => !e),
        tooltip: l ? null : _,
        icon: n === h.CP.NO_MESSAGES ? s.a_I : s.XFE,
        "aria-label": _,
        selected: l
      }))
    }
  })
}