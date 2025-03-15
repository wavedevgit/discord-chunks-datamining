/** Chunk was on 95883 **/
l.d(n, {
  default: () => b
}), l(47120);
var t = l(200651),
  r = l(192379),
  i = l(481060),
  a = l(442837),
  o = l(410030),
  s = l(430824),
  c = l(594174),
  u = l(931240),
  d = l(645896),
  m = l(603368),
  v = l(353093),
  f = l(114487),
  h = l(380365),
  x = l(981631),
  g = l(921944),
  j = l(388032),
  p = l(502841);

function b(e) {
  var n, l;
  let {
    guildId: b,
    transitionState: N,
    onClose: P
  } = e, y = (0, a.e7)([s.Z], () => s.Z.getGuild(b), [b]), C = (0, d.Cc)(null != b ? b : null), w = (0, a.e7)([c.default], () => c.default.getCurrentUser(), []), [_, k] = r.useState(!0), S = (0, o.ZP)(), O = r.useCallback(async () => {
    _ && await (0, u.nE)(b, !0, x.Sbl.CLAN_ADOPT_IDENTITY_MODAL), P(g.L.PRIMARY)
  }, [_, P, b]), T = r.useCallback(() => {
    P(g.L.DISMISS)
  }, [P]);
  r.useEffect(() => ((null == y || null == w) && P(g.L.AUTO_DISMISS), () => {}), [w, y, b, P]);
  let I = (0, m.nP)(null == C ? void 0 : null === (n = C.branding) || void 0 === n ? void 0 : n.primaryColor, [i.TVs.colors.BG_BRAND, .7]),
    Z = i.TVs.colors.BG_SURFACE_OVERLAY.resolve({
      theme: S,
      saturation: 1
    }).hex(),
    D = (0, m.nj)(I, Z, "top center"),
    L = (0, m.nP)(null == C ? void 0 : null === (l = C.branding) || void 0 === l ? void 0 : l.primaryColor, [i.TVs.colors.BG_BRAND, 1]),
    M = (0, m.$0)(I).hex(),
    z = (0, v.Zp)(y, null == w ? void 0 : w.primaryGuild);
  if (null == y || null == w) return null;
  let A = z ? j.NW.format(j.t["hyP/19"], {
      guildName: y.name
    }) : j.NW.format(j.t.h1CclZ, {
      guildName: y.name
    }),
    E = z ? j.NW.formatToPlainString(j.t["x+B7c3"], {
      guildName: y.name
    }) : j.NW.formatToPlainString(j.t.kPJowM, {
      guildName: y.name
    }),
    R = j.NW.string(j.t.re8ZPj);
  return (0, t.jsxs)(i.Y0X, {
    transitionState: N,
    size: i.CgR.SMALL,
    className: p.modal,
    children: [(0, t.jsx)(i.hzk, {
      style: D,
      children: (0, t.jsxs)("div", {
        className: p.mainContainer,
        children: [(0, t.jsxs)("div", {
          className: p.infoContainer,
          children: [(0, t.jsx)(f.Z, {
            guild: y,
            iconSize: 64
          }), (0, t.jsxs)("div", {
            className: p.headerTextContainer,
            children: [(0, t.jsx)(i.X6q, {
              variant: "heading-xl/normal",
              color: "header-primary",
              children: A
            }), (0, t.jsx)(i.Text, {
              variant: "text-sm/normal",
              color: "text-secondary",
              children: E
            })]
          })]
        }), (0, t.jsx)(h.Z, {
          guildId: b,
          isTagAdopted: _,
          onChangeUseTag: k
        })]
      })
    }), (0, t.jsxs)(i.mzw, {
      className: p.modalFooter,
      children: [(0, t.jsx)(i.zxk, {
        onClick: O,
        color: i.zxk.Colors.CUSTOM,
        look: i.zxk.Looks.FILLED,
        style: {
          backgroundColor: L,
          color: M
        },
        children: R
      }), (0, t.jsx)(i.zxk, {
        onClick: T,
        color: i.zxk.Colors.PRIMARY,
        look: i.zxk.Looks.LINK,
        children: j.NW.string(j.t.QMwUJy)
      })]
    })]
  })
}