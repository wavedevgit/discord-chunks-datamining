/** Chunk was on 75149 **/
/** chunk id: 969128, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk616075 = require("./616075.js"),
  Chunk816662 = require("./816662.js"),
  Chunk395504 = require("./395504.js"),
  Chunk543465 = require("./543465.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function b(e) {
  let {
    isFavoritesPerk: t
  } = (0, a.l)("useChannelOptInItems"), n = (0, o.jN)(e.guild_id), b = (0, i.bG)([s.Ay], () => s.Ay.isChannelOptedIn(e.guild_id, e.id)), p = (0, i.bG)([s.Ay], () => null != e.parent_id && s.Ay.isChannelOptedIn(e.guild_id, e.parent_id)), O = (0, i.bG)([s.Ay], () => s.Ay.isFavorite(e.guild_id, e.id)), y = () => {
    (0, c.AC)(e.guild_id, e.id, !b, {
      section: u.JJy.CONTEXT_MENU
    })
  };
  if (!n || e.isThread()) return null;
  if (e.isCategory()) return (0, r.jsx)(l.Drp, {
    id: "opt-into-category",
    label: b ? d.intl.string(d.t["3zySTA"]) : d.intl.string(d.t["9mysCh"]),
    action: () => y()
  });
  let f = O ? d.intl.string(d.t.z7I3gd) : d.intl.string(d.t["N2c/Un"]),
    g = O ? d.intl.string(d.t.M5PWSf) : d.intl.string(d.t.RMpwZu);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(l.Drp, {
      id: "opt-in-favorite-channel",
      label: t ? g : f,
      action: () => {
        (0, c.jA)(e.guild_id, e.id, !O, {
          section: u.JJy.CONTEXT_MENU
        })
      }
    }), p ? (0, r.jsx)(l.Drp, {
      id: "opt-out-category",
      label: d.intl.string(d.t.jNphKT),
      action: () => void(null != e.parent_id && (0, c.AC)(e.guild_id, e.parent_id, false, {
        section: u.JJy.CONTEXT_MENU
      }))
    }) : (0, r.jsx)(l.Drp, {
      id: "opt-into-channel",
      label: b ? d.intl.string(d.t["3zySTA"]) : d.intl.string(d.t["9mysCh"]),
      action: () => y()
    })]
  })
}