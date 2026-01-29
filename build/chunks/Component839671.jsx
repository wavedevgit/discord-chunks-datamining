/** Chunk was on 13530 **/
/** chunk id: 839671, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => h,
  R: () => j
}), require("./65821.js"), require("./638769.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk798236 = require("./798236.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk409626 = require("./409626.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk851822 = require("./851822.js"),
  Chunk307291 = require("./307291.js");
let x = [Chunk798236.w.OFFICIAL, Chunk798236.w.TWITTER, Chunk798236.w.YOUTUBE];

function f(e) {
  switch (e.category) {
    case r.w.OFFICIAL:
      return {
        icon: (0, n.jsx)(o.L_e, {
          colorClass: m.wP
        }), action: c.Ws.WebsiteLink, title: d.intl.string(d.t.fOUKvg)
      };
    case r.w.TWITTER:
      return {
        icon: (0, n.jsx)(o.p3p, {
          colorClass: m.wP
        }), action: c.Ws.XLink, title: d.intl.string(d.t.INic4y)
      };
    case r.w.YOUTUBE:
      return {
        action: c.Ws.YouTubeLink, icon: (0, n.jsx)(o.CiD, {
          colorClass: m.wP
        }), title: d.intl.string(d.t.lNmxbE)
      };
    default:
      throw Error("Unknown IGDB website category")
  }
}

function g(e) {
  let {
    website: t,
    trackClick: l
  } = e, {
    action: i,
    icon: a,
    title: r
  } = f(t);
  return (0, n.jsx)(s.m, {
    __unsupportedReactNodeAsText: t.url,
    children: (0, n.jsx)(o.MzZ, {
      onClick: () => {
        l(i)
      },
      className: m.yO,
      title: r,
      href: t.url,
      target: "_blank",
      children: a
    })
  })
}
let h = function(e) {
  let {
    detectedGame: t,
    trackClick: l
  } = e;
  if (null == t.websites) return null;
  let i = t.websites.filter(e => {
    let {
      category: t
    } = e;
    return x.includes(t)
  }).sort((e, t) => e.category - t.category);
  return 0 === i.length ? null : (0, n.jsxs)("div", {
    children: [(0, n.jsx)(o.Heading, {
      className: u.bV,
      variant: "text-xs/semibold",
      color: "text-default",
      children: d.intl.string(d.t["Oj3o1/"])
    }), (0, n.jsx)("div", {
      className: a()(u.nM, u.mX),
      children: i.map(e => (0, n.jsx)(g, {
        website: e,
        trackClick: l
      }, e.url))
    })]
  })
};

function p(e) {
  let {
    website: t,
    trackClick: l
  } = e, {
    action: i,
    icon: a,
    title: r
  } = f(t);
  return (0, n.jsx)(s.m, {
    __unsupportedReactNodeAsText: t.url,
    children: (0, n.jsx)(o.DUT, {
      tag: "a",
      onClick: () => {
        l(i)
      },
      className: m.yO,
      title: r,
      href: t.url,
      target: "_blank",
      rel: "noreferrer noopener",
      children: a
    })
  })
}

function j(e) {
  let {
    detectedGame: t,
    trackClick: l
  } = e;
  if (null == t.websites) return null;
  let i = t.websites.filter(e => {
    let {
      category: t
    } = e;
    return x.includes(t)
  }).sort((e, t) => e.category - t.category);
  return 0 === i.length ? null : (0, n.jsxs)("div", {
    children: [(0, n.jsx)(o.Heading, {
      className: u.bV,
      variant: "text-xs/semibold",
      color: "text-default",
      children: d.intl.string(d.t["Oj3o1/"])
    }), (0, n.jsx)("div", {
      className: a()(u.nM, u.mX),
      children: i.map(e => (0, n.jsx)(p, {
        website: e,
        trackClick: l
      }, e.url))
    })]
  })
}