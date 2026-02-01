/** Chunk was on 9207 **/
/** chunk id: 61610, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk954571 = require("./954571.js"),
  Chunk115063 = require("./115063.js"),
  Chunk253932 = require("./253932.js"),
  Chunk112469 = require("./112469.js"),
  Chunk871930 = require("./871930.jsx"),
  Chunk578746 = require("./578746.jsx"),
  Chunk542457 = require("./542457.js"),
  Chunk355097 = require("./355097.js"),
  Chunk531525 = require("./531525.js");
require("./820575.js");
var Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk536482 = require("./536482.js");

function f(e) {
  let {
    ingress: t,
    guildId: n
  } = e, o = a.JG.useSetting().includes(n), _ = i.useCallback(e => {
    let r = (0, s.Kk)();
    e ? r.delete(n) : r.add(n), a.JG.updateSetting([...r]), l.default.track(m.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: u.m.RESTRICT_GUILD_ACTIVITY_STATUS_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [t, n]);
  return "0" === n ? null : (0, r.jsx)(c.h, {
    setting: p.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_STATUS_V2,
    children: (0, r.jsx)(d.Ay, {
      title: g.intl.string(A.default.WhdCGP),
      value: !o,
      onChange: _,
      note: g.intl.string(A.default.UQ9RHJ)
    })
  })
}

function b(e) {
  let {
    ingress: t = _.bf.USER_SETTINGS_PRIVACY_SAFETY,
    guildId: n
  } = e, i = (0, o.Tx)();
  return (0, r.jsx)(f, {
    ingress: t,
    guildId: null != n ? n : i
  })
}