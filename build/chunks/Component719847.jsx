/** Chunk was on 80212 **/
/** chunk id: 719847, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  default: () => A
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

function A(t) {
  let {
    onClose: e,
    transitionState: s,
    appId: A,
    guildId: b
  } = t, v = (0, c.bG)([p.A], () => p.A.getApplication(A), [A]), [y, T] = a.useState(() => p.A.isFetchingApplication(A) ? {
    status: 1
  } : {
    status: 0
  });
  a.useEffect(() => {
    0 === y.status && (T({
      status: 1
    }), l.Ay.fetchApplication(A).then(() => {
      T({
        status: 2
      })
    }).catch(t => {
      T({
        status: 3,
        error: t.message
      })
    }))
  }, [A, y.status]);
  let {
    subscriptions: E,
    otps: O
  } = (0, x.C)(A);
  if (null == v) return null;
  let P = g.intl.formatToPlainString(g.t.XDRjs5, {
      appName: v.name
    }),
    k = (0, i.jsx)("div", {
      className: j.K,
      children: (0, i.jsx)(_.h, {})
    }),
    w = d.p5 ? (0, i.jsx)(o.K0, {
      "aria-label": g.intl.string(g.t.WqhZss),
      icon: () => (0, i.jsx)(o.qYV, {
        size: "sm"
      }),
      onClick: () => {
        let t = "".concat(location.protocol, "//").concat(location.host).concat(f.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(A, m.GlobalDiscoveryAppsSections.STORE));
        (0, d.C)(t, () => (0, o.showToast)((0, o.createToast)(g.intl.string(g.t["L/PwZf"]), o.ToastType.SUCCESS))), (0, u.K)(A, u.C.STORE_MODAL)
      },
      variant: "icon-only"
    }) : true;
  return (0, i.jsxs)(n.dWK, {
    transitionState: s,
    "aria-label": P,
    onClose: e,
    size: "xxl",
    children: [(0, i.jsx)(n.rQ0, {
      leading: k,
      title: P,
      trailing: w
    }), (0, i.jsx)(r.A, {
      children: (0, i.jsx)("main", {
        className: C.bodyInner,
        children: (0, i.jsx)(h.Mp, {
          app: v,
          guildId: b,
          subscriptions: E,
          otps: O
        })
      })
    }), (0, i.jsx)(n.jlY, {
      children: (0, i.jsx)(o.Text, {
        variant: "text-md/normal",
        children: null != v.termsOfServiceUrl || null != v.privacyPolicyUrl ? (0, i.jsx)(S.A, {
          termsOfServiceUrl: v.termsOfServiceUrl,
          privacyPolicyUrl: v.privacyPolicyUrl
        }) : g.intl.string(g.t["3ZY+0D"])
      })
    })]
  })
}