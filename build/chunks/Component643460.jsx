/** Chunk was on 90309 **/
/** chunk id: 643460, original params: t,e,r (module,exports,require) **/
require.d(exports, {
  default: () => m
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk725177 = require("./725177.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk857266 = require("./857266.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk461162 = require("./461162.js");

function m(t) {
  let {
    transitionState: e,
    onClose: r
  } = t;
  return (0, s.jsx)(i.Modal, {
    transitionState: e,
    title: d.intl.string(d.t.pWLGnF),
    subtitle: d.intl.string(d.t.WKxo8n),
    actions: [],
    onClose: r,
    children: (0, s.jsx)(u, {
      onClose: r
    })
  })
}

function u(t) {
  let {
    onClose: e
  } = t, r = [{
    icon: (0, s.jsx)(n.$yI, {
      size: "refresh_sm",
      color: "currentColor"
    }),
    text: d.intl.string(d.t.vXBrdg)
  }, {
    icon: (0, s.jsx)(n.oyn, {
      size: "refresh_sm",
      color: "currentColor"
    }),
    text: d.intl.string(d.t["i7/QHN"])
  }, {
    icon: (0, s.jsx)(n.rMq, {
      size: "refresh_sm",
      color: "currentColor"
    }),
    text: d.intl.string(d.t.ZmBfKJ)
  }, {
    icon: (0, s.jsx)(n.Zes, {
      size: "refresh_sm",
      color: "currentColor"
    }),
    text: d.intl.format(d.t.wBlJCr, {
      recentActivityURL: l.A.getArticleURL(c.MVz.MEMBER_LIST_ACTIVITY_FEED),
      handleActivityPrivacyClick: () => {
        e(), (0, o.A)(a.J.ACTIVITY_PRIVACY)
      }
    })
  }];
  return (0, s.jsxs)("div", {
    className: x.Q2,
    children: [(0, s.jsx)(n.Text, {
      variant: "text-sm/semibold",
      children: d.intl.string(d.t.YjqBbg)
    }), r.map((t, e) => {
      let {
        icon: r,
        text: i
      } = t;
      return (0, s.jsxs)("div", {
        className: x.Gc,
        children: [(0, s.jsx)("div", {
          className: x.qS,
          children: r
        }), (0, s.jsx)(n.Text, {
          variant: "text-sm/medium",
          color: "text-muted",
          children: i
        })]
      }, "memberlist-learn-more-note-".concat(e))
    })]
  })
}