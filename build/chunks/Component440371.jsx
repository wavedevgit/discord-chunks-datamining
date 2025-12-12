/** Chunk was on 27919 **/
/** chunk id: 440371, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk913527 = require("./913527.js"),
  i = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk854698 = require("./854698.js"),
  Chunk401876 = require("./401876.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk225584 = require("./225584.js");

function o(e) {
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

function g(e, t) {
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

function b(e) {
  let {
    className: t,
    onScheduleChange: n,
    onRecurrenceChange: r,
    onTimeChange: b,
    timeSelected: p = true,
    schedule: f,
    recurrenceRule: x,
    showEndDate: h = false,
    requireEndDate: j = false,
    disableStartDateTime: v = false
  } = e;
  if (null == f) return null;
  let m = null,
    D = f.startDate,
    O = i()(),
    y = i()().add(u.G3, "days"),
    _ = i()().add(u.Ib, "days");
  null != x && (y.add(u.hn, "years"), _.add(u.hn, "years"));
  let S = e => {
    n(g(o({}, f), {
      endDate: e
    }))
  };
  return h && (m = null != f.endDate || j ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: c.doubleInput,
      children: [(0, l.jsx)(a.Wrb, {
        label: d.intl.string(d.t.CTLgZJ),
        required: j,
        value: f.endDate,
        onSelect: S,
        minDate: f.startDate,
        maxDate: _
      }), (0, l.jsx)(a.MGJ, {
        label: d.intl.string(d.t.j2RuXF),
        required: j,
        value: f.endDate,
        onChange: S
      })]
    }), j ? null : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(a.Avr, {
        onClick: () => {
          S(true)
        },
        text: d.intl.string(d.t.petdfk),
        size: "sm"
      }), (0, l.jsx)(a.LZC, {
        size: 24
      })]
    })]
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.Avr, {
      onClick: () => {
        S(i()(f.startDate).add(1, "hour"))
      },
      text: d.intl.string(d.t.ncdPcn),
      size: "sm"
    }), (0, l.jsx)(a.LZC, {
      size: 24
    })]
  })), (0, l.jsxs)("div", {
    className: t,
    children: [(0, l.jsxs)("div", {
      className: c.doubleInput,
      children: [(0, l.jsx)(a.Wrb, {
        label: d.intl.string(d.t.kKOIwJ),
        required: true,
        value: f.startDate,
        onSelect: e => {
          n(g(o({}, f), {
            startDate: e
          }))
        },
        minDate: O,
        maxDate: y,
        disabled: v
      }), (0, l.jsx)(a.MGJ, {
        label: d.intl.string(d.t["6dGmCD"]),
        required: true,
        value: f.startDate,
        onChange: e => {
          e.isValid() && (null == b || b(true), n(g(o({}, f), {
            startDate: e
          })))
        },
        hideValue: !p,
        disabled: v
      })]
    }), m, null != D && null != r && (0, l.jsx)(s.Z, {
      onRecurrenceChange: r,
      startDate: D,
      recurrenceRule: x
    })]
  })
}