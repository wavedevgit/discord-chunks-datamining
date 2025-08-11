/** Chunk was on 55370 **/
/** chunk id: 354741, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => E
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
let E = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    channel: t,
    selected: o,
    onSelect: l
  } = e, E = t.isOwner(_.default.getId()), y = (0, O.Z)(t), m = (0, C.ZP)(t), N = (0, g.Uf)(h.aIL, t.id, "top"), {
    rearrangeContextMenu: T
  } = p.Z.useExperiment({
    location: s.Z.GROUP_DM_CONTEXT_MENU
  }), I = (0, v.Z)(t, o), R = (0, d.Z)({
    id: t.id,
    label: A.intl.string(A.t.gFHI3t)
  }), Z = (0, c.Z)(t), S = (0, f.l)(t), U = (0, f.P)(t), P = (0, u.D)(t), j = E ? (0, i.jsx)(r.sNh, {
    id: "instant-invites",
    label: A.intl.string(A.t.ngRFjY),
    action: () => (0, r.ZDy)(async () => {
      let {
        default: e
      } = await n.e("97573").then(n.bind(n, 892382));
      return n => (0, i.jsx)(e, function(e) {
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
      }({
        channelId: t.id
      }, n))
    })
  }) : null;
  return null == t || t.isManaged() ? null : (0, i.jsxs)(r.v2r, {
    navId: "gdm-context",
    "aria-label": A.intl.string(A.t.Xm41aW),
    onClose: a.Zy,
    onSelect: l,
    children: [(0, i.jsxs)(r.kSQ, {
      children: [y, N, S]
    }), (0, i.jsxs)(r.kSQ, {
      children: [!T && j, (0, i.jsx)(r.sNh, {
        id: "edit-gdm",
        label: A.intl.string(A.t["5Q9+/P"]),
        action: () => (0, b.B)(t.id, s.Z.GROUP_DM_CONTEXT_MENU),
        subtext: T ? A.intl.string(A.t.pPwcQU) : true
      }), P, T && j]
    }), (0, i.jsx)(r.kSQ, {
      children: Z
    }), (0, i.jsx)(r.kSQ, {
      children: !T && m
    }), (0, i.jsxs)(r.kSQ, {
      children: [T && m, U, I]
    }), (0, i.jsx)(r.kSQ, {
      children: R
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GROUP_DM_MENU])