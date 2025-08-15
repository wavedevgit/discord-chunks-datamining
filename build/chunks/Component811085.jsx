/** Chunk was on 18824 **/
/** chunk id: 811085, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk531441 = require("./531441.js"),
  Chunk451284 = require("./451284.js"),
  Chunk959562 = require("./959562.jsx"),
  Chunk800530 = require("./800530.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk498714 = require("./498714.js");

function j() {
  let t = (0, Chunk451284.P)(),
    e = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    [n, j] = Chunk647438.useState(36),
    p = Chunk647438.useRef({
      [Chunk531441.Sn.ALL_GOOD]: null,
      [Chunk531441.Sn.LIMITED]: null,
      [Chunk531441.Sn.VERY_LIMITED]: null,
      [Chunk531441.Sn.AT_RISK]: null,
      [Chunk531441.Sn.SUSPENDED]: null
    }),
    f = Chunk647438.useCallback(() => {
      j(Math.max(Math.max(...Object.values(p.current).map(t => {
        var e;
        return null != (e = null == t ? true : t.getBoundingClientRect().height) ? e : 36
      })), 36))
    }, []);
  Chunk647438.useEffect(() => {
    f();
    let t = (0, Chunk392711.debounce)(f, 100);
    window.addEventListener("resize", module)
  }, [f]);
  let v = {
      [Chunk531441.Sn.ALL_GOOD]: {
        title: Chunk388032.t.uaKrRk,
        description: Chunk388032.intl.format(Chunk388032.t.pEdBDw, {
          termsOfService: Chunk800530.sQ.TOS_LINK,
          communityGuidelines: Chunk800530.sQ.COMMUNITY_GUIDELINES
        }),
        status: Chunk388032.t["/Idfam"],
        Icon: Chunk481060.owK,
        color: Chunk692547.Z.colors.STATUS_POSITIVE
      },
      [Chunk531441.Sn.LIMITED]: {
        title: Chunk388032.t.epkcmZ,
        description: Chunk388032.intl.string(Chunk388032.t["774jub"]),
        status: Chunk388032.t.umleq6,
        Icon: Chunk481060.Mgn,
        color: Chunk692547.Z.colors.STATUS_WARNING
      },
      [Chunk531441.Sn.VERY_LIMITED]: {
        title: Chunk388032.t.crzE2d,
        description: Chunk388032.intl.string(Chunk388032.t["T/Ufh4"]),
        status: Chunk388032.t.WBtMHR,
        Icon: Chunk481060.Mgn,
        color: Chunk692547.Z.unsafe_rawColors.ORANGE_345
      },
      [Chunk531441.Sn.AT_RISK]: {
        title: Chunk388032.t.XRNVzM,
        description: Chunk388032.intl.string(Chunk388032.t["hbH+9f"]),
        status: Chunk388032.t["7f+4Li"],
        Icon: Chunk481060.Mgn,
        color: Chunk692547.Z.colors.STATUS_DANGER
      },
      [Chunk531441.Sn.SUSPENDED]: {
        title: Chunk388032.t.MExFk5,
        description: Chunk388032.intl.string(Chunk388032.t["2liUvr"]),
        status: Chunk388032.t["0OONGB"],
        Icon: Chunk481060.k$p,
        color: Chunk692547.Z.colors.ICON_MUTED
      }
    },
    {
      title: N,
      description: S,
      color: b,
      Icon: E
    } = v[module.state],
    T = Object.keys(v).length;
  return (0, Chunk951288.jsxs)(Chunk481060.Zbd, {
    className: Chunk498714.container,
    outline: false,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk498714.profile,
      children: (0, Chunk951288.jsx)(Chunk959562.Z, {
        user: exports,
        size: Chunk481060.EFr.SIZE_80
      })
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk498714.status,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk498714.title,
        children: [(0, Chunk951288.jsx)(Chunk481060.X6q, {
          color: "header-primary",
          variant: "heading-lg/normal",
          children: Chunk388032.intl.format(N, {
            hook: t => (0, s.jsx)(c.Text, {
              style: {
                color: b.css
              },
              variant: "heading-lg/bold",
              tag: "span",
              children: t
            })
          })
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: S
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk498714.health,
        style: {
          height: require
        },
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk498714.line
        }), Object.entries(v).map((e, n) => {
          let [i, a] = e, r = parseInt(i) === t.state;
          return (0, s.jsxs)("div", {
            className: g.statusOption,
            ref: t => {
              p.current[parseInt(i)] = t
            },
            children: [r ? (0, s.jsx)(E, {
              className: g.marker,
              color: a.color
            }) : (0, s.jsx)("div", {
              className: g.marker,
              style: {
                marginLeft: 0 === n ? false : 0,
                marginRight: n === T - 1 ? false : 0
              },
              children: (0, s.jsx)("div", {
                className: g.empty
              })
            }), x.intl.format(a.status, {
              hook: t => (0, s.jsx)(c.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                className: g.statusLabel,
                children: t
              })
            })]
          }, n)
        })]
      })]
    })]
  })
}