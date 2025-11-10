/** Chunk was on 384 **/
/** chunk id: 598622, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => g
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk740903 = require("./740903.js"),
  Chunk426434 = require("./426434.jsx"),
  Chunk112824 = require("./112824.jsx"),
  Chunk181339 = require("./181339.jsx"),
  Chunk195189 = require("./195189.jsx"),
  Chunk3896 = require("./3896.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let g = e => {
  let t = [{
    renderComponent: () => (0, r.jsx)(c.Z, {
      guild: e
    }, "verification-level"),
    enabled: true
  }, {
    renderComponent: () => (0, r.jsx)(o.Z, {
      title: u.intl.string(u.t.QiONL5),
      details: u.intl.string(u.t.dSRTMB)
    }, "hide-suspicious-dms"),
    enabled: true
  }, {
    renderComponent: () => (0, r.jsx)(o.Z, {
      title: u.intl.string(u.t["f+8F8F"]),
      details: u.intl.string(u.t.qChrI2)
    }, "filter-unknown-dms"),
    enabled: true
  }, {
    renderComponent: () => (0, r.jsx)(o.Z, {
      title: u.intl.string(u.t.EkSAHZ)
    }, "outbound-links-warn"),
    enabled: true
  }, {
    renderComponent: () => (0, r.jsx)(o.Z, {
      title: u.intl.string(u.t["7cAQmj"])
    }, "delete-spam"),
    enabled: true
  }].filter(e => null != e);
  return {
    [i.u.CAPTCHA_AND_RAID_PROTECTION]: [{
      renderComponent: () => (0, r.jsx)(s.Z, {
        guild: e
      }, "raid-alerts"),
      enabled: !e.features.has(d.GuildFeatures.RAID_ALERTS_DISABLED)
    }, {
      renderComponent: () => (0, r.jsx)(o.Z, {
        title: u.intl.string(u.t.gOkFfI)
      }, "captcha-suspicious-joins"),
      enabled: true
    }, {
      renderComponent: () => (0, r.jsx)(o.Z, {
        title: u.intl.string(u.t.r3esyC)
      }, "captcha-raid-joins"),
      enabled: true
    }],
    [i.u.DM_AND_SPAM_PROTECTION]: t,
    [i.u.PERMISSIONS]: [{
      renderComponent: () => (0, r.jsx)(l.Z, {
        guild: e
      }, "guild-mfa"),
      enabled: e.mfaLevel === d.BpS.ELEVATED
    }, {
      renderComponent: () => (0, r.jsx)(a.Z, {
        guild: e
      }, "disable-risky-perms"),
      enabled: 0 === (0, a.R)(e).length
    }]
  }
}