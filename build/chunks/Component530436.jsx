/** Chunk was on 7654 **/
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
  Chunk869306 = require("./869306.js");

function g(e) {
  let {
    guild: t,
    error: n,
    onClose: g
  } = e, h = t.id, m = i.useCallback(() => {
    g(), s.Z.open(h, u.pNK.INVITES)
  }, [h, g]), p = i.useCallback(e => (0, l.jsx)(r.P3F, {
    className: c.errorLink,
    onClick: m,
    children: (0, l.jsx)(r.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), [m]), v = i.useCallback(e => (0, l.jsx)(r.eee, {
    href: u.EYA.INVITES_HELP,
    target: "_blank",
    children: (0, l.jsx)(r.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), []), x = n instanceof a.Z ? n.code !== u.evJ.TOO_MANY_INVITES ? n.getAnyErrorMessage() : o.Z.can(u.Plq.MANAGE_GUILD, t) ? d.intl.format(d.t["H/RUY2"], {
    inviteListHook: p,
    inviteHelpHook: v
  }) : d.intl.string(d.t["/FxH6O"]) : "message" in n ? n.message : d.intl.string(d.t.eAn6z8);
  return (0, l.jsx)(r.Text, {
    className: c.errorMessage,
    variant: "text-xs/normal",
    color: "text-danger",
    children: x
  })
}