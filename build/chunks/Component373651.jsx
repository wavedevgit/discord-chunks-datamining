/** Chunk was on 91526 **/
/** chunk id: 373651, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => B
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
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

function E(e) {
  for (var n = 1; n < arguments.length; n++) {
    var t = null != arguments[n] ? arguments[n] : {},
      i = Object.keys(t);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
      return Object.getOwnPropertyDescriptor(t, e).enumerable
    }))), i.forEach(function(n) {
      var i;
      i = t[n], n in e ? Object.defineProperty(e, n, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[n] = i
    })
  }
  return e
}

function k(e) {
  let {
    channel: n,
    onSelect: t
  } = e, a = (0, v.Z)(n), c = (0, g.Z)(n), d = (0, p.l)(n), s = (0, p.P)(n), h = (0, u.Z)(n), C = (0, f.Z)(n), j = (0, b.Z)(n), P = (0, y.ZP)(n), T = (0, I.Z)(n), w = (0, x.Z)(n), Z = (0, _.Z)({
    id: n.id,
    label: S.intl.string(S.t.gFHI3t)
  }), E = (0, l.Z)(n), k = (0, O.ZP)(n), L = (0, m.Mn)("ChannelContextFavoritesMenu");
  return (0, i.jsxs)(r.v2r, {
    navId: "channel-context",
    onClose: o.Zy,
    "aria-label": S.intl.string(S.t.Xm41aW),
    onSelect: t,
    children: [(0, i.jsx)(r.kSQ, {
      children: a
    }), (0, i.jsxs)(r.kSQ, {
      children: [C, j, h, d]
    }), (0, i.jsxs)(r.kSQ, {
      children: [P, L ? k : T]
    }), (0, i.jsx)(r.kSQ, {
      children: w
    }), (0, i.jsx)(r.kSQ, {
      children: E
    }), (0, i.jsx)(r.kSQ, {
      children: s
    }), (0, i.jsx)(r.kSQ, {
      children: c
    }), (0, i.jsx)(r.kSQ, {
      children: Z
    })]
  })
}

function L(e) {
  let {
    channel: n,
    guild: t,
    onSelect: a
  } = e, c = (0, v.Z)(n), d = (0, g.Z)(n), s = (0, p.l)(n), u = (0, p.P)(n), f = (0, w.Z)(n), b = (0, y.ZP)(n), Z = (0, x.Z)(n), E = (0, P.Z)(n, t), k = (0, h.Z)(n, t), L = (0, C.Z)(n, t), B = (0, j.Z)(n), N = (0, _.Z)({
    id: n.id,
    label: S.intl.string(S.t.gFHI3t)
  }), A = (0, l.Z)(n), W = (0, T.Z)(n, "list_text_channel_context_menu"), U = (0, I.Z)(n), Q = (0, O.ZP)(n), D = (0, m.Mn)("ChannelContextMenuNormal");
  return (0, i.jsxs)(r.v2r, {
    navId: "channel-context",
    onClose: o.Zy,
    "aria-label": S.intl.string(S.t.Xm41aW),
    onSelect: a,
    children: [(0, i.jsxs)(r.kSQ, {
      children: [c, s]
    }, "mark-as-read-or-favorite"), (0, i.jsxs)(r.kSQ, {
      children: [E, f, d, W]
    }, "channel-actions"), (0, i.jsxs)(r.kSQ, {
      children: [b, D ? Q : U]
    }, "notifications"), (0, i.jsxs)(r.kSQ, {
      children: [Z, k, L, B]
    }, "admin-actions"), (0, i.jsx)(r.kSQ, {
      children: A
    }), (0, i.jsx)(r.kSQ, {
      children: u
    }), (0, i.jsx)(r.kSQ, {
      children: N
    }, "developer-actions")]
  })
}
let B = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  return (0, s.Z)() ? (0, i.jsx)(k, E({}, e)) : (0, i.jsx)(L, E({}, e))
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU])