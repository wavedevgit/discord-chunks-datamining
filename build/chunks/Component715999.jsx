/** Chunk was on 4670 **/
/** chunk id: 715999, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  q: () => T
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk732955 = require("./732955.js"),
  Chunk156186 = require("./156186.js"),
  Chunk602450 = require("./602450.js"),
  Chunk557571 = require("./557571.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk895431 = require("./895431.js");
let T = () => {
  let {
    isWeb: e,
    installationStatus: t,
    connectionStatus: i,
    perkAvailableToUser: T
  } = (0, u.lV)(), c = (0, l.useMemo)(() => {
    switch (i) {
      case a.l7.CONNECTED:
        return o.intl.format(d.default.EVQZqy, {
          helpdeskArticle: r.V
        });
      case a.l7.DISCONNECTED:
        return o.intl.format(d.default.zOCRv9, {
          helpdeskArticle: r.V
        });
      case a.l7.ERROR:
        return o.intl.format(d.default.e9MkUw, {
          helpdeskArticle: r.V
        });
      default:
        return o.intl.format(d.default.yL6mvx, {
          helpdeskArticle: r.V
        })
    }
  }, [i]), A = (0, l.useMemo)(() => {
    if (e) return o.intl.format(d.default.z6v0w5, {
      helpdeskArticle: r.V
    });
    if (!T) return o.intl.format(d.default.yL6mvx, {
      helpdeskArticle: r.V
    });
    switch (t) {
      case a.Lk.ERROR:
        return o.intl.format(d.default.vjIpaK, {
          helpdeskArticle: r.V
        });
      case a.Lk.INSTALLING_TIMEOUT:
        return o.intl.format(d.default.QWyvkt, {
          helpdeskArticle: r.V
        });
      case a.Lk.INSTALLING:
        return o.intl.format(d.default.ZLrDvb, {
          helpdeskArticle: r.V
        });
      case a.Lk.WAITING_FOR_TERMS:
      case a.Lk.READY_FOR_LICENSE:
        return o.intl.format(d.default.rX9Z5g, {
          helpdeskArticle: r.V
        });
      case a.Lk.EXISTING_INSTALLATION:
        return o.intl.format(d.default.gOBU3K, {
          helpdeskArticle: r.V
        });
      case a.Lk.ZERO_TRUST:
        return o.intl.string(d.default.KVSUDs);
      case a.Lk.INSTALLED:
        return c;
      case a.Lk.NOT_INSTALLED:
      case a.Lk.UNKNOWN:
      default:
        return o.intl.format(d.default.yL6mvx, {
          helpdeskArticle: r.V
        })
    }
  }, [e, t, c, T]);
  return (0, n.jsx)(s.EYj, {
    variant: "text-sm/normal",
    color: "text-subtle",
    children: A
  })
}