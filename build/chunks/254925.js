/** Chunk was on 55666 **/
B.d(g, {
  QV: () => X,
  ZP: () => c,
  go: () => s
}), B(266796);
var C = B(200651),
  Q = B(192379),
  w = B(442837),
  D = B(481060),
  f = B(314852),
  E = B(65361),
  v = B(434404),
  I = B(999382),
  P = B(835887),
  r = B(388661),
  e = B(500230),
  o = B(742409),
  t = B(981631),
  d = B(116175),
  n = B(155174),
  M = B(388032),
  L = B(935921);
let X = [d.ZD.LEAF, d.ZD.SWORD, d.ZD.HEART, d.ZD.FIRE, d.ZD.WATER_DROP, d.ZD.SKULL, d.ZD.MOON, d.ZD.LIGHTNING, d.ZD.COMPASS, d.ZD.TOADSTOOL],
  s = [{
    primary: "#ff1c90",
    secondary: "#ff7fc0"
  }, {
    primary: "#ff8f1c",
    secondary: "#ffae77"
  }, {
    primary: "#eebe1a",
    secondary: "#fffc7f"
  }, {
    primary: "#32a070",
    secondary: "#57b59e"
  }, {
    primary: "#32839a",
    secondary: "#71c2d9"
  }, {
    primary: "#8a43ff",
    secondary: "#bd95ff"
  }, {
    primary: "#9b3fe5",
    secondary: "#cc8dff"
  }, {
    primary: "#942e8f",
    secondary: "#d46cb5"
  }, {
    primary: "#d14242",
    secondary: "#ff8989"
  }, {
    primary: "#814300",
    secondary: "#a88a6c"
  }, {
    primary: "#717224",
    secondary: "#c3c3c3"
  }, {
    primary: "#5d1d47",
    secondary: "#c58fbb"
  }, {
    primary: "#222222",
    secondary: "#cccccc"
  }],
  c = function() {
    var A, g, B, d;
    (0, M.j1)(n.M);
    let c = (0, w.e7)([I.Z], () => I.Z.getGuild()),
      H = (0, w.e7)([I.Z], () => I.Z.getGuildProfile()),
      {
        fetchGuildProfile: G,
        fetchStatus: b
      } = (0, E.u)(null == c ? void 0 : c.id);
    if (Q.useEffect(() => {
        b === f.a.NOT_FETCHED && G()
      }, [G, b]), b !== f.a.FETCHED) return (0, C.jsx)("div", {
      className: L.spinnerContainer,
      children: (0, C.jsx)(D.$jN, {})
    });
    if (null == c || null == H) return null;
    let Y = (null == H ? void 0 : H.tag) == null,
      F = null !== (A = H.badge) && void 0 !== A ? A : X[0],
      a = null !== (g = H.badgeColorPrimary) && void 0 !== g ? g : s[0].primary,
      N = null !== (B = H.badgeColorSecondary) && void 0 !== B ? B : s[0].secondary,
      i = (0, C.jsxs)(C.Fragment, {
        children: [(0, C.jsx)(r.Z, {
          className: L.section,
          guildId: c.id,
          isDisabled: Y,
          tag: null !== (d = H.tag) && void 0 !== d ? d : "",
          badge: F,
          primaryColor: a,
          secondaryColor: N
        }), (0, C.jsx)(P.Z, {
          className: L.section,
          selectedBadge: F,
          guildId: c.id
        }), (0, C.jsx)(e.Z, {
          className: L.section,
          guildId: c.id,
          badge: F,
          primaryColor: a,
          secondaryColor: N
        })]
      });
    return (0, C.jsxs)("div", {
      children: [(0, C.jsx)(D.X6q, {
        className: L.title,
        variant: "heading-lg/semibold",
        children: M.NW.string(n.Z.mf2OwM)
      }), (0, C.jsxs)("div", {
        className: L.container,
        children: [(0, C.jsxs)("div", {
          className: L.leftContent,
          children: [(0, C.jsx)(D.Text, {
            variant: "text-sm/medium",
            color: "text-secondary",
            className: L.description,
            children: M.NW.string(n.Z["655Un5"])
          }), (0, C.jsxs)("div", {
            className: L.enableSwitchContainer,
            children: [(0, C.jsx)("label", {
              htmlFor: "enable-server-tag",
              children: (0, C.jsx)(D.Text, {
                variant: "text-md/semibold",
                color: "header-primary",
                children: M.NW.string(n.Z["1zams7"])
              })
            }), (0, C.jsx)(D.rsf, {
              id: "enable-server-tag",
              checked: !Y,
              onChange: () => {
                if (Y) {
                  var A;
                  v.Z.updateGuildProfile(c.id, {
                    tag: null !== (A = H.tag) && void 0 !== A ? A : "",
                    badge: F,
                    badgeColorPrimary: a,
                    badgeColorSecondary: N
                  })
                } else v.Z.updateGuildProfile(c.id, {
                  tag: null
                })
              }
            })]
          }), (0, C.jsx)(D.Text, {
            variant: "text-xs/medium",
            color: "text-muted",
            className: L.memberApplicationsInfo,
            children: M.NW.format(n.Z.WUACVF, {
              onClick: () => {
                v.Z.setSection(t.pNK.ACCESS)
              }
            })
          }), Y ? (0, C.jsx)(D.nuw, {
            children: (0, C.jsx)("div", {
              className: L.disabledForm,
              children: i
            })
          }) : i]
        }), (0, C.jsx)("div", {
          children: (0, C.jsx)(o.Z, {
            guildId: c.id,
            tag: H.tag,
            badge: F,
            primaryColor: a,
            secondaryColor: N
          })
        })]
      })]
    })
  }