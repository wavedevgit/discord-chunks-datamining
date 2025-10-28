/** Chunk was on 88742 **/
/** chunk id: 519193, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  SocialLayerStorefrontItemClaimedSuccessfullyModal: () => m
}), require("./388685.js"), require("./539854.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk535139 = require("./535139.js"),
  Chunk757266 = require("./757266.js"),
  Chunk885110 = require("./885110.js"),
  Chunk877481 = require("./877481.js"),
  Chunk438926 = require("./438926.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk786081 = require("./786081.js");

function m(t) {
  let {
    transitionState: n,
    onClose: e,
    sku: m,
    application: h
  } = t, [C, g] = a.useState(null), {
    fetched: S,
    hasAlreadyLinked: _,
    canStartAuthorization: T,
    startAuthorization: I
  } = (0, r.F)(h), y = (0, l.e7)([u.Z, c.Z], () => null != u.Z.getApplicationActivity(h.id, true) || null != c.Z.getApplication(h.id), [h.id]);
  a.useEffect(() => {
    d.Z.isLaunchable(h).then(g)
  }, [h]);
  let E = (0, i.jsx)(o.$jN, {}),
    j = [];
  return null != C && _ ? (E = (0, i.jsx)(o.Text, {
    variant: "text-md/normal",
    className: f.modalBodyText,
    children: x.intl.formatToPlainString(x.t.W2znvX, {
      skuName: m.name,
      applicationName: h.name
    })
  }), C && !y && j.push({
    variant: "primary",
    text: x.intl.string(x.t["s+J8Dl"]),
    onClick: () => {
      d.Z.launchGame(h.id)
    },
    icon: s.rgF
  })) : null != C && S && !_ && (E = (0, i.jsx)(o.Text, {
    variant: "text-md/normal",
    className: f.modalBodyText,
    children: x.intl.formatToPlainString(x.t["EgCl+Q"], {
      skuName: m.name,
      applicationName: h.name
    })
  }), j.push({
    variant: "primary",
    text: x.intl.string(x.t["VDAhr+"]),
    onClick: () => {
      I()
    },
    icon: s.rgF,
    disabled: !T
  })), (0, i.jsxs)(s.IX, {
    transitionState: n,
    onClose: e,
    children: [(0, i.jsx)(p.y, {
      sku: m,
      title: x.intl.string(x.t["5glWta"])
    }), (0, i.jsx)(s.fef, {
      children: E
    }), j.length > 0 ? (0, i.jsx)(s.Go$, {
      actions: j,
      actionsFullWidth: true
    }) : null]
  })
}