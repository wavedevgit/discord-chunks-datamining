/** Chunk was on 88742 **/
/** chunk id: 535618, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
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
  Chunk388032 = require("./388032.jsx"),
  Chunk308285 = require("./308285.js"),
  Chunk167969 = require("./167969.js"),
  Chunk557256 = require("./557256.js");

function _(t) {
  let {
    transitionState: n,
    sku: e,
    onClose: s,
    giftCode: o,
    channelContext: r,
    customGiftMessage: c
  } = t, [u, x] = a.useState({
    state: "LINK"
  }), [f, m] = a.useState(false), g = (0, l.e7)([p.Z], () => p.Z.getApplication(e.applicationId)), C = a.useCallback(async () => {
    try {
      m(true), await d.Z.redeemGiftCode({
        code: o.code,
        options: {
          channelId: r
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
  }, [o, x, r]);
  if (null == g) return null;
  switch (u.state) {
    case "LINK":
      return (0, i.jsx)(k, {
        sku: e,
        application: g,
        transitionState: n,
        onClose: s,
        successStateButtonText: E.intl.string(E.t.go1e4x),
        onSuccessButtonClick: C,
        isSuccessButtonLoading: f
      });
    case "SUCCESS":
      return (0, i.jsx)(R, {
        transitionState: n,
        application: g,
        sku: e,
        giftCode: o,
        customGiftMessage: c,
        onClose: s
      });
    case "ERROR":
      return (0, i.jsx)(b, {
        transitionState: n,
        onClose: s,
        error: u.error
      });
    default:
      (0, h.vE)(u)
  }
}
let b = t => {
  let {
    transitionState: n,
    onClose: e,
    error: a
  } = t, s = m.default.getCurrentUser(), o = (0, C.QW)(a, s), l = (0, x.ZP)(), u = (0, c.wj)(l);
  return (0, i.jsxs)(r.IX, {
    transitionState: n,
    onClose: e,
    children: [(0, i.jsx)(r.xBx, {
      graphic: {
        type: "image",
        src: u ? A : N
      }
    }), (0, i.jsx)(r.fef, {
      children: o
    })]
  })
};

function k(t) {
  let {
    sku: n,
    application: e,
    transitionState: a,
    onClose: s,
    successStateButtonText: o,
    onSuccessButtonClick: l,
    isSuccessButtonLoading: c
  } = t, {
    hasAlreadyLinked: d,
    canStartAuthorization: x,
    startAuthorization: p,
    fetched: m
  } = (0, f.F)(e);
  if (!m) return (0, i.jsx)(r.IX, {
    transitionState: a,
    onClose: s,
    children: (0, i.jsx)(r.fef, {
      children: (0, i.jsx)("div", {
        className: y.loadingContainer,
        children: (0, i.jsx)(u.$jN, {})
      })
    })
  });
  let g = d ? {
    variant: "expressive",
    text: o,
    onClick: l,
    loading: c
  } : {
    variant: "primary",
    text: E.intl.string(E.t["VDAhr+"]),
    onClick: p,
    icon: r.uIJ,
    disabled: !x
  };
  return (0, i.jsx)(I.M, {
    sku: n,
    application: e,
    transitionState: a,
    onClose: s,
    hasAlreadyLinked: d,
    canStartAuthorization: x,
    primaryCTAButtonProps: g,
    bodyText: E.intl.formatToPlainString(E.t.PaYE38, {
      applicationName: e.name
    }),
    title: E.intl.string(E.t["Bn1J+a"])
  })
}

function R(t) {
  let {
    transitionState: n,
    onClose: e,
    sku: a,
    application: s,
    giftCode: c,
    customGiftMessage: d
  } = t, x = (0, T.a)(s), f = (0, S.I)(s), p = (0, l.e7)([m.default], () => m.default.getUser(c.userId)), C = j.ZP.getName(p);
  if (null == x) return (0, i.jsx)(r.IX, {
    transitionState: n,
    onClose: e,
    children: (0, i.jsx)(r.fef, {
      children: (0, i.jsx)(u.$jN, {})
    })
  });
  let h = x && !f ? {
      variant: "primary",
      text: E.intl.string(E.t["s+J8Dl"]),
      onClick: () => {
        g.Z.launchGame(s.id)
      },
      icon: r.rgF
    } : {
      variant: "primary",
      text: E.intl.string(E.t.cpT0Cq),
      onClick: e
    },
    I = null != d && "" !== d;
  return (0, i.jsxs)(r.IX, {
    transitionState: n,
    onClose: e,
    children: [(0, i.jsx)(v.y, {
      sku: a,
      title: E.intl.formatToPlainString(E.t["6yrIzU"], {
        sender: C
      })
    }), (0, i.jsxs)(r.fef, {
      children: [I && (0, i.jsx)(r.xvT, {
        variant: "text-md/normal",
        color: "text-secondary",
        className: y.customGiftMessage,
        children: d
      }), (0, i.jsx)("div", {
        className: o()({
          [y.giftSentToGameNoticeContainerPadding]: I
        }),
        children: (0, i.jsx)(r.M14, {
          type: "success",
          children: E.intl.formatToPlainString(E.t.W2znvX, {
            skuName: a.name,
            applicationName: s.name
          })
        })
      })]
    }), (0, i.jsx)(r.Go$, {
      actions: [h],
      actionsFullWidth: true
    })]
  })
}