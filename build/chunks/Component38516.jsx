/** Chunk was on 89311 **/
/** chunk id: 38516, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./415506.js"), require("./642613.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk643872 = require("./643872.js"),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk110568 = require("./110568.js"),
  Chunk871365 = require("./871365.js");
let m = [Chunk643872.p.OFFICIAL, Chunk643872.p.TWITTER, Chunk643872.p.YOUTUBE];

function g(e) {
  let {
    website: t,
    trackClick: r
  } = e, {
    action: a,
    icon: i,
    title: d
  } = function(e) {
    switch (e.category) {
      case l.p.OFFICIAL:
        return {
          icon: (0, n.jsx)(o.enf, {
            colorClass: u.linkIcon
          }), action: s.as.WebsiteLink, title: c.intl.string(c.t.fOUKvr)
        };
      case l.p.TWITTER:
        return {
          icon: (0, n.jsx)(o.TAi, {
            colorClass: u.linkIcon
          }), action: s.as.XLink, title: c.intl.string(c.t["INic4+"])
        };
      case l.p.YOUTUBE:
        return {
          action: s.as.YouTubeLink, icon: (0, n.jsx)(o.$5w, {
            colorClass: u.linkIcon
          }), title: c.intl.string(c.t.lNmxbG)
        };
      default:
        throw Error("Unknown IGDB website category")
    }
  }(t);
  return (0, n.jsx)(o.ua7, {
    text: t.url,
    tooltipClassName: u.tooltip,
    tooltipContentClassName: u.tooltipContent,
    children: e => {
      var l, s, {
          onClick: c
        } = e,
        m = function(e, t) {
          if (null == e) return {};
          var r, n, a = function(e, t) {
            if (null == e) return {};
            var r, n, a = {},
              i = Object.keys(e);
            for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (a[r] = e[r]);
            return a
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r])
          }
          return a
        }(e, ["onClick"]);
      return (0, n.jsx)(o.eee, (l = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, m), s = s = {
        className: u.linkAnchor,
        title: d,
        href: t.url,
        onClick: () => {
          r(a), null == c || c()
        },
        target: "_blank",
        children: i
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(s, e))
      }), l))
    }
  })
}
let p = function(e) {
  let {
    detectedGame: t,
    trackClick: r
  } = e;
  if (null == t.websites) return null;
  let a = t.websites.filter(e => {
    let {
      category: t
    } = e;
    return m.includes(t)
  }).sort((e, t) => e.category - t.category);
  return 0 === a.length ? null : (0, n.jsxs)("div", {
    children: [(0, n.jsx)(o.X6q, {
      className: d.sectionHeader,
      variant: "text-xs/semibold",
      color: "header-secondary",
      children: c.intl.string(c.t.Oj3o19)
    }), (0, n.jsx)("div", {
      className: i()(d.row, d.gapMd),
      children: a.map(e => (0, n.jsx)(g, {
        website: e,
        trackClick: r
      }, e.url))
    })]
  })
}