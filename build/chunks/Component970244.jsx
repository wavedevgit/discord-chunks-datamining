/** Chunk was on 77870 **/
/** chunk id: 970244, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CI: () => O,
  Re: () => b,
  c_: () => f,
  e0: () => _,
  kM: () => A,
  kb: () => g,
  s: () => y,
  xP: () => m
}), require("./321073.js");
var Chunk627968 = require("./627968.js"),
  Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk397927 = require("./397927.js"),
  Chunk626584 = require("./626584.js"),
  Chunk151282 = require("./151282.js"),
  Chunk896455 = require("./896455.jsx"),
  Chunk23395 = require("./23395.jsx"),
  Chunk985018 = require("./985018.jsx");

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

function h(e, t) {
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

function f(e) {
  let t = d.intl.formatToPlainString(d.t["CvHu/j"], {
    timestamp: new Date(e).valueOf()
  });
  (0, s.showToast)((0, s.createToast)(t, s.ToastType.SUCCESS))
}

function g() {
  (0, s.showToast)((0, s.createToast)(d.intl.string(d.t.MXsMRk), s.ToastType.SUCCESS))
}

function m(e) {
  (0, s.showToast)((0, s.createToast)(d.intl.formatToPlainString(d.t.slM6In, {
    error: e
  }), s.ToastType.FAILURE))
}

function b() {
  (0, s.showToast)((0, s.createToast)(d.intl.string(d.t["JF/LWn"]), s.ToastType.SUCCESS))
}

function A(e) {
  (0, s.showToast)((0, s.createToast)(d.intl.formatToPlainString(d.t.sUvyW3, {
    error: e
  }), s.ToastType.FAILURE))
}

function y(e) {
  let {
    channel: t
  } = e, n = i()().add(1, "day").startOf("day").set("hours", 9), l = i()().add(1, "day").startOf("day").set("hours", 13), a = i()().startOf("isoWeek").add(1, "week").set("hours", 9), c = [{
    display: d.intl.string(d.t.tjIn9i),
    value: n
  }, {
    display: d.intl.string(d.t.EMRZyS),
    value: l
  }, {
    display: d.intl.string(d.t["+P5MmK"]),
    value: a
  }].map(e => (0, r.jsx)(s.Drp, {
    id: e.display,
    label: e.display,
    action: () => (0, o.yF)({
      channelId: t.id,
      scheduledTimestamp: e.value.toISOString()
    })
  }, e.display));
  return c.push((0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(s.bXX, {}), (0, r.jsx)(s.Drp, {
      id: "custom-time",
      label: d.intl.string(d.t.stHooC),
      action: () => _({
        channel: t
      })
    }, "custom-time")]
  })), c
}

function _(e) {
  let {
    channel: t,
    defaultValue: l = i()().startOf("hour").add(1, "hour")
  } = e;
  (0, s.mMO)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 896455));
    return n => (0, r.jsx)(e, h(p({}, n), {
      channel: t,
      defaultValue: l
    }))
  }, {
    modalKey: c.t
  })
}

function O(e) {
  let {
    scheduledMessage: t
  } = e;
  (0, s.mMO)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 23395));
    return n => (0, r.jsx)(e, h(p({}, n), {
      scheduledMessage: t
    }))
  }, {
    modalKey: u.B
  })
}
new Chunk626584.A("Scheduled Messages")