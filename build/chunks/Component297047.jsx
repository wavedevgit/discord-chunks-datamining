/** Chunk was on web.js **/
/** chunk id: 297047, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m,
  q: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk144144 = require("./144144.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk944486 = require("./944486.js"),
  Chunk585483 = require("./585483.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function _(e, t) {
  let {
    id: n
  } = e, r = "@".concat(d.ZP.getUserTag(e, {
    decoration: "never"
  })), i = "<@".concat(n, ">");
  u.S.dispatchToLastSubscribed(f.CkL.INSERT_TEXT, {
    plainText: r,
    rawText: i
  }), null != t && a.Z.startTyping(t)
}

function m(e, t, n) {
  let [a, u] = (0, i.Wu)([c.Z, s.Z, l.Z], () => {
    let e = c.Z.getChannelId(t),
      n = s.Z.getChannel(e);
    return [e, null != n && (n.isMultiUserDM() || l.Z.can(f.Plq.SEND_MESSAGES, n))]
  }, [t]), d = n === f.IlC.POPOUT;
  if (!u || d) return null;

  function m() {
    _(e, a)
  }
  return (0, r.jsx)(o.sNh, {
    id: "mention",
    label: p.intl.string(p.t.P8tvKG),
    action: m
  })
}