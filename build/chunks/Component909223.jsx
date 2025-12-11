/** Chunk was on 27978 **/
/** chunk id: 909223, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk319699 = require("./319699.js"),
  Chunk478411 = require("./478411.js");

function b(e) {
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
    [Chunk82554.BM.MESSAGE]: Chunk388032.t.fuqnBC,
    [Chunk82554.BM.USER]: Chunk388032.t.F4jrRW,
    [Chunk82554.BM.GUILD]: Chunk388032.t.gH3aMs
  },
  N = e => {
    let {
      title: t,
      menuType: i
    } = e, a = e => {
      let t = async () => {
        await (0, g.yL)(i, e)
      }, a = async t => await (0, g.RV)(i, e, t), o = e => {
        let t = null == e ? true : e.token;
        i === h.BM.MESSAGE ? (0, f.eE)(t) : i === h.BM.USER ? (0, f.JM)(t) : i === h.BM.GUILD && (0, f.FO)(t)
      };
      t(), (0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("56499").then(n.bind(n, 433570));
        return n => (0, r.jsx)(e, j(b({}, n), {
          onFormSubmit: a,
          onResend: t,
          onSuccess: o,
          headerText: _.intl.string(_.t.H3Q7U8),
          confirmButtonText: _.intl.string(_.t["13ofGu"]),
          impression: {
            impressionName: s.ImpressionNames.URF_CONFIRM_EMAIL_CODE
          }
        }))
      })
    };
    return (0, r.jsxs)(l.P3F, {
      className: E.reportButton,
      onClick: () => void(0, l.ZDy)(async () => {
        let {
          default: e
        } = await n.e("20670").then(n.bind(n, 993018));
        return t => (0, r.jsx)(e, j(b({}, t), {
          onSuccess: a,
          headerText: _.intl.string(_.t.ZLRYGU),
          confirmButtonText: _.intl.string(_.t.PDTjLN)
        }))
      }),
      children: [(0, r.jsx)(l.Text, {
        variant: "text-md/medium",
        children: t
      }), (0, r.jsx)(l.LJT, {
        size: "sm",
        color: "currentColor"
      })]
    })
  },
  y = () => {
    let [e, t] = Chunk473749.useState(true), [n, s] = Chunk473749.useState([]), h = (0, Chunk442837.e7)([Chunk314897.default], () => Chunk314897.default.isAuthenticated()), f = (0, Chunk442837.e7)([Chunk353926.Z], () => Chunk353926.Z.hasLoadedExperiments), b = () => {
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
    return Chunk473749.useEffect(() => {
      Chunk82554 ? (exports(true), Chunk232567.k({
        withAnalyticsToken: true
      }).then(() => b()).catch(() => exports(false))) : b()
    }, [Chunk82554]), Chunk473749.useEffect(() => {
      (async () => {
        Chunk726521 || (await Chunk893776.Z.getLocationMetadata(), Chunk893776.Z.getExperiments())
      })()
    }, [Chunk726521]), module || !Chunk726521 ? (0, Chunk54381.jsx)(Chunk388905.ZP, {
      children: (0, Chunk54381.jsx)(Chunk481060.$jN, {})
    }) : null != require && require.length > 0 && (0, Chunk54381.jsxs)(Chunk388905.ZP, {
      children: [(0, Chunk54381.jsx)(Chunk388905.Dx, {
        className: Chunk478411.marginBottom8,
        children: Chunk388032.intl.string(Chunk388032.t.Z11w18)
      }), (0, Chunk54381.jsx)(Chunk388905.DK, {
        className: Chunk478411.marginBottom8,
        children: Chunk388032.intl.format(Chunk388032.t["532l+q"], {
          supportURL: Chunk63063.Z.getArticleURL(Chunk981631.BhN.COPYRIGHT_AND_IP_POLICY)
        })
      }), (0, Chunk54381.jsx)("div", {
        className: Chunk319699.container,
        children: require.map(e => null == I[e] ? null : (0, r.jsx)(N, {
          title: _.intl.string(I[e]),
          menuType: e
        }, e))
      })]
    })
  }