/** Chunk was on 25421 **/
/** chunk id: 354741, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => y
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
  Chunk895563 = require("./895563.jsx"),
  Chunk489618 = require("./489618.js"),
  Chunk769409 = require("./769409.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk858687 = require("./858687.jsx"),
  Chunk461535 = require("./461535.jsx"),
  Chunk776568 = require("./776568.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let y = (0, Chunk108843.Z)((0, Chunk883385.Z)(function(e) {
  let {
    channel: t,
    selected: a,
    onSelect: o
  } = e, p = t.isOwner(v.default.getId()), y = (0, b.Z)(t), E = (0, g.ZP)(t), {
    rearrangeContextMenu: C
  } = f.Z.useExperiment({
    location: c.Z.GROUP_DM_CONTEXT_MENU
  }), m = (0, O.Z)(t, a), Z = (0, u.Z)({
    id: t.id,
    label: _.intl.string(_.t.gFHI3t)
  }), j = (0, d.Z)(t), A = (0, s.l)(t), N = (0, s.P)(t), P = p ? (0, i.jsx)(r.sNh, {
    id: "instant-invites",
    label: _.intl.string(_.t.ngRFjY),
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
    "aria-label": _.intl.string(_.t.Xm41aW),
    onClose: l.Zy,
    onSelect: o,
    children: [(0, i.jsxs)(r.kSQ, {
      children: [y, A]
    }), (0, i.jsxs)(r.kSQ, {
      children: [!C && P, (0, i.jsx)(r.sNh, {
        id: "edit-gdm",
        label: _.intl.string(_.t["5Q9+/P"]),
        action: () => (0, h.B)(t.id, c.Z.GROUP_DM_CONTEXT_MENU),
        subtext: C ? _.intl.string(_.t.pPwcQU) : true
      }), C && P]
    }), (0, i.jsx)(r.kSQ, {
      children: j
    }), (0, i.jsx)(r.kSQ, {
      children: !C && E
    }), (0, i.jsxs)(r.kSQ, {
      children: [C && E, N, m]
    }), (0, i.jsx)(r.kSQ, {
      children: Z
    })]
  })
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GROUP_DM_MENU])