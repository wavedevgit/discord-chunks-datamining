/** Chunk was on 60667 **/
/** chunk id: 575684, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk212245 = require("./212245.js"),
  Chunk195043 = require("./195043.jsx"),
  Chunk329551 = require("./329551.js"),
  Chunk987384 = require("./987384.js"),
  Chunk413339 = require("./413339.js"),
  Chunk520999 = require("./520999.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk287809 = require("./287809.js"),
  Chunk531525 = require("./531525.js"),
  Chunk652215 = require("./652215.js");

function A(e) {
  let {
    isRedesign: t = false
  } = e, n = (0, s.p)(), A = i.useRef(false), f = (0, l.bG)([_.A], () => _.A.getVideoDeviceId()), [h, b] = i.useState((0, o.i)(p.default.getCurrentUser())), E = i.useRef(h);
  return i.useEffect(() => () => {
    A.current && (0, c._C)(E.current)
  }, []), (0, r.jsx)(a.x, {
    setting: m.H.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
    children: (0, r.jsx)(u.A, {
      selectedBackgroundOption: h,
      onSelectBackgroundOption: e => {
        A.current = true, E.current = e, b(e), (0, d.gB)(e, {
          location: n.location
        }).catch(g.tEg)
      },
      currentDeviceId: f,
      responsiveBackgroundOptions: t
    })
  })
}