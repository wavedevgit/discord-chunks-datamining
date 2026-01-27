/** Chunk was on 75149 **/
/** chunk id: 725756, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => x
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk358367 = require("./358367.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk515610 = require("./515610.js"),
  Chunk849867 = require("./849867.jsx"),
  Chunk795144 = require("./795144.jsx"),
  Chunk769591 = require("./769591.js"),
  Chunk134725 = require("./134725.jsx"),
  Chunk23724 = require("./23724.jsx"),
  Chunk477190 = require("./477190.jsx"),
  Chunk307623 = require("./307623.jsx"),
  Chunk317910 = require("./317910.jsx"),
  Chunk848977 = require("./848977.jsx"),
  Chunk995102 = require("./995102.jsx"),
  Chunk288104 = require("./288104.jsx"),
  Chunk661504 = require("./661504.jsx"),
  Chunk969128 = require("./969128.jsx"),
  Chunk90509 = require("./90509.jsx"),
  Chunk985018 = require("./985018.jsx");

function w(e) {
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
}

function C(e) {
  let {
    channel: t,
    onSelect: n
  } = e, a = (0, A.A)(t), c = (0, j.Ay)(t), s = (0, h.A)(t), y = (0, O.A)(t), f = (0, p.A)(t), g = (0, d.A)(t), m = (0, u.A)(t), w = (0, P.A)(t), C = (0, o.A)({
    id: t.id,
    label: _.intl.string(_.t["2visC6"])
  }), E = (0, b.os)("ChannelCategoryFavoritesMenu"), x = (0, v.Ay)(t);
  return (0, r.jsxs)(i.W1t, {
    "data-menu-needs-review": true,
    navId: "channel-context",
    onClose: l.Z_,
    "aria-label": _.intl.string(_.t.Xm41aV),
    onSelect: n,
    children: [(0, r.jsxs)(i.rXV, {
      children: [a, m, g]
    }), (0, r.jsxs)(i.rXV, {
      children: [c, E ? x : s]
    }), (0, r.jsxs)(i.rXV, {
      children: [y, f]
    }), (0, r.jsx)(i.rXV, {
      children: w
    }), (0, r.jsx)(i.rXV, {
      children: C
    })]
  })
}

function E(e) {
  let {
    channel: t,
    guild: n,
    onSelect: a
  } = e, c = (0, A.A)(t), s = (0, j.Ay)(t), u = (0, h.A)(t), P = (0, O.A)(t), w = (0, p.A)(t), C = (0, g.A)(t), E = (0, d.A)(t), x = (0, y.A)(t, n), D = (0, f.A)(t), S = (0, o.A)({
    id: t.id,
    label: _.intl.string(_.t["2visC6"])
  }), G = (0, m.A)(t), N = (0, b.os)("ChannelCategoryNormalMenu"), T = (0, v.Ay)(t);
  return (0, r.jsxs)(i.W1t, {
    "data-menu-migrated-auto": true,
    navId: "channel-context",
    onClose: l.Z_,
    "aria-label": _.intl.string(_.t.Xm41aV),
    onSelect: a,
    children: [(0, r.jsx)(i.rXV, {
      children: c
    }, "mark-as-read"), (0, r.jsxs)(i.rXV, {
      children: [G, P, w]
    }, "channel-actions"), (0, r.jsxs)(i.rXV, {
      children: [s, N ? T : u]
    }, "notifications"), (0, r.jsxs)(i.rXV, {
      children: [C, E, x, D]
    }, "admin-actions"), (0, r.jsx)(i.rXV, {
      children: S
    }, "developer-actions")]
  })
}
let x = (0, Chunk358367.A)(function(e) {
  return (0, s.A)() ? (0, r.jsx)(C, w({}, e)) : (0, r.jsx)(E, w({}, e))
}, [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.CHANNEL_CATEGORY_MENU])