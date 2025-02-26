/** Chunk was on 4493 **/
r.d(t, {
  Z: () => f
}), r(411104), r(230036);
var n = r(200651);
r(192379);
var a = r(120356),
  i = r.n(a),
  o = r(643872),
  l = r(481060),
  s = r(810568),
  c = r(388032),
  u = r(384370),
  d = r(44021);
let p = [o.p.OFFICIAL, o.p.TWITTER, o.p.YOUTUBE];

function m(e) {
  let {
    website: t,
    trackClick: r
  } = e, {
    action: a,
    icon: i,
    title: u
  } = function(e) {
    switch (e.category) {
      case o.p.OFFICIAL:
        return {
          icon: (0, n.jsx)(l.enf, {
            colorClass: d.linkIcon
          }), action: s.as.WebsiteLink, title: c.NW.string(c.t.fOUKvr)
        };
      case o.p.TWITTER:
        return {
          icon: (0, n.jsx)(l.TAi, {
            colorClass: d.linkIcon
          }), action: s.as.XLink, title: c.NW.string(c.t["INic4+"])
        };
      case o.p.YOUTUBE:
        return {
          action: s.as.YouTubeLink, icon: (0, n.jsx)(l.$5w, {
            colorClass: d.linkIcon
          }), title: c.NW.string(c.t.lNmxbG)
        };
      default:
        throw Error("Unknown IGDB website category")
    }
  }(t);
  return (0, n.jsx)(l.ua7, {
    text: t.url,
    tooltipClassName: d.tooltip,
    tooltipContentClassName: d.tooltipContent,
    children: e => {
      var o, s, {
          onClick: c
        } = e,
        p = function(e, t) {
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
      return (0, n.jsx)(l.eee, (o = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n
          })
        }
        return e
      }({}, p), s = s = {
        className: d.linkAnchor,
        title: u,
        href: t.url,
        onClick: () => {
          r(a), null == c || c()
        },
        target: "_blank",
        children: i
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(s)).forEach(function(e) {
        Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e))
      }), o))
    }
  })
}
let f = function(e) {
  let {
    detectedGame: t,
    trackClick: r
  } = e;
  if (null == t.websites) return null;
  let a = t.websites.filter(e => {
    let {
      category: t
    } = e;
    return p.includes(t)
  }).sort((e, t) => e.category - t.category);
  return 0 === a.length ? null : (0, n.jsxs)("div", {
    children: [(0, n.jsx)(l.X6q, {
      className: u.sectionHeader,
      variant: "text-xs/semibold",
      color: "header-secondary",
      children: c.NW.string(c.t.Oj3o19)
    }), (0, n.jsx)("div", {
      className: i()(u.row, u.gapMd),
      children: a.map(e => (0, n.jsx)(m, {
        website: e,
        trackClick: r
      }, e.url))
    })]
  })
}