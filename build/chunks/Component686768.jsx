/** Chunk was on 22447 **/
/** chunk id: 686768, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => R
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk772848 = require("./772848.js"),
  Chunk481060 = require("./481060.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk81643 = require("./81643.js"),
  Chunk981631 = require("./981631.js"),
  Chunk800530 = require("./800530.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk740076 = require("./740076.js");
let R = function(t) {
  let {
    transitionState: e,
    entryPoint: n,
    onClose: R
  } = t, {
    loading: b,
    initiateAgeVerification: h
  } = (0, u.WD)(R, true), x = o.useMemo(() => (0, i.Z)(), []);
  o.useEffect(() => {
    (0, d.lA)(x, d.d_.RETRY, n)
  }, [x, n]);
  let E = o.useMemo(() => [{
    title: _.intl.string(_.t.FYkioq),
    description: _.intl.string(_.t.xMfbR0),
    buttonText: _.intl.string(_.t.RtOE1t),
    buttonVariant: "primary",
    buttonIcon: l.Gr1,
    buttonLoading: b,
    onButtonPress: () => {
      h(), (0, d.x3)(x, d.d_.RETRY, d.sU.GET_STARTED)
    }
  }, {
    title: _.intl.string(_.t["LZO+HR"]),
    description: _.intl.string(_.t.N2mHaG),
    buttonText: _.intl.string(_.t["LZO+HR"]),
    buttonIcon: l.Gr1,
    onButtonPress: () => {
      c.Z.openUrl(m.sQ.APPEALS_LINK), (0, d.x3)(x, d.d_.RETRY, d.sU.MANUAL_REVIEW_REQUEST)
    }
  }], [h, x, b]);
  return (0, r.jsx)(l.Y0X, {
    transitionState: e,
    className: p.root,
    parentComponent: "AgeVerificationRetryModal",
    children: (0, r.jsxs)(l.hzk, {
      className: p.content,
      children: [(0, r.jsxs)("div", {
        className: p.headersContainer,
        children: [(0, r.jsx)(l.X6q, {
          variant: "heading-xl/bold",
          children: _.intl.string(_.t["5l3R/v"])
        }), (0, r.jsx)(l.X6q, {
          variant: "heading-md/medium",
          color: "text-default",
          children: _.intl.string(_.t.O7SO0N)
        }), (0, r.jsx)(l.olH, {
          className: p.modalClose,
          onClick: R
        })]
      }), E.map((t, e) => (0, r.jsx)(s.JZ, function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), r.forEach(function(e) {
            var r;
            r = n[e], e in t ? Object.defineProperty(t, e, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = r
          })
        }
        return t
      }({
        buttonIconPosition: "end"
      }, t), e)), (0, r.jsx)(l.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        className: p.learnMore,
        children: _.intl.format(_.t["L+FgkZ"], {
          handleOnHelpUrlHook: () => {
            c.Z.openUrl(a.Z.getArticleURL(f.BhN.TIGGER_PAWTECT_LEARN_MORE)), (0, d.x3)(x, d.d_.RETRY, d.sU.LEARN_MORE)
          }
        })
      })]
    })
  })
}