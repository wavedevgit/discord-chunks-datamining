/** Chunk was on 26545 **/
/** chunk id: 81596, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => O
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk485267 = require("./485267.js"),
  Chunk564990 = require("./564990.js"),
  Chunk353647 = require("./353647.js"),
  Chunk313789 = require("./313789.js"),
  Chunk518596 = require("./518596.jsx"),
  Chunk527790 = require("./527790.jsx"),
  Chunk540440 = require("./540440.jsx"),
  Chunk365583 = require("./365583.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk569162 = require("./569162.js");

function O(t) {
  let {
    user: n,
    entry: i,
    transitionState: O,
    onAction: p,
    onClose: I,
    onOpenGameSettings: f
  } = t, [x, S] = (0, l.Wu)([o.Z], () => [o.Z.isDeletingEntryHistory, o.Z.deleteOutboxEntryError]);
  return r.useEffect(() => c.Bt, []), (0, e.jsxs)(s.Modal, {
    title: (0, T.y)(i),
    subtitle: R.intl.format(R.t.KV72oe, {
      settingsHook: (t, n) => {
        let r = (0, C.C)({
          entry: i,
          onOpenGameSettings: f
        });
        return (0, e.jsx)(a.Anchor, {
          onClick: () => {
            null == p || p({
              action: "PRESS_CLEAR_HISTORY_DISCLAIMER"
            }), null != r ? r() : (0, u.openUserSettings)(E.n.PROFILE_PANEL, {
              section: N.oAB.PROFILE_CUSTOMIZATION
            }), I()
          },
          children: t
        }, n)
      }
    }),
    size: "sm",
    actions: [{
      text: R.intl.string(R.t["ETE/oC"]),
      onClick: I,
      variant: "secondary",
      size: "sm"
    }, {
      text: null != S ? R.intl.string(R.t["5911Lb"]) : R.intl.string(R.t.VkKicb),
      onClick: () => {
        null == p || p({
          action: "PRESS_CLEAR_HISTORY_BUTTON"
        }), (0, d.CV)(i, n.id, I)
      },
      disabled: x,
      variant: "critical-primary",
      size: "sm"
    }],
    onClose: I,
    transitionState: O,
    children: [null != S ? (0, e.jsxs)("div", {
      className: h.error,
      children: [(0, e.jsx)(a.k$p, {
        color: a.TVs.colors.STATUS_DANGER
      }), (0, e.jsx)(a.Text, {
        variant: "text-sm/medium",
        children: R.intl.string(R.t.FMbL3s)
      })]
    }) : null, (0, e.jsx)(_.Z, {
      user: n,
      entry: i,
      className: h.card,
      hideContextMenu: true
    })]
  })
}