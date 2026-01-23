/** Chunk was on 36946 **/
/** chunk id: 839785, original params: t,i,n (module,exports,require) **/
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
    user: i,
    entry: n,
    transitionState: b,
    onAction: m,
    onClose: p,
    onOpenGameSettings: L
  } = t, [O, R] = (0, l.yK)([d.A], () => [d.A.isDeletingEntryHistory, d.A.deleteOutboxEntryError]);
  return s.useEffect(() => a.fq, []), (0, e.jsxs)(r.Modal, {
    title: (0, _.W)(n),
    subtitle: A.intl.format(A.t.KV72oe, {
      settingsHook: (t, i) => {
        let s = (0, x.y)({
          entry: n,
          onOpenGameSettings: L
        });
        return (0, e.jsx)(o.MzZ, {
          onClick: () => {
            null == m || m({
              action: "PRESS_CLEAR_HISTORY_DISCLAIMER"
            }), null != s ? s() : (0, C.openUserSettings)(u.X.PROFILE_PANEL, {
              section: h.nc_.PROFILE_CUSTOMIZATION
            }), p()
          },
          children: t
        }, i)
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
        }), (0, c.FO)(n, i.id, p)
      },
      disabled: O,
      variant: "critical-primary",
      size: "sm"
    }],
    onClose: p,
    transitionState: b,
    children: [null != R ? (0, e.jsxs)("div", {
      className: I.z3,
      children: [(0, e.jsx)(o.aXh, {
        color: o.LU0.colors.ICON_FEEDBACK_CRITICAL
      }), (0, e.jsx)(o.Text, {
        variant: "text-sm/medium",
        children: A.intl.string(A.t.FMbL3s)
      })]
    }) : null, (0, e.jsx)(E.A, {
      user: i,
      entry: n,
      className: I.Nr,
      hideContextMenu: true
    })]
  })
}