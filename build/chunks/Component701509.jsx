/** Chunk was on 1716 **/
/** chunk id: 701509, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk512722 = require("./512722.js"),
  i = require.n(Chunk512722),
  Chunk913527 = require("./913527.js"),
  s = require.n(Chunk913527),
  Chunk990547 = require("./990547.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
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

function C(t) {
  let {
    transitionState: e,
    source: n
  } = t, a = (0, d.e7)([y.default], () => y.default.getCurrentUser()), o = (0, d.e7)([_.Z, A.Z], () => A.Z.getChannel(_.Z.getChannelId())), [C, S] = r.useState(null), [k, j] = r.useState(null), [w, I] = r.useState(false), [M, D] = r.useState(0), P = r.useRef(null), L = r.useRef(null), U = n === v.L0.FAMILY_CENTER, V = (0, T.Kt)() && !U, {
    verifyAgreementButtonText: Z,
    verifyGateDescription: F,
    verifyTitle: W
  } = (0, T.a1)(n), Y = (0, T.$5)(o), B = T.Lj.has(n), q = null != C ? s()().diff(C, "years") : null;

  function K() {
    if (n === v.L0.NSFW_SERVER_INVITE_EMBED) return (0, g.qV)(n), Promise.resolve();
    let t = null == o ? true : o.getGuildId();
    return E.Z.nsfwReturnToSafety(t), (0, g.qV)(n), Promise.resolve()
  }
  async function H() {
    i()(null != C, "Cannot submit null birthday.");
    try {
      return j(null), I(true), await (0, b.Av)(C, n)
    } catch (e) {
      if (null != e.body && null != e.body.date_of_birth)(0, g.C8)(n, e.body.date_of_birth);
      else {
        var t;
        (null == e || null == (t = e.body) ? true : t.username) != null ? j(R.intl.string(R.t["TGg/2k"])) : j(null == e ? true : e.body.message), I(false)
      }
    }
  }
  async function Q() {
    if (i()(null != q, "Cannot submit if we haven't been able to calculate age."), q < 18) return void D(1);
    await H()
  }
  async function z(t) {
    t.preventDefault(), w || null == C || await Q()
  }
  async function J() {
    null == await H() && D(0)
  }
  r.useEffect(() => {
    (null == a ? true : a.nsfwAllowed) !== true || V || (0, g.qq)(n)
  }), r.useEffect(() => {
    h.default.track(O.rMx.AGE_GATE_ACTION, {
      source: n,
      action: v.Al.AGE_GATE_OPEN
    })
  }, [n]);
  let X = r.useCallback(t => {
      S(t)
    }, [S]),
    $ = r.useCallback(() => {
      var t;
      null == (t = L.current) || t.focus()
    }, [L]),
    tt = r.useCallback(() => {
      f.Z.showAgeVerificationGetStartedModal({
        entryPoint: p.cU.NSFW_AGE_GATE
      })
    }, []),
    te = {
      transitionState: e,
      onClose: K,
      graphic: {
        type: "image",
        src: N.Z
      },
      gradientColor: "blue"
    };
  return V ? (0, l.jsx)(u.ExpressiveModal, x({
    title: W,
    subtitle: F,
    actions: [{
      text: R.intl.string(R.t.f3Pet9),
      onClick: K,
      variant: "secondary"
    }, {
      text: null != Z ? Z : R.intl.string(R.t["5B+npG"]),
      onClick: tt
    }],
    trackingProps: {
      impression: {
        impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY
      },
      impressionType: c.ImpressionTypes.MODAL
    }
  }, te)) : (null == a ? true : a.nsfwAllowed) === false && (Y || B) && !U ? (0, l.jsx)(u.ExpressiveModal, x({
    title: R.intl.string(B ? R.t["H0SG/g"] : R.t.NEabBa),
    subtitle: R.intl.format(B ? R.t["6++3cX"] : R.t["2kHZes"], {
      helpURL: m.Z.getArticleURL(O.BhN.AGE_GATE)
    }),
    actions: [{
      text: R.intl.string(R.t["/g10LC"]),
      onClick: K,
      variant: "secondary"
    }],
    trackingProps: {
      impression: {
        impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY
      },
      impressionType: c.ImpressionTypes.MODAL
    }
  }, te)) : 0 === M ? function() {
    var t, e;
    let r = (() => {
        switch (n) {
          case v.L0.NSFW_SERVER:
          case v.L0.NSFW_SERVER_INVITE:
          case v.L0.NSFW_SERVER_INVITE_EMBED:
            return R.intl.string(R.t.vAymlG);
          case v.L0.FAMILY_CENTER:
            return R.intl.string(R.t.M7mt7m);
          default:
            return R.intl.string(R.t.F8otRo)
        }
      })(),
      a = (() => {
        switch (n) {
          case v.L0.FAMILY_CENTER:
            return R.intl.string(R.t.mhUrKS);
          case v.L0.DEEP_LINK_PROMPT:
            return R.intl.format(R.t.iyhg2s, {
              helpURL: m.Z.getArticleURL(O.BhN.AGE_GATE)
            });
          default:
            return R.intl.format(R.t.n3QjDE, {
              helpURL: m.Z.getArticleURL(O.BhN.AGE_GATE)
            })
        }
      })();
    return (0, l.jsx)("form", {
      onSubmit: z,
      children: (0, l.jsx)(u.Modal, (t = x({
        title: r,
        subtitle: a,
        actions: [{
          text: R.intl.string(R.t["1MrpWO"]),
          onClick: K,
          variant: "secondary"
        }, {
          text: R.intl.string(R.t.uBFuok),
          onClick: Q,
          loading: w,
          disabled: null == C
        }]
      }, te), e = e = {
        children: (0, l.jsx)(G.Z, {
          label: R.intl.string(R.t.rhBeKe),
          name: "date_of_birth",
          onChange: X,
          onPopulated: $,
          error: k,
          value: C,
          ref: P,
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
  }() : (0, l.jsx)(u.Modal, {
    transitionState: e,
    onClose: K,
    title: R.intl.formatToPlainString(R.t.wumolR, {
      age: null != q ? q : ""
    }),
    subtitle: R.intl.formatToPlainString(R.t.n3QjDE, {
      helpURL: m.Z.getArticleURL(O.BhN.AGE_GATE)
    }),
    actions: [{
      text: R.intl.string(R.t.cfYCrb),
      onClick: () => D(0),
      variant: "secondary"
    }, {
      text: R.intl.string(R.t["6tahin"]),
      onClick: J
    }]
  })
}