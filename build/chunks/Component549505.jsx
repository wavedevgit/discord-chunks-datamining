/** Chunk was on 71517 **/
/** chunk id: 549505, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk547972 = require("./547972.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk332325 = require("./332325.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk440039 = require("./440039.js");

function m(t) {
  let {
    transitionState: e,
    onClose: r
  } = t;
  return (0, i.jsx)(n.Modal, {
    transitionState: e,
    title: d.intl.string(d.t.pWLGnF),
    subtitle: d.intl.string(d.t.WKxo8n),
    actions: [],
    onClose: r,
    children: (0, i.jsx)(u, {
      onClose: r
    })
  })
}

function u(t) {
  let {
    onClose: e
  } = t, r = [{
    icon: (0, i.jsx)(s.iFz, {
      size: "refresh_sm",
      color: "currentColor"
    }),
    text: d.intl.string(d.t.vXBrdg)
  }, {
    icon: (0, i.jsx)(s.kBi, {
      size: "refresh_sm",
      color: "currentColor"
    }),
    text: d.intl.string(d.t["i7/QHN"])
  }, {
    icon: (0, i.jsx)(s.lMe, {
      size: "refresh_sm",
      color: "currentColor"
    }),
    text: d.intl.string(d.t.ZmBfKJ)
  }, {
    icon: (0, i.jsx)(s.ewm, {
      size: "refresh_sm",
      color: "currentColor"
    }),
    text: d.intl.format(d.t.wBlJCr, {
      recentActivityURL: l.Z.getArticleURL(c.BhN.MEMBER_LIST_ACTIVITY_FEED),
      handleActivityPrivacyClick: () => {
        e(), (0, o.Z)(a.Z.ACTIVITY_PRIVACY)
      }
    })
  }];
  return (0, i.jsxs)("div", {
    className: x.notes,
    children: [(0, i.jsx)(s.Text, {
      variant: "text-sm/semibold",
      children: d.intl.string(d.t.YjqBbg)
    }), r.map((t, e) => {
      let {
        icon: r,
        text: n
      } = t;
      return (0, i.jsxs)("div", {
        className: x.badgeNote,
        children: [(0, i.jsx)("div", {
          className: x.badge,
          children: r
        }), (0, i.jsx)(s.Text, {
          variant: "text-sm/medium",
          color: "text-tertiary",
          children: n
        })]
      }, "memberlist-learn-more-note-".concat(e))
    })]
  })
}