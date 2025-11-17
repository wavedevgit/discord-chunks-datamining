/** Chunk was on 51307 **/
/** chunk id: 373651, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => M
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

function E(e) {
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

function N(e) {
  let {
    channel: t,
    onSelect: n
  } = e, o = (0, O.Z)(t), l = (0, j.Z)(t), c = (0, p.l)(t), u = (0, p.P)(t), m = (0, b.Z)(t), v = (0, h.Z)(t), y = (0, f.Z)(t), _ = (0, C.ZP)(t), Z = (0, P.Z)(t), w = (0, x.Z)(t), E = (0, d.Z)({
    id: t.id,
    label: I.intl.string(I.t.gFHI3k)
  }), N = (0, s.Z)(t), T = (0, k.ZP)(t), M = (0, g.Mn)("ChannelContextFavoritesMenu"), A = (0, S.Z)(t, "list_favorites_text_channel_context_menu");
  return (0, r.jsxs)(i.v2r, {
    navId: "channel-context",
    onClose: a.Zy,
    "aria-label": I.intl.string(I.t.Xm41aV),
    onSelect: n,
    children: [(0, r.jsx)(i.kSQ, {
      children: o
    }), (0, r.jsxs)(i.kSQ, {
      children: [v, y, m, c]
    }), (0, r.jsxs)(i.kSQ, {
      children: [_, M ? T : Z]
    }), (0, r.jsx)(i.kSQ, {
      children: w
    }), (0, r.jsx)(i.kSQ, {
      children: N
    }), (0, r.jsx)(i.kSQ, {
      children: u
    }), (0, r.jsxs)(i.kSQ, {
      children: [l, A]
    }), (0, r.jsx)(i.kSQ, {
      children: E
    })]
  })
}

function T(e) {
  let {
    channel: t,
    guild: n,
    onSelect: o
  } = e, l = (0, O.Z)(t), c = (0, j.Z)(t), u = (0, p.l)(t), b = (0, p.P)(t), h = (0, Z.Z)(t), f = (0, C.ZP)(t), w = (0, x.Z)(t), E = (0, _.Z)(t, n), N = (0, m.Z)(t, n), T = (0, v.Z)(t, n), M = (0, y.Z)(t), A = (0, d.Z)({
    id: t.id,
    label: I.intl.string(I.t.gFHI3k)
  }), D = (0, s.Z)(t), L = (0, S.Z)(t, "list_text_channel_context_menu"), F = (0, P.Z)(t), U = (0, k.ZP)(t), B = (0, g.Mn)("ChannelContextMenuNormal");
  return (0, r.jsxs)(i.v2r, {
    navId: "channel-context",
    onClose: a.Zy,
    "aria-label": I.intl.string(I.t.Xm41aV),
    onSelect: o,
    children: [(0, r.jsxs)(i.kSQ, {
      children: [l, u]
    }, "mark-as-read-or-favorite"), (0, r.jsxs)(i.kSQ, {
      children: [E, h, c, L]
    }, "channel-actions"), (0, r.jsxs)(i.kSQ, {
      children: [f, B ? U : F]
    }, "notifications"), (0, r.jsxs)(i.kSQ, {
      children: [w, N, T, M]
    }, "admin-actions"), (0, r.jsx)(i.kSQ, {
      children: D
    }), (0, r.jsx)(i.kSQ, {
      children: b
    }), (0, r.jsx)(i.kSQ, {
      children: A
    }, "developer-actions")]
  })
}
let M = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  return (0, u.Z)() ? (0, r.jsx)(N, E({}, e)) : (0, r.jsx)(T, E({}, e))
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU])