/** Chunk was on 75708 **/
/** chunk id: 821035, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => j
}), require("./290780.js"), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk524437 = require("./524437.js"),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk247206 = require("./247206.js"),
  Chunk656577 = require("./656577.js"),
  Chunk294602 = require("./294602.js"),
  Chunk249996 = require("./249996.jsx"),
  Chunk880257 = require("./880257.js"),
  Chunk63063 = require("./63063.js"),
  Chunk838436 = require("./838436.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk726985 = require("./726985.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk298136 = require("./298136.js");

function j(e) {
  var t;
  let {
    isNested: n = false
  } = e, j = null == (t = (0, m.Z)()) || t, {
    explicitContentGuilds: E,
    explicitContentFriendDm: C,
    explicitContentNonFriendDm: O
  } = (0, d.B)(), v = e => {
    let t = Object.values(e);
    if ((0, o.Ks)() && t.includes(r.Q4.SHOW)) return void a.Z.showAgeVerificationGetStartedModal(l.cU.SENSITIVE_MEDIA_FILTER_SETTINGS);
    (0, c.zj)(e)
  }, S = [{
    value: r.Q4.BLUR,
    label: x.intl.string(x.t.S49UaW)
  }, {
    value: r.Q4.BLOCK,
    label: x.intl.string(x.t["D/157e"])
  }], T = [{
    value: r.Q4.BLUR,
    label: x.intl.string(x.t.S49UaW)
  }], I = {
    value: r.Q4.SHOW,
    label: x.intl.string(x.t["5k5OFh"])
  };
  return j && (S.unshift(I), T.unshift(I)), (0, i.jsx)(g.U, {
    setting: f.s6.PRIVACY_SENSITIVE_MEDIA_V2,
    scrollPosition: h.FY.EXPLICIT_MEDIA_REDACTION_V2,
    children: n ? (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)("div", {
        className: _.selectItemRow,
        children: [(0, i.jsx)(s.Text, {
          variant: "text-md/medium",
          children: x.intl.string(x.t["+uI23N"])
        }), (0, i.jsx)(s.q4e, {
          look: s.qQH.CUSTOM,
          options: S,
          value: C,
          onChange: e => v({
            explicitContentFriendDm: e
          }),
          renderOptionValue: e => {
            let [t] = e;
            return (0, i.jsx)(u.Z, {
              option: t
            })
          },
          renderOptionLabel: e => (0, i.jsx)(u.Z, {
            option: e
          })
        })]
      }), (0, i.jsxs)("div", {
        className: _.selectItemRow,
        children: [(0, i.jsx)(s.Text, {
          variant: "text-md/medium",
          children: x.intl.string(x.t["Yh+HX1"])
        }), (0, i.jsx)(s.q4e, {
          look: s.qQH.CUSTOM,
          options: S,
          value: O,
          onChange: e => v({
            explicitContentNonFriendDm: e
          }),
          renderOptionValue: e => {
            let [t] = e;
            return (0, i.jsx)(u.Z, {
              option: t
            })
          },
          renderOptionLabel: e => (0, i.jsx)(u.Z, {
            option: e
          })
        })]
      }), (0, i.jsxs)("div", {
        className: _.selectItemRow,
        children: [(0, i.jsx)(s.Text, {
          variant: "text-md/medium",
          color: j ? "text-primary" : "text-muted",
          children: x.intl.string(x.t["FP+a4+"])
        }), (0, i.jsx)(s.q4e, {
          look: s.qQH.CUSTOM,
          options: T,
          value: E,
          onChange: e => v({
            explicitContentGuilds: e
          }),
          isDisabled: !j,
          renderOptionValue: e => {
            let [t] = e;
            return (0, i.jsx)(u.Z, {
              option: t
            })
          },
          renderOptionLabel: e => (0, i.jsx)(u.Z, {
            option: e
          })
        })]
      }), (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: x.intl.string(x.t.Wnojv7)
      })]
    }) : (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(g.H, {
        header: x.intl.string(x.t["c/UOwM"]),
        description: x.intl.format(x.t.ZUvrwM, {
          learnMoreLink: p.Z.getArticleURL(b.BhN.EXPLICIT_MEDIA_REDACTION)
        })
      }), (0, i.jsx)(s.xJW, {
        tag: s.RB0.H3,
        title: x.intl.string(x.t["6k0AgI"]),
        titleClassName: _.selectItemTitle,
        children: (0, i.jsx)(s.q4e, {
          options: S,
          value: C,
          onChange: e => v({
            explicitContentFriendDm: e
          })
        })
      }), (0, i.jsx)(s.xJW, {
        tag: s.RB0.H3,
        title: x.intl.string(x.t.D2EGSk),
        titleClassName: _.selectItemTitle,
        children: (0, i.jsx)(s.q4e, {
          options: S,
          value: O,
          onChange: e => v({
            explicitContentNonFriendDm: e
          })
        })
      }), (0, i.jsx)(s.xJW, {
        tag: s.RB0.H3,
        title: x.intl.string(x.t["FP+a4+"]),
        titleClassName: _.selectItemTitle,
        children: (0, i.jsx)(s.q4e, {
          options: T,
          value: E,
          onChange: e => v({
            explicitContentGuilds: e
          }),
          isDisabled: !j
        })
      })]
    })
  })
}