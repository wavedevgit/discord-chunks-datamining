/** Chunk was on 93886 **/
/** chunk id: 650613, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./361932.js"), require("./187205.js");
var Chunk951288 = require("./951288.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk892001 = require("./892001.js"),
  Chunk594174 = require("./594174.js"),
  Chunk719247 = require("./719247.js"),
  Chunk71585 = require("./71585.js"),
  Chunk146282 = require("./146282.js"),
  Chunk897674 = require("./897674.js"),
  Chunk561308 = require("./561308.js"),
  Chunk206583 = require("./206583.js"),
  Chunk281327 = require("./281327.js");

function v(e) {
  let {
    id: t
  } = e, a = (0, r.e7)([o.default], () => o.default.getUser(t));
  return null == a ? null : (0, n.jsx)(l.P3F, {
    className: p.entryAuthor,
    onClick: function() {
      (0, s.openUserProfileModal)({
        sourceAnalyticsLocations: [i.Z.DEV_TOOLS],
        userId: t
      })
    },
    children: (0, n.jsx)(l.Text, {
      variant: "text-md/semibold",
      children: a.username
    })
  })
}

function b() {
  var e;
  let t = (0, Chunk442837.e7)([Chunk146282.Z], () => Chunk146282.Z.getFeed(Chunk206583.YN.GLOBAL_FEED)),
    a = (0, Chunk442837.e7)([Chunk146282.Z], () => Chunk146282.Z.getFilters()),
    i = (0, Chunk442837.cj)([Chunk719247.Z], () => {
      var e;
      let a = {};
      for (let n of null != (e = null == exports ? true : exports.entries) ? module : []) require[(0, Chunk719247.T)(Chunk951288.content)] = Chunk719247.Z.canRenderContent(Chunk951288.content);
      return require
    }, [exports]),
    s = (0, Chunk442837.e7)([Chunk71585.Z], () => Chunk71585.Z.getImpressionCappedItemIds());
  if (null == require) return null;
  let o = null == exports || null == (e = exports.entries) ? true : module.flatMap(e => {
    let {
      content: t
    } = e;
    if (!(0, m.g)(a, t)) return [];
    let r = i[(0, c.T)(t)];
    return (0, n.jsxs)("li", {
      className: p.locatorEntry,
      children: [(0, n.jsx)(v, {
        type: t.author_type,
        id: t.author_id
      }), !r && (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        children: "Expired or no matching presence"
      }), (0, x.n2)(t) && (0, n.jsxs)(l.Text, {
        variant: "text-md/normal",
        children: ["Expired at ", t.expires_at]
      }), s.has(t.id) && (0, n.jsx)(l.Text, {
        variant: "text-md/normal",
        children: "Impression capped"
      })]
    }, t.id)
  });
  return (0, Chunk951288.jsxs)(Chunk481060.hjN, {
    children: [(0, Chunk951288.jsx)(Chunk481060.vwX, {
      children: "Selected Content"
    }), null != Chunk594174 ? (0, Chunk951288.jsx)("ul", {
      children: Chunk594174
    }) : (0, Chunk951288.jsx)("div", {
      children: "(none?)"
    })]
  })
}