/** Chunk was on 48748 **/
/** chunk id: 52004, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk812206 = require("./812206.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk281556 = require("./281556.js");
let x = Chunk63063.Z.getArticleURL(Chunk981631.BhN.MISSING_ENTITLEMENT),
  d = Chunk442837.ZP.connectStores([Chunk812206.Z], t => {
    let {
      applicationId: i
    } = t;
    return {
      application: l.Z.getApplication(i)
    }
  })(function(t) {
    let {
      application: i,
      transitionState: n,
      onClose: a
    } = t;
    return (0, e.jsxs)(s.Y0X, {
      transitionState: n,
      size: s.CgR.MEDIUM,
      parentComponent: "MissingEntitlementModal",
      children: [(0, e.jsxs)(s.xBx, {
        align: r.Z.Align.CENTER,
        justify: r.Z.Justify.BETWEEN,
        children: [(0, e.jsx)(s.vwX, {
          tag: s.RB0.H4,
          children: null != i ? m.intl.formatToPlainString(m.t.N2mILi, {
            applicationName: i.name
          }) : m.intl.string(m.t.nS8PUV)
        }), (0, e.jsx)(s.olH, {
          onClick: a
        })]
      }), (0, e.jsxs)(s.hzk, {
        children: [(0, e.jsx)("div", {
          className: p.missingEntitlementImage
        }), (0, e.jsx)(s.Text, {
          className: p.text,
          variant: "text-md/normal",
          children: null != i ? m.intl.format(m.t["MM/7q6"], {
            applicationName: i.name,
            supportArticleURL: x
          }) : m.intl.format(m.t.IfQUx8, {
            supportArticleURL: x
          })
        })]
      }), (0, e.jsx)(s.mzw, {
        children: (0, e.jsx)(s.zxk, {
          variant: "primary",
          text: m.intl.string(m.t.BddRzc),
          onClick: a
        })
      })]
    })
  })