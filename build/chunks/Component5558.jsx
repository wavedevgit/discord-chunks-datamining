/** Chunk was on 39048 **/
/** chunk id: 5558, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  N: () => g
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk660496 = require("./660496.js"),
  Chunk40160 = require("./40160.jsx"),
  Chunk324898 = require("./324898.jsx"),
  Chunk294363 = require("./294363.jsx"),
  Chunk400934 = require("./400934.jsx"),
  Chunk412977 = require("./412977.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let g = e => {
  let t = [{
    renderComponent: () => (0, r.jsx)(c.A, {
      guild: e
    }, "verification-level"),
    enabled: true
  }, {
    renderComponent: () => (0, r.jsx)(o.A, {
      title: u.intl.string(u.t.QiONL5),
      details: u.intl.string(u.t.dSRTMB)
    }, "hide-suspicious-dms"),
    enabled: true
  }, {
    renderComponent: () => (0, r.jsx)(o.A, {
      title: u.intl.string(u.t["f+8F8F"]),
      details: u.intl.string(u.t.qChrI2)
    }, "filter-unknown-dms"),
    enabled: true
  }, {
    renderComponent: () => (0, r.jsx)(o.A, {
      title: u.intl.string(u.t.EkSAHZ)
    }, "outbound-links-warn"),
    enabled: true
  }, {
    renderComponent: () => (0, r.jsx)(o.A, {
      title: u.intl.string(u.t["7cAQmj"])
    }, "delete-spam"),
    enabled: true
  }].filter(e => null != e);
  return {
    [i.C.CAPTCHA_AND_RAID_PROTECTION]: [{
      renderComponent: () => (0, r.jsx)(a.A, {
        guild: e
      }, "raid-alerts"),
      enabled: !e.features.has(d.GuildFeatures.RAID_ALERTS_DISABLED)
    }, {
      renderComponent: () => (0, r.jsx)(o.A, {
        title: u.intl.string(u.t.gOkFfI)
      }, "captcha-suspicious-joins"),
      enabled: true
    }, {
      renderComponent: () => (0, r.jsx)(o.A, {
        title: u.intl.string(u.t.r3esyC)
      }, "captcha-raid-joins"),
      enabled: true
    }],
    [i.C.DM_AND_SPAM_PROTECTION]: t,
    [i.C.PERMISSIONS]: [{
      renderComponent: () => (0, r.jsx)(l.A, {
        guild: e
      }, "guild-mfa"),
      enabled: e.mfaLevel === d.EkJ.ELEVATED
    }, {
      renderComponent: () => (0, r.jsx)(s.A, {
        guild: e
      }, "disable-risky-perms"),
      enabled: 0 === (0, s.W)(e).length
    }]
  }
}