/** Chunk was on 89311 **/
/** chunk id: 38516, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./415506.js"), require("./642613.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk643872 = require("./643872.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk226788 = require("./226788.js"),
  Chunk803351 = require("./803351.js");
let f = [Chunk643872.p.OFFICIAL, Chunk643872.p.TWITTER, Chunk643872.p.YOUTUBE];

function p(e) {
  let {
    website: t,
    trackClick: n
  } = e, {
    action: i,
    icon: l,
    title: u
  } = function(e) {
    switch (e.category) {
      case a.p.OFFICIAL:
        return {
          icon: (0, r.jsx)(o.enf, {
            colorClass: m.linkIcon
          }), action: c.as.WebsiteLink, title: d.intl.string(d.t.fOUKvr)
        };
      case a.p.TWITTER:
        return {
          icon: (0, r.jsx)(o.TAi, {
            colorClass: m.linkIcon
          }), action: c.as.XLink, title: d.intl.string(d.t["INic4+"])
        };
      case a.p.YOUTUBE:
        return {
          action: c.as.YouTubeLink, icon: (0, r.jsx)(o.$5w, {
            colorClass: m.linkIcon
          }), title: d.intl.string(d.t.lNmxbG)
        };
      default:
        throw Error("Unknown IGDB website category")
    }
  }(t);
  return (0, r.jsx)(s.u, {
    __unsupportedReactNodeAsText: t.url,
    children: (0, r.jsx)(o.eee, {
      onClick: () => {
        n(i)
      },
      className: m.linkAnchor,
      title: u,
      href: t.url,
      target: "_blank",
      children: l
    })
  })
}
let x = function(e) {
  let {
    detectedGame: t,
    trackClick: n
  } = e;
  if (null == t.websites) return null;
  let i = t.websites.filter(e => {
    let {
      category: t
    } = e;
    return f.includes(t)
  }).sort((e, t) => e.category - t.category);
  return 0 === i.length ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(o.X6q, {
      className: u.sectionHeader,
      variant: "text-xs/semibold",
      color: "header-secondary",
      children: d.intl.string(d.t.Oj3o19)
    }), (0, r.jsx)("div", {
      className: l()(u.row, u.gapMd),
      children: i.map(e => (0, r.jsx)(p, {
        website: e,
        trackClick: n
      }, e.url))
    })]
  })
}