/** Chunk was on 92252 **/
/** chunk id: 530436, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  W: () => b
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

function b(e) {
  let {
    guild: n,
    error: t,
    onClose: b
  } = e, u = n.id, g = i.useCallback(() => {
    b(), l.Z.open(u, c.pNK.INVITES)
  }, [u, b]), h = i.useCallback(e => (0, o.jsx)(a.P3F, {
    className: s.errorLink,
    onClick: g,
    children: (0, o.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), [g]), x = i.useCallback(e => (0, o.jsx)(a.eee, {
    href: c.EYA.INVITES_HELP,
    target: "_blank",
    children: (0, o.jsx)(a.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), []), m = t instanceof r.Z ? t.code !== c.evJ.TOO_MANY_INVITES ? t.getAnyErrorMessage() : _.Z.can(c.Plq.MANAGE_GUILD, n) ? d.intl.format(d.t["H/RUY2"], {
    inviteListHook: h,
    inviteHelpHook: x
  }) : d.intl.string(d.t["/FxH6O"]) : "message" in t ? t.message : d.intl.string(d.t.eAn6z8);
  return (0, o.jsx)(a.Text, {
    className: s.errorMessage,
    variant: "text-xs/normal",
    color: "text-danger",
    children: m
  })
}