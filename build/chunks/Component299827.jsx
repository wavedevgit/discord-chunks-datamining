/** Chunk was on 43600 **/
/** chunk id: 299827, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  X: () => g
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk181658 = require("./181658.js"),
  Chunk997509 = require("./997509.js"),
  Chunk576705 = require("./576705.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk912579 = require("./912579.js");

function g(e) {
  let {
    guild: t,
    error: n,
    onClose: g
  } = e, h = t.id, p = i.useCallback(() => {
    g(), a.A.open(h, u.BEX.INVITES)
  }, [h, g]), v = i.useCallback(e => (0, l.jsx)(s.DUT, {
    className: c.P5,
    onClick: p,
    children: (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), [p]), A = i.useCallback(e => (0, l.jsx)(s.MzZ, {
    href: u.X7G.INVITES_HELP,
    target: "_blank",
    children: (0, l.jsx)(s.Text, {
      variant: "text-xs/normal",
      color: "text-link",
      tag: "span",
      children: e
    })
  }), []), I = n instanceof r.A ? n.code !== u.t02.TOO_MANY_INVITES ? n.getAnyErrorMessage() : o.A.can(u.xBc.MANAGE_GUILD, t) ? d.intl.format(d.t["H/RUY1"], {
    inviteListHook: v,
    inviteHelpHook: A
  }) : d.intl.string(d.t["/FxH6G"]) : "message" in n ? n.message : d.intl.string(d.t.eAn6z2);
  return (0, l.jsx)(s.Text, {
    className: c.gJ,
    variant: "text-xs/normal",
    color: "text-feedback-critical",
    children: I
  })
}