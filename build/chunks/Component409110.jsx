/** Chunk was on 38062 **/
/** chunk id: 409110, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk485386 = require("./485386.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk598952 = require("./598952.jsx"),
  Chunk392739 = require("./392739.jsx"),
  Chunk916001 = require("./916001.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk405122 = require("./405122.js");
let h = "expanded-area";

function p(e) {
  let {
    attachments: t,
    role: n,
    roleLocked: i
  } = e, [s, m] = r.useState(false);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(l.P3F, {
      className: f.viewContents,
      onClick: () => {
        m(e => !e)
      },
      "aria-expanded": s,
      "aria-controls": h,
      children: [(0, a.jsx)(l.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: s ? x.intl.string(x.t.DKNxgB) : x.intl.string(x.t.ESEKua)
      }), (0, a.jsx)(o.Z, {
        className: f.caretIcon,
        direction: s ? o.Z.Directions.UP : o.Z.Directions.DOWN
      })]
    }), (0, a.jsx)(l.LZC, {
      size: 12
    }), s && (0, a.jsxs)("ul", {
      className: f.contentsContainer,
      id: h,
      children: [(0, a.jsx)(d.Z, {
        label: x.intl.string(x.t.DWYJua),
        children: (0, a.jsx)("ul", {
          className: f.attachmentGrid,
          children: t.map(e => (0, a.jsx)(c.Z, {
            attachment: e
          }, e.id))
        })
      }), null != n && (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)("div", {
          className: f.separator
        }), (0, a.jsx)(d.Z, {
          label: x.intl.string(x.t.o9xphc),
          children: (0, a.jsx)(u.Z, {
            role: n,
            textVariant: "text-md/medium",
            locked: i
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
  } = e, r = null != (t = n.attachments) ? t : [], l = (0, i.e7)([s.Z], () => {
    var e;
    return s.Z.getRole(n.guild_id, null != (e = n.role_id) ? e : m.lds)
  }), o = !n.has_entitlement;
  return 0 === r.length && null == l ? null : 0 === r.length && null != l ? (0, a.jsx)(u.Z, {
    role: l,
    textVariant: "text-md/medium",
    locked: o
  }) : (0, a.jsx)(p, {
    attachments: r,
    role: l,
    roleLocked: o
  })
}