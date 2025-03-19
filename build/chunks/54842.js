/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => T
}), n(47120);
var r = n(200651),
  i = n(192379),
  s = n(120356),
  a = n.n(s),
  l = n(442837),
  o = n(692547),
  c = n(481060),
  A = n(142497),
  d = n(338327),
  u = n(496675),
  g = n(63063),
  f = n(981631),
  m = n(190378),
  p = n(388032),
  h = n(114110),
  C = n(438825),
  b = n(236140),
  v = n(37069),
  x = n(518513),
  N = n(168179),
  j = n(348986),
  E = n(930065),
  I = n(345669);

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = r
    })
  }
  return e
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let w = () => [{
    icon: c.IeX,
    color: o.Z.unsafe_rawColors.GREEN_360.css,
    header: p.NW.string(p.t.oVQF29),
    body: p.NW.format(p.t.A6G7am, {
      featureHook: (e, t) => (0, r.jsx)("strong", {
        className: h.featuredText,
        children: e
      }, t)
    })
  }, {
    icon: c.IeX,
    color: o.Z.unsafe_rawColors.PARTNER.css,
    header: p.NW.string(p.t["0rJl9/"]),
    body: p.NW.format(p.t.XsCNk5, {
      infoHook: () => (0, r.jsx)(c.ua7, {
        text: p.NW.string(p.t.kPJlTk),
        "aria-label": p.NW.string(p.t.kPJlTk),
        children: e => (0, r.jsx)(c.d3s, O({
          size: "xs",
          color: "currentColor",
          className: h.infoIcon
        }, e))
      }),
      featureHook: (e, t) => (0, r.jsx)("strong", {
        className: h.featuredText,
        children: e
      }, t)
    })
  }, {
    icon: c.d3s,
    color: o.Z.unsafe_rawColors.RED_360.css,
    header: p.NW.string(p.t.W2kLJC),
    body: p.NW.string(p.t.hyNkHx)
  }],
  P = [{
    iconSrc: j,
    name: "Pokemon GO Paris",
    position: [-230, -100]
  }, {
    iconSrc: E,
    name: "Python",
    position: [-180, -100],
    faded: !0,
    rightAlign: !0
  }, {
    iconSrc: x,
    name: "Learn Latin",
    position: [-280, -30],
    faded: !0
  }, {
    iconSrc: N,
    name: "r/leagueoflegends",
    position: [-320, -30],
    rightAlign: !0
  }, {
    iconSrc: I,
    name: "Sneaker Fans",
    position: [-250, 40]
  }, {
    iconSrc: v,
    name: "Hogwarts School",
    position: [-270, 40],
    faded: !0,
    rightAlign: !0
  }],
  B = e => {
    let {
      icon: t,
      color: n,
      size: i = 24,
      header: s,
      body: a
    } = e;
    return (0, r.jsxs)("div", {
      className: h.featureCard,
      children: [(0, r.jsx)("div", {
        className: h.featureIcon,
        children: (0, r.jsx)(t, {
          color: null != n ? n : "currentColor",
          width: i,
          height: i,
          size: "custom"
        })
      }), (0, r.jsx)(c.X6q, {
        variant: "heading-md/semibold",
        className: h.featureHeader,
        children: s
      }), (0, r.jsx)(c.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: a
      })]
    })
  },
  D = e => {
    let {
      iconSrc: t,
      name: n,
      position: i,
      faded: s,
      rightAlign: l,
      imageCoordinates: o
    } = e, A = {
      [l ? "right" : "left"]: o[0] + i[0],
      top: o[1] + i[1]
    };
    return (0, r.jsxs)("div", {
      className: a()(h.guildDetails, {
        [h.faded]: s
      }),
      style: A,
      children: [(0, r.jsx)("div", {
        className: h.guildIcon,
        children: (0, r.jsx)("img", {
          alt: "",
          src: t,
          width: 24,
          height: 24
        })
      }), (0, r.jsx)(c.X6q, {
        variant: "heading-deprecated-12/semibold",
        children: n
      })]
    })
  },
  T = e => {
    let {
      guild: t
    } = e, [n, s] = i.useState(0), [a, o] = i.useState(0), [v, x] = i.useState(), N = (0, l.e7)([u.Z], () => u.Z.can(f.Plq.ADMINISTRATOR, t)), j = null == v ? void 0 : v.offsetWidth, E = null == v ? void 0 : v.offsetHeight;
    i.useEffect(() => {
      null != j && s(j / 2), null != E && o(E / 2)
    }, [j, E, s, o]), i.useEffect(() => {
      (0, A.Kw)(m.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL)
    }, []);
    let I = () => {
      d.Z.open()
    };
    return (0, r.jsxs)("div", {
      className: h.container,
      children: [(0, r.jsxs)("div", {
        className: h.banner,
        ref: e => x(e),
        children: [P.map(e => (0, r.jsx)(D, y(O({}, e), {
          imageCoordinates: [n, a]
        }), e.name)), (0, r.jsx)("img", {
          alt: "",
          src: C,
          className: h.image,
          width: 256
        }), (0, r.jsx)("img", {
          alt: "",
          src: b,
          className: h.sparkles
        })]
      }), (0, r.jsx)(c.X6q, {
        variant: "heading-xl/semibold",
        children: p.NW.string(p.t["M/gBcH"])
      }), (0, r.jsx)(c.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: h.body,
        children: p.NW.format(p.t["52EgsL"], {
          helpdeskArticle: g.Z.getArticleURL(f.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
        })
      }), (0, r.jsx)(c.ua7, {
        text: N ? null : p.NW.string(p.t["pjG+T0"]),
        "aria-label": N ? void 0 : p.NW.string(p.t["pjG+T0"]),
        children: e => (0, r.jsx)(c.zxk, y(O({
          onClick: I,
          className: h.button,
          disabled: !N
        }, e), {
          children: p.NW.string(p.t.LhlgY2)
        }))
      }), (0, r.jsx)("hr", {
        className: h.separator
      }), (0, r.jsx)(c.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: p.NW.string(p.t.OzLWLC)
      }), (0, r.jsx)(c.Text, {
        color: "header-secondary",
        className: h.body,
        variant: "text-sm/normal",
        children: p.NW.format(p.t.rjhrqK, {
          helpdeskArticle: g.Z.getArticleURL(f.BhN.GUILD_COMMUNITY_FEATURE)
        })
      }), (0, r.jsx)("div", {
        className: h.features,
        children: w().map((e, t) => (0, r.jsx)(B, O({}, e), t))
      })]
    })
  }