/** Chunk was on 61526 **/
/** chunk id: 674908, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk952265 = require("./952265.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk579806 = require("./579806.js"),
  Chunk357156 = require("./357156.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk594174 = require("./594174.js"),
  Chunk709054 = require("./709054.js"),
  Chunk39604 = require("./39604.js"),
  Chunk680056 = require("./680056.js"),
  Chunk678651 = require("./678651.jsx"),
  Chunk445229 = require("./445229.jsx"),
  Chunk20437 = require("./20437.js"),
  Chunk356659 = require("./356659.js"),
  Chunk710111 = require("./710111.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk612683 = require("./612683.js"),
  O = require("./413135.js").Buffer;

function S(e) {
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

function N(e, t) {
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

function E(e) {
  let {
    clip: t,
    channelId: l,
    clipName: E,
    onSetClipName: R,
    onClose: L
  } = e, {
    videoPlayerRef: T,
    cropData: F,
    voiceAudioEnabled: D,
    setVoiceAudioEnabled: I,
    applicationAudioEnabled: A,
    setApplicationAudioEnabled: Z
  } = (0, _.S)(), [B, M] = a.useState(null), {
    onShareClick: z
  } = (0, b.Z)({
    channelId: l,
    setExporting: e => M(null != e ? "share" : null)
  });
  async function H() {
    var e;
    let a = p.Z.getChannel(l);
    M("export"), null == (e = T.current) || e.pause();
    try {
      let e = await (0, x.rO)(t, N(S({}, F), {
        applicationAudio: A,
        voiceAudio: D
      }));
      (0, u.ZDy)(async () => {
        let {
          default: l
        } = await Promise.all([n.e("56035"), n.e("78356")]).then(n.bind(n, 758961)), i = (null == a ? true : a.guild_id) != null ? f.Z.getGuild(a.guild_id) : null, o = null != i && (0, m.Gw)(i, v.Z, h.default).canCreateExpressions, s = null == E || "" === E ? (0, w.yl)(g.default.extractTimestamp(t.id)) : E, u = s.slice(0, C.Ek);
        return t => (0, r.jsx)(l, N(S({}, t), {
          showGuildPicker: true,
          guildId: o ? null == a ? true : a.guild_id : true,
          sourceFile: {
            file: new File([e], "".concat(s, ".mp4"), {
              type: "video/mp4"
            }),
            name: u
          }
        }))
      })
    } catch (e) {} finally {
      M(null)
    }
  }
  async function W() {
    var e;
    M("export"), null == (e = T.current) || e.pause();
    try {
      let e = await (0, x.rO)(t, N(S({}, F), {
          applicationAudio: A,
          voiceAudio: D
        })),
        n = await e.arrayBuffer();
      await d.Z.fileManager.saveWithDialog(O.from(n), (0, w.EF)(t.id))
    } catch (e) {} finally {
      M(null)
    }
  }

  function U() {
    var e;
    null == (e = T.current) || e.pause(), (0, u.ZDy)(async () => {
      let {
        default: e
      } = await n.e("15915").then(n.bind(n, 799677));
      return n => (0, r.jsx)(e, N(S({
        clip: t
      }, n), {
        onClose: async () => {
          await n.onClose()
        },
        onAfterDelete: async () => {
          await n.onClose(), L()
        }
      }))
    })
  }
  return (0, r.jsxs)("div", {
    className: k.clipForm,
    children: [(0, r.jsxs)("div", {
      className: i()(k.clipFormSection, k.editSection),
      children: [(0, r.jsx)(u.xJW, {
        className: k.clipFormItem,
        title: P.intl.string(P.t.SJKc5u),
        children: (0, r.jsx)(u.oil, {
          onChange: e => {
            "" === e ? R(true) : R(e)
          },
          value: E,
          minLength: w.XH,
          maxLength: w.MG,
          placeholder: P.intl.string(P.t.Cyxddn)
        })
      }), (0, r.jsxs)("div", {
        className: k.clipFormSwitches,
        children: [(0, r.jsx)(u.j7V, {
          onChange: Z,
          value: A,
          hideBorder: true,
          children: P.intl.string(P.t.GnQui4)
        }), (0, r.jsx)(u.j7V, {
          onChange: I,
          value: D,
          hideBorder: true,
          children: P.intl.string(P.t["5mVOCQ"])
        })]
      })]
    }), (0, r.jsxs)("div", {
      className: i()(k.clipFormSection, k.metadataSection),
      children: [(0, r.jsx)(j.Z, {
        clip: t
      }), (0, r.jsx)(y.Z, {
        className: k.userList,
        clip: t
      })]
    }), (0, r.jsxs)("div", {
      className: k.clipFormFooter,
      children: [(0, r.jsx)(s.zx, {
        submitting: "share" === B,
        disabled: null != B && "share" !== B,
        color: s.zx.Colors.BRAND,
        wrapperClassName: k.clipFormFooterButton,
        onClick: () => z({
          clip: N(S({}, t), {
            name: E
          }),
          cropData: F,
          applicationAudioEnabled: A,
          voiceAudioEnabled: D,
          onShareComplete: () => {
            o.Mr(w.Ut), o.Mr(w.Qr)
          }
        }),
        children: P.intl.string(P.t.I8lglZ)
      }), (0, r.jsx)(s.zx, {
        size: s.zx.Sizes.ICON,
        className: k.clipFormFooterButton,
        disabled: null != B,
        wrapperClassName: i()(k.clipFormFooterButton, {
          [k.submittingWrapperFix]: null != B
        }),
        color: s.zx.Colors.PRIMARY,
        onClick: L,
        children: P.intl.string(P.t.K344S0)
      }), (0, r.jsx)(s.zx, {
        "aria-label": P.intl.string(P.t.PdRCRk),
        size: s.zx.Sizes.ICON,
        wrapperClassName: i()(k.clipFormFooterButton, {
          [k.submittingWrapperFix]: null != B
        }),
        submitting: "export" === B,
        disabled: null != B && "export" !== B,
        color: s.zx.Colors.PRIMARY,
        onClick: function(e) {
          (0, c.jW)(e, async () => {
            let {
              default: e
            } = await n.e("32157").then(n.bind(n, 151090));
            return t => (0, r.jsx)(e, N(S({}, t), {
              onExportToSoundboard: H,
              onExportToFile: W,
              onDelete: U,
              channelId: l
            }))
          })
        },
        children: (0, r.jsx)(u.xhG, {
          size: "md",
          color: "currentColor"
        })
      })]
    })]
  })
}