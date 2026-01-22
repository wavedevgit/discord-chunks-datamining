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
let f = "expanded-area";

function b(e) {
  let {
    attachments: t,
    role: n,
    roleLocked: l
  } = e, [i, x] = a.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(s.DUT, {
      className: h.YA,
      onClick: () => {
        x(e => !e)
      },
      "aria-expanded": i,
      "aria-controls": f,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: i ? m.intl.string(m.t.DKNxgB) : m.intl.string(m.t.ESEKua)
      }), (0, r.jsx)(c.A, {
        className: h.Rq,
        direction: i ? c.A.Directions.UP : c.A.Directions.DOWN
      })]
    }), (0, r.jsx)(s.hKd, {
      size: 12
    }), i && (0, r.jsxs)("ul", {
      className: h.cu,
      id: f,
      children: [(0, r.jsx)(d.A, {
        label: m.intl.string(m.t.DWYJua),
        children: (0, r.jsx)("ul", {
          className: h.yO,
          children: t.map(e => (0, r.jsx)(o.A, {
            attachment: e
          }, e.id))
        })
      }), null != n && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: h.me
        }), (0, r.jsx)(d.A, {
          label: m.intl.string(m.t.o9xphc),
          children: (0, r.jsx)(u.A, {
            role: n,
            textVariant: "text-md/medium",
            locked: l
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
  } = e, a = null != (t = n.attachments) ? t : [], s = (0, l.bG)([i.A], () => {
    var e;
    return i.A.getRole(n.guild_id, null != (e = n.role_id) ? e : x.dJq)
  }), c = !n.has_entitlement;
  return 0 === a.length && null == s ? null : 0 === a.length && null != s ? (0, r.jsx)(u.A, {
    role: s,
    textVariant: "text-md/medium",
    locked: c
  }) : (0, r.jsx)(b, {
    attachments: a,
    role: s,
    roleLocked: c
  })
}