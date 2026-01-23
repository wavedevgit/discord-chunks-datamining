/** Chunk was on 60200 **/
/** chunk id: 4027, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => A
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk847767 = require("./847767.jsx"),
  Chunk358367 = require("./358367.jsx"),
  Chunk468389 = require("./468389.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk133238 = require("./133238.jsx"),
  Chunk795144 = require("./795144.jsx"),
  Chunk73028 = require("./73028.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk605691 = require("./605691.jsx"),
  Chunk848977 = require("./848977.jsx"),
  Chunk995102 = require("./995102.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let A = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  let {
    channel: t,
    selected: a,
    onSelect: o
  } = e, h = t.isOwner(O.default.getId()), A = (0, y.A)(t), m = (0, g.Ay)(t), v = (0, p.A)(t, a), P = (0, u.A)({
    id: t.id,
    label: j.intl.string(j.t.gFHI3k)
  }), w = (0, c.A)(t), _ = (0, d.m)(t), D = (0, d.y)(t), x = (0, b.A)(t), E = h ? (0, r.jsx)(i.Drp, {
    id: "instant-invites",
    label: j.intl.string(j.t.ngRFjZ),
    action: () => (0, i.mMO)(async () => {
      let {
        default: e
      } = await n.e("48574").then(n.bind(n, 830541));
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
  return null == t || t.isManaged() ? null : (0, r.jsxs)(i.W1t, {
    "data-menu-mixed": true,
    navId: "gdm-context",
    "aria-label": j.intl.string(j.t.Xm41aV),
    onClose: l.Z_,
    onSelect: o,
    children: [(0, r.jsxs)(i.rXV, {
      children: [A, _, x]
    }), (0, r.jsxs)(i.rXV, {
      children: [E, (0, r.jsx)(i.Drp, {
        id: "edit-gdm",
        label: j.intl.string(j.t["5Q9+/L"]),
        action: () => (0, f.U)(t.id, s.A.GROUP_DM_CONTEXT_MENU)
      })]
    }), (0, r.jsx)(i.rXV, {
      children: w
    }), (0, r.jsx)(i.rXV, {
      children: m
    }), (0, r.jsxs)(i.rXV, {
      children: [D, v]
    }), (0, r.jsx)(i.rXV, {
      children: P
    })]
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.GROUP_DM_MENU])