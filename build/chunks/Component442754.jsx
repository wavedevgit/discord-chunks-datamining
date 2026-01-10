/** Chunk was on 24783 **/
/** chunk id: 442754, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk362658 = require("./362658.js"),
  Chunk152376 = require("./152376.js"),
  Chunk398758 = require("./398758.js"),
  Chunk9156 = require("./9156.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function b(e) {
  let {
    isFavoritesPerk: t
  } = (0, c.z)("useChannelOptInItems"), n = (0, a.DM)(e.guild_id), b = (0, i.e7)([s.ZP], () => s.ZP.isChannelOptedIn(e.guild_id, e.id)), p = (0, i.e7)([s.ZP], () => null != e.parent_id && s.ZP.isChannelOptedIn(e.guild_id, e.parent_id)), f = (0, i.e7)([s.ZP], () => s.ZP.isFavorite(e.guild_id, e.id)), O = () => {
    (0, o.XQ)(e.guild_id, e.id, !b, {
      section: u.jXE.CONTEXT_MENU
    })
  };
  if (!n || e.isThread()) return null;
  if (e.isCategory()) return (0, r.jsx)(l.sNh, {
    id: "opt-into-category",
    label: b ? d.intl.string(d.t["3zySTA"]) : d.intl.string(d.t["9mysCh"]),
    action: () => O()
  });
  let y = f ? d.intl.string(d.t.z7I3gd) : d.intl.string(d.t["N2c/Un"]),
    g = f ? d.intl.string(d.t.M5PWSf) : d.intl.string(d.t.RMpwZu);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.sNh, {
      id: "opt-in-favorite-channel",
      label: t ? g : y,
      action: () => {
        (0, o.dM)(e.guild_id, e.id, !f, {
          section: u.jXE.CONTEXT_MENU
        })
      }
    }), p ? (0, r.jsx)(l.sNh, {
      id: "opt-out-category",
      label: d.intl.string(d.t.jNphKT),
      action: () => void(null != e.parent_id && (0, o.XQ)(e.guild_id, e.parent_id, false, {
        section: u.jXE.CONTEXT_MENU
      }))
    }) : (0, r.jsx)(l.sNh, {
      id: "opt-into-channel",
      label: b ? d.intl.string(d.t["3zySTA"]) : d.intl.string(d.t["9mysCh"]),
      action: () => O()
    })]
  })
}