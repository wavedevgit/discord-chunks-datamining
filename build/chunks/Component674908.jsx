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
}

function N(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var a = Object.getOwnPropertySymbols(e);
      n.push.apply(n, a)
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
    onClose: T
  } = e, {
    videoPlayerRef: L,
    cropData: D,
    voiceAudioEnabled: F,
    setVoiceAudioEnabled: A,
    applicationAudioEnabled: I,
    setApplicationAudioEnabled: Z
  } = (0, _.S)(), [M, B] = r.useState(null), {
    onShareClick: z
  } = (0, b.Z)({
    channelId: l,
    setExporting: e => B(null != e ? "share" : null)
  });
  async function H() {
    var e;
    let r = p.Z.getChannel(l);
    B("export"), null == (e = L.current) || e.pause();
    try {
      let e = await (0, x.rO)(t, N(S({}, D), {
        applicationAudio: I,
        voiceAudio: F
      }));
      (0, u.ZDy)(async () => {
        let {
          default: l
        } = await n.e("56035").then(n.bind(n, 758961)), i = (null == r ? true : r.guild_id) != null ? f.Z.getGuild(r.guild_id) : null, o = null != i && (0, m.Gw)(i, v.Z, h.default).canCreateExpressions, s = null == E || "" === E ? (0, w.yl)(g.default.extractTimestamp(t.id)) : E, u = s.slice(0, C.Ek);
        return t => (0, a.jsx)(l, N(S({}, t), {
          showGuildPicker: true,
          guildId: o ? null == r ? true : r.guild_id : true,
          sourceFile: {
            file: new File([e], "".concat(s, ".mp4"), {
              type: "video/mp4"
            }),
            name: u
          }
        }))
      })
    } catch (e) {} finally {
      B(null)
    }
  }
  async function W() {
    var e;
    B("export"), null == (e = L.current) || e.pause();
    try {
      let e = await (0, x.rO)(t, N(S({}, D), {
          applicationAudio: I,
          voiceAudio: F
        })),
        n = await e.arrayBuffer();
      await d.Z.fileManager.saveWithDialog(O.from(n), (0, w.EF)(t.id))
    } catch (e) {} finally {
      B(null)
    }
  }

  function U() {
    var e;
    null == (e = L.current) || e.pause(), (0, u.ZDy)(async () => {
      let {
        default: e
      } = await n.e("15915").then(n.bind(n, 799677));
      return n => (0, a.jsx)(e, N(S({
        clip: t
      }, n), {
        onClose: async () => {
          await n.onClose()
        },
        onAfterDelete: async () => {
          await n.onClose(), T()
        }
      }))
    })
  }
  return (0, a.jsxs)("div", {
    className: P.clipForm,
    children: [(0, a.jsxs)("div", {
      className: i()(P.clipFormSection, P.editSection),
      children: [(0, a.jsx)(u.oil, {
        label: k.intl.string(k.t.SJKc5n),
        onChange: e => {
          "" === e ? R(true) : R(e)
        },
        value: E,
        minLength: w.XH,
        maxLength: w.MG,
        placeholder: k.intl.string(k.t.Cyxddp)
      }), (0, a.jsxs)("div", {
        className: P.clipFormSwitches,
        children: [(0, a.jsx)(u.rsf, {
          label: k.intl.string(k.t.GnQui9),
          checked: I,
          onChange: Z
        }), (0, a.jsx)(u.rsf, {
          label: k.intl.string(k.t["5mVOCb"]),
          checked: F,
          onChange: A
        })]
      })]
    }), (0, a.jsxs)("div", {
      className: i()(P.clipFormSection, P.metadataSection),
      children: [(0, a.jsx)(j.Z, {
        clip: t
      }), (0, a.jsx)(y.Z, {
        className: P.userList,
        clip: t
      })]
    }), (0, a.jsxs)("div", {
      className: P.clipFormFooter,
      children: [(0, a.jsx)(s.zx, {
        submitting: "share" === M,
        disabled: null != M && "share" !== M,
        color: s.zx.Colors.BRAND,
        wrapperClassName: P.clipFormFooterButton,
        onClick: () => z({
          clip: N(S({}, t), {
            name: E
          }),
          cropData: D,
          applicationAudioEnabled: I,
          voiceAudioEnabled: F,
          onShareComplete: () => {
            o.Mr(w.Ut), o.Mr(w.Qr)
          }
        }),
        children: k.intl.string(k.t.I8lglT)
      }), (0, a.jsx)(s.zx, {
        size: s.zx.Sizes.ICON,
        className: P.clipFormFooterButton,
        disabled: null != M,
        wrapperClassName: i()(P.clipFormFooterButton, {
          [P.submittingWrapperFix]: null != M
        }),
        color: s.zx.Colors.PRIMARY,
        onClick: T,
        children: k.intl.string(k.t.K344S7)
      }), (0, a.jsx)(s.zx, {
        "aria-label": k.intl.string(k.t.PdRCRg),
        size: s.zx.Sizes.ICON,
        wrapperClassName: i()(P.clipFormFooterButton, {
          [P.submittingWrapperFix]: null != M
        }),
        submitting: "export" === M,
        disabled: null != M && "export" !== M,
        color: s.zx.Colors.PRIMARY,
        onClick: function(e) {
          (0, c.jW)(e, async () => {
            let {
              default: e
            } = await n.e("32157").then(n.bind(n, 151090));
            return t => (0, a.jsx)(e, N(S({}, t), {
              onExportToSoundboard: H,
              onExportToFile: W,
              onDelete: U,
              channelId: l
            }))
          })
        },
        children: (0, a.jsx)(u.xhG, {
          size: "md",
          color: "currentColor"
        })
      })]
    })]
  })
}