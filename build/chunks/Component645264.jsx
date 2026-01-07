/** Chunk was on 93671 **/
/** chunk id: 645264, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk215569 = require("./215569.js"),
  Chunk796027 = require("./796027.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk944163 = require("./944163.js"),
  Chunk266395 = require("./266395.js"),
  Chunk187565 = require("./187565.js"),
  Chunk200305 = require("./200305.jsx"),
  Chunk592286 = require("./592286.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk161752 = require("./161752.js");
let v = () => (0, r.jsx)(s.Z, {
    submitting: false,
    message: g.intl.string(g.t["8g514U"]),
    onReset: () => {
      (0, f.PE)(false)
    },
    onResetText: g.intl.string(g.t["ETE/oC"]),
    onSave: () => {
      (0, f.PE)(false), (0, u.Mr3)(h.Pn)
    },
    onSaveText: g.intl.string(g.t["Xt+Uab"]),
    onSaveButtonColor: c.Tt.RED
  }),
  j = e => {
    let {
      transitionState: t,
      guildId: n,
      onClose: s,
      onComplete: c,
      inviteKey: h,
      isPreview: g = false
    } = e, j = (0, f.rb)(e => e.shouldShowWarning), {
      verificationForm: C,
      hasFetched: O
    } = (0, b.ng)(n, g, h), I = (0, d.Dt)();
    return (l.useEffect(() => {
      O && C === m.t && s()
    }, [O, s, C]), C === m.t) ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(i.IX, {
        transitionState: t,
        "aria-labelledby": I,
        size: "xxl",
        onClose: s,
        children: [(0, r.jsx)("div", {
          className: p.closeButton,
          children: (0, r.jsx)(o.PZ7, {
            onClick: () => s(false)
          })
        }), (0, r.jsx)("div", {
          className: p.container,
          children: (0, r.jsx)(x.Z, {
            verificationForm: C,
            headerId: I,
            guildId: n,
            onClose: s,
            onComplete: c,
            isPreview: g
          })
        })]
      }), (0, r.jsx)(a.W, {
        children: true === j && (0, r.jsx)(u.oXn, {
          className: p.notice,
          children: (0, r.jsx)(v, {})
        })
      })]
    })
  }