/** Chunk was on 69079 **/
/** chunk id: 819968, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => j
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk317525 = require("./317525.js"),
  Chunk147925 = require("./147925.jsx"),
  Chunk59375 = require("./59375.jsx"),
  Chunk391442 = require("./391442.jsx"),
  Chunk411342 = require("./411342.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk392294 = require("./392294.js");
let h = "expanded-area";

function p(e) {
  let {
    attachments: t,
    role: n,
    roleLocked: a
  } = e, [s, x] = l.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(i.DUT, {
      className: f.YA,
      onClick: () => {
        x(e => !e)
      },
      "aria-expanded": s,
      "aria-controls": h,
      children: [(0, r.jsx)(i.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: s ? m.intl.string(m.t.DKNxgB) : m.intl.string(m.t.ESEKua)
      }), (0, r.jsx)(o.A, {
        className: f.Rq,
        direction: s ? o.A.Directions.UP : o.A.Directions.DOWN
      })]
    }), (0, r.jsx)(i.hKd, {
      size: 12
    }), s && (0, r.jsxs)("ul", {
      className: f.cu,
      id: h,
      children: [(0, r.jsx)(d.A, {
        label: m.intl.string(m.t.DWYJua),
        children: (0, r.jsx)("ul", {
          className: f.yO,
          children: t.map(e => (0, r.jsx)(c.A, {
            attachment: e
          }, e.id))
        })
      }), null != n && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: f.me
        }), (0, r.jsx)(d.A, {
          label: m.intl.string(m.t.o9xphc),
          children: (0, r.jsx)(u.A, {
            role: n,
            textVariant: "text-md/medium",
            locked: a
          })
        })]
      })]
    })]
  })
}

function j(e) {
  var t;
  let {
    listing: n
  } = e, l = null != (t = n.attachments) ? t : [], i = (0, a.bG)([s.A], () => {
    var e;
    return s.A.getRole(n.guild_id, null != (e = n.role_id) ? e : x.dJq)
  }), o = !n.has_entitlement;
  return 0 === l.length && null == i ? null : 0 === l.length && null != i ? (0, r.jsx)(u.A, {
    role: i,
    textVariant: "text-md/medium",
    locked: o
  }) : (0, r.jsx)(p, {
    attachments: l,
    role: i,
    roleLocked: o
  })
}