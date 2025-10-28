/** Chunk was on 74240 **/
/** chunk id: 645264, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk215569 = require("./215569.js"),
  Chunk159691 = require("./159691.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk852860 = require("./852860.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk944163 = require("./944163.js"),
  Chunk266395 = require("./266395.js"),
  Chunk187565 = require("./187565.js"),
  Chunk200305 = require("./200305.jsx"),
  Chunk592286 = require("./592286.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk445609 = require("./445609.js");
let b = () => (0, Chunk951288.jsx)(Chunk852860.Z, {
    submitting: false,
    message: Chunk388032.intl.string(Chunk388032.t["8g514U"]),
    onReset: () => {
      (0, Chunk266395.PE)(false)
    },
    onResetText: Chunk388032.intl.string(Chunk388032.t["ETE/oC"]),
    onSave: () => {
      (0, Chunk266395.PE)(false), (0, Chunk481060.Mr3)(Chunk592286.Pn)
    },
    onSaveText: Chunk388032.intl.string(Chunk388032.t["Xt+Uab"]),
    onSaveButtonColor: Chunk755721.Tt.RED
  }),
  j = e => {
    let {
      transitionState: t,
      guildId: n,
      onClose: o,
      onComplete: u,
      inviteKey: g,
      isPreview: p = false
    } = e, j = (0, f.rb)(e => e.shouldShowWarning), {
      verificationForm: C,
      hasFetched: _
    } = (0, h.ng)(n, p, g), O = (0, d.Dt)();
    return (l.useEffect(() => {
      _ && C === m.t && o()
    }, [_, o, C]), C === m.t) ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(i.IX, {
        transitionState: t,
        "aria-labelledby": O,
        size: "xl",
        onClose: o,
        children: [(0, r.jsx)("div", {
          className: v.closeButton,
          children: (0, r.jsx)(a.PZ7, {
            onClick: () => o(false)
          })
        }), (0, r.jsx)("div", {
          className: v.container,
          children: (0, r.jsx)(x.Z, {
            verificationForm: C,
            headerId: O,
            guildId: n,
            onClose: o,
            onComplete: u,
            isPreview: p
          })
        })]
      }), (0, r.jsx)(s.W, {
        children: true === j && (0, r.jsx)(c.oXn, {
          className: v.notice,
          children: (0, r.jsx)(b, {})
        })
      })]
    })
  }