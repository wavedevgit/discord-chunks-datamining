/** Chunk was on 40394 **/
/** chunk id: 698193, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  default: () => z
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
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
  Chunk690953 = require("./690953.jsx"),
  Chunk508654 = require("./508654.js"),
  Chunk24661 = require("./24661.jsx"),
  Chunk769591 = require("./769591.js"),
  Chunk446600 = require("./446600.js"),
  Chunk533957 = require("./533957.jsx"),
  Chunk886393 = require("./886393.jsx"),
  Chunk477190 = require("./477190.jsx"),
  Chunk307623 = require("./307623.jsx"),
  Chunk317910 = require("./317910.jsx"),
  Chunk173682 = require("./173682.jsx"),
  Chunk475777 = require("./475777.js"),
  Chunk848977 = require("./848977.jsx"),
  Chunk995102 = require("./995102.jsx"),
  Chunk288104 = require("./288104.jsx"),
  Chunk661504 = require("./661504.jsx"),
  Chunk969128 = require("./969128.jsx"),
  Chunk304694 = require("./304694.jsx"),
  Chunk217754 = require("./217754.jsx"),
  Chunk417925 = require("./417925.js"),
  Chunk671483 = require("./671483.jsx"),
  Chunk217563 = require("./217563.jsx"),
  Chunk788408 = require("./788408.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function Z(n) {
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

function H(n) {
  let {
    channel: t,
    guild: e,
    onSelect: s
  } = n, c = t.isGuildStageVoice(), d = (0, l.bG)([y.A], () => c ? y.A.getStageInstanceByChannel(t.id) : true, [c, t.id]), A = (0, m.A)(t), j = (0, p.Qs)(t.id), C = (0, x.A)(null == j ? true : j.id, e, t), V = (0, T.A)(t, d), O = (0, b.m)(t), X = (0, b.y)(t), N = (0, g.A)(t), S = (0, h.A)(t), P = (0, v.A)(t), D = (0, G.A)(t), I = (0, _.A)(t), B = (0, E.A)(t), Z = (0, M.A)(t, e), H = (0, u.A)({
    id: t.id,
    label: U.intl.string(U.t.gFHI3k)
  }), Y = (0, w.A)(t), z = (0, o.A)(t), F = (0, f.os)("ChannelListVoiceContextMenuFavorite"), Q = (0, L.Ay)(t), R = (0, k.A)();
  return (0, i.jsxs)(r.W1t, {
    "data-menu-needs-review": true,
    navId: "channel-context",
    onClose: a.Z_,
    "aria-label": U.intl.string(U.t.Xm41aV),
    onSelect: s,
    children: [(0, i.jsx)(r.rXV, {
      children: null != j ? C : V
    }), (0, i.jsxs)(r.rXV, {
      children: [S, P, N, O]
    }), (0, i.jsxs)(r.rXV, {
      children: [D, F ? Q : I, B]
    }), (0, i.jsx)(r.rXV, {
      children: z
    }), (0, i.jsxs)(r.rXV, {
      children: [Z, A]
    }), (0, i.jsx)(r.rXV, {
      children: X
    }), (0, i.jsx)(r.rXV, {
      children: Y
    }), (0, i.jsxs)(r.rXV, {
      children: [H, R]
    })]
  })
}

function Y(n) {
  let {
    channel: t,
    guild: e,
    onSelect: s
  } = n, c = t.isGuildStageVoice(), d = (0, l.bG)([y.A], () => c ? y.A.getStageInstanceByChannel(t.id) : true, [c, t.id]), A = (0, N.A)(t), g = (0, m.A)(t), h = (0, p.Qs)(t.id), v = (0, x.A)(null == h ? true : h.id, e, t), B = (0, T.A)(t, d), Z = (0, b.m)(t), H = (0, b.y)(t), Y = (0, G.A)(t), z = (0, _.A)(t), F = (0, E.A)(t), Q = (0, X.A)(t, e, d), R = (0, M.A)(t, e), W = (0, D.A)(t, e), q = (0, I.A)(t, e.id), K = (0, C.A)(t, e), J = (0, V.A)(t, e), $ = (0, O.A)(t), nn = (0, u.A)({
    id: t.id,
    label: U.intl.string(U.t.gFHI3k)
  }), nt = (0, w.A)(t), ne = (0, o.A)(t), ni = (0, P.A)(t), nl = (0, j.A)(t), nr = (0, S.Ay)(t), na = (0, f.os)("ChannelListVoiceContextMenuNormal"), ns = (0, L.Ay)(t), nc = (0, k.A)();
  return (0, i.jsxs)(r.W1t, {
    "data-menu-needs-review": true,
    navId: "channel-context",
    onClose: a.Z_,
    "aria-label": U.intl.string(U.t.Xm41aV),
    onSelect: s,
    children: [(0, i.jsx)(r.rXV, {
      children: null != h ? v : B
    }), (0, i.jsxs)(r.rXV, {
      children: [A, Z]
    }, "mark-as-read-or-favorite"), (0, i.jsxs)(r.rXV, {
      children: [Q, ne, ni, g]
    }, "channel-actions"), (0, i.jsxs)(r.rXV, {
      children: [q, R, W, Y, nl, nt]
    }, "voice-actions"), (0, i.jsxs)(r.rXV, {
      children: [nr, na ? ns : z]
    }, "notifications"), (0, i.jsxs)(r.rXV, {
      children: [F, K, J, $]
    }, "admin-actions"), (0, i.jsx)(r.rXV, {
      children: H
    }), (0, i.jsxs)(r.rXV, {
      children: [nn, nc]
    }, "developer-actions")]
  })
}
let z = (0, Chunk358367.A)((0, Chunk847767.A)(function(n) {
  return (0, A.A)() ? (0, i.jsx)(H, Z({}, n)) : (0, i.jsx)(Y, Z({}, n))
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.CHANNEL_LIST_VOICE_CHANNEL_MENU])