/** Chunk was on 384 **/
/** chunk id: 906512, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk142497 = require("./142497.js"),
  Chunk338327 = require("./338327.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk190378 = require("./190378.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk275657 = require("./275657.js"),
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
let N = [{
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
  E = e => {
    let {
      icon: t,
      color: n,
      size: i = 24,
      header: l,
      body: a
    } = e;
    return (0, r.jsxs)("div", {
      className: x.featureCard,
      children: [(0, r.jsx)("div", {
        className: x.featureIcon,
        children: (0, r.jsx)(t, {
          color: null != n ? n : "currentColor",
          width: i,
          height: i,
          size: "custom"
        })
      }), (0, r.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        className: x.featureHeader,
        children: l
      }), (0, r.jsx)(d.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: a
      })]
    })
  },
  I = e => {
    let {
      iconSrc: t,
      name: n,
      position: i,
      faded: l,
      rightAlign: s,
      imageCoordinates: o
    } = e, c = {
      [s ? "right" : "left"]: o[0] + i[0],
      top: o[1] + i[1]
    };
    return (0, r.jsxs)("div", {
      className: a()(x.guildDetails, {
        [x.faded]: l
      }),
      style: c,
      children: [(0, r.jsx)("div", {
        className: x.guildIcon,
        children: (0, r.jsx)("img", {
          alt: "",
          src: t,
          width: 24,
          height: 24
        })
      }), (0, r.jsx)(d.Heading, {
        variant: "heading-deprecated-12/semibold",
        children: n
      })]
    })
  },
  S = e => {
    let {
      guild: t
    } = e, [n, l] = i.useState(0), [a, v] = i.useState(0), [O, C] = i.useState(), S = (0, s.e7)([m.Z], () => m.Z.can(f.Plq.ADMINISTRATOR, t)), T = null == O ? true : O.offsetWidth, P = null == O ? true : O.offsetHeight;
    return i.useEffect(() => {
      null != T && l(T / 2), null != P && v(P / 2)
    }, [T, P, l, v]), i.useEffect(() => {
      (0, u.Kw)(h.v.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL)
    }, []), (0, r.jsxs)("div", {
      className: x.container,
      children: [(0, r.jsxs)("div", {
        className: x.banner,
        ref: e => C(e),
        children: [N.map(e => {
          var t, i;
          return (0, r.jsx)(I, (t = y({}, e), i = i = {
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
          src: j,
          className: x.image,
          width: 256
        }), (0, r.jsx)("img", {
          alt: "",
          src: _,
          className: x.sparkles
        })]
      }), (0, r.jsx)(d.Heading, {
        variant: "heading-xl/semibold",
        children: b.intl.string(b.t["M/gBcA"])
      }), (0, r.jsx)(d.Text, {
        color: "text-default",
        variant: "text-md/normal",
        className: x.body,
        children: b.intl.format(b.t["52EgsM"], {
          helpdeskArticle: p.Z.getArticleURL(f.BhN.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
        })
      }), (0, r.jsx)(c.u, {
        text: S ? null : b.intl.string(b.t["pjG+T3"]),
        "aria-label": S ? true : b.intl.string(b.t["pjG+T3"]),
        children: (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: x.button,
          children: (0, r.jsx)(d.Button, {
            variant: "primary",
            text: b.intl.string(b.t.LhlgY9),
            onClick: () => {
              g.Z.open()
            },
            disabled: !S
          })
        })
      }), (0, r.jsx)("hr", {
        className: x.separator
      }), (0, r.jsx)(d.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: b.intl.string(b.t.OzLWLE)
      }), (0, r.jsx)(d.Text, {
        color: "text-default",
        className: x.body,
        variant: "text-sm/normal",
        children: b.intl.format(b.t.rjhrqC, {
          helpdeskArticle: p.Z.getArticleURL(f.BhN.GUILD_COMMUNITY_FEATURE)
        })
      }), (0, r.jsx)("div", {
        className: x.features,
        children: [{
          icon: d.IeX,
          color: o.Z.unsafe_rawColors.GREEN_360.css,
          header: b.intl.string(b.t.oVQF2y),
          body: b.intl.format(b.t.A6G7ak, {
            featureHook: (e, t) => (0, r.jsx)("strong", {
              className: x.featuredText,
              children: e
            }, t)
          })
        }, {
          icon: d.IeX,
          color: o.Z.unsafe_rawColors.PARTNER.css,
          header: b.intl.string(b.t["0rJl9y"]),
          body: b.intl.format(b.t.XsCNky, {
            infoHook: () => (0, r.jsx)(c.u, {
              text: b.intl.string(b.t.kPJlTh),
              "aria-label": b.intl.string(b.t.kPJlTh),
              children: (0, r.jsx)(d.d3s, {
                size: "xs",
                color: "currentColor",
                className: x.infoIcon
              })
            }),
            featureHook: (e, t) => (0, r.jsx)("strong", {
              className: x.featuredText,
              children: e
            }, t)
          })
        }, {
          icon: d.d3s,
          color: o.Z.unsafe_rawColors.RED_360.css,
          header: b.intl.string(b.t.W2kLJC),
          body: b.intl.string(b.t.hyNkHz)
        }].map((e, t) => (0, r.jsx)(E, y({}, e), t))
      })]
    })
  }