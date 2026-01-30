/** Chunk was on 1113 **/
/** chunk id: 221059, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => _
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk731738 = require("./731738.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk49229 = require("./49229.js"),
  Chunk831062 = require("./831062.js"),
  Chunk754302 = require("./754302.jsx"),
  Chunk632738 = require("./632738.jsx"),
  Chunk994500 = require("./994500.js"),
  Chunk544231 = require("./544231.js"),
  Chunk349435 = require("./349435.js"),
  Chunk665909 = require("./665909.js"),
  Chunk576045 = require("./576045.jsx"),
  Chunk327337 = require("./327337.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function O(e) {
  let {
    senderId: t,
    channelId: n,
    warningId: i
  } = e, {
    isIgnored: a
  } = (0, s.cf)([h.A], () => ({
    isIgnored: h.A.isIgnored(t)
  }), [t]), c = l.useCallback(() => {
    (0, f._$)({
      channelId: n,
      warningId: i,
      senderId: t,
      warningType: g._j.STRANGER_DANGER,
      cta: f.Wm.USER_MODAL_IGNORE
    }), o.A.ignoreUser(t, "web_stranger_danger_more", n)
  }, [n, i, t]), u = l.useCallback(() => {
    (0, f._$)({
      channelId: n,
      warningId: i,
      senderId: t,
      warningType: g._j.STRANGER_DANGER,
      cta: f.Wm.USER_MODAL_UNIGNORE
    }), o.A.unignoreUser(t, "web_stranger_danger_more", n)
  }, [n, i, t]);
  return (0, r.jsx)(d.PQ, {
    title: y.intl.string(y.t.avyV7P),
    description: y.intl.string(y.t.naWE6W),
    buttonText: a ? y.intl.string(y.t["3SrzRT"]) : y.intl.string(y.t.avyV7P),
    onButtonPress: a ? u : c
  })
}

function _(e) {
  let {
    channelId: t,
    warningId: _,
    senderId: j
  } = e, {
    isBlocked: x
  } = (0, s.cf)([h.A], () => ({
    isBlocked: h.A.isBlocked(j)
  }), [j]), v = l.useCallback(() => {
    (0, p.xi)(t, [_])
  }, [t, _]), E = (0, b.eT)(), C = l.useCallback(e => () => {
    o.A.blockUser(j, {
      location: b.Rx
    }).then(() => {
      v()
    }), (0, f._$)({
      channelId: t,
      warningId: _,
      senderId: j,
      warningType: g._j.STRANGER_DANGER,
      cta: e
    })
  }, [v, t, _, j]);
  l.useEffect(() => {
    (0, f.mO)(A.HAw.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: _,
      senderId: j,
      warningType: g._j.STRANGER_DANGER
    }), c.A.increment({
      name: i.K.SAFETY_WARNING_VIEW
    })
  }, [t, _, j]);
  let S = () => {
      (0, a.mMO)(async () => {
        let {
          default: e
        } = await n.e("8546").then(n.bind(n, 63865));
        return n => {
          let {
            transitionState: l,
            onClose: i
          } = n;
          return (0, r.jsx)(e, {
            transitionState: l,
            onClose: i,
            channelId: t,
            warningId: _,
            senderId: j,
            description: y.intl.string(y.t.DJMZX6),
            safetyTipRows: E.map((e, t) => (0, r.jsx)(u.B, {
              index: t,
              listType: "numbered",
              title: e
            }, t)),
            actionRows: (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(O, {
                senderId: j,
                channelId: t,
                warningId: _
              }, "more-tips-button"), (0, r.jsx)(d.PQ, {
                title: y.intl.string(y.t["5QYPO2"]),
                description: y.intl.string(y.t.G08MKu),
                buttonText: y.intl.string(y.t["5QYPO2"]),
                buttonVariant: "critical-primary",
                onButtonPress: () => {
                  i(), I(f.Wm.USER_MODAL_BLOCK_CONFIRM, f.Wm.USER_MODAL_BLOCK_CANCEL, S)
                }
              }, "block-button")]
            })
          })
        }
      })
    },
    I = (e, l, i) => {
      (0, a.mMO)(async () => {
        let {
          default: s
        } = await Promise.all([n.e("28969"), n.e("4309")]).then(n.bind(n, 219801));
        return n => {
          var a, o;
          return (0, r.jsx)(s, (a = function(e) {
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
          }({}, n), o = o = {
            userId: j,
            confirmBlock: C(e),
            onCancel: () => {
              null == i || i(), (0, f._$)({
                channelId: t,
                warningId: _,
                senderId: j,
                warningType: g._j.STRANGER_DANGER,
                cta: l
              })
            }
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(o)).forEach(function(e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(o, e))
          }), a))
        }
      })
    };
  return (0, r.jsx)(m.N, {
    channelId: t,
    warningId: _,
    senderId: j,
    warningType: g._j.STRANGER_DANGER,
    header: y.intl.string(y.t.iOkDpM),
    description: y.intl.string(y.t.ISUbcM),
    onDismiss: v,
    buttons: [{
      text: y.intl.string(y.t["Qk/c48"]),
      variant: "primary",
      onClick: () => {
        S(), (0, f._$)({
          channelId: t,
          warningId: _,
          senderId: j,
          warningType: g._j.STRANGER_DANGER,
          cta: f.Wm.OPEN_MORE_TIPS
        })
      }
    }, ...x ? [] : [{
      text: y.intl.string(y.t.ie0QdN),
      variant: "critical-primary",
      onClick: () => I(f.Wm.USER_BANNER_BLOCK_CONFIRM, f.Wm.USER_BANNER_BLOCK_CANCEL)
    }]]
  })
}