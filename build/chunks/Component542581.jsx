/** Chunk was on 193 **/
/** chunk id: 542581, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk807794 = require("./807794.js"),
  Chunk55160 = require("./55160.js"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk454585 = require("./454585.js"),
  Chunk456269 = require("./456269.js"),
  Chunk470623 = require("./470623.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk979444 = require("./979444.js"),
  Chunk960324 = require("./960324.js");
let p = Chunk473749.memo(function(e) {
  let {
    channel: t,
    onChange: i
  } = e, p = (0, f.AF)(), {
    guidelinesOpen: j
  } = (0, f.xH)(e => {
    let {
      guidelinesOpen: t
    } = e;
    return {
      guidelinesOpen: t
    }
  }, o.X), v = (0, m.r_)(t), [C, y] = r.useState(false), T = r.useCallback(e => {
    if (null == e) return;
    let t = e.clientHeight >= 220;
    t !== C && y(t)
  }, [C]);
  r.useLayoutEffect(() => {
    setTimeout(i, 350)
  }, [j, i]);
  let [w, S] = r.useState(!j), N = (0, c.q_F)({
    opacity: +!!j,
    maxHeight: 500 * !!j,
    config: {
      duration: 300
    },
    onRest: () => S(!j)
  });
  return null != t.topic && t.topic.length > 0 ? (0, a.jsx)(s.animated.div, {
    style: N,
    className: w ? x.hiddenVisually : true,
    children: (0, a.jsxs)("div", {
      className: x.container,
      children: [(0, a.jsxs)("div", {
        className: x.headerContainer,
        children: [(0, a.jsxs)(c.Heading, {
          variant: "heading-lg/semibold",
          className: x.guidelinesHeader,
          children: [(0, a.jsx)(c.snC, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20
          }), g.intl.string(g.t["4d4T4l"]), v && (0, a.jsx)(c.P3F, {
            onClick: () => {
              d.ZP.open(t.id, true, h.ZfP.TOPIC)
            },
            tag: "span",
            className: x.clickable,
            children: (0, a.jsx)(c.vdY, {
              size: "xs",
              color: "currentColor"
            })
          })]
        }), (0, a.jsx)(c.P3F, {
          "aria-label": g.intl.string(g.t.cpT0Cq),
          className: x.clickable,
          onClick: () => {
            p.getState().setGuidelinesOpen(false)
          },
          children: (0, a.jsx)(c.Dio, {
            size: "xs",
            color: "currentColor"
          })
        })]
      }), (0, a.jsxs)("div", {
        className: x.descriptionContainer,
        children: [(0, a.jsx)(c.Text, {
          selectable: true,
          variant: "text-sm/normal",
          color: "text-default",
          style: {
            maxHeight: 220
          },
          className: l()(x.guidelines, b.markup),
          children: (0, a.jsx)("div", {
            ref: T,
            children: u.Z.parseForumPostGuidelines(t.topic, true, {
              channelId: t.id,
              allowHeading: true,
              allowList: true
            })
          })
        }), C && (0, a.jsxs)("div", {
          className: x.showMore,
          children: [(0, a.jsx)("div", {
            className: x.gradient
          }), (0, a.jsx)("div", {
            className: x.linkContainer,
            children: (0, a.jsx)(c.P3F, {
              className: x.showMoreLink,
              onClick: () => {
                (0, c.ZDy)(async () => {
                  let {
                    default: e
                  } = await n.e("78712").then(n.bind(n, 223164));
                  return n => {
                    var r, i;
                    return (0, a.jsx)(e, (r = function(e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                          a = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                          return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), a.forEach(function(t) {
                          var a;
                          a = n[t], t in e ? Object.defineProperty(e, t, {
                            value: a,
                            enumerable: true,
                            configurable: true,
                            writable: true
                          }) : e[t] = a
                        })
                      }
                      return e
                    }({}, n), i = i = {
                      channel: t
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                        var a = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, a)
                      }
                      return n
                    })(Object(i)).forEach(function(e) {
                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
                    }), r))
                  }
                })
              },
              children: (0, a.jsxs)(c.Text, {
                variant: "text-sm/semibold",
                color: "text-brand",
                className: x.showMoreText,
                children: [g.intl.string(g.t.Vu7odK), (0, a.jsx)(c.bJT, {
                  size: "xs",
                  color: "currentColor",
                  className: x.showMoreIcon
                })]
              })
            })
          })]
        })]
      })]
    })
  }) : null
})