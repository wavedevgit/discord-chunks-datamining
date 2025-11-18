/** Chunk was on 48748 **/
/** chunk id: 52004, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => x
});
var Chunk54381 = require("./54381.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk119794 = require("./119794.js");
let d = Chunk63063.Z.getArticleURL(Chunk981631.BhN.MISSING_ENTITLEMENT),
  x = Chunk442837.ZP.connectStores([Chunk812206.Z], t => {
    let {
      applicationId: n
    } = t;
    return {
      application: s.Z.getApplication(n)
    }
  })(function(t) {
    let {
      application: n,
      transitionState: i,
      onClose: a
    } = t;
    return (0, e.jsxs)(l.Y0X, {
      transitionState: i,
      size: l.CgR.MEDIUM,
      parentComponent: "MissingEntitlementModal",
      children: [(0, e.jsxs)(l.xBx, {
        align: r.Z.Align.CENTER,
        justify: r.Z.Justify.BETWEEN,
        children: [(0, e.jsx)(l.Heading, {
          variant: "heading-lg/semibold",
          children: null != n ? m.intl.formatToPlainString(m.t.N2mILu, {
            applicationName: n.name
          }) : m.intl.string(m.t.nS8PUT)
        }), (0, e.jsx)(l.olH, {
          onClick: a
        })]
      }), (0, e.jsxs)(l.hzk, {
        children: [(0, e.jsx)("div", {
          className: p.missingEntitlementImage
        }), (0, e.jsx)(l.Text, {
          className: p.text,
          variant: "text-md/normal",
          children: null != n ? m.intl.format(m.t["MM/7qx"], {
            applicationName: n.name,
            supportArticleURL: d
          }) : m.intl.format(m.t["IfQUx+"], {
            supportArticleURL: d
          })
        })]
      }), (0, e.jsx)(l.mzw, {
        children: (0, e.jsx)(l.Button, {
          variant: "primary",
          text: m.intl.string(m.t.BddRzS),
          onClick: a
        })
      })]
    })
  })