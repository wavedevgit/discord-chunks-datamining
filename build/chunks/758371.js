/** Chunk was on web.js **/
/** chunk id: 758371, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $v: () => u,
  _0: () => c,
  dQ: () => l,
  wR: () => d,
  yy: () => f
});
var Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk658805 = require("./658805.js");

function l(e, t) {
  switch (t) {
    case o.mFx.LISTEN:
      return a.intl.formatToPlainString(a.t["/8czHx"], {
        name: e
      });
    case o.mFx.WATCH:
      return a.intl.formatToPlainString(a.t.BBJXVl, {
        name: e
      });
    case o.mFx.JOIN:
      return a.intl.string(a.t.pkq6Vl);
    case o.mFx.JOIN_REQUEST:
    default:
      return a.intl.string(a.t.Ckxb6u)
  }
}

function c(e, t, n, r, o) {
  return e.author.id === r ? a.intl.formatToPlainString(s.default["7pndSk"], {
    applicationName: t.name
  }) : a.intl.formatToPlainString(o ? s.default["o/An3t"] : s.default.s7bMT0, {
    username: (0, i.oY)(n.guild_id, n.id, e.author),
    applicationName: t.name
  })
}

function u(e, t, n, i, o) {
  if (e.author.id === i) {
    if (n.isPrivate()) {
      let e = r.default.getUser(n.getRecipientId());
      if (null != e) return o ? a.intl.formatToPlainString(a.t.JddpNz, {
        username: e.globalName,
        appName: t.name
      }) : a.intl.formatToPlainString(a.t.gYVkSU, {
        username: e.globalName,
        appName: t.name
      })
    }
    return o ? a.intl.formatToPlainString(a.t["2N1kNT"], {
      appName: t.name
    }) : a.intl.formatToPlainString(a.t.IA6uDQ, {
      appName: t.name
    })
  }
  return o ? a.intl.formatToPlainString(a.t.XE8axM, {
    username: e.author.globalName,
    appName: t.name
  }) : a.intl.formatToPlainString(a.t.hgcjOj, {
    username: e.author.globalName,
    appName: t.name
  })
}

function d(e, t, n, r) {
  var i;
  switch (null == (i = e.activity) ? true : i.type) {
    case o.mFx.LISTEN:
    case o.mFx.WATCH:
    case o.mFx.JOIN:
      return a.intl.string(a.t.x1UXGR);
    case o.mFx.STREAM_REQUEST:
      return c(e, t, n, r, true);
    case o.mFx.JOIN_REQUEST:
    default:
      return u(e, t, n, r, true)
  }
}

function f(e) {
  let t, {
    activityActionType: n,
    maxPartySize: r,
    partySize: i
  } = e;
  return n === o.mFx.LISTEN ? r > 0 ? a.intl.formatToPlainString(a.t.Zogooq, {
    partySize: i,
    maxPartySize: r
  }) : a.intl.formatToPlainString(a.t.UGei0t, {
    partySize: i
  }) : r > 0 ? a.intl.formatToPlainString(a.t.gLu7NT, {
    partySize: i,
    maxPartySize: r
  }) : a.intl.formatToPlainString(a.t["65JnWF"], {
    partySize: i
  })
}