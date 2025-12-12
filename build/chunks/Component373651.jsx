/** Chunk was on 44011 **/
/** chunk id: 373651, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  default: () => A
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.jsx"),
  Chunk108843 = require("./108843.jsx"),
  Chunk947440 = require("./947440.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk916069 = require("./916069.js"),
  Chunk895563 = require("./895563.jsx"),
  Chunk212205 = require("./212205.jsx"),
  Chunk478035 = require("./478035.jsx"),
  Chunk62420 = require("./62420.jsx"),
  Chunk423589 = require("./423589.js"),
  Chunk398048 = require("./398048.jsx"),
  Chunk109764 = require("./109764.jsx"),
  Chunk3689 = require("./3689.jsx"),
  Chunk323597 = require("./323597.jsx"),
  Chunk852245 = require("./852245.jsx"),
  Chunk367722 = require("./367722.js"),
  Chunk461535 = require("./461535.jsx"),
  Chunk776568 = require("./776568.jsx"),
  Chunk218035 = require("./218035.jsx"),
  Chunk775666 = require("./775666.jsx"),
  Chunk593589 = require("./593589.jsx"),
  Chunk442754 = require("./442754.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function O(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {},
      l = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable
    }))), l.forEach(function(e) {
      var l;
      l = t[e], e in n ? Object.defineProperty(n, e, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : n[e] = l
    })
  }
  return n
}

function w(n) {
  let {
    channel: e,
    onSelect: t
  } = n, o = (0, v.Z)(e), c = (0, b.Z)(e), s = (0, h.l)(e), u = (0, h.P)(e), j = (0, Z.Z)(e), k = (0, x.Z)(e), S = (0, p.Z)(e), _ = (0, E.ZP)(e), m = (0, N.Z)(e), Q = (0, C.Z)(e), O = (0, d.Z)({
    id: e.id,
    label: y.intl.string(y.t.gFHI3k)
  }), w = (0, a.Z)(e), T = (0, P.ZP)(e), A = (0, f.Mn)("ChannelContextFavoritesMenu"), M = (0, g.Z)(e, "list_favorites_text_channel_context_menu");
  return (0, l.jsxs)(i.v2r, {
    navId: "channel-context",
    onClose: r.Zy,
    "aria-label": y.intl.string(y.t.Xm41aV),
    onSelect: t,
    children: [(0, l.jsx)(i.kSQ, {
      children: o
    }), (0, l.jsxs)(i.kSQ, {
      children: [k, S, j, s]
    }), (0, l.jsxs)(i.kSQ, {
      children: [_, A ? T : m]
    }), (0, l.jsx)(i.kSQ, {
      children: Q
    }), (0, l.jsx)(i.kSQ, {
      children: w
    }), (0, l.jsx)(i.kSQ, {
      children: u
    }), (0, l.jsxs)(i.kSQ, {
      children: [c, M]
    }), (0, l.jsx)(i.kSQ, {
      children: O
    })]
  })
}

function T(n) {
  let {
    channel: e,
    guild: t,
    onSelect: o
  } = n, c = (0, v.Z)(e), s = (0, b.Z)(e), u = (0, h.l)(e), Z = (0, h.P)(e), x = (0, m.Z)(e), p = (0, E.ZP)(e), Q = (0, C.Z)(e), O = (0, _.Z)(e, t), w = (0, j.Z)(e, t), T = (0, k.Z)(e, t), A = (0, S.Z)(e), M = (0, d.Z)({
    id: e.id,
    label: y.intl.string(y.t.gFHI3k)
  }), H = (0, a.Z)(e), I = (0, g.Z)(e, "list_text_channel_context_menu"), L = (0, N.Z)(e), X = (0, P.ZP)(e), q = (0, f.Mn)("ChannelContextMenuNormal");
  return (0, l.jsxs)(i.v2r, {
    navId: "channel-context",
    onClose: r.Zy,
    "aria-label": y.intl.string(y.t.Xm41aV),
    onSelect: o,
    children: [(0, l.jsxs)(i.kSQ, {
      children: [c, u]
    }, "mark-as-read-or-favorite"), (0, l.jsxs)(i.kSQ, {
      children: [O, x, s, I]
    }, "channel-actions"), (0, l.jsxs)(i.kSQ, {
      children: [p, q ? X : L]
    }, "notifications"), (0, l.jsxs)(i.kSQ, {
      children: [Q, w, T, A]
    }, "admin-actions"), (0, l.jsx)(i.kSQ, {
      children: H
    }), (0, l.jsx)(i.kSQ, {
      children: Z
    }), (0, l.jsx)(i.kSQ, {
      children: M
    }, "developer-actions")]
  })
}
let A = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(n) {
  return (0, u.Z)() ? (0, l.jsx)(w, O({}, n)) : (0, l.jsx)(T, O({}, n))
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU])