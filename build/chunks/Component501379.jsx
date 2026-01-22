/** Chunk was on 22477 **/
/** chunk id: 501379, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk932433 = require("./932433.js"),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk855522 = require("./855522.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk773669 = require("./773669.js"),
  Chunk231545 = require("./231545.jsx"),
  Chunk708403 = require("./708403.jsx"),
  Chunk985018 = require("./985018.jsx");

function x() {
  let e = (0, c.bG)([m.default], () => m.default.locale),
    [t, n] = l.useState(),
    r = (0, i.runtimeHashMessageKey)(null != t ? t : ""),
    x = l.useMemo(() => f.t[r], [r]);
  return (0, a.jsxs)("div", {
    children: [(0, a.jsxs)(u.Ay, {
      children: [(0, a.jsx)(u.Ay.Icon, {
        icon: d.UaP,
        tooltip: "Locale"
      }), (0, a.jsx)(u.Ay.Title, {
        children: "Locale"
      })]
    }), (0, a.jsxs)(h.OA, {
      children: [(0, a.jsx)(h.mA, {
        name: "Active System",
        children: "@discord/intl"
      }), (0, a.jsx)(h.mA, {
        name: "App",
        children: e
      }), (0, a.jsx)(h.mA, {
        name: "System",
        children: f.systemLocale
      }), (0, a.jsx)(h.mA, {
        name: "@discord/intl",
        children: f.intl.currentLocale
      }), (0, a.jsx)(h.mA, {
        name: "common i18n",
        children: o.A.getLocale()
      }), (0, a.jsx)(h.mA, {
        name: "Moment",
        children: s().locale()
      })]
    }), (0, a.jsxs)(u.Ay, {
      children: [(0, a.jsx)(u.Ay.Icon, {
        icon: d.UaP,
        tooltip: "Messages"
      }), (0, a.jsx)(u.Ay.Title, {
        children: "New System Messages"
      })]
    }), (0, a.jsx)(h.OA, {
      children: (0, a.jsx)(h.mA, {
        name: "Unique Rendered Main Messages",
        children: Object.keys(f.t).length
      })
    }), (0, a.jsx)("div", {
      style: {
        margin: 16
      },
      children: (0, a.jsx)(d.ksK, {
        onChange: function(e) {
          n(e)
        },
        name: "Message name",
        placeholder: "Find a message"
      })
    }), (0, a.jsxs)(h.OA, {
      children: [(0, a.jsx)(h.mA, {
        name: "Hashed key",
        children: r
      }), (0, a.jsx)(h.mA, {
        name: "Exists?",
        children: null != x ? "yes" : "no"
      })]
    }), (0, a.jsx)(p.A, {
      data: null == x ? true : x(e)
    })]
  })
}