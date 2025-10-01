/** Chunk was on 25120 **/
/** chunk id: 926281, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function d(e) {
  let {
    modalProps: t,
    onConfirm: n
  } = e, [d, p] = i.useState({
    Account: {
      value: "Account",
      label: o.intl.string(o.t["rfe/x8"]),
      checked: false
    },
    Analytics: {
      value: "Analytics",
      label: o.intl.string(o.t["j+d6RE"]),
      checked: false
    },
    Activities: {
      value: "Activities",
      label: o.intl.string(o.t.KO88BQ),
      checked: false
    },
    Ads: {
      value: "Ads",
      label: o.intl.string(o.t.wb7QJy),
      checked: false
    },
    Messages: {
      value: "Messages",
      label: o.intl.string(o.t["0dO1t7"]),
      checked: false
    },
    Servers: {
      value: "Servers",
      label: o.intl.string(o.t.JN9c39),
      checked: false
    },
    Zendesk: {
      value: "Zendesk",
      label: o.intl.string(o.t.yaLeEB),
      checked: false
    }
  }), [g, O] = i.useState(false), y = Object.values(d).some(e => e.checked);
  return (0, r.jsx)(c.Modal, {
    title: o.intl.string(o.t.jxXMEx),
    subtitle: o.intl.format(o.t.fSv59f, {
      helpdeskArticle: s.Z.getArticleURL(a.BhN.GDPR_PACKAGE_CONTENTS)
    }),
    transitionState: t.transitionState,
    onClose: t.onClose,
    actions: [{
      text: o.intl.string(o.t.jpVjsr),
      onClick: () => {
        t.onClose()
      },
      variant: "secondary"
    }, {
      text: o.intl.string(o.t.NYgNg4),
      onClick: () => {
        if (!y) return void O(true);
        let e = Object.keys(d).filter(e => d[e].checked).map(e => d[e].value);
        null == n || n(e), t.onClose()
      },
      variant: "primary"
    }],
    children: (0, r.jsxs)(l.Kqy, {
      direction: "vertical",
      gap: 8,
      children: [Object.keys(d).map(e => {
        let {
          label: t,
          checked: n
        } = d[e];
        return (0, r.jsx)(l.XZJ, {
          checked: n,
          onChange: t => {
            p(n => b(u({}, n), {
              [e]: b(u({}, n[e]), {
                checked: t
              })
            })), t && g && O(false)
          },
          label: t
        }, e)
      }), g && (0, r.jsx)(l.Text, {
        variant: "text-sm/normal",
        color: "text-danger",
        children: o.intl.string(o.t.W1Rw3N)
      })]
    })
  })
}