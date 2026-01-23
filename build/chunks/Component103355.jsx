/** Chunk was on web.js **/
/** chunk id: 103355, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk722260 = require("./722260.js"),
  Chunk974930 = require("./974930.js"),
  Chunk604701 = require("./604701.js"),
  Chunk988794 = require("./988794.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk719247 = require("./719247.js");
let E = 20;

function y(e, t) {
  let n = t.toDate(),
    r = n.toLocaleString(m.intl.currentLocale, {
      weekday: "long"
    });
  switch (e) {
    case _.z.WEEKLY:
      return m.intl.formatToPlainString(m.t.xQM9X0, {
        weekday: r
      });
    case _.z.BIWEEKLY:
      return m.intl.formatToPlainString(m.t.RYscac, {
        weekday: r
      });
    case _.z.MONTHLY:
      let i = Math.ceil(n.getDate() / 7);
      return m.intl.formatToPlainString(m.t["4ZN9Ap"], {
        weekday: r,
        nth: i
      });
    case _.z.YEARLY:
      return m.intl.formatToPlainString(m.t["rXUS+j"], {
        date: n.toLocaleString(m.intl.currentLocale, {
          month: "short",
          day: "2-digit"
        })
      });
    case _.z.WEEKDAY_ONLY:
      return m.intl.string(m.t["2BX6bC"]);
    case _.z.WEEKEND_ONLY:
      return m.intl.string(m.t["IEi+Rw"]);
    default:
      return null
  }
}

function b(e, t, n, i, a) {
  switch (e) {
    case 1:
      return a > 0 ? m.intl.formatToPlainString(m.t.PQlCWk, {
        minutes: a
      }) : m.intl.string(m.t.WINqKV);
    case 2:
      return m.intl.string(m.t.WINqKV);
    case 3:
      return null != i && "" !== i ? m.intl.format(m.t.vHYgJW, {
        start: n,
        startHook: e => (0, r.jsx)(d.Text, {
          color: "text-feedback-positive",
          variant: "text-sm/semibold",
          className: g.Py,
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
      endDateTimeString: s,
      startDateTimeString: o
    } = e,
    l = d.CTc,
    c = r,
    u = "text-default";
  switch (n) {
    case 3:
      c = i, u = null != s ? true : "text-feedback-positive";
      break;
    case 4:
      l = d.O4;
      break;
    case 2:
    case 1:
      u = "text-brand", t = o;
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
  return (0, r.jsx)(d.LpS, {
    className: g.Ad,
    color: c.A.unsafe_rawColors.BRAND_260.css,
    text: (0, r.jsx)(d.Text, {
      className: g.rm,
      variant: "text-xs/bold",
      children: m.intl.string(m.t.y2b7CA)
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
    className: s()(g.cd, n),
    children: (0, r.jsx)(u.m, {
      position: "right",
      text: i,
      shouldShow: null != i,
      children: (0, r.jsx)("div", {
        className: s()(g.cd, n),
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
    className: o,
    endTime: u,
    liveText: _,
    textVariant: I = "text-sm/semibold",
    isNew: S,
    recurrenceRule: T,
    guildEventId: C,
    recurrenceId: N
  } = e, R = (0, d.rdh)(c.A.colors.TEXT_BRAND).hex(), w = (0, d.rdh)(c.A.colors.TEXT_FEEDBACK_POSITIVE).hex(), P = (0, d.rdh)(c.A.colors.TEXT_FEEDBACK_CRITICAL).hex();
  null == _ && (_ = a === h.Ps.EXTERNAL ? m.intl.string(m.t.IyZxjH) : m.intl.string(m.t["X2K3/4"]));
  let D = (0, f.A)(N, C),
    [{
      startDateTimeString: x,
      endDateTimeString: L,
      currentOrPastEvent: j,
      upcomingEvent: M,
      diffMinutes: k
    }, U] = i.useState((0, p.CC)(t, u));
  i.useEffect(() => {
    U((0, p.CC)(t, u));
    let e = setInterval(() => U((0, p.CC)(t, u)), 1e3);
    return () => {
      clearInterval(e)
    }
  }, [t, u]);
  let G = x;
  null != L && "" !== L && (G = m.intl.formatToPlainString(m.t.tXbu7I, {
    start: x,
    end: L
  }));
  let V = i.useMemo(() => n === h.XG.CANCELED || (null == D ? true : D.is_canceled) ? 5 : n === h.XG.ACTIVE ? 3 : h.lV.has(n) ? 4 : j ? 2 : +!!M, [n, null == D ? true : D.is_canceled, j, M]),
    F = b(V, G, _, L, k),
    {
      Icon: B,
      iconColor: H,
      textColor: Y,
      tooltipText: W
    } = i.useMemo(() => O({
      timeStatus: V,
      textBrand: R,
      textPositive: w,
      textDanger: P,
      endDateTimeString: L,
      startDateTimeString: x
    }), [V, R, w, P, L, x]),
    K = null;
  if (null != T) {
    let e = (0, p.X7)(T);
    K = m.intl.formatToPlainString(m.t.HmKEqW, {
      recurrenceRule: e.toText()
    });
    let n = l()(t);
    K = y((0, p.z7)(n, T), n)
  }
  return (0, r.jsxs)(A, {
    className: s()(o, {
      [g.AD]: null != K
    }),
    tooltipText: W,
    children: [S && n === h.XG.SCHEDULED ? (0, r.jsx)(v, {}) : (0, r.jsx)(B, {
      color: H,
      size: "custom",
      width: E,
      height: E
    }), (0, r.jsxs)("div", {
      className: g.Zy,
      children: [(0, r.jsx)(d.Text, {
        color: Y,
        variant: I,
        children: F
      }), null != K && (0, r.jsx)(d.Text, {
        color: "text-default",
        variant: "text-xs/normal",
        children: K
      })]
    })]
  })
}