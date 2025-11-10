/** Chunk was on web.js **/
/** chunk id: 763679, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk681715 = require("./681715.js"),
  Chunk159691 = require("./159691.js"),
  Chunk620212 = require("./620212.js"),
  Chunk496675 = require("./496675.js"),
  Chunk585483 = require("./585483.js"),
  Chunk713913 = require("./713913.js"),
  Chunk443603 = require("./443603.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk564355 = require("./564355.js");

function h(e) {
  let {
    disabled: t,
    channel: n
  } = e, h = (0, u.v)(s.U);
  return (0, i.e7)([l.Z], () => n.isPrivate() || l.Z.can(f.Plq.ATTACH_FILES, n) && l.Z.can(f.Plq.SEND_MESSAGES, n)) ? (0, r.jsx)(a.u, {
    shouldShow: !t && null != h,
    keyboardShortcut: h,
    text: _.intl.string(_.t.nzoF5p),
    children: (0, r.jsx)(d.Z, {
      disabled: t,
      isActive: false,
      className: p.button,
      "aria-label": _.intl.string(_.t.nzoF5p),
      onClick: () => {
        c.S.dispatch(f.CkL.UPLOAD_FILE)
      },
      children: (0, r.jsx)(o.XBm, {
        size: "refresh_sm",
        color: "currentColor"
      })
    })
  }) : null
}