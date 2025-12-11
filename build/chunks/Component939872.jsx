/** Chunk was on web.js **/
/** chunk id: 939872, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  m: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js"),
  Chunk17894 = require("./17894.js"),
  Chunk430824 = require("./430824.js"),
  Chunk313550 = require("./313550.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk389146 = require("./389146.js");
let f = e => {
  let {
    onClose: t,
    listing: n,
    guildId: f
  } = e, p = (0, i.e7)([l.Z], () => l.Z.getGuild(f), [f]), _ = (0, c.Z)({
    listing: n,
    guildId: f
  });
  return (0, r.jsxs)("div", {
    className: d.confirmationContainer,
    children: [(0, r.jsx)(o.Heading, {
      className: d.confirmationHeader,
      variant: "heading-lg/extrabold",
      children: u.intl.format(u.t.I5dYFs, {
        serverName: null == p ? true : p.name,
        tierName: n.name
      })
    }), !_.isEmpty() && (0, r.jsx)(o.Text, {
      className: d.confirmationSubtitle,
      variant: "text-sm/normal",
      color: "text-default",
      children: u.intl.format(u.t.TnhFHv, {
        benefits: _.asString()
      })
    }), (0, r.jsxs)("div", {
      className: d.actions,
      children: [(0, r.jsx)(a.zxk, {
        variant: "primary",
        text: u.intl.string(u.t.WWvswD),
        fullWidth: true,
        onClick: () => (0, s.Z)("role_sub_mweb_success_modal")
      }), (0, r.jsx)(a.zxk, {
        variant: "secondary",
        text: u.intl.string(u.t.y84Dhr),
        fullWidth: true,
        onClick: () => t(true)
      })]
    })]
  })
}