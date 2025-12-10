/** Chunk was on web.js **/
/** chunk id: 390966, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => I
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk894017 = require("./894017.js"),
  Chunk854698 = require("./854698.js"),
  Chunk849464 = require("./849464.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk646615 = require("./646615.js");
let E = 20;

function b(e, t) {
  let n = t.toDate(),
    r = n.toLocaleString(h.intl.currentLocale, {
      weekday: "long"
    });
  switch (e) {
    case _.z.WEEKLY:
      return h.intl.formatToPlainString(h.t.xQM9X0, {
        weekday: r
      });
    case _.z.BIWEEKLY:
      return h.intl.formatToPlainString(h.t.RYscac, {
        weekday: r
      });
    case _.z.MONTHLY:
      let i = Math.ceil(n.getDate() / 7);
      return h.intl.formatToPlainString(h.t["4ZN9Ap"], {
        weekday: r,
        nth: i
      });
    case _.z.YEARLY:
      return h.intl.formatToPlainString(h.t["rXUS+j"], {
        date: n.toLocaleString(h.intl.currentLocale, {
          month: "short",
          day: "2-digit"
        })
      });
    case _.z.WEEKDAY_ONLY:
      return h.intl.string(h.t["2BX6bC"]);
    case _.z.WEEKEND_ONLY:
      return h.intl.string(h.t["IEi+Rw"]);
    default:
      return null
  }
}

function y(e, t, n, i, a) {
  switch (e) {
    case 1:
      return a > 0 ? h.intl.formatToPlainString(h.t.PQlCWk, {
        minutes: a
      }) : h.intl.string(h.t.WINqKV);
    case 2:
      return h.intl.string(h.t.WINqKV);
    case 3:
      return null != i && "" !== i ? h.intl.format(h.t.vHYgJW, {
        start: n,
        startHook: e => (0, r.jsx)(d.Text, {
          color: "text-feedback-positive",
          variant: "text-sm/semibold",
          className: g.liveEventEndTime,
          children: e
        }),
        end: i
      }) : null != n ? n : "";
    default:
      return t
  }
}

function O(e) {
  let t, {
      timeStatus: n,
      textBrand: r,
      textPositive: i,
      textDanger: a,
      endDateTimeString: o,
      startDateTimeString: s
    } = e,
    l = d.Que,
    c = r,
    u = "text-default";
  switch (n) {
    case 3:
      c = i, u = null != o ? true : "text-feedback-positive";
      break;
    case 4:
      l = d.T39;
      break;
    case 2:
    case 1:
      u = "text-brand", t = s;
      break;
    case 5:
      c = a
  }
  return {
    Icon: l,
    iconColor: c,
    textColor: u,
    tooltipText: t
  }
}

function v() {
  return (0, Chunk54381.jsx)(Chunk481060.IGR, {
    className: Chunk646615.newBadge,
    color: Chunk692547.Z.unsafe_rawColors.BRAND_260.css,
    text: (0, Chunk54381.jsx)(Chunk481060.Text, {
      className: Chunk646615.newBadgeText,
      variant: "text-xs/bold",
      children: Chunk388032.intl.string(Chunk388032.t.y2b7CA)
    })
  })
}

function S(e) {
  let {
    children: t,
    className: n,
    tooltipText: i
  } = e;
  return (0, r.jsx)("div", {
    className: o()(g.eventStatusContainer, n),
    children: (0, r.jsx)(u.u, {
      position: "right",
      text: i,
      shouldShow: null != i,
      children: (0, r.jsx)("div", {
        className: o()(g.eventStatusContainer, n),
        children: t
      })
    })
  })
}

function I(e) {
  let {
    startTime: t,
    status: n,
    eventType: a,
    className: s,
    endTime: u,
    liveText: _,
    textVariant: I = "text-sm/semibold",
    isNew: T,
    recurrenceRule: C,
    guildEventId: A,
    recurrenceId: N
  } = e, P = (0, d.dQu)(c.Z.colors.TEXT_BRAND).hex(), R = (0, d.dQu)(c.Z.colors.TEXT_FEEDBACK_POSITIVE).hex(), w = (0, d.dQu)(c.Z.colors.TEXT_FEEDBACK_CRITICAL).hex();
  null == _ && (_ = a === m.WX.EXTERNAL ? h.intl.string(h.t.IyZxjH) : h.intl.string(h.t["X2K3/4"]));
  let D = (0, f.Z)(N, A),
    [{
      startDateTimeString: x,
      endDateTimeString: L,
      currentOrPastEvent: j,
      upcomingEvent: M,
      diffMinutes: k
    }, U] = i.useState((0, p.ub)(t, u));
  i.useEffect(() => {
    U((0, p.ub)(t, u));
    let e = setInterval(() => U((0, p.ub)(t, u)), 1e3);
    return () => {
      clearInterval(e)
    }
  }, [t, u]);
  let G = x;
  null != L && "" !== L && (G = h.intl.formatToPlainString(h.t.tXbu7I, {
    start: x,
    end: L
  }));
  let Z = i.useMemo(() => n === m.p1.CANCELED || (null == D ? true : D.is_canceled) ? 5 : n === m.p1.ACTIVE ? 3 : m.$I.has(n) ? 4 : j ? 2 : +!!M, [n, null == D ? true : D.is_canceled, j, M]),
    B = y(Z, G, _, L, k),
    {
      Icon: F,
      iconColor: V,
      textColor: H,
      tooltipText: Y
    } = i.useMemo(() => O({
      timeStatus: Z,
      textBrand: P,
      textPositive: R,
      textDanger: w,
      endDateTimeString: L,
      startDateTimeString: x
    }), [Z, P, R, w, L, x]),
    W = null;
  if (null != C) {
    let e = (0, p.Ho)(C);
    W = h.intl.formatToPlainString(h.t.HmKEqW, {
      recurrenceRule: e.toText()
    });
    let n = l()(t);
    W = b((0, p.zi)(n, C), n)
  }
  return (0, r.jsxs)(S, {
    className: o()(s, {
      [g.isRecurring]: null != W
    }),
    tooltipText: Y,
    children: [T && n === m.p1.SCHEDULED ? (0, r.jsx)(v, {}) : (0, r.jsx)(F, {
      color: V,
      size: "custom",
      width: E,
      height: E
    }), (0, r.jsxs)("div", {
      className: g.eventStatusLabel,
      children: [(0, r.jsx)(d.Text, {
        color: H,
        variant: I,
        children: B
      }), null != W && (0, r.jsx)(d.Text, {
        color: "text-default",
        variant: "text-xs/normal",
        children: W
      })]
    })]
  })
}