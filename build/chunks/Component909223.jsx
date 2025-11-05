/** Chunk was on 27978 **/
/** chunk id: 909223, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk325659 = require("./325659.js"),
  Chunk197571 = require("./197571.js");

function j(e) {
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
Chunk442837.ZP.initialize();
let I = {
    [Chunk82554.BM.MESSAGE]: Chunk388032.t.fuqnBC,
    [Chunk82554.BM.USER]: Chunk388032.t.F4jrRW,
    [Chunk82554.BM.GUILD]: Chunk388032.t.gH3aMs
  },
  y = e => {
    let {
      title: t,
      menuType: i
    } = e, l = e => {
      let t = async () => {
        await (0, m.yL)(i, e)
      }, l = async t => await (0, m.RV)(i, e, t), o = e => {
        let t = null == e ? true : e.token;
        i === h.BM.MESSAGE ? (0, g.eE)(t) : i === h.BM.USER ? (0, g.JM)(t) : i === h.BM.GUILD && (0, g.FO)(t)
      };
      t(), (0, a.ZDy)(async () => {
        let {
          default: e
        } = await n.e("56499").then(n.bind(n, 433570));
        return n => (0, r.jsx)(e, b(j({}, n), {
          onFormSubmit: l,
          onResend: t,
          onSuccess: o,
          headerText: x.intl.string(x.t.H3Q7U8),
          confirmButtonText: x.intl.string(x.t["13ofGu"]),
          impression: {
            impressionName: s.ImpressionNames.URF_CONFIRM_EMAIL_CODE
          }
        }))
      })
    };
    return (0, r.jsxs)(a.P3F, {
      className: E.reportButton,
      onClick: () => void(0, a.ZDy)(async () => {
        let {
          default: e
        } = await n.e("20670").then(n.bind(n, 993018));
        return t => (0, r.jsx)(e, b(j({}, t), {
          onSuccess: l,
          headerText: x.intl.string(x.t.ZLRYGU),
          confirmButtonText: x.intl.string(x.t.PDTjLN)
        }))
      }),
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/medium",
        children: t
      }), (0, r.jsx)(a.LJT, {
        size: "sm",
        color: "currentColor"
      })]
    })
  },
  S = () => {
    let [e, t] = Chunk647438.useState(true), [n, s] = Chunk647438.useState([]), h = (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.isAuthenticated()), g = (0, Chunk442837.e7)([Chunk353926.Z], () => Chunk353926.Z.hasLoadedExperiments), j = () => {
      (0, Chunk185625.Jj)().then(e => {
        let {
          body: {
            capabilities: n
          }
        } = e;
        t(false), s(n)
      }).catch(() => {
        exports(false), Chunk990547([])
      })
    };
    return Chunk647438.useEffect(() => {
      Chunk82554 ? (exports(true), Chunk232567.k({
        withAnalyticsToken: true
      }).then(() => j()).catch(() => exports(false))) : j()
    }, [Chunk82554]), Chunk647438.useEffect(() => {
      (async () => {
        Chunk726521 || (await Chunk893776.Z.getLocationMetadata(), Chunk893776.Z.getExperiments())
      })()
    }, [Chunk726521]), module || !Chunk726521 ? (0, Chunk951288.jsx)(Chunk388905.ZP, {
      children: (0, Chunk951288.jsx)(Chunk481060.$jN, {})
    }) : null != require && require.length > 0 && (0, Chunk951288.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk951288.jsx)(Chunk388905.Dx, {
        className: Chunk197571.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.Z11w18)
      }), (0, Chunk951288.jsx)(Chunk388905.DK, {
        className: Chunk197571.marginBottom8,
        children: Chunk388032.intl.format(Chunk388032.t["532l+q"], {
          supportURL: Chunk63063.Z.getArticleURL(Chunk981631.BhN.COPYRIGHT_AND_IP_POLICY)
        })
      }), (0, Chunk951288.jsx)("div", {
        className: Chunk325659.container,
        children: require.map(e => null == I[e] ? null : (0, r.jsx)(y, {
          title: x.intl.string(I[e]),
          menuType: e
        }, e))
      })]
    })
  }