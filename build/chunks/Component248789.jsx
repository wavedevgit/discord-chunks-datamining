/** Chunk was on 82124 **/
/** chunk id: 248789, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function b(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
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
    senderId: v
  } = e, O = i.useCallback(() => {
    (0, u.T)(t, [y])
  }, [t, y]), j = (0, a.e7)([c.Z], () => c.Z.isBlocked(v)), x = i.useMemo(() => ({
    channelId: t,
    warningId: y,
    senderId: v,
    warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2
  }), [t, y, v]);
  i.useEffect(() => {
    (0, p.KQ)(b(m({}, x), {
      viewName: p.pb.SAFETY_WARNING_BANNER
    })), s.Z.increment({
      name: l.V.SAFETY_WARNING_VIEW
    })
  }, [x]);
  let C = i.useCallback(e => {
      (0, p.qc)(b(m({}, x), {
        cta: e
      }))
    }, [x]),
    E = i.useCallback(() => {
      (0, o.ZDy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("37031"), n.e("89650"), n.e("30332")]).then(n.bind(n, 611446));
        return n => {
          let {
            transitionState: i,
            onClose: l
          } = n;
          return (0, r.jsx)(e, {
            otherUserId: v,
            channelId: t,
            warningId: y,
            warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
            transitionState: i,
            onClose: l
          })
        }
      }, {
        modalKey: h.X_
      }), C(p.NM.USER_BANNER_OPEN_SAFETY_TOOLS)
    }, [t, v, y, C]),
    S = i.useCallback(() => {
      O(), C(p.NM.USER_BANNER_BLOCK_CONFIRM)
    }, [O, C]),
    _ = i.useCallback(() => {
      O(), C(p.NM.USER_BANNER_BLOCK_AND_REPORT_CONFIRM)
    }, [O, C]),
    I = i.useCallback(() => {
      (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("19538").then(n.bind(n, 699783));
        return n => {
          let {
            transitionState: i,
            onClose: l
          } = n;
          return (0, r.jsx)(e, {
            transitionState: i,
            onBlock: S,
            onBlockAndReport: _,
            onCancel: () => {
              null == l || l(), C(p.NM.USER_BANNER_BLOCK_CANCEL)
            },
            onClose: l,
            userId: v,
            channelId: t
          })
        }
      })
    }, [S, _, v, t, C]);
  return (0, r.jsx)(f.Q, {
    channelId: t,
    warningId: y,
    senderId: v,
    warningType: d.pj.INAPPROPRIATE_CONVERSATION_TIER_2,
    header: g.intl.string(g.t.ZzlB5p),
    description: g.intl.string(g.t["D1aU+h"]),
    onDismiss: O,
    buttons: [{
      text: g.intl.string(g.t.Qyu4UK),
      variant: "primary",
      onClick: E
    }, ...j ? [] : [{
      text: g.intl.string(g.t["7q0bNY"]),
      variant: "secondary",
      onClick: I
    }]]
  })
}