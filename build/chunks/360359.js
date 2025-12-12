/** Chunk was on web.js **/
/** chunk id: 360359, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk654861 = require("./654861.js"),
  i = require.n(Chunk654861),
  Chunk108131 = require("./108131.js"),
  a = require.n(Chunk108131),
  Chunk943881 = require("./943881.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js");

function f(e, t, n) {
  let r, o, a;
  try {
    r = i()(e), o = null != t ? i()(t) : null, a = null != n ? i()(n) : null
  } catch (e) {
    returnfalse
  }
  return !(null != o && r.lesser(o) || null != a && r.greater(a))
}

function p(e) {
  let t, n;
  for (let [r, i] of e) switch (r) {
    case a().v3("min_id"):
      t = i;
      break;
    case a().v3("max_id"):
      n = i
  }
  return {
    min: t,
    max: n
  }
}
let _ = {
  [a().v3("guild_ids")]: e => {
    let t = [];
    for (let [n, r] of e) n === a().v3("guild_ids") && (t = r);
    return e => t.includes(e)
  },
  [a().v3("guild_id_range")]: e => {
    let {
      min: t,
      max: n
    } = p(e);
    return e => f(e, t, n)
  },
  [a().v3("guild_age_range_days")]: e => {
    let {
      min: t,
      max: n
    } = p(e);
    return e => f(Math.floor(d.default.age(e) / u.Z.Millis.DAY), t, n)
  },
  [a().v3("guild_member_count_range")]: e => {
    let {
      min: t,
      max: n
    } = p(e);
    return e => {
      let r = l.Z.getMemberCount(e);
      return null != r && f(r, t, n)
    }
  },
  [a().v3("guild_has_feature")]: e => {
    let [
      [, t]
    ] = e;
    return e => {
      var n;
      let r = null != (n = c.Z.getGuild(e)) ? n : s.Z.getGuild(e);
      return null != r && t.some(e => r.features.has(e))
    }
  },
  [a().v3("guild_hub_types")]: e => {
    let [
      [, t]
    ] = e;
    return e => {
      var n;
      let r = null != (n = c.Z.getGuild(e)) ? n : s.Z.getGuild(e);
      return null != r && "number" == typeof r.hubType && t.some(e => r.hubType === e)
    }
  },
  [a().v3("guild_has_vanity_url")]: e => {
    let [
      [, t]
    ] = e;
    return e => {
      var n;
      let r = null != (n = c.Z.getGuild(e)) ? n : s.Z.getGuild(e);
      return null != r && t === (null != r.vanityURLCode)
    }
  },
  [a().v3("guild_in_range_by_hash")]: e => {
    let t, n;
    for (let [i, o] of e) switch (i) {
      case a().v3("hash_key"):
        t = o;
        break;
      case a().v3("target"):
        var r;
        n = null != (r = parseInt(o)) ? r : 0
    }
    return e => {
      let r = a().v3("".concat(t, ":").concat(e));
      return (r > 0 ? r + r : r >>> 0) % 1e4 < n
    }
  }
}