/** Chunk was on 73726 **/
/** chunk id: 618857, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  $f: () => m,
  C$: () => p,
  Dt: () => h,
  Hw: () => d,
  wW: () => f
}), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk710845 = require("./710845.js"),
  Chunk45251 = require("./45251.js"),
  Chunk538084 = require("./538084.jsx"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let t = u.intl.formatToPlainString(u.t["CvHu/j"], {
    timestamp: new Date(e).valueOf()
  });
  (0, a.showToast)((0, a.createToast)(t, a.ToastType.SUCCESS))
}

function p() {
  (0, Chunk481060.showToast)((0, Chunk481060.createToast)(Chunk388032.intl.string(Chunk388032.t["JF/LWn"]), Chunk481060.ToastType.SUCCESS))
}

function f(e) {
  (0, a.showToast)((0, a.createToast)(u.intl.formatToPlainString(u.t.sUvyW3, {
    error: e
  }), a.ToastType.FAILURE))
}

function h(e) {
  let {
    channel: t
  } = e, n = l()().add(1, "day").startOf("day").set("hours", 9), i = l()().add(1, "day").startOf("day").set("hours", 13), o = l()().startOf("isoWeek").add(1, "week").set("hours", 9), c = [{
    display: u.intl.string(u.t.tjIn9i),
    value: n
  }, {
    display: u.intl.string(u.t.EMRZyS),
    value: i
  }, {
    display: u.intl.string(u.t["+P5MmK"]),
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
      label: u.intl.string(u.t.stHooC),
      action: () => m({
        channel: t
      })
    }, "custom-time")]
  })), c
}

function m(e) {
  let {
    channel: t,
    prefilledTime: i
  } = e;
  (0, a.ZDy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 538084));
    return n => {
      var a, o;
      return (0, r.jsx)(e, (a = function(e) {
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
      }({}, n), o = o = {
        channel: t,
        prefilledTime: null != i ? i : l()().startOf("hour").add(1, "hour").toISOString()
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e))
      }), a))
    }
  }, {
    modalKey: c.k
  })
}
new Chunk710845.Z("Scheduled Messages")