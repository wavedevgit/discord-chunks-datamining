/** Chunk was on 21021 **/
/** chunk id: 519193, original params: t,n,a (module,exports,require) **/
require.d(exports, {
  SocialLayerStorefrontItemClaimedSuccessfullyModal: () => h
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk535139 = require("./535139.js"),
  Chunk877481 = require("./877481.js"),
  Chunk579201 = require("./579201.js"),
  Chunk683668 = require("./683668.js"),
  Chunk55121 = require("./55121.jsx"),
  Chunk438926 = require("./438926.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk40399 = require("./40399.js");

function h(t) {
  let {
    transitionState: n,
    onClose: a,
    sku: h,
    application: p
  } = t, f = (0, l.a)(p), {
    fetched: j,
    hasAlreadyLinked: g,
    canStartAuthorization: v,
    startAuthorization: C
  } = (0, o.F)(p), y = (0, c.I)(p);
  if (!j || null == f) return (0, i.jsx)(s.IX, {
    transitionState: n,
    onClose: a,
    children: (0, i.jsx)(s.fef, {
      children: (0, i.jsx)(e.$jN, {})
    })
  });
  if (g) {
    let t = f && !y ? {
      variant: "primary",
      text: x.intl.string(x.t["s+J8Dl"]),
      onClick: () => {
        r.Z.launchGame(p.id)
      },
      icon: s.rgF
    } : {
      variant: "primary",
      text: x.intl.string(x.t.cpT0Cq),
      onClick: a
    };
    return (0, i.jsxs)(s.IX, {
      transitionState: n,
      onClose: a,
      children: [(0, i.jsx)(u.y, {
        sku: h,
        title: x.intl.string(x.t["5glWta"])
      }), (0, i.jsx)(s.fef, {
        children: (0, i.jsx)(e.Text, {
          variant: "text-md/normal",
          className: m.modalBodyText,
          children: x.intl.formatToPlainString(x.t.W2znvX, {
            skuName: h.name,
            applicationName: p.name
          })
        })
      }), (0, i.jsx)(s.Go$, {
        actions: [t],
        actionsFullWidth: true
      })]
    })
  } {
    let t = {
      variant: "primary",
      text: x.intl.string(x.t["VDAhr+"]),
      onClick: C,
      icon: s.uIJ,
      disabled: !v
    };
    return (0, i.jsx)(d.M, {
      sku: h,
      application: p,
      transitionState: n,
      onClose: a,
      hasAlreadyLinked: g,
      canStartAuthorization: v,
      primaryCTAButtonProps: t,
      bodyText: x.intl.formatToPlainString(x.t.Qmkje8, {
        applicationName: p.name
      }),
      title: x.intl.string(x.t.GPAtvf)
    })
  }
}