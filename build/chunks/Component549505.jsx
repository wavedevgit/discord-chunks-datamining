/** Chunk was on 71517 **/
/** chunk id: 549505, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => _
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk547972 = require("./547972.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk332325 = require("./332325.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk688364 = require("./688364.js"),
  Chunk83173 = require("./83173.js");

function _(e) {
  let {
    transitionState: t,
    onClose: a
  } = e;
  return (0, s.jsxs)(n.Y0X, {
    transitionState: t,
    size: n.CgR.DYNAMIC,
    className: m.modalRoot,
    parentComponent: "MemberListContentLearnMoreModal",
    children: [(0, s.jsxs)(n.xBx, {
      separator: false,
      className: m.modalHeader,
      children: [(0, s.jsx)("div", {
        className: m.imageFrame,
        children: (0, s.jsx)("img", {
          alt: c.intl.string(c.t.AWkQTk),
          src: x,
          className: m.heroImage
        })
      }), (0, s.jsxs)("div", {
        className: m.headerWrapper,
        children: [(0, s.jsx)(n.X6q, {
          variant: "heading-xl/bold",
          children: c.intl.string(c.t.gb37Ky)
        }), (0, s.jsx)(i.Z, {
          className: m.betaTag
        })]
      })]
    }), (0, s.jsxs)(n.hzk, {
      className: m.modalContent,
      children: [(0, s.jsxs)("div", {
        className: m.modalContentFrame,
        children: [(0, s.jsx)(n.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          children: c.intl.string(c.t.WKxo8v)
        }), (0, s.jsx)(h, {})]
      }), (0, s.jsxs)("div", {
        className: m.modalFooter,
        children: [(0, s.jsx)(n.zxk, {
          onClick: a,
          variant: "primary",
          fullWidth: true,
          text: c.intl.string(c.t["x/26d3"])
        }), (0, s.jsx)(n.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          className: m.disclosureText,
          children: c.intl.format(c.t["5Ey5Dw"], {
            recentActivityURL: o.Z.getArticleURL(l.BhN.MEMBER_LIST_ACTIVITY_FEED),
            handleActivityPrivacyClick: () => {
              a(), (0, r.Z)(d.Z.ACTIVITY_PRIVACY)
            }
          })
        })]
      })]
    })]
  })
}
let h = () => {
  let e = [{
    icon: (0, Chunk951288.jsx)(Chunk481060.iFz, {
      className: Chunk688364.icon
    }),
    text: Chunk388032.intl.string(Chunk388032.t.vXBrdn)
  }, {
    icon: (0, Chunk951288.jsx)(Chunk481060.iWm, {
      className: Chunk688364.icon
    }),
    text: Chunk388032.intl.string(Chunk388032.t.aExjOz)
  }, {
    icon: (0, Chunk951288.jsx)(Chunk481060.kBi, {
      className: Chunk688364.icon
    }),
    text: Chunk388032.intl.string(Chunk388032.t["i7/QHB"])
  }, {
    icon: (0, Chunk951288.jsx)(Chunk481060.lMe, {
      className: Chunk688364.icon
    }),
    text: Chunk388032.intl.string(Chunk388032.t.ZmBfKC)
  }];
  return (0, Chunk951288.jsx)("div", {
    className: Chunk688364.notes,
    children: module.map((e, t) => {
      let {
        icon: a,
        text: i
      } = e;
      return (0, s.jsxs)("div", {
        className: m.badgeNote,
        children: [(0, s.jsx)("div", {
          className: m.badge,
          children: a
        }), (0, s.jsx)(n.Text, {
          variant: "text-sm/medium",
          children: i
        })]
      }, "memberlist-learn-more-note-".concat(t))
    })
  })
}