/** Chunk was on 46875 **/
/** chunk id: 696583, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk942381 = require("./942381.js"),
  Chunk397927 = require("./397927.js"),
  Chunk435183 = require("./435183.js"),
  Chunk46054 = require("./46054.js"),
  Chunk435470 = require("./435470.js"),
  Chunk218152 = require("./218152.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk40211 = require("./40211.js"),
  Chunk206314 = require("./206314.js");
let b = Chunk64700.memo(function(e) {
  let {
    channel: t,
    onChange: i
  } = e, b = (0, h.ST)(), {
    guidelinesOpen: j
  } = (0, h.kU)(e => {
    let {
      guidelinesOpen: t
    } = e;
    return {
      guidelinesOpen: t
    }
  }, o.x), v = (0, m.S4)(t), [_, y] = r.useState(false), A = r.useCallback(e => {
    if (null == e) return;
    let t = e.clientHeight >= 220;
    t !== _ && y(t)
  }, [_]);
  r.useLayoutEffect(() => {
    setTimeout(i, 350)
  }, [j, i]);
  let [C, T] = r.useState(!j), O = (0, c.zhh)({
    opacity: +!!j,
    maxHeight: 500 * !!j,
    config: {
      duration: 300
    },
    onRest: () => T(!j)
  });
  return null != t.topic && t.topic.length > 0 ? (0, l.jsx)(s.animated.div, {
    style: O,
    className: C ? f.kK : true,
    children: (0, l.jsxs)("div", {
      className: f.kL,
      children: [(0, l.jsxs)("div", {
        className: f.N1,
        children: [(0, l.jsxs)(c.Heading, {
          variant: "heading-lg/semibold",
          className: f.$4,
          children: [(0, l.jsx)(c.B8Q, {
            size: "custom",
            color: "currentColor",
            width: 20,
            height: 20
          }), x.intl.string(x.t["4d4T4l"]), v && (0, l.jsx)(c.DUT, {
            onClick: () => {
              d.Ay.open(t.id, true, g.b7d.TOPIC)
            },
            tag: "span",
            className: f.vk,
            children: (0, l.jsx)(c.R2l, {
              size: "xs",
              color: "currentColor"
            })
          })]
        }), (0, l.jsx)(c.DUT, {
          "aria-label": x.intl.string(x.t.cpT0Cq),
          className: f.vk,
          onClick: () => {
            b.getState().setGuidelinesOpen(false)
          },
          children: (0, l.jsx)(c.PGe, {
            size: "xs",
            color: "currentColor"
          })
        })]
      }), (0, l.jsxs)("div", {
        className: f.iQ,
        children: [(0, l.jsx)(c.Text, {
          selectable: true,
          variant: "text-sm/normal",
          color: "text-default",
          style: {
            maxHeight: 220
          },
          className: a()(f.I4, p.PT),
          children: (0, l.jsx)("div", {
            ref: A,
            children: u.A.parseForumPostGuidelines(t.topic, true, {
              channelId: t.id,
              allowHeading: true,
              allowList: true
            })
          })
        }), _ && (0, l.jsxs)("div", {
          className: f.jP,
          children: [(0, l.jsx)("div", {
            className: f.D7
          }), (0, l.jsx)("div", {
            className: f.kx,
            children: (0, l.jsx)(c.DUT, {
              className: f.DD,
              onClick: () => {
                (0, c.mMO)(async () => {
                  let {
                    default: e
                  } = await n.e("45457").then(n.bind(n, 494664));
                  return n => {
                    var r, i;
                    return (0, l.jsx)(e, (r = function(e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                          l = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                          return Object.getOwnPropertyDescriptor(n, e).enumerable
                        }))), l.forEach(function(t) {
                          var l;
                          l = n[t], t in e ? Object.defineProperty(e, t, {
                            value: l,
                            enumerable: true,
                            configurable: true,
                            writable: true
                          }) : e[t] = l
                        })
                      }
                      return e
                    }({}, n), i = i = {
                      channel: t
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                      var n = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, l)
                      }
                      return n
                    })(Object(i)).forEach(function(e) {
                      Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
                    }), r))
                  }
                })
              },
              children: (0, l.jsxs)(c.Text, {
                variant: "text-sm/semibold",
                color: "text-brand",
                className: f.ur,
                children: [x.intl.string(x.t.Vu7odK), (0, l.jsx)(c._Xm, {
                  size: "xs",
                  color: "currentColor",
                  className: f.yS
                })]
              })
            })
          })]
        })]
      })]
    })
  }) : null
})