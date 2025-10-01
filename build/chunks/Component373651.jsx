/** Chunk was on 57955 **/
/** chunk id: 373651, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => M
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
  } = e, a = (0, x.Z)(t), l = (0, _.Z)(t), c = (0, b.l)(t), d = (0, b.P)(t), g = (0, p.Z)(t), y = (0, f.Z)(t), j = (0, h.Z)(t), O = (0, P.ZP)(t), k = (0, w.Z)(t), S = (0, v.Z)(t), Z = (0, u.Z)({
    id: t.id,
    label: I.intl.string(I.t.gFHI3t)
  }), E = (0, s.Z)(t), T = (0, C.ZP)(t), N = (0, m.Mn)("ChannelContextFavoritesMenu");
  return (0, r.jsxs)(i.v2r, {
    navId: "channel-context",
    onClose: o.Zy,
    "aria-label": I.intl.string(I.t.Xm41aW),
    onSelect: n,
    children: [(0, r.jsx)(i.kSQ, {
      children: a
    }), (0, r.jsxs)(i.kSQ, {
      children: [y, j, g, c]
    }), (0, r.jsxs)(i.kSQ, {
      children: [O, N ? T : k]
    }), (0, r.jsx)(i.kSQ, {
      children: S
    }), (0, r.jsx)(i.kSQ, {
      children: E
    }), (0, r.jsx)(i.kSQ, {
      children: d
    }), (0, r.jsx)(i.kSQ, {
      children: l
    }), (0, r.jsx)(i.kSQ, {
      children: Z
    })]
  })
}

function N(e) {
  let {
    channel: t,
    guild: n,
    onSelect: a
  } = e, l = (0, x.Z)(t), c = (0, _.Z)(t), d = (0, b.l)(t), p = (0, b.P)(t), f = (0, S.Z)(t), h = (0, P.ZP)(t), Z = (0, v.Z)(t), E = (0, O.Z)(t, n), T = (0, g.Z)(t, n), N = (0, y.Z)(t, n), M = (0, j.Z)(t), D = (0, u.Z)({
    id: t.id,
    label: I.intl.string(I.t.gFHI3t)
  }), A = (0, s.Z)(t), L = (0, k.Z)(t, "list_text_channel_context_menu"), U = (0, w.Z)(t), F = (0, C.ZP)(t), B = (0, m.Mn)("ChannelContextMenuNormal");
  return (0, r.jsxs)(i.v2r, {
    navId: "channel-context",
    onClose: o.Zy,
    "aria-label": I.intl.string(I.t.Xm41aW),
    onSelect: a,
    children: [(0, r.jsxs)(i.kSQ, {
      children: [l, d]
    }, "mark-as-read-or-favorite"), (0, r.jsxs)(i.kSQ, {
      children: [E, f, c, L]
    }, "channel-actions"), (0, r.jsxs)(i.kSQ, {
      children: [h, B ? F : U]
    }, "notifications"), (0, r.jsxs)(i.kSQ, {
      children: [Z, T, N, M]
    }, "admin-actions"), (0, r.jsx)(i.kSQ, {
      children: A
    }), (0, r.jsx)(i.kSQ, {
      children: p
    }), (0, r.jsx)(i.kSQ, {
      children: D
    }, "developer-actions")]
  })
}
let M = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  return (0, d.Z)() ? (0, r.jsx)(T, E({}, e)) : (0, r.jsx)(N, E({}, e))
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU])