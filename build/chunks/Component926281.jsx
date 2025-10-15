/** Chunk was on 25120 **/
/** chunk id: 926281, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk709867 = require("./709867.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      r.push.apply(r, n)
    }
    return r
  })(Object(t)).forEach(function(r) {
    Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
  }), e
}

function d(e) {
  let {
    modalProps: t,
    onConfirm: r
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
  }), [g, O] = c.useState(false), f = Object.values(d).some(e => e.checked);
  return (0, n.jsx)(i.Modal, {
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
        if (!f) return void O(true);
        let e = Object.keys(d).filter(e => d[e].checked).map(e => d[e].value);
        null == r || r(e), t.onClose()
      },
      variant: "primary"
    }],
    children: (0, n.jsx)(l.c, {
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
          let r = u({}, t);
          return Object.keys(r).forEach(e => {
            r[e] = b(u({}, r[e]), {
              checked: false
            })
          }), e.forEach(e => {
            r[e] = b(u({}, r[e]), {
              checked: true
            })
          }), r
        }), e.length > 0 && g && O(false)
      },
      errorMessage: g ? o.intl.string(o.t.W1Rw3D) : true
    })
  })
}