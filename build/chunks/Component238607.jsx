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
  Chunk456100 = require("./456100.js"),
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
    onClose: g
  } = e, {
    themeType: E
  } = (0, d.z)(), b = (0, _.Z)({
    applicationId: null == n ? true : n.application_id,
    onClose: g
  }), y = (0, u.e)({
    activity: null != n ? n : true,
    embeddedActivity: true,
    user: t,
    onClose: g
  }), {
    enabled: O
  } = s.c.useExperiment({
    location: "ActivityButton"
  }, {
    autoTrackExposure: true
  }), v = (0, c.h)(null == n ? true : n.application_id), I = O ? a.iWm : a.jje;
  if (null == y && null != n && (0, l.Z)(n)) return (0, r.jsx)(f.O1, {
    icon: I,
    text: h.intl.string(h.t.RscU7I),
    fullWidth: E !== p.l.MODAL_V2,
    onClick: e => {
      e.stopPropagation(), null != v ? o.Z.launch({
        applicationId: v
      }) : (null == m || m({
        action: "PRESS_PLAY_BUTTON"
      }), b())
    }
  });
  if (null == y) return null;
  let {
    isJoining: T,
    handleJoinRequest: S,
    buttonCTA: A,
    tooltip: C,
    isEnabled: N,
    isEmbedded: R
  } = y;
  return (0, r.jsx)(i.u, {
    text: C,
    asContainer: !N,
    children: (0, r.jsx)(f.O1, {
      icon: R ? a.YVR : a.iWm,
      text: A,
      disabled: !N,
      loading: T,
      fullWidth: E !== p.l.MODAL_V2,
      onClick: e => {
        e.stopPropagation(), null == m || m({
          action: R ? "PRESS_JOIN_BUTTON" : "PRESS_ASK_TO_JOIN_BUTTON"
        }), S()
      }
    })
  })
}