/** Chunk was on 20212 **/
/** chunk id: 915194, original params: l,n,i (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk922156 = require("./922156.js"),
  Chunk63063 = require("./63063.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk41245 = require("./41245.js");
let h = l => {
  let {
    onClose: n,
    transitionState: i
  } = l, {
    error: h,
    applicationName: x
  } = (0, t.cj)([c.Z, a.Z], () => {
    let l = c.Z.getLastError(),
      n = null;
    if (null != l && null != l.applicationId) {
      let i = a.Z.getApplication(l.applicationId);
      null != i && (n = i.name)
    }
    return {
      error: l,
      applicationName: n
    }
  });
  return (0, r.jsxs)(e.Y0X, {
    transitionState: i,
    size: e.CgR.SMALL,
    "aria-label": u.intl.string(u.t["6kHRYG"]),
    parentComponent: "DispatchErrorModal",
    children: [(0, r.jsxs)(e.xBx, {
      justify: s.Z.Justify.BETWEEN,
      separator: false,
      children: [(0, r.jsx)(s.Z.Child, {
        grow: 1,
        children: (0, r.jsx)(e.X6q, {
          variant: "heading-lg/semibold",
          children: u.intl.string(u.t["6kHRYG"])
        })
      }), (0, r.jsx)(s.Z.Child, {
        grow: 0,
        children: (0, r.jsx)(e.olH, {
          onClick: n
        })
      })]
    }), (0, r.jsx)(e.hzk, {
      children: (0, r.jsxs)("div", {
        className: p.body,
        children: [(0, r.jsx)("div", {
          children: u.intl.format(u.t["NnE/6O"], {
            link: "https://dis.gd/dispatch-error"
          })
        }), (0, r.jsx)("div", {
          className: p.supportCallToAction,
          children: u.intl.string(u.t["o+efY2"])
        }), (0, r.jsx)("div", {
          className: p.errorLabel,
          children: u.intl.string(u.t.BiSnZ2)
        }), (0, r.jsx)("div", {
          className: p.errorDetails,
          children: (0, r.jsxs)("div", {
            children: [null != x ? "Game: ".concat(x, "\n") : null, (null == h ? true : h.applicationId) != null ? "Game ID: ".concat(h.applicationId, "\n") : null, (null == h ? true : h.branchId) != null && (null == h ? true : h.applicationId) !== (null == h ? true : h.branchId) ? "Branch ID: ".concat(null == h ? true : h.branchId, "\n") : null, (null == h ? true : h.code) != null ? "Error Code: ".concat(null == h ? true : h.code, "\n") : null, (null == h ? true : h.uuid) != null ? "Unique Case ID: ".concat(null == h ? true : h.uuid) : null]
          })
        })]
      })
    }), (0, r.jsxs)(e.mzw, {
      children: [(0, r.jsx)(e.zxk, {
        variant: "primary",
        text: u.intl.string(u.t.VdyWmJ),
        onClick: () => {
          window.open(d.Z.getSubmitRequestURL())
        }
      }), (0, r.jsx)(o.zx, {
        look: o.zx.Looks.LINK,
        onClick: n,
        color: p.closeLink,
        children: u.intl.string(u.t.cpT0Cg)
      })]
    })]
  })
}