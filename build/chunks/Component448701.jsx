/** Chunk was on 26766 **/
/** chunk id: 448701, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk587895 = require("./587895.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk421021 = require("./421021.js");
let m = Chunk975571.A.getArticleURL(Chunk652215.MVz.MISSING_ENTITLEMENT),
  u = Chunk311907.Ay.connectStores([Chunk587895.A], t => {
    let {
      applicationId: i
    } = t;
    return {
      application: r.A.getApplication(i)
    }
  })(function(t) {
    let {
      application: i,
      transitionState: n,
      onClose: a
    } = t;
    return (0, e.jsxs)(l.EOs, {
      transitionState: n,
      size: l.rIJ.MEDIUM,
      parentComponent: "MissingEntitlementModal",
      children: [(0, e.jsxs)(l.rQ0, {
        align: s.A.Align.CENTER,
        justify: s.A.Justify.BETWEEN,
        children: [(0, e.jsx)(l.Heading, {
          variant: "heading-lg/semibold",
          children: null != i ? p.intl.formatToPlainString(p.t.N2mILu, {
            applicationName: i.name
          }) : p.intl.string(p.t.nS8PUT)
        }), (0, e.jsx)(l.s_y, {
          onClick: a
        })]
      }), (0, e.jsxs)(l.$mQ, {
        children: [(0, e.jsx)("div", {
          className: d.r
        }), (0, e.jsx)(l.Text, {
          className: d.Q,
          variant: "text-md/normal",
          children: null != i ? p.intl.format(p.t["MM/7qx"], {
            applicationName: i.name,
            supportArticleURL: m
          }) : p.intl.format(p.t["IfQUx+"], {
            supportArticleURL: m
          })
        })]
      }), (0, e.jsx)(l.jlY, {
        children: (0, e.jsx)(l.Button, {
          variant: "primary",
          text: p.intl.string(p.t.BddRzS),
          onClick: a
        })
      })]
    })
  })