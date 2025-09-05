/** Chunk was on 62199 **/
/** chunk id: 7225, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => w
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk541822 = require("./541822.jsx"),
  Chunk442837 = require("./442837.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk213734 = require("./213734.jsx"),
  Chunk37148 = require("./37148.jsx"),
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
  Chunk465103 = require("./465103.js"),
  Chunk525751 = require("./525751.js");

function w(t) {
  let {
    onClose: e,
    transitionState: i,
    appId: w,
    guildId: Z
  } = t, y = (0, o.e7)([_.Z], () => _.Z.getApplication(w), [w]), [O, P] = r.useState(() => _.Z.isFetchingApplication(w) ? {
    status: 1
  } : {
    status: 0
  });
  r.useEffect(() => {
    0 === O.status && (P({
      status: 1
    }), u.ZP.fetchApplication(w).then(() => {
      P({
        status: 2
      })
    }).catch(t => {
      P({
        status: 3,
        error: t.message
      })
    }))
  }, [w, O.status]);
  let {
    subscriptions: T,
    otps: A
  } = (0, h.q)(w);
  if (null == y) return null;
  let I = j.intl.formatToPlainString(j.t.XDRjs7, {
      appName: y.name
    }),
    U = (0, n.jsx)("div", {
      className: v.icon,
      children: (0, n.jsx)(d.Z, {})
    }),
    k = f.wS ? (0, n.jsx)(p.hU, {
      "aria-label": j.intl.string(j.t.WqhZsr),
      icon: () => (0, n.jsx)(p.xPt, {
        size: "sm"
      }),
      onClick: () => {
        let t = "".concat(location.protocol, "//").concat(location.host).concat(m.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(w, b.GlobalDiscoveryAppsSections.STORE));
        (0, f.JG)(t, () => (0, p.showToast)((0, p.createToast)(j.intl.string(j.t["L/PwZW"]), p.ToastType.SUCCESS))), (0, x.X)(w, x.B.STORE_MODAL)
      },
      variant: "icon-only"
    }) : true;
  return (0, n.jsxs)(a.I, {
    transitionState: i,
    "aria-label": I,
    onClose: e,
    size: "xl",
    children: [(0, n.jsx)(l.x, {
      leading: U,
      title: I,
      trailing: k
    }), (0, n.jsx)(s.Z, {
      children: (0, n.jsx)("main", {
        className: C.bodyInner,
        children: (0, n.jsx)(S.AF, {
          app: y,
          guildId: Z,
          subscriptions: T,
          otps: A
        })
      })
    }), (0, n.jsx)(c.m, {
      children: (0, n.jsx)(p.Text, {
        variant: "text-md/normal",
        children: null != y.termsOfServiceUrl || null != y.privacyPolicyUrl ? (0, n.jsx)(g.Z, {
          termsOfServiceUrl: y.termsOfServiceUrl,
          privacyPolicyUrl: y.privacyPolicyUrl
        }) : j.intl.string(j.t["3ZY+0N"])
      })
    })]
  })
}