/** Chunk was on 25421 **/
/** chunk id: 354741, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => v
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
  Chunk489618 = require("./489618.js"),
  Chunk769409 = require("./769409.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk858687 = require("./858687.jsx"),
  Chunk461535 = require("./461535.jsx"),
  Chunk776568 = require("./776568.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let v = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    channel: t,
    selected: a,
    onSelect: o
  } = e, j = t.isOwner(h.default.getId()), v = (0, y.Z)(t), m = (0, g.ZP)(t), {
    rearrangeContextMenu: Z
  } = b.Z.useExperiment({
    location: s.Z.GROUP_DM_CONTEXT_MENU
  }), w = (0, p.Z)(t, a), _ = (0, u.Z)({
    id: t.id,
    label: P.intl.string(P.t.gFHI3k)
  }), E = (0, c.Z)(t), S = (0, d.l)(t), x = (0, d.P)(t), k = (0, f.Z)(t), C = j ? (0, r.jsx)(i.sNh, {
    id: "instant-invites",
    label: P.intl.string(P.t.ngRFjZ),
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
    "aria-label": P.intl.string(P.t.Xm41aV),
    onClose: l.Zy,
    onSelect: o,
    children: [(0, r.jsxs)(i.kSQ, {
      children: [v, S, k]
    }), (0, r.jsxs)(i.kSQ, {
      children: [!Z && C, (0, r.jsx)(i.sNh, {
        id: "edit-gdm",
        label: P.intl.string(P.t["5Q9+/L"]),
        action: () => (0, O.B)(t.id, s.Z.GROUP_DM_CONTEXT_MENU),
        subtext: Z ? P.intl.string(P.t.pPwcQa) : true
      }), Z && C]
    }), (0, r.jsx)(i.kSQ, {
      children: E
    }), (0, r.jsx)(i.kSQ, {
      children: !Z && m
    }), (0, r.jsxs)(i.kSQ, {
      children: [Z && m, x, w]
    }), (0, r.jsx)(i.kSQ, {
      children: _
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GROUP_DM_MENU])