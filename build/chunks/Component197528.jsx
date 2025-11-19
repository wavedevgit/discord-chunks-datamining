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
  Chunk298899 = require("./298899.js");
let Chunk575703 = require("./575703.js");

function w() {
  let e, t = (0, Chunk828700.TH)(),
    [n, d] = Chunk473749.useState(() => {
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
  Chunk473749.useEffect(() => {
    Chunk314897.default.isAuthenticated() && !w && Chunk893776.Z.getExperiments()
  }, [w]), (0, Chunk702493.Z)(), (0, Chunk643366.Y)(require);
  let N = Chunk473749.useCallback(() => {
      Chunk77987({
        type: "user-code-input"
      })
    }, [Chunk77987]),
    E = Chunk473749.useCallback(e => {
      d({
        type: "authorization",
        userCodeData: e
      })
    }, [Chunk77987]),
    T = Chunk473749.useCallback(e => {
      d({
        type: "success",
        userCodeData: e
      })
    }, [Chunk77987]),
    O = Chunk473749.useCallback(e => {
      d({
        type: "error",
        userCodeData: e
      })
    }, [Chunk77987]),
    k = true;
  switch (require.type) {
    case "handoff":
      e = (0, Chunk54381.jsx)(Chunk581690.c, {
        code: require.code
      }), k = false;
      break;
    case "user-code-input":
      e = (0, Chunk54381.jsx)(Chunk521937.v, {
        usePrefilledCode: require.usePrefilledCode || false,
        onUserCodeAccepted: E
      });
      break;
    case "authorization":
      e = (0, Chunk54381.jsx)(Chunk94628.B, {
        data: require.userCodeData,
        onDenied: N,
        onError: O,
        onSuccess: T
      }), k = false;
      break;
    case "success":
      e = (0, Chunk54381.jsx)(Chunk902928.u, {
        onComplete: () => (0, Chunk703656.uL)(Chunk981631.Z5c.ME),
        data: require.userCodeData
      });
      break;
    case "error":
      e = (0, Chunk54381.jsx)(Chunk659154.c, {
        onTryAgain: N
      });
      break;
    default:
      e = null
  }
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk298899.activatePage,
    children: [(0, Chunk54381.jsx)("img", {
      className: Chunk298899.artwork,
      src: Chunk575703,
      alt: ""
    }), (0, Chunk54381.jsx)(Chunk133853.Z, {
      show: true,
      className: Chunk298899.logo
    }), k ? (0, Chunk54381.jsx)("div", {
      className: Chunk298899.content,
      children: module
    }) : module]
  })
}
let N = (0, Chunk77987.e)(w),
  E = function() {
    return (0, Chunk828700.TH)().pathname !== Chunk981631.Z5c.ACTIVATE_HANDOFF ? (0, Chunk54381.jsx)(N, {}) : (0, Chunk54381.jsx)(w, {})
  }