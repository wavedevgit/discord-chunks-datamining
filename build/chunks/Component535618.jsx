/** Chunk was on 88742 **/
/** chunk id: 535618, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk775644 = require("./775644.js"),
  Chunk410030 = require("./410030.js"),
  Chunk812206 = require("./812206.js"),
  Chunk594174 = require("./594174.js"),
  Chunk669079 = require("./669079.js"),
  Chunk823379 = require("./823379.js"),
  Chunk133201 = require("./133201.jsx"),
  Chunk519193 = require("./519193.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk167969 = require("./167969.js"),
  Chunk557256 = require("./557256.js");

function S(t) {
  let {
    transitionState: n,
    sku: e,
    onClose: s,
    giftCode: o,
    channelContext: c
  } = t, [d, p] = a.useState({
    state: "LINK"
  }), [C, g] = a.useState(false), S = (0, l.e7)([u.Z], () => u.Z.getApplication(e.applicationId)), T = a.useCallback(async () => {
    try {
      g(true), await r.Z.redeemGiftCode({
        code: o.code,
        options: {
          channelId: c
        }
      }), p({
        state: "SUCCESS"
      })
    } catch (t) {
      p({
        state: "ERROR",
        error: t
      })
    } finally {
      g(false)
    }
  }, [o, p, c]);
  if (null == S) return null;
  switch (d.state) {
    case "LINK":
      return (0, i.jsx)(f.Z, {
        sku: e,
        application: S,
        transitionState: n,
        onClose: s,
        successStateButtonText: h.intl.string(h.t.go1e4x),
        onSuccessButtonClick: T,
        isSuccessButtonLoading: C
      });
    case "SUCCESS":
      return (0, i.jsx)(m.SocialLayerStorefrontItemClaimedSuccessfullyModal, {
        transitionState: n,
        application: S,
        sku: e,
        onClose: s
      });
    case "ERROR":
      return (0, i.jsx)(_, {
        transitionState: n,
        onClose: s,
        error: d.error
      });
    default:
      (0, x.vE)(d)
  }
}
let _ = t => {
  let {
    transitionState: n,
    onClose: e,
    error: a
  } = t, l = d.default.getCurrentUser(), r = (0, p.QW)(a, l), u = (0, c.ZP)(), x = (0, o.wj)(u);
  return (0, i.jsxs)(s.IX, {
    transitionState: n,
    onClose: e,
    children: [(0, i.jsx)(s.xBx, {
      graphic: {
        type: "image",
        src: x ? C : g
      }
    }), (0, i.jsx)(s.fef, {
      children: r
    })]
  })
}