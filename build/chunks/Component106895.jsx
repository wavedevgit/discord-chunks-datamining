/** Chunk was on 73380 **/
/** chunk id: 106895, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk47167 = require("./47167.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk514810 = require("./514810.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk869527 = require("./869527.js");
let u = e => {
  let {
    channel: t,
    application: u,
    onClose: b,
    transitionState: y
  } = e, j = (0, o.N)(t), m = a.useCallback(() => (b(), (0, s.mMO)(async () => {
    let {
      default: e
    } = await r.e("93154").then(r.bind(r, 428185));
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
  })), [u, t.id, b]), x = (0, c.Ay)(t, true);
  return (0, n.jsx)(i.Modal, {
    transitionState: y,
    "aria-label": d.intl.string(d.t.OJknhi),
    onClose: b,
    title: d.intl.string(d.t.OJknhi),
    actions: [{
      text: d.intl.string(d.t["ETE/oC"]),
      onClick: b,
      variant: "secondary"
    }, {
      text: d.intl.string(d.t.LLWaxQ),
      onClick: m,
      variant: "critical-primary"
    }],
    children: (0, n.jsxs)("div", {
      className: p.Qs,
      children: [(0, n.jsx)(l.A, {
        game: u,
        size: l.M.XLARGE
      }), (0, n.jsxs)("div", {
        className: p.yu,
        children: [(0, n.jsxs)("div", {
          className: p.py,
          children: [(0, n.jsx)(s.Text, {
            variant: "text-md/semibold",
            color: "text-strong",
            children: u.name
          }), (0, n.jsx)(s.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: d.intl.format(d.t["0NJZAU"], {
              channelName: x
            })
          })]
        }), null != j && (0, n.jsxs)(n.Fragment, {
          children: [(0, n.jsx)("div", {
            className: p.yF
          }), (0, n.jsx)(s.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            children: j
          })]
        })]
      })]
    })
  })
}