/** Chunk was on 22325 **/
/** chunk id: 919498, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js"),
  Chunk971082 = require("./971082.jsx"),
  Chunk853072 = require("./853072.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    applicationId: t,
    guildId: n,
    channelId: o,
    className: s,
    visuallyHideLabel: c
  } = e, u = (0, a.Z)(t);
  return u.length > 0 ? (0, r.jsx)(i.Z, {
    label: l.intl.formatToPlainString(l.t.ujhJdG, {
      numFriends: u.length
    }),
    className: s,
    users: u,
    guildId: n,
    channelId: o,
    visuallyHideLabel: c
  }) : null
}