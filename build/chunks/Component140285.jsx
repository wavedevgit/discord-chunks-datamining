/** Chunk was on 5533 **/
/** chunk id: 140285, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk727843 = require("./727843.jsx"),
  Chunk944537 = require("./944537.js"),
  Chunk290348 = require("./290348.js"),
  Chunk91354 = require("./91354.jsx"),
  Chunk662961 = require("./662961.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk577459 = require("./577459.js");

function m(e) {
  let {
    "aria-labelledby": t,
    disabled: n = false
  } = e, {
    editStateId: m,
    guildId: g
  } = (0, l.N)(), [p, h] = s.GP(m, g);
  return (0, r.jsx)(i.FXm, {
    className: u.__invalid_channelAccessSelect,
    radioItemClassName: u.__invalid_channelAccessSelectRadioButton,
    withTransparentBackground: true,
    size: i.FXm.Sizes.NOT_SET,
    onChange: e => {
      let {
        value: t
      } = e;
      return h(t)
    },
    options: [{
      name: d.intl.string(d.t["vs2T+P"]),
      value: a.I.SOME_CHANNELS_ACCESS,
      icon: (0, i.GSL)(c.Z),
      radioBarClassName: u.__invalid_channelAccessSelectRadioBar
    }, {
      name: d.intl.string(d.t.l4Tr7e),
      value: a.I.ALL_CHANNELS_ACCESS,
      icon: (0, i.GSL)(o.Z),
      radioBarClassName: u.__invalid_channelAccessSelectRadioBar
    }],
    value: p,
    "aria-labelledby": t,
    disabled: n
  })
}