/** Chunk was on 20601 **/
/** chunk id: 89473, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk73939 = require("./73939.js"),
  Chunk36525 = require("./36525.jsx"),
  Chunk732955 = require("./732955.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk915089 = require("./915089.js"),
  Chunk60175 = require("./60175.js"),
  Chunk890620 = require("./890620.js"),
  Chunk338724 = require("./338724.js"),
  Chunk29697 = require("./29697.jsx"),
  Chunk260197 = require("./260197.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk70645 = require("./70645.js");
let b = () => (0, l.jsx)(a.A, {
    submitting: false,
    message: v.intl.string(v.t["8g514U"]),
    onReset: () => {
      (0, f.C7)(false)
    },
    onResetText: v.intl.string(v.t["ETE/oC"]),
    onSave: () => {
      (0, f.C7)(false), (0, u.OoC)(g.LC)
    },
    onSaveText: v.intl.string(v.t["Xt+Uab"]),
    onSaveButtonColor: c.XD.RED
  }),
  p = e => {
    let {
      transitionState: t,
      guildId: n,
      onClose: a,
      onComplete: c,
      inviteKey: g,
      isPreview: v = false
    } = e, p = (0, f.YN)(e => e.shouldShowWarning), {
      verificationForm: _,
      hasFetched: C
    } = (0, x.$x)(n, v, g), y = (0, d.GV)();
    return (r.useEffect(() => {
      C && _ === m.U && a()
    }, [C, a, _]), _ === m.U) ? null : (0, l.jsxs)(l.Fragment, {
      children: [(0, l.jsxs)(i.dWK, {
        transitionState: t,
        "aria-labelledby": y,
        size: "xxl",
        onClose: a,
        children: [(0, l.jsx)("div", {
          className: j.b,
          children: (0, l.jsx)(o.JnF, {
            onClick: () => a(false)
          })
        }), (0, l.jsx)("div", {
          className: j.kL,
          children: (0, l.jsx)(h.A, {
            verificationForm: _,
            headerId: y,
            guildId: n,
            onClose: a,
            onComplete: c,
            isPreview: v
          })
        })]
      }), (0, l.jsx)(s.F, {
        children: true === p && (0, l.jsx)(u.FQk, {
          className: j.lm,
          children: (0, l.jsx)(b, {})
        })
      })]
    })
  }