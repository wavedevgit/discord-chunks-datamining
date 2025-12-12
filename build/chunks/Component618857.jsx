/** Chunk was on 7891 **/
/** chunk id: 618857, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $X: () => g,
  $f: () => v,
  C$: () => b,
  Dt: () => y,
  Hw: () => f,
  eD: () => m,
  uW: () => _,
  wW: () => C
}), require("./539854.js");
var Chunk54381 = require("./54381.js"),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk710845 = require("./710845.js"),
  Chunk45251 = require("./45251.js"),
  Chunk538084 = require("./538084.jsx"),
  Chunk756095 = require("./756095.jsx"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function h(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function f(e) {
  let t = d.intl.formatToPlainString(d.t["CvHu/j"], {
    timestamp: new Date(e).valueOf()
  });
  (0, a.showToast)((0, a.createToast)(t, a.ToastType.SUCCESS))
}

function m() {
  (0, Chunk481060.showToast)((0, Chunk481060.createToast)(Chunk388032.intl.string(Chunk388032.t.MXsMRk), Chunk481060.ToastType.SUCCESS))
}

function g(e) {
  (0, a.showToast)((0, a.createToast)(d.intl.formatToPlainString(d.t.slM6In, {
    error: e
  }), a.ToastType.FAILURE))
}

function b() {
  (0, Chunk481060.showToast)((0, Chunk481060.createToast)(Chunk388032.intl.string(Chunk388032.t["JF/LWn"]), Chunk481060.ToastType.SUCCESS))
}

function C(e) {
  (0, a.showToast)((0, a.createToast)(d.intl.formatToPlainString(d.t.sUvyW3, {
    error: e
  }), a.ToastType.FAILURE))
}

function y(e) {
  let {
    channel: t
  } = e, n = l()().add(1, "day").startOf("day").set("hours", 9), r = l()().add(1, "day").startOf("day").set("hours", 13), o = l()().startOf("isoWeek").add(1, "week").set("hours", 9), c = [{
    display: d.intl.string(d.t.tjIn9i),
    value: n
  }, {
    display: d.intl.string(d.t.EMRZyS),
    value: r
  }, {
    display: d.intl.string(d.t["+P5MmK"]),
    value: o
  }].map(e => (0, i.jsx)(a.sNh, {
    id: e.display,
    label: e.display,
    action: () => (0, s._e)({
      channelId: t.id,
      scheduledTimestamp: e.value.toISOString()
    })
  }, e.display));
  return c.push((0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.Clw, {}), (0, i.jsx)(a.sNh, {
      id: "custom-time",
      label: d.intl.string(d.t.stHooC),
      action: () => v({
        channel: t
      })
    }, "custom-time")]
  })), c
}

function v(e) {
  let {
    channel: t,
    defaultValue: r = l()().startOf("hour").add(1, "hour")
  } = e;
  (0, a.ZDy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 538084));
    return n => (0, i.jsx)(e, h(p({}, n), {
      channel: t,
      defaultValue: r
    }))
  }, {
    modalKey: c.k
  })
}

function _(e) {
  let {
    scheduledMessage: t
  } = e;
  (0, a.ZDy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 756095));
    return n => (0, i.jsx)(e, h(p({}, n), {
      scheduledMessage: t
    }))
  }, {
    modalKey: u.B
  })
}
new Chunk710845.Z("Scheduled Messages")