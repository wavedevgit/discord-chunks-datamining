/** Chunk was on 20501 **/
/** chunk id: 154784, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function f() {
  let e = (0, Chunk2052.O)(),
    t = Chunk73800.useRef(false),
    n = (0, Chunk442837.e7)([Chunk131951.Z], () => Chunk131951.Z.getVideoDeviceId()),
    [f, b] = Chunk73800.useState((0, Chunk932724.P)(Chunk594174.default.getCurrentUser())),
    x = Chunk73800.useRef(f);
  return Chunk73800.useEffect(() => () => {
    exports.current && (0, Chunk716161.Up)(x.current)
  }, []), (0, Chunk255367.jsx)(Chunk921801.F, {
    setting: Chunk726985.s6.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
    children: (0, Chunk255367.jsx)(Chunk938117.Z, {
      selectedBackgroundOption: f,
      onSelectBackgroundOption: n => {
        t.current = true, x.current = n, b(n), (0, d.wG)(n, {
          location: e.location
        }).catch(h.dG4)
      },
      currentDeviceId: require,
      smallerBackgroundOptions: false
    })
  })
}