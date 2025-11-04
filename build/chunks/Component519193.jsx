/** Chunk was on 21021 **/
/** chunk id: 519193, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  SocialLayerStorefrontItemClaimedSuccessfullyModal: () => p
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
  Chunk786081 = require("./786081.js");

function p(t) {
  let {
    transitionState: n,
    onClose: i,
    sku: p,
    application: m
  } = t, h = (0, c.a)(m), {
    fetched: T,
    hasAlreadyLinked: v,
    canStartAuthorization: g,
    startAuthorization: C
  } = (0, s.F)(m), I = (0, r.I)(m);
  if (!T || null == h) return (0, a.jsx)(e.IX, {
    transitionState: n,
    onClose: i,
    children: (0, a.jsx)(e.fef, {
      children: (0, a.jsx)(l.$jN, {})
    })
  });
  if (v) {
    let t = h && !I ? {
      variant: "primary",
      text: x.intl.string(x.t["s+J8Dl"]),
      onClick: () => {
        o.Z.launchGame(m.id)
      },
      icon: e.rgF
    } : {
      variant: "primary",
      text: x.intl.string(x.t.cpT0Cq),
      onClick: i
    };
    return (0, a.jsxs)(e.IX, {
      transitionState: n,
      onClose: i,
      children: [(0, a.jsx)(d.y, {
        sku: p,
        title: x.intl.string(x.t["5glWta"])
      }), (0, a.jsx)(e.fef, {
        children: (0, a.jsx)(l.Text, {
          variant: "text-md/normal",
          className: f.modalBodyText,
          children: x.intl.formatToPlainString(x.t.W2znvX, {
            skuName: p.name,
            applicationName: m.name
          })
        })
      }), (0, a.jsx)(e.Go$, {
        actions: [t],
        actionsFullWidth: true
      })]
    })
  } {
    let t = {
      variant: "primary",
      text: x.intl.string(x.t["VDAhr+"]),
      onClick: C,
      icon: e.uIJ,
      disabled: !g
    };
    return (0, a.jsx)(u.M, {
      sku: p,
      application: m,
      transitionState: n,
      onClose: i,
      hasAlreadyLinked: v,
      canStartAuthorization: g,
      primaryCTAButtonProps: t,
      bodyText: x.intl.formatToPlainString(x.t.Qmkje8, {
        applicationName: m.name
      }),
      title: x.intl.string(x.t.GPAtvf)
    })
  }
}