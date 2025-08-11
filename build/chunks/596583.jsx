/** Chunk was on 715 **/
/** chunk id: 596583, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  Z: () => B
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  C = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk442837 = require("./442837.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk37234 = require("./37234.js"),
  Chunk410030 = require("./410030.js"),
  Chunk518950 = require("./518950.js"),
  Chunk819640 = require("./819640.js"),
  Chunk63063 = require("./63063.js"),
  Chunk51144 = require("./51144.js"),
  Chunk281494 = require("./281494.js"),
  Chunk276444 = require("./276444.js"),
  Chunk792451 = require("./792451.js"),
  Chunk814667 = require("./814667.js"),
  Chunk263885 = require("./263885.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk974149 = require("./974149.js");
let U = (e, r) => {
    _.Z.hasLayers() && (0, c.xf)(), p.Z.openPrivateChannel({
      recipientIds: e
    }), r()
  },
  O = e => {
    let {
      user: r,
      trialCreationResult: t,
      onClose: i
    } = e, {
      avatarSrc: s,
      eventHandlers: l
    } = (0, f.Z)({
      userId: null == r ? true : r.id,
      size: d.EFr.SIZE_56
    }), n = u.ZP.getName(r), o = r.username !== n && t === j.Fz.SUCCESS, p = t === j.Fz.FAIL;
    return <div className={w.referredUserRowContainer}>{<d.qEK{...function(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {},
            a = Object.keys(t);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          }))), a.forEach(function(r) {
            var a;
            a = t[r], r in e ? Object.defineProperty(e, r, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[r] = a
          })
        }
        return e
      }({
        imageClassName: C()({
          [w.erroredAvatar]: p
        }),
        src: s,
        "aria-label": n,
        size: d.EFr.SIZE_56
      }, l)} />}{<div className={w.referredUserRowBody}>{p ? <a.Fragment>{<d.Text className={w.errorDisplayName} variant={"text-md/medium"}>{n}</d.Text>}{<d.Text variant={"text-md/medium"} className={w.userName}>{S.intl.format(S.t.RO3T4O, {
              userName: n
            })}</d.Text>}</a.Fragment> : <d.ua7 text={S.intl.string(S.t.xkVQPD)} position={"right"}>{e => {
            let {
              onMouseEnter: t,
              onMouseLeave: C
            } = e;
            return (0, a.jsx)(d.P3F, {
              onClick: () => U(r.id, i),
              className: w.displayNameClickableContainer,
              onMouseEnter: t,
              onMouseLeave: C,
              children: (0, a.jsx)(d.Text, {
                variant: "text-md/medium",
                className: w.displayName,
                children: n
              })
            })
          }}</d.ua7>}{o && <d.Text variant={"text-md/medium"} className={w.userName}>{r.username}</d.Text>}</div>}</div>
  },
  B = e => {
    let {
      selectedUsers: r,
      trialCreationResult: t,
      onClose: i
    } = e, C = [...r].map(e => <O user={e} trialCreationResult={t.get(e.id)} onClose={i} />), s = (0, n.e7)([L.Z], () => L.Z.getReferralsRemaining());
    l()(null !== s, "Referrals remaining should not be null");
    let p = (0, x.Fg)(),
      c = (0, o.ap)(p) ? y.Z : m.Z,
      f = S.intl.string(S.t.Pcb7KC),
      _ = [...t.values()].filter(e => e === j.Fz.SUCCESS).length;
    return s > 0 && (f = S.intl.formatToPlainString(S.t.iWtOfH, {
      numReferrals: _
    })), 0 === _ && (f = S.intl.string(S.t["7VBEub"])), <div className={w.confrimationContainer}>{<d.P3F onClick={i} className={w.closeButtonContainer}><d.Dio size={"custom"} width={20} height={20} /></d.P3F>}{<c className={w.headerIcon} />}{<d.X6q variant={"heading-lg/bold"} className={w.heading}>{f}</d.X6q>}{<div className={w.confirmedUserContainer}>{C}</div>}{<d.Text variant={"text-md/medium"}>{S.intl.format(S.t.CZaMHh, {
          days: g.p,
          helpdeskArticle: h.Z.getArticleURL(F.BhN.REFERRAL_PROGRAM)
        })}</d.Text>}</div>
  }