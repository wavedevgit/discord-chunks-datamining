/** Chunk was on 86317 **/
/** chunk id: 422845, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
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

function h(e) {
  let {
    className: t,
    onScheduleChange: n,
    onRecurrenceChange: r,
    onTimeChange: h,
    timeSelected: f = true,
    schedule: x,
    recurrenceRule: m,
    showEndDate: j = false,
    requireEndDate: b = false,
    disableStartDateTime: p = false
  } = e;
  if (null == x) return null;
  let _ = null,
    O = x.startDate,
    y = i()(),
    v = i()().add(s.IS, "days"),
    A = i()().add(s.Xy, "days");
  null != m && (v.add(s.Ze, "years"), A.add(s.Ze, "years"));
  let T = e => {
    n(g(d({}, x), {
      endDate: e
    }))
  };
  return j && (_ = null != x.endDate || b ? (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsxs)("div", {
      className: u.U,
      children: [(0, l.jsx)(a.J3s, {
        label: o.intl.string(o.t.CTLgZJ),
        required: b,
        value: x.endDate,
        onSelect: T,
        minDate: x.startDate,
        maxDate: A
      }), (0, l.jsx)(a.czz, {
        label: o.intl.string(o.t.j2RuXF),
        required: b,
        value: x.endDate,
        onChange: T
      })]
    }), b ? null : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsx)(a.QWc, {
        onClick: () => {
          T(true)
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
        T(i()(x.startDate).add(1, "hour"))
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
        value: x.startDate,
        onSelect: e => {
          n(g(d({}, x), {
            startDate: e
          }))
        },
        minDate: y,
        maxDate: v,
        disabled: p
      }), (0, l.jsx)(a.czz, {
        label: o.intl.string(o.t["6dGmCD"]),
        required: true,
        value: x.startDate,
        onChange: e => {
          e.isValid() && (null == h || h(true), n(g(d({}, x), {
            startDate: e
          })))
        },
        hideValue: !f,
        disabled: p
      })]
    }), _, null != O && null != r && (0, l.jsx)(c.A, {
      onRecurrenceChange: r,
      startDate: O,
      recurrenceRule: m
    })]
  })
}