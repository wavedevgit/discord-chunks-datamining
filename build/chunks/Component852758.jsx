/** Chunk was on 79041 **/
/** chunk id: 852758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
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

function E(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      a = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), a.forEach(function(t) {
      var a;
      a = n[t], t in e ? Object.defineProperty(e, t, {
        value: a,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = a
    })
  }
  return e
}

function T(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O() {
  let {
    action: e,
    theme: t
  } = (0, Chunk442837.cj)([Chunk23434.Z, Chunk210887.Z], () => ({
    action: Chunk23434.Z.getAction(),
    theme: Chunk210887.Z.theme
  })), O = Chunk1964.Z.getVerificationTypes(module), [N, P] = Chunk647438.useState(0), I = (0, Chunk110924.Z)(O);
  (0, Chunk213609.Z)({
    type: Chunk990547.ImpressionTypes.MODAL,
    name: Chunk990547.ImpressionNames.USER_ACTION_REQUIRED,
    properties: {
      verification_type: O[0],
      verification_types: O
    }
  }, {}, [O.toString()]);
  let w = () => {
    (0, Chunk809206.FD)(), (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await require.e("35401").then(require.bind(require, 284549));
      return t => (0, a.jsx)(e, E({}, t))
    }, {
      modalKey: Chunk308569.F0,
      Layer: Chunk429142.ZP
    })
  };
  return Chunk647438.useEffect(() => (Chunk714338.Z.disable(), () => {
    Chunk714338.Z.enable()
  }), []), Chunk647438.useEffect(() => {
    (null == I ? true : I[0]) === Chunk981631.PUi.PHONE && (null == O ? true : O[0]) === Chunk981631.PUi.EMAIL && (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(require.bind(require, 468026));
      return t => (0, a.jsx)(e, T(E({}, t), {
        title: S.intl.string(S.t.KLnLIP),
        body: S.intl.string(S.t.XGbCq3),
        confirmText: S.intl.string(S.t["3oK4qw"])
      }))
    }, {
      modalKey: Chunk308569.HR,
      Layer: Chunk429142.ZP,
      onCloseCallback: w
    })
  }, [O, I]), (0, Chunk951288.jsx)(Chunk762756.Z, {
    types: O,
    captchaKey: N,
    onCaptchaVerify: e => {
      o.tn.post({
        url: y.ANM.CAPTCHA,
        body: {
          captcha_key: e
        },
        oldFormErrors: true,
        rejectWithError: true
      }).then(d.xf, () => {
        P(e => e + 1)
      })
    },
    theme: exports,
    onClick: e => {
      e === y.PUi.EMAIL_OR_PHONE || e === y.PUi.EMAIL || e === y.PUi.REVERIFY_EMAIL ? w() : (0, s.ZDy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 607018));
        return t => (0, a.jsx)(e, E({
          layerContext: x.mK,
          reason: f.L.USER_ACTION_REQUIRED
        }, t))
      }, {
        modalKey: C.M,
        Layer: x.ZP
      })
    },
    onLogout: () => {
      (0, Chunk481060.ZDy)(async () => {
        let {
          ConfirmModal: e,
          Text: t
        } = await Promise.resolve().then(require.bind(require, 481060));
        return n => (0, a.jsx)(e, T(E({
          header: S.intl.string(S.t["2jxGer"]),
          confirmText: S.intl.string(S.t["2jxGer"]),
          cancelText: S.intl.string(S.t["ETE/oC"]),
          onConfirm: () => c.Z.logout("verification")
        }, n), {
          children: (0, a.jsx)(t, {
            variant: "text-md/normal",
            children: S.intl.string(S.t.SUnWBB)
          })
        }))
      }, {
        Layer: Chunk429142.ZP
      })
    }
  })
}