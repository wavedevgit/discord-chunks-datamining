/** Chunk was on 24783 **/
/** chunk id: 442754, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk362658 = require("./362658.js"),
  Chunk152376 = require("./152376.js"),
  Chunk398758 = require("./398758.js"),
  Chunk9156 = require("./9156.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    isFavoritesPerk: t
  } = (0, c.z)("useChannelOptInItems"), n = (0, a.DM)(e.guild_id), p = (0, i.e7)([u.ZP], () => u.ZP.isChannelOptedIn(e.guild_id, e.id)), b = (0, i.e7)([u.ZP], () => null != e.parent_id && u.ZP.isChannelOptedIn(e.guild_id, e.parent_id)), f = (0, i.e7)([u.ZP], () => u.ZP.isFavorite(e.guild_id, e.id)), O = () => {
    (0, o.XQ)(e.guild_id, e.id, !p, {
      section: s.jXE.CONTEXT_MENU
    })
  }, y = () => {
    null != e.parent_id && (0, o.XQ)(e.guild_id, e.parent_id, false, {
      section: s.jXE.CONTEXT_MENU
    })
  };
  if (!n || e.isThread()) return null;
  if (e.isCategory()) return <l.sNh id={"opt-into-category"} label={p ? d.intl.string(d.t["3zySTE"]) : d.intl.string(d.t["9mysCg"])} action={() => O()} />;
  let g = f ? d.intl.string(d.t.z7I3gY) : d.intl.string(d.t["N2c/Ul"]),
    j = f ? d.intl.string(d.t.M5PWSU) : d.intl.string(d.t.RMpwZm);
  return <r.Fragment>{<l.sNh id={"opt-in-favorite-channel"} label={t ? j : g} action={() => {
        (0, o.dM)(e.guild_id, e.id, !f, {
          section: s.jXE.CONTEXT_MENU
        })
      }} />}{b ? <l.sNh id={"opt-out-category"} label={d.intl.string(d.t.jNphKS)} action={() => y()} /> : <l.sNh id={"opt-into-channel"} label={p ? d.intl.string(d.t["3zySTE"]) : d.intl.string(d.t["9mysCg"])} action={() => O()} />}</r.Fragment>
}