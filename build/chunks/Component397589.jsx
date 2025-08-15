/** Chunk was on 31978 **/
/** chunk id: 397589, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => O
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk782568 = require("./782568.js"),
  Chunk592125 = require("./592125.js"),
  Chunk594174 = require("./594174.js"),
  Chunk63063 = require("./63063.js"),
  Chunk5192 = require("./5192.js"),
  Chunk992970 = require("./992970.js"),
  Chunk111810 = require("./111810.js"),
  Chunk287941 = require("./287941.js"),
  Chunk477931 = require("./477931.js"),
  Chunk235894 = require("./235894.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk975405 = require("./975405.js");
let O = e => {
  var t;
  let {
    message: n
  } = e, O = l.useRef(null), v = (0, p.p7)("Message Header") && n.hasPotions(), j = a.Z.getChannel(n.getChannelId()), P = null == (t = n.potions) ? true : t[0], x = l.useMemo(() => {
    var e;
    if (null == P) return null;
    let t = s.default.getUser(P.used_by);
    return null != (e = (0, u.y)(null == j ? true : j.getGuildId(), null == j ? true : j.id, t)) ? e : null == t ? true : t.globalName
  }, [P, j]), w = l.useCallback(() => {
    if (null != O.current && (0, f.Uw)(n)) {
      let {
        x: e,
        y: t,
        width: r,
        height: l
      } = O.current.getBoundingClientRect();
      (0, m.Z)(n, {
        x: e,
        y: t,
        w: r,
        h: l
      }, true, d.LL.UserTriggered)
    }
  }, [n]), C = l.useCallback(() => {
    (0, i.Z)(c.Z.getArticleURL(b.BhN.CONFETTI_POTION))
  }, []);
  return v && null != x && (null == P ? true : P.type) === g.B.CONFETTI ? (0, r.jsx)(o.P3F, {
    onFocus: w,
    onClick: C,
    "aria-label": h.intl.string(h.t.Mp5k6O),
    children: (0, r.jsx)(o.ua7, {
      text: h.intl.formatToPlainString(h.t["FE++aG"], {
        user: x
      }),
      children: e => {
        var t, n;
        return (0, r.jsxs)("div", (t = function(e) {
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
        }({
          ref: O,
          className: y.potionBadge
        }, e), n = n = {
          children: [(0, r.jsx)(o.l22, {
            size: "custom",
            color: "currentColor",
            width: 12,
            height: 12
          }), (0, r.jsx)(o.Text, {
            variant: "text-xs/bold",
            color: "currentColor",
            children: h.intl.string(h.t["8Rrro6"])
          })]
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            n.push.apply(n, r)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t))
      }
    })
  }) : null
}