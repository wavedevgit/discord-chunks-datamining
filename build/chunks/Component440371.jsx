/** Chunk was on 27919 **/
/** chunk id: 440371, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk854698 = require("./854698.js"),
  Chunk401876 = require("./401876.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk647876 = require("./647876.js");

function o(e) {
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

function g(e, t) {
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

function p(e) {
  let {
    className: t,
    onScheduleChange: n,
    onRecurrenceChange: l,
    onTimeChange: p,
    timeSelected: b = true,
    schedule: x,
    recurrenceRule: h,
    showEndDate: f = false,
    requireEndDate: j = false,
    disableStartDateTime: v = false
  } = e;
  if (null == x) return null;
  let m = null,
    D = x.startDate,
    O = i()(),
    y = i()().add(u.G3, "days"),
    _ = i()().add(u.Ib, "days");
  null != h && (y.add(u.hn, "years"), _.add(u.hn, "years"));
  let S = e => {
    n(g(o({}, x), {
      endDate: e
    }))
  };
  return f && (m = null != x.endDate || j ? (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: c.doubleInput,
      children: [(0, r.jsx)(a.Wrb, {
        label: d.intl.string(d.t.CTLgZJ),
        required: j,
        value: x.endDate,
        onSelect: S,
        minDate: x.startDate,
        maxDate: _
      }), (0, r.jsx)(a.MGJ, {
        label: d.intl.string(d.t.j2RuXF),
        required: j,
        value: x.endDate,
        onChange: S
      })]
    }), j ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.Avr, {
        onClick: () => {
          S(true)
        },
        text: d.intl.string(d.t.petdfk),
        size: "sm"
      }), (0, r.jsx)(a.LZC, {
        size: 24
      })]
    })]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(a.Avr, {
      onClick: () => {
        S(i()(x.startDate).add(1, "hour"))
      },
      text: d.intl.string(d.t.ncdPcn),
      size: "sm"
    }), (0, r.jsx)(a.LZC, {
      size: 24
    })]
  })), (0, r.jsxs)("div", {
    className: t,
    children: [(0, r.jsxs)("div", {
      className: c.doubleInput,
      children: [(0, r.jsx)(a.Wrb, {
        label: d.intl.string(d.t.kKOIwJ),
        required: true,
        value: x.startDate,
        onSelect: e => {
          n(g(o({}, x), {
            startDate: e
          }))
        },
        minDate: O,
        maxDate: y,
        disabled: v
      }), (0, r.jsx)(a.MGJ, {
        label: d.intl.string(d.t["6dGmCD"]),
        required: true,
        value: x.startDate,
        onChange: e => {
          e.isValid() && (null == p || p(true), n(g(o({}, x), {
            startDate: e
          })))
        },
        hideValue: !b,
        disabled: v
      })]
    }), m, null != D && null != l && (0, r.jsx)(s.Z, {
      onRecurrenceChange: l,
      startDate: D,
      recurrenceRule: h
    })]
  })
}