/** Chunk was on 88742 **/
/** chunk id: 535618, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => _
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
  Chunk388032 = require("./388032.jsx"),
  Chunk167969 = require("./167969.js"),
  Chunk557256 = require("./557256.js");

function _(t) {
  let {
    transitionState: n,
    sku: e,
    onClose: s,
    giftCode: l,
    channelContext: c
  } = t, [d, p] = a.useState({
    state: "LINK"
  }), [m, h] = a.useState(false), _ = (0, o.e7)([u.Z], () => u.Z.getApplication(e.applicationId)), g = a.useCallback(async () => {
    try {
      h(true), await r.Z.redeemGiftCode({
        code: l.code,
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
      h(false)
    }
  }, [l, p, c]);
  if (null == _) return null;
  switch (d.state) {
    case "LINK":
      return (0, i.jsx)(f.Z, {
        sku: e,
        application: _,
        transitionState: n,
        onClose: s,
        successStateButtonText: C.intl.string(C.t["go1e4+"]),
        onSuccessButtonClick: g,
        isSuccessButtonLoading: m
      });
    case "SUCCESS":
      return (0, i.jsx)(f.q, {
        transitionState: n,
        application: _,
        sku: e,
        onClose: s
      });
    case "ERROR":
      return (0, i.jsx)(I, {
        transitionState: n,
        onClose: s,
        error: d.error
      });
    default:
      (0, x.vE)(d)
  }
}
let I = t => {
  let {
    transitionState: n,
    onClose: e,
    error: a
  } = t, o = d.default.getCurrentUser(), r = (0, p.QW)(a, o), u = (0, c.ZP)(), x = (0, l.wj)(u);
  return (0, i.jsxs)(s.IX, {
    transitionState: n,
    onClose: e,
    children: [(0, i.jsx)(s.xBx, {
      graphic: {
        type: "image",
        src: x ? m : h
      }
    }), (0, i.jsx)(s.fef, {
      children: r
    })]
  })
}