/** Chunk was on 49131 **/
/** chunk id: 538366, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk665906 = require("./665906.js"),
  Chunk585483 = require("./585483.js"),
  Chunk456269 = require("./456269.js"),
  Chunk228392 = require("./228392.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk585484 = require("./585484.js");

function f(e) {
  let {
    channelName: t,
    guildId: f,
    tagFilter: g,
    channel: x
  } = e, b = (0, c.r_)(x), p = (0, s.cD)(x), j = x.isMediaChannel(), v = a.useCallback(() => {
    (0, d.qz)(), (0, l.ZDy)(async () => {
      let {
        default: e
      } = await n.e("18417").then(n.bind(n, 740696));
      return t => {
        var n, a;
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
        }({}, t), a = a = {
          guildId: f
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(a)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e))
        }), n))
      }
    })
  }, [f]), C = g.size > 0, y = p || b, T = !C && b && !j, S = a.useCallback(() => T ? v() : p ? void o.S.dispatch(u.CkL.FOCUS_COMPOSER_TITLE) : (0, u.VqG)(), [v, T, p]);
  return (0, r.jsxs)("div", {
    className: h.container,
    children: [(0, r.jsx)(l.Heading, {
      className: h.header,
      variant: "heading-md/semibold",
      children: C ? m.intl.formatToPlainString(m.t.lvPci0, {
        numTags: g.size
      }) : m.intl.string(m.t.PwTMG0)
    }), (0, r.jsx)(l.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      children: C ? m.intl.formatToPlainString(m.t.AAeye1, {
        numTags: g.size
      }) : m.intl.formatToPlainString(m.t.YtsXFD, {
        channelName: t
      })
    }), y && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(l.LZC, {
        size: 16
      }), (0, r.jsx)(i.zxk, {
        text: T ? m.intl.string(m.t.DgatTQ) : m.intl.string(m.t.wOKE8I),
        variant: "secondary",
        onClick: S
      })]
    })]
  })
}