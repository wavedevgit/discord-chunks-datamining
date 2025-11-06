/** Chunk was on 88742 **/
/** chunk id: 535618, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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

function R(t) {
  let {
    transitionState: n,
    sku: e,
    onClose: s,
    giftCode: o,
    channelContext: l,
    customGiftMessage: u
  } = t, [d, x] = a.useState({
    state: "LINK"
  }), [p, m] = a.useState(false), h = (0, r.e7)([g.Z], () => g.Z.getApplication(e.applicationId));
  a.useEffect(() => {
    o.redeemed && "LINK" === d.state && x({
      state: "ERROR",
      error: new c.yZ(y.intl.string(y.t.Iw2TUW), N.evJ.INVALID_GIFT_REDEMPTION_EXHAUSTED)
    })
  }, [o, d.state]);
  let C = a.useCallback(async () => {
    try {
      m(true), await f.Z.redeemGiftCode({
        code: o.code,
        options: {
          channelId: l
        }
      }), x({
        state: "SUCCESS"
      })
    } catch (t) {
      x({
        state: "ERROR",
        error: t
      })
    } finally {
      m(false)
    }
  }, [o, x, l]);
  if (null == h) return null;
  switch (d.state) {
    case "LINK":
      return (0, i.jsx)(L, {
        sku: e,
        application: h,
        transitionState: n,
        onClose: s,
        successStateButtonText: y.intl.string(y.t.go1e4x),
        onSuccessButtonClick: C,
        isSuccessButtonLoading: p
      });
    case "SUCCESS":
      return (0, i.jsx)(G, {
        transitionState: n,
        application: h,
        sku: e,
        giftCode: o,
        customGiftMessage: u,
        onClose: s
      });
    case "ERROR":
      return (0, i.jsx)(k, {
        transitionState: n,
        onClose: s,
        error: d.error
      });
    default:
      (0, I.vE)(d)
  }
}
let k = t => {
  let {
    transitionState: n,
    onClose: e,
    error: a
  } = t, s = m.default.getCurrentUser(), o = (0, C.QW)(a, s), r = (0, x.ZP)(), c = (0, u.wj)(r);
  return (0, i.jsxs)(l.IX, {
    transitionState: n,
    onClose: e,
    children: [(0, i.jsx)(l.xBx, {
      graphic: {
        type: "image",
        src: c ? _ : b
      }
    }), (0, i.jsx)(l.fef, {
      children: o
    })]
  })
};

function L(t) {
  let {
    sku: n,
    application: e,
    transitionState: a,
    onClose: s,
    successStateButtonText: o,
    onSuccessButtonClick: r,
    isSuccessButtonLoading: c
  } = t, {
    hasAlreadyLinked: u,
    canStartAuthorization: f,
    startAuthorization: x,
    fetched: g
  } = (0, p.F)(e);
  if (!g) return (0, i.jsx)(l.IX, {
    transitionState: a,
    onClose: s,
    children: (0, i.jsx)(l.fef, {
      children: (0, i.jsx)("div", {
        className: A.loadingContainer,
        children: (0, i.jsx)(d.$jN, {})
      })
    })
  });
  let m = u ? {
    variant: "expressive",
    text: o,
    onClick: r,
    loading: c
  } : {
    variant: "primary",
    text: y.intl.string(y.t["VDAhr+"]),
    onClick: x,
    icon: l.uIJ,
    disabled: !f
  };
  return (0, i.jsx)(E.M, {
    sku: n,
    application: e,
    transitionState: a,
    onClose: s,
    hasAlreadyLinked: u,
    canStartAuthorization: f,
    primaryCTAButtonProps: m,
    bodyText: y.intl.formatToPlainString(y.t.PaYE38, {
      applicationName: e.name
    }),
    title: y.intl.string(y.t["Bn1J+a"])
  })
}

function G(t) {
  let {
    transitionState: n,
    onClose: e,
    sku: a,
    application: s,
    giftCode: c,
    customGiftMessage: u
  } = t, f = (0, S.a)(s), x = (0, j.I)(s), p = (0, r.e7)([m.default], () => m.default.getUser(c.userId)), g = T.ZP.getName(p);
  if (null == f) return (0, i.jsx)(l.IX, {
    transitionState: n,
    onClose: e,
    children: (0, i.jsx)(l.fef, {
      children: (0, i.jsx)(d.$jN, {})
    })
  });
  let C = f && !x ? {
      variant: "primary",
      text: y.intl.string(y.t["s+J8Dl"]),
      onClick: () => {
        h.Z.launchGame(s.id)
      },
      icon: l.rgF
    } : {
      variant: "primary",
      text: y.intl.string(y.t.cpT0Cq),
      onClick: e
    },
    I = null != u && "" !== u;
  return (0, i.jsxs)(l.IX, {
    transitionState: n,
    onClose: e,
    children: [(0, i.jsx)(v.y, {
      sku: a,
      title: y.intl.formatToPlainString(y.t["6yrIzU"], {
        sender: g
      })
    }), (0, i.jsxs)(l.fef, {
      children: [I && (0, i.jsx)(l.xvT, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: A.customGiftMessage,
        children: u
      }), (0, i.jsx)("div", {
        className: o()({
          [A.giftSentToGameNoticeContainerPadding]: I
        }),
        children: (0, i.jsx)(l.M14, {
          type: "success",
          children: y.intl.formatToPlainString(y.t.W2znvX, {
            skuName: a.name,
            applicationName: s.name
          })
        })
      })]
    }), (0, i.jsx)(l.Go$, {
      actions: [C],
      actionsFullWidth: true
    })]
  })
}