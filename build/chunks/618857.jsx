/** Chunk was on web.js **/
/** chunk id: 618857, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $f: () => b,
  C$: () => m,
  Dt: () => E,
  Hw: () => h,
  wW: () => g
}), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk710845 = require("./710845.js"),
  Chunk45251 = require("./45251.js"),
  Chunk538084 = require("./538084.jsx"),
  Chunk388032 = require("./388032.jsx");

function d(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function f(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      d(e, t, n[t])
    })
  }
  return e
}

function _(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function h(e) {
  let t = u.intl.formatToPlainString(u.t["CvHu/v"], {
    timestamp: new Date(e).valueOf()
  });
  (0, a.showToast)((0, a.createToast)(t, a.ToastType.SUCCESS))
}

function m() {
  (0, Chunk481060.showToast)((0, Chunk481060.createToast)(Chunk388032.intl.string(Chunk388032.t["JF/LWl"]), Chunk481060.ToastType.SUCCESS))
}

function g(e) {
  (0, a.showToast)((0, a.createToast)(u.intl.formatToPlainString(u.t.sUvyW1, {
    error: e
  }), a.ToastType.FAILURE))
}

function E(e) {
  let {
    channel: t
  } = e, n = o()().add(1, "day").startOf("day").set("hours", 9), i = o()().add(1, "day").startOf("day").set("hours", 13), s = o()().startOf("isoWeek").add(1, "week").set("hours", 9), c = [{
    display: u.intl.string(u.t.tjIn9v),
    value: n
  }, {
    display: u.intl.string(u.t.EMRZyc),
    value: i
  }, {
    display: u.intl.string(u.t["+P5MmJ"]),
    value: s
  }].map(e => <a.sNh id={e.display} label={e.display} action={() => (0, l._e)({
      channelId: t.id,
      scheduledTimestamp: e.value.toISOString()
    })} />);
  return c.push(<r.Fragment>{<a.Clw />}{<a.sNh id={"custom-time"} label={u.intl.string(u.t.stHooK)} action={() => b({
        channel: t
      })} />}</r.Fragment>), c
}

function b(e) {
  let {
    channel: t,
    prefilledTime: i
  } = e;
  (0, a.ZDy)(async () => {
    let {
      default: e
    } = await Promise.resolve().then(n.bind(n, 538084));
    return n => <e{...p(f({}, n), {
      channel: t,
      prefilledTime: null != i ? i : o()().startOf("hour").add(1, "hour").toISOString()
    })} />
  }, {
    modalKey: c.k
  })
}
new Chunk710845.Z("Scheduled Messages")