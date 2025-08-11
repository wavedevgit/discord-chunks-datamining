/** Chunk was on 26545 **/
/** chunk id: 81596, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk230711 = require("./230711.js"),
  Chunk485267 = require("./485267.js"),
  Chunk564990 = require("./564990.js"),
  Chunk353647 = require("./353647.js"),
  Chunk527790 = require("./527790.jsx"),
  Chunk540440 = require("./540440.jsx"),
  Chunk365583 = require("./365583.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk807069 = require("./807069.js");

function C(t) {
  let {
    user: n,
    entry: i,
    transitionState: C,
    onAction: N,
    onClose: R,
    onOpenGameSettings: f
  } = t, [x, O] = (0, s.Wu)([E.Z], () => [E.Z.isDeletingEntryHistory, E.Z.deleteOutboxEntryError]);
  return r.useEffect(() => c.Bt, []), (0, e.jsxs)(l.Modal, {
    title: (0, _.y)(i),
    subtitle: h.intl.format(h.t.KV72oa, {
      settingsHook: (t, n) => {
        let r = (0, T.C)({
          entry: i,
          onOpenGameSettings: f
        });
        return (0, e.jsx)(a.eee, {
          onClick: () => {
            null == N || N({
              action: "PRESS_CLEAR_HISTORY_DISCLAIMER"
            }), null != r ? r() : d.Z.open(), R()
          },
          children: t
        }, n)
      }
    }),
    size: "sm",
    actions: [{
      text: h.intl.string(h.t["ETE/oK"]),
      onClick: R,
      variant: "secondary",
      size: "sm"
    }, {
      text: null != O ? h.intl.string(h.t["5911LS"]) : h.intl.string(h.t.VkKicX),
      onClick: () => {
        null == N || N({
          action: "PRESS_CLEAR_HISTORY_BUTTON"
        }), (0, o.CV)(i, n.id, R)
      },
      disabled: x,
      variant: "critical-primary",
      size: "sm"
    }],
    onClose: R,
    transitionState: C,
    children: [null != O ? (0, e.jsxs)("div", {
      className: p.error,
      children: [(0, e.jsx)(a.k$p, {
        color: a.TVs.colors.STATUS_DANGER
      }), (0, e.jsx)(a.Text, {
        variant: "text-sm/medium",
        children: h.intl.string(h.t.FMbL3t)
      })]
    }) : null, (0, e.jsx)(u.Z, {
      user: n,
      entry: i,
      className: p.card,
      hideContextMenu: true
    })]
  })
}