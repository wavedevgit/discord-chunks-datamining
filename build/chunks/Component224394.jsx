/** Chunk was on 47841 **/
/** chunk id: 224394, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => T
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

function E(e) {
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
  _ = e => {
    let {
      icon: t,
      color: n,
      size: i = 24,
      header: l,
      body: s
    } = e;
    return (0, r.jsxs)("div", {
      className: h.Vr,
      children: [(0, r.jsx)("div", {
        className: h.AD,
        children: (0, r.jsx)(t, {
          color: null != n ? n : "currentColor",
          width: i,
          height: i,
          size: "custom"
        })
      }), (0, r.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        className: h.Uh,
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
      imageCoordinates: c
    } = e, o = {
      [a ? "right" : "left"]: c[0] + i[0],
      top: c[1] + i[1]
    };
    return (0, r.jsxs)("div", {
      className: s()(h.gI, {
        [h.zj]: l
      }),
      style: o,
      children: [(0, r.jsx)("div", {
        className: h.$f,
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
  T = e => {
    let {
      guild: t
    } = e, [n, l] = i.useState(0), [s, y] = i.useState(0), [v, A] = i.useState(), T = (0, a.bG)([g.A], () => g.A.can(m.xBc.ADMINISTRATOR, t)), I = null == v ? true : v.offsetWidth, C = null == v ? true : v.offsetHeight;
    return i.useEffect(() => {
      null != I && l(I / 2), null != C && y(C / 2)
    }, [I, C, l, y]), i.useEffect(() => {
      (0, u.sF)(p._.GUILD_SETTINGS_COMMUNITY_GUILD_UPSELL)
    }, []), (0, r.jsxs)("div", {
      className: h.kL,
      children: [(0, r.jsxs)("div", {
        className: h.vK,
        ref: e => A(e),
        children: [N.map(e => {
          var t, i;
          return (0, r.jsx)(S, (t = E({}, e), i = i = {
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
          className: h.Sl,
          width: 256
        }), (0, r.jsx)("img", {
          alt: "",
          src: O,
          className: h._7
        })]
      }), (0, r.jsx)(d.Heading, {
        variant: "heading-xl/semibold",
        children: x.intl.string(x.t["M/gBcA"])
      }), (0, r.jsx)(d.Text, {
        color: "text-default",
        variant: "text-md/normal",
        className: h.rf,
        children: x.intl.format(x.t["52EgsM"], {
          helpdeskArticle: b.A.getArticleURL(m.MVz.FRIEND_COMMUNITY_DISCOVERABLE_GUILD_TYPES)
        })
      }), (0, r.jsx)(o.m, {
        text: T ? null : x.intl.string(x.t["pjG+T3"]),
        "aria-label": T ? true : x.intl.string(x.t["pjG+T3"]),
        children: (0, r.jsx)("div", {
          "data-button-hoisted-classname-wrapper": true,
          className: h.x6,
          children: (0, r.jsx)(d.Button, {
            variant: "primary",
            text: x.intl.string(x.t.ElKTeb),
            onClick: () => {
              f.A.open()
            },
            disabled: !T
          })
        })
      }), (0, r.jsx)("hr", {
        className: h.me
      }), (0, r.jsx)(d.Text, {
        color: "text-default",
        variant: "text-sm/normal",
        children: x.intl.string(x.t.OzLWLE)
      }), (0, r.jsx)(d.Text, {
        color: "text-default",
        className: h.rf,
        variant: "text-sm/normal",
        children: x.intl.format(x.t.rjhrqC, {
          helpdeskArticle: b.A.getArticleURL(m.MVz.GUILD_COMMUNITY_FEATURE)
        })
      }), (0, r.jsx)("div", {
        className: h.qT,
        children: [{
          icon: d.Uy2,
          color: c.A.unsafe_rawColors.GREEN_360.css,
          header: x.intl.string(x.t.oVQF2y),
          body: x.intl.format(x.t.A6G7ak, {
            featureHook: (e, t) => (0, r.jsx)("strong", {
              className: h.A3,
              children: e
            }, t)
          })
        }, {
          icon: d.Uy2,
          color: c.A.unsafe_rawColors.PARTNER.css,
          header: x.intl.string(x.t["0rJl9y"]),
          body: x.intl.format(x.t.XsCNky, {
            infoHook: () => (0, r.jsx)(o.m, {
              text: x.intl.string(x.t.kPJlTh),
              "aria-label": x.intl.string(x.t.kPJlTh),
              children: (0, r.jsx)(d.mir, {
                size: "xs",
                color: "currentColor",
                className: h.G
              })
            }),
            featureHook: (e, t) => (0, r.jsx)("strong", {
              className: h.A3,
              children: e
            }, t)
          })
        }, {
          icon: d.mir,
          color: c.A.unsafe_rawColors.RED_360.css,
          header: x.intl.string(x.t.W2kLJC),
          body: x.intl.string(x.t.hyNkHz)
        }].map((e, t) => (0, r.jsx)(_, E({}, e), t))
      })]
    })
  }