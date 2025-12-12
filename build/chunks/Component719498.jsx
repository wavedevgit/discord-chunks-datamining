/** Chunk was on 30019 **/
/** chunk id: 719498, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk933557 = require("./933557.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk296023 = require("./296023.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk463488 = require("./463488.js");
let u = e => {
  let {
    channel: t,
    application: u,
    onClose: b,
    transitionState: m
  } = e, j = (0, l.w)(t), x = a.useCallback(() => (b(), (0, c.ZDy)(async () => {
    let {
      default: e
    } = await r.e("31907").then(r.bind(r, 366854));
    return r => {
      var a, i;
      return (0, n.jsx)(e, (a = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({}, r), i = i = {
        channelId: t.id,
        application: u
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e))
      }), a))
    }
  })), [u, t.id, b]), O = (0, o.ZP)(t, true);
  return (0, n.jsx)(i.Modal, {
    transitionState: m,
    "aria-label": d.intl.string(d.t.OJknhi),
    onClose: b,
    title: d.intl.string(d.t.OJknhi),
    actions: [{
      text: d.intl.string(d.t["ETE/oC"]),
      onClick: b,
      variant: "secondary"
    }, {
      text: d.intl.string(d.t.LLWaxQ),
      onClick: x,
      variant: "critical-primary"
    }],
    children: (0, n.jsxs)("div", {
      className: p.content,
      children: [(0, n.jsx)(s.Z, {
        game: u,
        size: s.A.XLARGE
      }), (0, n.jsxs)("div", {
        className: p.metadata,
        children: [(0, n.jsxs)("div", {
          className: p.metadataHeader,
          children: [(0, n.jsx)(c.Text, {
            variant: "text-md/semibold",
            color: "text-strong",
            children: u.name
          }), (0, n.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: d.intl.format(d.t["0NJZAU"], {
              channelName: O
            })
          })]
        }), null != j && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)("div", {
            className: p.divider
          }), (0, n.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: j
          })]
        })]
      })]
    })
  })
}