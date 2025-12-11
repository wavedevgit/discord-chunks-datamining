/** Chunk was on 30019 **/
/** chunk id: 719498, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk296023 = require("./296023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk167550 = require("./167550.js");
let p = e => {
  let {
    channel: t,
    application: p,
    onClose: u,
    transitionState: m
  } = e, j = (0, l.w)(t), x = n.useCallback(() => (u(), (0, c.ZDy)(async () => {
    let {
      default: e
    } = await r.e("31907").then(r.bind(r, 366854));
    return r => {
      var n, i;
      return (0, a.jsx)(e, (n = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), a.forEach(function(t) {
            var a;
            a = r[t], t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = a
          })
        }
        return e
      }({}, r), i = i = {
        channelId: t.id,
        application: p
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          r.push.apply(r, a)
        }
        return r
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
      }), n))
    }
  })), [p, t.id, u]), O = (0, o.ZP)(t, true);
  return (0, a.jsx)(i.Modal, {
    transitionState: m,
    "aria-label": d.intl.string(d.t.OJknhi),
    onClose: u,
    title: d.intl.string(d.t.OJknhi),
    actions: [{
      text: d.intl.string(d.t["ETE/oC"]),
      onClick: u,
      variant: "secondary"
    }, {
      text: d.intl.string(d.t.LLWaxQ),
      onClick: x,
      variant: "critical-primary"
    }],
    children: (0, a.jsxs)("div", {
      className: b.content,
      children: [(0, a.jsx)(s.Z, {
        game: p,
        size: s.A.XLARGE
      }), (0, a.jsxs)("div", {
        className: b.metadata,
        children: [(0, a.jsxs)("div", {
          className: b.metadataHeader,
          children: [(0, a.jsx)(c.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: p.name
          }), (0, a.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: d.intl.format(d.t["0NJZAU"], {
              channelName: O
            })
          })]
        }), null != j && (0, a.jsxs)(a.Fragment, {
          children: [(0, a.jsx)("div", {
            className: b.divider
          }), (0, a.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: j
          })]
        })]
      })]
    })
  })
}