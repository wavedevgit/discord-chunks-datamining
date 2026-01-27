/** Chunk was on 7803 **/
/** chunk id: 366141, original params: t,e,s (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  Chunk311907 = require("./311907.js"),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk287809 = require("./287809.js"),
  Chunk739010 = require("./739010.js"),
  Chunk335891 = require("./335891.js"),
  Chunk645376 = require("./645376.jsx"),
  Chunk239093 = require("./239093.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk941708 = require("./941708.js");

function j() {
  let t = (0, u.K)(),
    e = (0, l.bG)([o.default], () => o.default.getCurrentUser()),
    [s, j] = n.useState(36),
    v = n.useRef({
      [d.PN.ALL_GOOD]: null,
      [d.PN.LIMITED]: null,
      [d.PN.VERY_LIMITED]: null,
      [d.PN.AT_RISK]: null,
      [d.PN.SUSPENDED]: null
    }),
    N = n.useCallback(() => {
      j(Math.max(Math.max(...Object.values(v.current).map(t => {
        var e;
        return null != (e = null == t ? true : t.getBoundingClientRect().height) ? e : 36
      })), 36))
    }, []);
  n.useEffect(() => {
    N();
    let t = (0, a.debounce)(N, 100);
    return window.addEventListener("resize", t), () => window.removeEventListener("resize", t)
  }, [N]);
  let f = {
      [d.PN.ALL_GOOD]: {
        title: h.t.uaKrRi,
        description: h.intl.format(h.t.pEdBD4, {
          termsOfService: x.d$.TOS_LINK,
          communityGuidelines: x.d$.COMMUNITY_GUIDELINES
        }),
        status: h.t["/Idfao"],
        Icon: c.yr3,
        color: r.A.colors.STATUS_POSITIVE
      },
      [d.PN.LIMITED]: {
        title: h.t.epkcmS,
        description: h.intl.string(h.t["774juc"]),
        status: h.t.umleq4,
        Icon: c.EpV,
        color: r.A.colors.STATUS_WARNING
      },
      [d.PN.VERY_LIMITED]: {
        title: h.t.crzE2X,
        description: h.intl.string(h.t["T/Ufh9"]),
        status: h.t.WBtMHf,
        Icon: c.EpV,
        color: r.A.unsafe_rawColors.ORANGE_345
      },
      [d.PN.AT_RISK]: {
        title: h.t.XRNVzO,
        description: h.intl.string(h.t["hbH+9S"]),
        status: h.t["7f+4Lg"],
        Icon: c.EpV,
        color: r.A.colors.ICON_FEEDBACK_CRITICAL
      },
      [d.PN.SUSPENDED]: {
        title: h.t.MExFkz,
        description: h.intl.string(h.t["2liUvt"]),
        status: h.t["0OONGB"],
        Icon: c.aXh,
        color: r.A.colors.ICON_MUTED
      }
    },
    {
      title: p,
      description: E,
      color: b,
      Icon: O
    } = f[t.state],
    T = Object.keys(f).length;
  return (0, i.jsxs)(c.ZpM, {
    className: g.kL,
    outline: false,
    children: [(0, i.jsx)("div", {
      className: g.ME,
      children: (0, i.jsx)(m.A, {
        user: e,
        size: c._3J.SIZE_80
      })
    }), (0, i.jsxs)("div", {
      className: g.h5,
      children: [(0, i.jsxs)("div", {
        className: g.DD,
        children: [(0, i.jsx)(c.Heading, {
          color: "text-strong",
          variant: "heading-lg/normal",
          children: h.intl.format(p, {
            hook: t => (0, i.jsx)(c.Text, {
              style: {
                color: b.css
              },
              variant: "heading-lg/bold",
              tag: "span",
              children: t
            })
          })
        }), (0, i.jsx)(c.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: E
        })]
      }), (0, i.jsxs)("div", {
        className: g.vK,
        style: {
          height: s
        },
        children: [(0, i.jsx)("div", {
          className: g.n8
        }), Object.entries(f).map((e, s) => {
          let [n, a] = e, l = parseInt(n) === t.state;
          return (0, i.jsxs)("div", {
            className: g.Kx,
            ref: t => {
              v.current[parseInt(n)] = t
            },
            children: [l ? (0, i.jsx)(O, {
              className: g.xL,
              color: a.color
            }) : (0, i.jsx)("div", {
              className: g.xL,
              style: {
                marginLeft: 0 === s ? false : 0,
                marginRight: s === T - 1 ? false : 0
              },
              children: (0, i.jsx)("div", {
                className: g.Ie
              })
            }), h.intl.format(a.status, {
              hook: t => (0, i.jsx)(c.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                className: g.Rh,
                children: t
              })
            })]
          }, s)
        })]
      })]
    })]
  })
}