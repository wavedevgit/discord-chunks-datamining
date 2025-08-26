/** Chunk was on 72853 **/
/** chunk id: 852758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk37234 = require("./37234.js"),
  Chunk809206 = require("./809206.js"),
  Chunk110924 = require("./110924.js"),
  Chunk714338 = require("./714338.js"),
  Chunk213609 = require("./213609.js"),
  Chunk429142 = require("./429142.js"),
  Chunk144114 = require("./144114.js"),
  Chunk210887 = require("./210887.js"),
  Chunk23434 = require("./23434.js"),
  Chunk1964 = require("./1964.js"),
  Chunk762756 = require("./762756.jsx"),
  Chunk308569 = require("./308569.js"),
  Chunk981631 = require("./981631.js"),
  Chunk815660 = require("./815660.js"),
  Chunk388032 = require("./388032.jsx");

function A(e) {
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

function _(e, t) {
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

function P() {
  let {
    action: e,
    theme: t
  } = (0, Chunk442837.cj)([Chunk23434.Z, Chunk210887.Z], () => ({
    action: Chunk23434.Z.getAction(),
    theme: Chunk210887.Z.theme
  })), P = Chunk1964.Z.getVerificationTypes(module), [S, I] = Chunk647438.useState(0), N = (0, Chunk110924.Z)(P);
  (0, Chunk213609.Z)({
    type: Chunk990547.ImpressionTypes.MODAL,
    name: Chunk990547.ImpressionNames.USER_ACTION_REQUIRED,
    properties: {
      verification_type: P[0],
      verification_types: P
    }
  }, {}, [P.toString()]);
  let k = () => {
    (0, Chunk809206.FD)(), (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await require.e("35401").then(require.bind(require, 284549));
      return t => (0, r.jsx)(e, A({}, t))
    }, {
      modalKey: Chunk308569.F0,
      Layer: Chunk429142.ZP
    })
  };
  return Chunk647438.useEffect(() => (Chunk714338.Z.disable(), () => {
    Chunk714338.Z.enable()
  }), []), Chunk647438.useEffect(() => {
    (null == N ? true : N[0]) === Chunk981631.PUi.PHONE && (null == P ? true : P[0]) === Chunk981631.PUi.EMAIL && (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(require.bind(require, 468026));
      return t => (0, r.jsx)(e, _(A({}, t), {
        title: w.intl.string(w.t.KLnLIC),
        body: w.intl.string(w.t.XGbCq6),
        confirmText: w.intl.string(w.t["3oK4q6"])
      }))
    }, {
      modalKey: Chunk308569.HR,
      Layer: Chunk429142.ZP,
      onCloseCallback: k
    })
  }, [P, N]), (0, Chunk951288.jsx)(Chunk762756.Z, {
    types: P,
    captchaKey: S,
    onCaptchaVerify: e => {
      c.tn.post({
        url: E.ANM.CAPTCHA,
        body: {
          captcha_key: e
        },
        oldFormErrors: true,
        rejectWithError: true
      }).then(u.xf, () => {
        I(e => e + 1)
      })
    },
    theme: exports,
    onClick: e => {
      e === E.PUi.EMAIL_OR_PHONE || e === E.PUi.EMAIL || e === E.PUi.REVERIFY_EMAIL ? k() : (0, o.ZDy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 607018));
        return t => (0, r.jsx)(e, A({
          reason: h.L.USER_ACTION_REQUIRED
        }, t))
      }, {
        modalKey: O.M,
        Layer: y.ZP
      })
    },
    onLogout: () => {
      (0, Chunk481060.ZDy)(async () => {
        let {
          ConfirmModal: e,
          Text: t
        } = await Promise.resolve().then(require.bind(require, 481060));
        return n => (0, r.jsx)(e, _(A({
          header: w.intl.string(w.t["2jxGen"]),
          confirmText: w.intl.string(w.t["2jxGen"]),
          cancelText: w.intl.string(w.t["ETE/oK"]),
          onConfirm: () => s.Z.logout("verification")
        }, n), {
          children: (0, r.jsx)(t, {
            variant: "text-md/normal",
            children: w.intl.string(w.t.SUnWBA)
          })
        }))
      }, {
        Layer: Chunk429142.ZP
      })
    }
  })
}