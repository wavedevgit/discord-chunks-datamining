/** Chunk was on 52708 **/
/** chunk id: 919498, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk971082 = require("./971082.jsx"),
  Chunk853072 = require("./853072.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    applicationId: t,
    guildId: n,
    channelId: o,
    className: c,
    visuallyHideLabel: s
  } = e, u = (0, a.Z)(t);
  return u.length > 0 ? (0, r.jsx)(i.Z, {
    label: l.intl.formatToPlainString(l.t.ujhJdG, {
      numFriends: u.length
    }),
    className: c,
    users: u,
    guildId: n,
    channelId: o,
    visuallyHideLabel: s
  }) : null
}