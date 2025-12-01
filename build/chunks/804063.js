/** Chunk was on web.js **/
/** chunk id: 804063, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk668781 = require("./668781.js"),
  Chunk592125 = require("./592125.js"),
  Chunk496675 = require("./496675.js"),
  Chunk699516 = require("./699516.js"),
  Chunk493892 = require("./493892.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e, t) {
  if (o.Z.isBlockedForMessage(e)) return r.Z.show({
    title: c.intl.string(c.t["j7eA/g"]),
    body: c.intl.formatToPlainString(c.t.dTNNgr, {
      name: e.author.username
    }),
    confirmText: c.intl.string(c.t.BddRzS)
  }), false;
  if (o.Z.isIgnoredForMessage(e)) return r.Z.show({
    title: c.intl.string(c.t.XyWoKV),
    body: c.intl.formatToPlainString(c.t["8t8doK"], {
      name: e.author.username
    }),
    confirmText: c.intl.string(c.t.BddRzS)
  }), false;
  if ((0, s.DQ)(e)) {
    let n = i.Z.getChannel(e.channel_id);
    return (null == n ? true : n.isPrivate()) || a.Z.can(l.Plq.MODERATE_MEMBERS, n) ? r.Z.show({
      title: c.intl.string(c.t["cZcG+P"]),
      body: c.intl.formatToPlainString(c.t["1YTWty"], {
        name: e.author.username
      }),
      confirmText: c.intl.string(c.t["+TSRGD"]),
      cancelText: c.intl.string(c.t["ETE/oC"]),
      onConfirm: t
    }) : r.Z.show({
      title: c.intl.string(c.t["6vJKFk"]),
      body: c.intl.formatToPlainString(c.t.zKNgPF, {
        name: e.author.username
      }),
      confirmText: c.intl.string(c.t.BddRzS)
    }), false
  }
  returntrue
}