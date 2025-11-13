/** Chunk was on 9456 **/
/** chunk id: 542581, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk509442 = require("./509442.js"),
  Chunk574583 = require("./574583.js"),
  Chunk481060 = require("./481060.js"),
  Chunk787014 = require("./787014.js"),
  Chunk454585 = require("./454585.js"),
  Chunk456269 = require("./456269.js"),
  Chunk470623 = require("./470623.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk899861 = require("./899861.js"),
  Chunk430864 = require("./430864.js");
let b = Chunk647438.memo(function(e) {
  let {
    channel: t,
    onChange: a
  } = e, b = (0, h.AF)(), {
    guidelinesOpen: j
  } = (0, h.xH)(e => {
    let {
      guidelinesOpen: t
    } = e;
    return {
      guidelinesOpen: t
    }
  }, o.X), v = (0, m.r_)(t), [_, C] = i.useState(false), y = i.useCallback(e => {
    if (null == e) return;
    let t = e.clientHeight >= 220;
    t !== _ && C(t)
  }, [_]);
  i.useLayoutEffect(() => {
    setTimeout(a, 350)
  }, [j, a]);
  let [T, w] = i.useState(!j), S = (0, c.q_F)({
    opacity: +!!j,
    maxHeight: 500 * !!j,
    config: {
      duration: 300
    },
    onRest: () => w(!j)
  });
  return null != t.topic && t.topic.length > 0 ? (0, r.jsx)(s.animated.div, {
    style: S,
    className: T ? x.hiddenVisually : true,
    children: (0, r.jsxs)("div", {
      className: x.container,
      children: [(0, r.jsxs)("div", {
        className: x.headerContainer,
        children: [(0, r.jsxs)(c.Heading, {
          variant: "heading-lg/semibold",
          className: x.guidelinesHeader,
          children: [(0, r.jsx)(c.snC, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20
          }), f.intl.string(f.t["4d4T4l"]), v && (0, r.jsx)(c.P3F, {
            onClick: () => {
              d.ZP.open(t.id, true, g.ZfP.TOPIC)
            },
            tag: "span",
            className: x.clickable,
            children: (0, r.jsx)(c.vdY, {
              size: "xs",
              color: "currentColor"
            })
          })]
        }), (0, r.jsx)(c.P3F, {
          "aria-label": f.intl.string(f.t.cpT0Cq),
          className: x.clickable,
          onClick: () => {
            b.getState().setGuidelinesOpen(false)
          },
          children: (0, r.jsx)(c.Dio, {
            size: "xs",
            color: "currentColor"
          })
        })]
      }), (0, r.jsxs)("div", {
        className: x.descriptionContainer,
        children: [(0, r.jsx)(c.Text, {
          selectable: true,
          variant: "text-sm/normal",
          color: "header-secondary",
          style: {
            maxHeight: 220
          },
          className: l()(x.guidelines, p.markup),
          children: (0, r.jsx)("div", {
            ref: y,
            children: u.Z.parseForumPostGuidelines(t.topic, true, {
              channelId: t.id,
              allowHeading: true,
              allowList: true
            })
          })
        }), _ && (0, r.jsxs)("div", {
          className: x.showMore,
          children: [(0, r.jsx)("div", {
            className: x.gradient
          }), (0, r.jsx)("div", {
            className: x.linkContainer,
            children: (0, r.jsx)(c.P3F, {
              className: x.showMoreLink,
              onClick: () => {
                (0, c.ZDy)(async () => {
                  let {
                    default: e
                  } = await n.e("78712").then(n.bind(n, 223164));
                  return n => {
                    var i, a;
                    return (0, r.jsx)(e, (i = function(e) {
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
                    }({}, n), a = a = {
                      channel: t
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                      }
                      return n
                    })(Object(a)).forEach(function(e) {
                      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
                    }), i))
                  }
                })
              },
              children: (0, r.jsxs)(c.Text, {
                variant: "text-sm/semibold",
                color: "text-brand",
                className: x.showMoreText,
                children: [f.intl.string(f.t.Vu7odK), (0, r.jsx)(c.bJT, {
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