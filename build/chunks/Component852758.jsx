/** Chunk was on 88282 **/
/** chunk id: 852758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function N() {
  let {
    action: e,
    theme: t
  } = (0, Chunk442837.cj)([Chunk23434.Z, Chunk210887.Z], () => ({
    action: Chunk23434.Z.getAction(),
    theme: Chunk210887.Z.theme
  })), N = Chunk1964.Z.getVerificationTypes(module), [T, O] = Chunk473749.useState(0), P = (0, Chunk110924.Z)(N);
  (0, Chunk213609.Z)({
    type: Chunk990547.ImpressionTypes.MODAL,
    name: Chunk990547.ImpressionNames.USER_ACTION_REQUIRED,
    properties: {
      verification_type: N[0],
      verification_types: N
    }
  }, {}, [N.toString()]);
  let I = () => {
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
  return Chunk473749.useEffect(() => (Chunk714338.Z.disable(), () => {
    Chunk714338.Z.enable()
  }), []), Chunk473749.useEffect(() => {
    (null == P ? true : P[0]) === Chunk981631.PUi.PHONE && (null == N ? true : N[0]) === Chunk981631.PUi.EMAIL && (0, Chunk481060.ZDy)(async () => {
      let {
        default: e
      } = await require.e("84112").then(require.bind(require, 273352));
      return t => {
        var n, l;
        return (0, a.jsx)(e, (n = E({}, t), l = l = {
          title: S.intl.string(S.t.KLnLIP),
          body: S.intl.string(S.t.XGbCq3),
          confirmText: S.intl.string(S.t["3oK4qw"])
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            n.push.apply(n, a)
          }
          return n
        })(Object(l)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(l, e))
        }), n))
      }
    }, {
      modalKey: Chunk308569.HR,
      Layer: Chunk429142.ZP,
      onCloseCallback: I
    })
  }, [N, P]), (0, Chunk54381.jsx)(Chunk762756.Z, {
    types: N,
    captchaKey: T,
    onCaptchaVerify: e => {
      s.tn.post({
        url: y.ANM.CAPTCHA,
        body: {
          captcha_key: e
        },
        oldFormErrors: true,
        rejectWithError: true
      }).then(d.xf, () => {
        O(e => e + 1)
      })
    },
    theme: exports,
    onClick: e => {
      e === y.PUi.EMAIL_OR_PHONE || e === y.PUi.EMAIL || e === y.PUi.REVERIFY_EMAIL ? I() : (0, o.ZDy)(async () => {
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
          ConfirmModal: e
        } = await Promise.resolve().then(require.bind(require, 201265));
        return t => (0, a.jsx)(e, E({
          title: S.intl.string(S.t["2jxGer"]),
          subtitle: S.intl.string(S.t.SUnWBB),
          confirmText: S.intl.string(S.t["2jxGer"]),
          cancelText: S.intl.string(S.t["ETE/oC"]),
          onConfirm: () => c.Z.logout("verification")
        }, t))
      }, {
        Layer: Chunk429142.ZP
      })
    }
  })
}