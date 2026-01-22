/** Chunk was on 10136 **/
/** chunk id: 776971, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk284009 = require("./284009.js"),
  i = require.n(Chunk284009),
  Chunk989349 = require("./989349.js"),
  s = require.n(Chunk989349),
  Chunk110259 = require("./110259.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk686956 = require("./686956.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk734057 = require("./734057.js"),
  Chunk309010 = require("./309010.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk975571 = require("./975571.js"),
  Chunk955437 = require("./955437.js"),
  Chunk612200 = require("./612200.js"),
  Chunk323073 = require("./323073.js"),
  Chunk201505 = require("./201505.jsx"),
  Chunk204925 = require("./204925.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk700129 = require("./700129.js");

function C(t) {
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

function k(t) {
  var e, n;
  let a, o, {
      transitionState: k,
      source: N
    } = t,
    S = (0, d.bG)([y.default], () => y.default.getCurrentUser()),
    x = (0, d.bG)([_.A, A.A], () => A.A.getChannel(_.A.getChannelId())),
    [M, j] = r.useState(null),
    [I, D] = r.useState(null),
    [P, U] = r.useState(false),
    [V, L] = r.useState(0),
    F = r.useRef(null),
    W = r.useRef(null),
    Y = N === v.w_.FAMILY_CENTER,
    B = (0, T.a9)() && !Y,
    {
      verifyAgreementButtonText: H,
      verifyGateDescription: z,
      verifyTitle: K
    } = (0, T.Gn)(N),
    Z = (0, T.vL)(x),
    q = T.Bc.has(N),
    Q = null != M ? s()().diff(M, "years") : null;

  function X() {
    if (N === v.w_.NSFW_SERVER_INVITE_EMBED) return (0, h.IO)(N), Promise.resolve();
    let t = null == x ? true : x.getGuildId();
    return E.A.nsfwReturnToSafety(t), (0, h.IO)(N), Promise.resolve()
  }
  async function $() {
    i()(null != M, "Cannot submit null birthday.");
    try {
      return D(null), U(true), await (0, g.n7)(M, N)
    } catch (e) {
      if (null != e.body && null != e.body.date_of_birth)(0, h.MP)(N, e.body.date_of_birth);
      else {
        var t;
        (null == e || null == (t = e.body) ? true : t.username) != null ? D(R.intl.string(R.t["TGg/2k"])) : D(null == e ? true : e.body.message), U(false)
      }
    }
  }
  async function J() {
    (i()(null != Q, "Cannot submit if we haven't been able to calculate age."), Q < 18) ? L(1): await $()
  }
  async function tt(t) {
    t.preventDefault(), P || null == M || await J()
  }
  async function te() {
    null == await $() && L(0)
  }
  r.useEffect(() => {
    (null == S ? true : S.nsfwAllowed) !== true || B || (0, h.Nk)(N)
  }), r.useEffect(() => {
    m.default.track(O.HAw.AGE_GATE_ACTION, {
      source: N,
      action: v.AM.AGE_GATE_OPEN
    })
  }, [N]);
  let tn = r.useCallback(t => {
      j(t)
    }, [j]),
    tl = r.useCallback(() => {
      var t;
      null == (t = W.current) || t.focus()
    }, [W]),
    tr = r.useCallback(() => {
      p.A.showAgeVerificationGetStartedModal({
        entryPoint: f.q1.NSFW_AGE_GATE
      })
    }, []),
    ta = {
      transitionState: k,
      onClose: X,
      graphic: {
        type: "image",
        src: w.A
      },
      gradientColor: "blue"
    };
  return B ? (0, l.jsx)(u.ExpressiveModal, C({
    title: K,
    subtitle: z,
    actions: [{
      text: R.intl.string(R.t.f3Pet9),
      onClick: X,
      variant: "secondary"
    }, {
      text: null != H ? H : R.intl.string(R.t["5B+npG"]),
      onClick: tr
    }],
    trackingProps: {
      impression: {
        impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY
      },
      impressionType: c.ImpressionTypes.MODAL
    }
  }, ta)) : (null == S ? true : S.nsfwAllowed) === false && (Z || q) && !Y ? (0, l.jsx)(u.ExpressiveModal, C({
    title: R.intl.string(q ? R.t["H0SG/g"] : R.t.NEabBa),
    subtitle: R.intl.format(q ? R.t["6++3cX"] : R.t["2kHZes"], {
      helpURL: b.A.getArticleURL(O.MVz.AGE_GATE)
    }),
    actions: [{
      text: R.intl.string(R.t["/g10LC"]),
      onClick: X,
      variant: "secondary"
    }],
    trackingProps: {
      impression: {
        impressionName: c.ImpressionNames.USER_AGE_GATE_VERIFY
      },
      impressionType: c.ImpressionTypes.MODAL
    }
  }, ta)) : 0 === V ? (a = (() => {
    switch (N) {
      case v.w_.NSFW_SERVER:
      case v.w_.NSFW_SERVER_INVITE:
      case v.w_.NSFW_SERVER_INVITE_EMBED:
        return R.intl.string(R.t.vAymlG);
      case v.w_.FAMILY_CENTER:
        return R.intl.string(R.t.M7mt7m);
      default:
        return R.intl.string(R.t.F8otRo)
    }
  })(), o = (() => {
    switch (N) {
      case v.w_.FAMILY_CENTER:
        return R.intl.string(R.t.mhUrKS);
      case v.w_.DEEP_LINK_PROMPT:
        return R.intl.format(R.t.iyhg2s, {
          helpURL: b.A.getArticleURL(O.MVz.AGE_GATE)
        });
      default:
        return R.intl.format(R.t.n3QjDE, {
          helpURL: b.A.getArticleURL(O.MVz.AGE_GATE)
        })
    }
  })(), (0, l.jsx)("form", {
    onSubmit: tt,
    children: (0, l.jsx)(u.Modal, (e = C({
      title: a,
      subtitle: o,
      actions: [{
        text: R.intl.string(R.t["1MrpWO"]),
        onClick: X,
        variant: "secondary"
      }, {
        text: R.intl.string(R.t.uBFuok),
        onClick: J,
        loading: P,
        disabled: null == M
      }]
    }, ta), n = n = {
      children: (0, l.jsx)(G.A, {
        label: R.intl.string(R.t.rhBeKe),
        name: "date_of_birth",
        onChange: tn,
        onPopulated: tl,
        error: I,
        value: M,
        ref: F,
        autoFocus: true
      })
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : (function(t, e) {
      var n = Object.keys(t);
      if (Object.getOwnPropertySymbols) {
        var l = Object.getOwnPropertySymbols(t);
        n.push.apply(n, l)
      }
      return n
    })(Object(n)).forEach(function(t) {
      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
    }), e))
  })) : (0, l.jsx)(u.Modal, {
    transitionState: k,
    onClose: X,
    title: R.intl.formatToPlainString(R.t.wumolR, {
      age: null != Q ? Q : ""
    }),
    subtitle: R.intl.formatToPlainString(R.t.n3QjDE, {
      helpURL: b.A.getArticleURL(O.MVz.AGE_GATE)
    }),
    actions: [{
      text: R.intl.string(R.t.cfYCrb),
      onClick: () => L(0),
      variant: "secondary"
    }, {
      text: R.intl.string(R.t["6tahin"]),
      onClick: te
    }]
  })
}