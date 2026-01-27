/** Chunk was on 75838 **/
/** chunk id: 243258, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => S
}), require("./321073.js"), require("./896048.js"), require("./733351.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk192308 = require("./192308.js"),
  Chunk397927 = require("./397927.js"),
  Chunk843472 = require("./843472.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk911269 = require("./911269.jsx"),
  Chunk619517 = require("./619517.jsx"),
  Chunk451909 = require("./451909.js"),
  Chunk378570 = require("./378570.js"),
  Chunk223863 = require("./223863.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk31717 = require("./31717.js"),
  Chunk954571 = require("./954571.js"),
  Chunk403362 = require("./403362.js"),
  Chunk661191 = require("./661191.js"),
  Chunk518960 = require("./518960.js"),
  Chunk372684 = require("./372684.js"),
  Chunk439818 = require("./439818.js"),
  Chunk399925 = require("./399925.js"),
  Chunk74847 = require("./74847.js"),
  Chunk696016 = require("./696016.js"),
  Chunk652215 = require("./652215.js"),
  Chunk381941 = require("./381941.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk312396 = require("./312396.js");

function R(e) {
  var t;
  let {
    clips: n
  } = e, i = n[0], l = i.thumbnail, o = null;
  return "" !== l && (o = (0, r.jsx)("div", {
    className: a()(A.cR, A.JZ),
    children: (0, r.jsx)(_.Ay, {
      className: A.xn,
      src: l,
      width: 56,
      height: 56
    })
  }), n.length > 1 && (o = (0, r.jsxs)("div", {
    className: A.EW,
    children: [(0, r.jsx)(p.Ay, {
      mask: p.Ay.Masks.FORWARD_ATTACHMENT_PILE_OVERFLOW,
      width: 56,
      height: 56,
      children: o
    }), (0, r.jsxs)(c.Text, {
      className: A.mB,
      variant: "text-xs/semibold",
      color: "text-default",
      children: ["+", n.length - 1]
    })]
  }))), (0, r.jsxs)("div", {
    className: A.sq,
    children: [(0, r.jsx)("div", {
      className: A.FG,
      children: (0, r.jsxs)("div", {
        className: A.kp,
        children: [(0, r.jsx)(c.SfG, {
          size: "custom",
          width: 20,
          color: c.LU0.colors.TEXT_MUTED
        }), (0, r.jsx)(c.Text, {
          variant: "text-md/medium",
          color: "text-muted",
          children: 1 === n.length ? null != (t = i.name) ? t : E.intl.string(E.t.Cyxddp) : E.intl.formatToPlainString(E.t.SJ6pPX, {
            count: n.length
          })
        })]
      })
    }), o]
  })
}

function S(e) {
  var t, n;
  let {
    clips: l,
    analyticsLocations: a,
    onClose: p
  } = e, _ = function(e, t) {
    if (null == e) return {};
    var n, r, i, l = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
      for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
      return l
    }
    if (l = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          l = Object.getOwnPropertyNames(e);
        for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
        return i
      }(e, t), Object.getOwnPropertySymbols)
      for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (l[r] = e[r]);
    return l
  }(e, ["clips", "analyticsLocations", "onClose"]), A = i.useCallback(async (e, t, n) => {
    let {
      withMessage: r,
      transitionToDestination: i,
      closeAfterSend: u
    } = t;
    n(true);
    try {
      let t = [],
        m = [];
      for (let e of l) {
        var _;
        let n = await (0, P.VO)(e),
          r = null != (_ = e.name) ? _ : (0, T.cM)(w.default.extractTimestamp(e.id)),
          i = (0, v.A)(r);
        if (e.type === x.nQ.CLIP || e.type === x.nQ.VOICE_CLIP) {
          let r = "".concat("" !== i ? i : "clip", ".mp4");
          t.push(new File([n], r, {
            type: "video/mp4"
          })), m.push({
            clip: e
          })
        } else if (e.type === x.nQ.SCREENSHOT) {
          let e = "".concat("" !== i ? i : "screenshot", ".jpeg");
          t.push(new File([n], e, {
            type: "image/jpeg"
          })), m.push({})
        }
      }
      let A = (await Promise.all(e.map(h.pk))).filter(O.Vq).filter(e => (0, I.t)(e));
      if (0 === A.length) {
        (0, c.showToast)((0, c.createToast)(E.intl.string(E.t.iufib1), c.ToastType.FAILURE)), n(false);
        return
      }
      for (let e of (u && p(), A)) {
        let n = b.A.getChannel(e);
        if (null != n) {
          for (let e of ((0, j.R)(t, n, y.C.ChannelMessage, {
              filesMetadata: m,
              origin: "unknown:clip_share",
              requireConfirm: false
            }), l)) g.default.track(k.HAw.CLIP_SHARED, {
            location_stack: a,
            guild_id: n.guild_id,
            channel_id: n.id,
            channel_type: n.type,
            application_id: e.applicationId,
            clip_id: e.id
          });
          null != r && "" !== r.trim() && await s.A.sendMessage(n.id, d.Ay.parse(n, r), false, {
            location: C.Hx.FORWARDING
          })
        }
      }
      i && 1 === A.length && ((0, f.iN)(A[0], {
        openTextInVoiceIfVoiceChannel: true
      }), o.closeAllModals())
    } catch (e) {
      (0, c.showToast)((0, c.createToast)(E.intl.string(E.t.iufib1), c.ToastType.FAILURE))
    } finally {
      n(false)
    }
  }, [l, a, p]), S = i.useCallback(e => {
    if (e instanceof m.YB && !(0, I.t)(e.id)) return {
      label: E.intl.string(E.t.iufib1)
    }
  }, []);
  return (0, r.jsx)(u.ForwardModal, (t = function(e) {
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
  }({}, _), n = n = {
    onClose: p,
    customTitle: E.intl.string(E.t.I8lglT),
    customSubtitle: E.intl.string(E.t.Ey7mOU),
    customPreview: (0, r.jsx)(R, {
      clips: l
    }),
    customSendHandler: A,
    customValidateDestination: S
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}