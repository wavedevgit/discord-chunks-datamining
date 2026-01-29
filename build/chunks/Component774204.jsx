/** Chunk was on 4670 **/
/** chunk id: 774204, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  q: () => I
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk212245 = require("./212245.js"),
  Chunk419954 = require("./419954.js"),
  Chunk329551 = require("./329551.js"),
  Chunk987384 = require("./987384.js"),
  Chunk413339 = require("./413339.js"),
  Chunk952572 = require("./952572.js"),
  Chunk520999 = require("./520999.jsx"),
  Chunk430452 = require("./430452.js"),
  Chunk287809 = require("./287809.js"),
  Chunk780964 = require("./780964.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let I = (0, Chunk419954.E2)(Chunk780964.X.CAMERA_BACKGROUND_SETTING, {
  useSearchTerms: () => [g.intl.string(g.t.lZTUPs)],
  usePredicate: Chunk952572.A,
  Component: function() {
    let e = (0, r.p)(),
      t = l.useRef(false),
      i = (0, s.bG)([A.A], () => A.A.getVideoDeviceId()),
      [a, T] = l.useState((0, u.i)(S.default.getCurrentUser())),
      _ = l.useRef(a);
    return l.useEffect(() => () => {
      t.current && (0, o._C)(_.current)
    }, []), (0, n.jsx)(c.A, {
      selectedBackgroundOption: a,
      onSelectBackgroundOption: i => {
        t.current = true, _.current = i, T(i), (0, d.gB)(i, {
          location: e.location
        }).catch(E.tEg)
      },
      currentDeviceId: i
    })
  }
})