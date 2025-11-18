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
  Chunk825782 = require("./825782.js");
let h = "expanded-area";

function p(e) {
  let {
    attachments: t,
    role: n,
    roleLocked: i
  } = e, [l, m] = a.useState(false);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(s.P3F, {
      className: f.viewContents,
      onClick: () => {
        m(e => !e)
      },
      "aria-expanded": l,
      "aria-controls": h,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-sm/medium",
        color: "text-default",
        children: l ? x.intl.string(x.t.DKNxgB) : x.intl.string(x.t.ESEKua)
      }), (0, r.jsx)(o.Z, {
        className: f.caretIcon,
        direction: l ? o.Z.Directions.UP : o.Z.Directions.DOWN
      })]
    }), (0, r.jsx)(s.LZC, {
      size: 12
    }), l && (0, r.jsxs)("ul", {
      className: f.contentsContainer,
      id: h,
      children: [(0, r.jsx)(d.Z, {
        label: x.intl.string(x.t.DWYJua),
        children: (0, r.jsx)("ul", {
          className: f.attachmentGrid,
          children: t.map(e => (0, r.jsx)(c.Z, {
            attachment: e
          }, e.id))
        })
      }), null != n && (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)("div", {
          className: f.separator
        }), (0, r.jsx)(d.Z, {
          label: x.intl.string(x.t.o9xphc),
          children: (0, r.jsx)(u.Z, {
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
  } = e, a = null != (t = n.attachments) ? t : [], s = (0, i.e7)([l.Z], () => {
    var e;
    return l.Z.getRole(n.guild_id, null != (e = n.role_id) ? e : m.lds)
  }), o = !n.has_entitlement;
  return 0 === a.length && null == s ? null : 0 === a.length && null != s ? (0, r.jsx)(u.Z, {
    role: s,
    textVariant: "text-md/medium",
    locked: o
  }) : (0, r.jsx)(p, {
    attachments: a,
    role: s,
    roleLocked: o
  })
}