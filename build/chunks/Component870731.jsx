/** Chunk was on 61342 **/
/** chunk id: 870731, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk399606 = require("./399606.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk835473 = require("./835473.js"),
  Chunk925329 = require("./925329.jsx"),
  Chunk547972 = require("./547972.js"),
  Chunk556296 = require("./556296.js"),
  Chunk13140 = require("./13140.js"),
  Chunk52436 = require("./52436.js"),
  Chunk981631 = require("./981631.js"),
  Chunk332325 = require("./332325.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk904465 = require("./904465.js");
let x = Chunk473749.memo(function(e) {
    let {
      allClips: t
    } = e, {
      query: i,
      setQuery: a
    } = (0, v.f)(), d = (0, s.e7)([f.ZP], () => f.ZP.getKeybindForAction(y.kg4.SAVE_CLIP)), p = (0, v.f)(e => e.selectedUserIds.size > 0 || null != e.selectedActivity || null != e.selectedGuildId || null != e.selectedYear), x = r.useCallback(() => {
      (0, m.Z)(h.Z.CLIPS, {
        stackingBehavior: "stack"
      })
    }, []), O = r.useCallback(e => {
      (0, u.jW)(e, async () => {
        let {
          default: e
        } = await n.e("13170").then(n.bind(n, 446302));
        return n => {
          var r, i;
          return (0, l.jsx)(e, (r = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), l.forEach(function(t) {
                var l;
                l = n[t], t in e ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = l
              })
            }
            return e
          }({}, n), i = i = {
            allClips: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              n.push.apply(n, l)
            }
            return n
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
          }), r))
        }
      })
    }, [t]), C = r.useCallback(() => a(""), [a]), w = null != d ? b.BB(d.shortcut, true) : null;
    return (0, l.jsxs)("div", {
      className: g.sidebarHeader,
      children: [(0, l.jsxs)("div", {
        className: g.profileHeader,
        children: [(0, l.jsxs)("div", {
          className: g.titleWithKeybind,
          children: [(0, l.jsx)(o.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: j.intl.string(j.t.z2jK6X)
          }), null != w && (0, l.jsx)(o.M2$, {
            className: g.keybind,
            shortcut: w
          })]
        }), (0, l.jsxs)("div", {
          className: g.headerActions,
          children: [(0, l.jsx)(c.u, {
            text: j.intl.string(j.t.X7yRDm),
            children: (0, l.jsx)(o.hU, {
              onClick: O,
              icon: o.gXV,
              size: "sm",
              variant: p ? "active" : "icon-only",
              "aria-label": j.intl.string(j.t.X7yRDm)
            })
          }), (0, l.jsx)(c.u, {
            text: j.intl.string(j.t["3D5yo/"]),
            children: (0, l.jsx)(o.hU, {
              onClick: x,
              icon: o.ewm,
              size: "sm",
              variant: "icon-only",
              "aria-label": j.intl.string(j.t["3D5yo/"])
            })
          })]
        })]
      }), (0, l.jsx)("div", {
        className: g.searchContainer,
        children: (0, l.jsx)(o.E1j, {
          placeholder: j.intl.string(j.t["5h0QOP"]),
          query: i,
          onChange: a,
          onClear: C,
          size: "md"
        })
      })]
    })
  }),
  O = Chunk473749.memo(function(e) {
    let {
      name: t,
      count: n,
      icon: r,
      isSelected: i,
      onClick: s
    } = e;
    return (0, l.jsxs)(o.P3F, {
      className: a()(g.gameItem, {
        [g.selected]: i
      }),
      onClick: s,
      children: [(0, l.jsxs)("div", {
        className: g.gameItemContent,
        children: [r, (0, l.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          className: g.gameName,
          children: t
        })]
      }), (0, l.jsx)("div", {
        className: g.countBadge,
        children: (0, l.jsx)(o.Text, {
          variant: "text-xs/semibold",
          color: "currentColor",
          children: n
        })
      })]
    })
  });

function C(e) {
  let {
    clipsByGame: t,
    filteredClips: n,
    favoriteClips: i,
    allClips: a
  } = e, s = (0, v.f)(e => e.selectedGameId), c = (0, v.f)(e => e.setSelectedGameId), u = r.useMemo(() => t.map(e => e.applicationId), [t]), m = (0, d.Z)(u), f = r.useCallback(() => c(null), [c]), b = r.useCallback(() => c("favorites"), [c]), y = r.useMemo(() => new Map(m.map(e => [null == e ? true : e.id, e])), [m]);
  return (0, l.jsxs)("div", {
    className: g.sidebar,
    children: [(0, l.jsx)(x, {
      allClips: a
    }), (0, l.jsxs)(o.zJl, {
      className: g.sidebarContent,
      fade: true,
      children: [(0, l.jsx)("div", {
        className: g.sidebarSection,
        children: (0, l.jsxs)("div", {
          className: g.gamesList,
          children: [(0, l.jsx)(O, {
            name: j.intl.string(j.t.dPVrEv),
            count: n.length,
            icon: (0, l.jsx)(o.AlX, {}),
            isSelected: null === s,
            onClick: f
          }), (0, l.jsx)(O, {
            name: j.intl.string(j.t["9rlCk1"]),
            count: i.length,
            icon: (0, l.jsx)(o.h_8, {}),
            isSelected: "favorites" === s,
            onClick: b
          })]
        })
      }), t.length > 0 && (0, l.jsxs)("div", {
        className: g.sidebarSection,
        children: [(0, l.jsx)(o.Heading, {
          variant: "heading-sm/medium",
          color: "text-muted",
          className: g.sectionLabel,
          children: j.intl.string(j.t.URyqtP)
        }), (0, l.jsx)("div", {
          className: g.gamesList,
          children: t.map(e => {
            let {
              name: t,
              count: n,
              applicationId: r
            } = e;
            return (0, l.jsx)(O, {
              name: t,
              count: n,
              icon: (0, l.jsx)(p.Z, {
                game: y.get(r),
                size: p.A.XSMALL
              }),
              isSelected: s === r,
              onClick: () => c(r)
            }, r)
          })
        })]
      })]
    })]
  })
}