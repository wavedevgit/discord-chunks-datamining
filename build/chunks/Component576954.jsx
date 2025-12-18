/** Chunk was on 40184 **/
/** chunk id: 576954, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => x
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

function v(e) {
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
      warningType: h.pj.STRANGER_DANGER,
      cta: m.NM.USER_MODAL_IGNORE
    }), s.Z.ignoreUser(t, "web_stranger_danger_more", n)
  }, [n, l, t]), u = r.useCallback(() => {
    (0, m.qc)({
      channelId: n,
      warningId: l,
      senderId: t,
      warningType: h.pj.STRANGER_DANGER,
      cta: m.NM.USER_MODAL_UNIGNORE
    }), s.Z.unignoreUser(t, "web_stranger_danger_more", n)
  }, [n, l, t]);
  return (0, i.jsx)(d.JZ, {
    title: C.intl.string(C.t.avyV7P),
    description: C.intl.string(C.t.naWE6W),
    buttonText: o ? C.intl.string(C.t["3SrzRT"]) : C.intl.string(C.t.avyV7P),
    onButtonPress: o ? u : c
  })
}

function x(e) {
  let {
    channelId: t,
    warningId: x,
    senderId: O
  } = e, {
    isBlocked: E
  } = (0, a.cj)([p.Z], () => ({
    isBlocked: p.Z.isBlocked(O)
  }), [O]), j = r.useCallback(() => {
    (0, f.T)(t, [x])
  }, [t, x]), S = (0, b.C2)(), _ = r.useCallback(e => () => {
    s.Z.blockUser(O, {
      location: b.zr
    }).then(() => {
      j()
    }), (0, m.qc)({
      channelId: t,
      warningId: x,
      senderId: O,
      warningType: h.pj.STRANGER_DANGER,
      cta: e
    })
  }, [j, t, x, O]);
  r.useEffect(() => {
    (0, m.MC)(y.rMx.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: x,
      senderId: O,
      warningType: h.pj.STRANGER_DANGER
    }), c.Z.increment({
      name: l.V.SAFETY_WARNING_VIEW
    })
  }, [t, x, O]);
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
            warningId: x,
            senderId: O,
            description: C.intl.string(C.t.DJMZX6),
            safetyTipRows: S.map((e, t) => (0, i.jsx)(u.q, {
              index: t,
              listType: "numbered",
              title: e
            }, t)),
            actionRows: (0, i.jsxs)(i.Fragment, {
              children: [(0, i.jsx)(v, {
                senderId: O,
                channelId: t,
                warningId: x
              }, "more-tips-button"), (0, i.jsx)(d.JZ, {
                title: C.intl.string(C.t["5QYPO2"]),
                description: C.intl.string(C.t.G08MKu),
                buttonText: C.intl.string(C.t["5QYPO2"]),
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
        } = await Promise.all([n.e("97652"), n.e("31834")]).then(n.bind(n, 744373));
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
            confirmBlock: _(e),
            onCancel: () => {
              null == l || l(), (0, m.qc)({
                channelId: t,
                warningId: x,
                senderId: O,
                warningType: h.pj.STRANGER_DANGER,
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
    warningId: x,
    senderId: O,
    warningType: h.pj.STRANGER_DANGER,
    header: C.intl.string(C.t.iOkDpM),
    description: C.intl.string(C.t.ISUbcM),
    onDismiss: j,
    buttons: [{
      text: C.intl.string(C.t["Qk/c48"]),
      variant: "primary",
      onClick: () => {
        P(), (0, m.qc)({
          channelId: t,
          warningId: x,
          senderId: O,
          warningType: h.pj.STRANGER_DANGER,
          cta: m.NM.OPEN_MORE_TIPS
        })
      }
    }, ...E ? [] : [{
      text: C.intl.string(C.t.ie0QdN),
      variant: "critical-primary",
      onClick: () => I(m.NM.USER_BANNER_BLOCK_CONFIRM, m.NM.USER_BANNER_BLOCK_CANCEL)
    }]]
  })
}