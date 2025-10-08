/** Chunk was on 95468 **/
/** chunk id: 650233, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  H: () => h,
  default: () => p
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk390885 = require("./390885.js"),
  Chunk495784 = require("./495784.js"),
  Chunk950012 = require("./950012.jsx"),
  Chunk161836 = require("./161836.jsx"),
  Chunk630724 = require("./630724.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk480963 = require("./480963.js");

function p(e) {
  let {
    transitionState: t,
    onClose: n,
    isNUXFlow: p
  } = e;
  return l.useEffect(() => {
    o.Z.hideHubUpsell(), p && s.Z.flowStep(u.MK.ORGANIC, u.EW.HUB_CONNECTION)
  }, [p]), (0, r.jsx)(a.Y0X, {
    className: f.modalRoot,
    transitionState: t,
    "aria-label": m.intl.string(m.t["3khS8P"]),
    impression: {
      impressionName: i.ImpressionNames.HUB_EMAIL_SIGNUP
    },
    parentComponent: "HubEmailConnectionModal",
    children: (0, r.jsx)(a.hzk, {
      style: {
        overflow: "hidden",
        paddingRight: "0px"
      },
      paddingFix: false,
      className: f.modalContent,
      children: (0, r.jsxs)("div", {
        className: f.container,
        children: [(0, r.jsx)("div", {
          className: f.sidebarContainer,
          children: (0, r.jsx)(d.Z, {})
        }), (0, r.jsxs)("div", {
          className: f.contentContainer,
          children: [(0, r.jsx)(a.olH, {
            onClick: n,
            className: f.closeButton
          }), (0, r.jsx)(c.Z, {
            isNUXFlow: p,
            onClose: n
          })]
        })]
      })
    })
  })
}
let h = e => {
  let {
    invite: t
  } = e;
  return (0, r.jsxs)("div", {
    className: f.container,
    children: [(0, r.jsx)("div", {
      className: f.sidebarContainer,
      children: (0, r.jsx)(d.Z, {})
    }), (0, r.jsx)("div", {
      className: f.contentContainer,
      children: (0, r.jsx)(c.Z, {
        invite: t
      })
    })]
  })
}