/** Chunk was on web.js **/
/** chunk id: 366141, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => g
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
let m = 36;

function g() {
  let e = (0, d.K)(),
    t = (0, s.bG)([c.default], () => c.default.getCurrentUser()),
    [n, g] = i.useState(m),
    E = i.useRef({
      [u.PN.ALL_GOOD]: null,
      [u.PN.LIMITED]: null,
      [u.PN.VERY_LIMITED]: null,
      [u.PN.AT_RISK]: null,
      [u.PN.SUSPENDED]: null
    }),
    y = i.useCallback(() => {
      g(Math.max(Math.max(...Object.values(E.current).map(e => {
        var t;
        return null != (t = null == e ? true : e.getBoundingClientRect().height) ? t : m
      })), m))
    }, []);
  i.useEffect(() => {
    y();
    let e = (0, a.debounce)(y, 100);
    return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
  }, [y]);
  let b = {
      [u.PN.ALL_GOOD]: {
        title: _.t.uaKrRi,
        description: _.intl.format(_.t.pEdBD4, {
          termsOfService: p.d$.TOS_LINK,
          communityGuidelines: p.d$.COMMUNITY_GUIDELINES
        }),
        status: _.t["/Idfao"],
        Icon: l.yr3,
        color: o.A.colors.STATUS_POSITIVE
      },
      [u.PN.LIMITED]: {
        title: _.t.epkcmS,
        description: _.intl.string(_.t["774juc"]),
        status: _.t.umleq4,
        Icon: l.EpV,
        color: o.A.colors.STATUS_WARNING
      },
      [u.PN.VERY_LIMITED]: {
        title: _.t.crzE2X,
        description: _.intl.string(_.t["T/Ufh9"]),
        status: _.t.WBtMHf,
        Icon: l.EpV,
        color: o.A.unsafe_rawColors.ORANGE_345
      },
      [u.PN.AT_RISK]: {
        title: _.t.XRNVzO,
        description: _.intl.string(_.t["hbH+9S"]),
        status: _.t["7f+4Lg"],
        Icon: l.EpV,
        color: o.A.colors.ICON_FEEDBACK_CRITICAL
      },
      [u.PN.SUSPENDED]: {
        title: _.t.MExFkz,
        description: _.intl.string(_.t["2liUvt"]),
        status: _.t["0OONGB"],
        Icon: l.aXh,
        color: o.A.colors.ICON_MUTED
      }
    },
    {
      title: O,
      description: v,
      color: A,
      Icon: I
    } = b[e.state],
    S = Object.keys(b).length;
  return (0, r.jsxs)(l.ZpM, {
    className: h.kL,
    outline: false,
    children: [(0, r.jsx)("div", {
      className: h.ME,
      children: (0, r.jsx)(f.A, {
        user: t,
        size: l._3J.SIZE_80
      })
    }), (0, r.jsxs)("div", {
      className: h.h5,
      children: [(0, r.jsxs)("div", {
        className: h.DD,
        children: [(0, r.jsx)(l.Heading, {
          color: "text-strong",
          variant: "heading-lg/normal",
          children: _.intl.format(O, {
            hook: e => (0, r.jsx)(l.Text, {
              style: {
                color: A.css
              },
              variant: "heading-lg/bold",
              tag: "span",
              children: e
            })
          })
        }), (0, r.jsx)(l.Text, {
          color: "text-default",
          variant: "text-sm/normal",
          children: v
        })]
      }), (0, r.jsxs)("div", {
        className: h.vK,
        style: {
          height: n
        },
        children: [(0, r.jsx)("div", {
          className: h.n8
        }), Object.entries(b).map((t, n) => {
          let [i, a] = t, s = parseInt(i) === e.state;
          return (0, r.jsxs)("div", {
            className: h.Kx,
            ref: e => {
              E.current[parseInt(i)] = e
            },
            children: [s ? (0, r.jsx)(I, {
              className: h.xL,
              color: a.color
            }) : (0, r.jsx)("div", {
              className: h.xL,
              style: {
                marginLeft: 0 === n ? false : 0,
                marginRight: n === S - 1 ? false : 0
              },
              children: (0, r.jsx)("div", {
                className: h.Ie
              })
            }), _.intl.format(a.status, {
              hook: e => (0, r.jsx)(l.Text, {
                color: "text-default",
                variant: "text-sm/normal",
                className: h.Rh,
                children: e
              })
            })]
          }, n)
        })]
      })]
    })]
  })
}