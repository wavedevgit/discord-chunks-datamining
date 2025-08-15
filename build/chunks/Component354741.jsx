/** Chunk was on 81239 **/
/** chunk id: 354741, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => v
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.jsx"),
  Chunk108843 = require("./108843.jsx"),
  Chunk947440 = require("./947440.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk658138 = require("./658138.jsx"),
  Chunk299206 = require("./299206.jsx"),
  Chunk895563 = require("./895563.jsx"),
  Chunk489618 = require("./489618.js"),
  Chunk769409 = require("./769409.jsx"),
  Chunk122074 = require("./122074.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk858687 = require("./858687.jsx"),
  Chunk461535 = require("./461535.jsx"),
  Chunk776568 = require("./776568.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let v = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    channel: t,
    selected: l,
    onSelect: o
  } = e, v = t.isOwner(g.default.getId()), x = (0, O.Z)(t), Z = (0, y.ZP)(t), P = (0, p.Uf)(_.aIL, t.id, "top"), {
    rearrangeContextMenu: C
  } = f.Z.useExperiment({
    location: c.Z.GROUP_DM_CONTEXT_MENU
  }), w = (0, j.Z)(t, l), S = (0, u.Z)({
    id: t.id,
    label: m.intl.string(m.t.gFHI3t)
  }), k = (0, d.Z)(t), E = (0, b.l)(t), N = (0, b.P)(t), M = (0, s.D)(t), T = v ? (0, r.jsx)(i.sNh, {
    id: "instant-invites",
    label: m.intl.string(m.t.ngRFjY),
    action: () => (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("97573").then(n.bind(n, 892382));
      return n => (0, r.jsx)(e, function(e) {
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
      }({
        channelId: t.id
      }, n))
    })
  }) : null;
  return null == t || t.isManaged() ? null : (0, r.jsxs)(i.v2r, {
    navId: "gdm-context",
    "aria-label": m.intl.string(m.t.Xm41aW),
    onClose: a.Zy,
    onSelect: o,
    children: [(0, r.jsxs)(i.kSQ, {
      children: [x, P, E]
    }), (0, r.jsxs)(i.kSQ, {
      children: [!C && T, (0, r.jsx)(i.sNh, {
        id: "edit-gdm",
        label: m.intl.string(m.t["5Q9+/P"]),
        action: () => (0, h.B)(t.id, c.Z.GROUP_DM_CONTEXT_MENU),
        subtext: C ? m.intl.string(m.t.pPwcQU) : true
      }), M, C && T]
    }), (0, r.jsx)(i.kSQ, {
      children: k
    }), (0, r.jsx)(i.kSQ, {
      children: !C && Z
    }), (0, r.jsxs)(i.kSQ, {
      children: [C && Z, N, w]
    }), (0, r.jsx)(i.kSQ, {
      children: S
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GROUP_DM_MENU])