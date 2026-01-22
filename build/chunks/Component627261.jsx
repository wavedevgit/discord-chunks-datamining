/** Chunk was on 88014 **/
/** chunk id: 627261, original params: n,l,i (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk587895 = require("./587895.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk755439 = require("./755439.js"),
  Chunk975571 = require("./975571.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk137397 = require("./137397.js");
let p = n => {
  let {
    onClose: l,
    transitionState: i
  } = n, {
    error: p,
    applicationName: v
  } = (0, d.cf)([c.A, e.A], () => {
    let n = c.A.getLastError(),
      l = null;
    if (null != n && null != n.applicationId) {
      let i = e.A.getApplication(n.applicationId);
      null != i && (l = i.name)
    }
    return {
      error: n,
      applicationName: l
    }
  });
  return (0, t.jsxs)(a.EOs, {
    transitionState: i,
    size: a.rIJ.SMALL,
    "aria-label": u.intl.string(u.t["6kHRYP"]),
    parentComponent: "DispatchErrorModal",
    children: [(0, t.jsxs)(a.rQ0, {
      justify: s.A.Justify.BETWEEN,
      separator: false,
      children: [(0, t.jsx)(s.A.Child, {
        grow: 1,
        children: (0, t.jsx)(a.Heading, {
          variant: "heading-lg/semibold",
          children: u.intl.string(u.t["6kHRYP"])
        })
      }), (0, t.jsx)(s.A.Child, {
        grow: 0,
        children: (0, t.jsx)(a.s_y, {
          onClick: l
        })
      })]
    }), (0, t.jsx)(a.$mQ, {
      children: (0, t.jsxs)("div", {
        className: h.rf,
        children: [(0, t.jsx)("div", {
          children: u.intl.format(u.t["NnE/6P"], {
            link: "https://dis.gd/dispatch-error"
          })
        }), (0, t.jsx)("div", {
          className: h.dr,
          children: u.intl.string(u.t["o+efY9"])
        }), (0, t.jsx)("div", {
          className: h.Vk,
          children: u.intl.string(u.t.BiSnZ9)
        }), (0, t.jsx)("div", {
          className: h.nf,
          children: (0, t.jsxs)("div", {
            children: [null != v ? "Game: ".concat(v, "\n") : null, (null == p ? true : p.applicationId) != null ? "Game ID: ".concat(p.applicationId, "\n") : null, (null == p ? true : p.branchId) != null && (null == p ? true : p.applicationId) !== (null == p ? true : p.branchId) ? "Branch ID: ".concat(null == p ? true : p.branchId, "\n") : null, (null == p ? true : p.code) != null ? "Error Code: ".concat(null == p ? true : p.code, "\n") : null, (null == p ? true : p.uuid) != null ? "Unique Case ID: ".concat(null == p ? true : p.uuid) : null]
          })
        })]
      })
    }), (0, t.jsxs)(a.jlY, {
      children: [(0, t.jsx)(a.Button, {
        variant: "primary",
        text: u.intl.string(u.t.VdyWmB),
        onClick: () => {
          window.open(o.A.getSubmitRequestURL())
        }
      }), (0, t.jsx)(r.$n, {
        look: r.$n.Looks.LINK,
        onClick: l,
        color: h.bE,
        children: u.intl.string(u.t.cpT0Cq)
      })]
    })]
  })
}