/** Chunk was on web.js **/
/** chunk id: 787304, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  f: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk971903 = require("./971903.js"),
  Chunk247062 = require("./247062.js"),
  Chunk602493 = require("./602493.jsx"),
  Chunk657707 = require("./657707.js"),
  Chunk402453 = require("./402453.jsx"),
  Chunk777207 = require("./777207.jsx"),
  Chunk238584 = require("./238584.js");

function _(e) {
  let {
    value: t,
    onChange: n,
    minValue: a,
    maxValue: _,
    disabled: m = false,
    readOnly: h = false,
    className: g,
    "aria-label": E
  } = e, {
    i18n: b
  } = (0, d.ZF)(), [y, O] = i.useState(t);
  return i.useEffect(() => {
    O(t)
  }, [t]), (0, r.jsx)(s.f, {
    value: t,
    focusedValue: y,
    onFocusChange: O,
    onChange: n,
    minValue: a,
    maxValue: _,
    isDisabled: m,
    isReadOnly: h,
    "aria-label": E,
    "data-mana-component": "calendar",
    className: o()(p.calendar, g),
    children: e => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("header", {
        className: p.calendarHeader,
        children: [(0, r.jsx)(c.h, {
          variant: "icon-only",
          size: "sm",
          icon: u.V7D,
          "aria-label": b.CALENDAR_PREVIOUS_MONTH_LABEL,
          onClick: () => e.state.focusPreviousPage(),
          slot: "previous"
        }), (0, r.jsx)(f.x, {
          variant: "text-md/semibold",
          color: "header-primary",
          children: (0, r.jsx)(l.X, {})
        }), (0, r.jsx)(c.h, {
          variant: "icon-only",
          size: "sm",
          icon: u.Fbu,
          onClick: () => e.state.focusNextPage(),
          "aria-label": b.CALENDAR_NEXT_MONTH_LABEL,
          slot: "next"
        })]
      }), (0, r.jsxs)(s.TK, {
        className: p.calendarGrid,
        weekdayStyle: "short",
        children: [(0, r.jsx)(s.pg, {
          children: e => (0, r.jsx)(s.mc, {
            className: p.headerCell,
            children: (0, r.jsx)(f.x, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: e
            })
          })
        }), (0, r.jsx)(s.MU, {
          children: e => (0, r.jsx)(s.VX, {
            date: e,
            className: p.cell,
            children: e => {
              let {
                formattedDate: t
              } = e;
              return (0, r.jsx)(f.x, {
                variant: "text-md/normal",
                color: "currentColor",
                children: t
              })
            }
          })
        })]
      })]
    })
  })
}