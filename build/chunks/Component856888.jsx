/** Chunk was on web.js **/
/** chunk id: 856888, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => d
}), require("./642613.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk78839 = require("./78839.js"),
  Chunk851718 = require("./851718.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk597132 = require("./597132.js");

function d(e) {
  let {
    onGoBack: t
  } = e, n = (0, a.Wu)([s.Z], () => {
    var e, t;
    return null != (t = null == (e = s.Z.getActiveApplicationSubscriptions()) ? true : e.slice().sort((e, t) => {
      var n, r, i, a;
      return (null != (i = null == (n = e.createdAt) ? true : n.getTime()) ? i : e.currentPeriodStart.getTime()) - (null != (a = null == (r = t.createdAt) ? true : r.getTime()) ? a : t.currentPeriodStart.getTime())
    })) ? t : []
  }), [o, d] = i.useState();
  null == o && (o = (0, r.jsx)(f, {
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
    children: [o, (0, r.jsx)("div", {
      className: u.subscriptionsContainer,
      children: (0, r.jsx)(l.Z, {
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
    className: u.title,
    children: [(0, r.jsx)(o.hU, {
      "aria-label": c.intl.string(c.t["13/7kX"]),
      icon: () => (0, r.jsx)(o.j9r, {
        size: "sm"
      }),
      onClick: t,
      variant: "icon-only"
    }), (0, r.jsx)(o.Heading, {
      variant: "heading-lg/semibold",
      children: n
    })]
  })
}