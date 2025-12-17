/** Chunk was on 33213 **/
/** chunk id: 518858, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk695346 = require("./695346.js"),
  Chunk601964 = require("./601964.js"),
  Chunk768581 = require("./768581.js"),
  Chunk572004 = require("./572004.js"),
  Chunk796762 = require("./796762.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function h(e) {
  let t = o.Sb.useSetting(),
    {
      tidaWebformEnabled: n
    } = b.Z.useExperiment({
      location: "useCopyServerInfoItem"
    }, {
      autoTrackExposure: false
    }),
    s = (0, c.Z)({
      id: e.id,
      label: S.intl.string(S.t["94lLD7"])
    }),
    h = r.useCallback(() => {
      let t = (0, u.EB)(e, p.dGM, true);
      l()(null != t, "cannot copy null icon URL"), (0, g.JG)(t)
    }, [e]),
    f = r.useCallback(() => {
      let t = d.ZP.getGuildBannerURL({
        id: e.id,
        banner: e.banner
      }, true);
      l()(null != t, "cannot copy null banner URL"), (0, g.JG)(t)
    }, [e]),
    E = r.useCallback(() => {
      (0, g.JG)(e.id)
    }, [e.id]);
  return !__OVERLAY__ && t && g.wS && null != e.id ? n ? (0, i.jsxs)(a.sNh, {
    id: "copy-server-info",
    label: S.intl.string(S.t["rka/KS"]),
    children: [(0, i.jsx)(a.sNh, {
      id: "copy-server-id",
      label: S.intl.string(S.t["94lLD7"]),
      action: E,
      icon: a.VuL
    }), null != e.icon && (0, i.jsx)(a.sNh, {
      id: "copy-server-icon-link",
      label: S.intl.string(S.t["7H30wR"]),
      action: h
    }), null != e.banner && (0, i.jsx)(a.sNh, {
      id: "copy-server-banner-link",
      label: S.intl.string(S.t["2FoUnk"]),
      action: f
    })]
  }) : s : null
}