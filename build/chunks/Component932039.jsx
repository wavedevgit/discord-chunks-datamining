/** Chunk was on 6850 **/
/** chunk id: 932039, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  N2: () => g,
  Ol: () => v,
  ZP: () => y
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  c = require.n(Chunk913527),
  Chunk608787 = require("./608787.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk553826 = require("./553826.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk566816 = require("./566816.js");

function p(e) {
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

function h(e, t) {
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
let g = "MMM Do, YYYY",
  j = c()("2015-05-15").local(),
  x = (0, Chunk608787.Un)({
    createPromise: () => Promise.resolve().then(require.bind(require, 547800)),
    webpackId: 547800
  });
var v = ((r = {})[r.ALL = 0] = "ALL", r[r["1_HOUR"] = 1] = "1_HOUR", r[r["24_HOURS"] = 2] = "24_HOURS", r[r["7_DAYS"] = 3] = "7_DAYS", r[r["2_WEEKS"] = 4] = "2_WEEKS", r[r["4_WEEKS"] = 5] = "4_WEEKS", r[r["3_MONTHS"] = 6] = "3_MONTHS", r[r.CUSTOM = 7] = "CUSTOM", r);

function y(e) {
  let {
    startDateLabel: t,
    endDateLabel: n,
    afterDate: r,
    beforeDate: o,
    selectedOption: s,
    isCustomDateRange: u,
    menuName: g,
    onClose: v,
    onSelectDateOption: y,
    onToggleCustomDateRange: O,
    onSelectStartDate: H,
    onSelectEndDate: w
  } = e, S = [{
    id: 0,
    option: null,
    label: b.intl.string(b.t.jelCib)
  }, {
    id: 1,
    option: {
      input: 1,
      unit: "h"
    },
    label: b.intl.string(b.t["91RDqi"])
  }, {
    id: 2,
    option: {
      input: 24,
      unit: "h"
    },
    label: b.intl.string(b.t["Lj/1Tq"])
  }, {
    id: 3,
    option: {
      input: 7,
      unit: "d"
    },
    label: b.intl.string(b.t.NnUMSZ)
  }, {
    id: 4,
    option: {
      input: 2,
      unit: "w"
    },
    label: b.intl.string(b.t.hY3XWH)
  }, {
    id: 5,
    option: {
      input: 4,
      unit: "w"
    },
    label: b.intl.string(b.t.kQTwT0)
  }, {
    id: 6,
    option: {
      input: 3,
      unit: "M"
    },
    label: b.intl.string(b.t.EPuP0s)
  }], [Z, D] = i.useState(false), N = 7 !== s ? null : null != t && null != n ? "".concat(t, " - ").concat(n) : null != t ? b.intl.formatToPlainString(b.t.ClmSzd, {
    date: t
  }) : null != n ? b.intl.formatToPlainString(b.t.YvNhsd, {
    date: n
  }) : null, _ = i.useCallback(() => {
    D(true), O()
  }, [O]), R = i.useCallback(e => {
    H(e)
  }, [H]), L = i.useCallback(e => {
    w(e)
  }, [w]), I = i.useCallback(() => {
    null == o && null == r && y(0, null), D(false)
  }, [r, o, y]);
  return (0, l.jsx)(d.v2r, {
    navId: "member-safety-guild-member-".concat(g, "-menu"),
    onClose: v,
    "aria-label": b.intl.string(b.t.k9m8Rg),
    onSelect: m.dG4,
    children: (0, l.jsx)(d.kSQ, {
      children: Z ? (0, l.jsxs)(l.Fragment, {
        children: [(0, l.jsx)(d.sNh, {
          id: "back",
          action: I,
          render: e => (0, l.jsxs)("span", h(p({}, e), {
            className: f.nagivateBackContainer,
            children: [(0, l.jsx)(d.V7D, {
              size: "custom",
              color: "currentColor",
              width: 16,
              height: 16
            }), (0, l.jsx)(d.Text, {
              variant: "eyebrow",
              color: "text-strong",
              children: b.intl.string(b.t.BTfN6g)
            })]
          }))
        }), (0, l.jsx)(d.sNh, {
          id: "after-date-menu-item",
          label: b.intl.string(b.t.RDqVOD),
          subtext: t,
          subMenuClassName: f.calendarContainer,
          children: (0, l.jsx)(d.sNh, {
            id: "after-date-picker",
            render: e => (0, l.jsx)(x, h(p({}, e), {
              calendarClassName: f.calendar,
              value: u && null != r ? c()(r) : true,
              onSelect: R,
              maxDate: c()().local(),
              minDate: j
            }))
          })
        }), (0, l.jsx)(d.sNh, {
          id: "before-date-menu-item",
          label: b.intl.string(b.t.jF54hQ),
          subtext: n,
          subMenuClassName: f.calendarContainer,
          children: (0, l.jsx)(d.sNh, {
            id: "before-date-picker",
            render: e => (0, l.jsx)(x, h(p({}, e), {
              calendarClassName: f.calendar,
              value: u && null != o ? c()(o) : true,
              onSelect: L,
              maxDate: c()().local(),
              minDate: u && null != r ? c()(r) : j
            }))
          })
        })]
      }) : (0, l.jsxs)(l.Fragment, {
        children: [S.map(e => {
          let {
            id: t,
            option: n,
            label: r
          } = e;
          return (0, l.jsx)(d.k5B, {
            group: "member-safety-guild-member-".concat(g, "-menu"),
            id: "guild-member-".concat(g, "-option-").concat(t),
            label: r,
            action: () => y(t, n),
            checked: t === s
          }, "option-".concat(t))
        }), (0, l.jsx)(d.Clw, {}), (0, l.jsx)(d.sNh, {
          id: "guild-member-".concat(g, "-custom-option}"),
          action: _,
          render: e => (0, l.jsxs)("div", {
            className: a()(f.otherDatesContainer, {
              [f.focused]: e.isFocused
            }),
            children: [(0, l.jsxs)("div", {
              className: f.leftContainer,
              children: [(0, l.jsx)(d.Text, {
                className: a()(f.otherDateLabel, {
                  [f.focused]: e.isFocused
                }),
                variant: "text-sm/medium",
                children: b.intl.string(b.t.BTfN6g)
              }), null != N && (0, l.jsx)(d.Text, {
                className: a()(f.otherDateLabel, {
                  [f.focused]: e.isFocused
                }),
                color: "text-muted",
                variant: "text-xxs/medium",
                children: N
              })]
            }), 7 === s ? (0, l.jsx)(C.Z, {
              foreground: f.radioSelection,
              width: 18,
              height: 18
            }) : (0, l.jsx)(d.Fbu, {
              size: "custom",
              color: "currentColor",
              width: 16,
              height: 16,
              className: a()(f.otherDateLabel, {
                [f.focused]: e.isFocused
              })
            })]
          })
        })]
      })
    })
  })
}