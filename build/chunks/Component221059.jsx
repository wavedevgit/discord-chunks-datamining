/** Chunk was on 17869 **/
/** chunk id: 221059, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  e: () => E
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

function y(e) {
  let {
    senderId: t,
    channelId: n,
    warningId: i
  } = e, {
    isIgnored: s
  } = (0, a.cf)([h.A], () => ({
    isIgnored: h.A.isIgnored(t)
  }), [t]), c = r.useCallback(() => {
    (0, m._$)({
      channelId: n,
      warningId: i,
      senderId: t,
      warningType: f._j.STRANGER_DANGER,
      cta: m.Wm.USER_MODAL_IGNORE
    }), o.A.ignoreUser(t, "web_stranger_danger_more", n)
  }, [n, i, t]), u = r.useCallback(() => {
    (0, m._$)({
      channelId: n,
      warningId: i,
      senderId: t,
      warningType: f._j.STRANGER_DANGER,
      cta: m.Wm.USER_MODAL_UNIGNORE
    }), o.A.unignoreUser(t, "web_stranger_danger_more", n)
  }, [n, i, t]);
  return (0, l.jsx)(d.PQ, {
    title: _.intl.string(_.t.avyV7P),
    description: _.intl.string(_.t.naWE6W),
    buttonText: s ? _.intl.string(_.t["3SrzRT"]) : _.intl.string(_.t.avyV7P),
    onButtonPress: s ? u : c
  })
}

function E(e) {
  let {
    channelId: t,
    warningId: E,
    senderId: v
  } = e, {
    isBlocked: O
  } = (0, a.cf)([h.A], () => ({
    isBlocked: h.A.isBlocked(v)
  }), [v]), C = r.useCallback(() => {
    (0, p.xi)(t, [E])
  }, [t, E]), S = (0, A.eT)(), x = r.useCallback(e => () => {
    o.A.blockUser(v, {
      location: A.Rx
    }).then(() => {
      C()
    }), (0, m._$)({
      channelId: t,
      warningId: E,
      senderId: v,
      warningType: f._j.STRANGER_DANGER,
      cta: e
    })
  }, [C, t, E, v]);
  r.useEffect(() => {
    (0, m.mO)(b.HAw.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: E,
      senderId: v,
      warningType: f._j.STRANGER_DANGER
    }), c.A.increment({
      name: i.K.SAFETY_WARNING_VIEW
    })
  }, [t, E, v]);
  let j = () => {
      (0, s.mMO)(async () => {
        let {
          default: e
        } = await n.e("8546").then(n.bind(n, 63865));
        return n => {
          let {
            transitionState: r,
            onClose: i
          } = n;
          return (0, l.jsx)(e, {
            transitionState: r,
            onClose: i,
            channelId: t,
            warningId: E,
            senderId: v,
            description: _.intl.string(_.t.DJMZX6),
            safetyTipRows: S.map((e, t) => (0, l.jsx)(u.B, {
              index: t,
              listType: "numbered",
              title: e
            }, t)),
            actionRows: (0, l.jsxs)(l.Fragment, {
              children: [(0, l.jsx)(y, {
                senderId: v,
                channelId: t,
                warningId: E
              }, "more-tips-button"), (0, l.jsx)(d.PQ, {
                title: _.intl.string(_.t["5QYPO2"]),
                description: _.intl.string(_.t.G08MKu),
                buttonText: _.intl.string(_.t["5QYPO2"]),
                buttonVariant: "critical-primary",
                onButtonPress: () => {
                  i(), I(m.Wm.USER_MODAL_BLOCK_CONFIRM, m.Wm.USER_MODAL_BLOCK_CANCEL, j)
                }
              }, "block-button")]
            })
          })
        }
      })
    },
    I = (e, r, i) => {
      (0, s.mMO)(async () => {
        let {
          default: a
        } = await Promise.all([n.e("28969"), n.e("4309")]).then(n.bind(n, 219801));
        return n => {
          var s, o;
          return (0, l.jsx)(a, (s = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                l = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), l.forEach(function(t) {
                var l;
                l = n[t], t in e ? Object.defineProperty(e, t, {
                  value: l,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = l
              })
            }
            return e
          }({}, n), o = o = {
            userId: v,
            confirmBlock: x(e),
            onCancel: () => {
              null == i || i(), (0, m._$)({
                channelId: t,
                warningId: E,
                senderId: v,
                warningType: f._j.STRANGER_DANGER,
                cta: r
              })
            }
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var l = Object.getOwnPropertySymbols(e);
              n.push.apply(n, l)
            }
            return n
          })(Object(o)).forEach(function(e) {
            Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(o, e))
          }), s))
        }
      })
    };
  return (0, l.jsx)(g.N, {
    channelId: t,
    warningId: E,
    senderId: v,
    warningType: f._j.STRANGER_DANGER,
    header: _.intl.string(_.t.iOkDpM),
    description: _.intl.string(_.t.ISUbcM),
    onDismiss: C,
    buttons: [{
      text: _.intl.string(_.t["Qk/c48"]),
      variant: "primary",
      onClick: () => {
        j(), (0, m._$)({
          channelId: t,
          warningId: E,
          senderId: v,
          warningType: f._j.STRANGER_DANGER,
          cta: m.Wm.OPEN_MORE_TIPS
        })
      }
    }, ...O ? [] : [{
      text: _.intl.string(_.t.ie0QdN),
      variant: "critical-primary",
      onClick: () => I(m.Wm.USER_BANNER_BLOCK_CONFIRM, m.Wm.USER_BANNER_BLOCK_CANCEL)
    }]]
  })
}