/** Chunk was on 83331 **/
/** chunk id: 213202, original params: e,t,n (module,exports,require) **/
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

function X(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function U(e) {
  let {
    channel: t,
    guild: n,
    onSelect: o
  } = e, c = t.isGuildStageVoice(), u = (0, r.e7)([O.Z], () => c ? O.Z.getStageInstanceByChannel(t.id) : true, [c, t.id]), Z = (0, P.Z)(t), j = (0, p.qY)(t.id), x = (0, v.Z)(null == j ? true : j.id, n, t), S = (0, G.Z)(t, u), C = (0, f.l)(t), N = (0, f.P)(t), k = (0, b.Z)(t), w = (0, g.Z)(t), Q = (0, h.Z)(t), A = (0, E.Z)(t), D = (0, _.Z)(t), I = (0, m.Z)(t), X = (0, M.Z)(t, n), U = (0, d.Z)({
    id: t.id,
    label: q.intl.string(q.t.gFHI3k)
  }), H = (0, T.Z)(t), Y = (0, s.Z)(t), z = (0, y.Mn)("ChannelListVoiceContextMenuFavorite"), R = (0, L.ZP)(t), W = (0, V.Z)();
  return (0, i.jsxs)(l.v2r, {
    navId: "channel-context",
    onClose: a.Zy,
    "aria-label": q.intl.string(q.t.Xm41aV),
    onSelect: o,
    children: [(0, i.jsx)(l.kSQ, {
      children: null != j ? x : S
    }), (0, i.jsxs)(l.kSQ, {
      children: [w, Q, k, C]
    }), (0, i.jsxs)(l.kSQ, {
      children: [A, z ? R : D, I]
    }), (0, i.jsx)(l.kSQ, {
      children: Y
    }), (0, i.jsx)(l.kSQ, {
      children: N
    }), (0, i.jsxs)(l.kSQ, {
      children: [X, Z]
    }), (0, i.jsx)(l.kSQ, {
      children: H
    }), (0, i.jsxs)(l.kSQ, {
      children: [U, W]
    })]
  })
}

function H(e) {
  let {
    channel: t,
    guild: n,
    onSelect: o
  } = e, c = t.isGuildStageVoice(), u = (0, r.e7)([O.Z], () => c ? O.Z.getStageInstanceByChannel(t.id) : true, [c, t.id]), Z = (0, k.Z)(t), b = (0, P.Z)(t), g = (0, p.qY)(t.id), h = (0, v.Z)(null == g ? true : g.id, n, t), I = (0, G.Z)(t, u), X = (0, f.l)(t), U = (0, f.P)(t), H = (0, E.Z)(t), Y = (0, _.Z)(t), z = (0, m.Z)(t), R = (0, N.Z)(t, n, u), W = (0, M.Z)(t, n), B = (0, A.Z)(t, n), F = (0, D.Z)(t, n.id), J = (0, x.Z)(t, n), K = (0, S.Z)(t, n), $ = (0, C.Z)(t), ee = (0, d.Z)({
    id: t.id,
    label: q.intl.string(q.t.gFHI3k)
  }), et = (0, T.Z)(t), en = (0, s.Z)(t), ei = (0, Q.Z)(t), er = (0, j.Z)(t), el = (0, w.ZP)(t), ea = (0, y.Mn)("ChannelListVoiceContextMenuNormal"), eo = (0, L.ZP)(t), ec = (0, V.Z)();
  return (0, i.jsxs)(l.v2r, {
    navId: "channel-context",
    onClose: a.Zy,
    "aria-label": q.intl.string(q.t.Xm41aV),
    onSelect: o,
    children: [(0, i.jsx)(l.kSQ, {
      children: null != g ? h : I
    }), (0, i.jsxs)(l.kSQ, {
      children: [Z, X]
    }, "mark-as-read-or-favorite"), (0, i.jsxs)(l.kSQ, {
      children: [R, en, ei, b]
    }, "channel-actions"), (0, i.jsxs)(l.kSQ, {
      children: [F, W, B, H, er, et]
    }, "voice-actions"), (0, i.jsxs)(l.kSQ, {
      children: [el, ea ? eo : Y]
    }, "notifications"), (0, i.jsx)(l.kSQ, {
      children: U
    }), (0, i.jsxs)(l.kSQ, {
      children: [z, J, K, $]
    }, "admin-actions"), (0, i.jsxs)(l.kSQ, {
      children: [ee, ec]
    }, "developer-actions")]
  })
}
let Y = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  return (0, Z.Z)() ? (0, i.jsx)(U, X({}, e)) : (0, i.jsx)(H, X({}, e))
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.CHANNEL_LIST_VOICE_CHANNEL_MENU])