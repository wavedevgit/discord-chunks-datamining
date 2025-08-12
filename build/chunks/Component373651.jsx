/** Chunk was on 71568 **/
/** chunk id: 373651, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => Q
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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

function y(e) {
  let {
    channel: n,
    onSelect: t
  } = e, a = (0, Z.Z)(n), c = (0, C.Z)(n), _ = (0, f.l)(n), s = (0, f.P)(n), h = (0, u.Z)(n), g = (0, m.Z)(n), j = (0, b.Z)(n), I = (0, P.ZP)(n), T = (0, k.Z)(n), B = (0, x.Z)(n), v = (0, l.Z)({
    id: n.id,
    label: N.intl.string(N.t.gFHI3t)
  }), E = (0, d.Z)(n), y = (0, S.ZP)(n), w = (0, p.Mn)("ChannelContextFavoritesMenu");
  return (0, i.jsxs)(o.v2r, {
    navId: "channel-context",
    onClose: r.Zy,
    "aria-label": N.intl.string(N.t.Xm41aW),
    onSelect: t,
    children: [(0, i.jsx)(o.kSQ, {
      children: a
    }), (0, i.jsxs)(o.kSQ, {
      children: [g, j, h, _]
    }), (0, i.jsxs)(o.kSQ, {
      children: [I, w ? y : T]
    }), (0, i.jsx)(o.kSQ, {
      children: B
    }), (0, i.jsx)(o.kSQ, {
      children: E
    }), (0, i.jsx)(o.kSQ, {
      children: s
    }), (0, i.jsx)(o.kSQ, {
      children: c
    }), (0, i.jsx)(o.kSQ, {
      children: v
    })]
  })
}

function w(e) {
  let {
    channel: n,
    guild: t,
    onSelect: a
  } = e, c = (0, Z.Z)(n), _ = (0, C.Z)(n), s = (0, f.l)(n), u = (0, f.P)(n), m = (0, B.Z)(n), b = (0, P.ZP)(n), v = (0, x.Z)(n), E = (0, I.Z)(n, t), y = (0, h.Z)(n, t), w = (0, g.Z)(n, t), Q = (0, j.Z)(n), O = (0, l.Z)({
    id: n.id,
    label: N.intl.string(N.t.gFHI3t)
  }), H = (0, d.Z)(n), L = (0, T.Z)(n, "list_text_channel_context_menu"), M = (0, k.Z)(n), A = (0, S.ZP)(n), D = (0, p.Mn)("ChannelContextMenuNormal");
  return (0, i.jsxs)(o.v2r, {
    navId: "channel-context",
    onClose: r.Zy,
    "aria-label": N.intl.string(N.t.Xm41aW),
    onSelect: a,
    children: [(0, i.jsxs)(o.kSQ, {
      children: [c, s]
    }, "mark-as-read-or-favorite"), (0, i.jsxs)(o.kSQ, {
      children: [E, m, _, L]
    }, "channel-actions"), (0, i.jsxs)(o.kSQ, {
      children: [b, D ? A : M]
    }, "notifications"), (0, i.jsxs)(o.kSQ, {
      children: [v, y, w, Q]
    }, "admin-actions"), (0, i.jsx)(o.kSQ, {
      children: H
    }), (0, i.jsx)(o.kSQ, {
      children: u
    }), (0, i.jsx)(o.kSQ, {
      children: O
    }, "developer-actions")]
  })
}
let Q = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  return (0, s.Z)() ? (0, i.jsx)(y, E({}, e)) : (0, i.jsx)(w, E({}, e))
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU])