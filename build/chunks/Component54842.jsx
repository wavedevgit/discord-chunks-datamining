/** Chunk was on 6049 **/
/** chunk id: 54842, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk142497 = require("./142497.js"),
  Chunk338327 = require("./338327.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk190378 = require("./190378.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk977235 = require("./977235.js"),
  Chunk438825 = require("./438825.js"),
  Chunk236140 = require("./236140.js"),
  Chunk37069 = require("./37069.js"),
  Chunk518513 = require("./518513.js"),
  Chunk40271 = require("./40271.js");

function y(e) {
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
}
let C = [{
    iconSrc: require("./348986.js"),
    name: "Pokemon GO Paris",
    position: [false, false]
  }, {
    iconSrc: require("./930065.js"),
    name: "Python",
    position: [false, false],
    faded: true,
    rightAlign: true
  }, {
    iconSrc: Chunk518513,
    name: "Learn Latin",
    position: [false, false],
    faded: true
  }, {
    iconSrc: Chunk40271,
    name: "r/leagueoflegends",
    position: [false, false],
    rightAlign: true
  }, {
    iconSrc: require("./345669.js"),
    name: "Sneaker Fans",
    position: [false, 40]
  }, {
    iconSrc: Chunk37069,
    name: "Hogwarts School",
    position: [false, 40],
    faded: true,
    rightAlign: true
  }],
  N = e => {
    let {
      icon: t,
      color: n,
      size: i = 24,
      header: l,
      body: a
    } = e;
    return (0, r.jsxs)("div", {
      className: b.featureCard,
      children: [(0, r.jsx)("div", {
        className: b.featureIcon,
        children: (0, r.jsx)(t, {
          color: null != n ? n : "currentColor",
          width: i,
          height: i,
          size: "custom"
        })
      }), (0, r.jsx)(c.X6q, {
        variant: "heading-md/semibold",
        className: b.featureHeader,
        children: l
      }), (0, r.jsx)(c.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: a
      })]
    })
  },
  E = e => {
    let {
      iconSrc: t,
      name: n,
      position: i,
      faded: l,
      rightAlign: s,
      imageCoordinates: o
    } = e, d = {
      [s ? "right" : "left"]: o[0] + i[0],
      top: o[1] + i[1]
    };
    return (0, r.jsxs)("div", {
      className: a()(b.guildDetails, {
        [b.faded]: l
      }),
      style: d,
      children: [(0, r.jsx)("div", {
        className: b.guildIcon,
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
  I = e => {
    let {
      guild: t
    } = e, [n, l] = i.useState(0), [a, v] = i.useState(0), [_, O] = i.useState(), I = (0, s.e7)([m.Z], () => m.Z.can(p.Plq.ADMINISTRATOR, t)), S = null == _ ? true : _.offsetWidth, T = null == _ ? true : _.offsetHeight;
    i.useEffect(() => {
      null != S && l(S / 2), null != T && v(T / 2)
    }, [S, T, l, v]), i.useEffect(() => {
      (0, d.Kw)(h.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL)
    }, []);
    let P = () => {
      u.Z.open()
    };
    return (0, r.jsxs)("div", {
      className: b.container,
      children: [(0, r.jsxs)("div", {
        className: b.banner,
        ref: e => O(e),
        children: [C.map(e => {
          var t, i;
          return (0, r.jsx)(E, (t = y({}, e), i = i = {
            imageCoordinates: [n, a]
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
          }), t), e.name)
        }), (0, r.jsx)("img", {
          alt: "",
          src: x,
          className: b.image,
          width: 256
        }), (0, r.jsx)("img", {
          alt: "",
          src: j,
          className: b.sparkles
        })]
      }), (0, r.jsx)(c.X6q, {
        variant: "heading-xl/semibold",
        children: f.intl.string(f.t["M/gBcH"])
      }), (0, r.jsx)(c.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: b.body,
        children: f.intl.format(f.t["52EgsL"], {
          helpdeskArticle: g.Z.getArticleURL(p.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
        })
      }), (0, r.jsx)(c.ua7, {
        text: I ? null : f.intl.string(f.t["pjG+T0"]),
        "aria-label": I ? true : f.intl.string(f.t["pjG+T0"]),
        children: e => (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: b.button,
          children: (0, r.jsx)(c.zxk, y({
            variant: "primary",
            text: f.intl.string(f.t.LhlgY2),
            onClick: P,
            disabled: !I
          }, e))
        })
      }), (0, r.jsx)("hr", {
        className: b.separator
      }), (0, r.jsx)(c.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: f.intl.string(f.t.OzLWLC)
      }), (0, r.jsx)(c.Text, {
        color: "header-secondary",
        className: b.body,
        variant: "text-sm/normal",
        children: f.intl.format(f.t.rjhrqK, {
          helpdeskArticle: g.Z.getArticleURL(p.BhN.GUILD_COMMUNITY_FEATURE)
        })
      }), (0, r.jsx)("div", {
        className: b.features,
        children: [{
          icon: c.IeX,
          color: o.Z.unsafe_rawColors.GREEN_360.css,
          header: f.intl.string(f.t.oVQF29),
          body: f.intl.format(f.t.A6G7am, {
            featureHook: (e, t) => (0, r.jsx)("strong", {
              className: b.featuredText,
              children: e
            }, t)
          })
        }, {
          icon: c.IeX,
          color: o.Z.unsafe_rawColors.PARTNER.css,
          header: f.intl.string(f.t["0rJl9/"]),
          body: f.intl.format(f.t.XsCNk5, {
            infoHook: () => (0, r.jsx)(c.ua7, {
              text: f.intl.string(f.t.kPJlTk),
              "aria-label": f.intl.string(f.t.kPJlTk),
              children: e => (0, r.jsx)(c.d3s, y({
                size: "xs",
                color: "currentColor",
                className: b.infoIcon
              }, e))
            }),
            featureHook: (e, t) => (0, r.jsx)("strong", {
              className: b.featuredText,
              children: e
            }, t)
          })
        }, {
          icon: c.d3s,
          color: o.Z.unsafe_rawColors.RED_360.css,
          header: f.intl.string(f.t.W2kLJC),
          body: f.intl.string(f.t.hyNkHx)
        }].map((e, t) => (0, r.jsx)(N, y({}, e), t))
      })]
    })
  }