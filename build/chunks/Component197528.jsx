/** Chunk was on 69773 **/
/** chunk id: 197528, original params: e,t,n (module,exports,require) **/
"use strict";
require.r(exports), require.d(exports, {
  default: () => E
}), require("./388685.js"), require("./35282.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk593473 = require("./593473.js"),
  Chunk843611 = require("./843611.js"),
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
  Chunk911740 = require("./911740.js");
let Chunk575703 = require("./575703.js");

function w() {
  let e, t = (0, Chunk843611.TH)(),
    [n, d] = Chunk647438.useState(() => {
      if (exports.pathname === Chunk981631.Z5c.ACTIVATE_HANDOFF) {
        let {
          user_code: e
        } = Chunk593473.parse(window.location.search);
        return {
          type: "handoff",
          code: module
        }
      }
      return {
        type: "user-code-input",
        usePrefilledCode: true
      }
    }),
    w = (0, Chunk399606.e7)([Chunk353926.Z], () => Chunk353926.Z.hasLoadedExperiments);
  Chunk647438.useEffect(() => {
    Chunk314897.default.isAuthenticated() && !w && Chunk893776.Z.getExperiments()
  }, [w]), (0, Chunk702493.Z)(), (0, Chunk643366.Y)(require);
  let N = Chunk647438.useCallback(() => {
      Chunk77987({
        type: "user-code-input"
      })
    }, [Chunk77987]),
    E = Chunk647438.useCallback(e => {
      d({
        type: "authorization",
        userCodeData: e
      })
    }, [Chunk77987]),
    T = Chunk647438.useCallback(e => {
      d({
        type: "success",
        userCodeData: e
      })
    }, [Chunk77987]),
    O = Chunk647438.useCallback(e => {
      d({
        type: "error",
        userCodeData: e
      })
    }, [Chunk77987]),
    k = true;
  switch (require.type) {
    case "handoff":
      e = (0, Chunk951288.jsx)(Chunk581690.c, {
        code: require.code
      }), k = false;
      break;
    case "user-code-input":
      e = (0, Chunk951288.jsx)(Chunk521937.v, {
        usePrefilledCode: require.usePrefilledCode || false,
        onUserCodeAccepted: E
      });
      break;
    case "authorization":
      e = (0, Chunk951288.jsx)(Chunk94628.B, {
        data: require.userCodeData,
        onDenied: N,
        onError: O,
        onSuccess: T
      }), k = false;
      break;
    case "success":
      e = (0, Chunk951288.jsx)(Chunk902928.u, {
        onComplete: () => (0, Chunk703656.uL)(Chunk981631.Z5c.ME),
        data: require.userCodeData
      });
      break;
    case "error":
      e = (0, Chunk951288.jsx)(Chunk659154.c, {
        onTryAgain: N
      });
      break;
    default:
      e = null
  }
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk911740.activatePage,
    children: [(0, Chunk951288.jsx)("img", {
      className: Chunk911740.artwork,
      src: Chunk575703,
      alt: ""
    }), (0, Chunk951288.jsx)(Chunk133853.Z, {
      show: true,
      className: Chunk911740.logo
    }), k ? (0, Chunk951288.jsx)("div", {
      className: Chunk911740.content,
      children: module
    }) : module]
  })
}
let N = (0, Chunk77987.e)(w),
  E = function() {
    return (0, Chunk843611.TH)().pathname !== Chunk981631.Z5c.ACTIVATE_HANDOFF ? (0, Chunk951288.jsx)(N, {}) : (0, Chunk951288.jsx)(w, {})
  }