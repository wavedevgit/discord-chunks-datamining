/** Chunk was on 4918 **/
/** chunk id: 650995, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  A: () => C
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk417597 = require("./417597.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk429913 = require("./429913.js"),
  Chunk769015 = require("./769015.jsx"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk532624 = require("./532624.js"),
  Chunk350535 = require("./350535.js"),
  Chunk792852 = require("./792852.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk410387 = require("./410387.js");
let O = Chunk64700.memo(function(e) {
    let {
      allClips: t
    } = e, {
      query: i,
      setQuery: a
    } = (0, v.P)(), d = (0, s.bG)([y.Ay], () => y.Ay.getKeybindForAction(j.hCu.SAVE_CLIP)), p = (0, v.P)(e => e.selectedUserIds.size > 0 || null != e.selectedActivity || null != e.selectedGuildId || null != e.selectedYear), O = r.useCallback(() => {
      (0, f.openUserSettings)(m.X.CLIPS_PANEL)
    }, []), x = r.useCallback(e => {
      (0, u.L3)(e, async () => {
        let {
          default: e
        } = await l.e("8067").then(l.bind(l, 726574));
        return l => {
          var r, i;
          return (0, n.jsx)(e, (r = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var l = null != arguments[t] ? arguments[t] : {},
                n = Object.keys(l);
              "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(l).filter(function(e) {
                return Object.getOwnPropertyDescriptor(l, e).enumerable
              }))), n.forEach(function(t) {
                var n;
                n = l[t], t in e ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = n
              })
            }
            return e
          }({}, l), i = i = {
            allClips: t
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
            var l = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var n = Object.getOwnPropertySymbols(e);
              l.push.apply(l, n)
            }
            return l
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(i, e))
          }), r))
        }
      })
    }, [t]), C = r.useCallback(() => a(""), [a]), w = null != d ? b.dI(d.shortcut, true) : null;
    return (0, n.jsxs)("div", {
      className: g.aN,
      children: [(0, n.jsxs)("div", {
        className: g.Nr,
        children: [(0, n.jsxs)("div", {
          className: g.Pe,
          children: [(0, n.jsx)(o.Heading, {
            variant: "heading-lg/semibold",
            color: "text-strong",
            children: h.intl.string(h.t.z2jK6X)
          }), null != w && (0, n.jsx)(o.e7I, {
            className: g.P,
            shortcut: w
          })]
        }), (0, n.jsxs)("div", {
          className: g.$s,
          children: [(0, n.jsx)(c.m, {
            text: h.intl.string(h.t.X7yRDm),
            children: (0, n.jsx)(o.K0, {
              onClick: x,
              icon: o.RgP,
              size: "sm",
              variant: p ? "active" : "icon-only",
              "aria-label": h.intl.string(h.t.X7yRDm)
            })
          }), (0, n.jsx)(c.m, {
            text: h.intl.string(h.t["3D5yo/"]),
            children: (0, n.jsx)(o.K0, {
              onClick: O,
              icon: o.Zes,
              size: "sm",
              variant: "icon-only",
              "aria-label": h.intl.string(h.t["3D5yo/"])
            })
          })]
        })]
      }), (0, n.jsx)("div", {
        className: g.MT,
        children: (0, n.jsx)(o.IWV, {
          placeholder: h.intl.string(h.t["5h0QOP"]),
          query: i,
          onChange: a,
          onClear: C,
          size: "md"
        })
      })]
    })
  }),
  x = Chunk64700.memo(function(e) {
    let {
      name: t,
      count: l,
      icon: r,
      isSelected: i,
      onClick: s
    } = e;
    return (0, n.jsxs)(o.DUT, {
      className: a()(g.MV, {
        [g.wH]: i
      }),
      onClick: s,
      children: [(0, n.jsxs)("div", {
        className: g.tk,
        children: [r, (0, n.jsx)(o.Text, {
          variant: "text-md/medium",
          color: "currentColor",
          className: g.mO,
          children: t
        })]
      }), (0, n.jsx)("div", {
        className: g.z2,
        children: (0, n.jsx)(o.Text, {
          variant: "text-xs/semibold",
          color: "currentColor",
          children: l
        })
      })]
    })
  });

function C(e) {
  let {
    clipsByGame: t,
    filteredClips: l,
    favoriteClips: i,
    allClips: a
  } = e, s = (0, v.P)(e => e.selectedGameId), c = (0, v.P)(e => e.setSelectedGameId), u = r.useMemo(() => t.map(e => e.applicationId), [t]), m = (0, d.A)(u), f = r.useCallback(() => c(null), [c]), y = r.useCallback(() => c("favorites"), [c]), b = r.useMemo(() => new Map(m.map(e => [null == e ? true : e.id, e])), [m]);
  return (0, n.jsxs)("div", {
    className: g.pz,
    children: [(0, n.jsx)(O, {
      allClips: a
    }), (0, n.jsxs)(o.IpV, {
      className: g.wp,
      fade: true,
      children: [(0, n.jsx)("div", {
        className: g.om,
        children: (0, n.jsxs)("div", {
          className: g.CW,
          children: [(0, n.jsx)(x, {
            name: h.intl.string(h.t.dPVrEv),
            count: l.length,
            icon: (0, n.jsx)(o.xgA, {}),
            isSelected: null === s,
            onClick: f
          }), (0, n.jsx)(x, {
            name: h.intl.string(h.t["9rlCk1"]),
            count: i.length,
            icon: (0, n.jsx)(o.C3E, {}),
            isSelected: "favorites" === s,
            onClick: y
          })]
        })
      }), t.length > 0 && (0, n.jsxs)("div", {
        className: g.om,
        children: [(0, n.jsx)(o.Heading, {
          variant: "heading-sm/medium",
          color: "text-muted",
          className: g.a9,
          children: h.intl.string(h.t.URyqtP)
        }), (0, n.jsx)("div", {
          className: g.CW,
          children: t.map(e => {
            let {
              name: t,
              count: l,
              applicationId: r
            } = e;
            return (0, n.jsx)(x, {
              name: t,
              count: l,
              icon: (0, n.jsx)(p.A, {
                game: b.get(r),
                size: p.M.XSMALL
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