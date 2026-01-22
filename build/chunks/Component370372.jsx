/** Chunk was on 77666 **/
/** chunk id: 370372, original params: n,e,r (module,exports,require) **/
require.d(exports, {
  default: () => T
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk847767 = require("./847767.jsx"),
  Chunk358367 = require("./358367.jsx"),
  Chunk468389 = require("./468389.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk515610 = require("./515610.js"),
  Chunk133238 = require("./133238.jsx"),
  Chunk795144 = require("./795144.jsx"),
  Chunk979807 = require("./979807.jsx"),
  Chunk671470 = require("./671470.jsx"),
  Chunk769591 = require("./769591.js"),
  Chunk533957 = require("./533957.jsx"),
  Chunk886393 = require("./886393.jsx"),
  Chunk477190 = require("./477190.jsx"),
  Chunk307623 = require("./307623.jsx"),
  Chunk317910 = require("./317910.jsx"),
  Chunk475777 = require("./475777.js"),
  Chunk848977 = require("./848977.jsx"),
  Chunk995102 = require("./995102.jsx"),
  Chunk288104 = require("./288104.jsx"),
  Chunk661504 = require("./661504.jsx"),
  Chunk969128 = require("./969128.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function O(n) {
  for (var e = 1; e < arguments.length; e++) {
    var r = null != arguments[e] ? arguments[e] : {},
      t = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (t = t.concat(Object.getOwnPropertySymbols(r).filter(function(n) {
      return Object.getOwnPropertyDescriptor(r, n).enumerable
    }))), t.forEach(function(e) {
      var t;
      t = r[e], e in n ? Object.defineProperty(n, e, {
        value: t,
        enumerable: true,
        configurable: true,
        writable: true
      }) : n[e] = t
    })
  }
  return n
}

function k(n) {
  let {
    channel: e,
    onSelect: r
  } = n, c = (0, p.A)(e), s = (0, f.A)(e), o = (0, h.m)(e), d = (0, h.y)(e), X = (0, u.A)(e), V = (0, x.A)(e), E = (0, j.A)(e), y = (0, C.Ay)(e), g = (0, v.A)(e), m = (0, N.A)(e), O = (0, A.A)({
    id: e.id,
    label: S.intl.string(S.t.gFHI3k)
  }), k = (0, a.A)(e), M = (0, _.Ay)(e), T = (0, b.os)("ChannelContextFavoritesMenu");
  return (0, t.jsxs)(i.W1t, {
    navId: "channel-context",
    onClose: l.Z_,
    "aria-label": S.intl.string(S.t.Xm41aV),
    onSelect: r,
    children: [(0, t.jsx)(i.rXV, {
      children: c
    }), (0, t.jsxs)(i.rXV, {
      children: [V, E, X, o]
    }), (0, t.jsxs)(i.rXV, {
      children: [y, T ? M : g]
    }), (0, t.jsx)(i.rXV, {
      children: m
    }), (0, t.jsx)(i.rXV, {
      children: k
    }), (0, t.jsx)(i.rXV, {
      children: d
    }), (0, t.jsx)(i.rXV, {
      children: s
    }), (0, t.jsx)(i.rXV, {
      children: O
    })]
  })
}

function M(n) {
  let {
    channel: e,
    guild: r,
    onSelect: c
  } = n, s = (0, p.A)(e), o = (0, f.A)(e), d = (0, h.m)(e), u = (0, h.y)(e), x = (0, g.A)(e), j = (0, C.Ay)(e), m = (0, N.A)(e), O = (0, y.A)(e, r), k = (0, X.A)(e, r), M = (0, V.A)(e, r), T = (0, E.A)(e), w = (0, A.A)({
    id: e.id,
    label: S.intl.string(S.t.gFHI3k)
  }), H = (0, a.A)(e), I = (0, v.A)(e), L = (0, _.Ay)(e), P = (0, b.os)("ChannelContextMenuNormal");
  return (0, t.jsxs)(i.W1t, {
    navId: "channel-context",
    onClose: l.Z_,
    "aria-label": S.intl.string(S.t.Xm41aV),
    onSelect: c,
    children: [(0, t.jsxs)(i.rXV, {
      children: [s, d]
    }, "mark-as-read-or-favorite"), (0, t.jsxs)(i.rXV, {
      children: [O, x, o]
    }, "channel-actions"), (0, t.jsxs)(i.rXV, {
      children: [j, P ? L : I]
    }, "notifications"), (0, t.jsxs)(i.rXV, {
      children: [m, k, M, T]
    }, "admin-actions"), (0, t.jsx)(i.rXV, {
      children: H
    }), (0, t.jsx)(i.rXV, {
      children: u
    }), (0, t.jsx)(i.rXV, {
      children: w
    }, "developer-actions")]
  })
}
let T = (0, Chunk358367.A)((0, Chunk847767.A)(function(n) {
  return (0, d.A)() ? (0, t.jsx)(k, O({}, n)) : (0, t.jsx)(M, O({}, n))
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.CHANNEL_LIST_TEXT_CHANNEL_MENU])