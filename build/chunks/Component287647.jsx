/** Chunk was on 99904 **/
/** chunk id: 287647, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => v
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk264418 = require("./264418.jsx"),
  Chunk906732 = require("./906732.jsx"),
  Chunk710845 = require("./710845.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk451478 = require("./451478.js"),
  Chunk829716 = require("./829716.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk352609 = require("./352609.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk374104 = require("./374104.js");
let b = new Chunk710845.Z("DisplayNameStylesCoachmark");

function v(e) {
  let {
    markAsDismissed: t,
    targetElementRef: n,
    children: o
  } = e, {
    analyticsLocations: v
  } = (0, s.ZP)(), j = (0, r.useRef)(null), _ = (0, i.e7)([u.Z], () => u.Z.isFocused()), y = (0, r.useCallback)(() => {
    t(h.L.TAKE_ACTION), (0, d.openUserSettings)(c.n.PROFILE_PANEL, {
      section: p.oAB.PROFILE_CUSTOMIZATION,
      analyticsLocations: v
    }, () => {
      (0, m.I)({
        analyticsLocations: v
      })
    })
  }, [t, v]), C = (0, r.useCallback)(() => {
    t(h.L.USER_DISMISS)
  }, [t]);
  return (0, r.useEffect)(() => {
    var e, t, n;
    _ && (null == (e = j.current) ? true : e.paused) ? null == (t = j.current) || t.play().catch(b.error) : _ || null == (n = j.current) || n.pause()
  }, [_]), (0, a.jsxs)(a.Fragment, {
    children: [o, (0, a.jsx)(l.J, {
      targetElementRef: n,
      shouldShow: true,
      onRequestClose: C,
      align: "right",
      position: "top",
      caretConfig: {
        align: "center"
      },
      gradientColor: "nitro-pink",
      graphic: {
        type: "video",
        ref: j,
        src: f.Z,
        aspectRatio: "21/9",
        loop: true
      },
      size: "lg",
      title: g.intl.string(x.default["1AE464"]),
      body: [g.intl.string(x.default.cNc1g9), g.intl.string(g.t["4JNXHG"])],
      actions: [{
        text: g.intl.string(g.t.uw9zI7),
        variant: "primary",
        onClick: y
      }]
    })]
  })
}