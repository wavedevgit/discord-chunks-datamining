/** Chunk was on 69283 **/
/** chunk id: 670079, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk803647 = require("./803647.js"),
  Chunk76021 = require("./76021.jsx"),
  Chunk199902 = require("./199902.js"),
  Chunk979651 = require("./979651.js");

function m(e) {
  let {
    channelId: t,
    guildId: n
  } = e, m = (0, o.e7)([_.Z], () => !(0, i.isEmpty)(_.Z.getVoiceStatesForChannel(t)), [t]), f = (0, o.e7)([d.Z], () => {
    let e = d.Z.getCurrentUserActiveStream();
    return (null == e ? true : e.channelId) === t ? e : null
  }, [t]), {
    analyticsLocations: h
  } = (0, c.ZP)(), g = a.useCallback(() => {
    null != f ? (0, u.Z)(f) : (0, s.Z)(n, t, h)
  }, [n, t, h, f]);
  return m ? (0, r.jsx)(l.hU, {
    variant: "icon-only",
    onClick: g,
    "aria-label": null != f ? "Stop Sharing" : "Share Screen",
    icon: null != f ? l.g5r : l.hGI
  }) : null
}