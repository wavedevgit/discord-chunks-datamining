/** Chunk was on web.js **/
/** chunk id: 145022, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./35282.js");
var Chunk392711 = require("./392711.js"),
  i = require.n(Chunk392711),
  Chunk314897 = require("./314897.js"),
  Chunk908442 = require("./908442.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c(e, t, n) {
  if (null == e || null == t) return {
    valid: false,
    reason: l.intl.string(l.t.d34xi4)
  };
  let {
    releaseChannel: r,
    expiresAt: c,
    validForUserIds: u,
    allowedVersions: d,
    targetBuildOverride: f
  } = e, _ = Object.keys(f);
  if (0 === i().intersection(_, t).length) return {
    valid: false,
    reason: l.intl.formatToPlainString(l.t.wySUzs, {
      requestedTargets: _.map(e => {
        var t;
        return null != (t = o.o0[e]) ? t : "unknown"
      }).join(", ")
    })
  };
  if (null != r && r !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
    let e = r === s.R5N.PTB ? r.toUpperCase() : "".concat(r.charAt(0).toUpperCase()).concat(r.slice(1));
    return {
      valid: false,
      reason: l.intl.formatToPlainString(l.t.GOEF0N, {
        releaseChannel: e
      })
    }
  }
  if (null != d) {
    let e = false;
    if (null == n) e = false;
    else if (d.includes(n)) e = true;
    else {
      let [t] = n.split(".");
      for (let n of d) {
        let [r, i] = n.split(".");
        if ("*" === i && t === r) {
          e = true;
          break
        }
      }
    }
    if (!e) return {
      valid: false,
      reason: l.intl.formatToPlainString(l.t.GOEF0N, {
        releaseChannel: d.join(", ")
      })
    }
  }
  let p = null != c ? new Date(c).getTime() : null;
  return null != p && p < Date.now() ? {
    valid: false,
    reason: l.intl.string(l.t["8eRE6e"])
  } : u.length > 0 && !u.includes(a.default.getId()) ? {
    valid: false,
    reason: l.intl.string(l.t.qZgV0d)
  } : {
    valid: true
  }
}