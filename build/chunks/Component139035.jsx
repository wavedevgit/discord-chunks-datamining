/** Chunk was on 8965 **/
/** chunk id: 139035, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => N
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk108843 = require("./108843.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk916069 = require("./916069.js"),
  Chunk697229 = require("./697229.jsx"),
  Chunk212205 = require("./212205.jsx"),
  Chunk423589 = require("./423589.js"),
  Chunk411567 = require("./411567.jsx"),
  Chunk672824 = require("./672824.jsx"),
  Chunk3689 = require("./3689.jsx"),
  Chunk323597 = require("./323597.jsx"),
  Chunk852245 = require("./852245.jsx"),
  Chunk461535 = require("./461535.jsx"),
  Chunk776568 = require("./776568.jsx"),
  Chunk218035 = require("./218035.jsx"),
  Chunk775666 = require("./775666.jsx"),
  Chunk442754 = require("./442754.jsx"),
  Chunk623483 = require("./623483.jsx"),
  Chunk388032 = require("./388032.jsx");

function w(e) {
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

function E(e) {
  let {
    channel: t,
    onSelect: n
  } = e, o = (0, j.Z)(t), c = (0, h.ZP)(t), s = (0, P.Z)(t), p = (0, O.Z)(t), y = (0, f.Z)(t), g = (0, d.Z)(t), v = (0, u.Z)(t), w = (0, _.Z)(t), E = (0, a.Z)({
    id: t.id,
    label: m.intl.string(m.t["2visC6"])
  }), C = (0, b.Mn)("ChannelCategoryFavoritesMenu"), N = (0, Z.ZP)(t);
  return (0, r.jsxs)(i.v2r, {
    navId: "channel-context",
    onClose: l.Zy,
    "aria-label": m.intl.string(m.t.Xm41aV),
    onSelect: n,
    children: [(0, r.jsxs)(i.kSQ, {
      children: [o, v, g]
    }), (0, r.jsxs)(i.kSQ, {
      children: [c, C ? N : s]
    }), (0, r.jsxs)(i.kSQ, {
      children: [p, y]
    }), (0, r.jsx)(i.kSQ, {
      children: w
    }), (0, r.jsx)(i.kSQ, {
      children: E
    })]
  })
}

function C(e) {
  let {
    channel: t,
    guild: n,
    onSelect: o
  } = e, c = (0, j.Z)(t), s = (0, h.ZP)(t), u = (0, P.Z)(t), _ = (0, O.Z)(t), w = (0, f.Z)(t), E = (0, g.Z)(t), C = (0, d.Z)(t), N = (0, p.Z)(t, n), S = (0, y.Z)(t), x = (0, a.Z)({
    id: t.id,
    label: m.intl.string(m.t["2visC6"])
  }), A = (0, v.Z)(t), k = (0, b.Mn)("ChannelCategoryNormalMenu"), D = (0, Z.ZP)(t);
  return (0, r.jsxs)(i.v2r, {
    navId: "channel-context",
    onClose: l.Zy,
    "aria-label": m.intl.string(m.t.Xm41aV),
    onSelect: o,
    children: [(0, r.jsx)(i.kSQ, {
      children: c
    }, "mark-as-read"), (0, r.jsxs)(i.kSQ, {
      children: [A, _, w]
    }, "channel-actions"), (0, r.jsxs)(i.kSQ, {
      children: [s, k ? D : u]
    }, "notifications"), (0, r.jsxs)(i.kSQ, {
      children: [E, C, N, S]
    }, "admin-actions"), (0, r.jsx)(i.kSQ, {
      children: x
    }, "developer-actions")]
  })
}
let N = (0, Chunk108843.Z)(function(e) {
  return (0, s.Z)() ? (0, r.jsx)(E, w({}, e)) : (0, r.jsx)(C, w({}, e))
}, [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.CHANNEL_CATEGORY_MENU])