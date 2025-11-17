/** Chunk was on 88742 **/
/** chunk id: 535618, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => L
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk544891 = require("./544891.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk775644 = require("./775644.js"),
  Chunk410030 = require("./410030.js"),
  Chunk535139 = require("./535139.js"),
  Chunk812206 = require("./812206.js"),
  Chunk594174 = require("./594174.js"),
  Chunk877481 = require("./877481.js"),
  Chunk669079 = require("./669079.js"),
  Chunk823379 = require("./823379.js"),
  Chunk51144 = require("./51144.js"),
  Chunk579201 = require("./579201.js"),
  Chunk683668 = require("./683668.js"),
  Chunk55121 = require("./55121.jsx"),
  Chunk438926 = require("./438926.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk308285 = require("./308285.js"),
  Chunk167969 = require("./167969.js"),
  Chunk557256 = require("./557256.js");

function L(t) {
  let {
    transitionState: n,
    sku: e,
    onClose: s,
    giftCode: o,
    channelContext: r,
    customGiftMessage: d
  } = t, [u, f] = i.useState({
    state: "LINK"
  }), [m, p] = i.useState(false), h = (0, c.e7)([g.Z], () => g.Z.getApplication(e.applicationId));
  i.useEffect(() => {
    o.redeemed && "LINK" === u.state && f({
      state: "ERROR",
      error: new l.yZ(b.intl.string(b.t.Iw2TUW), N.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED)
    })
  }, [o, u.state]);
  let C = i.useCallback(async () => {
    try {
      p(true), await x.Z.redeemGiftCode({
        code: o.code,
        options: {
          channelId: r
        }
      }), f({
        state: "SUCCESS"
      })
    } catch (t) {
      f({
        state: "ERROR",
        error: t
      })
    } finally {
      p(false)
    }
  }, [o, f, r]);
  if (null == h) return null;
  switch (u.state) {
    case "LINK":
      return (0, a.jsx)(A, {
        sku: e,
        application: h,
        transitionState: n,
        onClose: s,
        successStateButtonText: b.intl.string(b.t.go1e4x),
        onSuccessButtonClick: C,
        isSuccessButtonLoading: m
      });
    case "SUCCESS":
      return (0, a.jsx)(B, {
        transitionState: n,
        application: h,
        sku: e,
        giftCode: o,
        customGiftMessage: d,
        onClose: s
      });
    case "ERROR":
      return (0, a.jsx)(E, {
        transitionState: n,
        onClose: s,
        error: u.error
      });
    default:
      (0, j.vE)(u)
  }
}
let E = t => {
  let {
    transitionState: n,
    onClose: e,
    error: i
  } = t, s = p.default.getCurrentUser(), o = (0, C.QW)(i, s), c = (0, f.ZP)(), l = (0, d.wj)(c);
  return (0, a.jsxs)(r.IX, {
    transitionState: n,
    onClose: e,
    children: [(0, a.jsx)(r.xBx, {
      graphic: {
        type: "image",
        src: l ? _ : R
      }
    }), (0, a.jsx)(r.fef, {
      children: o
    })]
  })
};

function A(t) {
  let {
    sku: n,
    application: e,
    transitionState: i,
    onClose: s,
    successStateButtonText: o,
    onSuccessButtonClick: c,
    isSuccessButtonLoading: l
  } = t, {
    hasAlreadyLinked: d,
    canStartAuthorization: x,
    startAuthorization: f,
    fetched: g
  } = (0, m.F)(e);
  if (!g) return (0, a.jsx)(r.IX, {
    transitionState: i,
    onClose: s,
    children: (0, a.jsx)(r.fef, {
      children: (0, a.jsx)("div", {
        className: k.loadingContainer,
        children: (0, a.jsx)(u.$jN, {})
      })
    })
  });
  let p = d ? {
    variant: "expressive",
    text: o,
    onClick: c,
    loading: l
  } : {
    variant: "primary",
    text: b.intl.string(b.t["VDAhr+"]),
    onClick: f,
    icon: r.uIJ,
    disabled: !x
  };
  return (0, a.jsx)(T.M, {
    sku: n,
    application: e,
    transitionState: i,
    onClose: s,
    hasAlreadyLinked: d,
    canStartAuthorization: x,
    primaryCTAButtonProps: p,
    bodyText: b.intl.formatToPlainString(b.t.PaYE38, {
      applicationName: e.name
    }),
    title: b.intl.string(b.t["Bn1J+a"])
  })
}

function B(t) {
  let {
    transitionState: n,
    onClose: e,
    sku: i,
    application: s,
    giftCode: l,
    customGiftMessage: d
  } = t, x = (0, I.a)(s), f = (0, S.I)(s), m = (0, c.e7)([p.default], () => p.default.getUser(l.userId)), g = v.ZP.getName(m);
  if (null == x) return (0, a.jsx)(r.IX, {
    transitionState: n,
    onClose: e,
    children: (0, a.jsx)(r.fef, {
      children: (0, a.jsx)(u.$jN, {})
    })
  });
  let C = x && !f ? {
      variant: "primary",
      text: b.intl.string(b.t["s+J8Dl"]),
      onClick: () => {
        h.Z.launchGame(s.id)
      },
      icon: r.rgF
    } : {
      variant: "primary",
      text: b.intl.string(b.t.cpT0Cq),
      onClick: e
    },
    j = null != d && "" !== d;
  return (0, a.jsxs)(r.IX, {
    transitionState: n,
    onClose: e,
    children: [(0, a.jsx)(y.y, {
      sku: i,
      title: b.intl.formatToPlainString(b.t["6yrIzU"], {
        sender: g
      })
    }), (0, a.jsxs)(r.fef, {
      children: [j && (0, a.jsx)(r.xvT, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: k.customGiftMessage,
        children: d
      }), (0, a.jsx)("div", {
        className: o()({
          [k.giftSentToGameNoticeContainerPadding]: j
        }),
        children: (0, a.jsx)(r.M14, {
          type: "success",
          children: b.intl.formatToPlainString(b.t.W2znvX, {
            skuName: i.name,
            applicationName: s.name
          })
        })
      })]
    }), (0, a.jsx)(r.Go$, {
      actions: [C],
      actionsFullWidth: true
    })]
  })
}