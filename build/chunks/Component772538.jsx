/** Chunk was on web.js **/
/** chunk id: 772538, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => E
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

function g(e) {
  let {
    ingress: t,
    guildId: n
  } = e, c = l.pE.useSetting().includes(n), p = i.useCallback(e => {
    let r = (0, o.CN)();
    e ? r.delete(n) : r.add(n), l.pE.updateSetting([...r]), a.default.track(h.HAw.USER_SERVER_PRIVACY_SETTINGS_ACTION, {
      action: f.m.RESTRICT_GUILD_ACTIVITY_JOIN_TOGGLE,
      ingress: t,
      guild_id: n
    })
  }, [t, n]);
  return "0" === n ? null : (0, r.jsx)(u.h, {
    setting: _.H.PRIVACY_SERVER_SPECIFIC_PRIVACY_ACTIVITY_JOINING_V2,
    children: (0, r.jsx)(d.Ay, {
      title: m.intl.string(m.t["T+nevN"]),
      value: !c,
      onChange: p,
      note: m.intl.format(m.t.jXKQCu, {
        helpdeskArticle: s.A.getArticleURL(h.MVz.ACTIVITY_STATUS_SETTINGS)
      })
    })
  })
}

function E(e) {
  let {
    ingress: t = p.bf.USER_SETTINGS_PRIVACY_SAFETY,
    guildId: n
  } = e, i = (0, c.Tx)();
  return (0, r.jsx)(g, {
    ingress: t,
    guildId: null != n ? n : i
  })
}