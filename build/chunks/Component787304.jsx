/** Chunk was on 66548 **/
/** chunk id: 787304, original params: e,l,t (module,exports,require) **/
require.d(exports, {
  f: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk862371 = require("./862371.js"),
  Chunk489892 = require("./489892.js"),
  Chunk602493 = require("./602493.jsx"),
  Chunk657707 = require("./657707.js"),
  Chunk402453 = require("./402453.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk238584 = require("./238584.js");

function y(e) {
  let {
    value: l,
    onChange: t,
    minValue: o,
    maxValue: y,
    disabled: m = false,
    readOnly: f = false,
    className: v,
    "aria-label": h
  } = e, {
    i18n: x
  } = (0, c.ZF)(), [g, O] = n.useState(l);
  return n.useEffect(() => {
    O(l)
  }, [l]), (0, a.jsx)(r.f, {
    value: l,
    focusedValue: g,
    onFocusChange: O,
    onChange: t,
    minValue: o,
    maxValue: y,
    isDisabled: m,
    isReadOnly: f,
    "aria-label": h,
    "data-mana-component": "calendar",
    className: i()(p.calendar, v),
    children: e => (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsxs)("header", {
        className: p.calendarHeader,
        children: [(0, a.jsx)(u.h, {
          variant: "icon-only",
          size: "sm",
          icon: d.V7D,
          "aria-label": x.CALENDAR_PREVIOUS_MONTH_LABEL,
          onClick: () => e.state.focusPreviousPage(),
          slot: "previous"
        }), (0, a.jsx)(b.x, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: (0, a.jsx)(s.X, {})
        }), (0, a.jsx)(u.h, {
          variant: "icon-only",
          size: "sm",
          icon: d.Fbu,
          onClick: () => e.state.focusNextPage(),
          "aria-label": x.CALENDAR_NEXT_MONTH_LABEL,
          slot: "next"
        })]
      }), (0, a.jsxs)(r.TK, {
        className: p.calendarGrid,
        weekdayStyle: "short",
        children: [(0, a.jsx)(r.pg, {
          children: e => (0, a.jsx)(r.mc, {
            className: p.headerCell,
            children: (0, a.jsx)(b.x, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: e
            })
          })
        }), (0, a.jsx)(r.MU, {
          children: e => (0, a.jsx)(r.VX, {
            date: e,
            className: p.cell,
            children: e => {
              let {
                formattedDate: l
              } = e;
              return (0, a.jsx)(b.x, {
                variant: "text-md/normal",
                color: "currentColor",
                children: l
              })
            }
          })
        })]
      })]
    })
  })
}