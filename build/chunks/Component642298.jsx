/** Chunk was on 9343 **/
/** chunk id: 642298, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk706734 = require("./706734.jsx"),
  Chunk264119 = require("./264119.jsx"),
  Chunk75788 = require("./75788.jsx"),
  Chunk22150 = require("./22150.jsx"),
  Chunk361833 = require("./361833.jsx"),
  Chunk134562 = require("./134562.jsx"),
  Chunk526761 = require("./526761.js"),
  Chunk981631 = require("./981631.js"),
  Chunk308569 = require("./308569.js"),
  Chunk780187 = require("./780187.js"),
  Chunk800010 = require("./800010.js"),
  Chunk75277 = require("./75277.js");

function g(e) {
  var t, n, g;
  let {
    transitionState: S,
    onClose: v
  } = e, O = (0, i.e7)([c.default], () => c.default.getCurrentUser()), M = s.useRef(null != (t = null == O ? true : O.verified) && t);
  s.useEffect(() => (d.default.track(h.rMx.USER_ACCOUNT_EMAIL_CHANGE_ATTEMPTED), () => (0, o.Zy)()), []);
  let I = null == O ? true : O.verified,
    T = I ? p.Ax.CONFIRM_START : p.Ax.EMAIL_AND_PASSWORD,
    [b, y] = s.useState(T),
    [R, w] = s.useState(null),
    [k, L] = s.useState(null),
    [H, U] = s.useState(null),
    [D, G] = s.useState(""),
    [B, P] = s.useState(),
    [Z, F] = s.useState(""),
    W = b === p.Ax.CHANGE_EMAIL_WARNING ? C.wumpusExclamationImg : C.emailHeaderImg,
    z = b === p.Ax.CHANGE_EMAIL_WARNING ? j : f,
    K = {
      impression_group: r.ImpressionGroups.USER_ACCOUNT_EMAIL_CHANGE_FLOW
    };
  return (0, a.jsxs)(l.Y0X, {
    transitionState: S,
    disableTrack: true,
    parentComponent: "ChangeEmailModal",
    children: [(0, a.jsx)("img", {
      alt: "",
      className: W,
      src: z
    }), (0, a.jsxs)(l.MyZ, {
      activeSlide: b,
      width: 440,
      onSlideReady: e => w(e),
      children: [(0, a.jsx)(l.Mi4, {
        id: p.Ax.CONFIRM_START,
        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
        impressionProperties: K,
        children: (0, a.jsx)(_.Z, {
          onNext: () => y(p.Ax.CONFIRM_CODE),
          onClose: v
        })
      }), (0, a.jsx)(l.Mi4, {
        id: p.Ax.CONFIRM_CODE,
        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
        impressionProperties: K,
        children: (0, a.jsx)(x.Z, {
          error: H,
          setError: U,
          setEmailToken: L,
          isSlideReady: R === p.Ax.CONFIRM_CODE,
          onNext: () => y(p.Ax.CHANGE_EMAIL_REASONS),
          onClose: v
        })
      }), (0, a.jsx)(l.Mi4, {
        id: p.Ax.CHANGE_EMAIL_REASONS,
        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COLLECT_REASONS,
        impressionProperties: K,
        children: (0, a.jsx)(u.Z, {
          onNext: () => (d.default.track(h.rMx.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, {
            change_email_reason_enum: B
          }), null != B && A.Mr.has(B) ? y(p.Ax.CHANGE_EMAIL_WARNING) : y(p.Ax.EMAIL_AND_PASSWORD)),
          onClose: v,
          reason: B,
          onReasonChange: P,
          freeTextResponse: Z,
          setFreeTextResponse: F
        })
      }), (0, a.jsx)(l.Mi4, {
        id: p.Ax.CHANGE_EMAIL_WARNING,
        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_WARNING,
        impressionProperties: K,
        children: (0, a.jsx)(N.Z, {
          onNext: () => {
            d.default.track(h.rMx.USER_ACCOUNT_EMAIL_CHANGE_WARNING_CONTINUE, {
              change_email_reason_enum: B
            }), y(p.Ax.EMAIL_AND_PASSWORD)
          },
          onClose: v
        })
      }), (0, a.jsx)(l.Mi4, {
        id: p.Ax.EMAIL_AND_PASSWORD,
        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_ENTER_EMAIL,
        impressionProperties: (n = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              a = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), a.forEach(function(t) {
              var a;
              a = n[t], t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = a
            })
          }
          return e
        }({}, K), g = g = {
          email_verified: M.current
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(g)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var a = Object.getOwnPropertySymbols(e);
            n.push.apply(n, a)
          }
          return n
        })(Object(g)).forEach(function(e) {
          Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(g, e))
        }), n),
        children: (0, a.jsx)(E.Z, {
          emailToken: k,
          isSlideReady: R === p.Ax.EMAIL_AND_PASSWORD,
          onBack: I ? () => y(null != B && A.Mr.has(B) ? p.Ax.CHANGE_EMAIL_WARNING : p.Ax.CHANGE_EMAIL_REASONS) : null,
          onNext: e => {
            d.default.track(h.rMx.USER_ACCOUNT_EMAIL_CHANGE_SAVE_NEW_EMAIL, {
              change_email_reason_enum: B,
              free_text_response: Z
            }), G(e), y(p.Ax.COMPLETE)
          },
          onClose: v
        })
      }), (0, a.jsx)(l.Mi4, {
        id: p.Ax.COMPLETE,
        impressionName: r.ImpressionNames.USER_ACCOUNT_EMAIL_CHANGE_COMPLETE,
        impressionProperties: K,
        children: (0, a.jsx)(m.Z, {
          email: D,
          onClose: v
        })
      })]
    })]
  })
}