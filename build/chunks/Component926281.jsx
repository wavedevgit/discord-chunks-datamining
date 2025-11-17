/** Chunk was on 25120 **/
/** chunk id: 926281, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  } = e, [d, p] = c.useState({
    Account: {
      value: "Account",
      label: o.intl.string(o.t["rfe/x8"]),
      checked: false
    },
    Analytics: {
      value: "Analytics",
      label: o.intl.string(o.t["j+d6RN"]),
      checked: false
    },
    Activities: {
      value: "Activities",
      label: o.intl.string(o.t.KO88BS),
      checked: false
    },
    Ads: {
      value: "Ads",
      label: o.intl.string(o.t.wb7QJ3),
      checked: false
    },
    Messages: {
      value: "Messages",
      label: o.intl.string(o.t["0dO1t+"]),
      checked: false
    },
    Servers: {
      value: "Servers",
      label: o.intl.string(o.t.JN9c36),
      checked: false
    },
    Zendesk: {
      value: "Zendesk",
      label: o.intl.string(o.t.yaLeEB),
      checked: false
    }
  }), [O, g] = c.useState(false), f = Object.values(d).some(e => e.checked);
  return (0, r.jsx)(i.Modal, {
    title: o.intl.string(o.t.jxXMEz),
    subtitle: o.intl.format(o.t.fSv59b, {
      helpdeskArticle: s.Z.getArticleURL(a.BhN.GDPR_PACKAGE_CONTENTS)
    }),
    transitionState: t.transitionState,
    onClose: t.onClose,
    actions: [{
      text: o.intl.string(o.t.jpVjsg),
      onClick: () => {
        t.onClose()
      },
      variant: "secondary"
    }, {
      text: o.intl.string(o.t.NYgNg9),
      onClick: () => {
        if (!f) return void g(true);
        let e = Object.keys(d).filter(e => d[e].checked).map(e => d[e].value);
        null == n || n(e), t.onClose()
      },
      variant: "primary"
    }],
    children: (0, r.jsx)(l.cOn, {
      selectedValues: Object.keys(d).filter(e => d[e].checked),
      options: Object.keys(d).map(e => {
        let {
          label: t
        } = d[e];
        return {
          label: t,
          value: e
        }
      }),
      onChange: e => {
        p(t => {
          let n = u({}, t);
          return Object.keys(n).forEach(e => {
            n[e] = b(u({}, n[e]), {
              checked: false
            })
          }), e.forEach(e => {
            n[e] = b(u({}, n[e]), {
              checked: true
            })
          }), n
        }), e.length > 0 && O && g(false)
      },
      errorMessage: O ? o.intl.string(o.t.W1Rw3D) : true
    })
  })
}