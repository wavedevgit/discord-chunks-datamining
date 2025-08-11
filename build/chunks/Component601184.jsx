/** Chunk was on web.js **/
/** chunk id: 601184, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk257559 = require("./257559.jsx"),
  Chunk660189 = require("./660189.js"),
  Chunk665906 = require("./665906.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk901461 = require("./901461.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e, t) {
  let n = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
    h = (0, c.$R)(t),
    m = (0, i.e7)([u.Z], () => u.Z.can(_.Plq.MANAGE_MESSAGES, t), [t]);

  function g(n) {
    e.state === _.yb.SEND_FAILED ? a.Z.deleteMessage(t.id, e.id, true) : n.shiftKey ? a.Z.deleteMessage(t.id, e.id) : s.Z.confirmDelete(t, e, true)
  }
  let {
    firstMessage: E
  } = (0, i.e7)([l.Z], () => l.Z.getMessage(t.id), [t.id]), b = m || null != n && e.canDeleteOwnMessage(n.id);
  return e.state === _.yb.SENDING || !b || _.V$x.UNDELETABLE.has(e.type) || !h || t.isModeratorReportChannel() && (e.id === (null == E ? true : E.id) || (0, f.Z)(e)) ? null : (0, r.jsx)(o.sNh, {
    id: "delete",
    label: p.intl.string(p.t.xwMqDw),
    action: g,
    color: "danger",
    icon: o.XHJ
  })
}