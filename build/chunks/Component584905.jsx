/** Chunk was on web.js **/
/** chunk id: 584905, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk435371 = require("./435371.js"),
  Chunk732955 = require("./732955.js"),
  Chunk344731 = require("./344731.js"),
  Chunk576705 = require("./576705.js"),
  Chunk203982 = require("./203982.js"),
  Chunk184761 = require("./184761.js"),
  Chunk355622 = require("./355622.js"),
  Chunk545428 = require("./545428.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk111314 = require("./111314.js");
let m = [Chunk355622.oU.NORMAL, Chunk355622.oU.SIDEBAR];

function g(e) {
  let {
    disabled: t,
    channel: n,
    inputType: d
  } = e, g = (0, u.p)(s.T);
  return (0, i.bG)([l.A], () => n.isPrivate() || l.A.can(p.xBc.ATTACH_FILES, n) && l.A.can(p.xBc.SEND_MESSAGES, n)) && m.includes(d) ? (0, r.jsx)(a.m_, {
    shouldShow: !t && null != g,
    keyboardShortcut: g,
    text: _.intl.string(_.t.nzoF5p),
    children: (0, r.jsx)(f.A, {
      disabled: t,
      isActive: false,
      className: h.x6,
      "aria-label": _.intl.string(_.t.nzoF5p),
      onClick: () => {
        c._.dispatch(p.jej.UPLOAD_FILE, {
          channelId: n.id
        })
      },
      children: (0, r.jsx)(o.xfq, {
        size: "refresh_sm",
        color: "currentColor"
      })
    })
  }) : null
}