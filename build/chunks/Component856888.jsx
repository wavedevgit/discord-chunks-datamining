/** Chunk was on web.js **/
/** chunk id: 856888, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./642613.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk78839 = require("./78839.js"),
  Chunk851718 = require("./851718.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk886112 = require("./886112.js");

function f(e) {
  let {
    onGoBack: t
  } = e, n = (0, a.Wu)([l.Z], () => {
    var e, t;
    return null != (t = null == (e = l.Z.getActiveApplicationSubscriptions()) ? true : e.slice().sort((e, t) => {
      var n, r, i, a;
      return (null != (i = null == (n = e.createdAt) ? true : n.getTime()) ? i : e.currentPeriodStart.getTime()) - (null != (a = null == (r = t.createdAt) ? true : r.getTime()) ? a : t.currentPeriodStart.getTime())
    })) ? t : []
  }), [o, s] = i.useState();
  null == o && (o = (0, r.jsx)(_, {
    onBack: t,
    title: u.intl.string(u.t["DB/m9f"])
  }));
  let f = (e, t) => {
    s((0, r.jsx)(_, {
      title: e,
      onBack: () => {
        t(), s(true)
      }
    }))
  };
  return (0, r.jsxs)("div", {
    children: [o, (0, r.jsx)("div", {
      className: d.subscriptionsContainer,
      children: (0, r.jsx)(c.Z, {
        subscriptions: n,
        updateHeader: f
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
    className: d.title,
    children: [(0, r.jsx)(o.zx, {
      look: o.zx.Looks.BLANK,
      onClick: t,
      size: o.zx.Sizes.ICON,
      children: (0, r.jsx)(s.j9r, {
        size: "sm"
      })
    }), (0, r.jsx)(s.X6q, {
      variant: "heading-lg/semibold",
      children: n
    })]
  })
}