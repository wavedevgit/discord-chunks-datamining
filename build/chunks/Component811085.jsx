/** Chunk was on web.js **/
/** chunk id: 811085, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => g
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
  Chunk987086 = require("./987086.js");
let m = 36;

function g() {
  let e = (0, Chunk451284.P)(),
    t = (0, Chunk442837.e7)([Chunk594174.default], () => Chunk594174.default.getCurrentUser()),
    [n, g] = Chunk647438.useState(m),
    E = Chunk647438.useRef({
      [Chunk531441.Sn.ALL_GOOD]: null,
      [Chunk531441.Sn.LIMITED]: null,
      [Chunk531441.Sn.VERY_LIMITED]: null,
      [Chunk531441.Sn.AT_RISK]: null,
      [Chunk531441.Sn.SUSPENDED]: null
    }),
    b = Chunk647438.useCallback(() => {
      g(Math.max(Math.max(...Object.values(E.current).map(e => {
        var t;
        return null != (t = null == e ? true : e.getBoundingClientRect().height) ? t : m
      })), m))
    }, []);
  Chunk647438.useEffect(() => {
    b();
    let e = (0, Chunk392711.debounce)(b, 100);
    window.addEventListener("resize", module)
  }, [b]);
  let y = {
      [Chunk531441.Sn.ALL_GOOD]: {
        title: Chunk388032.t.uaKrRi,
        description: Chunk388032.intl.format(Chunk388032.t.pEdBD4, {
          termsOfService: Chunk800530.sQ.TOS_LINK,
          communityGuidelines: Chunk800530.sQ.COMMUNITY_GUIDELINES
        }),
        status: Chunk388032.t["/Idfao"],
        Icon: Chunk481060.owK,
        color: Chunk692547.Z.colors.STATUS_POSITIVE
      },
      [Chunk531441.Sn.LIMITED]: {
        title: Chunk388032.t.epkcmS,
        description: Chunk388032.intl.string(Chunk388032.t["774juc"]),
        status: Chunk388032.t.umleq4,
        Icon: Chunk481060.Mgn,
        color: Chunk692547.Z.colors.STATUS_WARNING
      },
      [Chunk531441.Sn.VERY_LIMITED]: {
        title: Chunk388032.t.crzE2X,
        description: Chunk388032.intl.string(Chunk388032.t["T/Ufh9"]),
        status: Chunk388032.t.WBtMHf,
        Icon: Chunk481060.Mgn,
        color: Chunk692547.Z.unsafe_rawColors.ORANGE_345
      },
      [Chunk531441.Sn.AT_RISK]: {
        title: Chunk388032.t.XRNVzO,
        description: Chunk388032.intl.string(Chunk388032.t["hbH+9S"]),
        status: Chunk388032.t["7f+4Lg"],
        Icon: Chunk481060.Mgn,
        color: Chunk692547.Z.colors.STATUS_DANGER
      },
      [Chunk531441.Sn.SUSPENDED]: {
        title: Chunk388032.t.MExFkz,
        description: Chunk388032.intl.string(Chunk388032.t["2liUvt"]),
        status: Chunk388032.t["0OONGB"],
        Icon: Chunk481060.k$p,
        color: Chunk692547.Z.colors.ICON_MUTED
      }
    },
    {
      title: O,
      description: v,
      color: I,
      Icon: T
    } = y[module.state],
    S = Object.keys(y).length;
  return (0, Chunk951288.jsxs)(Chunk481060.Zbd, {
    className: Chunk987086.container,
    outline: false,
    children: [(0, Chunk951288.jsx)("div", {
      className: Chunk987086.profile,
      children: (0, Chunk951288.jsx)(Chunk959562.Z, {
        user: exports,
        size: Chunk481060.EFr.SIZE_80
      })
    }), (0, Chunk951288.jsxs)("div", {
      className: Chunk987086.status,
      children: [(0, Chunk951288.jsxs)("div", {
        className: Chunk987086.title,
        children: [(0, Chunk951288.jsx)(Chunk481060.Heading, {
          color: "header-primary",
          variant: "heading-lg/normal",
          children: Chunk388032.intl.format(O, {
            hook: e => (0, r.jsx)(l.Text, {
              style: {
                color: I.css
              },
              variant: "heading-lg/bold",
              tag: "span",
              children: e
            })
          })
        }), (0, Chunk951288.jsx)(Chunk481060.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: v
        })]
      }), (0, Chunk951288.jsxs)("div", {
        className: Chunk987086.health,
        style: {
          height: require
        },
        children: [(0, Chunk951288.jsx)("div", {
          className: Chunk987086.line
        }), Object.entries(y).map((t, n) => {
          let [i, a] = t, o = parseInt(i) === e.state;
          return (0, r.jsxs)("div", {
            className: h.statusOption,
            ref: e => {
              E.current[parseInt(i)] = e
            },
            children: [o ? (0, r.jsx)(T, {
              className: h.marker,
              color: a.color
            }) : (0, r.jsx)("div", {
              className: h.marker,
              style: {
                marginLeft: 0 === n ? false : 0,
                marginRight: n === S - 1 ? false : 0
              },
              children: (0, r.jsx)("div", {
                className: h.empty
              })
            }), p.intl.format(a.status, {
              hook: e => (0, r.jsx)(l.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                className: h.statusLabel,
                children: e
              })
            })]
          }, n)
        })]
      })]
    })]
  })
}