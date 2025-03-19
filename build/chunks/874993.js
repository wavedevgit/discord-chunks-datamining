/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => E
}), n(47120), n(86693), n(536091), n(266796);
var r = n(200651),
  i = n(192379),
  s = n(442837),
  a = n(692547),
  l = n(481060),
  o = n(999382),
  c = n(279542),
  A = n(823379),
  d = n(63063),
  u = n(426563),
  g = n(727072),
  f = n(85960),
  m = n(577330),
  p = n(65912),
  h = n(51248),
  C = n(546513),
  b = n(572456),
  v = n(273504),
  x = n(981631),
  N = n(388032),
  j = n(885189);

function E(e) {
  var t, n;
  let {
    guildId: E,
    setPreventNavigation: I = () => {}
  } = e, {
    editingRule: O,
    setEditingRule: y
  } = (0, p.V)(), {
    guild: w,
    subsection: P
  } = (0, s.cj)([o.Z], () => o.Z.getProps()), B = null !== (n = null !== (t = null == w ? void 0 : w.id) && void 0 !== t ? t : E) && void 0 !== n ? n : x.lds, D = null != O, [T] = (0, g.RD)(B), {
    rulesByTriggerType: S
  } = (0, g.pH)(B), L = {
    [f.vh.MEMBERS]: N.NW.string(N.t.sx4E5u),
    [f.vh.CONTENT]: N.NW.string(N.t.fphZb2)
  }, R = i.useMemo(() => Object.values(null != S ? S : {}).flat().filter(A.lm), [S]), Q = {
    isInEditMode: D,
    setEditingRule: y
  }, Z = i.useRef(Q);
  i.useEffect(() => {
    Z.current = Q
  }), i.useEffect(() => {
    let {
      isInEditMode: e,
      setEditingRule: t
    } = Z.current;
    e && t(null)
  }, [B]);
  let W = i.useCallback((e, t) => {
      if (null != e) {
        var n, r;
        return null !== (r = null === (n = R.find(t => {
          let {
            id: n
          } = t;
          return n === e
        })) || void 0 === n ? void 0 : n.name) && void 0 !== r ? r : null
      }
      return null != t ? f.I6[t].getDefaultRuleName() : null
    }, [R]),
    k = i.useMemo(() => {
      var e, t;
      return W(null !== (e = null == O ? void 0 : O.id) && void 0 !== e ? e : null, null !== (t = null == O ? void 0 : O.triggerType) && void 0 !== t ? t : null)
    }, [W, O]);
  i.useEffect(() => {
    I(D, (0, b.af)(k))
  }, [I, D, k]);
  let M = (0, f.Z6)(B),
    _ = e => (0, r.jsx)(r.Fragment, {
      children: e.map(e => {
        var t;
        return (0, r.jsx)(C.Z, {
          guildId: B,
          triggerType: e,
          rules: null !== (t = S[e]) && void 0 !== t ? t : [],
          initWithEdit: P === x.KsC.AUTOMOD_MENTION_SPAM && e === v.fX.MENTION_SPAM
        }, e)
      })
    });
  return (0, r.jsxs)(l.hjN, {
    title: N.NW.string(N.t.uRelg4),
    tag: "h1",
    children: [(0, r.jsxs)("div", {
      className: j.descriptionContainer,
      children: [(0, r.jsxs)(l.hjN, {
        tag: "h3",
        className: j.description,
        titleClassName: j.descriptionHeader,
        children: [(0, r.jsx)(l.Text, {
          variant: "text-md/medium",
          color: "header-secondary",
          children: N.NW.string(N.t.EwuSCQ)
        }), (0, r.jsx)(l.Text, {
          variant: "text-sm/medium",
          className: j.helpUrl,
          children: N.NW.format(N.t["B+sgGh"], {
            helpUrl: d.Z.getArticleURL(x.BhN.GUILD_AUTOMOD_BLOCKED_MESSAGE)
          })
        })]
      }), (0, r.jsxs)("div", {
        className: j.descriptionAvatarContainer,
        children: [(0, r.jsx)(l.qEK, {
          src: (0, u.j)(),
          size: l.EFr.SIZE_80,
          "aria-label": N.NW.string(N.t.hG1StL)
        }), (0, r.jsx)(l.IGR, {
          text: (0, r.jsxs)("div", {
            className: j.automodBadgeText,
            children: [(0, r.jsx)(l.sV5, {
              size: "xxs",
              color: "currentColor",
              className: j.checkmarkIcon
            }), (0, r.jsx)(l.Text, {
              variant: "text-xs/bold",
              className: j.automodText,
              children: N.NW.string(N.t.hG1StL)
            })]
          }),
          color: a.Z.unsafe_rawColors.BRAND_500.css,
          className: j.textBadge
        })]
      })]
    }), T ? (0, r.jsx)(m.Z, {}) : Object.entries(M).map(e => {
      let [t, n] = e;
      if (0 === n.length) return (0, r.jsx)(i.Fragment, {}, t);
      let s = null != L[t] ? (0, r.jsx)(l.hjN, {
        tag: "h3",
        className: j.categoryHeader,
        children: (0, r.jsx)(l.Text, {
          variant: "text-lg/normal",
          color: "header-primary",
          children: L[t]
        })
      }) : null;
      return (0, r.jsxs)("div", {
        className: j.categoryContainer,
        children: [s, _(n)]
      }, t)
    }), null != w && (0, r.jsx)(c.k0, {
      guild: w,
      withDivider: !1,
      className: j.explicitContentFilterSection
    }), (0, r.jsx)(h.Z, {
      guildId: B,
      existingRules: R
    }), D && (0, r.jsx)("div", {
      className: j.endSpacer
    })]
  })
}