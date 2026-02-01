/** Chunk was on 9753 **/
/** chunk id: 81437, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
});
var Chunk157559 = require("./157559.js"),
  Chunk734057 = require("./734057.js"),
  Chunk576705 = require("./576705.js"),
  Chunk994500 = require("./994500.js"),
  Chunk694318 = require("./694318.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e, t) {
  if (a.A.isBlockedForMessage(e)) return r.A.show({
    title: c.intl.string(c.t["j7eA/g"]),
    body: c.intl.formatToPlainString(c.t.dTNNgr, {
      name: e.author.username
    }),
    confirmText: c.intl.string(c.t.BddRzS)
  }), false;
  if (a.A.isIgnoredForMessage(e)) return r.A.show({
    title: c.intl.string(c.t.XyWoKV),
    body: c.intl.formatToPlainString(c.t["8t8doK"], {
      name: e.author.username
    }),
    confirmText: c.intl.string(c.t.BddRzS)
  }), false;
  if ((0, s.kf)(e)) {
    let n = i.A.getChannel(e.channel_id);
    return (null == n ? true : n.isPrivate()) || l.A.can(o.xBc.MODERATE_MEMBERS, n) ? r.A.show({
      title: c.intl.string(c.t["cZcG+P"]),
      body: c.intl.formatToPlainString(c.t["1YTWty"], {
        name: e.author.username
      }),
      confirmText: c.intl.string(c.t["+TSRGD"]),
      cancelText: c.intl.string(c.t["ETE/oC"]),
      onConfirm: t
    }) : r.A.show({
      title: c.intl.string(c.t["6vJKFk"]),
      body: c.intl.formatToPlainString(c.t.zKNgPF, {
        name: e.author.username
      }),
      confirmText: c.intl.string(c.t.BddRzS)
    }), false
  }
  returntrue
}