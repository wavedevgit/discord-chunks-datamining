/** Chunk was on 44669 **/
/** chunk id: 516311, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  RQ: () => y,
  dA: () => O
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js");
require("./313961.js"), require("./666328.jsx"), require("./734337.jsx"), require("./74329.jsx"), require("./956747.jsx");
var Chunk288104 = require("./288104.jsx"),
  Chunk661504 = require("./661504.jsx"),
  Chunk267102 = require("./267102.jsx"),
  Chunk769591 = require("./769591.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk993838 = require("./993838.jsx"),
  Chunk233993 = require("./233993.js"),
  Chunk446600 = require("./446600.js"),
  Chunk418208 = require("./418208.js");
require("./806931.js");
var Chunk985018 = require("./985018.jsx");

function y(e) {
  let t = (0, s.bG)([p.A], () => p.A.getChannel(e), [e]),
    n = (0, s.bG)([h.A], () => h.A.can(f.QY, t)),
    l = (0, b.zU)(),
    i = (0, s.bG)([m.A], () => m.A.getStageInstanceByChannel(e), [e]),
    o = (0, u.Us)();
  return (null == t ? true : t.isGuildStageVoice()) && n && !l ? null != i ? (0, r.jsx)(a.Drp, {
    id: "edit-stage",
    label: A.intl.string(A.t["I+9bLx"]),
    action: () => {
      null != t && (0, g.tQ)(t, o)
    }
  }) : (0, r.jsx)(a.Drp, {
    id: "start-stage",
    label: A.intl.string(A.t.OYbHfv),
    action: () => {
      null != t && (0, g.tQ)(t, o)
    }
  }) : null
}

function O(e) {
  let t = (0, s.bG)([p.A], () => p.A.getChannel(e), [e]);
  i()(null != t, "useNotificationSettingsItem: channel cannot be undefined");
  let n = (0, d.os)("StageChannelCallOverflowMenu"),
    r = (0, c.Ay)(t),
    l = (0, o.A)(t);
  return n ? r : l
}