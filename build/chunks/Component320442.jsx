/** Chunk was on 77927 **/
/** chunk id: 320442, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk847767 = require("./847767.jsx"),
  Chunk358367 = require("./358367.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk605691 = require("./605691.jsx"),
  Chunk848977 = require("./848977.jsx"),
  Chunk995102 = require("./995102.jsx"),
  Chunk50268 = require("./50268.jsx"),
  Chunk73028 = require("./73028.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk914853 = require("./914853.js"),
  Chunk708653 = require("./708653.jsx"),
  Chunk297460 = require("./297460.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let h = (0, Chunk358367.A)((0, Chunk847767.A)(function(e) {
  var t, a;
  let {
    channel: u,
    selected: E,
    onSelect: h,
    widgetType: p
  } = e, j = u.isOwner(b.default.getId()), S = (0, v.A)({
    kind: "CHANNEL",
    channel: u,
    guildId: null != (t = null == (a = u.getGuildId) ? true : a.call(u)) ? t : null
  }, p), I = (0, d.A)(u), N = (0, s.Ay)(u), {
    toggleFavoriteItem: m
  } = (0, g.Ay)(y.x.MESSAGES, u, p), _ = (0, c.A)(u, E), D = (0, f.A)({
    id: u.id,
    label: O.intl.string(O.t.gFHI3k)
  }), M = j ? (0, r.jsx)(i.Drp, {
    id: "instant-invites",
    label: O.intl.string(O.t.ngRFjZ),
    action: () => (0, i.mMO)(async () => {
      let {
        default: e
      } = await n.e("48574").then(n.bind(n, 830541));
      return t => (0, r.jsx)(e, function(e) {
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
        channelId: u.id
      }, t))
    })
  }) : null;
  return null == u || u.isManaged() ? null : (0, r.jsxs)(i.W1t, {
    navId: "overlay-gdm-context",
    "aria-label": O.intl.string(O.t.Xm41aV),
    onClose: l.Z_,
    onSelect: h,
    children: [(0, r.jsxs)(i.rXV, {
      children: [I, S, m]
    }), (0, r.jsxs)(i.rXV, {
      children: [M, (0, r.jsx)(i.Drp, {
        id: "edit-gdm",
        label: O.intl.string(O.t["5Q9+/L"]),
        action: () => (0, A.U)(u.id, o.A.GROUP_DM_CONTEXT_MENU)
      })]
    }), (0, r.jsx)(i.rXV, {
      children: N
    }), (0, r.jsx)(i.rXV, {
      children: _
    }), (0, r.jsx)(i.rXV, {
      children: D
    })]
  })
}, {
  object: Chunk652215.ZSU.CONTEXT_MENU
}), [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.OVERLAY, Chunk793574.A.GROUP_DM_MENU])