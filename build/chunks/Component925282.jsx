/** Chunk was on 35894 **/
/** chunk id: 925282, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
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

function m(e) {
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

function p(e, t) {
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

function b(e) {
  let {
    guildId: t,
    onClose: n
  } = e, l = (0, s.bG)([c.A], () => c.A.getSearchStateByGuildId(t), [t], i()), {
    selectedJoinDateOption: o
  } = l, {
    afterDate: b,
    beforeDate: f,
    optionId: j
  } = o, g = j === d.H_.CUSTOM, h = g && null != b ? a()(b).format(d.Ti) : null, x = g && null != f ? a()(f).format(d.Ti) : null;
  return (0, r.jsx)(d.Ay, {
    startDateLabel: h,
    endDateLabel: x,
    afterDate: b,
    beforeDate: f,
    selectedOption: j,
    isCustomDateRange: g,
    menuName: "joined-date",
    accessibilityLabel: C.intl.string(C.t.XMVinX),
    onClose: n,
    onSelectDateOption: function(e, n) {
      let r = null != n ? a()().subtract(n.input, n.unit).valueOf() : null;
      (0, u.Ld)(t, p(m({}, l), {
        selectedJoinDateOption: {
          optionId: e,
          afterDate: r,
          beforeDate: null
        }
      }))
    },
    onToggleCustomDateRange: function() {
      (0, u.Ld)(t, p(m({}, l), {
        selectedJoinDateOption: {
          optionId: d.H_.CUSTOM,
          afterDate: g ? b : null,
          beforeDate: g ? f : null
        }
      }))
    },
    onSelectStartDate: function(e) {
      (0, u.Ld)(t, p(m({}, l), {
        selectedJoinDateOption: {
          optionId: d.H_.CUSTOM,
          afterDate: e.valueOf(),
          beforeDate: f
        }
      }))
    },
    onSelectEndDate: function(e) {
      (0, u.Ld)(t, p(m({}, l), {
        selectedJoinDateOption: {
          optionId: d.H_.CUSTOM,
          afterDate: b,
          beforeDate: e.valueOf()
        }
      }))
    }
  })
}