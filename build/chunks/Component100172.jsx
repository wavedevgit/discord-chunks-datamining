/** Chunk was on 35894 **/
/** chunk id: 100172, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk33851 = require("./33851.js"),
  i = require.n(Chunk33851),
  Chunk989349 = require("./989349.js"),
  a = require.n(Chunk989349),
  Chunk417597 = require("./417597.js"),
  Chunk266047 = require("./266047.js"),
  Chunk221950 = require("./221950.js"),
  Chunk487518 = require("./487518.jsx"),
  Chunk985018 = require("./985018.jsx");

function f(e) {
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

function b(e, t) {
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

function m(e) {
  let {
    guildId: t,
    onClose: n
  } = e, l = (0, s.bG)([c.A], () => c.A.getSearchStateByGuildId(t), [t], i()), {
    selectedAccountAgeOption: o
  } = l, {
    afterDate: m,
    beforeDate: p,
    optionId: j
  } = o, g = j === u.H_.CUSTOM, h = g && null != m ? a()(m).format(u.Ti) : null, x = g && null != p ? a()(p).format(u.Ti) : null;
  return (0, r.jsx)(u.Ay, {
    startDateLabel: h,
    endDateLabel: x,
    afterDate: m,
    beforeDate: p,
    selectedOption: j,
    isCustomDateRange: g,
    menuName: "account-age",
    accessibilityLabel: C.intl.string(C.t["D++Tgf"]),
    onClose: n,
    onSelectDateOption: function(e, n) {
      let r = null != n ? a()().subtract(n.input, n.unit).valueOf() : null;
      (0, d.Ld)(t, b(f({}, l), {
        selectedAccountAgeOption: {
          optionId: e,
          afterDate: r,
          beforeDate: null
        }
      }))
    },
    onToggleCustomDateRange: function() {
      (0, d.Ld)(t, b(f({}, l), {
        selectedAccountAgeOption: {
          optionId: u.H_.CUSTOM,
          afterDate: g ? m : null,
          beforeDate: g ? p : null
        }
      }))
    },
    onSelectStartDate: function(e) {
      (0, d.Ld)(t, b(f({}, l), {
        selectedAccountAgeOption: {
          optionId: u.H_.CUSTOM,
          afterDate: e.valueOf(),
          beforeDate: p
        }
      }))
    },
    onSelectEndDate: function(e) {
      (0, d.Ld)(t, b(f({}, l), {
        selectedAccountAgeOption: {
          optionId: u.H_.CUSTOM,
          afterDate: m,
          beforeDate: e.valueOf()
        }
      }))
    }
  })
}