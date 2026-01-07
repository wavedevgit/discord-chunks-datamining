/** Chunk was on 69773 **/
/** chunk id: 197528, original params: e,t,n (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => E
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk593473 = require("./593473.js"),
  Chunk828700 = require("./828700.js"),
  Chunk399606 = require("./399606.js"),
  Chunk893776 = require("./893776.js"),
  Chunk702493 = require("./702493.js"),
  Chunk77987 = require("./77987.jsx"),
  Chunk133853 = require("./133853.jsx"),
  Chunk353926 = require("./353926.js"),
  Chunk703656 = require("./703656.js"),
  Chunk314897 = require("./314897.js"),
  Chunk643366 = require("./643366.js"),
  Chunk94628 = require("./94628.jsx"),
  Chunk659154 = require("./659154.jsx"),
  Chunk581690 = require("./581690.jsx"),
  Chunk902928 = require("./902928.jsx"),
  Chunk521937 = require("./521937.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk487659 = require("./487659.js");
let Chunk575703 = require("./575703.js");

function w() {
  let e, t = (0, i.TH)(),
    [n, d] = r.useState(() => {
      if (t.pathname === y.Z5c.ACTIVATE_HANDOFF) {
        let {
          user_code: e
        } = o.parse(window.location.search);
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
    w = (0, s.e7)([f.Z], () => f.Z.hasLoadedExperiments);
  r.useEffect(() => {
    h.default.isAuthenticated() && !w && c.Z.getExperiments()
  }, [w]), (0, l.Z)(), (0, x.Y)(n);
  let N = r.useCallback(() => {
      d({
        type: "user-code-input"
      })
    }, [d]),
    E = r.useCallback(e => {
      d({
        type: "authorization",
        userCodeData: e
      })
    }, [d]),
    T = r.useCallback(e => {
      d({
        type: "success",
        userCodeData: e
      })
    }, [d]),
    O = r.useCallback(e => {
      d({
        type: "error",
        userCodeData: e
      })
    }, [d]),
    k = true;
  switch (n.type) {
    case "handoff":
      e = (0, a.jsx)(m.c, {
        code: n.code
      }), k = false;
      break;
    case "user-code-input":
      e = (0, a.jsx)(C.v, {
        usePrefilledCode: n.usePrefilledCode || false,
        onUserCodeAccepted: E
      });
      break;
    case "authorization":
      e = (0, a.jsx)(g.B, {
        data: n.userCodeData,
        onDenied: N,
        onError: O,
        onSuccess: T
      }), k = false;
      break;
    case "success":
      e = (0, a.jsx)(v.u, {
        onComplete: () => (0, p.uL)(y.Z5c.ME),
        data: n.userCodeData
      });
      break;
    case "error":
      e = (0, a.jsx)(b.c, {
        onTryAgain: N
      });
      break;
    default:
      e = null
  }
  return (0, a.jsxs)("div", {
    className: j.activatePage,
    children: [(0, a.jsx)("img", {
      className: j.artwork,
      src: _,
      alt: ""
    }), (0, a.jsx)(u.Z, {
      show: true,
      className: j.logo
    }), k ? (0, a.jsx)("div", {
      className: j.content,
      children: e
    }) : e]
  })
}
let N = (0, Chunk77987.e)(w),
  E = function() {
    return (0, i.TH)().pathname !== y.Z5c.ACTIVATE_HANDOFF ? (0, a.jsx)(N, {}) : (0, a.jsx)(w, {})
  }