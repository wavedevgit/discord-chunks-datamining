/** Chunk was on web.js **/
/** chunk id: 691041, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk544420 = require("./544420.js"),
  Chunk765379 = require("./765379.js"),
  Chunk928550 = require("./928550.js"),
  Chunk594262 = require("./594262.js"),
  Chunk939496 = require("./939496.jsx"),
  Chunk993401 = require("./993401.jsx"),
  Chunk695311 = require("./695311.js"),
  Chunk996988 = require("./996988.js"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  let {
    user: t,
    activity: n,
    onAction: h,
    onClose: m
  } = e, {
    themeType: g
  } = (0, u.E)(), E = (0, f.A)({
    applicationId: null == n ? true : n.application_id,
    onClose: m
  }), b = (0, c.l)({
    activity: null != n ? n : true,
    embeddedActivity: true,
    user: t,
    onClose: m
  }), y = (0, l.d)(null == n ? true : n.application_id);
  if (null == b && null != n && (0, o.A)(n)) return (0, r.jsx)(d.FD, {
    icon: a.k9F,
    text: _.intl.string(_.t.RscU7I),
    fullWidth: g !== p.d.MODAL_V2,
    onClick: e => {
      e.stopPropagation(), null != y ? s.A.launch({
        applicationId: y
      }) : (null == h || h({
        action: "PRESS_PLAY_BUTTON"
      }), E())
    }
  });
  if (null == b) return null;
  let {
    isJoining: O,
    handleJoinRequest: A,
    buttonCTA: v,
    tooltip: S,
    isEnabled: I,
    isEmbedded: T
  } = b;
  return (0, r.jsx)(i.m, {
    text: S,
    asContainer: !I,
    children: (0, r.jsx)(d.FD, {
      icon: T ? a.Ihz : a._xR,
      text: v,
      disabled: !I,
      loading: O,
      fullWidth: g !== p.d.MODAL_V2,
      onClick: e => {
        e.stopPropagation(), null == h || h({
          action: T ? "PRESS_JOIN_BUTTON" : "PRESS_ASK_TO_JOIN_BUTTON"
        }), A()
      }
    })
  })
}