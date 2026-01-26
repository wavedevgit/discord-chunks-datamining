/** Chunk was on 46875 **/
/** chunk id: 633148, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk406704 = require("./406704.js"),
  Chunk203982 = require("./203982.js"),
  Chunk435470 = require("./435470.js"),
  Chunk853742 = require("./853742.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk659002 = require("./659002.js");

function g(e) {
  let {
    channelName: t,
    guildId: g,
    tagFilter: f,
    channel: x
  } = e, p = (0, c.S4)(x), b = (0, s.AI)(x), j = x.isMediaChannel(), v = l.useCallback(() => {
    (0, d.zd)(), (0, a.mMO)(async () => {
      let {
        default: e
      } = await n.e("7937").then(n.bind(n, 420472));
      return t => {
        var n, l;
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
        }({}, t), l = l = {
          guildId: g
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
        }), n))
      }
    })
  }, [g]), _ = f.size > 0, y = b || p, A = !_ && p && !j, C = l.useCallback(() => A ? v() : b ? void o._.dispatch(u.jej.FOCUS_COMPOSER_TITLE) : (0, u.FXj)(), [v, A, b]);
  return (0, r.jsxs)("div", {
    className: h.k,
    children: [(0, r.jsx)(a.Heading, {
      className: h.w,
      variant: "heading-md/semibold",
      children: _ ? m.intl.formatToPlainString(m.t.lvPci0, {
        numTags: f.size
      }) : m.intl.string(m.t.PwTMG0)
    }), (0, r.jsx)(a.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      children: _ ? m.intl.formatToPlainString(m.t.AAeye1, {
        numTags: f.size
      }) : m.intl.formatToPlainString(m.t.YtsXFD, {
        channelName: t
      })
    }), y && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.hKd, {
        size: 16
      }), (0, r.jsx)(i.$nd, {
        text: A ? m.intl.string(m.t.DgatTQ) : m.intl.string(m.t.wOKE8I),
        variant: "secondary",
        onClick: C
      })]
    })]
  })
}