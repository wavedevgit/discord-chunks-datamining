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
  Chunk442754 = require("./442754.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function O(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = null != arguments[e] ? arguments[e] : {},
      r = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(n) {
      return Object.getOwnPropertyDescriptor(t, n).enumerable
    }))), r.forEach(function(e) {
      var r;
      r = t[e], e in n ? Object.defineProperty(n, e, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : n[e] = r
    })
  }
  return n
}

function m(n) {
  let {
    channel: e,
    onSelect: t
  } = n, c = (0, C.Z)(e), s = (0, b.Z)(e), o = (0, u.l)(e), Z = (0, u.P)(e), x = (0, h.Z)(e), f = (0, j.Z)(e), E = (0, S.Z)(e), v = (0, Q.ZP)(e), g = (0, p.Z)(e), y = (0, N.Z)(e), O = (0, d.Z)({
    id: e.id,
    label: _.intl.string(_.t.gFHI3k)
  }), m = (0, a.Z)(e), M = (0, P.ZP)(e), A = (0, k.Mn)("ChannelContextFavoritesMenu");
  return (0, r.jsxs)(l.v2r, {
    navId: "channel-context",
    onClose: i.Zy,
    "aria-label": _.intl.string(_.t.Xm41aV),
    onSelect: t,
    children: [(0, r.jsx)(l.kSQ, {
      children: c
    }), (0, r.jsxs)(l.kSQ, {
      children: [f, E, x, o]
    }), (0, r.jsxs)(l.kSQ, {
      children: [v, A ? M : g]
    }), (0, r.jsx)(l.kSQ, {
      children: y
    }), (0, r.jsx)(l.kSQ, {
      children: m
    }), (0, r.jsx)(l.kSQ, {
      children: Z
    }), (0, r.jsx)(l.kSQ, {
      children: s
    }), (0, r.jsx)(l.kSQ, {
      children: O
    })]
  })
}

function M(n) {
  let {
    channel: e,
    guild: t,
    onSelect: c
  } = n, s = (0, C.Z)(e), o = (0, b.Z)(e), Z = (0, u.l)(e), h = (0, u.P)(e), j = (0, g.Z)(e), S = (0, Q.ZP)(e), y = (0, N.Z)(e), O = (0, v.Z)(e, t), m = (0, x.Z)(e, t), M = (0, f.Z)(e, t), A = (0, E.Z)(e), T = (0, d.Z)({
    id: e.id,
    label: _.intl.string(_.t.gFHI3k)
  }), w = (0, a.Z)(e), H = (0, p.Z)(e), I = (0, P.ZP)(e), L = (0, k.Mn)("ChannelContextMenuNormal");
  return (0, r.jsxs)(l.v2r, {
    navId: "channel-context",
    onClose: i.Zy,
    "aria-label": _.intl.string(_.t.Xm41aV),
    onSelect: c,
    children: [(0, r.jsxs)(l.kSQ, {
      children: [s, Z]
    }, "mark-as-read-or-favorite"), (0, r.jsxs)(l.kSQ, {
      children: [O, j, o]
    }, "channel-actions"), (0, r.jsxs)(l.kSQ, {
      children: [S, L ? I : H]
    }, "notifications"), (0, r.jsxs)(l.kSQ, {
      children: [y, m, M, A]
    }, "admin-actions"), (0, r.jsx)(l.kSQ, {
      children: w
    }), (0, r.jsx)(l.kSQ, {
      children: h
    }), (0, r.jsx)(l.kSQ, {
      children: T
    }, "developer-actions")]
  })
}
let A = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(n) {
  return (0, Z.Z)() ? (0, r.jsx)(m, O({}, n)) : (0, r.jsx)(M, O({}, n))
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU])