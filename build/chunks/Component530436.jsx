/** Chunk was on 7654 **/
/** chunk id: 530436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => g
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk434404 = require("./434404.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk444942 = require("./444942.js");

function g(e) {
  let {
    guild: t,
    error: n,
    onClose: g
  } = e, h = t.id, p = i.useCallback(() => {
    g(), a.Z.open(h, u.pNK.INVITES)
  }, [h, g]), v = i.useCallback(e => (0, l.jsx)(s.P3F, {
    className: c.errorLink,
    onClick: p,
    children: (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), [p]), I = i.useCallback(e => (0, l.jsx)(s.Anchor, {
    href: u.EYA.INVITES_HELP,
    target: "_blank",
    children: (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), []), m = n instanceof r.Z ? n.code !== u.evJ.TOO_MANY_INVITES ? n.getAnyErrorMessage() : o.Z.can(u.Plq.MANAGE_GUILD, t) ? d.intl.format(d.t["H/RUY1"], {
    inviteListHook: v,
    inviteHelpHook: I
  }) : d.intl.string(d.t["/FxH6G"]) : "message" in n ? n.message : d.intl.string(d.t.eAn6z2);
  return (0, l.jsx)(s.Text, {
    className: c.errorMessage,
    variant: "text-xs/normal",
    color: "text-feedback-critical",
    children: m
  })
}