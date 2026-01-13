/** Chunk was on 26545 **/
/** chunk id: 81596, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => h
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
  Chunk616874 = require("./616874.js");

function h(t) {
  let {
    user: e,
    entry: n,
    transitionState: h,
    onAction: k,
    onClose: m,
    onOpenGameSettings: R
  } = t, [S, T] = (0, l.Wu)([d.Z], () => [d.Z.isDeletingEntryHistory, d.Z.deleteOutboxEntryError]);
  return r.useEffect(() => a.Bt, []), (0, i.jsxs)(s.Modal, {
    title: (0, x.y)(n),
    subtitle: p.intl.format(p.t.KV72oe, {
      settingsHook: (t, e) => {
        let r = (0, b.C)({
          entry: n,
          onOpenGameSettings: R
        });
        return (0, i.jsx)(o.eee, {
          onClick: () => {
            null == k || k({
              action: "PRESS_CLEAR_HISTORY_DISCLAIMER"
            }), null != r ? r() : (0, C.openUserSettings)(u.n.PROFILE_PANEL, {
              section: _.oAB.PROFILE_CUSTOMIZATION
            }), m()
          },
          children: t
        }, e)
      }
    }),
    size: "sm",
    actions: [{
      text: p.intl.string(p.t["ETE/oC"]),
      onClick: m,
      variant: "secondary",
      size: "sm"
    }, {
      text: null != T ? p.intl.string(p.t["5911Lb"]) : p.intl.string(p.t.VkKicb),
      onClick: () => {
        null == k || k({
          action: "PRESS_CLEAR_HISTORY_BUTTON"
        }), (0, c.CV)(n, e.id, m)
      },
      disabled: S,
      variant: "critical-primary",
      size: "sm"
    }],
    onClose: m,
    transitionState: h,
    children: [null != T ? (0, i.jsxs)("div", {
      className: I.error,
      children: [(0, i.jsx)(o.k$p, {
        color: o.TVs.colors.ICON_FEEDBACK_CRITICAL
      }), (0, i.jsx)(o.Text, {
        variant: "text-sm/medium",
        children: p.intl.string(p.t.FMbL3s)
      })]
    }) : null, (0, i.jsx)(E.Z, {
      user: e,
      entry: n,
      className: I.card,
      hideContextMenu: true
    })]
  })
}