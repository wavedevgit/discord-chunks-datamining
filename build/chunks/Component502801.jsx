/** Chunk was on 25881 **/
/** chunk id: 502801, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./539854.js"), require("./388685.js"), require("./781311.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk952265 = require("./952265.js"),
  Chunk481060 = require("./481060.js"),
  Chunk904245 = require("./904245.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk930864 = require("./930864.jsx"),
  Chunk124347 = require("./124347.jsx"),
  Chunk957730 = require("./957730.js"),
  Chunk359110 = require("./359110.js"),
  Chunk987509 = require("./987509.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk703558 = require("./703558.js"),
  Chunk626135 = require("./626135.js"),
  Chunk823379 = require("./823379.js"),
  Chunk709054 = require("./709054.js"),
  Chunk127654 = require("./127654.js"),
  Chunk894694 = require("./894694.js"),
  Chunk61994 = require("./61994.js"),
  Chunk39604 = require("./39604.js"),
  Chunk407316 = require("./407316.js"),
  Chunk356659 = require("./356659.js"),
  Chunk981631 = require("./981631.js"),
  Chunk959517 = require("./959517.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk698755 = require("./698755.js");

function R(e) {
  var t;
  let {
    clips: n
  } = e, r = n[0], i = r.thumbnail, o = null;
  return "" !== i && (o = (0, a.jsx)("div", {
    className: l()(L.attachmentPreview, L.attachmentPreviewVideo),
    children: (0, a.jsx)(p.ZP, {
      className: L.thumbnail,
      src: i,
      width: 56,
      height: 56
    })
  }), n.length > 1 && (o = (0, a.jsxs)("div", {
    className: L.attachmentPreviewOverflow,
    children: [(0, a.jsx)(u.ZP, {
      mask: u.ZP.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
      width: 56,
      height: 56,
      children: o
    }), (0, a.jsxs)(c.Text, {
      className: L.overflowCount,
      variant: "text-xs/semibold",
      color: "text-default",
      children: ["+", n.length - 1]
    })]
  }))), (0, a.jsxs)("div", {
    className: L.forwardPreview,
    children: [(0, a.jsx)("div", {
      className: L.contentWrapper,
      children: (0, a.jsxs)("div", {
        className: L.attachmentRow,
        children: [(0, a.jsx)(c.g8d, {
          size: "custom",
          width: 20,
          color: c.TVs.colors.TEXT_MUTED
        }), (0, a.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "text-muted",
          children: 1 === n.length ? null != (t = r.name) ? t : k.intl.string(k.t.Cyxddp) : k.intl.formatToPlainString(k.t.SJ6pPX, {
            count: n.length
          })
        })]
      })
    }), o]
  })
}

function E(e) {
  var t, n, {
      clips: i,
      analyticsLocations: l,
      onClose: u
    } = e,
    p = function(e, t) {
      if (null == e) return {};
      var n, a, r = function(e, t) {
        if (null == e) return {};
        var n, a, r = {},
          i = Object.keys(e);
        for (a = 0; a < i.length; a++) n = i[a], t.indexOf(n) >= 0 || (r[n] = e[n]);
        return r
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var i = Object.getOwnPropertySymbols(e);
        for (a = 0; a < i.length; a++) n = i[a], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
      }
      return r
    }(e, ["clips", "analyticsLocations", "onClose"]);
  let L = r.useCallback(async (e, t, n) => {
      let {
        withMessage: a,
        transitionToDestination: r,
        closeAfterSend: d
      } = t;
      n(true);
      try {
        let t = [],
          b = [];
        for (let e of i) {
          var p;
          let n = await (0, x.rO)(e),
            a = null != (p = e.name) ? p : (0, T.yl)(v.default.extractTimestamp(e.id)),
            r = (0, j.Z)(a);
          if (e.type === P.NJ.CLIP || e.type === P.NJ.VOICE_CLIP) {
            let a = "".concat("" !== r ? r : "clip", ".mp4");
            t.push(new File([n], a, {
              type: "video/mp4"
            })), b.push({
              clip: e
            })
          } else if (e.type === P.NJ.SCREENSHOT) {
            let e = "".concat("" !== r ? r : "screenshot", ".jpeg");
            t.push(new File([n], e, {
              type: "image/jpeg"
            })), b.push({})
          }
        }
        let L = (await Promise.all(e.map(f.qx))).filter(g.lm).filter(e => (0, I.W)(e));
        if (0 === L.length) {
          (0, c.showToast)((0, c.createToast)(k.intl.string(k.t.iufib1), c.ToastType.FAILURE)), n(false);
          return
        }
        for (let e of (d && u(), L)) {
          let n = m.Z.getChannel(e);
          if (null != n) {
            for (let e of ((0, O.d)(t, n, w.d.ChannelMessage, {
                filesMetadata: b,
                origin: "unknown:clip_share",
                requireConfirm: false
              }), i)) y.default.track(C.rMx.CLIP_SHARED, {
              location_stack: l,
              guild_id: n.guild_id,
              channel_id: n.id,
              channel_type: n.type,
              application_id: e.applicationId,
              clip_id: e.id
            });
            null != a && "" !== a.trim() && await s.Z.sendMessage(n.id, h.ZP.parse(n, a), false, {
              location: S.dy.FORWARDING
            })
          }
        }
        r && 1 === L.length && ((0, _.Kh)(L[0], {
          openTextInVoiceIfVoiceChannel: true
        }), o.closeAllModals())
      } catch (e) {
        (0, c.showToast)((0, c.createToast)(k.intl.string(k.t.iufib1), c.ToastType.FAILURE))
      } finally {
        n(false)
      }
    }, [i, l, u]),
    E = r.useCallback(e => {
      if (e instanceof b.Sf && !(0, I.W)(e.id)) return {
        label: k.intl.string(k.t.iufib1)
      }
    }, []);
  return (0, a.jsx)(d.ForwardModal, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        a = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), a.forEach(function(t) {
        var a;
        a = n[t], t in e ? Object.defineProperty(e, t, {
          value: a,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = a
      })
    }
    return e
  }({}, p), n = n = {
    onClose: u,
    customTitle: k.intl.string(k.t.I8lglT),
    customSubtitle: k.intl.string(k.t.Ey7mOU),
    customPreview: (0, a.jsx)(R, {
      clips: i
    }),
    customSendHandler: L,
    customValidateDestination: E
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}