/** Chunk was on 60449 **/
/** chunk id: 575684, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e) {
  let {
    isRedesign: t = false
  } = e, n = (0, r.p)(), p = s.useRef(false), m = (0, l.bG)([g.A], () => g.A.getVideoDeviceId()), [j, O] = s.useState((0, o.i)(h.default.getCurrentUser())), E = s.useRef(j);
  return s.useEffect(() => () => {
    p.current && (0, c._C)(E.current)
  }, []), (0, i.jsx)(a.x, {
    setting: x.H.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
    children: (0, i.jsx)(u.A, {
      selectedBackgroundOption: j,
      onSelectBackgroundOption: e => {
        p.current = true, E.current = e, O(e), (0, d.gB)(e, {
          location: n.location
        }).catch(A.tEg)
      },
      currentDeviceId: m,
      responsiveBackgroundOptions: t
    })
  })
}