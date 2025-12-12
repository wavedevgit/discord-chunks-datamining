/** Chunk was on web.js **/
/** chunk id: 154784, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk2052 = require("./2052.js"),
  Chunk921801 = require("./921801.js"),
  Chunk932724 = require("./932724.js"),
  Chunk716161 = require("./716161.js"),
  Chunk672339 = require("./672339.js"),
  Chunk938117 = require("./938117.jsx"),
  Chunk131951 = require("./131951.js"),
  Chunk594174 = require("./594174.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js");

function h(e) {
  let {
    isRedesign: t = false
  } = e, n = (0, a.O)(), h = i.useRef(false), g = (0, o.e7)([f.Z], () => f.Z.getVideoDeviceId()), [E, b] = i.useState((0, l.P)(p.default.getCurrentUser())), y = i.useRef(E);
  i.useEffect(() => () => {
    h.current && (0, c.Up)(y.current)
  }, []);
  let O = e => {
    h.current = true, y.current = e, b(e), (0, u.wG)(e, {
      location: n.location
    }).catch(m.dG4)
  };
  return (0, r.jsx)(s.F, {
    setting: _.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
    children: (0, r.jsx)(d.Z, {
      selectedBackgroundOption: E,
      onSelectBackgroundOption: O,
      currentDeviceId: g,
      responsiveBackgroundOptions: t
    })
  })
}