/** Chunk was on 56710 **/
/** chunk id: 118122, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
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
let j = {
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

function C(e) {
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

function x(e) {
  let {
    disableTooltip: t,
    lastTargetNode: n
  } = e, a = (0, l.Wu)([f.Z], () => f.Z.getGuildsArray()), x = (0, l.e7)([g.default], () => g.default.getCurrentUser()), E = i.useMemo(() => a.some(e => (0, h.eM)(e, x)), [a, x]), S = (0, o.s9z)(e => (0, o.DEQ)(e, y.PU)), {
    analyticsLocations: I
  } = (0, s.ZP)(), P = (0, r.jsx)(b.Z, {
    showPill: false,
    id: "create-join-button",
    onClick: () => {
      (0, u.yU)() ? (0, d.Z)({
        analyticsSource: {
          page: _.Sbl.CREATE_JOIN_GUILD_MODAL
        },
        analyticsLocation: {
          page: _.Sbl.CREATE_JOIN_GUILD_MODAL,
          section: _.jXE.GUILD_CAP_UPSELL_MODAL
        },
        analyticsLocations: I
      }) : c.Z.openCreateGuildModal({
        location: "Guild List"
      })
    },
    selected: S,
    onContextMenu: C,
    tooltip: O.intl.string(O.t.l5WIbf),
    icon: o.oFk
  });
  return t ? P : (0, r.jsx)("div", {
    className: v.tutorialContainer,
    children: (0, r.jsxs)(p.Z, {
      tutorialId: E ? "create-more-servers" : "create-first-server",
      inlineSpecs: j,
      position: "right",
      children: [P, null != n && (0, r.jsx)(m.ZP, {
        name: O.intl.string(O.t["45xjM5"]),
        targetNode: n,
        below: true,
        noCombine: true
      })]
    })
  })
}