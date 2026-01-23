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

function j() {
  let e, t = (0, i.zy)(),
    [r, d] = a.useState(() => {
      if (t.pathname === y.BVt.ACTIVATE_HANDOFF) {
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
    j = (0, l.bG)([p.A], () => p.A.hasLoadedExperiments);
  a.useEffect(() => {
    h.default.isAuthenticated() && !j && o.A.getExperiments()
  }, [j]), (0, c.A)(), (0, x.K)(r);
  let N = a.useCallback(() => {
      d({
        type: "user-code-input"
      })
    }, [d]),
    E = a.useCallback(e => {
      d({
        type: "authorization",
        userCodeData: e
      })
    }, [d]),
    O = a.useCallback(e => {
      d({
        type: "success",
        userCodeData: e
      })
    }, [d]),
    A = a.useCallback(e => {
      d({
        type: "error",
        userCodeData: e
      })
    }, [d]),
    I = true;
  switch (r.type) {
    case "handoff":
      e = (0, n.jsx)(_.e, {
        code: r.code
      }), I = false;
      break;
    case "user-code-input":
      e = (0, n.jsx)(v.H, {
        usePrefilledCode: r.usePrefilledCode || false,
        onUserCodeAccepted: E
      });
      break;
    case "authorization":
      e = (0, n.jsx)(m.F, {
        data: r.userCodeData,
        onDenied: N,
        onError: A,
        onSuccess: O
      }), I = false;
      break;
    case "success":
      e = (0, n.jsx)(b.r, {
        onComplete: () => (0, f.pX)(y.BVt.ME),
        data: r.userCodeData
      });
      break;
    case "error":
      e = (0, n.jsx)(g.S, {
        onTryAgain: N
      });
      break;
    default:
      e = null
  }
  return (0, n.jsxs)("div", {
    className: C.fY,
    children: [(0, n.jsx)("img", {
      className: C.xX,
      src: w,
      alt: ""
    }), (0, n.jsx)(u.A, {
      show: true,
      className: C.wm
    }), I ? (0, n.jsx)("div", {
      className: C.Qs,
      children: e
    }) : e]
  })
}
let N = (0, Chunk114716.C)(j),
  E = function() {
    return (0, i.zy)().pathname !== y.BVt.ACTIVATE_HANDOFF ? (0, n.jsx)(N, {}) : (0, n.jsx)(j, {})
  }