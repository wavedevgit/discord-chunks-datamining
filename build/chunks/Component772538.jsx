/** Chunk was on 5606 **/
/** chunk id: 772538, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
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
  Chunk985018 = require("./985018.jsx");

function b(e) {
  let {
    ingress: t,
    guildId: n
  } = e, c = o.pE.useSetting().includes(n), _ = i.useCallback(e => {
    let r = (0, a.CN)();
    e ? r.delete(n) : r.add(n), o.pE.updateSetting([...r]), l.default.track(g.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: p.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [t, n]);
  return "0" === n ? null : (0, r.jsx)(d.h, {
    setting: m.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
    children: (0, r.jsx)(u.Ay, {
      title: f.intl.string(f.t["T+nevN"]),
      value: !c,
      onChange: _,
      note: f.intl.format(f.t.jXKQCu, {
        helpdeskArticle: s.A.getArticleURL(g.MVz.ACTIVITY_STATUS_SETTINGS)
      })
    })
  })
}

function h(e) {
  let {
    ingress: t = _.bf.USER_SETTINGS_PRIVACY_SAFETY,
    guildId: n
  } = e, i = (0, c.Tx)();
  return (0, r.jsx)(b, {
    ingress: t,
    guildId: null != n ? n : i
  })
}