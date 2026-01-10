/** Chunk was on 81985 **/
/** chunk id: 618857, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $X: () => m,
  $f: () => O,
  C$: () => b,
  Dt: () => v,
  Hw: () => h,
  eD: () => g,
  uW: () => j,
  wW: () => y
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

function h(e) {
  let t = d.intl.formatToPlainString(d.t["CvHu/j"], {
    timestamp: new Date(e).valueOf()
  });
  (0, a.showToast)((0, a.createToast)(t, a.ToastType.SUCCESS))
}

function g() {
  (0, a.showToast)((0, a.createToast)(d.intl.string(d.t.MXsMRk), a.ToastType.SUCCESS))
}

function m(e) {
  (0, a.showToast)((0, a.createToast)(d.intl.formatToPlainString(d.t.slM6In, {
    error: e
  }), a.ToastType.FAILURE))
}

function b() {
  (0, a.showToast)((0, a.createToast)(d.intl.string(d.t["JF/LWn"]), a.ToastType.SUCCESS))
}

function y(e) {
  (0, a.showToast)((0, a.createToast)(d.intl.formatToPlainString(d.t.sUvyW3, {
    error: e
  }), a.ToastType.FAILURE))
}

function v(e) {
  let {
    channel: t
  } = e, n = l()().add(1, "day").startOf("day").set("hours", 9), i = l()().add(1, "day").startOf("day").set("hours", 13), o = l()().startOf("isoWeek").add(1, "week").set("hours", 9), c = [{
    display: d.intl.string(d.t.tjIn9i),
    value: n
  }, {
    display: d.intl.string(d.t.EMRZyS),
    value: i
  }, {
    display: d.intl.string(d.t["+P5MmK"]),
    value: o
  }].map(e => (0, r.jsx)(a.sNh, {
    id: e.display,
    label: e.display,
    action: () => (0, s._e)({
      channelId: t.id,
      scheduledTimestamp: e.value.toISOString()
    })
  }, e.display));
  return c.push((0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Clw, {}), (0, r.jsx)(a.sNh, {
      id: "custom-time",
      label: d.intl.string(d.t.stHooC),
      action: () => O({
        channel: t
      })
    }, "custom-time")]
  })), c
}

function O(e) {
  let {
    channel: t,
    defaultValue: i = l()().startOf("hour").add(1, "hour")
  } = e;
  (0, a.ZDy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 538084));
    return n => (0, r.jsx)(e, f(p({}, n), {
      channel: t,
      defaultValue: i
    }))
  }, {
    modalKey: c.k
  })
}

function j(e) {
  let {
    scheduledMessage: t
  } = e;
  (0, a.ZDy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 756095));
    return n => (0, r.jsx)(e, f(p({}, n), {
      scheduledMessage: t
    }))
  }, {
    modalKey: u.B
  })
}
new Chunk710845.Z("Scheduled Messages")