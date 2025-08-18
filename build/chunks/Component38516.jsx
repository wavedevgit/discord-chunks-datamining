/** Chunk was on 89311 **/
/** chunk id: 38516, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./415506.js"), require("./642613.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk643872 = require("./643872.js"),
  Chunk481060 = require("./481060.js"),
  Chunk810568 = require("./810568.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk226788 = require("./226788.js"),
  Chunk803351 = require("./803351.js");
let m = [Chunk643872.p.OFFICIAL, Chunk643872.p.TWITTER, Chunk643872.p.YOUTUBE];

function f(e) {
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
          icon: (0, r.jsx)(s.enf, {
            colorClass: d.linkIcon
          }), action: o.as.WebsiteLink, title: c.intl.string(c.t.fOUKvr)
        };
      case a.p.TWITTER:
        return {
          icon: (0, r.jsx)(s.TAi, {
            colorClass: d.linkIcon
          }), action: o.as.XLink, title: c.intl.string(c.t["INic4+"])
        };
      case a.p.YOUTUBE:
        return {
          action: o.as.YouTubeLink, icon: (0, r.jsx)(s.$5w, {
            colorClass: d.linkIcon
          }), title: c.intl.string(c.t.lNmxbG)
        };
      default:
        throw Error("Unknown IGDB website category")
    }
  }(t);
  return (0, r.jsx)(s.ua7, {
    text: t.url,
    tooltipClassName: d.tooltip,
    tooltipContentClassName: d.tooltipContent,
    children: e => {
      var a, o, {
          onClick: c
        } = e,
        m = function(e, t) {
          if (null == e) return {};
          var n, r, i = function(e, t) {
            if (null == e) return {};
            var n, r, i = {},
              l = Object.keys(e);
            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i
          }(e, t);
          if (Object.getOwnPropertySymbols) {
            var l = Object.getOwnPropertySymbols(e);
            for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
          }
          return i
        }(e, ["onClick"]);
      return (0, r.jsx)(s.eee, (a = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, m), o = o = {
        className: d.linkAnchor,
        title: u,
        href: t.url,
        onClick: () => {
          n(i), null == c || c()
        },
        target: "_blank",
        children: l
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(o)).forEach(function(e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e))
      }), a))
    }
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
    return m.includes(t)
  }).sort((e, t) => e.category - t.category);
  return 0 === i.length ? null : (0, r.jsxs)("div", {
    children: [(0, r.jsx)(s.X6q, {
      className: u.sectionHeader,
      variant: "text-xs/semibold",
      color: "header-secondary",
      children: c.intl.string(c.t.Oj3o19)
    }), (0, r.jsx)("div", {
      className: l()(u.row, u.gapMd),
      children: i.map(e => (0, r.jsx)(f, {
        website: e,
        trackClick: n
      }, e.url))
    })]
  })
}