/** Chunk was on 71512 **/
/** chunk id: 140285, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk727843 = require("./727843.jsx"),
  Chunk944537 = require("./944537.js"),
  Chunk290348 = require("./290348.js"),
  Chunk91354 = require("./91354.jsx"),
  Chunk662961 = require("./662961.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk851016 = require("./851016.js");

function g(e) {
  let {
    "aria-labelledby": t,
    disabled: n = false
  } = e, {
    editStateId: g,
    guildId: p
  } = (0, s.N)(), [f, h] = o.GP(g, p);
  return (0, r.jsx)(i.Gu, {
    className: m.__invalid_channelAccessSelect,
    radioItemClassName: m.__invalid_channelAccessSelectRadioButton,
    withTransparentBackground: true,
    size: i.l7.NOT_SET,
    onChange: e => {
      let {
        value: t
      } = e;
      return h(t)
    },
    options: [{
      name: u.intl.string(u.t["vs2T+P"]),
      value: a.I.SOME_CHANNELS_ACCESS,
      icon: (0, l.GSL)(d.Z),
      radioBarClassName: m.__invalid_channelAccessSelectRadioBar
    }, {
      name: u.intl.string(u.t.l4Tr7e),
      value: a.I.ALL_CHANNELS_ACCESS,
      icon: (0, l.GSL)(c.Z),
      radioBarClassName: m.__invalid_channelAccessSelectRadioBar
    }],
    value: f,
    "aria-labelledby": t,
    disabled: n
  })
}