/** Chunk was on web.js **/
/** chunk id: 238607, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk224706 = require("./224706.js"),
  Chunk841784 = require("./841784.js"),
  Chunk171516 = require("./171516.js"),
  Chunk103450 = require("./103450.js"),
  Chunk652853 = require("./652853.jsx"),
  Chunk732380 = require("./732380.jsx"),
  Chunk614716 = require("./614716.js"),
  Chunk671955 = require("./671955.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let {
    user: t,
    activity: n,
    onAction: m,
    onClose: h
  } = e, {
    themeType: g
  } = (0, u.z)(), E = (0, f.Z)({
    applicationId: null == n ? true : n.application_id,
    onClose: h
  }), b = (0, c.e)({
    activity: null != n ? n : true,
    embeddedActivity: true,
    user: t,
    onClose: h
  }), y = (0, l.h)(null == n ? true : n.application_id);
  if (null == b && null != n && (0, s.Z)(n)) return (0, r.jsx)(d.O1, {
    icon: a.jje,
    text: _.intl.string(_.t.RscU7I),
    fullWidth: g !== p.l.MODAL_V2,
    onClick: e => {
      e.stopPropagation(), null != y ? o.Z.launch({
        applicationId: y
      }) : (null == m || m({
        action: "PRESS_PLAY_BUTTON"
      }), E())
    }
  });
  if (null == b) return null;
  let {
    isJoining: O,
    handleJoinRequest: v,
    buttonCTA: S,
    tooltip: I,
    isEnabled: T,
    isEmbedded: C
  } = b;
  return (0, r.jsx)(i.u, {
    text: I,
    asContainer: !T,
    children: (0, r.jsx)(d.O1, {
      icon: C ? a.YVR : a.iWm,
      text: S,
      disabled: !T,
      loading: O,
      fullWidth: g !== p.l.MODAL_V2,
      onClick: e => {
        e.stopPropagation(), null == m || m({
          action: C ? "PRESS_JOIN_BUTTON" : "PRESS_ASK_TO_JOIN_BUTTON"
        }), v()
      }
    })
  })
}