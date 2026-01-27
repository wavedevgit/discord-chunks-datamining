/** Chunk was on 20601 **/
/** chunk id: 89473, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => b
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
let j = () => (0, r.jsx)(a.A, {
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
  b = e => {
    let {
      transitionState: t,
      guildId: n,
      onClose: a,
      onComplete: c,
      inviteKey: g,
      isPreview: v = false
    } = e, b = (0, f.YN)(e => e.shouldShowWarning), {
      verificationForm: _,
      hasFetched: E
    } = (0, h.$x)(n, v, g), C = (0, d.GV)();
    return (l.useEffect(() => {
      E && _ === m.U && a()
    }, [E, a, _]), _ === m.U) ? null : (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)(i.dWK, {
        transitionState: t,
        "aria-labelledby": C,
        size: "xxl",
        onClose: a,
        children: [(0, r.jsx)("div", {
          className: p.b,
          children: (0, r.jsx)(o.JnF, {
            onClick: () => a(false)
          })
        }), (0, r.jsx)("div", {
          className: p.kL,
          children: (0, r.jsx)(x.A, {
            verificationForm: _,
            headerId: C,
            guildId: n,
            onClose: a,
            onComplete: c,
            isPreview: v
          })
        })]
      }), (0, r.jsx)(s.F, {
        children: true === b && (0, r.jsx)(u.FQk, {
          className: p.lm,
          children: (0, r.jsx)(j, {})
        })
      })]
    })
  }