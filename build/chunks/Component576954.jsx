/** Chunk was on 73755 **/
/** chunk id: 576954, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => v
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk286379 = require("./286379.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk797614 = require("./797614.js"),
  Chunk819557 = require("./819557.jsx"),
  Chunk138201 = require("./138201.jsx"),
  Chunk699516 = require("./699516.js"),
  Chunk378298 = require("./378298.js"),
  Chunk359119 = require("./359119.js"),
  Chunk473092 = require("./473092.js"),
  Chunk177342 = require("./177342.jsx"),
  Chunk134612 = require("./134612.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function _(e) {
  let {
    senderId: t,
    channelId: n,
    warningId: l
  } = e, {
    isIgnored: o
  } = (0, a.cj)([p.Z], () => ({
    isIgnored: p.Z.isIgnored(t)
  }), [t]), c = r.useCallback(() => {
    (0, m.qc)({
      channelId: n,
      warningId: l,
      senderId: t,
      warningType: f.pj.STRANGER_DANGER,
      cta: m.NM.USER_MODAL_IGNORE
    }), s.Z.ignoreUser(t, "web_stranger_danger_more", n)
  }, [n, l, t]), u = r.useCallback(() => {
    (0, m.qc)({
      channelId: n,
      warningId: l,
      senderId: t,
      warningType: f.pj.STRANGER_DANGER,
      cta: m.NM.USER_MODAL_UNIGNORE
    }), s.Z.unignoreUser(t, "web_stranger_danger_more", n)
  }, [n, l, t]);
  return (0, i.jsx)(d.JZ, {
    title: y.intl.string(y.t.avyV7P),
    description: y.intl.string(y.t.naWE6W),
    buttonText: o ? y.intl.string(y.t["3SrzRT"]) : y.intl.string(y.t.avyV7P),
    onButtonPress: o ? u : c
  })
}

function v(e) {
  let {
    channelId: t,
    warningId: v,
    senderId: O
  } = e, {
    isBlocked: x
  } = (0, a.cj)([p.Z], () => ({
    isBlocked: p.Z.isBlocked(O)
  }), [O]), E = r.useCallback(() => {
    (0, h.T)(t, [v])
  }, [t, v]), j = (0, b.C2)(), S = r.useCallback(e => () => {
    s.Z.blockUser(O, {
      location: b.zr
    }).then(() => {
      E()
    }), (0, m.qc)({
      channelId: t,
      warningId: v,
      senderId: O,
      warningType: f.pj.STRANGER_DANGER,
      cta: e
    })
  }, [E, t, v, O]);
  r.useEffect(() => {
    (0, m.MC)(C.rMx.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: v,
      senderId: O,
      warningType: f.pj.STRANGER_DANGER
    }), c.Z.increment({
      name: l.V.SAFETY_WARNING_VIEW
    })
  }, [t, v, O]);
  let P = () => {
      (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("59385").then(n.bind(n, 480884));
        return n => {
          let {
            transitionState: r,
            onClose: l
          } = n;
          return (0, i.jsx)(e, {
            transitionState: r,
            onClose: l,
            channelId: t,
            warningId: v,
            senderId: O,
            description: y.intl.string(y.t.DJMZX6),
            safetyTipRows: j.map((e, t) => (0, i.jsx)(u.q, {
              index: t,
              listType: "numbered",
              title: e
            }, t)),
            actionRows: (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(_, {
                senderId: O,
                channelId: t,
                warningId: v
              }, "more-tips-button"), (0, i.jsx)(d.JZ, {
                title: y.intl.string(y.t["5QYPO2"]),
                description: y.intl.string(y.t.G08MKu),
                buttonText: y.intl.string(y.t["5QYPO2"]),
                buttonVariant: "critical-primary",
                onButtonPress: () => {
                  l(), I(m.NM.USER_MODAL_BLOCK_CONFIRM, m.NM.USER_MODAL_BLOCK_CANCEL, P)
                }
              }, "block-button")]
            })
          })
        }
      })
    },
    I = (e, r, l) => {
      (0, o.ZDy)(async () => {
        let {
          default: a
        } = await Promise.all([n.e("97652"), n.e("72442")]).then(n.bind(n, 744373));
        return n => {
          var o, s;
          return (0, i.jsx)(a, (o = function(e) {
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
          }({}, n), s = s = {
            userId: O,
            confirmBlock: S(e),
            onCancel: () => {
              null == l || l(), (0, m.qc)({
                channelId: t,
                warningId: v,
                senderId: O,
                warningType: f.pj.STRANGER_DANGER,
                cta: r
              })
            }
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var i = Object.getOwnPropertySymbols(e);
              n.push.apply(n, i)
            }
            return n
          })(Object(s)).forEach(function(e) {
            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e))
          }), o))
        }
      })
    };
  return (0, i.jsx)(g.Q, {
    channelId: t,
    warningId: v,
    senderId: O,
    warningType: f.pj.STRANGER_DANGER,
    header: y.intl.string(y.t.iOkDpM),
    description: y.intl.string(y.t.ISUbcM),
    onDismiss: E,
    buttons: [{
      text: y.intl.string(y.t["Qk/c48"]),
      variant: "primary",
      onClick: () => {
        P(), (0, m.qc)({
          channelId: t,
          warningId: v,
          senderId: O,
          warningType: f.pj.STRANGER_DANGER,
          cta: m.NM.OPEN_MORE_TIPS
        })
      }
    }, ...x ? [] : [{
      text: y.intl.string(y.t.ie0QdN),
      variant: "critical-primary",
      onClick: () => I(m.NM.USER_BANNER_BLOCK_CONFIRM, m.NM.USER_BANNER_BLOCK_CANCEL)
    }]]
  })
}