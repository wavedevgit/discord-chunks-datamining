/** Chunk was on 16864 **/
/** chunk id: 60883, original params: e,t,r (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => E
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk492462 = require("./492462.js"),
  Chunk960488 = require("./960488.js"),
  Chunk417597 = require("./417597.js"),
  Chunk830215 = require("./830215.js"),
  Chunk269815 = require("./269815.js"),
  Chunk114716 = require("./114716.jsx"),
  Chunk942156 = require("./942156.jsx"),
  Chunk49463 = require("./49463.js"),
  Chunk976860 = require("./976860.js"),
  Chunk961350 = require("./961350.js"),
  Chunk398378 = require("./398378.js"),
  Chunk372726 = require("./372726.jsx"),
  Chunk459485 = require("./459485.jsx"),
  Chunk810669 = require("./810669.jsx"),
  Chunk698894 = require("./698894.jsx"),
  Chunk621846 = require("./621846.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk136267 = require("./136267.js");
let Chunk843020 = require("./843020.js");

function _() {
  let e, t = (0, i.zy)(),
    [r, d] = n.useState(() => {
      if (t.pathname === j.BVt.ACTIVATE_HANDOFF) {
        let {
          user_code: e
        } = s.parse(window.location.search);
        return {
          type: "handoff",
          code: e
        }
      }
      return {
        type: "user-code-input",
        usePrefilledCode: true
      }
    }),
    _ = (0, l.bG)([f.A], () => f.A.hasLoadedExperiments);
  n.useEffect(() => {
    h.default.isAuthenticated() && !_ && c.A.getExperiments()
  }, [_]), (0, o.A)(), (0, x.K)(r);
  let C = n.useCallback(() => {
      d({
        type: "user-code-input"
      })
    }, [d]),
    E = n.useCallback(e => {
      d({
        type: "authorization",
        userCodeData: e
      })
    }, [d]),
    A = n.useCallback(e => {
      d({
        type: "success",
        userCodeData: e
      })
    }, [d]),
    O = n.useCallback(e => {
      d({
        type: "error",
        userCodeData: e
      })
    }, [d]),
    I = true;
  switch (r.type) {
    case "handoff":
      e = (0, a.jsx)(g.e, {
        code: r.code
      }), I = false;
      break;
    case "user-code-input":
      e = (0, a.jsx)(v.H, {
        usePrefilledCode: r.usePrefilledCode || false,
        onUserCodeAccepted: E
      });
      break;
    case "authorization":
      e = (0, a.jsx)(b.F, {
        data: r.userCodeData,
        onDenied: C,
        onError: O,
        onSuccess: A
      }), I = false;
      break;
    case "success":
      e = (0, a.jsx)(y.r, {
        onComplete: () => (0, p.pX)(j.BVt.ME),
        data: r.userCodeData
      });
      break;
    case "error":
      e = (0, a.jsx)(m.S, {
        onTryAgain: C
      });
      break;
    default:
      e = null
  }
  return (0, a.jsxs)("div", {
    className: w.fY,
    children: [(0, a.jsx)("img", {
      className: w.xX,
      src: N,
      alt: ""
    }), (0, a.jsx)(u.A, {
      show: true,
      className: w.wm
    }), I ? (0, a.jsx)("div", {
      className: w.Qs,
      children: e
    }) : e]
  })
}
let C = (0, Chunk114716.C)(_),
  E = function() {
    return (0, i.zy)().pathname !== j.BVt.ACTIVATE_HANDOFF ? (0, a.jsx)(C, {}) : (0, a.jsx)(_, {})
  }