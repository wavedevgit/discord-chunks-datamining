/** Chunk was on 22477 **/
/** chunk id: 441811, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  l: () => v
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk43105 = require("./43105.jsx"),
  Chunk688810 = require("./688810.jsx"),
  Chunk626584 = require("./626584.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk531685 = require("./531685.js"),
  Chunk259065 = require("./259065.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk49999 = require("./49999.js"),
  Chunk927961 = require("./927961.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk439315 = require("./439315.js");
let g = new Chunk626584.A("DisplayNameStylesCoachmark");

function v(e) {
  let {
    markAsDismissed: t,
    targetElementRef: n,
    children: o
  } = e, {
    analyticsLocations: v
  } = (0, s.Ay)(), j = (0, l.useRef)(null), y = (0, i.bG)([u.A], () => u.A.isFocused()), _ = (0, l.useCallback)(() => {
    t(h.i.TAKE_ACTION), (0, d.openUserSettings)(c.X.PROFILE_PANEL, {
      section: p.nc_.PROFILE_CUSTOMIZATION,
      analyticsLocations: v
    }, () => {
      (0, m.L)({
        analyticsLocations: v
      })
    })
  }, [t, v]), A = (0, l.useCallback)(() => {
    t(h.i.USER_DISMISS)
  }, [t]);
  return (0, l.useEffect)(() => {
    var e, t, n;
    y && (null == (e = j.current) ? true : e.paused) ? null == (t = j.current) || t.play().catch(g.error) : y || null == (n = j.current) || n.pause()
  }, [y]), (0, a.jsxs)(a.Fragment, {
    children: [o, (0, a.jsx)(r.A, {
      targetElementRef: n,
      shouldShow: true,
      onRequestClose: A,
      align: "right",
      position: "top",
      caretConfig: {
        align: "center"
      },
      gradientColor: "nitro-pink",
      graphic: {
        type: "video",
        ref: j,
        src: b.A,
        aspectRatio: "21/9",
        loop: true
      },
      size: "lg",
      title: x.intl.string(f.default["1AE464"]),
      body: [x.intl.string(f.default.cNc1g9), x.intl.string(x.t["4JNXHG"])],
      actions: [{
        text: x.intl.string(x.t.uw9zI7),
        variant: "primary",
        onClick: _
      }]
    })]
  })
}