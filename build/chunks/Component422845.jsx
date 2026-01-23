/** Chunk was on 86317 **/
/** chunk id: 422845, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk989349 = require("./989349.js"),
  i = require.n(Chunk989349),
  Chunk397927 = require("./397927.js"),
  Chunk974930 = require("./974930.js"),
  Chunk280871 = require("./280871.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk659621 = require("./659621.js");

function d(e) {
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

function x(e, t) {
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

function g(e) {
  let {
    className: t,
    onScheduleChange: n,
    onRecurrenceChange: r,
    onTimeChange: g,
    timeSelected: j = true,
    schedule: m,
    recurrenceRule: h,
    showEndDate: f = false,
    requireEndDate: b = false,
    disableStartDateTime: p = false
  } = e;
  if (null == m) return null;
  let v = null,
    y = m.startDate,
    O = i()(),
    _ = i()().add(s.IS, "days"),
    A = i()().add(s.Xy, "days");
  null != h && (_.add(s.Ze, "years"), A.add(s.Ze, "years"));
  let D = e => {
    n(x(d({}, m), {
      endDate: e
    }))
  };
  return f && (v = null != m.endDate || b ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: u.U,
      children: [(0, l.jsx)(a.J3s, {
        label: o.intl.string(o.t.CTLgZJ),
        required: b,
        value: m.endDate,
        onSelect: D,
        minDate: m.startDate,
        maxDate: A
      }), (0, l.jsx)(a.czz, {
        label: o.intl.string(o.t.j2RuXF),
        required: b,
        value: m.endDate,
        onChange: D
      })]
    }), b ? null : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(a.QWc, {
        onClick: () => {
          D(true)
        },
        text: o.intl.string(o.t.petdfk),
        size: "sm"
      }), (0, l.jsx)(a.hKd, {
        size: 24
      })]
    })]
  }) : (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(a.QWc, {
      onClick: () => {
        D(i()(m.startDate).add(1, "hour"))
      },
      text: o.intl.string(o.t.ncdPcn),
      size: "sm"
    }), (0, l.jsx)(a.hKd, {
      size: 24
    })]
  })), (0, l.jsxs)("div", {
    className: t,
    children: [(0, l.jsxs)("div", {
      className: u.U,
      children: [(0, l.jsx)(a.J3s, {
        label: o.intl.string(o.t.kKOIwJ),
        required: true,
        value: m.startDate,
        onSelect: e => {
          n(x(d({}, m), {
            startDate: e
          }))
        },
        minDate: O,
        maxDate: _,
        disabled: p
      }), (0, l.jsx)(a.czz, {
        label: o.intl.string(o.t["6dGmCD"]),
        required: true,
        value: m.startDate,
        onChange: e => {
          e.isValid() && (null == g || g(true), n(x(d({}, m), {
            startDate: e
          })))
        },
        hideValue: !j,
        disabled: p
      })]
    }), v, null != y && null != r && (0, l.jsx)(c.A, {
      onRecurrenceChange: r,
      startDate: y,
      recurrenceRule: h
    })]
  })
}