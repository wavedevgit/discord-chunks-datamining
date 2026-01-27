/** Chunk was on 60667 **/
/** chunk id: 478407, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./638769.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk166403 = require("./166403.js"),
  Chunk510898 = require("./510898.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk104579 = require("./104579.js");

function u(e) {
  let {
    onGoBack: t
  } = e, n = (0, l.yK)([a.A], () => {
    var e, t;
    return null != (e = null == (t = a.A.getActiveApplicationSubscriptions()) ? true : t.slice().sort((e, t) => {
      var n, r, i, l;
      return (null != (n = null == (i = e.createdAt) ? true : i.getTime()) ? n : e.currentPeriodStart.getTime()) - (null != (r = null == (l = t.createdAt) ? true : l.getTime()) ? r : t.currentPeriodStart.getTime())
    })) ? e : []
  }), [s, u] = i.useState();
  return null == s && (s = (0, r.jsx)(_, {
    onBack: t,
    title: c.intl.string(c.t["DB/m9a"])
  })), (0, r.jsxs)("div", {
    children: [s, (0, r.jsx)("div", {
      className: d.A,
      children: (0, r.jsx)(o.A, {
        subscriptions: n,
        updateHeader: (e, t) => {
          u((0, r.jsx)(_, {
            title: e,
            onBack: () => {
              t(), u(true)
            }
          }))
        }
      })
    })]
  })
}

function _(e) {
  let {
    onBack: t,
    title: n
  } = e;
  return (0, r.jsxs)("div", {
    className: d.D,
    children: [(0, r.jsx)(s.K0, {
      "aria-label": c.intl.string(c.t["13/7kX"]),
      icon: () => (0, r.jsx)(s.Zge, {
        size: "sm"
      }),
      onClick: t,
      variant: "icon-only"
    }), (0, r.jsx)(s.Heading, {
      variant: "heading-lg/semibold",
      children: n
    })]
  })
}