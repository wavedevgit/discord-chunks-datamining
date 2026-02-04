/** Chunk was on 17869 **/
/** chunk id: 970244, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  CI: () => E,
  Re: () => A,
  c_: () => f,
  e0: () => y,
  kM: () => b,
  kb: () => m,
  s: () => _,
  xP: () => g
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

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), l.forEach(function(t) {
      var l;
      l = n[t], t in e ? Object.defineProperty(e, t, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = l
    })
  }
  return e
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      n.push.apply(n, l)
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
  (0, a.showToast)((0, a.createToast)(d.intl.string(d.t.MXsMRk), a.ToastType.SUCCESS))
}

function g(e) {
  (0, a.showToast)((0, a.createToast)(d.intl.formatToPlainString(d.t.slM6In, {
    error: e
  }), a.ToastType.FAILURE))
}

function A() {
  (0, a.showToast)((0, a.createToast)(d.intl.string(d.t["JF/LWn"]), a.ToastType.SUCCESS))
}

function b(e) {
  (0, a.showToast)((0, a.createToast)(d.intl.formatToPlainString(d.t.sUvyW3, {
    error: e
  }), a.ToastType.FAILURE))
}

function _(e) {
  let {
    channel: t
  } = e, n = i()().add(1, "day").startOf("day").set("hours", 9), r = i()().add(1, "day").startOf("day").set("hours", 13), s = i()().startOf("isoWeek").add(1, "week").set("hours", 9), c = [{
    display: d.intl.string(d.t.tjIn9i),
    value: n
  }, {
    display: d.intl.string(d.t.EMRZyS),
    value: r
  }, {
    display: d.intl.string(d.t["+P5MmK"]),
    value: s
  }].map(e => (0, l.jsx)(a.Drp, {
    id: e.display,
    label: e.display,
    action: () => (0, o.yF)({
      channelId: t.id,
      scheduledTimestamp: e.value.toISOString()
    })
  }, e.display));
  return c.push((0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.bXX, {}), (0, l.jsx)(a.Drp, {
      id: "custom-time",
      label: d.intl.string(d.t.stHooC),
      action: () => y({
        channel: t
      })
    }, "custom-time")]
  })), c
}

function y(e) {
  let {
    channel: t,
    defaultValue: r = i()().startOf("hour").add(1, "hour")
  } = e;
  (0, a.mMO)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 896455));
    return n => (0, l.jsx)(e, p(h({}, n), {
      channel: t,
      defaultValue: r
    }))
  }, {
    modalKey: c.t
  })
}

function E(e) {
  let {
    scheduledMessage: t
  } = e;
  (0, a.mMO)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 23395));
    return n => (0, l.jsx)(e, p(h({}, n), {
      scheduledMessage: t
    }))
  }, {
    modalKey: u.B
  })
}
new Chunk626584.A("Scheduled Messages")