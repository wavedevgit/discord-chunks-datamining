/** Chunk was on web.js **/
/** chunk id: 360359, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk654861 = require("./654861.js"),
  i = require.n(Chunk654861),
  Chunk108131 = require("./108131.js"),
  o = require.n(Chunk108131),
  Chunk943881 = require("./943881.js"),
  Chunk650774 = require("./650774.js"),
  Chunk430824 = require("./430824.js"),
  Chunk70956 = require("./70956.js"),
  Chunk709054 = require("./709054.js");

function f(e, t, n) {
  let r, a, o;
  try {
    r = i()(e), a = null != t ? i()(t) : null, o = null != n ? i()(n) : null
  } catch (e) {
    returnfalse
  }
  return !(null != a && r.lesser(a) || null != o && r.greater(o))
}

function p(e) {
  let t, n;
  for (let [r, i] of e) switch (r) {
    case o().v3("min_id"):
      t = i;
      break;
    case o().v3("max_id"):
      n = i
  }
  return {
    min: t,
    max: n
  }
}
let _ = {
  [o().v3("guild_ids")]: e => {
    let t = [];
    for (let [n, r] of e) n === o().v3("guild_ids") && (t = r);
    return e => t.includes(e)
  },
  [o().v3("guild_id_range")]: e => {
    let {
      min: t,
      max: n
    } = p(e);
    return e => f(e, t, n)
  },
  [o().v3("guild_age_range_days")]: e => {
    let {
      min: t,
      max: n
    } = p(e);
    return e => f(Math.floor(d.default.age(e) / u.Z.Millis.DAY), t, n)
  },
  [o().v3("guild_member_count_range")]: e => {
    let {
      min: t,
      max: n
    } = p(e);
    return e => {
      let r = l.Z.getMemberCount(e);
      return null != r && f(r, t, n)
    }
  },
  [o().v3("guild_has_feature")]: e => {
    let [
      [, t]
    ] = e;
    return e => {
      var n;
      let r = null != (n = c.Z.getGuild(e)) ? n : s.Z.getGuild(e);
      return null != r && t.some(e => r.features.has(e))
    }
  },
  [o().v3("guild_hub_types")]: e => {
    let [
      [, t]
    ] = e;
    return e => {
      var n;
      let r = null != (n = c.Z.getGuild(e)) ? n : s.Z.getGuild(e);
      return null != r && "number" == typeof r.hubType && t.some(e => r.hubType === e)
    }
  },
  [o().v3("guild_has_vanity_url")]: e => {
    let [
      [, t]
    ] = e;
    return e => {
      var n;
      let r = null != (n = c.Z.getGuild(e)) ? n : s.Z.getGuild(e);
      return null != r && t === (null != r.vanityURLCode)
    }
  },
  [o().v3("guild_in_range_by_hash")]: e => {
    let t, n;
    for (let [i, a] of e) switch (i) {
      case o().v3("hash_key"):
        t = a;
        break;
      case o().v3("target"):
        var r;
        n = null != (r = parseInt(a)) ? r : 0
    }
    return e => {
      let r = o().v3("".concat(t, ":").concat(e));
      return (r > 0 ? r + r : r >>> 0) % 1e4 < n
    }
  }
}