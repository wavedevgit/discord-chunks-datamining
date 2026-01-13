/** Chunk was on 22979 **/
/** chunk id: 852758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
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

function T() {
  let {
    action: e,
    theme: t
  } = (0, l.cj)([g.Z, b.Z], () => ({
    action: g.Z.getAction(),
    theme: b.Z.theme
  })), T = v.Z.getVerificationTypes(e), [O, N] = r.useState(0), P = (0, m.Z)(T);
  (0, h.Z)({
    type: i.ImpressionTypes.MODAL,
    name: i.ImpressionNames.USER_ACTION_REQUIRED,
    properties: {
      verification_type: T[0],
      verification_types: T
    }
  }, {}, [T.toString()]);
  let w = () => {
    (0, u.FD)(), (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("35401").then(n.bind(n, 284549));
      return t => (0, a.jsx)(e, E({}, t))
    }, {
      modalKey: y.F0,
      Layer: f.ZP
    })
  };
  return r.useEffect(() => (p.Z.disable(), () => {
    p.Z.enable()
  }), []), r.useEffect(() => {
    (null == P ? true : P[0]) === C.PUi.PHONE && (null == T ? true : T[0]) === C.PUi.EMAIL && (0, o.ZDy)(async () => {
      let {
        default: e
      } = await n.e("84112").then(n.bind(n, 273352));
      return t => {
        var n, r;
        return (0, a.jsx)(e, (n = E({}, t), r = r = {
          title: S.intl.string(S.t.KLnLIP),
          body: S.intl.string(S.t.XGbCq3),
          confirmText: S.intl.string(S.t["3oK4qw"])
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            n.push.apply(n, a)
          }
          return n
        })(Object(r)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(r, e))
        }), n))
      }
    }, {
      modalKey: y.HR,
      Layer: f.ZP,
      onCloseCallback: w
    })
  }, [T, P]), (0, a.jsx)(j.Z, {
    types: T,
    captchaKey: O,
    onCaptchaVerify: e => {
      s.tn.post({
        url: C.ANM.CAPTCHA,
        body: {
          captcha_key: e
        },
        oldFormErrors: true,
        rejectWithError: true
      }).then(d.xf, () => {
        N(e => e + 1)
      })
    },
    theme: t,
    onClick: e => {
      e === C.PUi.EMAIL_OR_PHONE || e === C.PUi.EMAIL || e === C.PUi.REVERIFY_EMAIL ? w() : (0, o.ZDy)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 607018));
        return t => (0, a.jsx)(e, E({
          layerContext: f.mK,
          reason: x.L.USER_ACTION_REQUIRED
        }, t))
      }, {
        modalKey: _.M,
        Layer: f.ZP
      })
    },
    onLogout: () => {
      (0, o.ZDy)(async () => {
        let {
          ConfirmModal: e
        } = await Promise.resolve().then(n.bind(n, 201265));
        return t => (0, a.jsx)(e, E({
          title: S.intl.string(S.t["2jxGer"]),
          subtitle: S.intl.string(S.t.SUnWBB),
          confirmText: S.intl.string(S.t["2jxGer"]),
          cancelText: S.intl.string(S.t["ETE/oC"]),
          onConfirm: () => c.Z.logout("verification")
        }, t))
      }, {
        Layer: f.ZP
      })
    }
  })
}