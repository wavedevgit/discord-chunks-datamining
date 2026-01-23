/** Chunk was on 95153 **/
/** chunk id: 50120, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./896048.js"), require("./667532.js"), require("./321073.js"), require("./747238.js"), require("./812715.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk361739 = require("./361739.jsx"),
  Chunk358367 = require("./358367.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk148810 = require("./148810.js"),
  Chunk390486 = require("./390486.js"),
  Chunk734066 = require("./734066.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk360619 = require("./360619.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk380450 = require("./380450.jsx"),
  Chunk227542 = require("./227542.jsx"),
  Chunk84654 = require("./84654.jsx"),
  Chunk8086 = require("./8086.jsx"),
  Chunk616621 = require("./616621.jsx"),
  Chunk264124 = require("./264124.jsx"),
  Chunk850060 = require("./850060.jsx"),
  Chunk235661 = require("./235661.jsx"),
  Chunk466410 = require("./466410.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");
let _ = (0, Chunk358367.A)(function(e) {
  let {
    webBuildOverride: t,
    onSelect: n,
    onInteraction: c
  } = e, [s, _] = r.useState(false), m = (0, A.A)(), L = (0, S.A)(), I = (0, E.A)(), T = (0, v.A)(), N = (0, x.A)(), k = (0, P.A)(), R = (0, h.A)(), V = (0, w.A)(), M = (0, j.A)(), U = (0, p.sw)(), {
    analyticsLocations: G
  } = (0, d.Ay)(), X = r.useMemo(() => (0, g.H)(), []);
  async function H() {
    try {
      _(true), await (0, u.iD)(), window.location.reload(true)
    } catch (e) {
      _(false)
    }
  }
  let F = (0, y.t0)("UserSettingsCogContextMenu"),
    Y = (0, f.getWebUserSettingsByUserSettingsSections)(),
    q = (0, O.Lu)(),
    z = r.useMemo(() => {
      let e = [];
      q.forEach(t => {
        let {
          section: n,
          predicate: i
        } = t;
        n !== o.Fq.HEADER && n !== o.Fq.CUSTOM && n !== o.Fq.DIVIDER && "logout" !== n && (null == i || i()) && null != Y.get(n) && (n === C.nc_.PROFILE_CUSTOMIZATION ? e.unshift(t) : e.push(t))
      });
      let t = e.findIndex(e => e.section === C.nc_.ADVANCED);
      false !== t && e.splice(t, 0, {
        section: C.nc_.STREAMER_MODE,
        label: D.intl.string(D.t.S5GfOW)
      });
      let n = e.findIndex(e => e.section === C.nc_.CONNECTIONS);
      if (U) {
        let t = {
          section: C.nc_.CLIPS,
          label: D.intl.string(D.t.z2jK6X),
          onClick: () => (0, f.openUserSettings)(b.X.CLIPS_PANEL)
        };
        false !== n && e.splice(n + 1, 0, t)
      }
      if (F) {
        let t = e.findIndex(e => e.section === C.nc_.NOTIFICATIONS);
        if (false !== t && false !== n && t > n) {
          let [i] = e.splice(t, 1);
          e.splice(n + 1, 0, i)
        }
      }
      return e
    }, [U, F, Y, q]);
  return (0, i.jsx)(d.f5, {
    value: G,
    children: (0, i.jsxs)(l.W1t, {
      "data-menu-migration-ready": true,
      navId: "user-settings-cog",
      onClose: a.Z_,
      "aria-label": D.intl.string(D.t.opYYHn),
      onSelect: n,
      onInteraction: c,
      children: [z.map(e => {
        var t, n;
        let {
          section: r,
          label: a,
          onClick: o
        } = e, c = r.replace(/\W/gi, "_");
        return (0, i.jsx)(l.Drp, (t = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({
          id: c
        }, {
          void_label: a,
          action: () => {
            var e, t;
            let n;
            return null != o ? o() : (t = null != (e = Y.get(r)) ? e : b.X.ACCOUNT_PANEL, void(null != (n = Object.values(C.nc_).filter(e => e === r)[0]) && (0, f.openUserSettings)(t, {
              section: n,
              analyticsLocations: G
            })))
          }
        }), n = n = {
          children: (e => {
            switch (e) {
              case C.nc_.GAMES:
                return m;
              case C.nc_.STREAMER_MODE:
                return L;
              case C.nc_.APPEARANCE:
                return I;
              case C.nc_.ACCESSIBILITY:
                return T;
              case C.nc_.VOICE:
                return N;
              case C.nc_.TEXT:
                return k;
              case C.nc_.EXPERIMENTS:
                return R;
              case C.nc_.DEVELOPER_OPTIONS:
                return V;
              default:
                return null
            }
          })(r)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(n)).forEach(function(e) {
          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
        }), t), c)
      }), e.user.isStaff() && M, e.user.isStaff() && X.length > 0 ? (0, i.jsx)(l.Drp, {
        label: "Build Overrides",
        id: "build_overrides",
        children: (0, i.jsx)(l.rXV, {
          children: X.map(e => (0, i.jsx)(l.iDA, {
            id: "input-".concat(e.payload),
            group: "build_overrides",
            label: e.id,
            checked: (null == t ? true : t.id) === e.id,
            action: async () => {
              (null == t ? true : t.id) === e.id || 200 === (await (0, u.oA)(e.payload)).status && window.location.reload(true)
            }
          }, "input-".concat(e.payload)))
        })
      }) : null, null != t ? (0, i.jsx)(l.rXV, {
        children: (0, i.jsx)(l.Drp, {
          id: "clear-build-override",
          disabled: s,
          label: D.intl.string(D.t["/Nz9rY"]),
          action: H,
          color: "danger"
        })
      }) : null]
    })
  })
}, [Chunk793574.A.CONTEXT_MENU, Chunk793574.A.USER_SETTINGS_MENU])