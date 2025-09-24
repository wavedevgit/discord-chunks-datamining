/** Chunk was on web.js **/
/** chunk id: 390966, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => C
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk894017 = require("./894017.js"),
  Chunk954313 = require("./954313.js"),
  Chunk849464 = require("./849464.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk646615 = require("./646615.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      g(e, t, n[t])
    })
  }
  return e
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let O = 20;

function v(e, t) {
  let n = t.toDate(),
    r = n.toLocaleString(h.intl.currentLocale, {
      weekday: "long"
    });
  switch (e) {
    case _.z.WEEKLY:
      return h.intl.formatToPlainString(h.t.xQM9X1, {
        weekday: r
      });
    case _.z.BIWEEKLY:
      return h.intl.formatToPlainString(h.t.RYscaW, {
        weekday: r
      });
    case _.z.MONTHLY:
      let i = Math.ceil(n.getDate() / 7);
      return h.intl.formatToPlainString(h.t["4ZN9Ag"], {
        weekday: r,
        nth: i
      });
    case _.z.YEARLY:
      return h.intl.formatToPlainString(h.t["rXUS+v"], {
        date: n.toLocaleString(h.intl.currentLocale, {
          month: "short",
          day: "2-digit"
        })
      });
    case _.z.WEEKDAY_ONLY:
      return h.intl.string(h.t["2BX6bG"]);
    case _.z.WEEKEND_ONLY:
      return h.intl.string(h.t["IEi+R0"]);
    default:
      return null
  }
}

function I(e, t, n, i, a) {
  switch (e) {
    case 1:
      return a > 0 ? h.intl.formatToPlainString(h.t.PQlCWl, {
        minutes: a
      }) : h.intl.string(h.t.WINqKS);
    case 2:
      return h.intl.string(h.t.WINqKS);
    case 3:
      return null != i && "" !== i ? h.intl.format(h.t.vHYgJS, {
        start: n,
        startHook: e => (0, r.jsx)(u.Text, {
          color: "text-feedback-positive",
          variant: "text-sm/semibold",
          className: m.liveEventEndTime,
          children: e
        }),
        end: i
      }) : null != n ? n : "";
    default:
      return t
  }
}

function T(e) {
  let t, {
      timeStatus: n,
      textBrand: r,
      textPositive: i,
      textDanger: a,
      endDateTimeString: o,
      startDateTimeString: s
    } = e,
    l = u.Que,
    c = r,
    d = "header-secondary";
  switch (n) {
    case 3:
      c = i, d = null != o ? true : "text-feedback-positive";
      break;
    case 4:
      l = u.T39;
      break;
    case 2:
    case 1:
      d = "text-brand", t = s;
      break;
    case 5:
      c = a
  }
  return {
    Icon: l,
    iconColor: c,
    textColor: d,
    tooltipText: t
  }
}

function S() {
  return (0, Chunk951288.jsx)(Chunk481060.IGR, {
    className: Chunk646615.newBadge,
    color: Chunk692547.Z.unsafe_rawColors.BRAND_260.css,
    text: (0, Chunk951288.jsx)(Chunk481060.Text, {
      className: Chunk646615.newBadgeText,
      variant: "text-xs/bold",
      children: Chunk388032.intl.string(Chunk388032.t.y2b7CA)
    })
  })
}

function A(e) {
  let {
    children: t,
    className: n,
    tooltipText: i
  } = e;
  return (0, r.jsx)("div", {
    className: o()(m.eventStatusContainer, n),
    children: (0, r.jsx)(u.ua7, {
      position: "right",
      text: i,
      shouldShow: null != i,
      children: e => (0, r.jsx)("div", y(E({}, e), {
        className: o()(m.eventStatusContainer, n),
        children: t
      }))
    })
  })
}

function C(e) {
  let {
    startTime: t,
    status: n,
    eventType: a,
    className: s,
    endTime: _,
    liveText: g,
    textVariant: E = "text-sm/semibold",
    isNew: b,
    recurrenceRule: y,
    guildEventId: C,
    recurrenceId: N
  } = e, R = (0, u.dQu)(c.Z.colors.TEXT_BRAND).hex(), P = (0, u.dQu)(c.Z.colors.TEXT_FEEDBACK_POSITIVE).hex(), w = (0, u.dQu)(c.Z.colors.TEXT_DANGER).hex();
  null == g && (g = a === p.WX.EXTERNAL ? h.intl.string(h.t.IyZxjI) : h.intl.string(h.t["X2K3//"]));
  let D = (0, d.Z)(N, C),
    [{
      startDateTimeString: x,
      endDateTimeString: L,
      currentOrPastEvent: j,
      upcomingEvent: M,
      diffMinutes: k
    }, U] = i.useState((0, f.ub)(t, _));
  i.useEffect(() => {
    U((0, f.ub)(t, _));
    let e = setInterval(() => U((0, f.ub)(t, _)), 1e3);
    return () => {
      clearInterval(e)
    }
  }, [t, _]);
  let G = x;
  null != L && "" !== L && (G = h.intl.formatToPlainString(h.t.tXbu7O, {
    start: x,
    end: L
  }));
  let B = i.useMemo(() => n === p.p1.CANCELED || (null == D ? true : D.is_canceled) ? 5 : n === p.p1.ACTIVE ? 3 : p.$I.has(n) ? 4 : j ? 2 : +!!M, [n, null == D ? true : D.is_canceled, j, M]),
    Z = I(B, G, g, L, k),
    {
      Icon: F,
      iconColor: V,
      textColor: H,
      tooltipText: Y
    } = i.useMemo(() => T({
      timeStatus: B,
      textBrand: R,
      textPositive: P,
      textDanger: w,
      endDateTimeString: L,
      startDateTimeString: x
    }), [B, R, P, w, L, x]),
    W = null;
  if (null != y) {
    let e = (0, f.Ho)(y);
    W = h.intl.formatToPlainString(h.t.HmKEqa, {
      recurrenceRule: e.toText()
    });
    let n = l()(t);
    W = v((0, f.zi)(n, y), n)
  }
  return (0, r.jsxs)(A, {
    className: o()(s, {
      [m.isRecurring]: null != W
    }),
    tooltipText: Y,
    children: [b && n === p.p1.SCHEDULED ? (0, r.jsx)(S, {}) : (0, r.jsx)(F, {
      color: V,
      size: "custom",
      width: O,
      height: O
    }), (0, r.jsxs)("div", {
      className: m.eventStatusLabel,
      children: [(0, r.jsx)(u.Text, {
        color: H,
        variant: E,
        children: Z
      }), null != W && (0, r.jsx)(u.Text, {
        color: "header-secondary",
        variant: "text-xs/normal",
        children: W
      })]
    })]
  })
}