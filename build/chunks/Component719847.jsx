/** Chunk was on 92201 **/
/** chunk id: 719847, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => j
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

function j(e) {
  let {
    onClose: t,
    transitionState: r,
    appId: j,
    guildId: O
  } = e, w = (0, o.bG)([C.A], () => C.A.getApplication(j), [j]), [m, S] = n.useState(() => C.A.isFetchingApplication(j) ? {
    status: 1
  } : {
    status: 0
  });
  n.useEffect(() => {
    0 === m.status && (S({
      status: 1
    }), a.Ay.fetchApplication(j).then(() => {
      S({
        status: 2
      })
    }).catch(e => {
      S({
        status: 3,
        error: e.message
      })
    }))
  }, [j, m.status]);
  let {
    subscriptions: v,
    otps: P
  } = (0, f.C)(j);
  if (null == w) return null;
  let A = y.intl.formatToPlainString(y.t.XDRjs5, {
      appName: w.name
    }),
    D = (0, i.jsx)("div", {
      className: L.K,
      children: (0, i.jsx)(p.h, {})
    }),
    E = d.p5 ? (0, i.jsx)(c.K0, {
      "aria-label": y.intl.string(y.t.WqhZss),
      icon: () => (0, i.jsx)(c.qYV, {
        size: "sm"
      }),
      onClick: () => {
        let e = "".concat(location.protocol, "//").concat(location.host).concat(_.BVt.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(j, g.GlobalDiscoveryAppsSections.STORE));
        (0, d.C)(e, () => (0, c.showToast)((0, c.createToast)(y.intl.string(y.t["L/PwZf"]), c.ToastType.SUCCESS))), (0, u.K)(j, u.C.STORE_MODAL)
      },
      variant: "icon-only"
    }) : true;
  return (0, i.jsxs)(s.dWK, {
    transitionState: r,
    "aria-label": A,
    onClose: t,
    size: "xxl",
    children: [(0, i.jsx)(s.rQ0, {
      leading: D,
      title: A,
      trailing: E
    }), (0, i.jsx)(l.A, {
      children: (0, i.jsx)("main", {
        className: x.bodyInner,
        children: (0, i.jsx)(b.Mp, {
          app: w,
          guildId: O,
          subscriptions: v,
          otps: P
        })
      })
    }), (0, i.jsx)(s.jlY, {
      children: (0, i.jsx)(c.Text, {
        variant: "text-md/normal",
        children: null != w.termsOfServiceUrl || null != w.privacyPolicyUrl ? (0, i.jsx)(h.A, {
          termsOfServiceUrl: w.termsOfServiceUrl,
          privacyPolicyUrl: w.privacyPolicyUrl
        }) : y.intl.string(y.t["3ZY+0D"])
      })
    })]
  })
}