/** Chunk was on 43404 **/
/** chunk id: 375727, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  I: () => T
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk33309 = require("./33309.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk80932 = require("./80932.js"),
  Chunk493773 = require("./493773.js"),
  Chunk710845 = require("./710845.js"),
  Chunk430824 = require("./430824.js"),
  Chunk496675 = require("./496675.js"),
  Chunk914010 = require("./914010.js"),
  Chunk626135 = require("./626135.js"),
  Chunk176354 = require("./176354.js"),
  Chunk598117 = require("./598117.js"),
  Chunk390620 = require("./390620.js"),
  Chunk983205 = require("./983205.js"),
  Chunk903759 = require("./903759.js"),
  Chunk746622 = require("./746622.js"),
  Chunk384694 = require("./384694.js"),
  Chunk273391 = require("./273391.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk139797 = require("./139797.js");
let w = new Chunk710845.Z("EmojiStudio"),
  T = e => {
    var t;
    let {
      userImage: n,
      guildId: i
    } = e, [h, T] = l.useState(n), k = (0, s.e7)([g.Z, x.Z, f.Z], () => {
      let e = x.Z.getGuildId(),
        t = g.Z.getGuild(e);
      return f.Z.can(O.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null
    }), [A, P] = l.useState(null != i ? i : k), [D, z] = l.useState(null), [G, L] = l.useState(null), [Z, B] = l.useState(""), [U, H] = l.useState(null), [F, V] = l.useState(() => Date.now()), J = l.useRef(0), W = l.useRef(0), Y = l.useRef(false), K = l.useCallback(e => {
      let {
        reason: t
      } = e, n = null != D ? D : G;
      p.default.track(O.rMx.EMOJI_STUDIO_ENDED, {
        reason: t,
        is_initial: 0 === J.current,
        has_image: null != h,
        error: null == n ? null : String(n),
        throttled_edit_count: W.current,
        session_duration_ms: Date.now() - F,
        has_guild_selected: null != A
      })
    }, [D, G, F, h, A]);
    (0, m.zq)(() => {
      Y.current || K({
        reason: "closed"
      })
    });
    let X = l.useCallback(async () => {
        if (z(null), null == A) return void z(b.ze.MISSING_GUILD);
        if (null == h || (null == h ? true : h.file) == null || null == U) return void z(b.ze.MISSING_IMAGE_DATA);
        let e = null;
        try {
          e = await (0, d.rS)({
            image: U,
            guildId: A,
            name: Z,
            analyticsLocation: {
              page: O.ZY5.EMOJI_STUDIO
            }
          })
        } catch (e) {
          z((0, C.z)(e)), w.error("Failed to upload emoji.", e);
          return
        }
        K({
          reason: "uploaded"
        }), Y.current = true, (0, c.Mr3)(b.Hj), (0, v.y)({
          emoji: e,
          guildId: A
        })
      }, [A, h, U, K, Z]),
      q = l.useCallback(() => {
        K({
          reason: "back_button"
        }), z(null), T(null), H(null), B(""), V(Date.now()), W.current = 0
      }, [K]),
      $ = l.useCallback(e => {
        let {
          imageData: t,
          imageDataTimestamp: n = 0,
          error: r
        } = e, l = null;
        null != t && _.ZP.isDataTooBig(t) && (l = b.ze.TOO_BIG), z(null != r ? r : l), n < J.current || null != t && (H(t), J.current = n)
      }, []),
      Q = l.useCallback(() => {
        W.current++
      }, []),
      ee = l.useCallback(e => {
        var t;
        T(e), B(t => {
          var n, r;
          if ("" !== t) return t;
          let l = null != (r = null == e || null == (n = e.file) ? true : n.name) ? r : "",
            i = l.lastIndexOf("."),
            a = false === i ? l : l.substring(0, i);
          return _.ZP.sanitizeEmojiName(a)
        }), H(null != (t = null == e ? true : e.data) ? t : null)
      }, []);
    return <main className={a()(y.main, {
        [y.checkerboard]: null != h
      })}>{<c.X6q variant={"heading-lg/medium"} color={"header-primary"} className={y.heading}>{S.intl.string(S.t.iMJO39)}</c.X6q>}{null == h ? <N.u setImage={ee} /> : <div className={y.editor}><I.v file={h.file} imageUri={h.data} onUpdate={$} onThrottledEdit={Q} /></div>}{<aside className={y.aside}>{<div className={y.preview}>{<label>{S.intl.string(S.t.JmuIb2)}</label>}{<ul>{<li><div className={y.reactions}>{<R src={U} alt={S.intl.string(S.t["zS0K+v"])} />}{<span>{"8"}</span>}</div></li>}{<li><div className={y.jumbo}><R src={U} alt={S.intl.string(S.t["tE41+f"])} /></div></li>}</ul>}</div>}{<c.xJW title={S.intl.string(S.t.m0YV7O)} required={true} tag={"label"}><j.y name={Z} onNameChange={B} /></c.xJW>}{<c.xJW title={S.intl.string(S.t["9uKafX"])} required={true} tag={"label"} titleId={"guild-selector-label"}><div className={y.guildSelectorContainer}>{<E.q onChange={P} selected={A} onError={e => L(e)} labelledBy={"guild-selector-label"} isEmojiAnimated={(0, o.v)(null == h || null == (t = h.file) ? true : t.type)} />}{null != G && <C.H error={G} variant={"text-xs/medium"} color={"text-feedback-warning"} />}{null == A && <c.Text variant={"text-xs/medium"} color={"text-tertiary"}>{S.intl.string(S.t["1pdw0N"])}</c.Text>}</div></c.xJW>}{<div className={y.foot}>{null != D && <C.H error={D} variant={"text-sm/normal"} color={"text-danger"} />}{<u.zx className={y.submit} onClick={X} fullWidth={true} disabled={null == h || null == A || Z.length < 2 || null != G}>{S.intl.string(S.t.DU0dy8)}</u.zx>}</div>}</aside>}{null != h ? <M back={q} /> : <c.olH onClick={() => (0, c.Mr3)(b.Hj)} className={y.closeButton} />}</main>
  },
  M = e => {
    let {
      back: t
    } = e;
    return <u.zx aria-label={S.intl.string(S.t["13/7kZ"])} onClick={t} look={u.zx.Looks.BLANK} innerClassName={y.backButtonInnner} className={y.backButton}><c.j9r color={"currentColor"} size={"md"} /></u.zx>
  },
  R = e => {
    let {
      src: t,
      alt: n
    } = e;
    return null == t || "" === t ? <div className={y.previewPlaceholder} /> : <img src={t} alt={n} />
  }