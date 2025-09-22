/** Chunk was on 8106 **/
/** chunk id: 546221, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk825055 = require("./825055.jsx"),
  Chunk937615 = require("./937615.js"),
  Chunk730647 = require("./730647.jsx"),
  Chunk584825 = require("./584825.js"),
  Chunk723047 = require("./723047.js"),
  Chunk997519 = require("./997519.js"),
  Chunk146710 = require("./146710.js"),
  Chunk146610 = require("./146610.jsx"),
  Chunk67152 = require("./67152.jsx"),
  Chunk791382 = require("./791382.jsx"),
  Chunk277369 = require("./277369.jsx"),
  Chunk215124 = require("./215124.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk150043 = require("./150043.js");

function v(e) {
  let {
    payoutsByPeriod: t,
    team: n
  } = e, l = (0, c.mY)() ? null : x.intl.format(x.t.d1sCiY, {
    url: null != n ? b.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(n.id) : null
  });
  return 0 === t.length ? (0, r.jsxs)(i.R94, {
    type: i.R94.Types.DESCRIPTION,
    children: [x.intl.string(x.t.RrtXu7), " ", l]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(i.R94, {
      type: i.R94.Types.DESCRIPTION,
      children: [x.intl.string(x.t["9Ub4KS"]), " ", l]
    }), (0, r.jsx)(i.LZC, {
      size: 16
    }), (0, r.jsx)(g.ZP, {
      payoutsByPeriod: t
    })]
  })
}

function _(e) {
  let {
    guildId: t,
    totalPayoutsForPeriod: n
  } = e, i = (0, o.qi)(t, {
    includeSoftDeleted: true
  });
  return null == n && 0 === i.length ? null : (0, r.jsx)(m.Z, {
    totalPayoutsForPeriod: n,
    guildId: t,
    className: j.currentMonthEarningsTable
  })
}
let O = e => {
  var t, n;
  let {
    guildId: a,
    application: o
  } = e, {
    loading: m,
    team: g,
    currentPeriod: O,
    allPeriods: y,
    metrics: C
  } = (0, d.Z)(a, o), N = (0, u.u)(a), E = (0, c.mY)();
  return m ? (0, r.jsx)(i.$jN, {}) : (0, r.jsxs)(r.Fragment, {
    children: [N && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.Z, {
        children: x.intl.format(x.t["2raBCQ"], {
          insightsURL: b.EYA.DEVELOPER_PORTAL_GUILD_ANALYTICS_ROLE_SUBSCRIPTION(a)
        })
      }), (0, r.jsx)(i.LZC, {
        size: 32
      })]
    }), (0, r.jsxs)(i.hjN, {
      title: x.intl.string(x.t.ofmOzc),
      className: j.formSection,
      children: [(0, r.jsx)(i.LZC, {
        size: 8
      }), (0, r.jsxs)("div", {
        className: j.metricsContainer,
        children: [(0, r.jsx)(p.Z, {
          label: x.intl.string(x.t.iY1jW1),
          value: (0, s.T4)(null != (t = C.revenue) ? t : 0, b.pKx.USD),
          additionalContent: (0, r.jsx)(p.H, {
            value: C.revenuePctChange,
            isPercent: true
          })
        }), (0, r.jsx)(p.Z, {
          label: x.intl.string(x.t.cXyw29),
          value: (0, r.jsxs)(r.Fragment, {
            children: [null != (n = C.subscribers) ? n : "-", " ", (0, r.jsx)(i.tBG, {
              size: "md",
              color: "currentColor",
              className: j.totalMembersIcon,
              "aria-hidden": true
            })]
          }),
          additionalContent: (0, r.jsx)(p.H, {
            value: C.subscriberChange
          })
        })]
      }), (0, r.jsx)(_, {
        guildId: a,
        totalPayoutsForPeriod: O
      })]
    }), (0, r.jsx)(i.hjN, {
      title: x.intl.string(x.t["+5Rmho"]),
      className: j.formSection,
      children: (0, r.jsx)(v, {
        payoutsByPeriod: y,
        team: g
      })
    }), (0, r.jsx)(i.hjN, {
      title: x.intl.string(x.t.O8cDAA),
      disabled: E,
      className: j.formSection,
      children: (0, r.jsx)(f.Z, {
        guildId: a,
        application: o
      })
    }), (0, r.jsx)(i.hjN, {
      title: x.intl.string(x.t["0n7R2d"]),
      className: j.formSection,
      children: (0, r.jsx)(h.Z, {
        guildId: a,
        allPeriods: y
      })
    })]
  })
};

function y(e) {
  return (0, r.jsx)(a.l, {
    guildId: e.guildId,
    children: (0, r.jsx)(O, function(e) {
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
    }({}, e))
  })
}