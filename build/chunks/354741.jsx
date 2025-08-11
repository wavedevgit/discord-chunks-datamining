/** Chunk was on 55370 **/
/** chunk id: 354741, original params: e,t,n (module,exports,require) **/
require.r(exports), require.d(exports, {
  default: () => E
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk883385 = require("./883385.js"),
  Chunk108843 = require("./108843.jsx"),
  Chunk947440 = require("./947440.js"),
  Chunk100527 = require("./100527.js"),
  Chunk658138 = require("./658138.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk895563 = require("./895563.js"),
  Chunk489618 = require("./489618.js"),
  Chunk769409 = require("./769409.js"),
  Chunk122074 = require("./122074.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk858687 = require("./858687.js"),
  Chunk461535 = require("./461535.js"),
  Chunk776568 = require("./776568.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js");
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
  }), Z = (0, c.Z)(t), S = (0, f.l)(t), U = (0, f.P)(t), P = (0, u.D)(t), j = E ? <r.sNh id={"instant-invites"} label={A.intl.string(A.t.ngRFjY)} action={() => (0, r.ZDy)(async () => {
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
    })} /> : null;
  return null == t || t.isManaged() ? null : <r.v2r navId={"gdm-context"} aria-label={A.intl.string(A.t.Xm41aW)} onClose={a.Zy} onSelect={l}>{<r.kSQ>{y}{N}{S}</r.kSQ>}{<r.kSQ>{!T && j}{<r.sNh id={"edit-gdm"} label={A.intl.string(A.t["5Q9+/P"])} action={() => (0, b.B)(t.id, s.Z.GROUP_DM_CONTEXT_MENU)} subtext={T ? A.intl.string(A.t.pPwcQU) : true} />}{P}{T && j}</r.kSQ>}{<r.kSQ>{Z}</r.kSQ>}{<r.kSQ>{!T && m}</r.kSQ>}{<r.kSQ>{T && m}{U}{I}</r.kSQ>}{<r.kSQ>{R}</r.kSQ>}</r.v2r>
}, {
  object: Chunk981631.qAy.CONTEXT_MENU
}), [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.GROUP_DM_MENU])