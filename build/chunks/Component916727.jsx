/** Chunk was on web.js **/
/** chunk id: 916727, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  v: () => f
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js"),
  Chunk701273 = require("./701273.js"),
  Chunk71393 = require("./71393.js"),
  Chunk602461 = require("./602461.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk432959 = require("./432959.js");
let f = e => {
  let {
    onClose: t,
    listing: n,
    guildId: f
  } = e, p = (0, i.bG)([l.A], () => l.A.getGuild(f), [f]), _ = (0, c.A)({
    listing: n,
    guildId: f
  });
  return (0, r.jsxs)("div", {
    className: d.RP,
    children: [(0, r.jsx)(s.Heading, {
      className: d.RS,
      variant: "heading-lg/extrabold",
      children: u.intl.format(u.t.I5dYFs, {
        serverName: null == p ? true : p.name,
        tierName: n.name
      })
    }), !_.isEmpty() && (0, r.jsx)(s.Text, {
      className: d.sT,
      variant: "text-sm/normal",
      color: "text-default",
      children: u.intl.format(u.t.TnhFHv, {
        benefits: _.asString()
      })
    }), (0, r.jsxs)("div", {
      className: d.o1,
      children: [(0, r.jsx)(a.$nd, {
        variant: "primary",
        text: u.intl.string(u.t.WWvswD),
        fullWidth: true,
        onClick: () => (0, o.A)("role_sub_mweb_success_modal")
      }), (0, r.jsx)(a.$nd, {
        variant: "secondary",
        text: u.intl.string(u.t.y84Dhr),
        fullWidth: true,
        onClick: () => t(true)
      })]
    })]
  })
}