/** Chunk was on 39048 **/
/** chunk id: 224394, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk421838 = require("./421838.js"),
  Chunk48771 = require("./48771.jsx"),
  Chunk576705 = require("./576705.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk897513 = require("./897513.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk660504 = require("./660504.js"),
  Chunk628287 = require("./628287.js"),
  Chunk734673 = require("./734673.js"),
  Chunk920852 = require("./920852.js"),
  Chunk266332 = require("./266332.js"),
  Chunk386528 = require("./386528.js");

function A(e) {
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
let E = [{
    iconSrc: require("./374229.js"),
    name: "Pokemon GO Paris",
    position: [false, false]
  }, {
    iconSrc: require("./640666.js"),
    name: "Python",
    position: [false, false],
    faded: true,
    rightAlign: true
  }, {
    iconSrc: Chunk266332,
    name: "Learn Latin",
    position: [false, false],
    faded: true
  }, {
    iconSrc: Chunk386528,
    name: "r/leagueoflegends",
    position: [false, false],
    rightAlign: true
  }, {
    iconSrc: require("./822984.js"),
    name: "Sneaker Fans",
    position: [false, 40]
  }, {
    iconSrc: Chunk920852,
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
      body: s
    } = e;
    return (0, r.jsxs)("div", {
      className: x.Vr,
      children: [(0, r.jsx)("div", {
        className: x.AD,
        children: (0, r.jsx)(t, {
          color: null != n ? n : "currentColor",
          width: i,
          height: i,
          size: "custom"
        })
      }), (0, r.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        className: x.Uh,
        children: l
      }), (0, r.jsx)(d.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: s
      })]
    })
  },
  S = e => {
    let {
      iconSrc: t,
      name: n,
      position: i,
      faded: l,
      rightAlign: a,
      imageCoordinates: o
    } = e, c = {
      [a ? "right" : "left"]: o[0] + i[0],
      top: o[1] + i[1]
    };
    return (0, r.jsxs)("div", {
      className: s()(x.gI, {
        [x.zj]: l
      }),
      style: c,
      children: [(0, r.jsx)("div", {
        className: x.$f,
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
  I = e => {
    let {
      guild: t
    } = e, [n, l] = i.useState(0), [s, O] = i.useState(0), [v, y] = i.useState(), I = (0, a.bG)([m.A], () => m.A.can(f.xBc.ADMINISTRATOR, t)), C = null == v ? true : v.offsetWidth, T = null == v ? true : v.offsetHeight;
    return i.useEffect(() => {
      null != C && l(C / 2), null != T && O(T / 2)
    }, [C, T, l, O]), i.useEffect(() => {
      (0, u.sF)(h._.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL)
    }, []), (0, r.jsxs)("div", {
      className: x.kL,
      children: [(0, r.jsxs)("div", {
        className: x.vK,
        ref: e => y(e),
        children: [E.map(e => {
          var t, i;
          return (0, r.jsx)(S, (t = A({}, e), i = i = {
            imageCoordinates: [n, s]
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
          className: x.Sl,
          width: 256
        }), (0, r.jsx)("img", {
          alt: "",
          src: _,
          className: x._7
        })]
      }), (0, r.jsx)(d.Heading, {
        variant: "heading-xl/semibold",
        children: b.intl.string(b.t["M/gBcA"])
      }), (0, r.jsx)(d.Text, {
        color: "text-default",
        variant: "text-md/normal",
        className: x.rf,
        children: b.intl.format(b.t["52EgsM"], {
          helpdeskArticle: p.A.getArticleURL(f.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
        })
      }), (0, r.jsx)(c.m, {
        text: I ? null : b.intl.string(b.t["pjG+T3"]),
        "aria-label": I ? true : b.intl.string(b.t["pjG+T3"]),
        children: (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: x.x6,
          children: (0, r.jsx)(d.Button, {
            variant: "primary",
            text: b.intl.string(b.t.ElKTeb),
            onClick: () => {
              g.A.open()
            },
            disabled: !I
          })
        })
      }), (0, r.jsx)("hr", {
        className: x.me
      }), (0, r.jsx)(d.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: b.intl.string(b.t.OzLWLE)
      }), (0, r.jsx)(d.Text, {
        color: "text-default",
        className: x.rf,
        variant: "text-sm/normal",
        children: b.intl.format(b.t.rjhrqC, {
          helpdeskArticle: p.A.getArticleURL(f.MVz.GUILD_COMMUNITY_FEATURE)
        })
      }), (0, r.jsx)("div", {
        className: x.qT,
        children: [{
          icon: d.Uy2,
          color: o.A.unsafe_rawColors.GREEN_360.css,
          header: b.intl.string(b.t.oVQF2y),
          body: b.intl.format(b.t.A6G7ak, {
            featureHook: (e, t) => (0, r.jsx)("strong", {
              className: x.A3,
              children: e
            }, t)
          })
        }, {
          icon: d.Uy2,
          color: o.A.unsafe_rawColors.PARTNER.css,
          header: b.intl.string(b.t["0rJl9y"]),
          body: b.intl.format(b.t.XsCNky, {
            infoHook: () => (0, r.jsx)(c.m, {
              text: b.intl.string(b.t.kPJlTh),
              "aria-label": b.intl.string(b.t.kPJlTh),
              children: (0, r.jsx)(d.mir, {
                size: "xs",
                color: "currentColor",
                className: x.G
              })
            }),
            featureHook: (e, t) => (0, r.jsx)("strong", {
              className: x.A3,
              children: e
            }, t)
          })
        }, {
          icon: d.mir,
          color: o.A.unsafe_rawColors.RED_360.css,
          header: b.intl.string(b.t.W2kLJC),
          body: b.intl.string(b.t.hyNkHz)
        }].map((e, t) => (0, r.jsx)(N, A({}, e), t))
      })]
    })
  }