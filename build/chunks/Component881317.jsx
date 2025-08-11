/** Chunk was on 27978 **/
/** chunk id: 881317, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk232567 = require("./232567.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk353926 = require("./353926.js"),
  Chunk82554 = require("./82554.js"),
  Chunk726521 = require("./726521.js"),
  Chunk185625 = require("./185625.js"),
  Chunk314897 = require("./314897.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk793613 = require("./793613.js"),
  Chunk20493 = require("./20493.js");

function v(e) {
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

function j(e, t) {
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
Chunk442837.ZP.initialize();
let I = {
    [Chunk82554.BM.MESSAGE]: Chunk388032.t.fuqnBA,
    [Chunk82554.BM.USER]: Chunk388032.t.F4jrRU,
    [Chunk82554.BM.GUILD]: Chunk388032.t.gH3aMj
  },
  O = e => {
    let {
      title: t,
      menuType: i
    } = e, o = () => {
      (0, s.ZDy)(async () => {
        let {
          default: e
        } = await n.e("93288").then(n.bind(n, 396410));
        return t => (0, r.jsx)(e, j(v({}, t), {
          onSuccess: a,
          headerText: x.intl.string(x.t.ZLRYGR),
          confirmButtonText: x.intl.string(x.t.PDTjLC)
        }))
      })
    }, a = e => {
      let t = async () => {
        await (0, f.yL)(i, e)
      }, o = async t => await (0, f.RV)(i, e, t), a = e => {
        let t = null == e ? true : e.token;
        i === h.BM.MESSAGE ? (0, p.eE)(t) : i === h.BM.USER ? (0, p.JM)(t) : i === h.BM.GUILD && (0, p.FO)(t)
      };
      t(), (0, s.ZDy)(async () => {
        let {
          default: e
        } = await n.e("94566").then(n.bind(n, 965072));
        return n => (0, r.jsx)(e, j(v({}, n), {
          onFormSubmit: o,
          onResend: t,
          onSuccess: a,
          headerText: x.intl.string(x.t.H3Q7U1),
          confirmButtonText: x.intl.string(x.t["13ofGh"]),
          impression: {
            impressionName: l.ImpressionNames.URF_CONFIRM_EMAIL_CODE
          }
        }))
      })
    };
    return (0, r.jsxs)(s.P3F, {
      className: b.reportButton,
      onClick: () => o(),
      children: [(0, r.jsx)(s.Text, {
        variant: "text-md/medium",
        children: t
      }), (0, r.jsx)(s.LJT, {
        size: "sm",
        color: "currentColor"
      })]
    })
  },
  S = () => {
    let [e, t] = Chunk73800.useState(true), [n, l] = Chunk73800.useState([]), h = (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.isAuthenticated()), p = (0, Chunk442837.e7)([Chunk353926.Z], () => Chunk353926.Z.hasLoadedExperiments), v = () => {
      (0, Chunk185625.Jj)().then(e => {
        let {
          body: {
            capabilities: n
          }
        } = e;
        t(false), l(n)
      }).catch(() => {
        exports(false), Chunk990547([])
      })
    };
    return Chunk73800.useEffect(() => {
      Chunk82554 ? (exports(true), Chunk232567.k({
        withAnalyticsToken: true
      }).then(() => v()).catch(() => exports(false))) : v()
    }, [Chunk82554]), Chunk73800.useEffect(() => {
      (async () => {
        Chunk726521 || (await Chunk893776.Z.getLocationMetadata(), Chunk893776.Z.getExperiments())
      })()
    }, [Chunk726521]), module || !Chunk726521 ? (0, Chunk255367.jsx)(Chunk388905.ZP, {
      children: (0, Chunk255367.jsx)(Chunk481060.$jN, {})
    }) : null != require && require.length > 0 && (0, Chunk255367.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk255367.jsx)(Chunk388905.Dx, {
        className: Chunk20493.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.Z11w19)
      }), (0, Chunk255367.jsx)(Chunk388905.DK, {
        className: Chunk20493.marginBottom8,
        children: Chunk388032.intl.format(Chunk388032.t["532l+v"], {
          supportURL: Chunk63063.Z.getArticleURL(Chunk981631.BhN.COPYRIGHT_AND_IP_POLICY)
        })
      }), (0, Chunk255367.jsx)("div", {
        className: Chunk793613.container,
        children: require.map(e => null == I[e] ? null : (0, r.jsx)(O, {
          title: x.intl.string(I[e]),
          menuType: e
        }, e))
      })]
    })
  }