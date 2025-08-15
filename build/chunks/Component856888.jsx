/** Chunk was on 30202 **/
/** chunk id: 856888, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./642613.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk78839 = require("./78839.js"),
  Chunk851718 = require("./851718.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk886112 = require("./886112.js");

function m(e) {
  let {
    onGoBack: t
  } = e, n = (0, s.Wu)([o.Z], () => {
    var e, t;
    return null != (t = null == (e = o.Z.getActiveApplicationSubscriptions()) ? true : e.slice().sort((e, t) => {
      var n, i, r, s;
      return (null != (r = null == (n = e.createdAt) ? true : n.getTime()) ? r : e.currentPeriodStart.getTime()) - (null != (s = null == (i = t.createdAt) ? true : i.getTime()) ? s : t.currentPeriodStart.getTime())
    })) ? t : []
  }), [a, l] = r.useState();
  return null == a && (a = (0, i.jsx)(p, {
    onBack: t,
    title: d.intl.string(d.t["DB/m9f"])
  })), (0, i.jsxs)("div", {
    children: [a, (0, i.jsx)("div", {
      className: u.subscriptionsContainer,
      children: (0, i.jsx)(c.Z, {
        subscriptions: n,
        updateHeader: (e, t) => {
          l((0, i.jsx)(p, {
            title: e,
            onBack: () => {
              t(), l(true)
            }
          }))
        }
      })
    })]
  })
}

function p(e) {
  let {
    onBack: t,
    title: n
  } = e;
  return (0, i.jsxs)("div", {
    className: u.title,
    children: [(0, i.jsx)(a.zx, {
      look: a.zx.Looks.BLANK,
      onClick: t,
      size: a.zx.Sizes.ICON,
      children: (0, i.jsx)(l.j9r, {
        size: "sm"
      })
    }), (0, i.jsx)(l.X6q, {
      variant: "heading-lg/semibold",
      children: n
    })]
  })
}