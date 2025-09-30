/** Chunk was on 64982 **/
/** chunk id: 598622, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Q: () => m
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
let m = e => {
  let t = [{
    renderComponent: () => (0, r.jsx)(c.Z, {
      guild: e
    }, "verification-level"),
    enabled: true
  }, {
    renderComponent: () => (0, r.jsx)(o.Z, {
      title: u.intl.string(u.t.QiONLy),
      details: u.intl.string(u.t.dSRTMD)
    }, "hide-suspicious-dms"),
    enabled: true
  }, {
    renderComponent: () => (0, r.jsx)(o.Z, {
      title: u.intl.string(u.t["f+8F8P"]),
      details: u.intl.string(u.t.qChrIy)
    }, "filter-unknown-dms"),
    enabled: true
  }, {
    renderComponent: () => (0, r.jsx)(o.Z, {
      title: u.intl.string(u.t.EkSAHR)
    }, "outbound-links-warn"),
    enabled: true
  }, {
    renderComponent: () => (0, r.jsx)(o.Z, {
      title: u.intl.string(u.t["7cAQmp"])
    }, "delete-spam"),
    enabled: true
  }].filter(e => null != e);
  return {
    [i.u.CAPTCHA_AND_RAID_PROTECTION]: [{
      renderComponent: () => (0, r.jsx)(a.Z, {
        guild: e
      }, "raid-alerts"),
      enabled: !e.features.has(d.oNc.RAID_ALERTS_DISABLED)
    }, {
      renderComponent: () => (0, r.jsx)(o.Z, {
        title: u.intl.string(u.t.gOkFfH)
      }, "captcha-suspicious-joins"),
      enabled: true
    }, {
      renderComponent: () => (0, r.jsx)(o.Z, {
        title: u.intl.string(u.t.r3esyM)
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
      renderComponent: () => (0, r.jsx)(s.Z, {
        guild: e
      }, "disable-risky-perms"),
      enabled: 0 === (0, s.R)(e).length
    }]
  }
}