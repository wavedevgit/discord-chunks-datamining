/** Chunk was on 65672 **/
/** chunk id: 7225, original params: e,t,c (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk374481 = require("./374481.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk728345 = require("./728345.js"),
  Chunk812206 = require("./812206.js"),
  Chunk886176 = require("./886176.jsx"),
  Chunk572004 = require("./572004.js"),
  Chunk504211 = require("./504211.js"),
  Chunk283836 = require("./283836.js"),
  Chunk507608 = require("./507608.jsx"),
  Chunk533159 = require("./533159.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk979007 = require("./979007.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk426931 = require("./426931.js"),
  Chunk51766 = require("./51766.js");

function v(e) {
  let {
    onClose: t,
    transitionState: c,
    appId: v,
    guildId: w
  } = e, C = (0, s.e7)([d.Z], () => d.Z.getApplication(v), [v]), [Z, y] = i.useState(() => d.Z.isFetchingApplication(v) ? {
    status: 1
  } : {
    status: 0
  });
  i.useEffect(() => {
    0 === Z.status && (y({
      status: 1
    }), l.ZP.fetchApplication(v).then(() => {
      y({
        status: 2
      })
    }).catch(e => {
      y({
        status: 3,
        error: e.message
      })
    }))
  }, [v, Z.status]);
  let {
    subscriptions: O,
    otps: P
  } = (0, b.q)(v);
  if (null == C) return null;
  let T = g.intl.formatToPlainString(g.t.XDRjs5, {
      appName: C.name
    }),
    A = (0, a.jsx)("div", {
      className: m.icon,
      children: (0, a.jsx)(p.Z, {})
    }),
    I = u.wS ? (0, a.jsx)(o.hU, {
      "aria-label": g.intl.string(g.t.WqhZss),
      icon: () => (0, a.jsx)(o.xPt, {
        size: "sm"
      }),
      onClick: () => {
        let e = "".concat(location.protocol, "//").concat(location.host).concat(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(v, _.GlobalDiscoveryAppsSections.STORE));
        (0, u.JG)(e, () => (0, o.showToast)((0, o.createToast)(g.intl.string(g.t["L/PwZf"]), o.ToastType.SUCCESS))), (0, f.X)(v, f.B.STORE_MODAL)
      },
      variant: "icon-only"
    }) : true;
  return (0, a.jsxs)(r.IX, {
    transitionState: c,
    "aria-label": T,
    onClose: t,
    size: "xxl",
    children: [(0, a.jsx)(r.xBx, {
      leading: A,
      title: T,
      trailing: I
    }), (0, a.jsx)(n.Z, {
      children: (0, a.jsx)("main", {
        className: j.bodyInner,
        children: (0, a.jsx)(x.AF, {
          app: C,
          guildId: w,
          subscriptions: O,
          otps: P
        })
      })
    }), (0, a.jsx)(r.mzw, {
      children: (0, a.jsx)(o.Text, {
        variant: "text-md/normal",
        children: null != C.termsOfServiceUrl || null != C.privacyPolicyUrl ? (0, a.jsx)(h.Z, {
          termsOfServiceUrl: C.termsOfServiceUrl,
          privacyPolicyUrl: C.privacyPolicyUrl
        }) : g.intl.string(g.t["3ZY+0D"])
      })
    })]
  })
}