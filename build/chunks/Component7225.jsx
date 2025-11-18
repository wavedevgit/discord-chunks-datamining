/** Chunk was on 15351 **/
/** chunk id: 7225, original params: t,e,i (module,exports,require) **/
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
  Chunk58954 = require("./58954.js"),
  Chunk815847 = require("./815847.js");

function v(t) {
  let {
    onClose: e,
    transitionState: i,
    appId: v,
    guildId: w
  } = t, C = (0, o.e7)([p.Z], () => p.Z.getApplication(v), [v]), [Z, y] = r.useState(() => p.Z.isFetchingApplication(v) ? {
    status: 1
  } : {
    status: 0
  });
  r.useEffect(() => {
    0 === Z.status && (y({
      status: 1
    }), l.ZP.fetchApplication(v).then(() => {
      y({
        status: 2
      })
    }).catch(t => {
      y({
        status: 3,
        error: t.message
      })
    }))
  }, [v, Z.status]);
  let {
    subscriptions: O,
    otps: P
  } = (0, x.q)(v);
  if (null == C) return null;
  let T = m.intl.formatToPlainString(m.t.XDRjs5, {
      appName: C.name
    }),
    A = (0, n.jsx)("div", {
      className: b.icon,
      children: (0, n.jsx)(u.Z, {})
    }),
    I = d.wS ? (0, n.jsx)(c.hU, {
      "aria-label": m.intl.string(m.t.WqhZss),
      icon: () => (0, n.jsx)(c.xPt, {
        size: "sm"
      }),
      onClick: () => {
        let t = "".concat(location.protocol, "//").concat(location.host).concat(S.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(v, g.GlobalDiscoveryAppsSections.STORE));
        (0, d.JG)(t, () => (0, c.showToast)((0, c.createToast)(m.intl.string(m.t["L/PwZf"]), c.ToastType.SUCCESS))), (0, _.X)(v, _.B.STORE_MODAL)
      },
      variant: "icon-only"
    }) : true;
  return (0, n.jsxs)(s.IX, {
    transitionState: i,
    "aria-label": T,
    onClose: e,
    size: "xxl",
    children: [(0, n.jsx)(s.xBx, {
      leading: A,
      title: T,
      trailing: I
    }), (0, n.jsx)(a.Z, {
      children: (0, n.jsx)("main", {
        className: j.bodyInner,
        children: (0, n.jsx)(f.AF, {
          app: C,
          guildId: w,
          subscriptions: O,
          otps: P
        })
      })
    }), (0, n.jsx)(s.mzw, {
      children: (0, n.jsx)(c.Text, {
        variant: "text-md/normal",
        children: null != C.termsOfServiceUrl || null != C.privacyPolicyUrl ? (0, n.jsx)(h.Z, {
          termsOfServiceUrl: C.termsOfServiceUrl,
          privacyPolicyUrl: C.privacyPolicyUrl
        }) : m.intl.string(m.t["3ZY+0D"])
      })
    })]
  })
}