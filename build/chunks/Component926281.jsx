/** Chunk was on 25120 **/
/** chunk id: 926281, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
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

function p(e) {
  let {
    modalProps: t,
    onConfirm: r
  } = e, [p, g] = i.useState({
    Account: {
      value: "Account",
      label: u.intl.string(u.t["rfe/x8"]),
      checked: false
    },
    Analytics: {
      value: "Analytics",
      label: u.intl.string(u.t["j+d6RE"]),
      checked: false
    },
    Activities: {
      value: "Activities",
      label: u.intl.string(u.t.KO88BQ),
      checked: false
    },
    Ads: {
      value: "Ads",
      label: u.intl.string(u.t.wb7QJy),
      checked: false
    },
    Messages: {
      value: "Messages",
      label: u.intl.string(u.t["0dO1t7"]),
      checked: false
    },
    Programs: {
      value: "Programs",
      label: u.intl.string(u.t.M4ddeX),
      checked: false
    },
    Servers: {
      value: "Servers",
      label: u.intl.string(u.t.JN9c39),
      checked: false
    },
    Zendesk: {
      value: "Zendesk",
      label: u.intl.string(u.t.yaLeEB),
      checked: false
    }
  }), [v, y] = i.useState(false), O = Object.values(p).some(e => e.checked);
  return (0, n.jsx)(l.Modal, {
    title: u.intl.string(u.t.jxXMEx),
    subtitle: u.intl.format(u.t.fSv59f, {
      helpdeskArticle: a.Z.getArticleURL(o.BhN.GDPR_PACKAGE_CONTENTS)
    }),
    transitionState: t.transitionState,
    onClose: t.onClose,
    actions: [{
      text: u.intl.string(u.t.jpVjsr),
      onClick: () => {
        t.onClose()
      },
      variant: "secondary"
    }, {
      text: u.intl.string(u.t.NYgNg4),
      onClick: () => {
        if (!O) return void y(true);
        let e = Object.keys(p).filter(e => p[e].checked).map(e => p[e].value);
        null == r || r(e), t.onClose()
      },
      variant: "primary"
    }],
    children: (0, n.jsxs)(s.Kqy, {
      direction: "vertical",
      gap: 8,
      children: [Object.keys(p).map(e => {
        let {
          label: t,
          checked: r
        } = p[e];
        return (0, n.jsx)(c.$q, {
          type: c.M0.INVERTED,
          value: r,
          onChange: (t, r) => {
            g(t => b(d({}, t), {
              [e]: b(d({}, t[e]), {
                checked: r
              })
            })), r && v && y(false)
          },
          children: (0, n.jsx)(s.Text, {
            variant: "text-md/normal",
            children: t
          })
        }, e)
      }), v && (0, n.jsx)(s.Text, {
        variant: "text-sm/normal",
        color: "text-danger",
        children: u.intl.string(u.t.W1Rw3N)
      })]
    })
  })
}