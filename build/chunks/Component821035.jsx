/** Chunk was on web.js **/
/** chunk id: 821035, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  P: () => y
}), require("./290780.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
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
  Chunk789318 = require("./789318.js");

function y(e) {
  var t;
  let {
    isNested: n = false
  } = e, y = null == (t = (0, f.Z)()) || t, {
    explicitContentGuilds: O,
    explicitContentFriendDm: v,
    explicitContentNonFriendDm: I
  } = (0, u.B)(), T = e => {
    let t = Object.values(e);
    if ((0, l.Ks)() && t.includes(i.Q4.SHOW)) return void o.Z.showAgeVerificationGetStartedModal({
      entryPoint: s.cU.SENSITIVE_MEDIA_FILTER_SETTINGS
    });
    (0, c.zj)(e)
  }, S = [{
    value: i.Q4.BLUR,
    label: E.intl.string(E.t.S49UaW)
  }, {
    value: i.Q4.BLOCK,
    label: E.intl.string(E.t["D/157e"])
  }], A = [{
    value: i.Q4.BLUR,
    label: E.intl.string(E.t.S49UaW)
  }], C = {
    value: i.Q4.SHOW,
    label: E.intl.string(E.t["5k5OFh"])
  };
  return y && (S.unshift(C), A.unshift(C)), (0, r.jsx)(p.U, {
    setting: m.s6.PRIVACY_SENSITIVE_MEDIA_V2,
    scrollPosition: h.FY.EXPLICIT_MEDIA_REDACTION_V2,
    children: n ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: b.selectItemRow,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/medium",
          children: E.intl.string(E.t["+uI23N"])
        }), (0, r.jsx)(a.q4e, {
          variant: "text-only",
          className: b.select,
          options: S,
          value: v,
          onChange: e => T({
            explicitContentFriendDm: e
          }),
          renderOptionValue: e => {
            let [t] = e;
            return (0, r.jsx)(d.Z, {
              option: t
            })
          },
          renderOptionLabel: e => (0, r.jsx)(d.Z, {
            option: e
          })
        })]
      }), (0, r.jsxs)("div", {
        className: b.selectItemRow,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/medium",
          children: E.intl.string(E.t["Yh+HX1"])
        }), (0, r.jsx)(a.q4e, {
          variant: "text-only",
          className: b.select,
          options: S,
          value: I,
          onChange: e => T({
            explicitContentNonFriendDm: e
          }),
          renderOptionValue: e => {
            let [t] = e;
            return (0, r.jsx)(d.Z, {
              option: t
            })
          },
          renderOptionLabel: e => (0, r.jsx)(d.Z, {
            option: e
          })
        })]
      }), (0, r.jsxs)("div", {
        className: b.selectItemRow,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/medium",
          color: y ? "text-primary" : "text-muted",
          children: E.intl.string(E.t["FP+a4+"])
        }), (0, r.jsx)(a.q4e, {
          variant: "text-only",
          className: b.select,
          options: A,
          value: O,
          onChange: e => T({
            explicitContentGuilds: e
          }),
          isDisabled: !y,
          renderOptionValue: e => {
            let [t] = e;
            return (0, r.jsx)(d.Z, {
              option: t
            })
          },
          renderOptionLabel: e => (0, r.jsx)(d.Z, {
            option: e
          })
        })]
      }), (0, r.jsx)(a.Text, {
        variant: "text-sm/normal",
        color: "text-muted",
        children: E.intl.string(E.t.Wnojv7)
      })]
    }) : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(p.H, {
        header: E.intl.string(E.t["c/UOwM"]),
        description: E.intl.format(E.t.ZUvrwM, {
          learnMoreLink: _.Z.getArticleURL(g.BhN.EXPLICIT_MEDIA_REDACTION)
        })
      }), (0, r.jsx)(a.xJW, {
        tag: a.RB0.H3,
        title: E.intl.string(E.t["6k0AgI"]),
        titleClassName: b.selectItemTitle,
        children: (0, r.jsx)(a.q4e, {
          variant: "text-only",
          className: b.select,
          options: S,
          value: v,
          onChange: e => T({
            explicitContentFriendDm: e
          })
        })
      }), (0, r.jsx)(a.xJW, {
        tag: a.RB0.H3,
        title: E.intl.string(E.t.D2EGSk),
        titleClassName: b.selectItemTitle,
        children: (0, r.jsx)(a.q4e, {
          variant: "text-only",
          className: b.select,
          options: S,
          value: I,
          onChange: e => T({
            explicitContentNonFriendDm: e
          })
        })
      }), (0, r.jsx)(a.xJW, {
        tag: a.RB0.H3,
        title: E.intl.string(E.t["FP+a4+"]),
        titleClassName: b.selectItemTitle,
        children: (0, r.jsx)(a.q4e, {
          variant: "text-only",
          className: b.select,
          options: A,
          value: O,
          onChange: e => T({
            explicitContentGuilds: e
          }),
          isDisabled: !y
        })
      })]
    })
  })
}