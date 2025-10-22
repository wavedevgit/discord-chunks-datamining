/** Chunk was on 76892 **/
/** chunk id: 538366, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk665906 = require("./665906.js"),
  Chunk585483 = require("./585483.js"),
  Chunk456269 = require("./456269.js"),
  Chunk228392 = require("./228392.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk252505 = require("./252505.js");

function g(e) {
  let {
    channelName: t,
    guildId: g,
    tagFilter: f,
    channel: x
  } = e, p = (0, c.r_)(x), b = (0, s.cD)(x), j = x.isMediaChannel(), v = i.useCallback(() => {
    (0, d.qz)(), (0, l.ZDy)(async () => {
      let {
        default: e
      } = await n.e("18417").then(n.bind(n, 740696));
      return t => {
        var n, i;
        return (0, r.jsx)(e, (n = function(e) {
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
        }({}, t), i = i = {
          guildId: g
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(i)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
        }), n))
      }
    })
  }, [g]), _ = f.size > 0, C = b || p, y = !_ && p && !j, T = i.useCallback(() => y ? v() : b ? void o.S.dispatch(u.CkL.FOCUS_COMPOSER_TITLE) : (0, u.VqG)(), [v, y, b]);
  return (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsx)(l.Heading, {
      className: h.header,
      variant: "heading-md/semibold",
      children: _ ? m.intl.formatToPlainString(m.t.lvPci0, {
        numTags: f.size
      }) : m.intl.string(m.t.PwTMG0)
    }), (0, r.jsx)(l.Text, {
      color: "header-secondary",
      variant: "text-sm/normal",
      children: _ ? m.intl.formatToPlainString(m.t.AAeye1, {
        numTags: f.size
      }) : m.intl.formatToPlainString(m.t.YtsXFD, {
        channelName: t
      })
    }), C && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.LZC, {
        size: 16
      }), (0, r.jsx)(a.zxk, {
        text: y ? m.intl.string(m.t.DgatTQ) : m.intl.string(m.t.wOKE8I),
        variant: "secondary",
        onClick: T
      })]
    })]
  })
}