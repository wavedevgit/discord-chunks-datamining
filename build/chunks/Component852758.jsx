/** Chunk was on 89744 **/
/** chunk id: 852758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function _(e) {
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

function P(e, t) {
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

function A() {
  let {
    action: e,
    theme: t
  } = (0, Chunk442837.cj)([Chunk23434.Z, Chunk210887.Z], () => ({
    action: Chunk23434.Z.getAction(),
    theme: Chunk210887.Z.theme
  })), A = Chunk1964.Z.getVerificationTypes(module), [S, N] = Chunk73800.useState(0), k = (0, Chunk110924.Z)(A);
  (0, Chunk213609.Z)({
    type: Chunk990547.ImpressionTypes.MODAL,
    name: Chunk990547.ImpressionNames.USER_ACTION_REQUIRED,
    properties: {
      verification_type: A[0],
      verification_types: A
    }
  }, {}, [A.toString()]);
  let R = () => {
      (0, Chunk809206.FD)(), (0, Chunk481060.ZDy)(async () => {
        let {
          default: e
        } = await require.e("35401").then(require.bind(require, 284549));
        return t => (0, r.jsx)(e, _({}, t))
      }, {
        modalKey: Chunk308569.F0,
        Layer: Chunk429142.ZP
      })
    },
    I = () => {
      (0, Chunk481060.ZDy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(require.bind(require, 607018));
        return t => (0, r.jsx)(e, _({
          reason: g.L.USER_ACTION_REQUIRED
        }, t))
      }, {
        modalKey: Chunk815660.M,
        Layer: Chunk429142.ZP
      })
    };
  return Chunk73800.useEffect(() => (Chunk714338.Z.disable(), () => {
    Chunk714338.Z.enable()
  }), []), Chunk73800.useEffect(() => {
    (null == k ? true : k[0]) === Chunk981631.PUi.PHONE && (null == A ? true : A[0]) === Chunk981631.PUi.EMAIL && (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await Promise.resolve().then(require.bind(require, 468026));
      return t => (0, r.jsx)(e, P(_({}, t), {
        title: w.intl.string(w.t.KLnLIC),
        body: w.intl.string(w.t.XGbCq6),
        confirmText: w.intl.string(w.t["3oK4q6"])
      }))
    }, {
      modalKey: Chunk308569.HR,
      Layer: Chunk429142.ZP,
      onCloseCallback: R
    })
  }, [A, k]), (0, Chunk255367.jsx)(Chunk762756.Z, {
    types: A,
    captchaKey: S,
    onCaptchaVerify: e => {
      c.tn.post({
        url: x.ANM.CAPTCHA,
        body: {
          captcha_key: e
        },
        oldFormErrors: true,
        rejectWithError: true
      }).then(u.xf, () => {
        N(e => e + 1)
      })
    },
    theme: exports,
    onClick: e => {
      e === x.PUi.EMAIL_OR_PHONE || e === x.PUi.EMAIL || e === x.PUi.REVERIFY_EMAIL ? R() : I()
    },
    onLogout: () => {
      (0, Chunk481060.ZDy)(async () => {
        let {
          ConfirmModal: e,
          Text: t
        } = await Promise.resolve().then(require.bind(require, 481060));
        return n => (0, r.jsx)(e, P(_({
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