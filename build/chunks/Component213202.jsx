/** Chunk was on 83331 **/
/** chunk id: 213202, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  default: () => Y
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
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
  Chunk420529 = require("./420529.jsx"),
  Chunk554747 = require("./554747.js"),
  Chunk924952 = require("./924952.jsx"),
  Chunk423589 = require("./423589.js"),
  Chunk427679 = require("./427679.js"),
  Chunk398048 = require("./398048.jsx"),
  Chunk109764 = require("./109764.jsx"),
  Chunk3689 = require("./3689.jsx"),
  Chunk323597 = require("./323597.jsx"),
  Chunk852245 = require("./852245.jsx"),
  Chunk493802 = require("./493802.jsx"),
  Chunk367722 = require("./367722.js"),
  Chunk461535 = require("./461535.jsx"),
  Chunk776568 = require("./776568.jsx"),
  Chunk218035 = require("./218035.jsx"),
  Chunk775666 = require("./775666.jsx"),
  Chunk442754 = require("./442754.jsx"),
  Chunk333805 = require("./333805.jsx"),
  Chunk567521 = require("./567521.jsx"),
  Chunk624514 = require("./624514.js"),
  Chunk917327 = require("./917327.jsx"),
  Chunk381924 = require("./381924.jsx"),
  Chunk601274 = require("./601274.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function D(n) {
  for (var t = 1; t < arguments.length; t++) {
    var e = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(e);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(e).filter(function(n) {
      return Object.getOwnPropertyDescriptor(e, n).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = e[t], t in n ? Object.defineProperty(n, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : n[t] = i
    })
  }
  return n
}

function U(n) {
  let {
    channel: t,
    guild: e,
    onSelect: s
  } = n, c = t.isGuildStageVoice(), d = (0, l.e7)([C.Z], () => c ? C.Z.getStageInstanceByChannel(t.id) : true, [c, t.id]), Z = (0, y.Z)(t), j = (0, b.qY)(t.id), S = (0, x.Z)(null == j ? true : j.id, e, t), N = (0, A.Z)(t, d), P = (0, h.l)(t), O = (0, h.P)(t), m = (0, g.Z)(t), _ = (0, f.Z)(t), G = (0, v.Z)(t), w = (0, E.Z)(t), M = (0, L.Z)(t), q = (0, k.Z)(t), D = (0, I.Z)(t, e), U = (0, u.Z)({
    id: t.id,
    label: X.intl.string(X.t.gFHI3k)
  }), H = (0, V.Z)(t), Y = (0, o.Z)(t), z = (0, p.Mn)("ChannelListVoiceContextMenuFavorite"), R = (0, Q.ZP)(t), W = (0, T.Z)();
  return (0, i.jsxs)(r.v2r, {
    navId: "channel-context",
    onClose: a.Zy,
    "aria-label": X.intl.string(X.t.Xm41aV),
    onSelect: s,
    children: [(0, i.jsx)(r.kSQ, {
      children: null != j ? S : N
    }), (0, i.jsxs)(r.kSQ, {
      children: [_, G, m, P]
    }), (0, i.jsxs)(r.kSQ, {
      children: [w, z ? R : M, q]
    }), (0, i.jsx)(r.kSQ, {
      children: Y
    }), (0, i.jsx)(r.kSQ, {
      children: O
    }), (0, i.jsxs)(r.kSQ, {
      children: [D, Z]
    }), (0, i.jsx)(r.kSQ, {
      children: H
    }), (0, i.jsxs)(r.kSQ, {
      children: [U, W]
    })]
  })
}

function H(n) {
  let {
    channel: t,
    guild: e,
    onSelect: s
  } = n, c = t.isGuildStageVoice(), d = (0, l.e7)([C.Z], () => c ? C.Z.getStageInstanceByChannel(t.id) : true, [c, t.id]), Z = (0, m.Z)(t), g = (0, y.Z)(t), f = (0, b.qY)(t.id), v = (0, x.Z)(null == f ? true : f.id, e, t), q = (0, A.Z)(t, d), D = (0, h.l)(t), U = (0, h.P)(t), H = (0, E.Z)(t), Y = (0, L.Z)(t), z = (0, k.Z)(t), R = (0, O.Z)(t, e, d), W = (0, I.Z)(t, e), B = (0, w.Z)(t, e), F = (0, M.Z)(t, e.id), J = (0, S.Z)(t, e), K = (0, N.Z)(t, e), $ = (0, P.Z)(t), nn = (0, u.Z)({
    id: t.id,
    label: X.intl.string(X.t.gFHI3k)
  }), nt = (0, V.Z)(t), ne = (0, o.Z)(t), ni = (0, G.Z)(t), nl = (0, j.Z)(t), nr = (0, _.ZP)(t), na = (0, p.Mn)("ChannelListVoiceContextMenuNormal"), ns = (0, Q.ZP)(t), nc = (0, T.Z)();
  return (0, i.jsxs)(r.v2r, {
    navId: "channel-context",
    onClose: a.Zy,
    "aria-label": X.intl.string(X.t.Xm41aV),
    onSelect: s,
    children: [(0, i.jsx)(r.kSQ, {
      children: null != f ? v : q
    }), (0, i.jsxs)(r.kSQ, {
      children: [Z, D]
    }, "mark-as-read-or-favorite"), (0, i.jsxs)(r.kSQ, {
      children: [R, ne, ni, g]
    }, "channel-actions"), (0, i.jsxs)(r.kSQ, {
      children: [F, W, B, H, nl, nt]
    }, "voice-actions"), (0, i.jsxs)(r.kSQ, {
      children: [nr, na ? ns : Y]
    }, "notifications"), (0, i.jsx)(r.kSQ, {
      children: U
    }), (0, i.jsxs)(r.kSQ, {
      children: [z, J, K, $]
    }, "admin-actions"), (0, i.jsxs)(r.kSQ, {
      children: [nn, nc]
    }, "developer-actions")]
  })
}
let Y = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(n) {
  return (0, Z.Z)() ? (0, i.jsx)(U, D({}, n)) : (0, i.jsx)(H, D({}, n))
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.CHANNEL_LIST_VOICE_CHANNEL_MENU])