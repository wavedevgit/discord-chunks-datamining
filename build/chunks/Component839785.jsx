/** Chunk was on 36946 **/
/** chunk id: 839785, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk708197 = require("./708197.js"),
  Chunk86070 = require("./86070.js"),
  Chunk517164 = require("./517164.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk558628 = require("./558628.jsx"),
  Chunk754495 = require("./754495.jsx"),
  Chunk939075 = require("./939075.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk86617 = require("./86617.js");

function b(t) {
  let {
    user: e,
    entry: i,
    transitionState: b,
    onAction: m,
    onClose: p,
    onOpenGameSettings: L
  } = t, [O, R] = (0, r.yK)([d.A], () => [d.A.isDeletingEntryHistory, d.A.deleteOutboxEntryError]);
  return s.useEffect(() => o.fq, []), (0, n.jsxs)(l.Modal, {
    title: (0, _.W)(i),
    subtitle: A.intl.format(A.t.KV72oe, {
      settingsHook: (t, e) => {
        let s = (0, x.y)({
          entry: i,
          onOpenGameSettings: L
        });
        return (0, n.jsx)(a.MzZ, {
          onClick: () => {
            null == m || m({
              action: "PRESS_CLEAR_HISTORY_DISCLAIMER"
            }), null != s ? s() : (0, C.openUserSettings)(u.X.PROFILE_PANEL, {
              section: h.nc_.PROFILE_CUSTOMIZATION
            }), p()
          },
          children: t
        }, e)
      }
    }),
    size: "sm",
    actions: [{
      text: A.intl.string(A.t["ETE/oC"]),
      onClick: p,
      variant: "secondary",
      size: "sm"
    }, {
      text: null != R ? A.intl.string(A.t["5911Lb"]) : A.intl.string(A.t.VkKicb),
      onClick: () => {
        null == m || m({
          action: "PRESS_CLEAR_HISTORY_BUTTON"
        }), (0, c.FO)(i, e.id, p)
      },
      disabled: O,
      variant: "critical-primary",
      size: "sm"
    }],
    onClose: p,
    transitionState: b,
    children: [null != R ? (0, n.jsxs)("div", {
      className: I.z3,
      children: [(0, n.jsx)(a.aXh, {
        color: a.LU0.colors.ICON_FEEDBACK_CRITICAL
      }), (0, n.jsx)(a.Text, {
        variant: "text-sm/medium",
        children: A.intl.string(A.t.FMbL3s)
      })]
    }) : null, (0, n.jsx)(E.A, {
      user: e,
      entry: i,
      className: I.Nr,
      hideContextMenu: true
    })]
  })
}