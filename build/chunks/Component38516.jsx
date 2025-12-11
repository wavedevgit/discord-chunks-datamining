/** Chunk was on 89311 **/
/** chunk id: 38516, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./415506.js"), require("./642613.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk643872 = require("./643872.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk452379 = require("./452379.js"),
  Chunk922522 = require("./922522.js");
let f = [Chunk643872.p.OFFICIAL, Chunk643872.p.TWITTER, Chunk643872.p.YOUTUBE];

function g(e) {
  let {
    website: t,
    trackClick: n
  } = e, {
    action: i,
    icon: r,
    title: u
  } = function(e) {
    switch (e.category) {
      case l.p.OFFICIAL:
        return {
          icon: (0, a.jsx)(s.enf, {
            colorClass: m.linkIcon
          }), action: c.as.WebsiteLink, title: d.intl.string(d.t.fOUKvg)
        };
      case l.p.TWITTER:
        return {
          icon: (0, a.jsx)(s.TAi, {
            colorClass: m.linkIcon
          }), action: c.as.XLink, title: d.intl.string(d.t.INic4y)
        };
      case l.p.YOUTUBE:
        return {
          action: c.as.YouTubeLink, icon: (0, a.jsx)(s.$5w, {
            colorClass: m.linkIcon
          }), title: d.intl.string(d.t.lNmxbE)
        };
      default:
        throw Error("Unknown IGDB website category")
    }
  }(t);
  return (0, a.jsx)(o.u, {
    __unsupportedReactNodeAsText: t.url,
    children: (0, a.jsx)(s.Anchor, {
      onClick: () => {
        n(i)
      },
      className: m.linkAnchor,
      title: u,
      href: t.url,
      target: "_blank",
      children: r
    })
  })
}
let p = function(e) {
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
  return 0 === i.length ? null : (0, a.jsxs)("div", {
    children: [(0, a.jsx)(s.Heading, {
      className: u.sectionHeader,
      variant: "text-xs/semibold",
      color: "text-default",
      children: d.intl.string(d.t["Oj3o1/"])
    }), (0, a.jsx)("div", {
      className: r()(u.row, u.gapMd),
      children: i.map(e => (0, a.jsx)(g, {
        website: e,
        trackClick: n
      }, e.url))
    })]
  })
}