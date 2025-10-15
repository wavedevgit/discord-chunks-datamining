/** Chunk was on 36073 **/
/** chunk id: 919498, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  Z: () => l
});
var Chunk951288 = require("./951288.js"),
  Chunk971082 = require("./971082.jsx"),
  Chunk853072 = require("./853072.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  let {
    applicationId: t,
    guildId: r,
    channelId: l,
    className: c,
    visuallyHideLabel: s
  } = e, u = (0, a.Z)(t);
  return u.length > 0 ? (0, n.jsx)(i.Z, {
    label: o.intl.formatToPlainString(o.t.ujhJdH, {
      numFriends: u.length
    }),
    className: c,
    users: u,
    guildId: r,
    channelId: l,
    visuallyHideLabel: s
  }) : null
}