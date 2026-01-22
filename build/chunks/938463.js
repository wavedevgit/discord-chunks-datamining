/** Chunk was on web.js **/
/** chunk id: 938463, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => c
}), require("./896048.js"), require("./747238.js");
var Chunk735438 = require("./735438.js"),
  i = require.n(Chunk735438),
  Chunk961350 = require("./961350.js"),
  Chunk986238 = require("./986238.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

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
  } = e, p = Object.keys(f);
  if (0 === i().intersection(p, t).length) return {
    valid: false,
    reason: l.intl.formatToPlainString(l.t.wySUzv, {
      requestedTargets: p.map(e => {
        var t;
        return null != (t = s.v_[e]) ? t : "unknown"
      }).join(", ")
    })
  };
  if (null != r && r !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
    let e = r === o.BIo.PTB ? r.toUpperCase() : "".concat(r.charAt(0).toUpperCase()).concat(r.slice(1));
    return {
      valid: false,
      reason: l.intl.formatToPlainString(l.t.GOEF0C, {
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
      reason: l.intl.formatToPlainString(l.t.GOEF0C, {
        releaseChannel: d.join(", ")
      })
    }
  }
  let _ = null != c ? new Date(c).getTime() : null;
  return null != _ && _ < Date.now() ? {
    valid: false,
    reason: l.intl.string(l.t["8eRE6S"])
  } : u.length > 0 && !u.includes(a.default.getId()) ? {
    valid: false,
    reason: l.intl.string(l.t.qZgV0a)
  } : {
    valid: true
  }
}