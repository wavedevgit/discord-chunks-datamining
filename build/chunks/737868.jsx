/** Chunk was on 39143 **/
/** chunk id: 737868, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => Z
}), require("./388685.js"), require("./953529.js"), require("./539854.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk433517 = require("./433517.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk410575 = require("./410575.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk318766 = require("./318766.jsx"),
  Chunk907040 = require("./907040.js"),
  Chunk273039 = require("./273039.jsx"),
  Chunk339085 = require("./339085.js"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk700785 = require("./700785.js"),
  Chunk995532 = require("./995532.js"),
  Chunk514698 = require("./514698.jsx"),
  Chunk845606 = require("./845606.js"),
  Chunk981631 = require("./981631.js"),
  Chunk185923 = require("./185923.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk495084 = require("./495084.js");
let Z = e => {
  var n, t;
  let {
    guildId: Z,
    welcomeChannel: w,
    transitionState: B,
    onSave: D,
    onClose: I
  } = e, z = i.useRef(null), H = (0, j.Dt)(), [L, R] = i.useState(null != w ? w.channel_id : null), [A, M] = i.useState(null != w ? w.description : ""), [W, q] = i.useState(null != w ? {
    id: w.emoji_id,
    name: w.emoji_name
  } : null), [G, K] = i.useState(false), V = (0, o.e7)([b.ZP], () => (null == W ? true : W.id) != null ? b.ZP.getUsableCustomEmojiById(W.id) : null), X = (0, o.e7)([C.ZP], () => C.ZP.getChannels(Z)[C.sH], [Z]), Y = (0, o.e7)([y.Z], () => y.Z.get(Z)), $ = null != (t = null == Y || null == (n = Y.welcome_channels) ? true : n.map(e => e.channel_id)) ? t : [], [U, F] = i.useState(false);
  i.useEffect(() => {
    r.K.get(E.S) || setTimeout(() => F(true), 300)
  }, []);
  let J = [];
  X.forEach(e => {
    let {
      channel: n
    } = e;
    N.Uu(k.Plq.VIEW_CHANNEL, n) && ((null == w ? true : w.channel_id) === n.id || !$.includes(n.id)) && J.push({
      value: n.id,
      label: (0, d.F6)(n, _.default, g.Z)
    })
  });
  let Q = () => {
      F(false), I()
    },
    ee = i.useCallback(e => M(e), []),
    en = e => {
      var n, t, l;
      if (null == e) return void q(null);
      q(null != e.id ? {
        id: null != (n = e.id) ? n : null,
        name: null != (t = e.name) ? t : null
      } : {
        id: null,
        name: null != (l = e.optionallyDiverseSequence) ? l : null
      })
    },
    et = i.useCallback(() => {
      r.K.set(E.S, true), F(false)
    }, []);
  return <u.Z page={k.ZY5.CHANNEL_WELCOME_CREATE_MODAL}><s.Y0X transitionState={B} aria-labelledby={H} parentComponent={"CreateWelcomeChannelModal"}>{<div className={T.modalContents}>{<s.olH onClick={Q} className={T.closeButton} />}{<s.X6q variant={"heading-md/semibold"} className={T.headerText} id={H}>{P.intl.string(P.t.cTghws)}</s.X6q>}{<s.hjN className={T.__invalid_formGroup}>{<s.VcW options={J} onChange={e => R(e)} value={L} renderOptionPrefix={e => {
              var n;
              if (null === e) return null;
              let t = e.value,
                i = v.Z.getChannel(t),
                o = null != (n = (0, m.KS)(i)) ? n : s.VL1;
              return (0, l.jsx)(o, {
                className: T.channelTitleIcon,
                size: "xs",
                color: "currentColor"
              })
            }} />}{<s.Text variant={"text-xs/normal"} color={"text-muted"} className={T.formDescription}>{P.intl.string(P.t.VV2929)}</s.Text>}</s.hjN>}{<s.$i$ />}{<s.X6q variant={"heading-md/semibold"} className={T.headerText}>{P.intl.string(P.t.bBw6HR)}</s.X6q>}{<s.hjN className={T.__invalid_formGroup}><a.Is maxLength={42} value={A} inputClassName={T.input} placeholder={P.intl.string(P.t.h5EOur)} onChange={ee} /></s.hjN>}{<s.$i$ />}{<s.hjN className={T.__invalid_formGroup}><div className={T.emojiSectionContainer}>{<div className={T.emojiTitleContainer}>{<s.X6q variant={"heading-md/semibold"}>{P.intl.string(P.t.HHniMT)}</s.X6q>}{<s.Text variant={"text-xs/normal"} color={"text-muted"}>{P.intl.string(P.t.c4mfl5)}</s.Text>}</div>}{<p.Z hasSetEmoji={null != W} onClick={en}><s.yRy targetElementRef={z} renderPopout={e => {
                  let {
                    closePopout: n
                  } = e, t = C.ZP.getDefaultChannel(Z);
                  return (0, l.jsx)(x.Z, {
                    guildId: Z,
                    closePopout: n,
                    onSelectEmoji: e => {
                      let {
                        emoji: t,
                        willClose: l
                      } = e;
                      en(t), l && (n(), null == t && Q())
                    },
                    pickerIntention: S.Hz.COMMUNITY_CONTENT,
                    onNavigateAway: Q,
                    channel: t
                  })
                }} position={"left"} animation={s.yRy.Animation.NONE} align={"bottom"}>{(e, n) => {
                  var t, i;
                  let {
                    isShown: o
                  } = n;
                  return (0, l.jsx)(s.DY3, {
                    color: s.FGA.BRAND,
                    tooltipClassName: T.tooltip,
                    position: "left",
                    text: U ? P.intl.string(P.t.YL3nfH) : null,
                    forceOpen: U,
                    children: (0, l.jsx)(h.Z, (t = function(e) {
                      for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                          l = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                          return Object.getOwnPropertyDescriptor(t, e).enumerable
                        }))), l.forEach(function(n) {
                          var l;
                          l = t[n], n in e ? Object.defineProperty(e, n, {
                            value: l,
                            enumerable: true,
                            configurable: true,
                            writable: true
                          }) : e[n] = l
                        })
                      }
                      return e
                    }({}, e), i = i = {
                      ref: z,
                      onClick: n => {
                        var t;
                        et(), null == (t = e.onClick) || t.call(e, n)
                      },
                      active: o,
                      className: T.emojiButton,
                      tabIndex: 0,
                      renderButtonContents: null != W && (null != W.id || null != W.name) ? () => (0, l.jsx)(c.Z, {
                        className: T.emoji,
                        emojiId: W.id,
                        emojiName: W.name,
                        animated: !!(null == V ? true : V.animated)
                      }) : null
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, n) {
                      var t = Object.keys(e);
                      if (Object.getOwnPropertySymbols) {
                        var l = Object.getOwnPropertySymbols(e);
                        t.push.apply(t, l)
                      }
                      return t
                    })(Object(i)).forEach(function(e) {
                      Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }), t))
                  })
                }}</s.yRy></p.Z>}</div></s.hjN>}</div>}{<s.mzw className={T.footer} justify={f.Z.Justify.BETWEEN}>{<f.Z grow={0} align={f.Z.Align.CENTER}><s.hE2 direction={"horizontal-reverse"}>{<s.zxk variant={"secondary"} size={"sm"} text={P.intl.string(P.t["ETE/oK"])} onClick={Q} />}{<s.zxk variant={"primary"} text={P.intl.string(P.t.R3BPHx)} onClick={() => {
                null != L && A.length > 0 && D({
                  channel_id: L,
                  description: A,
                  emoji_id: null == W ? true : W.id,
                  emoji_name: null == W ? true : W.name
                }), Q()
              }} disabled={null == L || 0 === A.length} />}</s.hE2></f.Z>}{null != w && <a.zx onClick={() => {
            K(true)
          }} size={a.zx.Sizes.MIN} look={a.zx.Looks.LINK} color={a.zx.Colors.RED}>{P.intl.string(P.t.N86XcH)}</a.zx>}</s.mzw>}{G && <O.Z onConfirm={() => {
          D(), Q()
        }} onCancel={() => K(false)} channelId={L} />}</s.Y0X></u.Z>
}