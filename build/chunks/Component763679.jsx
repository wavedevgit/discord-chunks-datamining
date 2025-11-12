/** Chunk was on web.js **/
/** chunk id: 763679, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  z: () => g
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
  Chunk541716 = require("./541716.js"),
  Chunk443603 = require("./443603.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk564355 = require("./564355.js");
let m = [Chunk541716.Ie.NORMAL, Chunk541716.Ie.SIDEBAR, Chunk541716.Ie.CREATE_FORUM_POST];

function g(e) {
  let {
    disabled: t,
    channel: n,
    inputType: d
  } = e, g = (0, u.v)(s.U);
  return (0, i.e7)([l.Z], () => n.isPrivate() || l.Z.can(_.Plq.ATTACH_FILES, n) && l.Z.can(_.Plq.SEND_MESSAGES, n)) && m.includes(d) ? (0, r.jsx)(a.u, {
    shouldShow: !t && null != g,
    keyboardShortcut: g,
    text: p.intl.string(p.t.nzoF5p),
    children: (0, r.jsx)(f.Z, {
      disabled: t,
      isActive: false,
      className: h.button,
      "aria-label": p.intl.string(p.t.nzoF5p),
      onClick: () => {
        c.S.dispatch(_.CkL.UPLOAD_FILE, {
          channelId: n.id
        })
      },
      children: (0, r.jsx)(o.XBm, {
        size: "refresh_sm",
        color: "currentColor"
      })
    })
  }) : null
}