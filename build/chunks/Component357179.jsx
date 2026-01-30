/** Chunk was on 1113 **/
/** chunk id: 357179, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  _: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk731738 = require("./731738.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk831062 = require("./831062.js"),
  Chunk994500 = require("./994500.js"),
  Chunk544231 = require("./544231.js"),
  Chunk349435 = require("./349435.js"),
  Chunk665909 = require("./665909.js"),
  Chunk576045 = require("./576045.jsx"),
  Chunk327337 = require("./327337.js"),
  Chunk985018 = require("./985018.jsx");

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

function A(e) {
  let {
    channelId: t,
    warningId: A,
    senderId: y
  } = e, O = l.useCallback(() => {
    (0, u.xi)(t, [A])
  }, [t, A]), _ = (0, s.bG)([c.A], () => c.A.isBlocked(y)), j = l.useMemo(() => ({
    channelId: t,
    warningId: A,
    senderId: y,
    warningType: d._j.INAPPROPRIATE_CONVERSATION_TIER_2
  }), [t, A, y]);
  l.useEffect(() => {
    (0, h.QF)(b(m({}, j), {
      viewName: h.gN.SAFETY_WARNING_BANNER
    })), o.A.increment({
      name: i.K.SAFETY_WARNING_VIEW
    })
  }, [j]);
  let x = l.useCallback(e => {
      (0, h._$)(b(m({}, j), {
        cta: e
      }))
    }, [j]),
    v = l.useCallback(() => {
      (0, a.mMO)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("45033"), n.e("46717"), n.e("76850")]).then(n.bind(n, 788099));
        return n => {
          let {
            transitionState: l,
            onClose: i
          } = n;
          return (0, r.jsx)(e, {
            otherUserId: y,
            channelId: t,
            warningId: A,
            warningType: d._j.INAPPROPRIATE_CONVERSATION_TIER_2,
            transitionState: l,
            onClose: i
          })
        }
      }, {
        modalKey: g.V
      }), x(h.Wm.USER_BANNER_OPEN_SAFETY_TOOLS)
    }, [t, y, A, x]),
    E = l.useCallback(() => {
      O(), x(h.Wm.USER_BANNER_BLOCK_CONFIRM)
    }, [O, x]),
    C = l.useCallback(() => {
      O(), x(h.Wm.USER_BANNER_BLOCK_AND_REPORT_CONFIRM)
    }, [O, x]),
    S = l.useCallback(() => {
      (0, a.mMO)(async () => {
        let {
          default: e
        } = await n.e("62557").then(n.bind(n, 371185));
        return n => {
          let {
            transitionState: l,
            onClose: i
          } = n;
          return (0, r.jsx)(e, {
            transitionState: l,
            onBlock: E,
            onBlockAndReport: C,
            onCancel: () => {
              null == i || i(), x(h.Wm.USER_BANNER_BLOCK_CANCEL)
            },
            onClose: i,
            userId: y,
            channelId: t
          })
        }
      })
    }, [E, C, y, t, x]);
  return (0, r.jsx)(p.N, {
    channelId: t,
    warningId: A,
    senderId: y,
    warningType: d._j.INAPPROPRIATE_CONVERSATION_TIER_2,
    header: f.intl.string(f.t.ZzlB5p),
    description: f.intl.string(f.t["D1aU+h"]),
    onDismiss: O,
    buttons: [{
      text: f.intl.string(f.t.Qyu4UK),
      variant: "primary",
      onClick: v
    }, ..._ ? [] : [{
      text: f.intl.string(f.t["7q0bNY"]),
      variant: "secondary",
      onClick: S
    }]]
  })
}