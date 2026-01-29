/** Chunk was on 87557 **/
/** chunk id: 476398, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => f
}), require("./896048.js"), require("./114821.js"), require("./339614.js");
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk657331 = require("./657331.js"),
  Chunk287809 = require("./287809.js"),
  Chunk574520 = require("./574520.js"),
  Chunk435738 = require("./435738.js"),
  Chunk99753 = require("./99753.js"),
  Chunk475450 = require("./475450.js"),
  Chunk583846 = require("./583846.js"),
  Chunk424994 = require("./424994.js"),
  Chunk805176 = require("./805176.js");

function g(e) {
  let {
    id: t
  } = e, n = (0, l.bG)([o.default], () => o.default.getUser(t));
  return null == n ? null : (0, a.jsx)(r.DUT, {
    className: x._,
    onClick: function() {
      (0, s.openUserProfileModal)({
        sourceAnalyticsLocations: [i.A.DEV_TOOLS],
        userId: t
      })
    },
    children: (0, a.jsx)(r.Text, {
      variant: "text-md/semibold",
      children: n.username
    })
  })
}

function f() {
  var e;
  let t = (0, l.bG)([u.A], () => u.A.getFeed(h.X1.GLOBAL_FEED)),
    n = (0, l.bG)([u.A], () => u.A.getFilters()),
    i = (0, l.cf)([c.A], () => {
      var e;
      let n = {};
      for (let a of null != (e = null == t ? true : t.entries) ? e : []) n[(0, c.$)(a.content)] = c.A.canRenderContent(a.content);
      return n
    }, [t]),
    s = (0, l.bG)([d.A], () => d.A.getImpressionCappedItemIds());
  if (null == n) return null;
  let o = null == t || null == (e = t.entries) ? true : e.flatMap(e => {
    let {
      content: t
    } = e;
    if (!(0, m.l)(n, t)) return [];
    let l = i[(0, c.$)(t)];
    return (0, a.jsxs)("li", {
      className: x.p,
      children: [(0, a.jsx)(g, {
        type: t.author_type,
        id: t.author_id
      }), !l && (0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        children: "Expired or no matching presence"
      }), (0, p.I5)(t) && (0, a.jsxs)(r.Text, {
        variant: "text-md/normal",
        children: ["Expired at ", t.expires_at]
      }), s.has(t.id) && (0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        children: "Impression capped"
      })]
    }, t.id)
  });
  return (0, a.jsxs)("div", {
    children: [(0, a.jsx)(r.Heading, {
      variant: "heading-md/semibold",
      children: "Selected Content"
    }), null != o ? (0, a.jsx)("ul", {
      children: o
    }) : (0, a.jsx)("div", {
      children: "(none?)"
    })]
  })
}