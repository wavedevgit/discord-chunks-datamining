/** Chunk was on 64982 **/
/** chunk id: 546221, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
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
  } = e, l = (0, c.mY)() ? null : x.intl.format(x.t.d1sCiW, {
    url: null != n ? b.EYA.DEVELOPER_PORTAL_PAYOUT_SETTINGS(n.id) : null
  });
  return 0 === t.length ? (0, r.jsxs)(i.Text, {
    variant: "text-sm/medium",
    children: [x.intl.string(x.t.RrtXuy), " ", l]
  }) : (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(i.Text, {
      variant: "text-sm/medium",
      children: [x.intl.string(x.t["9Ub4KY"]), " ", l]
    }), (0, r.jsx)(i.LZC, {
      size: 16
    }), (0, r.jsx)(m.ZP, {
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
  return null == n && 0 === i.length ? null : (0, r.jsx)(g.Z, {
    totalPayoutsForPeriod: n,
    guildId: t,
    className: j.currentMonthEarningsTable
  })
}
let O = e => {
  var t, n;
  let {
    guildId: s,
    application: o
  } = e, {
    loading: g,
    team: m,
    currentPeriod: O,
    allPeriods: C,
    metrics: y
  } = (0, d.Z)(s, o), N = (0, u.u)(s), E = (0, c.mY)();
  return g ? (0, r.jsx)(i.$jN, {}) : (0, r.jsxs)(r.Fragment, {
    children: [N && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.Z, {
        children: x.intl.format(x.t["2raBCT"], {
          insightsURL: b.EYA.DEVELOPER_PORTAL_GUILD_ANALYTICS_ROLE_SUBSCRIPTION(s)
        })
      }), (0, r.jsx)(i.LZC, {
        size: 32
      })]
    }), (0, r.jsxs)(i.C3N, {
      label: x.intl.string(x.t.ofmOzb),
      className: j.formSection,
      children: [(0, r.jsx)(i.LZC, {
        size: 8
      }), (0, r.jsxs)("div", {
        className: j.metricsContainer,
        children: [(0, r.jsx)(p.Z, {
          label: x.intl.string(x.t.iY1jW3),
          value: (0, a.T4)(null != (t = y.revenue) ? t : 0, b.pKx.USD),
          additionalContent: (0, r.jsx)(p.H, {
            value: y.revenuePctChange,
            isPercent: true
          })
        }), (0, r.jsx)(p.Z, {
          label: x.intl.string(x.t["cXyw2/"]),
          value: (0, r.jsxs)(r.Fragment, {
            children: [null != (n = y.subscribers) ? n : "-", " ", (0, r.jsx)(i.tBG, {
              size: "md",
              color: "currentColor",
              className: j.totalMembersIcon,
              "aria-hidden": true
            })]
          }),
          additionalContent: (0, r.jsx)(p.H, {
            value: y.subscriberChange
          })
        })]
      }), (0, r.jsx)(_, {
        guildId: s,
        totalPayoutsForPeriod: O
      })]
    }), (0, r.jsx)(i.C3N, {
      label: x.intl.string(x.t["+5Rmhl"]),
      className: j.formSection,
      children: (0, r.jsx)(v, {
        payoutsByPeriod: C,
        team: m
      })
    }), (0, r.jsx)(i.C3N, {
      label: x.intl.string(x.t.O8cDAJ),
      className: j.formSection,
      disabled: E,
      children: (0, r.jsx)(f.Z, {
        guildId: s,
        application: o
      })
    }), (0, r.jsx)(i.C3N, {
      label: x.intl.string(x.t["0n7R2X"]),
      className: j.formSection,
      children: (0, r.jsx)(h.Z, {
        guildId: s,
        allPeriods: C
      })
    })]
  })
};

function C(e) {
  return (0, r.jsx)(s.l, {
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