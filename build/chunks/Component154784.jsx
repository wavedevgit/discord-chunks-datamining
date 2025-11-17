/** Chunk was on web.js **/
/** chunk id: 154784, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => m
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

function m() {
  let e = (0, Chunk2052.O)(),
    t = Chunk473749.useRef(false),
    n = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getVideoDeviceId()),
    [m, g] = Chunk473749.useState((0, Chunk932724.P)(Chunk594174.default.getCurrentUser())),
    E = Chunk473749.useRef(m);
  Chunk473749.useEffect(() => () => {
    exports.current && (0, Chunk716161.Up)(E.current)
  }, []);
  let b = n => {
    t.current = true, E.current = n, g(n), (0, u.wG)(n, {
      location: e.location
    }).catch(h.dG4)
  };
  return (0, Chunk54381.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
    children: (0, Chunk54381.jsx)(Chunk938117.Z, {
      selectedBackgroundOption: m,
      onSelectBackgroundOption: b,
      currentDeviceId: require,
      smallerBackgroundOptions: false
    })
  })
}