/** Chunk was on 25421 **/
/** chunk id: 354741, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => P
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
  Chunk895563 = require("./895563.jsx"),
  Chunk212205 = require("./212205.jsx"),
  Chunk769409 = require("./769409.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk858687 = require("./858687.jsx"),
  Chunk461535 = require("./461535.jsx"),
  Chunk776568 = require("./776568.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let P = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    channel: t,
    selected: a,
    onSelect: o
  } = e, p = t.isOwner(O.default.getId()), P = (0, y.Z)(t), v = (0, g.ZP)(t), m = (0, h.Z)(t, a), Z = (0, u.Z)({
    id: t.id,
    label: j.intl.string(j.t.gFHI3k)
  }), w = (0, c.Z)(t), _ = (0, d.l)(t), S = (0, d.P)(t), E = (0, f.Z)(t), k = p ? (0, r.jsx)(i.sNh, {
    id: "instant-invites",
    label: j.intl.string(j.t.ngRFjZ),
    action: () => (0, i.ZDy)(async () => {
      let {
        default: e
      } = await n.e("72071").then(n.bind(n, 472945));
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
    "aria-label": j.intl.string(j.t.Xm41aV),
    onClose: l.Zy,
    onSelect: o,
    children: [(0, r.jsxs)(i.kSQ, {
      children: [P, _, E]
    }), (0, r.jsxs)(i.kSQ, {
      children: [k, (0, r.jsx)(i.sNh, {
        id: "edit-gdm",
        label: j.intl.string(j.t["5Q9+/L"]),
        action: () => (0, b.B)(t.id, s.Z.GROUP_DM_CONTEXT_MENU)
      })]
    }), (0, r.jsx)(i.kSQ, {
      children: w
    }), (0, r.jsx)(i.kSQ, {
      children: v
    }), (0, r.jsxs)(i.kSQ, {
      children: [S, m]
    }), (0, r.jsx)(i.kSQ, {
      children: Z
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GROUP_DM_MENU])