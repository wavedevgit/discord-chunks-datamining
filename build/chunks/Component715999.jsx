/** Chunk was on 28979 **/
/** chunk id: 715999, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  q: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk156186 = require("./156186.js"),
  Chunk602450 = require("./602450.js"),
  Chunk557571 = require("./557571.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk895431 = require("./895431.js");
let d = () => {
  let {
    isWeb: t,
    installationStatus: e,
    connectionStatus: i,
    perkAvailableToUser: d
  } = (0, a.lV)(), A = (0, l.useMemo)(() => {
    switch (i) {
      case u.l7.CONNECTED:
        return o.intl.format(T.default.EVQZqy, {
          helpdeskArticle: r.V
        });
      case u.l7.DISCONNECTED:
        return o.intl.format(T.default.zOCRv9, {
          helpdeskArticle: r.V
        });
      case u.l7.ERROR:
        return o.intl.format(T.default.e9MkUw, {
          helpdeskArticle: r.V
        });
      default:
        return o.intl.format(T.default.yL6mvx, {
          helpdeskArticle: r.V
        })
    }
  }, [i]), S = (0, l.useMemo)(() => {
    if (t) return o.intl.format(T.default.z6v0w5, {
      helpdeskArticle: r.V
    });
    if (!d) return o.intl.format(T.default.yL6mvx, {
      helpdeskArticle: r.V
    });
    switch (e) {
      case u.Lk.ERROR:
        return o.intl.format(T.default.vjIpaK, {
          helpdeskArticle: r.V
        });
      case u.Lk.INSTALLING_TIMEOUT:
        return o.intl.format(T.default.QWyvkt, {
          helpdeskArticle: r.V
        });
      case u.Lk.INSTALLING:
        return o.intl.format(T.default.ZLrDvb, {
          helpdeskArticle: r.V
        });
      case u.Lk.WAITING_FOR_TERMS:
      case u.Lk.READY_FOR_LICENSE:
        return o.intl.format(T.default.rX9Z5g, {
          helpdeskArticle: r.V
        });
      case u.Lk.EXISTING_INSTALLATION:
        return o.intl.format(T.default.gOBU3K, {
          helpdeskArticle: r.V
        });
      case u.Lk.ZERO_TRUST:
        return o.intl.string(T.default.KVSUDs);
      case u.Lk.INSTALLED:
        return A;
      case u.Lk.NOT_INSTALLED:
      case u.Lk.UNKNOWN:
      default:
        return o.intl.format(T.default.yL6mvx, {
          helpdeskArticle: r.V
        })
    }
  }, [t, e, A, d]);
  return (0, n.jsx)(s.EYj, {
    variant: "text-sm/normal",
    color: "text-subtle",
    children: S
  })
}