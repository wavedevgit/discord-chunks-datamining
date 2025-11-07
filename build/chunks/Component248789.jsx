/** Chunk was on 86642 **/
/** chunk id: 248789, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk286379 = require("./286379.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk797614 = require("./797614.js"),
  Chunk699516 = require("./699516.js"),
  Chunk378298 = require("./378298.js"),
  Chunk359119 = require("./359119.js"),
  Chunk473092 = require("./473092.js"),
  Chunk177342 = require("./177342.jsx"),
  Chunk134612 = require("./134612.js"),
  Chunk388032 = require("./388032.jsx");

function g(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      var i;
      i = n[t], t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = i
    })
  }
  return e
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function y(e) {
  let {
    channelId: t,
    warningId: y,
    senderId: C
  } = e, _ = r.useCallback(() => {
    (0, u.T)(t, [y])
  }, [t, y]), v = (0, a.e7)([c.Z], () => c.Z.isBlocked(C)), x = r.useMemo(() => ({
    channelId: t,
    warningId: y,
    senderId: C,
    warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2
  }), [t, y, C]);
  r.useEffect(() => {
    (0, p.KQ)(b(g({}, x), {
      viewName: p.pb.SAFETY_WARNING_BANNER
    })), s.Z.increment({
      name: l.V.SAFETY_WARNING_VIEW
    })
  }, [x]);
  let O = r.useCallback(e => {
      (0, p.qc)(b(g({}, x), {
        cta: e
      }))
    }, [x]),
    E = r.useCallback(() => {
      (0, o.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("37031"), n.e("89650"), n.e("899")]).then(n.bind(n, 611446));
        return n => {
          let {
            transitionState: r,
            onClose: l
          } = n;
          return (0, i.jsx)(e, {
            otherUserId: C,
            channelId: t,
            warningId: y,
            warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
            transitionState: r,
            onClose: l
          })
        }
      }, {
        modalKey: h.X_
      }), O(p.NM.USER_BANNER_OPEN_SAFETY_TOOLS)
    }, [t, C, y, O]),
    j = r.useCallback(() => {
      _(), O(p.NM.USER_BANNER_BLOCK_CONFIRM)
    }, [_, O]),
    S = r.useCallback(() => {
      _(), O(p.NM.USER_BANNER_BLOCK_AND_REPORT_CONFIRM)
    }, [_, O]),
    P = r.useCallback(() => {
      (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("19538").then(n.bind(n, 699783));
        return n => {
          let {
            transitionState: r,
            onClose: l
          } = n;
          return (0, i.jsx)(e, {
            transitionState: r,
            onBlock: j,
            onBlockAndReport: S,
            onCancel: () => {
              null == l || l(), O(p.NM.USER_BANNER_BLOCK_CANCEL)
            },
            onClose: l,
            userId: C,
            channelId: t
          })
        }
      })
    }, [j, S, C, t, O]);
  return (0, i.jsx)(f.Q, {
    channelId: t,
    warningId: y,
    senderId: C,
    warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
    header: m.intl.string(m.t.ZzlB5p),
    description: m.intl.string(m.t["D1aU+h"]),
    onDismiss: _,
    buttons: [{
      text: m.intl.string(m.t.Qyu4UK),
      variant: "primary",
      onClick: E
    }, ...v ? [] : [{
      text: m.intl.string(m.t["7q0bNY"]),
      variant: "secondary",
      onClick: P
    }]]
  })
}