/** Chunk was on 20601 **/
/** chunk id: 89473, original params: e,t,l (module,exports,require) **/
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
let j = () => (0, n.jsx)(a.A, {
    submitting: false,
    message: v.intl.string(v.t["8g514U"]),
    onReset: () => {
      (0, m.C7)(false)
    },
    onResetText: v.intl.string(v.t["ETE/oC"]),
    onSave: () => {
      (0, m.C7)(false), (0, d.OoC)(h.LC)
    },
    onSaveText: v.intl.string(v.t["Xt+Uab"]),
    onSaveButtonColor: c.XD.RED
  }),
  p = e => {
    let {
      transitionState: t,
      guildId: l,
      onClose: a,
      onComplete: c,
      inviteKey: h,
      isPreview: v = false
    } = e, p = (0, m.YN)(e => e.shouldShowWarning), {
      verificationForm: C,
      hasFetched: O
    } = (0, x.$x)(l, v, h), y = (0, u.GV)();
    return (r.useEffect(() => {
      O && C === f.U && a()
    }, [O, a, C]), C === f.U) ? null : (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsxs)(s.dWK, {
        transitionState: t,
        "aria-labelledby": y,
        size: "xxl",
        onClose: a,
        children: [(0, n.jsx)("div", {
          className: g.b,
          children: (0, n.jsx)(o.JnF, {
            onClick: () => a(false)
          })
        }), (0, n.jsx)("div", {
          className: g.kL,
          children: (0, n.jsx)(b.A, {
            verificationForm: C,
            headerId: y,
            guildId: l,
            onClose: a,
            onComplete: c,
            isPreview: v
          })
        })]
      }), (0, n.jsx)(i.F, {
        children: true === p && (0, n.jsx)(d.FQk, {
          className: g.lm,
          children: (0, n.jsx)(j, {})
        })
      })]
    })
  }