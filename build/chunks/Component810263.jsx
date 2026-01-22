/** Chunk was on 54469 **/
/** chunk id: 810263, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk397927 = require("./397927.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk253932 = require("./253932.js"),
  Chunk260509 = require("./260509.js"),
  Chunk486020 = require("./486020.js"),
  Chunk957565 = require("./957565.js"),
  Chunk486503 = require("./486503.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function h(e) {
  let t = c.Q_.useSetting(),
    {
      tidaWebformEnabled: n
    } = p.A.useExperiment({
      location: "useCopyServerInfoItem"
    }, {
      autoTrackExposure: false
    }),
    s = (0, o.A)({
      id: e.id,
      label: A.intl.string(A.t["94lLD7"])
    }),
    h = r.useCallback(() => {
      let t = (0, u.Iv)(e, b.XAf, true);
      l()(null != t, "cannot copy null icon URL"), (0, g.C)(t)
    }, [e]),
    O = r.useCallback(() => {
      let t = d.Ay.getGuildBannerURL({
        id: e.id,
        banner: e.banner
      }, true);
      l()(null != t, "cannot copy null banner URL"), (0, g.C)(t)
    }, [e]),
    y = r.useCallback(() => {
      (0, g.C)(e.id)
    }, [e.id]);
  return !__OVERLAY__ && t && g.p5 && null != e.id ? n ? (0, i.jsxs)(a.Drp, {
    id: "copy-server-info",
    label: A.intl.string(A.t["rka/KS"]),
    children: [(0, i.jsx)(a.Drp, {
      id: "copy-server-id",
      label: A.intl.string(A.t["94lLD7"]),
      action: y,
      icon: a.L9S
    }), null != e.icon && (0, i.jsx)(a.Drp, {
      id: "copy-server-icon-link",
      label: A.intl.string(A.t["7H30wR"]),
      action: h
    }), null != e.banner && (0, i.jsx)(a.Drp, {
      id: "copy-server-banner-link",
      label: A.intl.string(A.t["2FoUnk"]),
      action: O
    })]
  }) : s : null
}