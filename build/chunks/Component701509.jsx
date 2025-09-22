/** Chunk was on 1716 **/
/** chunk id: 701509, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk512722 = require("./512722.js"),
  o = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk82659 = require("./82659.jsx"),
  Chunk749210 = require("./749210.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk592125 = require("./592125.js"),
  Chunk944486 = require("./944486.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk63063 = require("./63063.js"),
  Chunk771308 = require("./771308.js"),
  Chunk758119 = require("./758119.js"),
  Chunk622822 = require("./622822.js"),
  Chunk13430 = require("./13430.jsx"),
  Chunk723359 = require("./723359.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk736056 = require("./736056.js");

function x(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = null != arguments[e] ? arguments[e] : {},
      l = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
      return Object.getOwnPropertyDescriptor(n, t).enumerable
    }))), l.forEach(function(e) {
      var l;
      l = n[e], e in t ? Object.defineProperty(t, e, {
        value: l,
        enumerable: true,
        configurable: true,
        writable: true
      }) : t[e] = l
    })
  }
  return t
}

function S(t) {
  let {
    transitionState: e,
    source: n
  } = t, a = (0, c.e7)([h.default], () => h.default.getCurrentUser()), i = (0, c.e7)([_.Z, y.Z], () => y.Z.getChannel(_.Z.getChannelId())), [S, k] = r.useState(null), [j, w] = r.useState(null), [I, D] = r.useState(false), [P, M] = r.useState(0), U = r.useRef(null), L = r.useRef(null), F = (0, v.Kt)() && n !== O.L0.FAMILY_CENTER, {
    verifyAgreementButtonText: V,
    verifyGateDescription: Z,
    verifyTitle: Y
  } = (0, v.a1)(n), W = null != S ? s()().diff(S, "years") : null;

  function q() {
    if (n === O.L0.NSFW_SERVER_INVITE_EMBED) return (0, T.qV)(n), Promise.resolve();
    let t = null == i ? true : i.getGuildId();
    return E.Z.nsfwReturnToSafety(t), (0, T.qV)(n), Promise.resolve()
  }
  async function B() {
    o()(null != S, "Cannot submit null birthday.");
    try {
      return w(null), D(true), await (0, g.Av)(S, n)
    } catch (e) {
      if (null != e.body && null != e.body.date_of_birth)(0, T.C8)(n, e.body.date_of_birth);
      else {
        var t;
        (null == e || null == (t = e.body) ? true : t.username) != null ? w(R.intl.string(R.t["TGg/2t"])) : w(null == e ? true : e.body.message), D(false)
      }
    }
  }
  async function K() {
    if (o()(null != W, "Cannot submit if we haven't been able to calculate age."), W < 18) return void M(1);
    await B()
  }
  async function J(t) {
    t.preventDefault(), I || null == S || await K()
  }
  async function Q() {
    null == await B() && M(0)
  }
  r.useEffect(() => {
    null == a || null == a.nsfwAllowed || F || (0, T.qq)(n)
  }), r.useEffect(() => {
    b.default.track(C.rMx.AGE_GATE_ACTION, {
      source: n,
      action: O.Al.AGE_GATE_OPEN
    })
  }, [n]);
  let z = r.useCallback(t => {
      k(t)
    }, [k]),
    X = r.useCallback(() => {
      var t;
      null == (t = L.current) || t.focus()
    }, [L]),
    H = r.useCallback(() => {
      p.Z.showAgeVerificationGetStartedModal({
        entryPoint: A.cU.NSFW_AGE_GATE
      })
    }, []),
    $ = {
      transitionState: e,
      onClose: q,
      graphic: {
        type: "image",
        src: N.Z
      },
      gradientColor: "blue"
    };
  return F ? (0, l.jsx)(f.I, x({
    title: Y,
    subtitle: Z,
    actions: [{
      text: R.intl.string(R.t.f3Pet7),
      onClick: q,
      variant: "secondary"
    }, {
      text: V,
      onClick: H
    }],
    trackingProps: {
      impression: {
        impressionName: u.ImpressionNames.USER_AGE_GATE_VERIFY
      },
      impressionType: u.ImpressionTypes.MODAL
    }
  }, $)) : 0 === P ? function() {
    var t, e;
    let r = (() => {
        switch (n) {
          case O.L0.NSFW_SERVER:
          case O.L0.NSFW_SERVER_INVITE:
          case O.L0.NSFW_SERVER_INVITE_EMBED:
            return R.intl.string(R.t.vAymlJ);
          case O.L0.FAMILY_CENTER:
            return R.intl.string(R.t.M7mt7u);
          default:
            return R.intl.string(R.t.F8otRk)
        }
      })(),
      a = (() => {
        switch (n) {
          case O.L0.FAMILY_CENTER:
            return R.intl.string(R.t.mhUrKS);
          case O.L0.DEEP_LINK_PROMPT:
            return R.intl.format(R.t.iyhg2t, {
              helpURL: m.Z.getArticleURL(C.BhN.AGE_GATE)
            });
          default:
            return R.intl.format(R.t.n3QjDA, {
              helpURL: m.Z.getArticleURL(C.BhN.AGE_GATE)
            })
        }
      })();
    return (0, l.jsx)("form", {
      onSubmit: J,
      children: (0, l.jsx)(f.I, (t = x({
        title: r,
        subtitle: a,
        actions: [{
          text: R.intl.string(R.t["1MrpWF"]),
          onClick: q,
          variant: "secondary"
        }, {
          text: R.intl.string(R.t.uBFuoq),
          onClick: K,
          loading: I,
          disabled: null == S
        }]
      }, $), e = e = {
        children: (0, l.jsx)(G.Z, {
          label: R.intl.string(R.t.rhBeKS),
          name: "date_of_birth",
          onChange: z,
          onPopulated: X,
          error: j,
          value: S,
          ref: U,
          autoFocus: true
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(t);
          n.push.apply(n, l)
        }
        return n
      })(Object(e)).forEach(function(n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
      }), t))
    })
  }() : (0, l.jsx)(d.Modal, {
    transitionState: e,
    onClose: q,
    title: R.intl.formatToPlainString(R.t.wumolZ, {
      age: W
    }),
    subtitle: R.intl.formatToPlainString(R.t.n3QjDA, {
      helpURL: m.Z.getArticleURL(C.BhN.AGE_GATE)
    }),
    actions: [{
      text: R.intl.string(R.t.cfYCra),
      onClick: () => M(0),
      variant: "secondary"
    }, {
      text: R.intl.string(R.t["6tahio"]),
      onClick: Q
    }]
  })
}