/** Chunk was on 82758 **/
/** chunk id: 440371, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk481060 = require("./481060.js"),
  Chunk954313 = require("./954313.js"),
  Chunk401876 = require("./401876.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk647876 = require("./647876.js");

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function x(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function j(e) {
  let {
    className: t,
    onScheduleChange: r,
    onRecurrenceChange: l,
    onTimeChange: j,
    timeSelected: m = true,
    schedule: b,
    recurrenceRule: h,
    showEndDate: g = false,
    requireEndDate: p = false,
    disableStartDateTime: f = false
  } = e;
  if (null == b) return null;
  let v = null,
    y = b.startDate,
    O = s()(),
    P = s()().add(a.G3, "days"),
    k = s()().add(a.Ib, "days");
  null != h && (P.add(a.hn, "years"), k.add(a.hn, "years"));
  let D = e => {
    r(x(u({}, b), {
      endDate: e
    }))
  };
  return g && (v = null != b.endDate || p ? (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)("div", {
      className: d.doubleInput,
      children: [(0, n.jsx)(i.xJW, {
        title: o.intl.string(o.t.CTLgZG),
        required: p,
        children: (0, n.jsx)(i.Wrb, {
          value: b.endDate,
          onSelect: D,
          minDate: b.startDate,
          maxDate: k
        })
      }), (0, n.jsx)(i.xJW, {
        title: o.intl.string(o.t.j2RuXF),
        required: p,
        children: (0, n.jsx)(i.MGJ, {
          value: b.endDate,
          onChange: D
        })
      })]
    }), p ? null : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(i.Avr, {
        onClick: () => {
          D(true)
        },
        text: o.intl.string(o.t.petdfn),
        size: "sm"
      }), (0, n.jsx)(i.LZC, {
        size: 24
      })]
    })]
  }) : (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsx)(i.Avr, {
      onClick: () => {
        D(s()(b.startDate).add(1, "hour"))
      },
      text: o.intl.string(o.t.ncdPcn),
      size: "sm"
    }), (0, n.jsx)(i.LZC, {
      size: 24
    })]
  })), (0, n.jsxs)("div", {
    className: t,
    children: [(0, n.jsxs)("div", {
      className: d.doubleInput,
      children: [(0, n.jsx)(i.xJW, {
        title: o.intl.string(o.t.kKOIwM),
        required: true,
        children: (0, n.jsx)(i.Wrb, {
          value: b.startDate,
          onSelect: e => {
            r(x(u({}, b), {
              startDate: e
            }))
          },
          minDate: O,
          maxDate: P,
          disabled: f
        })
      }), (0, n.jsx)(i.xJW, {
        title: o.intl.string(o.t["6dGmCA"]),
        required: true,
        children: (0, n.jsx)(i.MGJ, {
          value: b.startDate,
          onChange: e => {
            e.isValid() && (null == j || j(true), r(x(u({}, b), {
              startDate: e
            })))
          },
          hideValue: !m,
          disabled: f
        })
      })]
    }), v, null != y && null != l && (0, n.jsx)(c.Z, {
      onRecurrenceChange: l,
      startDate: y,
      recurrenceRule: h
    })]
  })
}