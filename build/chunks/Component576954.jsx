/** Chunk was on 81985 **/
/** chunk id: 576954, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => j
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

function O(e) {
  let {
    senderId: t,
    channelId: n,
    warningId: l
  } = e, {
    isIgnored: o
  } = (0, a.cj)([p.Z], () => ({
    isIgnored: p.Z.isIgnored(t)
  }), [t]), c = i.useCallback(() => {
    (0, g.qc)({
      channelId: n,
      warningId: l,
      senderId: t,
      warningType: h.pj.STRANGER_DANGER,
      cta: g.NM.USER_MODAL_IGNORE
    }), s.Z.ignoreUser(t, "web_stranger_danger_more", n)
  }, [n, l, t]), u = i.useCallback(() => {
    (0, g.qc)({
      channelId: n,
      warningId: l,
      senderId: t,
      warningType: h.pj.STRANGER_DANGER,
      cta: g.NM.USER_MODAL_UNIGNORE
    }), s.Z.unignoreUser(t, "web_stranger_danger_more", n)
  }, [n, l, t]);
  return (0, r.jsx)(d.JZ, {
    title: v.intl.string(v.t.avyV7P),
    description: v.intl.string(v.t.naWE6W),
    buttonText: o ? v.intl.string(v.t["3SrzRT"]) : v.intl.string(v.t.avyV7P),
    onButtonPress: o ? u : c
  })
}

function j(e) {
  let {
    channelId: t,
    warningId: j,
    senderId: x
  } = e, {
    isBlocked: C
  } = (0, a.cj)([p.Z], () => ({
    isBlocked: p.Z.isBlocked(x)
  }), [x]), E = i.useCallback(() => {
    (0, f.T)(t, [j])
  }, [t, j]), S = (0, b.C2)(), _ = i.useCallback(e => () => {
    s.Z.blockUser(x, {
      location: b.zr
    }).then(() => {
      E()
    }), (0, g.qc)({
      channelId: t,
      warningId: j,
      senderId: x,
      warningType: h.pj.STRANGER_DANGER,
      cta: e
    })
  }, [E, t, j, x]);
  i.useEffect(() => {
    (0, g.MC)(y.rMx.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: j,
      senderId: x,
      warningType: h.pj.STRANGER_DANGER
    }), c.Z.increment({
      name: l.V.SAFETY_WARNING_VIEW
    })
  }, [t, j, x]);
  let I = () => {
      (0, o.ZDy)(async () => {
        let {
          default: e
        } = await n.e("59385").then(n.bind(n, 480884));
        return n => {
          let {
            transitionState: i,
            onClose: l
          } = n;
          return (0, r.jsx)(e, {
            transitionState: i,
            onClose: l,
            channelId: t,
            warningId: j,
            senderId: x,
            description: v.intl.string(v.t.DJMZX6),
            safetyTipRows: S.map((e, t) => (0, r.jsx)(u.q, {
              index: t,
              listType: "numbered",
              title: e
            }, t)),
            actionRows: (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(O, {
                senderId: x,
                channelId: t,
                warningId: j
              }, "more-tips-button"), (0, r.jsx)(d.JZ, {
                title: v.intl.string(v.t["5QYPO2"]),
                description: v.intl.string(v.t.G08MKu),
                buttonText: v.intl.string(v.t["5QYPO2"]),
                buttonVariant: "critical-primary",
                onButtonPress: () => {
                  l(), P(g.NM.USER_MODAL_BLOCK_CONFIRM, g.NM.USER_MODAL_BLOCK_CANCEL, I)
                }
              }, "block-button")]
            })
          })
        }
      })
    },
    P = (e, i, l) => {
      (0, o.ZDy)(async () => {
        let {
          default: a
        } = await Promise.all([n.e("97652"), n.e("31834")]).then(n.bind(n, 744373));
        return n => {
          var o, s;
          return (0, r.jsx)(a, (o = function(e) {
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
          }({}, n), s = s = {
            userId: x,
            confirmBlock: _(e),
            onCancel: () => {
              null == l || l(), (0, g.qc)({
                channelId: t,
                warningId: j,
                senderId: x,
                warningType: h.pj.STRANGER_DANGER,
                cta: i
              })
            }
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(s)).forEach(function(e) {
            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e))
          }), o))
        }
      })
    };
  return (0, r.jsx)(m.Q, {
    channelId: t,
    warningId: j,
    senderId: x,
    warningType: h.pj.STRANGER_DANGER,
    header: v.intl.string(v.t.iOkDpM),
    description: v.intl.string(v.t.ISUbcM),
    onDismiss: E,
    buttons: [{
      text: v.intl.string(v.t["Qk/c48"]),
      variant: "primary",
      onClick: () => {
        I(), (0, g.qc)({
          channelId: t,
          warningId: j,
          senderId: x,
          warningType: h.pj.STRANGER_DANGER,
          cta: g.NM.OPEN_MORE_TIPS
        })
      }
    }, ...C ? [] : [{
      text: v.intl.string(v.t.ie0QdN),
      variant: "critical-primary",
      onClick: () => P(g.NM.USER_BANNER_BLOCK_CONFIRM, g.NM.USER_BANNER_BLOCK_CANCEL)
    }]]
  })
}