/** Chunk was on web.js **/
/** chunk id: 317169, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  I: () => s,
  Z: () => l
});
var Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk430824 = require("./430824.js"),
  Chunk905128 = require("./905128.js");

function s(e) {
  var t, n, r;
  let i = null != (r = null == (t = o.Z.getGuild(e)) ? true : t.premiumSubscriberCount) ? r : 0,
    s = null == (n = a.Z.getStateForGuild(e)) ? true : n.appliedBoosts;
  return null == s ? {
    available: 0,
    spend: 0,
    total: i
  } : {
    available: Math.max(0, i - s),
    spent: s,
    total: i
  }
}

function l(e) {
  var t;
  let n = null != (t = (0, i.e7)([o.Z], () => {
      var t;
      return null == (t = o.Z.getGuild(e)) ? true : t.premiumSubscriberCount
    })) ? t : 0,
    s = (0, i.e7)([a.Z], () => {
      var t;
      return null == (t = a.Z.getStateForGuild(e)) ? true : t.appliedBoosts
    });
  return r.useMemo(() => null == s ? {
    available: 0,
    spent: 0,
    total: n
  } : {
    available: Math.max(0, n - s),
    spent: s,
    total: n
  }, [n, s])
}