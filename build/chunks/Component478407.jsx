/** Chunk was on web.js **/
/** chunk id: 478407, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
}), require("./638769.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk166403 = require("./166403.js"),
  Chunk510898 = require("./510898.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk104579 = require("./104579.js");

function d(e) {
  let {
    onGoBack: t
  } = e, n = (0, a.yK)([o.A], () => {
    var e, t;
    return null != (e = null == (t = o.A.getActiveApplicationSubscriptions()) ? true : t.slice().sort((e, t) => {
      var n, r, i, a;
      return (null != (n = null == (i = e.createdAt) ? true : i.getTime()) ? n : e.currentPeriodStart.getTime()) - (null != (r = null == (a = t.createdAt) ? true : a.getTime()) ? r : t.currentPeriodStart.getTime())
    })) ? e : []
  }), [s, d] = i.useState();
  null == s && (s = (0, r.jsx)(f, {
    onBack: t,
    title: c.intl.string(c.t["DB/m9a"])
  }));
  let p = (e, t) => {
    d((0, r.jsx)(f, {
      title: e,
      onBack: () => {
        t(), d(true)
      }
    }))
  };
  return (0, r.jsxs)("div", {
    children: [s, (0, r.jsx)("div", {
      className: u.A,
      children: (0, r.jsx)(l.A, {
        subscriptions: n,
        updateHeader: p
      })
    })]
  })
}

function f(e) {
  let {
    onBack: t,
    title: n
  } = e;
  return (0, r.jsxs)("div", {
    className: u.D,
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