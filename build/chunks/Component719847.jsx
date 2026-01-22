/** Chunk was on 80212 **/
/** chunk id: 719847, original params: t,a,e (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk991660 = require("./991660.jsx"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk627363 = require("./627363.js"),
  Chunk587895 = require("./587895.js"),
  Chunk575926 = require("./575926.jsx"),
  Chunk957565 = require("./957565.js"),
  Chunk997997 = require("./997997.js"),
  Chunk123791 = require("./123791.js"),
  Chunk55926 = require("./55926.jsx"),
  Chunk816709 = require("./816709.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk435220 = require("./435220.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk801059 = require("./801059.js"),
  Chunk22789 = require("./22789.js");

function v(t) {
  let {
    onClose: a,
    transitionState: e,
    appId: v,
    guildId: C
  } = t, y = (0, r.bG)([d.A], () => d.A.getApplication(v), [v]), [T, g] = i.useState(() => d.A.isFetchingApplication(v) ? {
    status: 1
  } : {
    status: 0
  });
  i.useEffect(() => {
    0 === T.status && (g({
      status: 1
    }), o.Ay.fetchApplication(v).then(() => {
      g({
        status: 2
      })
    }).catch(t => {
      g({
        status: 3,
        error: t.message
      })
    }))
  }, [v, T.status]);
  let {
    subscriptions: E,
    otps: O
  } = (0, b.C)(v);
  if (null == y) return null;
  let P = j.intl.formatToPlainString(j.t.XDRjs5, {
      appName: y.name
    }),
    U = (0, s.jsx)("div", {
      className: m.K,
      children: (0, s.jsx)(p.h, {})
    }),
    k = f.p5 ? (0, s.jsx)(n.K0, {
      "aria-label": j.intl.string(j.t.WqhZss),
      icon: () => (0, s.jsx)(n.qYV, {
        size: "sm"
      }),
      onClick: () => {
        let t = "".concat(location.protocol, "//").concat(location.host).concat(_.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(v, S.GlobalDiscoveryAppsSections.STORE));
        (0, f.C)(t, () => (0, n.showToast)((0, n.createToast)(j.intl.string(j.t["L/PwZf"]), n.ToastType.SUCCESS))), (0, u.K)(v, u.C.STORE_MODAL)
      },
      variant: "icon-only"
    }) : true;
  return (0, s.jsxs)(l.dWK, {
    transitionState: e,
    "aria-label": P,
    onClose: a,
    size: "xxl",
    children: [(0, s.jsx)(l.rQ0, {
      leading: U,
      title: P,
      trailing: k
    }), (0, s.jsx)(c.A, {
      children: (0, s.jsx)("main", {
        className: A.bodyInner,
        children: (0, s.jsx)(x.Mp, {
          app: y,
          guildId: C,
          subscriptions: E,
          otps: O
        })
      })
    }), (0, s.jsx)(l.jlY, {
      children: (0, s.jsx)(n.Text, {
        variant: "text-md/normal",
        children: null != y.termsOfServiceUrl || null != y.privacyPolicyUrl ? (0, s.jsx)(h.A, {
          termsOfServiceUrl: y.termsOfServiceUrl,
          privacyPolicyUrl: y.privacyPolicyUrl
        }) : j.intl.string(j.t["3ZY+0D"])
      })
    })]
  })
}