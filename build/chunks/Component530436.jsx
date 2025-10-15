/** Chunk was on 74318 **/
/** chunk id: 530436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => g
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk434404 = require("./434404.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk451964 = require("./451964.js");

function g(e) {
  let {
    guild: t,
    error: n,
    onClose: g
  } = e, m = t.id, I = i.useCallback(() => {
    g(), s.Z.open(m, u.pNK.INVITES)
  }, [m, g]), p = i.useCallback(e => (0, l.jsx)(a.P3F, {
    className: d.errorLink,
    onClick: I,
    children: (0, l.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), [I]), f = i.useCallback(e => (0, l.jsx)(a.Anchor, {
    href: u.EYA.INVITES_HELP,
    target: "_blank",
    children: (0, l.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), []), v = n instanceof r.Z ? n.code !== u.evJ.TOO_MANY_INVITES ? n.getAnyErrorMessage() : o.Z.can(u.Plq.MANAGE_GUILD, t) ? c.intl.format(c.t["H/RUY1"], {
    inviteListHook: p,
    inviteHelpHook: f
  }) : c.intl.string(c.t["/FxH6G"]) : "message" in n ? n.message : c.intl.string(c.t.eAn6z2);
  return (0, l.jsx)(a.Text, {
    className: d.errorMessage,
    variant: "text-xs/normal",
    color: "text-danger",
    children: v
  })
}