/** Chunk was on 86915 **/
/** chunk id: 530436, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  W: () => h
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

function h(e) {
  let {
    guild: t,
    error: n,
    onClose: h
  } = e, g = t.id, m = l.useCallback(() => {
    h(), a.Z.open(g, c.pNK.INVITES)
  }, [g, h]), p = l.useCallback(e => (0, i.jsx)(r.P3F, {
    className: u.errorLink,
    onClick: m,
    children: (0, i.jsx)(r.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), [m]), f = l.useCallback(e => (0, i.jsx)(r.eee, {
    href: c.EYA.INVITES_HELP,
    target: "_blank",
    children: (0, i.jsx)(r.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), []), x = n instanceof s.Z ? n.code !== c.evJ.TOO_MANY_INVITES ? n.getAnyErrorMessage() : o.Z.can(c.Plq.MANAGE_GUILD, t) ? d.intl.format(d.t["H/RUY2"], {
    inviteListHook: p,
    inviteHelpHook: f
  }) : d.intl.string(d.t["/FxH6O"]) : "message" in n ? n.message : d.intl.string(d.t.eAn6z8);
  return (0, i.jsx)(r.Text, {
    className: u.errorMessage,
    variant: "text-xs/normal",
    color: "text-danger",
    children: x
  })
}