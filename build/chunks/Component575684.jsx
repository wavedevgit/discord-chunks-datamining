/** Chunk was on web.js **/
/** chunk id: 575684, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => m
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

function m(e) {
  let {
    isRedesign: t = false
  } = e, n = (0, s.p)(), m = i.useRef(false), g = (0, a.bG)([f.A], () => f.A.getVideoDeviceId()), [E, b] = i.useState((0, l.i)(p.default.getCurrentUser())), y = i.useRef(E);
  i.useEffect(() => () => {
    m.current && (0, c._C)(y.current)
  }, []);
  let O = e => {
    m.current = true, y.current = e, b(e), (0, u.gB)(e, {
      location: n.location
    }).catch(h.tEg)
  };
  return (0, r.jsx)(o.x, {
    setting: _.H.VOICE_AND_VIDEO_VIDEO_BACKGROUND,
    children: (0, r.jsx)(d.A, {
      selectedBackgroundOption: E,
      onSelectBackgroundOption: O,
      currentDeviceId: g,
      responsiveBackgroundOptions: t
    })
  })
}