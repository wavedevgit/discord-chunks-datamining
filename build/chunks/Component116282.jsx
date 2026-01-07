/** Chunk was on 77069 **/
/** chunk id: 116282, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  R: () => S
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk159691 = require("./159691.js"),
  Chunk323183 = require("./323183.js"),
  Chunk5900 = require("./5900.js"),
  Chunk773275 = require("./773275.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk472057 = require("./472057.js");
let S = () => {
  let {
    isWeb: t,
    installationStatus: e,
    connectionStatus: n
  } = (0, a.xf)(), S = (0, l.useMemo)(() => {
    switch (n) {
      case r.Ij.CONNECTED:
        return o.intl.format(T.default.EVQZqy, {
          helpdeskArticle: u.w
        });
      case r.Ij.DISCONNECTED:
        return o.intl.format(T.default.zOCRv9, {
          helpdeskArticle: u.w
        });
      case r.Ij.ERROR:
        return o.intl.format(T.default.e9MkUw, {
          helpdeskArticle: u.w
        });
      default:
        return o.intl.format(T.default["Rr+ah3"], {
          helpdeskArticle: u.w
        })
    }
  }, [n]), c = (0, l.useMemo)(() => {
    if (t) return o.intl.format(T.default.z6v0w5, {
      helpdeskArticle: u.w
    });
    switch (e) {
      case r._n.ERROR:
        return o.intl.format(T.default.vjIpaK, {
          helpdeskArticle: u.w
        });
      case r._n.INSTALLING_TIMEOUT:
        return o.intl.format(T.default.QWyvkt, {
          helpdeskArticle: u.w
        });
      case r._n.INSTALLING:
        return o.intl.format(T.default.ZLrDvb, {
          helpdeskArticle: u.w
        });
      case r._n.WAITING_FOR_TERMS:
      case r._n.READY_FOR_LICENSE:
        return o.intl.format(T.default.rX9Z5g, {
          helpdeskArticle: u.w
        });
      case r._n.EXISTING_INSTALLATION:
        return o.intl.format(T.default.gOBU3K, {
          helpdeskArticle: u.w
        });
      case r._n.ZERO_TRUST:
        return o.intl.string(T.default.KVSUDs);
      case r._n.INSTALLED:
        return S;
      case r._n.NOT_INSTALLED:
      case r._n.UNKNOWN:
      default:
        return o.intl.format(T.default["Rr+ah3"], {
          helpdeskArticle: u.w
        })
    }
  }, [t, e, S]);
  return (0, i.jsx)(s.xvT, {
    variant: "text-sm/normal",
    color: "text-subtle",
    children: c
  })
}