/** Chunk was on 36605 **/
/** chunk id: 645264, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk215569 = require("./215569.js"),
  Chunk146187 = require("./146187.jsx"),
  Chunk257465 = require("./257465.jsx"),
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
let v = () => (0, Chunk255367.jsx)(Chunk852860.Z, {
    submitting: false,
    message: Chunk388032.intl.string(Chunk388032.t["8g514e"]),
    onReset: () => {
      (0, Chunk266395.PE)(false)
    },
    onResetText: Chunk388032.intl.string(Chunk388032.t["ETE/oK"]),
    onSave: () => {
      (0, Chunk266395.PE)(false), (0, Chunk481060.Mr3)(Chunk592286.Pn)
    },
    onSaveText: Chunk388032.intl.string(Chunk388032.t["Xt+UaW"]),
    onSaveButtonColor: Chunk755721.Tt.RED
  }),
  _ = e => {
    let {
      transitionState: t,
      guildId: n,
      onClose: a,
      onComplete: u,
      inviteKey: x,
      isPreview: g = false
    } = e, _ = (0, f.rb)(e => e.shouldShowWarning), {
      verificationForm: j,
      hasFetched: C
    } = (0, h.ng)(n, g, x), O = (0, d.Dt)();
    return (i.useEffect(() => {
      C && j === m.t && a()
    }, [C, a, j]), j === m.t) ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(o.I, {
        transitionState: t,
        "aria-labelledby": O,
        size: "xl",
        onClose: a,
        children: [(0, r.jsx)("div", {
          className: b.closeButton,
          children: (0, r.jsx)(s.P, {
            onClick: () => a(false)
          })
        }), (0, r.jsx)("div", {
          className: b.container,
          children: (0, r.jsx)(p.Z, {
            verificationForm: j,
            headerId: O,
            guildId: n,
            onClose: a,
            onComplete: u,
            isPreview: g
          })
        })]
      }), (0, r.jsx)(l.W, {
        children: true === _ && (0, r.jsx)(c.oXn, {
          className: b.notice,
          children: (0, r.jsx)(v, {})
        })
      })]
    })
  }