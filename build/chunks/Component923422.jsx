/** Chunk was on 2535 **/
/** chunk id: 923422, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js"), require("./704826.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk230711 = require("./230711.js"),
  Chunk493544 = require("./493544.jsx"),
  Chunk108843 = require("./108843.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk386506 = require("./386506.js"),
  Chunk366953 = require("./366953.js"),
  Chunk991346 = require("./991346.js"),
  Chunk606669 = require("./606669.jsx"),
  Chunk53432 = require("./53432.jsx"),
  Chunk74869 = require("./74869.jsx"),
  Chunk45570 = require("./45570.jsx"),
  Chunk478057 = require("./478057.jsx"),
  Chunk308512 = require("./308512.jsx"),
  Chunk594791 = require("./594791.jsx"),
  Chunk393431 = require("./393431.jsx"),
  Chunk69021 = require("./69021.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let x = (0, Chunk108843.Z)(function(e) {
  let {
    webBuildOverride: t,
    onSelect: n,
    onInteraction: c
  } = e, [u, x] = l.useState(false), D = (0, v.Z)(), N = (0, S.Z)(), _ = (0, f.Z)(), I = (0, y.Z)(), Z = (0, j.Z)(), T = (0, h.Z)(), m = (0, O.Z)(), C = (0, P.Z)(), k = (0, E.Z)(), {
    analyticsLocations: R
  } = (0, d.ZP)(), L = l.useMemo(() => (0, b.j)(), []);
  async function V() {
    try {
      x(true), await (0, g.bF)(), window.location.reload(true)
    } catch (e) {
      x(false)
    }
  }
  let B = (0, p.VO)().filter(e => {
    let {
      section: t
    } = e;
    return t !== s.ID.HEADER && t !== s.ID.CUSTOM && t !== s.ID.DIVIDER && "logout" !== t
  }).filter(e => null == e.predicate || e.predicate());
  return (0, a.jsx)(d.Gt, {
    value: R,
    children: (0, a.jsxs)(r.v2r, {
      navId: "user-settings-cog",
      onClose: i.Zy,
      "aria-label": w.intl.string(w.t.opYYHh),
      onSelect: n,
      onInteraction: c,
      children: [B.map(e => {
        var t, n;
        let {
          section: l,
          label: i,
          onClick: s
        } = e, c = l.replace(/\W/gi, "_");
        return (0, a.jsx)(r.sNh, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              a = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), a.forEach(function(t) {
              var a;
              a = n[t], t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = a
            })
          }
          return e
        }({
          id: c
        }, {
          label: i,
          action: () => null != s ? s() : function(e, t) {
            let n = Object.values(A.oAB).filter(t => t === e)[0];
            null != n && o.Z.open(n, true, {
              analyticsLocations: t
            })
          }(l, R)
        }), n = n = {
          children: (e => {
            switch (e) {
              case A.oAB.GAMES:
                return D;
              case A.oAB.STREAMER_MODE:
                return N;
              case A.oAB.APPEARANCE:
                return _;
              case A.oAB.ACCESSIBILITY:
                return I;
              case A.oAB.VOICE:
                return Z;
              case A.oAB.TEXT:
                return T;
              case A.oAB.EXPERIMENTS:
                return m;
              case A.oAB.DEVELOPER_OPTIONS:
                return C;
              default:
                return null
            }
          })(l)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            n.push.apply(n, a)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), c)
      }), e.user.isStaff() && k, e.user.isStaff() && L.length > 0 ? (0, a.jsx)(r.sNh, {
        label: "Build Overrides",
        id: "build_overrides",
        children: (0, a.jsx)(r.kSQ, {
          children: L.map(e => (0, a.jsx)(r.k5B, {
            id: "input-".concat(e.payload),
            group: "build_overrides",
            label: e.id,
            checked: (null == t ? true : t.id) === e.id,
            action: async () => {
              (null == t ? true : t.id) !== e.id && 200 === (await (0, g.f0)(e.payload)).status && window.location.reload(true)
            }
          }, "input-".concat(e.payload)))
        })
      }) : null, null != t ? (0, a.jsx)(r.kSQ, {
        children: (0, a.jsx)(r.sNh, {
          id: "clear-build-override",
          disabled: u,
          label: w.intl.string(w.t["/Nz9ra"]),
          action: V,
          color: "danger"
        })
      }) : null]
    })
  })
}, [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.USER_SETTINGS_MENU])