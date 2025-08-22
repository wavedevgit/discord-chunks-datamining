/** Chunk was on 91488 **/
/** chunk id: 118122, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk560067 = require("./560067.js"),
  Chunk451603 = require("./451603.js"),
  Chunk885714 = require("./885714.jsx"),
  Chunk155409 = require("./155409.jsx"),
  Chunk601964 = require("./601964.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk40153 = require("./40153.jsx"),
  Chunk603592 = require("./603592.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk675999 = require("./675999.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk816827 = require("./816827.js");
let v = {
  origin: {
    x: false,
    y: 0
  },
  targetWidth: 48,
  targetHeight: 48,
  offset: {
    x: 0,
    y: 0
  }
};

function x(e) {
  (0, a.jW)(e, async () => {
    let {
      default: e
    } = await n.e("9606").then(n.bind(n, 987578));
    return t => (0, r.jsx)(e, function(e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
          r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
          return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
          var r;
          r = n[t], t in e ? Object.defineProperty(e, t, {
            value: r,
            enumerable: true,
            configurable: true,
            writable: true
          }) : e[t] = r
        })
      }
      return e
    }({}, t))
  })
}

function C(e) {
  let {
    disableTooltip: t,
    lastTargetNode: n
  } = e, a = (0, l.Wu)([f.Z], () => f.Z.getGuildsArray()), C = (0, l.e7)([g.default], () => g.default.getCurrentUser()), E = i.useMemo(() => a.some(e => (0, h.eM)(e, C)), [a, C]), S = (0, o.s9z)(e => (0, o.DEQ)(e, y.PU)), {
    analyticsLocations: P
  } = (0, s.ZP)(), I = (0, r.jsx)(b.Z, {
    showPill: false,
    id: "create-join-button",
    onClick: () => {
      (0, u.yU)() ? (0, d.Z)({
        analyticsSource: {
          page: O.Sbl.CREATE_JOIN_GUILD_MODAL
        },
        analyticsLocation: {
          page: O.Sbl.CREATE_JOIN_GUILD_MODAL,
          section: O.jXE.GUILD_CAP_UPSELL_MODAL
        },
        analyticsLocations: P
      }) : c.Z.openCreateGuildModal({
        location: "Guild List"
      })
    },
    selected: S,
    onContextMenu: x,
    tooltip: _.intl.string(_.t.l5WIbW),
    icon: o.oFk
  });
  return t ? I : (0, r.jsx)("div", {
    className: j.tutorialContainer,
    children: (0, r.jsxs)(p.Z, {
      tutorialId: E ? "create-more-servers" : "create-first-server",
      inlineSpecs: v,
      position: "right",
      children: [I, null != n && (0, r.jsx)(m.ZP, {
        name: _.intl.string(_.t["45xjMz"]),
        targetNode: n,
        below: true,
        noCombine: true
      })]
    })
  })
}