/** Chunk was on 36054 **/
/** chunk id: 524134, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk311907 = require("./311907.js"),
  Chunk562465 = require("./562465.js"),
  Chunk397927 = require("./397927.js"),
  Chunk830215 = require("./830215.js"),
  Chunk398590 = require("./398590.js"),
  Chunk631670 = require("./631670.js"),
  Chunk475743 = require("./475743.js"),
  Chunk775121 = require("./775121.js"),
  Chunk139286 = require("./139286.js"),
  Chunk80556 = require("./80556.js"),
  Chunk557722 = require("./557722.js"),
  Chunk544028 = require("./544028.js"),
  Chunk870570 = require("./870570.js"),
  Chunk446868 = require("./446868.js"),
  Chunk683589 = require("./683589.jsx"),
  Chunk87404 = require("./87404.js"),
  Chunk652215 = require("./652215.js"),
  Chunk53516 = require("./53516.js"),
  Chunk985018 = require("./985018.jsx");

function S(e) {
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

function O() {
  let {
    action: e,
    theme: t
  } = (0, i.cf)([b.A, f.A], () => ({
    action: b.A.getAction(),
    theme: f.A.theme
  })), O = v.A.getVerificationTypes(e), [T, E] = l.useState(0), N = (0, m.A)(O);
  (0, h.A)({
    type: r.ImpressionTypes.MODAL,
    name: r.ImpressionNames.USER_ACTION_REQUIRED,
    properties: {
      verification_type: O[0],
      verification_types: O
    }
  }, {}, [O.toString()]);
  let w = () => {
    (0, u.Cw)(), (0, o.mMO)(async () => {
      let {
        default: e
      } = await n.e("95988").then(n.bind(n, 946815));
      return t => (0, a.jsx)(e, S({}, t))
    }, {
      modalKey: _.H1,
      Layer: x.Ay
    })
  };
  return l.useEffect(() => (p.A.disable(), () => {
    p.A.enable()
  }), []), l.useEffect(() => {
    (null == N ? true : N[0]) === y.Fz7.PHONE && (null == O ? true : O[0]) === y.Fz7.EMAIL && (0, o.mMO)(async () => {
      let {
        default: e
      } = await n.e("10919").then(n.bind(n, 556506));
      return t => {
        var n, l;
        return (0, a.jsx)(e, (n = S({}, t), l = l = {
          title: C.intl.string(C.t.KLnLIP),
          body: C.intl.string(C.t.XGbCq3),
          confirmText: C.intl.string(C.t["3oK4qw"])
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
      modalKey: _.Pr,
      Layer: x.Ay,
      onCloseCallback: w
    })
  }, [O, N]), (0, a.jsx)(j.A, {
    types: O,
    captchaKey: T,
    onCaptchaVerify: e => {
      s.Bo.post({
        url: y.Rsh.CAPTCHA,
        body: {
          captcha_key: e
        },
        oldFormErrors: true,
        rejectWithError: true
      }).then(d.jH, () => {
        E(e => e + 1)
      })
    },
    theme: t,
    onClick: e => {
      e === y.Fz7.EMAIL_OR_PHONE || e === y.Fz7.EMAIL || e === y.Fz7.REVERIFY_EMAIL ? w() : (0, o.mMO)(async () => {
        let {
          default: e
        } = await Promise.resolve().then(n.bind(n, 615715));
        return t => (0, a.jsx)(e, S({
          layerContext: x.OH,
          reason: g.d.USER_ACTION_REQUIRED
        }, t))
      }, {
        modalKey: A.V,
        Layer: x.Ay
      })
    },
    onLogout: () => {
      (0, o.mMO)(async () => {
        let {
          ConfirmModal: e
        } = await Promise.resolve().then(n.bind(n, 732159));
        return t => (0, a.jsx)(e, S({
          title: C.intl.string(C.t["2jxGer"]),
          subtitle: C.intl.string(C.t.SUnWBB),
          confirmText: C.intl.string(C.t["2jxGer"]),
          cancelText: C.intl.string(C.t["ETE/oC"]),
          onConfirm: () => c.A.logout("verification")
        }, t))
      }, {
        Layer: x.Ay
      })
    }
  })
}