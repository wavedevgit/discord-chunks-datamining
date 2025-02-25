/** Chunk was on web.js **/
"use strict";
n.d(t, {
  W: () => y
});
var r = n(200651);
n(192379);
var i = n(120356),
  o = n.n(i),
  a = n(547800),
  s = n(1561),
  l = n(507274),
  c = n(235874),
  u = n(481060),
  d = n(540059),
  f = n(262813),
  _ = n(630824);

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      p(e, t, n[t])
    })
  }
  return e
}

function g(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function m(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : g(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, i = v(e, t);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    o = Object.keys(e);
  for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let b = "MMM D, YYYY";

function y(e) {
  let {
    value: t,
    onSelect: n,
    dateFormat: i = b,
    minDate: p,
    maxDate: g,
    disabled: v = !1
  } = e, y = (0, d.Q3)("DateInput");

  function O(e) {
    let {
      closePopout: i
    } = e;
    return (0, r.jsx)(l.V, {
      children: (0, r.jsx)(a.CalendarPicker, {
        minDate: p,
        maxDate: g,
        value: t,
        onSelect: e => {
          n(e), i()
        },
        calendarClassName: f.calendarContainer,
        onClickOutside: i,
        autoFocus: !0
      })
    })
  }
  return (0, r.jsx)(c.y, {
    renderPopout: O,
    position: "bottom",
    children: e => {
      var {
        onClick: n
      } = e, a = E(e, ["onClick"]);
      return (0, r.jsx)(s.P, m(h({}, a), {
        className: o()(_.inputDefault, f.container, {
          [_.disabled]: v,
          [f.disabled]: v
        }),
        onClick: v ? void 0 : n,
        "aria-disabled": v,
        children: (0, r.jsxs)("div", {
          className: f.content,
          children: [(0, r.jsx)("div", {
            className: f.text,
            children: null == t ? void 0 : t.format(i)
          }), (0, r.jsx)(u.Que, {
            size: y ? "sm" : "md",
            color: "currentColor",
            className: f.icon
          })]
        })
      }))
    }
  })
}