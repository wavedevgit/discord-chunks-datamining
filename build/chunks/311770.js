/** Chunk was on 42775 **/
r.d(t, {
  EmojiStudioModal: () => N
}), r(388685);
var n = r(255367),
  a = r(73800),
  s = r(442837),
  l = r(481060),
  i = r(80932),
  o = r(710845),
  c = r(430824),
  u = r(496675),
  d = r(914010),
  p = r(176354),
  h = r(598117),
  g = r(903759),
  m = r(746622),
  f = r(384694),
  b = r(273391),
  v = r(793972),
  x = r(981631),
  _ = r(388032),
  j = r(807179);
let O = new o.Z("EmojiStudioModal"),
  E = e => {
    let {
      userImage: t,
      guildId: r,
      back: o
    } = e, g = (0, s.e7)([c.Z, d.Z, u.Z], () => {
      let e = d.Z.getGuildId(),
        t = c.Z.getGuild(e);
      return u.Z.can(x.Plq.CREATE_GUILD_EXPRESSIONS, t) && null != t ? t.id : null
    }), [E, N] = a.useState(null != r ? r : g), [I, y] = a.useState(null), [C, w] = a.useState(""), [S, A] = a.useState(null), k = async () => {
      if (y(null), null == E) return void y(h.ze.MISSING_GUILD);
      if (null == t || (null == t ? void 0 : t.file) == null || null == S) return void y(h.ze.MISSING_IMAGE_DATA);
      try {
        await (0, i.rS)({
          image: S,
          guildId: E,
          name: C
        })
      } catch (e) {
        y((0, m.z)(e)), O.error("Failed to upload emoji.", e);
        return
      }(0, l.Mr3)(h.Hj)
    }, M = a.useRef(0), T = a.useCallback(e => {
      let {
        imageData: t,
        imageDataTimestamp: r = 0,
        error: n
      } = e, a = null;
      null != t && p.ZP.isDataTooBig(t) && (a = h.ze.TOO_BIG), y(null != n ? n : a), r < M.current || null != t && (A(t), M.current = r)
    }, []);
    return (0, n.jsxs)("main", {
      children: [(0, n.jsx)(l.X6q, {
        variant: "heading-lg/semibold",
        className: j.heading,
        children: "Add Custom Emoji"
      }), (0, n.jsx)("div", {
        className: j.editor,
        children: (0, n.jsx)(b.v, {
          file: t.file,
          imageUri: t.data,
          onUpdate: T
        })
      }), (0, n.jsxs)("footer", {
        children: [null != I && (0, n.jsx)(m.H, {
          error: I
        }), (0, n.jsxs)("div", {
          className: j.grid,
          children: [(0, n.jsxs)("div", {
            className: j.preview,
            children: [(0, n.jsx)("img", {
              src: null != S ? S : "",
              alt: "Edited"
            }), (0, n.jsx)(v.R, {
              onChange: e => {
                w(e.length < 2 ? e : p.ZP.sanitizeEmojiName(e))
              },
              value: C
            })]
          }), (0, n.jsx)(f.q, {
            onChange: N,
            selected: E
          }), (0, n.jsx)(l.zxk, {
            className: j.submit,
            onClick: k,
            fullWidth: !0,
            disabled: null == t || null == E || C.length < 2,
            children: _.intl.string(_.t.DU0dy8)
          })]
        })]
      }), (0, n.jsx)(D, {
        back: o
      })]
    })
  },
  N = e => {
    let {
      transitionState: t,
      userImage: r,
      guildId: s
    } = e, [i, o] = a.useState(r), c = a.useCallback(() => o(null), [o]), u = null == i ? l.CgR.MEDIUM : l.CgR.LARGE;
    return (0, n.jsx)(l.Y0X, {
      transitionState: t,
      size: u,
      children: (0, n.jsxs)(l.hzk, {
        scrollbarType: "none",
        className: j.modalContent,
        children: [null == i ? (0, n.jsx)(g.u, {
          setUserImage: o
        }) : (0, n.jsx)(E, {
          userImage: i,
          guildId: s,
          back: c
        }), (0, n.jsx)(l.olH, {
          onClick: () => (0, l.Mr3)(h.Hj),
          className: j.closeButton
        })]
      })
    })
  },
  D = e => {
    let {
      back: t
    } = e;
    return (0, n.jsxs)(l.zxk, {
      "aria-label": _.intl.string(_.t["13/7kZ"]),
      onClick: t,
      look: l.zxk.Looks.BLANK,
      size: l.zxk.Sizes.MIN,
      innerClassName: j.backButtonInnner,
      className: j.backButton,
      children: [(0, n.jsx)(l.j9r, {
        color: "currentColor",
        size: "xs"
      }), "Back"]
    })
  }