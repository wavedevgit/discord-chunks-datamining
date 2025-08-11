/** Chunk was on 22988 **/
/** chunk id: 598622, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Q: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
    renderComponent: () => <c.Z guild={e} />,
    enabled: true
  }, {
    renderComponent: () => <o.Z title={u.intl.string(u.t.QiONLy)} details={u.intl.string(u.t.dSRTMD)} />,
    enabled: true
  }, {
    renderComponent: () => <o.Z title={u.intl.string(u.t["f+8F8P"])} details={u.intl.string(u.t.qChrIy)} />,
    enabled: true
  }, {
    renderComponent: () => <o.Z title={u.intl.string(u.t.EkSAHR)} />,
    enabled: true
  }, {
    renderComponent: () => <o.Z title={u.intl.string(u.t["7cAQmp"])} />,
    enabled: true
  }].filter(e => null != e);
  return {
    [i.u.CAPTCHA_AND_RAID_PROTECTION]: [{
      renderComponent: () => <s.Z guild={e} />,
      enabled: !e.features.has(d.oNc.RAID_ALERTS_DISABLED)
    }, {
      renderComponent: () => <o.Z title={u.intl.string(u.t.gOkFfH)} />,
      enabled: true
    }, {
      renderComponent: () => <o.Z title={u.intl.string(u.t.r3esyM)} />,
      enabled: true
    }],
    [i.u.DM_AND_SPAM_PROTECTION]: t,
    [i.u.PERMISSIONS]: [{
      renderComponent: () => <l.Z guild={e} />,
      enabled: e.mfaLevel === d.BpS.ELEVATED
    }, {
      renderComponent: () => <a.Z guild={e} />,
      enabled: 0 === (0, a.R)(e).length
    }]
  }
}