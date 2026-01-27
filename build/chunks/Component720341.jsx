/** Chunk was on web.js **/
/** chunk id: 720341, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk968172 = require("./968172.js"),
  Chunk493108 = require("./493108.js"),
  Chunk408278 = require("./408278.jsx"),
  Chunk934551 = require("./934551.js"),
  Chunk460890 = require("./460890.jsx"),
  Chunk834730 = require("./834730.jsx"),
  Chunk730909 = require("./730909.js");

function _(e) {
  let {
    value: t,
    onChange: n,
    minValue: a,
    maxValue: _,
    disabled: h = false,
    readOnly: m = false,
    className: g,
    "aria-label": E
  } = e, {
    i18n: y
  } = (0, d.G9)(), [b, O] = i.useState(t);
  return i.useEffect(() => {
    O(t)
  }, [t]), (0, r.jsx)(s.Vv, {
    value: t,
    focusedValue: b,
    onFocusChange: O,
    onChange: n,
    minValue: a,
    maxValue: _,
    isDisabled: h,
    isReadOnly: m,
    "aria-label": E,
    "data-mana-component": "calendar",
    className: o()(p.BJ, g),
    children: e => (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("header", {
        className: p.I4,
        children: [(0, r.jsx)(c.K, {
          variant: "icon-only",
          size: "sm",
          icon: u.ChevronSmallLeftIcon,
          "aria-label": y.CALENDAR_PREVIOUS_MONTH_LABEL,
          onClick: () => e.state.focusPreviousPage(),
          slot: "previous"
        }), (0, r.jsx)(f.E, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: (0, r.jsx)(l.D, {})
        }), (0, r.jsx)(c.K, {
          variant: "icon-only",
          size: "sm",
          icon: u.ChevronSmallRightIcon,
          onClick: () => e.state.focusNextPage(),
          "aria-label": y.CALENDAR_NEXT_MONTH_LABEL,
          slot: "next"
        })]
      }), (0, r.jsxs)(s.r8, {
        className: p.ZP,
        weekdayStyle: "short",
        children: [(0, r.jsx)(s.co, {
          children: e => (0, r.jsx)(s.W$, {
            className: p.e4,
            children: (0, r.jsx)(f.E, {
              variant: "text-sm/normal",
              color: "text-muted",
              children: e
            })
          })
        }), (0, r.jsx)(s.Xq, {
          children: e => (0, r.jsx)(s.Zr, {
            date: e,
            className: p.Hn,
            children: e => {
              let {
                formattedDate: t
              } = e;
              return (0, r.jsx)(f.E, {
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