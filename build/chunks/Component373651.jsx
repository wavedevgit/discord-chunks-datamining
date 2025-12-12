/** Chunk was on 82697 **/
/** chunk id: 373651, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => D
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

function T(e) {
  let {
    channel: t,
    onSelect: n
  } = e, a = (0, x.Z)(t), l = (0, j.Z)(t), c = (0, f.l)(t), d = (0, f.P)(t), g = (0, b.Z)(t), O = (0, p.Z)(t), y = (0, h.Z)(t), _ = (0, P.ZP)(t), k = (0, I.Z)(t), w = (0, v.Z)(t), E = (0, u.Z)({
    id: t.id,
    label: Z.intl.string(Z.t.gFHI3k)
  }), T = (0, s.Z)(t), N = (0, S.ZP)(t), D = (0, m.Mn)("ChannelContextFavoritesMenu"), A = (0, C.Z)(t, "list_favorites_text_channel_context_menu");
  return (0, r.jsxs)(i.v2r, {
    navId: "channel-context",
    onClose: o.Zy,
    "aria-label": Z.intl.string(Z.t.Xm41aV),
    onSelect: n,
    children: [(0, r.jsx)(i.kSQ, {
      children: a
    }), (0, r.jsxs)(i.kSQ, {
      children: [O, y, g, c]
    }), (0, r.jsxs)(i.kSQ, {
      children: [_, D ? N : k]
    }), (0, r.jsx)(i.kSQ, {
      children: w
    }), (0, r.jsx)(i.kSQ, {
      children: T
    }), (0, r.jsx)(i.kSQ, {
      children: d
    }), (0, r.jsxs)(i.kSQ, {
      children: [l, A]
    }), (0, r.jsx)(i.kSQ, {
      children: E
    })]
  })
}

function N(e) {
  let {
    channel: t,
    guild: n,
    onSelect: a
  } = e, l = (0, x.Z)(t), c = (0, j.Z)(t), d = (0, f.l)(t), b = (0, f.P)(t), p = (0, k.Z)(t), h = (0, P.ZP)(t), w = (0, v.Z)(t), E = (0, _.Z)(t, n), T = (0, g.Z)(t, n), N = (0, O.Z)(t, n), D = (0, y.Z)(t), A = (0, u.Z)({
    id: t.id,
    label: Z.intl.string(Z.t.gFHI3k)
  }), L = (0, s.Z)(t), M = (0, C.Z)(t, "list_text_channel_context_menu"), U = (0, I.Z)(t), F = (0, S.ZP)(t), G = (0, m.Mn)("ChannelContextMenuNormal");
  return (0, r.jsxs)(i.v2r, {
    navId: "channel-context",
    onClose: o.Zy,
    "aria-label": Z.intl.string(Z.t.Xm41aV),
    onSelect: a,
    children: [(0, r.jsxs)(i.kSQ, {
      children: [l, d]
    }, "mark-as-read-or-favorite"), (0, r.jsxs)(i.kSQ, {
      children: [E, p, c, M]
    }, "channel-actions"), (0, r.jsxs)(i.kSQ, {
      children: [h, G ? F : U]
    }, "notifications"), (0, r.jsxs)(i.kSQ, {
      children: [w, T, N, D]
    }, "admin-actions"), (0, r.jsx)(i.kSQ, {
      children: L
    }), (0, r.jsx)(i.kSQ, {
      children: b
    }), (0, r.jsx)(i.kSQ, {
      children: A
    }, "developer-actions")]
  })
}
let D = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  return (0, d.Z)() ? (0, r.jsx)(T, E({}, e)) : (0, r.jsx)(N, E({}, e))
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU])