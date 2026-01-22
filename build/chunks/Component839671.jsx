/** Chunk was on 13530 **/
/** chunk id: 839671, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./65821.js"), require("./638769.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  i = require.n(Chunk503698),
  Chunk798236 = require("./798236.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk409626 = require("./409626.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk851822 = require("./851822.js"),
  Chunk307291 = require("./307291.js");
let f = [Chunk798236.w.OFFICIAL, Chunk798236.w.TWITTER, Chunk798236.w.YOUTUBE];

function x(e) {
  let {
    website: t,
    trackClick: n
  } = e, {
    action: r,
    icon: i,
    title: u
  } = function(e) {
    switch (e.category) {
      case a.w.OFFICIAL:
        return {
          icon: (0, l.jsx)(o.L_e, {
            colorClass: m.wP
          }), action: c.Ws.WebsiteLink, title: d.intl.string(d.t.fOUKvg)
        };
      case a.w.TWITTER:
        return {
          icon: (0, l.jsx)(o.p3p, {
            colorClass: m.wP
          }), action: c.Ws.XLink, title: d.intl.string(d.t.INic4y)
        };
      case a.w.YOUTUBE:
        return {
          action: c.Ws.YouTubeLink, icon: (0, l.jsx)(o.CiD, {
            colorClass: m.wP
          }), title: d.intl.string(d.t.lNmxbE)
        };
      default:
        throw Error("Unknown IGDB website category")
    }
  }(t);
  return (0, l.jsx)(s.m, {
    __unsupportedReactNodeAsText: t.url,
    children: (0, l.jsx)(o.MzZ, {
      onClick: () => {
        n(r)
      },
      className: m.yO,
      title: u,
      href: t.url,
      target: "_blank",
      children: i
    })
  })
}
let b = function(e) {
  let {
    detectedGame: t,
    trackClick: n
  } = e;
  if (null == t.websites) return null;
  let r = t.websites.filter(e => {
    let {
      category: t
    } = e;
    return f.includes(t)
  }).sort((e, t) => e.category - t.category);
  return 0 === r.length ? null : (0, l.jsxs)("div", {
    children: [(0, l.jsx)(o.Heading, {
      className: u.bV,
      variant: "text-xs/semibold",
      color: "text-default",
      children: d.intl.string(d.t["Oj3o1/"])
    }), (0, l.jsx)("div", {
      className: i()(u.nM, u.mX),
      children: r.map(e => (0, l.jsx)(x, {
        website: e,
        trackClick: n
      }, e.url))
    })]
  })
}