/** Chunk was on web.js **/
/** chunk id: 576954, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function O(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      y(e, t, n[t])
    })
  }
  return e
}

function v(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function I(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : v(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function T(e) {
  let {
    senderId: t,
    channelId: n,
    warningId: o
  } = e, {
    isIgnored: s
  } = (0, a.cj)([f.Z], () => ({
    isIgnored: f.Z.isIgnored(t)
  }), [t]), c = i.useCallback(() => {
    (0, h.qc)({
      channelId: n,
      warningId: o,
      senderId: t,
      warningType: p.pj.STRANGER_DANGER,
      cta: h.NM.USER_MODAL_IGNORE
    }), l.Z.ignoreUser(t, "web_stranger_danger_more", n)
  }, [n, o, t]), u = i.useCallback(() => {
    (0, h.qc)({
      channelId: n,
      warningId: o,
      senderId: t,
      warningType: p.pj.STRANGER_DANGER,
      cta: h.NM.USER_MODAL_UNIGNORE
    }), l.Z.unignoreUser(t, "web_stranger_danger_more", n)
  }, [n, o, t]);
  return (0, r.jsx)(d.JZ, {
    title: b.intl.string(b.t.avyV7O),
    description: b.intl.string(b.t.naWE6e),
    buttonText: s ? b.intl.string(b.t["3SrzRU"]) : b.intl.string(b.t.avyV7O),
    onButtonPress: s ? u : c
  })
}

function S(e) {
  let {
    channelId: t,
    warningId: y,
    senderId: v
  } = e, {
    isBlocked: S
  } = (0, a.cj)([f.Z], () => ({
    isBlocked: f.Z.isBlocked(v)
  }), [v]), A = i.useCallback(() => {
    (0, _.T)(t, [y])
  }, [t, y]), N = (0, g.C2)(), C = i.useCallback(e => () => {
    l.Z.blockUser(v, {
      location: g.zr
    }).then(() => {
      A()
    }), (0, h.qc)({
      channelId: t,
      warningId: y,
      senderId: v,
      warningType: p.pj.STRANGER_DANGER,
      cta: e
    })
  }, [A, t, y, v]);
  i.useEffect(() => {
    (0, h.MC)(E.rMx.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: y,
      senderId: v,
      warningType: p.pj.STRANGER_DANGER
    }), c.Z.increment({
      name: o.V.SAFETY_WARNING_VIEW
    })
  }, [t, y, v]);
  let R = () => {
      P(), (0, h.qc)({
        channelId: t,
        warningId: y,
        senderId: v,
        warningType: p.pj.STRANGER_DANGER,
        cta: h.NM.OPEN_MORE_TIPS
      })
    },
    P = () => {
      (0, s.ZDy)(async () => {
        let {
          default: e
        } = await n.e("59385").then(n.bind(n, 480884));
        return n => {
          let {
            transitionState: i,
            onClose: o
          } = n;
          return (0, r.jsx)(e, {
            transitionState: i,
            onClose: o,
            channelId: t,
            warningId: y,
            senderId: v,
            description: b.intl.string(b.t.DJMZX1),
            safetyTipRows: N.map((e, t) => (0, r.jsx)(u.q, {
              index: t,
              listType: "numbered",
              title: e
            }, t)),
            actionRows: (0, r.jsxs)(r.Fragment, {
              children: [(0, r.jsx)(T, {
                senderId: v,
                channelId: t,
                warningId: y
              }, "more-tips-button"), (0, r.jsx)(d.JZ, {
                title: b.intl.string(b.t["5QYPOz"]),
                description: b.intl.string(b.t.G08MKi),
                buttonText: b.intl.string(b.t["5QYPOz"]),
                buttonVariant: "critical-primary",
                onButtonPress: () => {
                  o(), w(h.NM.USER_MODAL_BLOCK_CONFIRM, h.NM.USER_MODAL_BLOCK_CANCEL, P)
                }
              }, "block-button")]
            })
          })
        }
      })
    },
    w = (e, i, o) => {
      (0, s.ZDy)(async () => {
        let {
          default: a
        } = await Promise.all([n.e("97652"), n.e("92842")]).then(n.bind(n, 744373));
        return n => (0, r.jsx)(a, I(O({}, n), {
          userId: v,
          confirmBlock: C(e),
          onCancel: () => {
            null == o || o(), (0, h.qc)({
              channelId: t,
              warningId: y,
              senderId: v,
              warningType: p.pj.STRANGER_DANGER,
              cta: i
            })
          }
        }))
      })
    };
  return (0, r.jsx)(m.Q, {
    channelId: t,
    warningId: y,
    senderId: v,
    warningType: p.pj.STRANGER_DANGER,
    header: b.intl.string(b.t.iOkDpK),
    description: b.intl.string(b.t.ISUbcH),
    onDismiss: A,
    buttons: [{
      text: b.intl.string(b.t["Qk/c4+"]),
      variant: "primary",
      onClick: R
    }, ...S ? [] : [{
      text: b.intl.string(b.t.ie0QdH),
      variant: "critical-primary",
      onClick: () => w(h.NM.USER_BANNER_BLOCK_CONFIRM, h.NM.USER_BANNER_BLOCK_CANCEL)
    }]]
  })
}